const routes = {
  "landeyjahofn-vestmannaeyjar": ["Landeyjahöfn", "Vestmannaeyjar"],
  "vestmannaeyjar-landeyjahofn": ["Vestmannaeyjar", "Landeyjahöfn"],
};

// Icelandic needs the genitive for "ferð til X"; declared with `routes` because
// route text is rendered during initialisation, before the bottom of this file runs.
const icelandicGenitive = {
  "Vestmannaeyjar": "Vestmannaeyja",
  "Landeyjahöfn": "Landeyjahafnar",
};

const copy = {
  en: {
    localExtraction: "Herjólfur",
    pageTitle: "Travel to Vestmannaeyjar",
    pageHeading: "Travel to Vestmanna­eyjar",
    pageCopy: "Choose your dates, passengers and vehicle to see available sailings.",
    editSearch: "Edit search",
    closeSearch: "Close",
    searchTrips: "Search trips",
    bothWays: "Both ways",
    oneWay: "One way",
    trip1: "Trip 1",
    trip2: "Trip 2",
    departure: "Departure",
    return: "Return",
    bookTrip: "Book trip",
    handoffEyebrow: "Secure booking",
    subsequentSteps: "Complete your booking",
    passengers: "Passengers",
    vehicles: "Vehicles",
    trips: "Trips",
    information: "Information",
    payment: "Payment",
    switchPorts: "Switch ports",
    trip: "Trip",
    passenger: "Passenger",
    adult: "Adult",
    teenSenior: "Teenagers aged 12-15, senior citizens",
    children: "Children under 12",
    testingMode: "Testing mode — skip required fields",
    testingModeUrlHint: "Forced on by ?skipValidation in the URL. Remove it to use this switch.",
    typeAdult: "Adult",
    typeTeenSenior: "Teen / senior",
    typeChild: "Child",
    differentReturnCount: "Return trip has a different number of passengers",
    rosterHint: "Details are collected once for {count} {noun} — the larger of the two trips.",
    passengerNoun: "passenger",
    passengersNoun: "passengers",
    fareBreakdown: "Price breakdown",
    fareLegLine: "{trip}: {detail}",
    fareVehicleLine: "Vehicle",
    farePerLeg: "per trip",
    loginTitle: "Sign in to my pages",
    loginCopy: "Did you know that you can save travel partners, change bookings, and download boarding passes on my pages.",
    signIn: "Sign in",
    continue: "Continue",
    back: "Back",
    vehiclesSubcopy: "Choose whether this booking includes vehicle capacity.",
    withoutVehicleTitle: "Continue without vehicle",
    withoutVehicleCopy: "Passenger-only booking.",
    addVehicle: "Add vehicle",
    addVehicleCopy: "Add a car, bicycle, or motorcycle.",
    addAnotherVehicle: "Add another vehicle",
    remove: "Remove",
    car: "Car",
    bicycle: "Bicycle",
    motorcycle: "Motorcycle",
    length: "Length:",
    lengthTrailer: "Length w/trailer:",
    trailerCheck: "I have a trailer attached to the car (trailer, caravan, etc.)",
    highVehicleCheck: "The car and/or trailer is higher than 2.10 m",
    departureTime: "Departure time",
    arrivalTime: "Arrival time",
    soldOut: "Sold out",
    informationSubcopy: "Enter the details of everyone travelling. They must match the ID shown at check-in.",
    passenger1: "Passenger 1",
    firstName: "First name",
    lastName: "Last name",
    birthdate: "Date of birth",
    birthdatePlaceholder: "dd/mm/yyyy",
    nationality: "Nationality",
    nationalityPlaceholder: "Iceland",
    disabled: "Passenger with a disability",
    addPassenger: "Add passenger",
    add: "Add",
    contactInfo: "Contact information",
    email: "Email",
    phone: "Phone number",
    cardInfo: "Card information",
    cardNumber: "Card number",
    cardName: "Name",
    terms: "I agree to the terms and conditions of Herjólfs ohf. and have read the company's privacy policy.",
    newsletter: "Subscribe to newsletter",
    confirmBooking: "Confirm booking",
    bookingNumber: "Booking HRJ-2048",
    successTitle: "Thank you for your order!",
    successEmail: "A confirmation email has been sent to the address provided.",
    successContact: "If you have any questions, please contact us by phone 481 - 2800 or by email herjolfur@herjolfur.is.",
    bookNewTrip: "Book new trip",
    summaryTitle: "Your booking",
    route: "Route",
    total: "Total",
    noVehicle: "No vehicle",
    selectedNone: "0 selected",
    adultSummary: "adult",
    adultSummaryPlural: "adults",
    teenSeniorSummary: "teen/senior",
    teenSeniorSummaryPlural: "teens/seniors",
    childSummary: "child",
    childSummaryPlural: "children",
    outbound: "outbound",
    returnTrip: "return",
    to: "to",
    trailerSummary: "trailer",
    highVehicleSummary: "higher than 2.10 m",
    dateError: "Return date cannot be before departure date.",
    searchPrepared: "Search handed off to local checkout flow:",
    returning: "returning",
    previousMonth: "Previous month",
    nextMonth: "Next month",
    calendar: "Calendar",
    language: "Language",
    tripType: "Trip type",
    swapDirections: "Swap directions",
    bookingProgress: "Booking progress",
    passengerCount: "Passengers",
    vehicle: "Vehicle",
    carUnder5: "Car under 5 m",
    carOver5: "Car over 5 m",
    carTrailer5To10: "Car with trailer, 5-10 m",
    carTrailer10To16: "Car with trailer, 10-16 m",
    searchDepartures: "Search departures",
    chooseSailing: "Choose a sailing",
    available: "Available",
    limited: "Only {count} left",
    cancelled: "Cancelled",
    delayed: "Delayed {minutes} min",
    highVehicleUnavailable: "Unavailable for vehicles over 2.10 m",
    noSailings: "No sailings match this search.",
    searchReady: "Booking flow started. Please configure passenger counts.",
    lockActive: "Spots reserved for {time}",
    lockHint: "Continuing holds these sailings for 15 minutes while you enter your details.",
    successRecap: "Your itinerary",
    totalPaid: "Total paid",
    lockExpired: "Reservation expired. Select your sailings again.",
    releaseWarningCapacity: "Changing passenger count or vehicle details will release your selected sailings. Do you wish to continue?",
    releaseWarningSearch: "Changing the trip type, route or dates will release your selected sailings. Do you wish to continue?",
    sailingsReleased: "Your search changed, so the held sailings were released. Choose your departures again.",
    selectRequired: "Select an available sailing for each leg.",
    fareVersion: "Base fares · schedule {version}",
    orderReviewTitle: "Booking overview",
    date: "Date",
    sailing: "Sailing",
    notSelected: "Not selected",
    birthdateMissing: "Date of birth missing",
    noVehicleRegistered: "No vehicle registered.",
    totalDue: "Total to pay",
    loggedInTitle: "Signed in: Jón Jónsson",
    loggedInCopy: "Hi Jón! You can prefill your own and your family's details from your saved profiles.",
    prefillCta: "Fill in automatically",
    prefillDone: "Details from your saved profiles have been filled in.",
  },
  is: {
    localExtraction: "Herjólfur",
    pageTitle: "Ferð til Vestmannaeyja",
    pageHeading: "Ferð til Vestmanna­eyja",
    pageCopy: "Veldu dagsetningar, farþega og farartæki til að sjá lausar ferðir.",
    editSearch: "Breyta leit",
    closeSearch: "Loka",
    searchTrips: "Leita að ferð",
    bothWays: "Báðar leiðir",
    oneWay: "Aðra leið",
    trip1: "Ferð 1",
    trip2: "Ferð 2",
    departure: "Brottför",
    return: "Heimkoma",
    bookTrip: "Bóka ferð",
    handoffEyebrow: "Örugg bókun",
    subsequentSteps: "Ljúktu við bókunina",
    passengers: "Farþegar",
    vehicles: "Farartæki",
    trips: "Ferðir",
    information: "Upplýsingar",
    payment: "Ganga frá bókun",
    switchPorts: "Víxla höfnum",
    trip: "Ferð",
    passenger: "Farþegi",
    adult: "Fullorðinn",
    teenSenior: "Unglingar 12-15 ára, eldri borgarar",
    children: "Börn yngri en 12 ára",
    testingMode: "Prófunarhamur — sleppa nauðsynlegum reitum",
    testingModeUrlHint: "Kveikt með ?skipValidation í slóðinni. Fjarlægðu það til að nota rofann.",
    typeAdult: "Fullorðinn",
    typeTeenSenior: "Unglingur / eldri borgari",
    typeChild: "Barn",
    differentReturnCount: "Annar fjöldi farþega á heimleið",
    rosterHint: "Upplýsingar eru skráðar einu sinni fyrir {count} {noun} — fjölmennari ferðina.",
    passengerNoun: "farþega",
    passengersNoun: "farþega",
    fareBreakdown: "Verðsundurliðun",
    fareLegLine: "{trip}: {detail}",
    fareVehicleLine: "Farartæki",
    farePerLeg: "á ferð",
    loginTitle: "Skráðu þig inn á mínar síður",
    loginCopy: "Vissirðu að þú getur skráð ferðafélaga, breytt bókunum, og náð í brottfararspjald á mínum síðum.",
    signIn: "Skrá inn",
    continue: "Áfram",
    back: "Til baka",
    vehiclesSubcopy: "Veldu hvort bókunin inniheldur farartæki.",
    withoutVehicleTitle: "Halda áfram án farartækis",
    withoutVehicleCopy: "Bókun eingöngu fyrir farþega.",
    addVehicle: "Bæta við farartæki",
    addVehicleCopy: "Bæta við bíl, reiðhjóli eða mótorhjóli.",
    addAnotherVehicle: "Bæta við öðru farartæki",
    remove: "Fjarlægja",
    car: "Bíll",
    bicycle: "Reiðhjól",
    motorcycle: "Mótorhjól",
    length: "Lengd:",
    lengthTrailer: "Lengd m/vagn:",
    trailerCheck: "Ég er með tengivagn aftan í bílnum (Fellihýsi, kerra, osfrv.)",
    highVehicleCheck: "Bílinn og/eða tengivagninn er hærri en 2,10 m",
    departureTime: "Brottfarartími",
    arrivalTime: "Komutími",
    soldOut: "Uppselt",
    informationSubcopy: "Skráðu upplýsingar allra farþega. Þær verða að passa við skilríki sem sýnd eru við innritun.",
    passenger1: "Farþegi 1",
    firstName: "Fornafn",
    lastName: "Eftirnafn",
    birthdate: "Fæðingardagur",
    birthdatePlaceholder: "dd/mm/áááá",
    nationality: "Þjóðerni",
    nationalityPlaceholder: "Ísland",
    disabled: "Öryrki",
    addPassenger: "Bæta við farþega",
    add: "Bæta við",
    contactInfo: "Tengiliðaupplýsingar",
    email: "Netfang",
    phone: "Símanúmer",
    cardInfo: "Kortaupplýsingar",
    cardNumber: "Kortanúmer",
    cardName: "Nafn",
    terms: "Ég samþykki skilmála Herjólfs ohf. og að hafa kynnt mér persónuverndarstefnu félagsins.",
    newsletter: "Bæta mér við á póstlista",
    confirmBooking: "Staðfesta bókun",
    bookingNumber: "Bókun HRJ-2048",
    successTitle: "Kærar þakkir fyrir pöntunina þína!",
    successEmail: "Staðfesting hefur verið send á netfangið sem var gefið upp.",
    successContact: "Ef þú hefur einhverjar spurningar ekki hika við að hafa samband í síma 481 - 2800 eða á netfangið herjolfur@herjolfur.is.",
    bookNewTrip: "Bóka nýja ferð",
    summaryTitle: "Bókunin þín",
    route: "Leið",
    total: "Samtals",
    noVehicle: "Ekkert farartæki",
    selectedNone: "0 valið",
    adultSummary: "fullorðinn",
    adultSummaryPlural: "fullorðnir",
    teenSeniorSummary: "unglingur/eldri borgari",
    teenSeniorSummaryPlural: "unglingar/eldri borgarar",
    childSummary: "barn",
    childSummaryPlural: "börn",
    outbound: "brottför",
    returnTrip: "heimkoma",
    to: "til",
    trailerSummary: "tengivagn",
    highVehicleSummary: "hærri en 2,10 m",
    dateError: "Heimkoma má ekki vera fyrir brottför.",
    searchPrepared: "Leit var færð yfir í staðbundið bókunarflæði:",
    returning: "heimkoma",
    previousMonth: "Fyrri mánuður",
    nextMonth: "Næsti mánuður",
    calendar: "Dagatal",
    language: "Tungumál",
    tripType: "Tegund ferðar",
    swapDirections: "Víxla leiðum",
    bookingProgress: "Framvinda bókunar",
    passengerCount: "Farþegar",
    vehicle: "Farartæki",
    carUnder5: "Bíll undir 5 m",
    carOver5: "Bíll yfir 5 m",
    carTrailer5To10: "Bíll með vagni, 5-10 m",
    carTrailer10To16: "Bíll með vagni, 10-16 m",
    searchDepartures: "Leita að ferðum",
    chooseSailing: "Veldu ferð",
    available: "Laust",
    limited: "Aðeins {count} laus",
    cancelled: "Ferð felld niður",
    delayed: "Seinkun {minutes} mín.",
    highVehicleUnavailable: "Ekki laust fyrir farartæki yfir 2,10 m",
    noSailings: "Engar ferðir passa við leitina.",
    searchReady: "Bókunarflæði hafið. Vinsamlegast veldu farþegafjölda.",
    lockActive: "Pláss frátekið í {time}",
    lockHint: "Þegar þú heldur áfram eru þessar ferðir teknar frá í 15 mínútur á meðan þú skráir upplýsingar.",
    successRecap: "Ferðaáætlunin þín",
    totalPaid: "Samtals greitt",
    lockExpired: "Frátekið pláss er útrunnið. Veldu ferðir aftur.",
    releaseWarningCapacity: "Breyting á farþegafjölda eða farartæki mun losa valdar ferðir. Viltu halda áfram?",
    releaseWarningSearch: "Breyting á tegund ferðar, leið eða dagsetningum mun losa valdar ferðir. Viltu halda áfram?",
    sailingsReleased: "Leitinni var breytt og frátekin pláss losnuðu. Veldu ferðir aftur.",
    selectRequired: "Veldu lausa ferð fyrir hvora leið.",
    fareVersion: "Grunnverð · verðskrá {version}",
    orderReviewTitle: "Bókunaryfirlit",
    date: "Dagsetning",
    sailing: "Ferð",
    notSelected: "Engin valin",
    birthdateMissing: "Fæðingardagur vantar",
    noVehicleRegistered: "Ekkert farartæki skráð.",
    totalDue: "Samtals að greiða",
    loggedInTitle: "Skráður inn: Jón Jónsson",
    loggedInCopy: "Hæ Jón! Þú getur fyllt út upplýsingar þínar og fjölskyldu þinnar úr vistuðu sniðunum.",
    prefillCta: "Fylla út sjálfkrafa",
    prefillDone: "Gögn úr prófílnum þínum hafa verið fyllt út.",
  },
};

