# Ijamy Vincent - Personal Portfolio Website

![Portfolio Screenshot](/public/placeholder.png) <!-- Optional: Add a screenshot of your portfolio here -->

This is the source code for my personal portfolio website, built to showcase my projects, skills, and professional journey as a web developer. It's designed to be clean, responsive, and engaging, featuring smooth animations and a modern aesthetic.

## ✨ Features

*   **Responsive Design:** Adapts seamlessly to various screen sizes (desktop, tablet, mobile).
*   **Modern Tech Stack:** Built with Next.js (App Router), TypeScript, and Tailwind CSS.
*   **Smooth Animations:** Utilizes Framer Motion for engaging page transitions and component animations.
*   **Component-Based:** Organized into reusable React components for maintainability.
*   **Key Sections:**
    *   **Hero:** Introduction and call-to-action.
    *   **Projects:** Showcase of selected development projects with descriptions, tech stacks, and links.
    *   **About Me (Timeline):** A chronological overview of my experience and milestones.
    *   **Technologies:** Highlights key technologies and areas of expertise (Frontend, Backend, UI/UX).
    *   **Footer:** Social links and copyright information.
*   **Interactive Elements:** Contact dropdown, clickable project links, social media icons.
*   **SVG Background Animation:** Subtle background animation in the Hero section.
*   **Scroll-Triggered Animations:** Sections animate into view as the user scrolls.

## 🚀 Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (v15+ with App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
*   **Fonts:** Geist Sans, Geist Mono (via `next/font`)

## 📂 Project Structure

The project follows a standard Next.js App Router structure:

```plaintext
.
├── app/                      # Next.js App Router directory (contains routes and UI)
│   ├── components/           # Shared, reusable React components used across pages
│   │   ├── AnimatedSection.tsx # Component for scroll-triggered animations
│   │   ├── BackgroundAnimation.tsx # SVG background animation component
│   │   ├── Button.tsx          # Custom button component
│   │   ├── DropDown.tsx        # Dropdown menu component (e.g., for contact)
│   │   ├── Footer.tsx          # Site-wide footer component
│   │   ├── Hero.tsx            # Hero section component for the homepage
│   │   ├── Navbar.tsx          # Site-wide navigation bar component
│   │   ├── Projects.tsx        # Component displaying project showcases
│   │   ├── Technologies.tsx    # Component displaying tech stack/skills
│   │   └── Timeline.tsx        # Component displaying experience/about timeline
│   ├── constants.tsx         # Static data arrays/objects (e.g., project details, timeline events)
│   ├── globals.css           # Global styles and Tailwind CSS base directives
│   ├── layout.tsx            # Root application layout component (wraps all pages)
│   └── page.tsx              # The main homepage component (route: /)
├── public/                   # Static assets served directly (images, fonts, icons)
│   ├── ijamy.svg             # Logo image file
│   ├── 4.jpg                 # Project image asset
│   ├── 5.jpeg                # Project image asset
│   └── 6.jpeg                # Project image asset
├── .gitignore                # Specifies intentionally untracked files that Git should ignore
├── next.config.js            # Configuration options for Next.js
├── package.json              # Lists project dependencies and scripts
├── postcss.config.js         # Configuration for PostCSS (used by Tailwind CSS)
├── README.md                 # This documentation file
├── tailwind.config.ts        # Configuration for Tailwind CSS (theming, plugins)
└── tsconfig.json             # Configuration for the TypeScript compiler



## 🛠️ Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm, yarn, or pnpm

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sandaji/portfolio.git # Replace with your repo URL
    cd myportfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4.  **Open your browser:**
    Navigate to http://localhost:3000 to see the application.

## ☁️ Deployment

This Next.js application is ready for deployment on platforms like:

*   **Vercel:** (Recommended) The creators of Next.js offer seamless deployment. Connect your Git repository for automatic deployments.
*   **Netlify:** Another popular choice for deploying static sites and Next.js apps.
*   **Other Platforms:** Can be deployed on Node.js hosting environments or using Docker.

Refer to the Next.js Deployment Documentation for more details.

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details (Optional: Create a LICENSE.md file if you haven't).

## 📧 Contact

Ijamy Vincent - Find my contact details within the portfolio!
*   LinkedIn: https://www.linkedin.com/in/ijamy-vincent-72858b107/
*   GitHub: https://github.com/sandaji
*   Twitter: https://twitter.com/@_ijamy

