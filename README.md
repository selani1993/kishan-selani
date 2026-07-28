# Kishan Selani - IT Support Portfolio

A concise, single-page portfolio for IT support, service desk and end-user support roles. The site foregrounds Kishan’s troubleshooting process through five structured support investigations rather than relying on a list of technologies.

## Main features

- Responsive, accessible single-page layout
- Sticky navigation and keyboard-accessible mobile menu
- Six core technical skill cards
- Eight-step support ticket process
- Five accessible investigation accordions (one open at a time)
- Honest status labels for labs and learning
- Reduced-motion support and visible focus states
- No framework or runtime dependencies

## Folder structure

```text
kishan-selani/
├── index.html
├── README.md
├── assets/
│   ├── css/style.css
│   ├── js/script.js
│   ├── images/
│   └── docs/Kishan-Selani-Resume.pdf
└── .gitignore
```

## Run locally

The site can be opened directly by double-clicking `index.html`. For a local web server, open a terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Add the contents of this folder to the root of the existing GitHub repository.
2. Commit and push the files to the repository’s default branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the default branch and `/ (root)`, then save.

## Required replacements

- Replace both `replace-with-email@example.com` values in `index.html`.
- Replace both `https://www.linkedin.com/in/REPLACE-ME` URLs.
- Replace `assets/docs/Kishan-Selani-Resume.pdf` with Kishan’s final resume using the same filename.
- Replace `assets/images/og-placeholder.png` with a 1200 × 630 social preview image, or update the Open Graph path.
- Confirm the learning and lab status labels before publishing.

## Update an investigation

Each investigation is an `<article class="investigation">` in `index.html`. Keep its button `aria-controls` value matched to the panel `id`, and keep each pair unique. The shared JavaScript automatically enforces one open investigation at a time.

## Technology

HTML5, CSS3 and vanilla JavaScript. There are no packages, build tools or client-side libraries.

## Accessibility

The page uses semantic landmarks, a logical heading hierarchy, a skip link, visible keyboard focus, accessible accordion relationships, touch-friendly controls, high-contrast colours and a reduced-motion mode.