const tabs = [...document.querySelectorAll(".react-tabs [role='tab']")];
const tabPanels = [...document.querySelectorAll(".react-tabs [role='tabpanel']")];
const form = document.querySelector("[data-booking-form]");
const result = document.querySelector("[data-booking-result]");
const returnFields = [...document.querySelectorAll(".return-only")];
const returnFlowFields = [...document.querySelectorAll(".return-only-flow")];
const departureInput = document.querySelector("#from-date");
const returnInput = document.querySelector("#to-date");
const dateTriggers = [...document.querySelectorAll("[data-date-trigger]")];
const dateValueNodes = {
  from: document.querySelector("[data-date-value='from']"),
  to: document.querySelector("[data-date-value='to']"),
};
const calendar = document.querySelector("[data-calendar]");
const calendarTitle = document.querySelector("[data-calendar-title]");
const calendarGrid = document.querySelector("[data-calendar-grid]");
const calendarWeekdays = document.querySelector("[data-calendar-weekdays]");
const checkoutFlow = document.querySelector("[data-checkout-flow]");
const checkoutSteps = [...document.querySelectorAll("[data-step-target]")];
const checkoutPanels = [...document.querySelectorAll("[data-step-panel]")];
const passengerNextButton = document.querySelector("[data-passenger-next]");
const vehicleList = document.querySelector("[data-vehicle-list]");
const addVehicleButton = document.querySelector("[data-add-vehicle]");
const availabilityApi = window.HERJOLFUR_MOCK_AVAILABILITY;
const fareApi = window.HERJOLFUR_FARES;
const availabilityMatrix = availabilityApi.matrix;

const state = {
  trip1Route: "landeyjahofn-vestmannaeyjar",
  trip2Route: "vestmannaeyjar-landeyjahofn",
  counts: {
    adult: 0,
    teenSenior: 0,
    child: 0,
  },
  vehicleMode: "none",
  // One entry per vehicle on the booking.
  vehicles: [],
  outboundSailing: "",
  returnSailing: "",
  // True only between "Continue" on the trips step (the 15-minute hold) and a
  // release. The pre-selected radios alone are a UI default, not held inventory.
  sailingsHeld: false,
  totalPassengers: 1,
  hasVehicle: false,
  returnCounts: {
    adult: 1,
    teenSenior: 0,
    child: 0,
  },
  differentReturnCount: false,
  // One form per unique passenger.
  passengerDetails: [],
  loggedIn: false,
};

const passengerTypes = ["adult", "teenSenior", "child"];

function totalFor(counts) {
  return Object.values(counts).reduce((sum, count) => sum + count, 0);
}

function isReturnCountEditable() {
  return currentMode === "return" && state.differentReturnCount;
}

function countsForLeg(leg) {
  return leg === "return" && isReturnCountEditable() ? state.returnCounts : state.counts;
}

// The legs may carry different numbers, so the roster is the larger party of the
// two per fare type — everyone who could travel fills in their details once.
function rosterCounts() {
  return passengerTypes.reduce((counts, type) => {
    counts[type] = isReturnCountEditable()
      ? Math.max(state.counts[type], state.returnCounts[type])
      : state.counts[type];
    return counts;
  }, {});
}

// Keep the roster in step with the counters, preserving details already typed in.
function syncPassengerRoster() {
  const target = rosterCounts();
  const roster = [];
  passengerTypes.forEach((type) => {
    const existing = state.passengerDetails.filter((passenger) => passenger.type === type);
    for (let index = 0; index < target[type]; index += 1) {
      roster.push(existing[index] || {
        type,
        firstName: "",
        lastName: "",
        birthdate: "",
        // A real default value, not a placeholder that only looks filled in.
        nationality: t("nationalityPlaceholder"),
        disabled: false,
      });
    }
  });
  state.passengerDetails = roster;
}

