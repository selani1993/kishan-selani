# Kishan Selani - IT Support Ticket Portfolio

A single-page portfolio showing how Kishan prioritises realistic support issues by business impact, gathers evidence, adjusts his troubleshooting direction, documents resolutions and verifies outcomes.

## Main features

- Responsive, accessible single-page layout
- Sticky navigation and keyboard-accessible mobile menu
- Five illustrative support tickets with business-impact-based priorities
- Complete 20-step workflow for every ticket
- One open ticket at a time
- Current internship, concise skills and continuous learning sections
- Central profile configuration object
- Reduced-motion support and visible focus states
- HTML5, CSS3 and vanilla JavaScript with no runtime dependencies

## Folder structure

```text
kishan-selani/
├── index.html
├── README.md
├── assets/
│   ├── Kishan_Selani_Resume.pdf
│   ├── css/style.css
│   ├── js/script.js
│   └── images/og-placeholder.png
└── .gitignore
```

## Run locally

Open `index.html` directly, or open a terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Add this folder’s contents to the root of the existing repository.
2. Commit and push the files to the default branch.
3. Open **Settings → Pages** in GitHub.
4. Choose **Deploy from a branch**, the default branch and `/ (root)`.

## Update profile information

Edit the `profile` object at the top of `assets/js/script.js`. The hero, navigation, contact section and footer use those values automatically.

Replace `assets/Kishan_Selani_Resume.pdf` with the final resume using the same filename.

## Update support tickets

Each scenario is an object in the `tickets` array in `assets/js/script.js`. Keep every workflow object’s 20 fields when editing a ticket. The script generates the accessible card and detail panel automatically.

Ticket IDs, priorities and resolution times are explicitly presented as illustrative portfolio content, not employer records.

## Accessibility

The page uses semantic landmarks, a logical heading hierarchy, a skip link, visible keyboard focus, accessible expandable regions, touch-friendly controls, high-contrast colours and reduced-motion handling.
