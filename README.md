# Concrete Cover Blocks Website

A modern, fast, static website for a concrete cover blocks manufacturer in the construction industry.

## Features

- **Modern Industrial Design**: Bold construction-themed aesthetic with orange accents
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **SEO Optimized**: Meta tags, Open Graph, sitemap, and semantic HTML
- **Fast Loading**: Pure HTML/CSS/JS, no frameworks, minimal dependencies
- **Host Anywhere**: Works on any static hosting (Netlify, Vercel, GitHub Pages, AWS S3, etc.)
- **Floating WhatsApp Button**: Direct contact via WhatsApp
- **Brochure Download**: Floating button for PDF brochure download

## Project Structure

```
concrete-cover-blocks/
├── index.html                 # Landing page
├── favicon.svg               # Site favicon
├── robots.txt                # Search engine instructions
├── sitemap.xml               # SEO sitemap
├── css/
│   └── styles.css           # All styles
├── js/
│   └── main.js              # Interactions
├── products/
│   ├── column-cover.html
│   ├── footing-cover.html
│   ├── slab-cover.html
│   ├── kanda-spacer.html
│   ├── pile-cover.html
│   └── multi-dimension-cover.html
├── images/                   # Add your product images here
└── brochure.pdf              # Add your brochure PDF here
```

## Deployment

### Option 1: GitHub Pages (Free)
1. Create a new GitHub repository
2. Upload all files
3. Enable GitHub Pages in Settings > Pages
4. Your site will be live at `username.github.io/repo-name`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop this folder
3. Done! Get a free URL

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import from GitHub or upload
3. Deploy

### Option 4: AWS S3
1. Create an S3 bucket
2. Enable static hosting
3. Upload all files
4. Configure bucket policy for public access

### Option 5: Traditional Hosting
Upload all files via FTP/cPanel to your hosting provider.

## Customization

### Before Going Live

1. **Replace `[Company Name]`** with your actual company name in all HTML files
2. **Update WhatsApp number** (`1234567890`) with your real number (include country code, no + or spaces)
3. **Update email and phone** in footer sections
4. **Replace `yourwebsite.com`** with your actual domain in:
   - All `canonical` URLs
   - All `og:url` properties
   - `sitemap.xml`

### Adding Product Images

1. Add your images to the `/images/` folder
2. Recommended sizes:
   - Product cards: 800x500px (16:10 aspect ratio)
   - Product detail pages: 1200x900px (4:3 aspect ratio)
3. Update the `<img>` tags in HTML files

### Adding Brochure PDF

1. Add your PDF file named `brochure.pdf` to the root folder
2. The download buttons are already configured

### SEO Updates

Edit the `<meta>` tags in each HTML file:

```html
<title>Your Product Name | Your Company</title>
<meta name="description" content="Your SEO description here...">
<meta name="keywords" content="keyword1, keyword2, keyword3">
```

## Performance

The site is optimized for speed:
- No JavaScript frameworks
- Minimal external requests (only Google Fonts)
- CSS is inlined for single-page optimization
- Images should be optimized (WebP recommended)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This is a template. Modify and use as needed for your business.