let currentMode = "return";
let currentStep = "passengers";
const stepOrder = ["passengers", "vehicles", "trips", "information", "payment"];
let currentLanguage = localStorage.getItem("herjolfur-language")
  || (navigator.languages?.some((language) => language.toLowerCase().startsWith("is")) ? "is" : "en");
const minBookingDate = availabilityMatrix.dayZero;
departureInput.value = minBookingDate;
returnInput.value = availabilityMatrix.days[1]?.date || minBookingDate;
const calendarState = {
  field: null,
  month: startOfMonth(parseISO(departureInput.value)),
};

function t(key) {
  return copy[currentLanguage][key] || copy.en[key] || key;
}

function message(key, values = {}) {
  return Object.entries(values).reduce(
    (text, [name, value]) => text.replace(`{${name}}`, value),
    t(key)
  );
}

function parseISO(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function toISO(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date, amount) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function dateLocale() {
  return currentLanguage === "is" ? "is-IS" : "en-US";
}

// Not every browser ships Icelandic locale data (Intl then silently falls back to
// en-US), so format dates and krónur explicitly rather than trusting the runtime.
function formatDisplayDate(value) {
  const date = parseISO(value);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return currentLanguage === "is" ? `${day}.${month}.${year}` : `${month}/${day}/${year}`;
}

function minimumForField(field) {
  return field === "to" ? departureInput.value : minBookingDate;
}

function updateDateDisplays() {
  dateValueNodes.from.textContent = formatDisplayDate(departureInput.value);
  dateValueNodes.to.textContent = formatDisplayDate(returnInput.value);
}

function positionCalendar(trigger) {
  const rect = trigger.getBoundingClientRect();
  const width = Math.min(330, window.innerWidth - 24);
  const left = Math.min(
    Math.max(12, rect.left + window.scrollX),
    window.scrollX + window.innerWidth - width - 12,
  );

  calendar.style.top = `${rect.bottom + window.scrollY + 8}px`;
  calendar.style.left = `${left}px`;
}

function renderCalendar() {
  if (!calendarState.field) {
    return;
  }

  const selectedValue = calendarState.field === "from" ? departureInput.value : returnInput.value;
  const selectedDate = parseISO(selectedValue);
  const minValue = minimumForField(calendarState.field);
  const monthStart = startOfMonth(calendarState.month);
  const firstDayOffset = (monthStart.getDay() + 6) % 7;
  const daysInMonth = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0).getDate();

  calendar.setAttribute("aria-label", t("calendar"));
  document.querySelector("[data-calendar-prev]").setAttribute("aria-label", t("previousMonth"));
  document.querySelector("[data-calendar-next]").setAttribute("aria-label", t("nextMonth"));
  calendarTitle.textContent = new Intl.DateTimeFormat(dateLocale(), {
    month: "long",
    year: "numeric",
  }).format(monthStart);

  const weekdayFormatter = new Intl.DateTimeFormat(dateLocale(), { weekday: "short" });
  const weekdays = Array.from({ length: 7 }, (_, index) => weekdayFormatter.format(new Date(2026, 0, 5 + index)));
  calendarWeekdays.innerHTML = weekdays.map((day) => `<span>${day}</span>`).join("");

  const cells = [];
  for (let index = 0; index < firstDayOffset; index += 1) {
    cells.push('<span class="calendar-day-placeholder"></span>');
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(monthStart.getFullYear(), monthStart.getMonth(), day);
    const iso = toISO(date);
    const classes = ["calendar-day"];

    if (iso === minBookingDate) {
      classes.push("is-today");
    }

    if (iso === toISO(selectedDate)) {
      classes.push("is-selected");
    }

    cells.push(`
      <button
        type="button"
        class="${classes.join(" ")}"
        data-calendar-day="${iso}"
        ${iso < minValue || iso > availabilityMatrix.days.at(-1).date ? "disabled" : ""}
      >${day}</button>
    `);
  }

  calendarGrid.innerHTML = cells.join("");
}

function closeCalendar() {
  calendar.hidden = true;
  calendarState.field = null;
  dateTriggers.forEach((trigger) => trigger.setAttribute("aria-expanded", "false"));
}

function openCalendar(field) {
  const input = field === "from" ? departureInput : returnInput;
  const trigger = document.querySelector(`[data-date-trigger='${field}']`);
  calendarState.field = field;
  calendarState.trigger = trigger;
  calendarState.month = startOfMonth(parseISO(input.value));
  renderCalendar();
  calendar.hidden = false;
  trigger.setAttribute("aria-expanded", "true");
  positionCalendar(trigger);
  // It is a dialog: focus moves in on open, Escape hands it back to the trigger.
  const focusTarget = calendar.querySelector(".calendar-day.is-selected:not(:disabled)")
    || calendar.querySelector(".calendar-day:not(:disabled)")
    || calendar.querySelector("button");
  focusTarget?.focus();
}

// Keep Tab cycling inside the open dialog instead of escaping into the page.
calendar.addEventListener("keydown", (event) => {
  if (event.key !== "Tab") return;
  const focusable = [...calendar.querySelectorAll("button:not(:disabled)")];
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

function setDateValue(field, value) {
  if (field === "from") {
    departureInput.value = value < minBookingDate ? minBookingDate : value;
    if (returnInput.value < departureInput.value) {
      returnInput.value = departureInput.value;
    }
  } else {
    returnInput.value = value < departureInput.value ? departureInput.value : value;
  }

  updateDateDisplays();
  updateFlowSummary();
  result.textContent = "";
}

function renderRoute(select, routeKey) {
  if (!select) return;
  const label = select.querySelector("[data-route-label]");
  const [from, to] = routes[routeKey];

  if (label) {
    label.innerHTML = `
      <span class="origin">${from}</span>
      <span class="arrow-icon" aria-hidden="true"></span>
      <span class="destination">${to}</span>
    `;
  }

  if (select.id === "trip-1-display") {
    state.trip1Route = routeKey;
  } else if (select.id === "trip-2-display") {
    state.trip2Route = routeKey;
  }

  updateFlowSummary();
}

function oppositeRoute(routeKey) {
  return routeKey === "landeyjahofn-vestmannaeyjar"
    ? "vestmannaeyjar-landeyjahofn"
    : "landeyjahofn-vestmannaeyjar";
}

function selectTab(tab) {
  const mode = tab.dataset.tripMode;
  currentMode = mode;

  tabs.forEach((candidate) => {
    const selected = candidate === tab;
    candidate.classList.toggle("react-tabs__tab--selected", selected);
    candidate.setAttribute("aria-selected", String(selected));
    candidate.tabIndex = selected ? 0 : -1;
  });

  tabPanels.forEach((panel) => {
    const isPrimaryPanel = panel.id === "panel-both-ways";
    panel.classList.toggle("react-tabs__tab-panel--selected", isPrimaryPanel);
    panel.hidden = !isPrimaryPanel;
  });

  form.classList.toggle("is-one-way", mode === "one-way");

  returnFields.forEach((field) => {
    field.hidden = mode === "one-way";
  });
  returnFlowFields.forEach((field) => {
    field.hidden = mode === "one-way";
  });

  returnInput.disabled = mode === "one-way";
  result.textContent = "";
  closeCalendar();
  updatePassengerNextState();
  updateFlowSummary();
}

// Switching trip mode adds or drops a whole leg, so it invalidates held sailings
// exactly like a route or date change does.
function requestTab(tab) {
  if (tab.dataset.tripMode === currentMode) return;
  if (!confirmSearchChange()) return;

  selectTab(tab);
  returnToSailingSelection();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => requestTab(tab));
  tab.addEventListener("keydown", (event) => {
    const currentIndex = tabs.indexOf(tab);
    const nextIndex = event.key === "ArrowRight"
      ? (currentIndex + 1) % tabs.length
      : event.key === "ArrowLeft"
        ? (currentIndex - 1 + tabs.length) % tabs.length
        : currentIndex;

    if (nextIndex !== currentIndex) {
      event.preventDefault();
      tabs[nextIndex].focus();
      requestTab(tabs[nextIndex]);
    }
  });
});

departureInput.addEventListener("change", () => {
  if (currentMode === "return" && returnInput.value < departureInput.value) {
    returnInput.value = departureInput.value;
  }
});

updateVehicleBranch();
setCheckoutStep("passengers");

function routeText(routeKey) {
  const [from, to] = routes[routeKey];
  const destination = currentLanguage === "is" ? icelandicGenitive[to] || to : to;
  return `${from} ${t("to")} ${destination}`;
}

function formatJourneyText() {
  if (currentMode === "return") {
    return `${routeText(state.trip1Route)} / ${routeText(state.trip2Route)}`;
  }

  return routeText(state.trip1Route);
}

function formatDateText() {
  if (currentMode === "return") {
    return `${t("departure")} ${formatDisplayDate(departureInput.value)}, ${t("return").toLowerCase()} ${formatDisplayDate(returnInput.value)}`;
  }

  return `${t("departure")} ${formatDisplayDate(departureInput.value)}`;
}

function passengerTotal() {
  return totalFor(state.counts);
}

function passengerSummaryLabel(key, count) {
  const form = new Intl.PluralRules(dateLocale()).select(count);
  return t(form === "one" ? `${key}Summary` : `${key}SummaryPlural`);
}

function vehicleFarePerLeg() {
  return bookedVehicles().reduce(
    (total, vehicle) => total + fareApi.catalog.vehicles[vehicleCategory(vehicle)],
    0,
  );
}

// Fares are per leg, so each leg is priced with its own party and every vehicle.
function priceTotal() {
  const legs = currentMode === "return" ? ["outbound", "return"] : ["outbound"];
  return legs.reduce((total, leg) => total + fareApi.calculateFare({
    passengers: countsForLeg(leg),
    vehicleCategory: "none",
    legs: 1,
  }).total + vehicleFarePerLeg(), 0);
}

