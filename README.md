# 💼 Personal Portfolio

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Features a sleek vCard-style design with smooth animations, project filtering, and an integrated contact form.

![Portfolio Preview](./assets/images/porfolio%20preview.png)

## ✨ Features

- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX** - Clean, professional vCard-inspired design
- 🌓 **Smooth Animations** - Engaging transitions and interactive elements
- 📧 **Working Contact Form** - Integrated with EmailJS for direct messaging
- 🖼️ **Project Showcase** - Filterable portfolio with live demos
- 💬 **Testimonials Modal** - Dynamic testimonial viewer
- 🎯 **Single Page Application** - Smooth navigation without page reloads
- ⚡ **Fast Loading** - Optimized performance and lightweight code

## 🚀 Demo

**Live Demo:** [View Portfolio](https://ermun361.github.io/Personal-Portfolio/)

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Icons:** Ionicons
- **Email Service:** EmailJS
- **Version Control:** Git & GitHub
- **Hosting:** GitHub Pages

## 📂 Project Structure

```
Personal-Portfolio/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── 0-script.js
│   │   └── contact.js
│   └── images/
│       └── [portfolio images]
└── README.md
```

## 🎯 Sections

1. **About** - Introduction and background information
2. **Resume** - Education, experience, and skills
3. **Portfolio** - Project showcase with filtering
4. **Blog** - Articles and posts (optional)
5. **Contact** - Get in touch via contact form with location map

## 📦 Installation & Setup

### Prerequisites
- A modern web browser
- Git installed on your machine
- Text editor (VS Code recommended)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ermun361/Personal-Portfolio.git
   ```

2. **Navigate to project directory**
   ```bash
   cd Personal-Portfolio
   ```

3. **Open in browser**
   - Simply open `index.html` in your preferred browser
   - Or use Live Server extension in VS Code for hot reload

### EmailJS Setup (for Contact Form)

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the credentials in `contact.js`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   
   emailjs.send(
     "YOUR_SERVICE_ID",
     "YOUR_TEMPLATE_ID",
     templateParams
   )
   ```

## 🌐 Deployment

### GitHub Pages

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select `main` branch as source
   - Click Save

3. **Access your site**
   - Your portfolio will be live at: `https://ermun361.github.io/Personal-Portfolio/`

## 🎨 Customization

### Update Personal Information

Edit the relevant sections in `index.html`:

```html
<!-- Update your name -->
<h1 class="name">Your Name</h1>

<!-- Update your role -->
<p class="title">Your Job Title</p>

<!-- Update contact info -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

### Change Colors

Modify CSS variables in `style.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  /* Add your custom colors */
}
```

### Add Projects

Add new project items in the Portfolio section:

```html
<li class="project-item active" data-filter-item data-category="web-design">
  <a href="#">
    <figure class="project-img">
      <img src="./assets/images/project.jpg" alt="Project Name">
    </figure>
    <h3 class="project-title">Project Name</h3>
    <p class="project-category">Category</p>
  </a>
</li>
```

## 📧 Contact Form Features

- Real-time form validation
- Loading states and success/error feedback
- Email delivery via EmailJS
- Responsive design
- Spam protection

## 🐛 Known Issues

- None currently reported

## 🔮 Future Enhancements

- [ ] Add dark/light mode toggle
- [ ] Implement blog with CMS integration
- [ ] Add more animations and micro-interactions
- [ ] Include project case studies
- [ ] Add Google Analytics
- [ ] Integrate more social media links
- [ ] Add downloadable resume/CV

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Eric Munyi**

- GitHub: [@ermun361](https://github.com/ermun361)
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/munyi-eric/)
- Twitter: [@yourhandle](https://x.com/0xorakle?s=21)
- Portfolio: [Your Website](https://ermun361.github.io/Personal-Portfolio/)

## 🙏 Acknowledgments

- Design inspiration from modern vCard templates
- Icons by [Ionicons](https://ionic.io/ionicons)
- Email functionality powered by [EmailJS](https://www.emailjs.com/)

## 📊 Stats

![GitHub repo size](https://img.shields.io/github/repo-size/ermun361/Personal-Portfolio)
![GitHub stars](https://img.shields.io/github/stars/ermun361/Personal-Portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/ermun361/Personal-Portfolio?style=social)

---

⭐ If you found this helpful, please give it a star!

**Made with ❤️ by [Eric Munyi](https://github.com/ermun361)**