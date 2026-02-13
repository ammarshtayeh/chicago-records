# Chicago Records Studio Website

A modern, professional website for Chicago Records recording studio built with Next.js, TypeScript, and Tailwind CSS.

## 🎵 Features

### Frontend

- **Hero Section** with animated audio waveforms
- **Services** showcase with interactive cards
- **Pricing** packages with detailed features
- **Contact Form** with validation
- **Responsive Design** for all devices
- **Dark Theme** with golden accents
- **Smooth Animations** using Framer Motion
- **Glassmorphism** effects

### Admin Dashboard

- **Dashboard Overview** with statistics
- **Bookings Management** with search and filters
- **Projects Management** with grid layout
- **Settings** for studio information and notifications
- **Responsive Sidebar** navigation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
chicago-records/
├── src/
│   ├── app/
│   │   ├── admin/           # Admin dashboard pages
│   │   │   ├── bookings/
│   │   │   ├── projects/
│   │   │   ├── settings/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx
│   │   └── page.tsx         # Main homepage
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Pricing.tsx
│   │   └── Services.tsx
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/
│   └── chicago-logo.jpg     # Studio logo
└── package.json
```

## 🎨 Design System

### Colors

- **Background**: `#0a0a0a` (Dark)
- **Primary**: `#ffd700` (Gold)
- **Accent**: `#00f0ff` (Cyan)
- **Secondary**: `#1a1a1a` (Dark Gray)

### Typography

- **Primary Font**: Poppins
- **Display Font**: Montserrat

## 🔑 Admin Access

Navigate to `/admin` to access the admin dashboard.

## 📦 Technologies

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 🌐 Pages

### Public Pages

- `/` - Homepage with all sections
- `/#services` - Services section
- `/#pricing` - Pricing packages
- `/#contact` - Contact form

### Admin Pages

- `/admin` - Dashboard overview
- `/admin/bookings` - Manage bookings
- `/admin/projects` - Manage projects
- `/admin/settings` - Studio settings

## 📝 License

This project is private and proprietary to Chicago Records.

## 🤝 Support

For support, email info@chicagorecords.com