function formatPrice(value) {
  const rounded = Math.round(value);
  if (currentLanguage === "is") {
    return `${rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} kr.`;
  }
  return `ISK ${rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

function newVehicle() {
  return {
    type: "Bíll",
    length: "1 - 5m",
    trailer: false,
    trailerLength: "5 - 10m m/vagn",
    highVehicle: false,
  };
}

function bookedVehicles() {
  return state.vehicleMode === "vehicle" ? state.vehicles : [];
}

function vehicleCategory(vehicle) {
  if (vehicle.type === "Reiðhjól") return "bicycle";
  if (vehicle.type === "Mótorhjól") return "motorcycle";
  if (vehicle.trailer) {
    return vehicle.trailerLength.startsWith("10") ? "car_trailer_10_16m" : "car_trailer_5_10m";
  }
  return vehicle.length.startsWith("5") ? "car_over_5m" : "car_under_5m";
}

function vehicleLabel(vehicle) {
  if (vehicle.type === "Reiðhjól") return t("bicycle");
  if (vehicle.type === "Mótorhjól") return t("motorcycle");
  const length = vehicle.trailer ? vehicle.trailerLength.replace(" m/vagn", "") : vehicle.length;
  return `${t("car")} ${length}`;
}

function singleVehicleSummary(vehicle) {
  const details = [vehicleLabel(vehicle)];
  if (vehicle.trailer) details.push(t("trailerSummary"));
  if (vehicle.highVehicle) details.push(t("highVehicleSummary"));
  return details.join(", ");
}

function vehicleSummary() {
  const vehicles = bookedVehicles();
  if (!vehicles.length) return t("noVehicle");
  return vehicles.map(singleVehicleSummary).join(" · ");
}

function updatePassengerNextState() {
  state.totalPassengers = passengerTotal();
  const returnPartyOk = !isReturnCountEditable() || totalFor(state.returnCounts) > 0;
  passengerNextButton.disabled = !(state.totalPassengers > 0 && returnPartyOk);
}

// The return counters only exist on a two-way booking the traveller opted into.
function syncReturnPassengerPanel() {
  const row = document.querySelector("[data-different-return-row]");
  const panel = document.querySelector("[data-return-counters]");
  const hint = document.querySelector("[data-roster-hint]");
  if (!row || !panel) return;

  row.hidden = currentMode !== "return";
  panel.hidden = !isReturnCountEditable();
  if (hint) {
    const count = totalFor(rosterCounts());
    const noun = new Intl.PluralRules("en").select(count) === "one" ? t("passengerNoun") : t("passengersNoun");
    hint.textContent = message("rosterHint", { count, noun });
  }
}

function updateCounters() {
  passengerTypes.forEach((type) => {
    const counter = document.querySelector(`[data-counter='${type}'] input`);
    if (counter) counter.value = String(state.counts[type]);
    const returnCounter = document.querySelector(`[data-return-counter='${type}'] input`);
    if (returnCounter) returnCounter.value = String(state.returnCounts[type]);
  });

  syncPassengerRoster();
  syncReturnPassengerPanel();
  updatePassengerNextState();
  updateFlowSummary();
}

function countsSummary(counts) {
  if (totalFor(counts) === 0) return t("selectedNone");
  return ["adult", "teenSenior", "child"]
    .filter((key) => counts[key])
    .map((key) => `${counts[key]} ${passengerSummaryLabel(key, counts[key])}`)
    .join(", ");
}

function updateFlowSummary() {
  const route = formatJourneyText();
  const dates = formatDateText();
  const passengerSummary = isReturnCountEditable()
    ? `${t("trip")} 1: ${countsSummary(state.counts)} · ${t("trip")} 2: ${countsSummary(state.returnCounts)}`
    : countsSummary(state.counts);
  const sailingSummary = currentMode === "return"
    ? `${state.outboundSailing} ${t("outbound")}, ${state.returnSailing} ${t("returnTrip")}`
    : `${state.outboundSailing} ${t("outbound")}`;

  document.querySelectorAll("[data-flow-route]").forEach((node) => {
    node.textContent = route;
  });
  document.querySelectorAll("[data-flow-dates]").forEach((node) => {
    node.textContent = dates;
  });
  document.querySelector("[data-summary-route]").textContent = route;
  document.querySelector("[data-summary-passengers]").textContent = passengerSummary;
  document.querySelector("[data-summary-vehicle]").textContent = vehicleSummary();
  document.querySelector("[data-summary-sailings]").textContent = sailingSummary;
  document.querySelector("[data-summary-total]").textContent = formatPrice(priceTotal());
  document.querySelector("[data-fare-version]").textContent = message("fareVersion", { version: fareApi.catalog.version });

  syncTopbarContext();
  syncCommitBar();
}

function renderVehicleCards() {
  const hasVehicle = state.vehicleMode === "vehicle";
  vehicleList.innerHTML = "";
  addVehicleButton.hidden = !hasVehicle;
  addVehicleButton.textContent = t("addAnotherVehicle");
  if (!hasVehicle) return;

  state.vehicles.forEach((vehicle, index) => {
    const isCar = vehicle.type === "Bíll";
    const card = document.createElement("div");
    card.className = "vehicle-card";
    card.innerHTML = `
      <div class="panel-title-row">
        <h4>${t("vehicle")} ${index + 1}</h4>
        <button class="link-button link-button--inline" type="button" data-remove-vehicle>${t("remove")}</button>
      </div>

      <div class="choice-grid">
        ${[["Bíll", "car"], ["Reiðhjól", "bicycle"], ["Mótorhjól", "motorcycle"]].map(([value, key]) => `
          <label class="choice-card">
            <input type="radio" name="vehicleType-${index}" value="${value}" data-vehicle-field="type" ${vehicle.type === value ? "checked" : ""}>
            <span>${t(key)}</span>
          </label>`).join("")}
      </div>

      <div class="car-fields" ${isCar ? "" : "hidden"}>
        <fieldset class="radio-fieldset">
          <legend>${t("length")}</legend>
          ${["1 - 5m", "5 - 8m"].map((value) => `
            <label>
              <input type="radio" name="vehicleLength-${index}" value="${value}" data-vehicle-field="length" ${vehicle.length === value ? "checked" : ""}>
              <span>${value}</span>
            </label>`).join("")}
        </fieldset>

        <label class="check-row">
          <input type="checkbox" data-vehicle-field="trailer" ${vehicle.trailer ? "checked" : ""}>
          <span>${t("trailerCheck")}</span>
        </label>

        <fieldset class="radio-fieldset" ${vehicle.trailer ? "" : "hidden"}>
          <legend>${t("lengthTrailer")}</legend>
          ${[["5 - 10m m/vagn", "5 - 10m"], ["10 - 16m m/vagn", "10 - 16m"]].map(([value, label]) => `
            <label>
              <input type="radio" name="vehicleLengthTrailer-${index}" value="${value}" data-vehicle-field="trailerLength" ${vehicle.trailerLength === value ? "checked" : ""}>
              <span>${label}</span>
            </label>`).join("")}
        </fieldset>

        <label class="check-row">
          <input type="checkbox" data-vehicle-field="highVehicle" ${vehicle.highVehicle ? "checked" : ""}>
          <span>${t("highVehicleCheck")}</span>
        </label>
      </div>
    `;

    card.querySelectorAll("[data-vehicle-field]").forEach((input) => {
      input.addEventListener("change", () => {
        const field = input.dataset.vehicleField;
        vehicle[field] = input.type === "checkbox" ? input.checked : input.value;
        if (field === "type" && vehicle.type !== "Bíll") vehicle.trailer = false;
        updateVehicleBranch();
      });
    });

    card.querySelector("[data-remove-vehicle]").addEventListener("click", () => {
      state.vehicles.splice(index, 1);
      if (!state.vehicles.length) state.vehicleMode = "none";
      updateVehicleBranch();
    });

    vehicleList.appendChild(card);
  });
}

function updateVehicleBranch() {
  if (state.vehicleMode === "vehicle" && !state.vehicles.length) {
    state.vehicles = [newVehicle()];
  }
  if (state.vehicleMode === "none") {
    state.vehicles = [];
  }

  document.querySelectorAll("[data-vehicle-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.vehicleMode === state.vehicleMode);
  });

  renderVehicleCards();
  updateFlowSummary();
  if (!checkoutFlow.hidden) renderAvailability();
}

function setText(selector, key) {
  const node = document.querySelector(selector);
  if (node) {
    node.textContent = t(key);
  }
}

function setAllText(selector, key) {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = t(key);
  });
}

function setStepText(step, number, key) {
  const button = document.querySelector(`[data-step-target='${step}']`);
  if (button) {
    button.innerHTML = `<span>${number}</span>${t(key)}`;
  }
}

function updateSailingLabels() {
  document.querySelectorAll("[name='outboundSailing'], [name='returnSailing']").forEach((input) => {
    const [departure, arrival] = input.value.split("-");
    const option = input.closest(".sailing-option");
    option.querySelector("strong").textContent = `${t("departureTime")} ${departure}`;
    option.querySelector("small").textContent = input.disabled
      ? t("soldOut")
      : `${t("arrivalTime")} ${arrival}`;
  });
}

function addMinutes(time, minutes) {
  const [hours, mins] = time.split(":").map(Number);
  const total = hours * 60 + mins + minutes;
  return `${String(Math.floor(total / 60) % 24).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function directionForRoute(routeKey) {
  return routeKey === "landeyjahofn-vestmannaeyjar" ? "LAN_TO_VEY" : "VEY_TO_LAN";
}

// Every vehicle on the booking must fit; the worst verdict wins.
function sailingState(sailing) {
  if (sailing.serviceStatus === "cancelled") return { disabled: true, key: "cancelled" };

  let limited = null;
  for (const vehicle of bookedVehicles()) {
    const category = vehicleCategory(vehicle);
    const capacity = sailing.vehicleAvailability[category];
    if (!capacity || capacity.status === "sold_out") return { disabled: true, key: "soldOut" };
    if (vehicle.highVehicle && category.startsWith("car_") && !capacity.highVehicleAccepted) {
      return { disabled: true, key: "highVehicleUnavailable" };
    }
    if (capacity.status === "limited") {
      limited = { disabled: false, key: "limited", count: capacity.remaining };
    }
  }

  if (limited) return limited;
  if (sailing.serviceStatus === "delayed") {
    return { disabled: false, key: "delayed", minutes: sailing.delayMinutes };
  }
  return { disabled: false, key: "available" };
}

function renderSailingGroup(groupName, date, routeKey) {
  const container = document.querySelector(`[data-sailing-group='${groupName}']`);
  const day = availabilityMatrix.days.find((entry) => entry.date === date);
  const direction = directionForRoute(routeKey);
  const sailings = day ? day.sailings.filter((sailing) => sailing.direction === direction) : [];

  container.innerHTML = sailings.map((sailing) => {
    const availability = sailingState(sailing);
    const status = availability.key === "limited"
      ? message("limited", { count: availability.count })
      : availability.key === "delayed"
        ? message("delayed", { minutes: availability.minutes })
        : t(availability.key);
    return `
      <label class="sailing-option${availability.disabled ? " is-sold-out" : ""}">
        <input type="radio" name="${groupName}Sailing" value="${sailing.departureTime}" ${availability.disabled ? "disabled" : ""}>
        <span>
          <strong>${t("departureTime")} ${sailing.departureTime}</strong>
          <small>${t("arrivalTime")} ${addMinutes(sailing.departureTime, 35)} · ${status}</small>
        </span>
      </label>`;
  }).join("");

  if (!sailings.length) container.innerHTML = `<p class="empty-state">${t("noSailings")}</p>`;
  const firstAvailable = container.querySelector("input:not(:disabled)");
  if (firstAvailable) firstAvailable.checked = true;
  const stateKey = groupName === "outbound" ? "outboundSailing" : "returnSailing";
  state[stateKey] = firstAvailable ? firstAvailable.value : "";
  container.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      state[stateKey] = input.value;
      updateFlowSummary();
    });
  });
}

