# Rio Ivander Saputra — Portfolio

Personal portfolio website for **Rio Ivander Saputra**, PPLG student & junior developer at SMK Negeri 2 Surakarta. Built with React + Vite on the frontend and a small Express API for the contact form.

## Tech Stack

| Layer     | Technology                          |
| --------- | ----------------------------------- |
| Frontend  | React 18, JavaScript, Vite, CSS3    |
| Backend   | Node.js, Express                    |
| Icons     | Lucide React                        |
| Version   | Git / GitHub                        |

## Folder Structure

```
portfolio/
├── public/
│   └── images/                  # placeholder images (replace with your own)
├── src/
│   ├── components/              # Navbar, Hero, Skills, Projects, Contact, Footer, Reveal
│   ├── data/                    # profile.js, skills.js, projects.js, contacts.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                # design tokens + base styles
├── server/
│   ├── controllers/             # contactController.js
│   ├── routes/                  # contact.js
│   ├── store/                   # messages.js (in-memory)
│   └── server.js
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Installation

```bash
npm install
```

## Development

Frontend only:

```bash
npm run dev
```

Backend only:

```bash
npm run server
```

Both at once:

```bash
npm run dev:full
```

- Frontend: http://localhost:5173
- API: http://localhost:4000

## Build

```bash
npm run build
```

## Environment Variables

Copy `.env.example` to `.env` and adjust if needed:

```env
PORT=4000
VITE_API_URL=http://localhost:4000
```

`VITE_API_URL` is read by the contact form. If unset, it defaults to `http://localhost:4000`.

## How to Customize Content

All editable content lives in `src/data/` — you do not need to touch any component.

| File            | What to change                                        |
| --------------- | ----------------------------------------------------- |
| `profile.js`    | Name, role, bio, school, age, hobbies, profile image  |
| `skills.js`     | Skill name, level, experience, icon                   |
| `projects.js`   | Title, description, image, technologies, GitHub/demo  |
| `contacts.js`   | Discord, Telegram, Gmail, GitHub URL                  |

### Replace Images

- Profile photo: replace `public/images/profil_cpy.svg` (or point `profile.profileImage` to your own file).
- Project images: replace `public/images/Portofolio.svg`, or set each project's `image` to a file you add under `public/images/`.

### Add a Project

Add one object to the `projects` array in `src/data/projects.js`:

```js
{
  title: 'My New Project',
  description: 'What it does.',
  image: '/images/my-project.png',
  technologies: ['React', 'CSS'],
  githubUrl: 'https://github.com/your-github/my-new-project',
  demoUrl: '', // leave empty to hide the Live Demo button
}
```

## Configure Contact Form

The contact form sends a `POST` request to `/api/contact`. The server currently stores messages **in memory** (they disappear when the server restarts) and logs them to the console.

To make messages persistent or send them by email, edit `server/controllers/contactController.js` and replace the `saveMessage(...)` block with your own logic (database insert, email provider, etc.). No credentials are stored in the frontend.

## Notes

- The design uses only three colors: `#4c4d4f`, `#d25f57`, `#42f2f7` (plus opacity/tint variants).
- Scroll reveal uses `IntersectionObserver` and respects `prefers-reduced-motion`.
- All personal data fields are placeholders until you fill them in `src/data/`.
