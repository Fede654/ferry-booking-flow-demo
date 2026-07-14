(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.HERJOLFUR_MOCK_AVAILABILITY = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const DIRECTIONS = {
    LAN_TO_VEY: {
      origin: "Landeyjahofn",
      destination: "Vestmannaeyjar",
      departures: ["08:15", "10:45", "13:15", "15:45", "18:15", "20:45", "23:15"],
    },
    VEY_TO_LAN: {
      origin: "Vestmannaeyjar",
      destination: "Landeyjahofn",
      departures: ["07:00", "09:30", "12:00", "14:30", "17:00", "19:30", "22:00"],
    },
  };

  const VEHICLE_CATEGORIES = [
    { key: "bicycle", label: "Bicycle", baseCapacity: 20 },
    { key: "motorcycle", label: "Motorcycle", baseCapacity: 12 },
    { key: "car_under_5m", label: "Car under 5 m", baseCapacity: 36 },
    { key: "car_over_5m", label: "Car over 5 m", baseCapacity: 16 },
    { key: "car_trailer_5_10m", label: "Car with trailer, 5-10 m", baseCapacity: 8 },
    { key: "car_trailer_10_16m", label: "Car with trailer, 10-16 m", baseCapacity: 3 },
  ];

  const DAY_SCENARIOS = [
    "mixed_availability",
    "fully_available",
    "limited_capacity",
    "category_sellouts",
    "sold_out_sailings",
    "cancelled_and_disrupted",
    "boundary_capacity",
  ];

  function localDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function addDays(date, amount) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
  }

  function statusFor(remaining, cancelled) {
    if (cancelled) return "cancelled";
    if (remaining === 0) return "sold_out";
    if (remaining <= 2) return "limited";
    return "available";
  }

  function remainingFor(dayOffset, sailingIndex, categoryIndex, baseCapacity) {
    switch (dayOffset) {
      case 0:
        return Math.max(0, baseCapacity - ((sailingIndex * 3 + categoryIndex * 5) % (baseCapacity + 1)));
      case 1:
        return baseCapacity;
      case 2:
        return Math.min(baseCapacity, 1 + ((sailingIndex + categoryIndex) % 2));
      case 3:
        return categoryIndex >= 4 || (categoryIndex === 3 && sailingIndex % 2 === 0)
          ? 0
          : Math.max(3, Math.floor(baseCapacity / 2));
      case 4:
        return sailingIndex === 2 || sailingIndex === 5 ? 0 : Math.max(3, Math.floor(baseCapacity / 3));
      case 5:
        return sailingIndex === 3 ? 0 : Math.max(3, Math.floor(baseCapacity / 2));
      case 6:
        return (sailingIndex + categoryIndex) % 3 === 0 ? 1 : 0;
      default:
        return baseCapacity;
    }
  }

  function createMockAvailability(dayZero) {
    const start = dayZero instanceof Date && !Number.isNaN(dayZero.valueOf()) ? dayZero : new Date();
    const days = [];

    for (let dayOffset = 0; dayOffset < 7; dayOffset += 1) {
      const date = addDays(start, dayOffset);
      const sailings = [];

      Object.entries(DIRECTIONS).forEach(([direction, route]) => {
        route.departures.forEach((departureTime, sailingIndex) => {
          const cancelled = dayOffset === 5 && sailingIndex === 3;
          const disruption = dayOffset === 5 && sailingIndex === 4;
          const vehicleAvailability = {};

          VEHICLE_CATEGORIES.forEach((category, categoryIndex) => {
            const remaining = cancelled
              ? 0
              : remainingFor(dayOffset, sailingIndex, categoryIndex, category.baseCapacity);

            vehicleAvailability[category.key] = {
              remaining,
              status: statusFor(remaining, cancelled),
              highVehicleAccepted: !cancelled && categoryIndex >= 2 && sailingIndex % 3 !== 0,
            };
          });

          sailings.push({
            id: `${localDateKey(date)}_${direction}_${departureTime.replace(":", "")}`,
            direction,
            origin: route.origin,
            destination: route.destination,
            operator: "Herjolfur",
            departureTime,
            serviceStatus: cancelled ? "cancelled" : disruption ? "delayed" : "scheduled",
            delayMinutes: disruption ? 30 : 0,
            vehicleAvailability,
          });
        });
      });

      days.push({
        dayOffset,
        date: localDateKey(date),
        scenario: DAY_SCENARIOS[dayOffset],
        sailings,
      });
    }

    return {
      generatedAt: new Date().toISOString(),
      dayZero: localDateKey(start),
      days,
    };
  }

  function findAvailability(matrix, date, direction, departureTime, category) {
    const day = matrix.days.find((item) => item.date === date);
    const sailing = day && day.sailings.find(
      (item) => item.direction === direction && item.departureTime === departureTime
    );
    return sailing ? sailing.vehicleAvailability[category] || null : null;
  }

  const matrix = createMockAvailability();

  return {
    DIRECTIONS,
    VEHICLE_CATEGORIES,
    DAY_SCENARIOS,
    matrix,
    createMockAvailability,
    findAvailability,
  };
});
