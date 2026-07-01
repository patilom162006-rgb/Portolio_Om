# Om Manoj Patil — Premium Developer & Content Portfolio

An ultra-modern, high-performance, and immersive personal portfolio designed for **Om Manoj Patil** — Software Developer, UI/UX Designer, AI Engineer, and Content Strategist. 

Built with **React 18**, **Vite**, **Tailwind CSS**, and **motion/react** (formerly Framer Motion), this portfolio showcases a futuristic, high-contrast dark visual theme, sleek micro-interactions, an interactive particle field background, custom premium components, and an integrated, production-ready **EmailJS contact flow**.

---

## 🚀 Key Features

- **Futuristic Dark Aesthetic**: Designed with deep charcoals, high-contrast off-whites, and vibrant neon lime accents (`#a3e635`).
- **Interactive Particle Canvas Background**: Live-calculated geometric backdrop reacting smoothly to viewport resize.
- **Micro-Animations & Smooth Transitions**: Fluid entry, hover, and section transition animations handled via `motion/react`.
- **Custom Interactive Cursor**: A stylized custom cursor designed for desktop browsers, providing real-time cursor tracking.
- **Full Content Experience Section**: Showcases active roles inside streamer management & community staff (e.g., *8bitHeadFlicker* and *8btrusherwow*) with verified stats, detailed contribution notes, and direct platform reference links.
- **Production-Ready EmailJS Contact Integration**: Connects a highly responsive, animated contact form directly to Gmail using EmailJS (pre-configured with secure client credentials).

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [motion/react](https://www.npmjs.com/package/motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Contact Service**: [EmailJS](https://www.emailjs.com/)

---

## 📂 Project Structure

```bash
├── public/                 # Static assets (favicons, manifest, etc.)
├── src/
│   ├── assets/             # Brand graphics, illustrations, and images
│   ├── components/         # Highly modular, animated React components:
│   │   ├── About.tsx       # Bio, statistics, and professional background
│   │   ├── Contact.tsx     # Fully animated contact form with EmailJS integration
│   │   ├── CustomCursor.tsx# Creative canvas-driven interactive custom cursor
│   │   ├── Education.tsx   # Academic timeline and credentials
│   │   ├── Experience.tsx  # Interactive work history and Content Experience cards
│   │   ├── Footer.tsx      # Clean copyright footer with legal guidelines
│   │   ├── Header.tsx      # Desktop/mobile navigation with backdrop filters
│   │   ├── Hero.tsx        # High-impact display layout with visual avatar
│   │   ├── Loader.tsx      # Stylized pre-loading system
│   │   ├── Projects.tsx    # Showcase grids featuring filtering mechanisms
│   │   ├── Services.tsx    # Custom interactive cards presenting key skills
│   │   ├── Skills.tsx      # Dynamic tech-radar and skills category list
│   │   └── WhyChooseMe.tsx # Visual showcase of USP (Unique Selling Propositions)
│   ├── data.ts             # Centralized source of truth for all content and records
│   ├── types.ts            # Strong TypeScript interfaces and schemas
│   ├── index.css           # Global typography definitions, Tailwind imports, and scrollbars
│   └── main.tsx            # Application bundle entry point
├── package.json            # Dynamic manifest and project dependencies
├── tsconfig.json           # Compiler rules for TypeScript development
└── vite.config.ts          # Optimized module bundler configuration
```

---

## 📧 EmailJS Setup & Integration

The contact form is pre-wired to send email submissions directly to your inbox. It is currently configured to connect with the following properties in `src/components/Contact.tsx`:

* **Service ID**: `service_pzgyand`
* **Template ID**: `template_zmfw7zb`
* **Public Key**: `oaZHkwCLsGZfVuJ5-`

### Customizing Email Templates:
When configuring your EmailJS dashboard, ensure your Email Template contains the following matching dynamic variables:
- `{{from_name}}` — Sender's full name
- `{{from_email}}` — Sender's email address
- `{{reply_to}}` — Direct replies route back to sender
- `{{subject}}` — Inquiry topic or message headline
- `{{message}}` — Message body or detailed inquiry

---

## 💻 Local Development

Follow these steps to run the portfolio on your local machine:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install all dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   *The application will boot and serve locally on [http://localhost:3000](http://localhost:3000).*

4. **Compile the production-ready build**:
   ```bash
   npm run build
   ```
   *This command outputs highly compressed, static bundle assets into the `/dist` directory, fully prepared for automated serverless hosting (e.g., Cloud Run, Vercel, Netlify, Github Pages).*

---

## 👤 Portfolio Owner

**Om Manoj Patil**
- **Email**: `patilom162006@gmail.com`
- **Role**: Software Developer • UI/UX Designer • AI Engineer • Content Strategist
