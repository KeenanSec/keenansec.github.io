# snuffkey.github.io

Personal portfolio website for **Keenan (Snuffkey)** — ethical hacker, aspiring pentester, CTF competitor.

## 🖥️ Live Site



## 📁 Structure

```
portfolio/
├── index.html              ← Home page
├── resume.html             ← Resume
├── blogs/
│   ├── index.html          ← Blog listing
│   ├── how-i-got-into-hacking.html
│   ├── my-ctf-toolkit.html
│   └── linux-tips-pentesters.html
├── projects/
│   ├── index.html          ← Projects listing
│   ├── netscanner.html
│   ├── osint-toolkit.html
│   └── htb-series.html
├── writeups/
│   ├── index.html          ← Writeups listing
│   └── htb-keeper.html
├── css/
│   └── style.css           ← Shared Matrix theme (edit once, applies everywhere)
├── js/
│   └── matrix.js           ← Shared JS: matrix rain, cursor, animations
└── images/
    └── avatar.jpg          ← Your profile photo (replace the placeholder)
```

## ➕ Adding Content

### New Blog Post
1. Create a new `.html` file in `blogs/` — copy any existing post as a template
2. Add a new `<a class="card">` entry in `blogs/index.html`

### New Project
1. Create a new `.html` file in `projects/` — copy `netscanner.html` as a template
2. Add a new `<a class="card">` entry in `projects/index.html`

### New Writeup
1. Create a new `.html` file in `writeups/` — copy `htb-keeper.html` as a template
2. Add a new `<a class="card">` entry in `writeups/index.html`

## ✏️ Personalisation Checklist

- [ ] Update stats (CTFs, writeups, projects, years) in `index.html`
- [ ] Update skills, certifications, and experience in `resume.html`
- [ ] Add/remove blog posts, projects, and writeups as needed

## 🎨 Customisation

All colours and theme variables are in `css/style.css` under `:root`. Change `--green` to any colour to instantly re-theme the entire site.

```css
:root {
  --green: #00ff41;     /* main accent */
  --green-dim: #00c832; /* secondary */
  --bg: #020d02;        /* background */
}
```
