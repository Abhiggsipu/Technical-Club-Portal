# Technical Club Portal

A modern, responsive website for the Technical Club featuring events, team information, and membership enrollment.

## Features

- 🏠 **Home Page**: Hero section with club highlights
- 📅 **Events Page**: Showcase of club events and activities
- 👥 **Team Page**: Meet the club members and leadership
- 📧 **Contact Page**: Join the club and get in touch

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Responsive design with flexbox
- **JavaScript**: Interactive features
- **Font Awesome**: Icon library

## Project Structure

```
Technical Club Portal/
├── index.html              # Home page
├── events.html            # Events page
├── team.html              # Team page
├── contact.html           # Contact/Join page
├── css/
│   ├── style.css         # Main styles
│   ├── navbar.css        # Navigation styles
│   ├── events.css        # Events page styles
│   ├── team.css          # Team page styles
│   └── contact.css       # Contact page styles
├── script/
│   └── form.js           # Form handling
├── utilities/
│   ├── icons/            # Icon files
│   └── images/           # Image assets
├── vercel.json           # Vercel deployment config
└── README.md             # This file
```

## Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd "Technical Club Portal"
   ```

2. Open in your browser:
   - Simply open `index.html` in a web browser

### No Build Required

This is a static website with no build process. All files are ready to serve as-is.

## Deployment

### Deploy on Vercel (Recommended)

1. **Using GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project" and import your GitHub repository
   - Click "Deploy"

2. **Using Vercel CLI**:
   ```powershell
   npm install -g vercel
   vercel
   ```

3. **Using Git Push to Vercel**:
   - Connect your Git repository to Vercel
   - Every push to main automatically deploys

### Other Deployment Options

- **Netlify**: Drag and drop the project folder
- **GitHub Pages**: Push to `gh-pages` branch
- **Firebase Hosting**: Use Firebase CLI
- **Any Static Host**: CloudFlare Pages, AWS S3, etc.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, contact the Technical Club through the "Join Us" page.