function renderAvailability() {
  renderSailingGroup("outbound", departureInput.value, state.trip1Route);
  if (currentMode === "return") renderSailingGroup("return", returnInput.value, state.trip2Route);
  updateFlowSummary();
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.title = t("pageTitle");

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === currentLanguage);
  });

  setText(".clone-context .eyebrow", "localExtraction");
  // The heading variant carries a soft hyphen so the name breaks as Vestmanna-eyjar.
  setText("#page-title", "pageHeading");
  setText(".clone-context p:last-of-type", "pageCopy");
  setText("#booking-title", "searchTrips");
  setText("#tab-both-ways", "bothWays");
  setText("#tab-one-way", "oneWay");
  setText("[data-i18n='trip1']", "trip1");
  setText("[data-i18n='trip2']", "trip2");
  setText("label[for='from-date-trigger']", "departure");
  setText("label[for='to-date-trigger']", "return");
  setText(".booking-actions .btn--primary", "bookTrip");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAria));
  });

  setText(".flow-header .eyebrow", "handoffEyebrow");
  setText("#checkout-title", "subsequentSteps");
  setStepText("passengers", "1", "passengers");
  setStepText("vehicles", "2", "vehicles");
  setStepText("trips", "3", "trips");
  setStepText("information", "4", "information");
  setStepText("payment", "5", "payment");

  setText(".swap-button", "switchPorts");
  setText("[data-step-panel='passengers'] .panel-card > h3", "passengers");
  [
    ["adult", "adult"],
    ["teen-senior", "teenSenior"],
    ["child", "child"],
  ].forEach(([id, fareKey]) => {
    const labelKey = fareKey === "child" ? "children" : fareKey;
    const price = formatPrice(fareApi.catalog.passengers[fareKey]);
    ["", "return-"].forEach((prefix) => {
      const label = document.querySelector(`label[for='${prefix}${id}-count']`);
      if (label) {
        label.innerHTML = `${t(labelKey)} <strong>${price}</strong> <span class="fare-note">${t("farePerLeg")}</span>`;
      }
    });
    const steppers = `[data-counter='${fareKey}'], [data-return-counter='${fareKey}']`;
    document.querySelectorAll(`:is(${steppers}) [data-counter-action='decrement']`)
      .forEach((node) => node.setAttribute("aria-label", `${t("remove")} ${t(labelKey)}`));
    document.querySelectorAll(`:is(${steppers}) [data-counter-action='increment']`)
      .forEach((node) => node.setAttribute("aria-label", `${t("add")} ${t(labelKey)}`));
  });
  setText("[data-return-passengers-title]", "trip2");
  setText("[data-step-panel='passengers'] [data-search-back]", "back");
  setText("[data-passenger-next]", "continue");

  setText("[data-step-panel='vehicles'] .panel-card > h3", "vehicles");
  setText("[data-step-panel='vehicles'] .subtle-copy", "vehiclesSubcopy");
  setText("[data-vehicle-mode='none'] strong", "withoutVehicleTitle");
  setText("[data-vehicle-mode='none'] span", "withoutVehicleCopy");
  setText("[data-vehicle-mode='vehicle'] strong", "addVehicle");
  setText("[data-vehicle-mode='vehicle'] span", "addVehicleCopy");
  renderVehicleCards();
  setText("[data-step-panel='vehicles'] [data-flow-go='passengers']", "back");
  setText("[data-step-panel='vehicles'] [data-flow-go='trips']", "continue");

  setText("[data-step-panel='trips'] .panel-card:first-of-type h3", "trip1");
  setText("[data-step-panel='trips'] .return-only-flow h3", "trip2");
  if (!checkoutFlow.hidden) renderAvailability();
  setText("[data-step-panel='trips'] [data-flow-go='vehicles']", "back");
  setText("[data-step-panel='trips'] #lock-inventory-btn", "continue");
  setText("[data-lock-hint]", "lockHint");

  setText("[data-step-panel='information'] .panel-card > h3", "information");
  setText("[data-step-panel='information'] .subtle-copy", "informationSubcopy");
  renderLoginCallout();
  if (document.querySelector("[data-passenger-details-container]")?.children.length) {
    renderPassengerDetailFields();
  }
  setText("[data-step-panel='information'] .link-button", "addPassenger");
  setText("[data-step-panel='information'] [data-flow-go='trips']", "back");
  setText("[data-step-panel='information'] [data-flow-go='payment']", "continue");
  if (currentStep === "payment") renderOrderReviewDetails();

  // Select contact fields card by finding the inputs
  const contactCard = document.querySelector("[name='email']")?.closest(".panel-card");
  if (contactCard) {
    const contactH3 = contactCard.querySelector("h3");
    if (contactH3) contactH3.textContent = t("contactInfo");
    const spans = contactCard.querySelectorAll(".field-grid label span");
    if (spans[0]) spans[0].textContent = t("email");
    if (spans[1]) spans[1].textContent = t("phone");
  }

  // Select card info card by finding cc input
  const cardInfoCard = document.querySelector("[name='cardNumber']")?.closest(".panel-card");
  if (cardInfoCard) {
    const cardH3 = cardInfoCard.querySelector("h3");
    if (cardH3) cardH3.textContent = t("cardInfo");
    const spans = cardInfoCard.querySelectorAll(".field-grid label span");
    [t("cardNumber"), "MM/YY", t("cardName"), "CVV/CCV"].forEach((label, index) => {
      if (spans[index]) spans[index].textContent = label;
    });
  }

  const paymentChecks = document.querySelectorAll("[data-step-panel='payment'] .check-row span");
  if (paymentChecks[0]) paymentChecks[0].textContent = t("terms");
  if (paymentChecks[1]) paymentChecks[1].textContent = t("newsletter");
  setText("[data-step-panel='payment'] [data-flow-go='information']", "back");
  setAllText("[data-step-panel='payment'] [data-payment-submit]", "confirmBooking");

  setText(".success-card .panel-kicker", "bookingNumber");
  setText(".success-card h3", "successTitle");
  const successParagraphs = document.querySelectorAll(".success-card p:not(.panel-kicker)");
  successParagraphs[0].textContent = t("successEmail");
  successParagraphs[1].textContent = t("successContact");
  setText(".success-card .btn", "bookNewTrip");

  setText("#summary-title", "summaryTitle");
  const summaryTerms = document.querySelectorAll(".booking-summary dt");
  [t("route"), t("passengers"), t("vehicle"), t("trips")].forEach((label, index) => {
    summaryTerms[index].textContent = label;
  });
  document.querySelector(".summary-total span").textContent = t("total");

  document.querySelector("[data-calendar-prev]").setAttribute("aria-label", t("previousMonth"));
  document.querySelector("[data-calendar-next]").setAttribute("aria-label", t("nextMonth"));
  syncTestingModeSwitch();
  updateDateDisplays();
  updateFlowSummary();
  syncMobileProgress();
  renderCalendar();
}

