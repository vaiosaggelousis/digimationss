(function () {
  "use strict";

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

      "catalog.kicker": "Equipment Catalog",
      "catalog.title": "Five product lines, one engineering team.",
      "catalog.desc": "Select a category to view technical specifications, hardware revisions, and mounting dimensions.",
      "catalog.viewCategory": "View Category &rarr;",
      "catalog.back": "&larr; Back to Categories",
      "catalog.quote": "Request Quote",

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
      "products.elevator.copy": "Floor position indicators from 2.4\" to 7.0\", touch and remote-control units.",
      "products.thermostat.title": "Smart Thermostats",
      "products.thermostat.copy": "Temperature adjustment, time programming, energy-consumption measurement.",
      "products.clock.title": "Clock Tower Products",
      "products.clock.copy": "Tower clocks and bell systems, built for long-term outdoor installation.",
      "products.wireless.title": "Wireless Applications",
      "products.wireless.copy": "Radio-network devices for remote monitoring and control across industrial sites.",
      "products.embedded.title": "Embedded Control Modules",
      "products.embedded.copy": "Custom embedded boards and control logic built into partner products.",
      
      "cat.elv.desc": "Floor position indicators, touch units, and dot-matrix arrow displays engineered for CANopen and RS-485 networks.",
      "prod.elv70.title": "ELV70 7.0\" TFT Floor Position Indicator",
      "prod.elv70.desc": "Full-color 7-inch TFT display engineered for elevator car and landing operating panels. Features dynamic floor arrow synthesis and multi-bus support.",
      "modal.dimensions": "Dimensions & Mounting Specs",

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

      "catalog.kicker": "Κατάλογος Εξοπλισμού",
      "catalog.title": "Πέντε σειρές προϊόντων, μία ομάδα μηχανικών.",
      "catalog.desc": "Επιλέξτε μια κατηγορία για να δείτε τεχνικές προδιαγραφές, αναθεωρήσεις υλικού και διαστάσεις τοποθέτησης.",
      "catalog.viewCategory": "Προβολή Κατηγορίας &rarr;",
      "catalog.back": "&larr; Πίσω στις Κατηγορίες",
      "catalog.quote": "Ζητήστε Προσφορά",

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
      "products.elevator.copy": "Ενδείκτες θέσης ορόφου από 2.4\" έως 7.0\", μονάδες αφής και τηλεχειρισμού.",
      "products.thermostat.title": "Έξυπνοι Θερμοστάτες",
      "products.thermostat.copy": "Ρύθμιση θερμοκρασίας, χρονοπρογραμματισμός, μέτρηση κατανάλωσης ενέργειας.",
      "products.clock.title": "Ρολόγια Πύργων",
      "products.clock.copy": "Ρολόγια πύργων και συστήματα καμπάνας, σχεδιασμένα για μακροχρόνια εξωτερική εγκατάσταση.",
      "products.wireless.title": "Ασύρματες Εφαρμογές",
      "products.wireless.copy": "Συσκευές ραδιοδικτύου για απομακρυσμένη παρακολούθηση και έλεγχο σε βιομηχανικούς χώρους.",
      "products.embedded.title": "Ενσωματωμένες Μονάδες Ελέγχου",
      "products.embedded.copy": "Προσαρμοσμένες ενσωματωμένες πλακέτες και λογική ελέγχου, ενσωματωμένες σε προϊόντα συνεργατών.",
      
      "cat.elv.desc": "Ενδείκτες θέσης ορόφου, μονάδες αφής και οθόνες dot-matrix σχεδιασμένα για δίκτυα CANopen και RS-485.",
      "prod.elv70.title": "ELV70 7.0\" TFT Ενδείκτης Θέσης Ορόφου",
      "prod.elv70.desc": "Έγχρωμη οθόνη TFT 7 ιντσών σχεδιασμένη για κομβιοδόχους θαλάμου και ορόφου. Διαθέτει δυναμική σύνθεση βέλους και υποστήριξη πολλαπλών διαύλων.",
      "modal.dimensions": "Διαστάσεις & Στήριξη",

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

    var langBtn = document.getElementById("langToggle");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        var next = window.__digimationsLang === "gr" ? "en" : "gr";
        applyLanguage(next);
      });
    }
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

    var themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-theme");
        applyTheme(current === "dark" ? "light" : "dark");
      });
    }
  }

  /* ---------------------------------------------
     Mobile Navigation Setup
  --------------------------------------------- */
  function initNav() {
    var burger = document.getElementById("navBurger");
    var nav = document.querySelector(".main-nav");

    if (!burger || !nav) return; // Prevent crashes if elements are missing

    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------------------------------------
     Contact form
  --------------------------------------------- */
  function initContactForm() {
    var form = document.getElementById("contactForm");
    
    // Crucial fix: stop the script safely if there is no contact form on this page
    if (!form) return; 

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
    initContactForm();
  });
})();