(function () {
  "use strict";

  /* ---------------------------------------------
     Product Catalog Data (Specs, Dimensions, Fixes)
  --------------------------------------------- */
  var productsDatabase = {
    "elv70": {
      sku: "ELV70",
      title: "ELV70 7.0\" TFT Floor Position Indicator",
      desc: "Full-color 7-inch TFT display engineered for elevator car and landing operating panels. Features dynamic floor arrow synthesis, emergency messaging, and multi-bus support.",
      dimensions: {
        "Dimensions (W × H × D)": "198 × 112 × 18 mm",
        "Active Area": "154.08 × 85.92 mm",
        "Mounting Cutout": "184 × 98 mm (Flush mount)",
        "Supply Voltage": "12–28V DC Isolated",
        "Bus Interface": "CAN 2.0B (CiA 417) / RS-485 / Parallel"
      },
      fixes: [
        "Rev 2.4: Added transient over-voltage ESD protection (IEC 61000-4-2 Level 4).",
        "Rev 2.3: Fixed floor indicator flicker on high-noise DC power lines.",
        "Firmware v1.8: Integrated custom landing floor graphics over CAN."
      ],
      visual: "📐 [CAD DRAWING: ELV70-FRONT-REV2.4] · 198×112mm Aluminum Bezel",
      similar: ["elv47", "mtx5889", "can-bridge"]
    },
    "elv47": {
      sku: "ELV47",
      title: "ELV47 4.7\" Ultra-Slim Indicator",
      desc: "Compact portrait/landscape position indicator for narrow jambs and hall stations.",
      dimensions: {
        "Dimensions (W × H × D)": "138 × 68 × 14 mm",
        "Active Area": "105 × 58 mm",
        "Mounting Cutout": "126 × 56 mm",
        "Supply Voltage": "24V DC ±15%",
        "Bus Interface": "RS-485 Modbus RTU / 1-Wire"
      },
      fixes: [
        "Rev 1.2: Integrated low-profile JST screw terminal blocks.",
        "Firmware v1.3: Reduced idle power draw to under 80mA."
      ],
      visual: "📐 [CAD DRAWING: ELV47-COMPACT-JAMB] · 138×68mm Narrow Profile",
      similar: ["elv70", "fld5866"]
    },
    "mtx5889": {
      sku: "MTX-5889",
      title: "MTX-5889 Dot-Matrix Position Display",
      desc: "High-contrast 10×14 dual-color dot-matrix display with scrolling text and rolling arrow indicators.",
      dimensions: {
        "Dimensions (W × H × D)": "160 × 80 × 24 mm",
        "Matrix": "10 × 14 dots (Red / Amber LEDs)",
        "Mounting Cutout": "148 × 68 mm",
        "Supply Voltage": "12-24V AC/DC",
        "Bus Interface": "RS-485 / Binary / Gray Code"
      },
      fixes: [
        "Hardware fix: Upgraded constant-current LED drivers to eliminate brightness variance across segments.",
        "Hardware fix: Reverse-polarity auto-cutoff circuit added."
      ],
      visual: "📐 [CAD DRAWING: MTX-5889-LED] · Dual Color 10×14 Matrix",
      similar: ["fld5866", "elv47"]
    },
    "fld5866": {
      sku: "FLD-5866",
      title: "FLD-5866 7-Segment Position Indicator",
      desc: "High-luminance dual 7-segment display with directional arrows for high-ambient-light lobbies.",
      dimensions: {
        "Dimensions (W × H × D)": "140 × 70 × 20 mm",
        "Segment Height": "45 mm (1.75 inch)",
        "Mounting Cutout": "130 × 60 mm",
        "Supply Voltage": "12–24V DC",
        "Bus Interface": "Decimal / 1-of-N / Gray code"
      },
      fixes: [
        "Revision B: Added software configurable brightness dip-switch."
      ],
      visual: "📐 [CAD DRAWING: FLD-5866] · 7-Segment Dual Digits",
      similar: ["mtx5889", "elv47"]
    },
    "th1": {
      sku: "TH1",
      title: "TH1 Flush-Mount Smart Thermostat",
      desc: "Architectural room thermostat with radio networking, energy logging, and BACnet integration.",
      dimensions: {
        "Dimensions (W × H × D)": "86 × 86 × 12 mm (In-wall depth 28mm)",
        "Display": "Backlit e-Paper / Monochrome LCD",
        "Mounting": "Standard European 60mm round wall box",
        "Power Supply": "230V AC or 24V AC/DC",
        "Network": "868 MHz ISM band / Modbus RTU"
      },
      fixes: [
        "Rev 3.0: Recalibrated NTC thermal sensor isolation from internal power supply heat.",
        "Firmware v2.1: Integrated adaptive PI heating algorithm."
      ],
      visual: "📐 [CAD DRAWING: TH1-THERM] · 86×86mm Flush Wallmount",
      similar: ["th1-din", "rf-node"]
    },
    "th1-din": {
      sku: "TH1-DIN",
      title: "TH1 DIN-Rail HVAC Multi-Relay Controller",
      desc: "Central electrical panel controller pairing with TH1 thermostats to actuate valves, fans, and chillers.",
      dimensions: {
        "Dimensions (W × H × D)": "105 × 90 × 65 mm (6 DIN Modules)",
        "Relay Outputs": "6× 10A @ 250V AC",
        "Supply Voltage": "110–240V AC 50/60Hz",
        "Interface": "RS-485 / Modbus RTU / Sub-1GHz RF"
      },
      fixes: [
        "Rev 1.1: Snubber circuit added to relay coils to protect against inductive load sparks."
      ],
      visual: "📐 [CAD DRAWING: TH1-DIN] · 6-Unit DIN Enclosure",
      similar: ["th1", "can-bridge"]
    },
    "clk100": {
      sku: "CLK-100",
      title: "CLK-100 Master Clock & Bell Driver",
      desc: "Industrial quartz-accurate master clock driver built to actuate large tower clock movements and municipal bell chimes.",
      dimensions: {
        "Dimensions (W × H × D)": "220 × 140 × 60 mm",
        "Enclosure": "IP65 Weatherproof ABS Box",
        "Impulse Voltage": "24V / 48V Polarized impulses",
        "GPS Sync": "Optional external GPS antenna input"
      },
      fixes: [
        "Rev 2.0: Battery backup supercapacitor keeps internal time for up to 30 days without mains power."
      ],
      visual: "📐 [CAD DRAWING: CLK-100] · IP65 Weatherproof Industrial Casing",
      similar: ["rf-node"]
    },
    "rf-rec8": {
      sku: "RF-REC8",
      title: "RF-REC8 8-Channel Industrial Receiver",
      desc: "Long-range wireless switching receiver for elevators, garage gates, and plant automation.",
      dimensions: {
        "Dimensions (W × H × D)": "115 × 90 × 40 mm",
        "Channels": "8 Independent Form-C SPDT Relays",
        "Frequency": "433.92 MHz / 868 MHz FSK",
        "Sensitivity": "-118 dBm"
      },
      fixes: [
        "Rev 1.4: Rolling-code algorithm updated to 128-bit AES encryption."
      ],
      visual: "📐 [CAD DRAWING: RF-REC8] · Multi-channel Antenna Unit",
      similar: ["rf-node", "custom-ecm"]
    },
    "rf-node": {
      sku: "RF-NODE",
      title: "RF-Node Telemetry Hub",
      desc: "Industrial IoT radio transceiver connecting field sensors to SCADA networks.",
      dimensions: {
        "Dimensions (W × H × D)": "80 × 80 × 35 mm",
        "RF Range": "Up to 3 km Line-of-sight",
        "Protocols": "Proprietary Sub-1GHz Mesh / Modbus bridge"
      },
      fixes: [
        "Firmware v3.2: Implemented automatic frequency hopping to circumvent localized RF interference."
      ],
      visual: "📐 [CAD DRAWING: RF-NODE] · Sub-GHz Industrial Transceiver",
      similar: ["rf-rec8", "can-bridge"]
    },
    "can-bridge": {
      sku: "CAN-BRIDGE",
      title: "CAN-to-Modbus Protocol Bridge",
      desc: "Bi-directional bridge translating CANopen Lift (CiA 417) telegrams to standard Modbus RTU/TCP.",
      dimensions: {
        "Dimensions (W × H × D)": "72 × 90 × 58 mm (4 DIN Modules)",
        "Isolation": "2.5 kV Galvanic Isolation on CAN bus",
        "Baud Rates": "Configurable from 20 kbps to 1 Mbps"
      },
      fixes: [
        "Hardware Rev 2.0: Integrated 120Ω termination resistor with sliding selection switch."
      ],
      visual: "📐 [CAD DRAWING: CAN-BRIDGE] · Galvanically Isolated DIN Unit",
      similar: ["custom-ecm", "elv70"]
    },
    "custom-ecm": {
      sku: "ECM-01",
      title: "Custom Embedded Control Module",
      desc: "Custom-manufactured embedded microprocessor board designed to client specifications.",
      dimensions: {
        "Form Factor": "Custom OEM Eurocard / DIN-rail",
        "Processors": "ARM Cortex-M4 / PIC32 Architecture",
        "Protection": "Conformal coating for harsh industrial environments"
      },
      fixes: [
        "Batch 04: Gold flash immersion (ENIG) surface finish standard."
      ],
      visual: "📐 [CAD DRAWING: ECM-CUSTOM] · OEM Carrier Platform",
      similar: ["can-bridge"]
    }
  };

  /* ---------------------------------------------
     Translations
  --------------------------------------------- */
  var translations = {
    en: {
      "brand.tag": "Digital & Wireless Applications",
      "nav.home": "Home",
      "nav.company": "Company",
      "nav.products": "Products",
      "nav.support": "Support",
      "nav.news": "News",
      "nav.contact": "Contact",

      "menu.elv.desc": "TFT, Dot-Matrix and segment floor indicators.",
      "menu.th.desc": "BACnet & Modbus HVAC networked controls.",
      "menu.rf.desc": "Sub-1GHz & RF multi-channel relay modules.",
      "menu.ecm.desc": "Fieldbus protocol converters and IO bridges.",

      "hero.since": "Engineering digital & wireless devices since 2009",
      "hero.headline": "Displays and control<br>modules built for<br>the field.",
      "hero.copy": "Digimations designs and manufactures elevator position indicators, wireless controls, smart thermostats and embedded modules — engineered in Athens, installed worldwide.",
      "hero.cta1": "View products",
      "hero.cta2": "Talk to us",

      "company.kicker": "Company",
      "company.title": "Established 2009, by working engineers.",
      "company.p1": "Digimations was founded in 2009 by a team of experienced engineers working in electronic and industrial design. The company holds deep knowledge across automation, telematics, and telecom & radio communications.",
      "company.p2": "We've designed and produced a wide range of consumer and industrial devices, and we provide technical support and consultancy directly to large companies. The aim stays the same as it was on day one: keep improving the products and grow what we build.",
      "company.fact1.k": "Founded",
      "company.fact1.k2": "Based",
      "company.fact1.v2": "Athens, Greece",
      "company.fact1.k3": "Focus",
      "company.fact1.v3": "Automation · Telematics · Radio",

      "products.kicker": "Products",
      "products.title": "Five product lines, one engineering team.",
      "products.elevator.title": "Elevator Display Products",
      "products.elevator.copy": "Floor position indicators from 2.4\" to 7.0\", touch and remote-control units, 7-segment and dot-matrix arrow displays.",
      "products.thermostat.title": "Smart Thermostats",
      "products.thermostat.copy": "Temperature adjustment, time programming, energy-consumption measurement, and radio-network operation.",
      "products.clock.title": "Clock Tower Products",
      "products.clock.copy": "Tower clocks and bell systems, built for long-term outdoor installation.",
      "products.wireless.title": "Wireless Applications",
      "products.wireless.copy": "Radio-network devices for remote monitoring and control across industrial sites.",
      "products.embedded.title": "Embedded Control Modules",
      "products.embedded.copy": "Custom embedded boards and control logic built into partner products.",

      "modal.dimensions": "Dimensions & Mounting Specs",
      "modal.revisions": "Hardware & Firmware Fixes",
      "modal.similar": "Related & Compatible Products",
      "modal.inquire": "Inquire About This Model",

      "support.kicker": "Support",
      "support.title": "Technical support & consultancy.",
      "support.p1": "Every installation gets direct access to the engineers who designed it — not a ticket queue. Reach out for install guidance, diagnostics, spare parts, or a custom modification to an existing product.",
      "support.cta": "Request support",

      "news.kicker": "Company news",
      "news.title": "Recent updates",
      "news.item1": "New position indicator with arrows — DOT-MATRIX (10×14 dots).",
      "news.item2": "New position indicator with arrows — 7-Segment (FLD-5866).",
      "news.item3": "New position indicator with arrows — DOT-MATRIX (7×5 dots).",
      "news.item4": "New position indicator with arrows — 7-Segment (FLD-7884).",

      "contact.kicker": "Contact",
      "contact.title": "Get in touch.",
      "contact.addr1": "Ag. Dimitrios, Athens",
      "contact.addr2": "Attika, 17343, Greece",
      "contact.fax": "Fax:",
      "contact.mobile": "Mobile:",
      "contact.form.name": "Your name",
      "contact.form.email": "Your email",
      "contact.form.subject": "Subject",
      "contact.form.message": "Your message",
      "contact.form.send": "Send message",
      "contact.form.sent": "Thanks — your message has been noted. We'll reply by email shortly.",

      "footer.rights": "All rights reserved.",
      "footer.made": "Athens, Greece"
    },

    gr: {
      "brand.tag": "Ψηφιακές & Ασύρματες Εφαρμογές",
      "nav.home": "Αρχική",
      "nav.company": "Εταιρεία",
      "nav.products": "Προϊόντα",
      "nav.support": "Υποστήριξη",
      "nav.news": "Νέα",
      "nav.contact": "Επικοινωνία",

      "menu.elv.desc": "Ενδείκτες θέσης ορόφου TFT, Dot-Matrix και 7-segment.",
      "menu.th.desc": "Δικτυωμένοι θερμοστάτες BACnet & Modbus HVAC.",
      "menu.rf.desc": "Μονάδες ρελέ Sub-1GHz και ασύρματος έλεγχος.",
      "menu.ecm.desc": "Μετατροπείς πρωτοκόλλων fieldbus και γέφυρες IO.",

      "hero.since": "Σχεδιάζουμε ψηφιακές & ασύρματες συσκευές από το 2009",
      "hero.headline": "Ενδείξεις και μονάδες<br>ελέγχου φτιαγμένες<br>για το πεδίο.",
      "hero.copy": "Η Digimations σχεδιάζει και κατασκευάζει ενδείκτες θέσης ανελκυστήρων, ασύρματα συστήματα ελέγχου, έξυπνους θερμοστάτες και ενσωματωμένες μονάδες — σχεδιασμένα στην Αθήνα, εγκατεστημένα παγκοσμίως.",
      "hero.cta1": "Δείτε τα προϊόντα",
      "hero.cta2": "Επικοινωνήστε μαζί μας",

      "company.kicker": "Εταιρεία",
      "company.title": "Ιδρύθηκε το 2009, από ενεργούς μηχανικούς.",
      "company.p1": "Η Digimations ιδρύθηκε το 2009 από μια ομάδα έμπειρων μηχανικών με αντικείμενο τον ηλεκτρονικό και βιομηχανικό σχεδιασμό. Η εταιρεία διαθέτει βαθιά γνώση σε αυτοματισμούς, τηλεματική και τηλεπικοινωνίες & ραδιοεπικοινωνίες.",
      "company.p2": "Έχουμε σχεδιάσει και παράξει ένα ευρύ φάσμα καταναλωτικών και βιομηχανικών συσκευών, και παρέχουμε τεχνική υποστήριξη και συμβουλευτική απευθείας σε μεγάλες εταιρείες. Ο στόχος παραμένει ίδιος από την πρώτη μέρα: να βελτιώνουμε συνεχώς τα προϊόντα και να αναπτύσσουμε αυτά που φτιάχνουμε.",
      "company.fact1.k": "Ίδρυση",
      "company.fact1.k2": "Έδρα",
      "company.fact1.v2": "Αθήνα, Ελλάδα",
      "company.fact1.k3": "Αντικείμενο",
      "company.fact1.v3": "Αυτοματισμοί · Τηλεματική · Ραδιοεπικοινωνίες",

      "products.kicker": "Προϊόντα",
      "products.title": "Πέντε σειρές προϊόντων, μία ομάδα μηχανικών.",
      "products.elevator.title": "Ενδείξεις Ανελκυστήρων",
      "products.elevator.copy": "Ενδείκτες θέσης ορόφου από 2.4\" έως 7.0\", μονάδες αφής και τηλεχειρισμού, ενδείξεις 7-segment και dot-matrix με βέλη.",
      "products.thermostat.title": "Έξυπνοι Θερμοστάτες",
      "products.thermostat.copy": "Ρύθμιση θερμοκρασίας, χρονοπρογραμματισμός, μέτρηση κατανάλωσης ενέργειας και λειτουργία μέσω ραδιοδικτύου.",
      "products.clock.title": "Ρολόγια Πύργων",
      "products.clock.copy": "Ρολόγια πύργων και συστήματα καμπάνας, σχεδιασμένα για μακροχρόνια εξωτερική εγκατάσταση.",
      "products.wireless.title": "Ασύρματες Εφαρμογές",
      "products.wireless.copy": "Συσκευές ραδιοδικτύου για απομακρυσμένη παρακολούθηση και έλεγχο σε βιομηχανικούς χώρους.",
      "products.embedded.title": "Ενσωματωμένες Μονάδες Ελέγχου",
      "products.embedded.copy": "Προσαρμοσμένες ενσωματωμένες πλακέτες και λογική ελέγχου, ενσωματωμένες σε προϊόντα συνεργατών.",

      "modal.dimensions": "Διαστάσεις & Στήριξη",
      "modal.revisions": "Αναθεωρήσεις & Διορθώσεις Υλικού/Firmware",
      "modal.similar": "Σχετικά & Συμβατά Προϊόντα",
      "modal.inquire": "Ζητήστε Φυλλάδιο / Προσφορά",

      "support.kicker": "Υποστήριξη",
      "support.title": "Τεχνική υποστήριξη & συμβουλευτική.",
      "support.p1": "Κάθε εγκατάσταση έχει άμεση πρόσβαση στους μηχανικούς που τη σχεδίασαν — όχι σε ουρά αιτημάτων. Επικοινωνήστε για οδηγίες εγκατάστασης, διαγνωστικά, ανταλλακτικά ή προσαρμογή υπάρχοντος προϊόντος.",
      "support.cta": "Αίτημα υποστήριξης",

      "news.kicker": "Νέα εταιρείας",
      "news.title": "Πρόσφατες ενημερώσεις",
      "news.item1": "Νέος ενδείκτης θέσης με βέλη — DOT-MATRIX (10×14 κουκκίδες).",
      "news.item2": "Νέος ενδείκτης θέσης με βέλη — 7-Segment (FLD-5866).",
      "news.item3": "Νέος ενδείκτης θέσης με βέλη — DOT-MATRIX (7×5 κουκκίδες).",
      "news.item4": "Νέος ενδείκτης θέσης με βέλη — 7-Segment (FLD-7884).",

      "contact.kicker": "Επικοινωνία",
      "contact.title": "Επικοινωνήστε μαζί μας.",
      "contact.addr1": "Αγ. Δημήτριος, Αθήνα",
      "contact.addr2": "Αττική, 17343, Ελλάδα",
      "contact.fax": "Fax:",
      "contact.mobile": "Κινητό:",
      "contact.form.name": "Το όνομά σας",
      "contact.form.email": "Το email σας",
      "contact.form.subject": "Θέμα",
      "contact.form.message": "Το μήνυμά σας",
      "contact.form.send": "Αποστολή μηνύματος",
      "contact.form.sent": "Ευχαριστούμε — το μήνυμά σας καταχωρήθηκε. Θα απαντήσουμε σύντομα μέσω email.",

      "footer.rights": "Με επιφύλαξη παντός δικαιώματος.",
      "footer.made": "Αθήνα, Ελλάδα"
    }
  };

  var STORAGE_LANG = "digimations-lang";
  var STORAGE_THEME = "digimations-theme";

  /* ---------------------------------------------
     Language
  --------------------------------------------- */
  function applyLanguage(lang) {
    var dict = translations[lang] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    document.documentElement.lang = lang === "gr" ? "el" : "en";

    document.querySelectorAll(".lang-option").forEach(function (el) {
      el.classList.toggle("active", el.getAttribute("data-lang") === lang);
    });

    localStorage.setItem(STORAGE_LANG, lang);
    window.__digimationsLang = lang;
  }

  function initLanguage() {
    var saved = localStorage.getItem(STORAGE_LANG);
    var browserLang = (navigator.language || "en").toLowerCase().indexOf("el") === 0 ? "gr" : "en";
    applyLanguage(saved || browserLang);

    document.getElementById("langToggle").addEventListener("click", function () {
      var next = window.__digimationsLang === "gr" ? "en" : "gr";
      applyLanguage(next);
    });
  }

  /* ---------------------------------------------
     Theme
  --------------------------------------------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_THEME, theme);
  }

  function initTheme() {
    var saved = localStorage.getItem(STORAGE_THEME);
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(saved || (prefersDark ? "dark" : "light"));

    document.getElementById("themeToggle").addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  /* ---------------------------------------------
     Navigation & Mega-Dropdown
  --------------------------------------------- */
  function initNav() {
    var burger = document.getElementById("navBurger");
    var nav = document.querySelector(".main-nav");
    var menuBtn = document.getElementById("productsMenuBtn");
    var dropdown = document.getElementById("productsDropdown");

    // Mobile burger toggle
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Dropdown toggle on click
    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = dropdown.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close dropdown on click outside
    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target) && e.target !== menuBtn) {
        dropdown.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        dropdown.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        closeModal();
      }
    });

    // Close mobile nav when link is clicked
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        dropdown.classList.remove("open");
      });
    });
  }

  /* ---------------------------------------------
     Interactive Product Spec Modal
  --------------------------------------------- */
  var modal = document.getElementById("specModal");
  var modalBackdrop = document.getElementById("modalBackdrop");
  var modalCloseBtn = document.getElementById("modalCloseBtn");
  var modalSkuTag = document.getElementById("modalSkuTag");
  var modalTitle = document.getElementById("modalTitle");
  var modalDesc = document.getElementById("modalDesc");
  var modalDimensions = document.getElementById("modalDimensions");
  var modalFixes = document.getElementById("modalFixes");
  var modalSimilar = document.getElementById("modalSimilar");
  var modalVisualRender = document.getElementById("modalVisualRender");
  var modalInquireBtn = document.getElementById("modalInquireBtn");

  function openProductModal(productId) {
    var data = productsDatabase[productId];
    if (!data) return;

    modalSkuTag.textContent = data.sku;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalVisualRender.textContent = data.visual;

    // Dimensions
    modalDimensions.innerHTML = "";
    Object.keys(data.dimensions).forEach(function (key) {
      var dt = document.createElement("dt");
      dt.textContent = key;
      var dd = document.createElement("dd");
      dd.textContent = data.dimensions[key];
      modalDimensions.appendChild(dt);
      modalDimensions.appendChild(dd);
    });

    // Fixes / Revisions
    modalFixes.innerHTML = "";
    data.fixes.forEach(function (fix) {
      var li = document.createElement("li");
      li.textContent = fix;
      modalFixes.appendChild(li);
    });

    // Similar / Related
    modalSimilar.innerHTML = "";
    data.similar.forEach(function (simId) {
      var simData = productsDatabase[simId];
      if (simData) {
        var tag = document.createElement("button");
        tag.type = "button";
        tag.className = "similar-tag";
        tag.textContent = simData.sku + " (" + simData.title.split(" ")[1] + ")";
        tag.addEventListener("click", function () {
          openProductModal(simId);
        });
        modalSimilar.appendChild(tag);
      }
    });

    modalInquireBtn.href = "#contact";
    modalInquireBtn.onclick = function() {
      closeModal();
      var subjectInput = document.getElementById("cf-subject");
      if (subjectInput) subjectInput.value = "Inquiry: " + data.sku;
    };

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function initProductSpecs() {
    document.querySelectorAll(".btn-product-spec").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var id = btn.getAttribute("data-product");
        openProductModal(id);
      });
    });

    modalCloseBtn.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", closeModal);
  }

  /* ---------------------------------------------
     Contact form
  --------------------------------------------- */
  function initContactForm() {
    var form = document.getElementById("contactForm");
    var status = document.getElementById("formStatus");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var dict = translations[window.__digimationsLang] || translations.en;
      status.textContent = dict["contact.form.sent"];
      form.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLanguage();
    initTheme();
    initNav();
    initProductSpecs();
    initContactForm();
  });
})();