function setCheckoutStep(step) {
  currentStep = step;
  if (step === "information") {
    renderPassengerDetailFields();
  }
  if (step === "payment") {
    renderOrderReviewDetails();
  }
  if (step === "success") {
    renderSuccessRecap();
  }

  checkoutPanels.forEach((panel) => {
    const active = panel.dataset.stepPanel === step;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });

  checkoutSteps.forEach((button) => {
    const active = button.dataset.stepTarget === step;
    button.classList.toggle("is-active", active);
    if (active) button.setAttribute("aria-current", "step");
    else button.removeAttribute("aria-current");
  });

  syncMobileProgress();
  syncCommitBar();
  // On the mobile frame each step starts at the top, under the fixed context bar.
  if (mobileCheckoutActive()) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function validateInformation() {
  return validatePanel("information");
}

// Sailings are held against the capacity variables (party, vehicles, route, dates).
// Changing any of them invalidates the held slots, so they have to be released.
function hasHeldSailings() {
  return !checkoutFlow.hidden && state.sailingsHeld;
}

function releaseHeldSailings() {
  state.sailingsHeld = false;
  state.outboundSailing = "";
  state.returnSailing = "";
  if (bookingLockInterval) clearInterval(bookingLockInterval);
  document.getElementById("booking-lock-timer")?.remove();
  setCommitLock(null);
  document.querySelectorAll("[data-sailing-group] input:checked").forEach((input) => {
    input.checked = false;
  });
  resetUnlockedSteps("passengers", "vehicles", "trips");
}

// Editing route or dates in the search panel is the same regression as walking
// back to step 1 or 2: the held slots no longer match the search.
function confirmSearchChange() {
  if (!hasHeldSailings()) return true;
  if (!confirm(t("releaseWarningSearch"))) return false;

  releaseHeldSailings();
  return true;
}

// Re-query availability against the new search and send the user back to pick again.
function returnToSailingSelection() {
  if (checkoutFlow.hidden) return;
  closeSearchEditor();
  renderAvailability();
  navigateToStep("trips");
  result.textContent = t("sailingsReleased");
  checkoutFlow.scrollIntoView({ behavior: "smooth", block: "start" });
}

function navigateToStep(targetStep) {
  // The stepper can jump straight to payment, so gate it here rather than only on the Continue button.
  if (currentStep === "information" && ["payment", "success"].includes(targetStep) && !validateInformation()) {
    return;
  }

  // Going back to the capacity steps releases the held sailings too.
  if (["trips", "information", "payment"].includes(currentStep) && ["passengers", "vehicles"].includes(targetStep)) {
    if (state.sailingsHeld) {
      if (!confirm(t("releaseWarningCapacity"))) return;
      releaseHeldSailings();
    }
  }

  currentStep = targetStep;
  setCheckoutStep(targetStep);
}

checkoutSteps.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.disabled) navigateToStep(button.dataset.stepTarget);
  });
});

function unlockSteps(...steps) {
  checkoutSteps.forEach((button) => {
    const target = button.dataset.stepTarget;
    if (steps.includes(target)) {
      button.disabled = false;
    }
  });
  syncMobileProgress();
}

function resetUnlockedSteps(...steps) {
  checkoutSteps.forEach((button) => {
    const target = button.dataset.stepTarget;
    button.disabled = !steps.includes(target);
  });
  syncMobileProgress();
}

// Testing escape hatch: ?skipValidation in the URL, or HERJOLFUR_SKIP_VALIDATION
// in localStorage, lets you walk the flow without filling required fields.
// Off unless explicitly switched on, and announced on screen when it is.
function validationBypassed() {
  return new URLSearchParams(window.location.search).has("skipValidation")
    || localStorage.getItem("HERJOLFUR_SKIP_VALIDATION") === "1";
}

function urlForcesBypass() {
  return new URLSearchParams(window.location.search).has("skipValidation");
}

function syncTestingModeSwitch() {
  const input = document.querySelector("[data-testing-mode]");
  const hint = document.querySelector("[data-testing-mode-hint]");
  if (!input) return;

  input.checked = validationBypassed();
  // The URL flag wins, so the switch can't contradict it.
  input.disabled = urlForcesBypass();
  if (hint) {
    hint.hidden = !input.disabled;
    hint.textContent = input.disabled ? t("testingModeUrlHint") : "";
  }
}

function validatePanel(step) {
  if (validationBypassed()) return true;
  const panel = document.querySelector(`[data-step-panel='${step}']`);
  const invalid = [...panel.querySelectorAll("input[required]")]
    .find((input) => !input.checkValidity());
  if (!invalid) return true;
  invalid.reportValidity();
  invalid.focus();
  return false;
}

document.querySelectorAll("[data-flow-go]").forEach((button) => {
  button.addEventListener("click", () => {
    const currentPanel = button.closest("[data-step-panel]")?.dataset.stepPanel;
    let target = button.dataset.flowGo;

    // Action handlers for specific forward transitions
    if (currentPanel === "passengers" && target === "vehicles") {
      state.totalPassengers = passengerTotal();
      unlockSteps("vehicles");
    } else if (currentPanel === "vehicles" && target === "trips") {
      renderAvailability();
      unlockSteps("trips");
    }

    if (currentPanel === "information" && target === "payment") {
      if (!validateInformation()) return;
      unlockSteps("payment");
    }

    navigateToStep(target);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  // Reset all state selections on new search
  state.sailingsHeld = false;
  state.outboundSailing = "";
  state.returnSailing = "";
  state.passengerDetails = [];

  // Set defaults: 1 adult, same party both ways, no vehicle
  state.totalPassengers = 1;
  state.counts = { adult: 1, teenSenior: 0, child: 0 };
  state.returnCounts = { adult: 1, teenSenior: 0, child: 0 };
  state.differentReturnCount = false;
  document.querySelector("[data-different-return]").checked = false;
  state.vehicleMode = "none";
  state.hasVehicle = false;
  state.vehicles = [];
  
  updateCounters();
  updateVehicleBranch();
  
  checkoutFlow.hidden = false;
  document.body.classList.remove("is-search-open");
  syncCheckoutChrome();
  resetUnlockedSteps("passengers");
  navigateToStep("passengers");

  result.textContent = t("searchReady");
  checkoutFlow.scrollIntoView({ behavior: "smooth", block: "start" });
});

let bookingLockInterval;
document.getElementById("lock-inventory-btn")?.addEventListener("click", () => {
  if (!state.outboundSailing || (currentMode === "return" && !state.returnSailing)) {
    result.textContent = t("selectRequired");
    result.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  state.sailingsHeld = true;
  startBookingLockTimer();
  const nextStep = "information";
  unlockSteps(nextStep);
  navigateToStep(nextStep);
});

function startBookingLockTimer() {
  const summaryTitle = document.querySelector(".summary-total");
  if (!summaryTitle) return;

  let timeLeft = 15 * 60; // 15 minutes
  const existingTimer = document.getElementById("booking-lock-timer");
  if (existingTimer) {
    existingTimer.remove();
  }
  if (bookingLockInterval) {
    clearInterval(bookingLockInterval);
  }

  const timerDisplay = document.createElement("div");
  timerDisplay.id = "booking-lock-timer";
  timerDisplay.style.color = "var(--brand)";
  timerDisplay.style.fontWeight = "bold";
  timerDisplay.style.marginTop = "10px";
  timerDisplay.style.fontSize = "0.9rem";
  
  timerDisplay.setAttribute("role", "status");
  timerDisplay.setAttribute("aria-live", "polite");
  summaryTitle.parentElement.appendChild(timerDisplay);

  const paintTimer = () => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    const time = `${mins}:${String(secs).padStart(2, "0")}`;
    timerDisplay.textContent = message("lockActive", { time });
    setCommitLock(time);
  };
  paintTimer();

  bookingLockInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(bookingLockInterval);
      timerDisplay.textContent = t("lockExpired");
      setCommitLock(null);
      state.sailingsHeld = false;
      state.outboundSailing = "";
      state.returnSailing = "";
      renderAvailability();
      document.querySelectorAll("[data-sailing-group] input:checked").forEach((input) => { input.checked = false; });
      state.outboundSailing = "";
      state.returnSailing = "";
      resetUnlockedSteps("passengers", "vehicles", "trips");
      navigateToStep("trips");
    } else {
      paintTimer();
    }
  }, 1000);
}

// Dynamically generate passenger details forms (Step 4) and bind changes to state
function passengerTypeLabel(type) {
  return t(`type${type[0].toUpperCase()}${type.slice(1)}`);
}

function passengerDetailCard(passenger, index) {
  const card = document.createElement("div");
  card.className = "passenger-detail-card";
  card.innerHTML = `
    <div class="passenger-detail-card__head">
      <h4>${t("passenger")} ${index + 1}</h4>
      <span class="passenger-type-tag">${passengerTypeLabel(passenger.type)}</span>
    </div>
    <div class="field-grid">
      <label>
        <span>${t("firstName")}<abbr class="required-marker" title="${t("required")}">*</abbr></span>
        <input type="text" data-passenger-field="firstName" required placeholder="${t("firstName")}" value="${passenger.firstName}">
      </label>
      <label>
        <span>${t("lastName")}<abbr class="required-marker" title="${t("required")}">*</abbr></span>
        <input type="text" data-passenger-field="lastName" required placeholder="${t("lastName")}" value="${passenger.lastName}">
      </label>
      <label>
        <span>${t("birthdate")}<abbr class="required-marker" title="${t("required")}">*</abbr></span>
        <input type="date" data-passenger-field="birthdate" required value="${passenger.birthdate}">
      </label>
      <label>
        <span>${t("nationality")}<abbr class="required-marker" title="${t("required")}">*</abbr></span>
        <input type="text" data-passenger-field="nationality" required placeholder="${t("nationalityPlaceholder")}" value="${passenger.nationality}">
      </label>
    </div>
    <label class="check-row">
      <input type="checkbox" data-passenger-field="disabled" ${passenger.disabled ? "checked" : ""}>
      <span>${t("disabled")}</span>
    </label>
  `;

  card.querySelectorAll("[data-passenger-field]").forEach((input) => {
    input.addEventListener("input", (event) => {
      const field = event.target.dataset.passengerField;
      passenger[field] = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    });
  });

  return card;
}

