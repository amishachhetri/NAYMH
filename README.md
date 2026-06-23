# NAYMH Website - New American Youth Mental Health

A high-fidelity, responsive website for NAYMH (New American Youth Mental Health) conference and community.

## 🎨 Design Specifications

### Color Palette
- **Primary Color**: #141836 (Dark Blue provided by user)
- **Accent Color**: #f2a683 (Warm Coral)
- **Background**: White / Light Gray (#f5f5f5)

### Typography
- **Headings**: Playfair Display (Serif)
- **Body Text**: Inter (Sans-Serif)

## 📁 Project Structure

```
NAYMH/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   └── script.js       # Scroll animations and interactions
├── images/             # Directory for actual images (placeholders used currently)
└── README.md           # This file
```

## 🚀 Features

### 1. **Responsive Design**
- Fully responsive across all devices
- Mobile-first approach
- Top info bar hides on screens < 768px
- Grid layouts stack to single column on mobile

### 2. **Scroll Animations**
- Smooth fade-in effects as user scrolls
- Intersection Observer API for performance
- Parallax effect on hero section

### 3. **Interactive Elements**
- Sticky navigation header
- Hover effects on all links (underline in coral)
- Card hover animations (lift effect)
- Smooth scroll navigation

### 4. **Sections Included**
1. **Hero Gallery** - 4x2 grid with community photos
2. **Mission Statement** - Split-screen layout
3. **Core Pillars** - 3-column feature cards (Community, Support, Empowerment)
4. **Recent Stories** - Blog post previews
5. **Team Showcase** - Meet the team members
6. **Resource Grid** - Mental health information (6 topics)
7. **Footer** - Contact info and services

## 🔧 Customization Guide

### Adding Real Images

Replace placeholder elements with actual images:

```html
<!-- Current placeholder -->
<div class="story-placeholder">📖</div>

<!-- Replace with -->
<img src="images/story-1.jpg" alt="Story title">
```

### Updating Team Photos

1. Add photos to `/images/team/`
2. Replace the `.photo-placeholder` div:

```html
<!-- Replace -->
<div class="photo-placeholder">AS</div>

<!-- With -->
<img src="images/team/adarsh.jpg" alt="Adarsh Sharma">
```

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
   --primary-color: #141836;  /* Dark blue provided by user */
    --accent-color: #f2a683;   /* Your coral */
}
```

### Adding More Blog Stories

Copy the `.story-card` structure in the HTML:

```html
<article class="story-card">
    <div class="story-image">
        <div class="story-placeholder">📖</div>
    </div>
    <div class="story-content">
        <h3>Your Story Title</h3>
        <p>Story excerpt...</p>
        <a href="#" class="read-more">READ MORE →</a>
    </div>
</article>
```

## 🌐 How to View

### Option 1: Direct File Open
Simply double-click `index.html` to open in your default browser.

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python3 -m http.server 8000

# Then visit: http://localhost:8000
```

### Option 3: Live Server (VS Code)
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px

## ✨ Key Interactive Features

1. **Navigation**: Smooth scroll to sections
2. **Register Button**: Click to show registration info
3. **Read More Links**: Underline hover effect in coral
4. **Cards**: Lift animation on hover
5. **Scroll Reveal**: Sections fade in as you scroll

## 🎯 Next Steps for Production

1. **Add Real Content**:
   - Replace placeholder icons with actual photos
   - Add complete blog post content
   - Update team member information

2. **Setup Registration Form**:
   - Integrate form submission (Google Forms, Typeform, or custom)
   - Connect to email service

3. **Connect Blog**:
   - Link to actual blog posts
   - Add blog CMS (optional)

4. **Add Analytics**:
   - Google Analytics
   - Facebook Pixel (if needed)

5. **SEO Optimization**:
   - Add meta descriptions
   - Add Open Graph tags
   - Create sitemap.xml

6. **Deploy**:
   - Choose hosting (Netlify, Vercel, GitHub Pages)
   - Connect custom domain
   - Setup SSL certificate

## 📞 Contact Information

- **Address**: 1925 E. Dublin Granville Rd., Suite 210, Columbus, OH 43229
- **Email**: Supreti@Bccoh.Org
- **Phone**: (614) 396-8965

## 🏗️ Built With

- HTML5
- CSS3 (Flexbox & Grid)
- Vanilla JavaScript
- Google Fonts (Playfair Display, Inter)

## 📄 License

Copyright ©2024 NAYMH All Rights Reserved by GorkhaTech

---

**Mission**: "A World Where Mental Health is Championed, Stigma Shattered, and Hope Restored."
