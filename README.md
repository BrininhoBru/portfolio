# Developer Portfolio

A unique, personality-driven developer portfolio built with Next.js 14, featuring a custom green color theme designed to be visually comfortable and distinctive.

## Features

- 🎨 **Unique Design**: Custom green color palette (sage, mint, forest) that's easy on the eyes
- ⚡ **Next.js 14**: Built with the latest App Router and React Server Components
- 🎭 **Animated Elements**: Interactive particle background and smooth animations
- 📱 **Responsive**: Works beautifully on all devices
- 🚀 **GitHub Integration**: Automatically fetches and displays your public repositories
- 🎯 **Career Journey**: Timeline-based visualization of your professional growth
- 🌙 **Dark Theme**: Optimized for comfortable viewing

## Tech Stack

- Next.js 14
- React 19
- TypeScript
- Tailwind CSS
- GitHub API

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BrininhoBru/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and update the GitHub username:
```
NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
```

Optionally, add a GitHub token to increase API rate limits:
```
NEXT_PUBLIC_GITHUB_TOKEN=your_github_token
```

4. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update GitHub Username

Update the `.env.local` file with your GitHub username:

```bash
NEXT_PUBLIC_GITHUB_USERNAME=YOUR_USERNAME
```

For better API rate limits (5000 requests/hour instead of 60), add a GitHub token:

```bash
NEXT_PUBLIC_GITHUB_TOKEN=your_github_token
```

### Modify Color Scheme

The color palette is defined in `tailwind.config.ts`. You can customize the green shades:

- `sage`: Soft, muted greens
- `mint`: Bright, vibrant greens  
- `forest`: Deep, rich greens

### Personalize Content

- **Hero Section**: Edit `src/components/Hero.tsx`
- **About Section**: Update `src/components/About.tsx`
- **Journey Timeline**: Modify milestones in `src/components/Journey.tsx`

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This portfolio can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

## License

MIT License - feel free to use this portfolio as inspiration for your own!

## Credits

Created with 💚 by a developer who wanted something different from the typical AI-generated portfolios.