function renderPassengerDetailFields() {
  const container = document.querySelector("[data-passenger-details-container]");
  if (!container) return;

  syncPassengerRoster();
  container.innerHTML = "";
  state.passengerDetails.forEach((passenger, index) => {
    container.appendChild(passengerDetailCard(passenger, index));
  });
}

// Generate the pre-payment checkout summary (Step 5)
function reviewTripBlock(number, routeKey, isoDate, sailingTime, leg) {
  return `
    <section class="review-trip">
      <h4>${t("trip")} ${number}</h4>
      <dl>
        <dt>${t("route")}</dt>
        <dd>${routeText(routeKey)}</dd>
        <dt>${t("date")}</dt>
        <dd>${formatDisplayDate(isoDate)}</dd>
        <dt>${t("departureTime")}</dt>
        <dd>${sailingTime || t("notSelected")}</dd>
        <dt>${t("passengers")}</dt>
        <dd>${countsSummary(countsForLeg(leg))}</dd>
      </dl>
    </section>
  `;
}

function renderOrderReviewDetails() {
  const reviewContainer = document.querySelector("[data-review-details]");
  if (!reviewContainer) return;

  const trips = [reviewTripBlock(1, state.trip1Route, departureInput.value, state.outboundSailing, "outbound")];
  if (currentMode === "return") {
    trips.push(reviewTripBlock(2, state.trip2Route, returnInput.value, state.returnSailing, "return"));
  }

  const vehicles = bookedVehicles();
  const vehicleHtml = vehicles.length
    ? vehicles.map((vehicle, index) =>
        `<p><strong>${t("vehicle")} ${index + 1}:</strong> ${singleVehicleSummary(vehicle)}</p>`).join("")
    : `<p>${t("noVehicleRegistered")}</p>`;

  reviewContainer.innerHTML = `
    <div class="review-body">
      ${trips.join("")}
      <hr>
      ${reviewPassengerList()}
      ${vehicleHtml}
      <hr>
      ${reviewFareBreakdown()}
      <p class="review-total"><strong>${t("totalDue")}:</strong> ${formatPrice(priceTotal())}</p>
    </div>
  `;
}

// The spec calls for itemised prices, not just a total.
function reviewFareBreakdown() {
  const legs = currentMode === "return" ? ["outbound", "return"] : ["outbound"];

  const rows = legs.flatMap((leg, index) => {
    const tripName = `${t("trip")} ${index + 1}`;
    const counts = countsForLeg(leg);
    const lines = passengerTypes
      .filter((type) => counts[type])
      .map((type) => fareRow(
        `${tripName} · ${counts[type]} × ${passengerTypeLabel(type)}`,
        counts[type] * fareApi.catalog.passengers[type],
      ));

    bookedVehicles().forEach((vehicle, vehicleIndex) => {
      lines.push(fareRow(
        `${tripName} · ${t("vehicle")} ${vehicleIndex + 1} (${vehicleLabel(vehicle)})`,
        fareApi.catalog.vehicles[vehicleCategory(vehicle)],
      ));
    });
    return lines;
  });

  return `
    <p><strong>${t("fareBreakdown")}</strong></p>
    <dl class="fare-breakdown">${rows.join("")}</dl>
  `;
}

function fareRow(label, amount) {
  return `<dt>${label}</dt><dd>${formatPrice(amount)}</dd>`;
}

// People screenshot the confirmation screen, so restate what they actually booked.
function renderSuccessRecap() {
  const container = document.querySelector("[data-success-recap]");
  if (!container) return;

  const trips = [reviewTripBlock(1, state.trip1Route, departureInput.value, state.outboundSailing, "outbound")];
  if (currentMode === "return") {
    trips.push(reviewTripBlock(2, state.trip2Route, returnInput.value, state.returnSailing, "return"));
  }

  const vehicles = bookedVehicles();
  container.innerHTML = `
    <h4>${t("successRecap")}</h4>
    ${trips.join("")}
    <hr>
    ${reviewPassengerList()}
    ${vehicles.length
      ? vehicles.map((vehicle, index) =>
          `<p><strong>${t("vehicle")} ${index + 1}:</strong> ${singleVehicleSummary(vehicle)}</p>`).join("")
      : `<p>${t("noVehicleRegistered")}</p>`}
    <hr>
    <p class="review-total"><strong>${t("totalPaid")}:</strong> ${formatPrice(priceTotal())}</p>
  `;
}

function reviewPassengerList() {
  const items = state.passengerDetails.map((passenger, index) => {
    const name = [passenger.firstName, passenger.lastName].filter(Boolean).join(" ") || "—";
    const birthdate = passenger.birthdate ? formatDisplayDate(passenger.birthdate) : t("birthdateMissing");
    const nationality = passenger.nationality || t("nationalityPlaceholder");
    return `
      <li>
        <strong>${t("passenger")} ${index + 1}:</strong> ${name}
        (${birthdate}, ${nationality})${passenger.disabled ? ` — ${t("disabled")}` : ""}
      </li>
    `;
  }).join("");

  return `<p><strong>${t("passengers")} (${state.passengerDetails.length})</strong></p><ul>${items}</ul>`;
}

// Prefill mock profile details for Jón Jónsson
function prefillSavedDetails() {
  const savedProfiles = [
    { firstName: "Jón", lastName: "Jónsson", birthdate: "1985-05-12", nationality: "Ísland", disabled: false },
    { firstName: "María", lastName: "Jónsdóttir", birthdate: "1988-09-22", nationality: "Ísland", disabled: false },
    { firstName: "Aron", lastName: "Jónsson", birthdate: "2015-06-15", nationality: "Ísland", disabled: false },
    { firstName: "Katrín", lastName: "Jónsdóttir", birthdate: "2018-04-10", nationality: "Ísland", disabled: false },
  ];
  // Keep each passenger's fare type and return-leg choice; only fill in the identity.
  state.passengerDetails = state.passengerDetails.map((passenger, index) => ({
    ...passenger,
    ...(savedProfiles[index] || {}),
  }));

  const emailInput = document.querySelector("[name='email']");
  if (emailInput) emailInput.value = "jon@example.is";
  const phoneInput = document.querySelector("[name='phone']");
  if (phoneInput) phoneInput.value = "555-1234";

  const cardNumber = document.querySelector("[name='cardNumber']");
  if (cardNumber) cardNumber.value = "1111 2222 3333 4444";
  const cardExpiry = document.querySelector("[name='cardExpiry']");
  if (cardExpiry) cardExpiry.value = "12/28";
  const cardName = document.querySelector("[name='cardName']");
  if (cardName) cardName.value = "Jón Jónsson";
  const cardCvc = document.querySelector("[name='cardCvc']");
  if (cardCvc) cardCvc.value = "999";

  const termsCheckbox = document.querySelector("[name='termsAccepted']");
  if (termsCheckbox) termsCheckbox.checked = true;

  const loginContainer = document.querySelector("[data-login-container]");
  if (loginContainer) {
    const statusMsg = document.createElement("div");
    statusMsg.textContent = t("prefillDone");
    statusMsg.style.color = "var(--green)";
    statusMsg.style.fontWeight = "bold";
    statusMsg.style.marginTop = "10px";
    loginContainer.appendChild(statusMsg);
    setTimeout(() => statusMsg.remove(), 3000);
  }

  updateCounters();
  renderPassengerDetailFields();
  updateFlowSummary();
}

// Wire up the mock login flow container
const loginContainer = document.querySelector("[data-login-container]");

function renderLoginCallout() {
  if (!loginContainer) return;

  loginContainer.innerHTML = state.loggedIn
    ? `
      <h3 data-i18n="loggedInTitle">${t("loggedInTitle")}</h3>
      <p data-i18n="loggedInCopy">${t("loggedInCopy")}</p>
      <button class="btn btn--primary" type="button" data-prefill-btn data-i18n="prefillCta">${t("prefillCta")}</button>
    `
    : `
      <h3 data-i18n="loginTitle">${t("loginTitle")}</h3>
      <p data-i18n="loginCopy">${t("loginCopy")}</p>
      <button class="btn btn--secondary" type="button" data-login-btn data-i18n="signIn">${t("signIn")}</button>
    `;
}

if (loginContainer) {
  loginContainer.addEventListener("click", (event) => {
    if (event.target.closest("[data-login-btn]")) {
      state.loggedIn = true;
      renderLoginCallout();
    }

    if (event.target.closest("[data-prefill-btn]")) {
      prefillSavedDetails();
    }
  });
}

document.querySelectorAll("[data-counter-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const stepper = button.closest("[data-counter], [data-return-counter]");
    const isReturn = "returnCounter" in stepper.dataset;
    const key = isReturn ? stepper.dataset.returnCounter : stepper.dataset.counter;
    const counts = isReturn ? state.returnCounts : state.counts;
    const delta = button.dataset.counterAction === "increment" ? 1 : -1;
    counts[key] = Math.max(0, counts[key] + delta);
    updateCounters();
  });
});

