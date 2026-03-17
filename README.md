# Teja's Portfolio

A modern, dark-themed portfolio built with Angular showcasing my frontend development skills.


## 🚀 Live Demo

[View Live Portfolio](https://github.com/Tejakolli98/My-Portfolio)

## 💻 Tech Stack

- **Angular 17+** - Standalone components
- **TypeScript** - Type-safe development
- **SCSS** - Advanced styling with variables and mixins
- **RxJS** - Reactive programming
- **Angular Animations** - Smooth transitions
- **Font Awesome** - Icons
- **GitHub Pages** - Deployment

## ✨ Features

- 📱 Fully responsive design
- 🌙 Dark theme optimized
- ⚡ Fast and performant
- 🎨 Smooth animations
- 📧 Contact form with validation
- 🔍 SEO optimized
- ♿ Accessible (WCAG compliant)

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── about/
│   │   │   ├── projects/
│   │   │   ├── skills/
│   │   │   ├── contact/
│   │   │   └── footer/
│   │   ├── models/
│   │   ├── services/
│   │   └── app.component.ts
│   ├── assets/
│   │   ├── images/
│   │   └── data/
│   └── styles/
│       ├── _variables.scss
│       ├── _mixins.scss
│       └── styles.scss
├── README.md
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Install Angular CLI globally

```bash
npm install -g @angular/cli
```

### Clone the repository

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### Install dependencies

```bash
npm install
```

### Run development server

```bash
ng serve
```

Navigate to `http://localhost:4200/`

### Build for production

```bash
ng build --configuration production
```

## 🚀 Deployment to GitHub Pages

### Method 1: Using Angular CLI

```bash
# Install angular-cli-ghpages
npm install -g angular-cli-ghpages

# Build and deploy
ng build --configuration production --base-href "https://your-username.github.io/portfolio/"
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

### Method 2: Manual Deployment

1. Build the project:
```bash
ng build --configuration production --base-href "/portfolio/"
```

2. Create `gh-pages` branch:
```bash
git checkout -b gh-pages
```

3. Copy dist files to root:
```bash
cp -r dist/portfolio/browser/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

4. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Save

### Method 3: GitHub Actions (Automated)

The project includes a GitHub Actions workflow that automatically deploys on push to main.

Just push to main:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## 📝 Customization Guide

### 1. Personal Information

Edit `src/assets/data/portfolio-data.json`:

```json
{
  "name": "Your Name",
  "title": "Frontend Developer",
  "email": "your.email@example.com",
  "github": "https://github.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourprofile"
}
```

### 2. Projects

Add your projects in `src/assets/data/projects.json`:

```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description",
      "technologies": ["Angular", "TypeScript", "SCSS"],
      "github": "https://github.com/yourusername/project",
      "demo": "https://project-demo.com",
      "image": "assets/images/project1.png"
    }
  ]
}
```

### 3. Skills

Edit `src/assets/data/skills.json`:

```json
{
  "skills": [
    {
      "category": "Frontend",
      "items": ["Angular", "TypeScript", "RxJS", "HTML5", "CSS3/SCSS"]
    }
  ]
}
```

### 4. Theme Colors

Modify `src/styles/_variables.scss`:

```scss
$primary-color: #64ffda;
$background-dark: #0a192f;
$text-primary: #ccd6f6;
```

### 5. Images

- Replace `src/assets/images/profile.jpg` with your photo
- Add project screenshots to `src/assets/images/`

## 📧 Contact Form Setup

The contact form includes validation. To make it functional:

1. **Option 1: Use Formspree**
   - Sign up at [formspree.io](https://formspree.io)
   - Update form action in `contact.component.ts`

2. **Option 2: Use EmailJS**
   - Sign up at [emailjs.com](https://www.emailjs.com)
   - Configure in `contact.component.ts`

3. **Option 3: Backend API**
   - Create your own backend endpoint
   - Update service URL

## 🧪 Testing

```bash
# Run unit tests
ng test

# Run e2e tests
ng e2e

# Generate test coverage
ng test --code-coverage
```

## 📈 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends
- Icons from Font Awesome
- Fonts from Google Fonts

## 📬 Contact

Teja - [@yourtwitter](https://twitter.com/yourhandle)

Project Link: [https://github.com/your-username/portfolio](https://github.com/your-username/portfolio)

---

⭐ Star this repo if you found it helpful!