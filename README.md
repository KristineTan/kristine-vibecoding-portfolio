# Vibe Coding Lab - Interactive Portfolio

An interactive portfolio website featuring a laboratory-themed design with clickable hotspots and animations.

## Setup Instructions

1. **Add Your Image**: Save your lab scene image as `lab-scene.png` in the Portfolio folder.

2. **Open the Project**: Simply open `index.html` in your web browser.

## Features

### Interactive Elements
- **Clickable Hotspots**: 5 glowing hotspots positioned over key areas of the image
- **Pulsing Animations**: Eye-catching pulse effects on all hotspots
- **Modal Information Panels**: Click hotspots to reveal detailed information
- **Particle Effects**: Colorful particle explosions when clicking hotspots
- **Parallax Effect**: Subtle mouse-tracking movement on the main image

### Hotspot Locations
1. **Lead Scientist** (top-left area) - About the team
2. **Vibe Coding Machine** (center) - Technology showcase
3. **Test Tubes** (bottom-left) - Experimental projects
4. **Monitors** (top-right) - Data visualization
5. **Beakers** (bottom-right) - Creative process

### Responsive Design
- Optimized for desktop screens (1920x1080 and similar)
- Scales beautifully on tablets and laptops
- Mobile-friendly with adjusted hotspot sizes

## Customization

### Adjust Hotspot Positions
Edit the CSS in `styles.css` (lines 90-115):

```css
.hotspot-scientist {
    top: 30%;
    left: 32%;
    width: 100px;
    height: 120px;
}
```

Change the `top`, `left`, `width`, and `height` values to position hotspots over different areas.

### Edit Content
Modify the information panels in `index.html` (lines 45-88) to customize the text that appears when clicking hotspots.

### Change Colors
Update the color scheme in `styles.css`:
- Line 10: Background gradient
- Line 75: Hotspot pulse color
- Line 241: Particle colors in `script.js`

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Technologies Used
- HTML5
- CSS3 (Animations, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- No external dependencies

---

Created with Vibe Coding Lab