document.querySelector("[data-different-return]").addEventListener("change", (event) => {
  state.differentReturnCount = event.target.checked;
  // Start the return leg from the outbound party rather than from nothing.
  if (state.differentReturnCount) {
    state.returnCounts = { ...state.counts };
  }
  updateCounters();
});

document.querySelectorAll("[data-vehicle-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    state.vehicleMode = button.dataset.vehicleMode;
    updateVehicleBranch();
  });
});

addVehicleButton.addEventListener("click", () => {
  state.vehicles.push(newVehicle());
  updateVehicleBranch();
});

// The panel has a confirm button at the top and one at the bottom of the form.
document.querySelectorAll("[data-payment-submit]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!validatePanel("payment")) return;
    clearInterval(bookingLockInterval);
    // The hold became a booking; a frozen countdown would assert a hold that no longer exists.
    state.sailingsHeld = false;
    document.getElementById("booking-lock-timer")?.remove();
    setCommitLock(null);
    unlockSteps("success");
    setCheckoutStep("success");
  });
});

document.querySelector("[data-search-back]").addEventListener("click", () => {
  checkoutFlow.hidden = true;
  syncCheckoutChrome();
  form.querySelector("button[type='submit']").focus();
});


document.querySelectorAll("[name='outboundSailing']").forEach((input) => {
  input.addEventListener("change", () => {
    state.outboundSailing = input.value;
    updateFlowSummary();
  });
});

document.querySelectorAll("[name='returnSailing']").forEach((input) => {
  input.addEventListener("change", () => {
    state.returnSailing = input.value;
    updateFlowSummary();
  });
});

document.querySelector("[data-testing-mode]")?.addEventListener("change", (event) => {
  if (event.target.checked) {
    localStorage.setItem("HERJOLFUR_SKIP_VALIDATION", "1");
  } else {
    localStorage.removeItem("HERJOLFUR_SKIP_VALIDATION");
  }

  syncTestingModeSwitch();
});

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.language;
    localStorage.setItem("herjolfur-language", currentLanguage);
    result.textContent = "";
    applyLanguage();
  });
});

dateTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const field = trigger.dataset.dateTrigger;
    if (calendarState.field === field && !calendar.hidden) {
      closeCalendar();
      return;
    }
    openCalendar(field);
  });
});

document.querySelector("[data-calendar-prev]").addEventListener("click", () => {
  calendarState.month = addMonths(calendarState.month, -1);
  renderCalendar();
});

document.querySelector("[data-calendar-next]").addEventListener("click", () => {
  calendarState.month = addMonths(calendarState.month, 1);
  renderCalendar();
});

calendarGrid.addEventListener("click", (event) => {
  const day = event.target.closest("[data-calendar-day]");
  if (!day || day.disabled || !calendarState.field) {
    return;
  }

  const field = calendarState.field;
  const input = field === "from" ? departureInput : returnInput;
  if (day.dataset.calendarDay !== input.value && !confirmSearchChange()) {
    closeCalendar();
    return;
  }

  setDateValue(field, day.dataset.calendarDay);
  closeCalendar();
  returnToSailingSelection();
});

document.addEventListener("click", (event) => {
  if (
    !calendar.hidden
    && !event.target.closest("[data-calendar]")
    && !event.target.closest("[data-date-trigger]")
  ) {
    closeCalendar();
  }
});

window.addEventListener("resize", () => {
  if (!calendar.hidden && calendarState.field) {
    positionCalendar(document.querySelector(`[data-date-trigger='${calendarState.field}']`));
  }
});



const swapTripsBtn = document.querySelector(".swap-trips-btn");
if (swapTripsBtn) {
  swapTripsBtn.addEventListener("click", () => {
    if (!confirmSearchChange()) return;

    const nextTrip1 = oppositeRoute(state.trip1Route);
    renderRoute(document.querySelector("#trip-1-display"), nextTrip1);
    renderRoute(document.querySelector("#trip-2-display"), oppositeRoute(nextTrip1));
    result.textContent = "";
    returnToSailingSelection();
  });
}

departureInput.addEventListener("change", updateFlowSummary);
returnInput.addEventListener("change", updateFlowSummary);

// ── Mobile checkout frame ───────────────────────────────────────────────────
// On small screens the flow is reframed: the search card collapses to a fixed
// context bar, the stepper becomes a progress strip, and the total, lock timer
// and primary action live in a fixed commit bar. All of it is inert on desktop:
// the elements are display: none outside the ≤620px media query.
function mobileCheckoutActive() {
  // Matches the compact-frame breakpoint in the stylesheet.
  return document.body.classList.contains("is-checkout")
    && window.matchMedia("(max-width: 820px)").matches;
}

function syncCheckoutChrome() {
  const active = !checkoutFlow.hidden;
  document.body.classList.toggle("is-checkout", active);
  if (!active) {
    document.body.classList.remove("is-summary-open", "is-search-open", "is-step-success");
    document.querySelector("[data-summary-scrim]").hidden = true;
  }
  syncTopbarContext();
  syncMobileProgress();
  syncCommitBar();
}

function formatShortDate(value) {
  const date = parseISO(value);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  return currentLanguage === "is" ? `${day}.${month}.` : `${month}/${day}`;
}

function syncTopbarContext() {
  const routeNode = document.querySelector("[data-topbar-route]");
  if (!routeNode) return;
  const [from, to] = routes[state.trip1Route];
  routeNode.textContent = `${from} ⇄ ${to}`;
  document.querySelector("[data-topbar-dates]").textContent = currentMode === "return"
    ? `${formatShortDate(departureInput.value)} – ${formatShortDate(returnInput.value)}`
    : formatShortDate(departureInput.value);
  document.querySelector("[data-topbar-edit-label]").textContent =
    document.body.classList.contains("is-search-open") ? t("closeSearch") : t("editSearch");
}

function syncMobileProgress() {
  const segments = document.querySelector("[data-topbar-segments]");
  if (!segments) return;
  const activeIndex = stepOrder.indexOf(currentStep);
  const done = currentStep === "success";

  segments.innerHTML = "";
  checkoutSteps.forEach((stepButton, index) => {
    const segment = document.createElement("button");
    segment.type = "button";
    segment.className = "topbar-seg";
    segment.classList.toggle("is-done", done || index < activeIndex);
    segment.classList.toggle("is-now", index === activeIndex);
    segment.disabled = stepButton.disabled;
    segment.setAttribute("aria-label", stepButton.textContent.trim());
    segment.addEventListener("click", () => stepButton.click());
    segments.appendChild(segment);
  });

  document.querySelector("[data-topbar-steplabel]").textContent = done
    ? "✓"
    : `${activeIndex + 1}/${stepOrder.length} · ${t(currentStep)}`;

  // The strip's back chevron proxies the active panel's own back button.
  const backButton = document.querySelector("[data-topbar-back]");
  backButton.hidden = !document.querySelector(".checkout-panel.is-active .flow-actions .btn--secondary");
}

function syncCommitBar() {
  const action = document.querySelector("[data-commit-action]");
  if (!action) return;
  document.body.classList.toggle("is-step-success", currentStep === "success");

  const primary = document.querySelector(".checkout-panel.is-active .flow-actions .btn--primary");
  action.hidden = !primary;
  if (primary) {
    action.textContent = primary.textContent;
    action.disabled = primary.disabled;
  }
  document.querySelector("[data-commit-total]").textContent = formatPrice(priceTotal());
}

function setCommitLock(time) {
  const chip = document.querySelector("[data-commit-lock]");
  if (!chip) return;
  chip.hidden = !time;
  chip.textContent = time ? `⏱ ${time}` : "";
}

function setSummarySheet(open) {
  document.body.classList.toggle("is-summary-open", open);
  document.querySelector("[data-summary-scrim]").hidden = !open;
  document.querySelector("[data-commit-summary-toggle]").setAttribute("aria-expanded", String(open));
}

document.querySelector("[data-commit-action]").addEventListener("click", () => {
  document.querySelector(".checkout-panel.is-active .flow-actions .btn--primary")?.click();
});

document.querySelector("[data-topbar-back]").addEventListener("click", () => {
  document.querySelector(".checkout-panel.is-active .flow-actions .btn--secondary")?.click();
});

function closeSearchEditor() {
  document.body.classList.remove("is-search-open");
  document.querySelector("[data-topbar-edit]").setAttribute("aria-expanded", "false");
  syncTopbarContext();
}

document.querySelector("[data-topbar-edit]").addEventListener("click", () => {
  const open = document.body.classList.toggle("is-search-open");
  document.querySelector("[data-topbar-edit]").setAttribute("aria-expanded", String(open));
  syncTopbarContext();
  if (open) window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector("[data-commit-summary-toggle]").addEventListener("click", () => {
  setSummarySheet(!document.body.classList.contains("is-summary-open"));
});

document.querySelector("[data-summary-scrim]").addEventListener("click", () => {
  setSummarySheet(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!calendar.hidden) {
    closeCalendar();
    calendarState.trigger?.focus();
    return;
  }
  if (document.body.classList.contains("is-summary-open")) {
    setSummarySheet(false);
    return;
  }
  if (document.body.classList.contains("is-search-open")) {
    document.querySelector("[data-topbar-edit]").click();
  }
});
// ── end mobile checkout frame ───────────────────────────────────────────────

renderRoute(document.querySelector("#trip-1-display"), "landeyjahofn-vestmannaeyjar");
renderRoute(document.querySelector("#trip-2-display"), "vestmannaeyjar-landeyjahofn");
updateCounters();
updateVehicleBranch();
updateDateDisplays();
applyLanguage();
syncCheckoutChrome();
