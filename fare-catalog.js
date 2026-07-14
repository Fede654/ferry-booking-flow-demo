(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.HERJOLFUR_FARES = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const catalog = Object.freeze({
    version: "2026.1",
    source: "https://herjolfur.is/en/prices/",
    validFrom: "2026-01-01",
    currency: "ISK",
    pricesArePerLeg: true,
    passengers: Object.freeze({ adult: 2700, teenSenior: 1350, child: 0 }),
    vehicles: Object.freeze({
      bicycle: 420,
      motorcycle: 2700,
      car_under_5m: 4050,
      car_over_5m: 5400,
      car_trailer_5_10m: 8100,
      car_trailer_10_16m: 10800,
    }),
    extras: Object.freeze({ bunk: 1080, cabinFourPerson: 6500 }),
  });

  function nonNegativeInteger(value) {
    const number = Number(value);
    return Number.isInteger(number) && number > 0 ? number : 0;
  }

  function calculateFare({ passengers = {}, vehicleCategory = "none", legs = 1, extras = {} } = {}) {
    const legCount = Math.max(1, nonNegativeInteger(legs));
    const passengerPerLeg = Object.entries(catalog.passengers).reduce(
      (total, [key, price]) => total + price * nonNegativeInteger(passengers[key]),
      0
    );
    const vehiclePerLeg = vehicleCategory === "none" ? 0 : catalog.vehicles[vehicleCategory];
    if (vehiclePerLeg === undefined) throw new RangeError(`Unknown vehicle category: ${vehicleCategory}`);

    const extrasTotal = Object.entries(extras).reduce((total, [key, quantity]) => {
      if (catalog.extras[key] === undefined) throw new RangeError(`Unknown extra: ${key}`);
      return total + catalog.extras[key] * nonNegativeInteger(quantity);
    }, 0);

    return {
      catalogVersion: catalog.version,
      currency: catalog.currency,
      legs: legCount,
      passengerPerLeg,
      vehiclePerLeg,
      extrasTotal,
      total: (passengerPerLeg + vehiclePerLeg) * legCount + extrasTotal,
    };
  }

  return { catalog, calculateFare };
});
