# Digimations — Corporate Website & Product Catalog

A responsive, multi-page corporate website and interactive product catalog built for **Digimations**, a hardware engineering company specializing in elevator displays, smart thermostats, clock tower products, and wireless control modules. 

Built completely dependency-free, this project prioritizes blazing-fast load times and straightforward maintainability.

## 🚀 Features

*   🌗 **Theme Toggling:** System-aware Dark and Light modes powered by CSS variables. User preferences are saved across sessions via `localStorage`.
*   🌍 **Bilingual Support (i18n):** Seamless, instantaneous switching between English (EN) and Greek (EL) using a custom Vanilla JS translation dictionary, without requiring page reloads.
*   📱 **Responsive Design:** Fluid layouts built with CSS Grid and Flexbox, featuring a custom mobile off-canvas burger menu.
*   🗂️ **Multi-Page Catalog Architecture:** A scalable product catalog featuring a dedicated left-sidebar for subcategory navigation (TFT, Matrix, 7-Segment), allowing users to easily browse specific hardware components and specs.
*   ⚡ **Zero Dependencies:** Built entirely with plain HTML5, CSS3, and Vanilla JavaScript. No frameworks, no external libraries, and no build steps required.

## 🛠️ Tech Stack

*   **HTML5:** Semantic markup and multi-page routing structure.
*   **CSS3:** Custom properties (variables) for theming, CSS Grid for product layouts, and smooth transition animations.
*   **Vanilla JavaScript (ES5/ES6):** DOM manipulation, state management for UI toggles, and multi-language injection.

## 📁 Project Structure

```text
├── index.html                 # Main landing page (Hero, Company, Contact)
├── products.html              # Main equipment catalog hub
├── category-elevator.html     # Subcategory hub with sidebar layout
├── product-elv24h.html        # Specific product detail page layout
├── styles.css                 # Global stylesheet and theme tokens
├── script.js                  # Core logic (i18n, theming, mobile nav)
└── README.md                  # Project documentation
