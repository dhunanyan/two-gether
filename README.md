<div align="center">
  <br />
    <a href="https://youtu.be/Zq5fmkH0T78?feature=shared" target="_blank">
      <img src="https://github.com/user-attachments/assets/471e2baa-8781-43b8-aaed-62e313d03e99" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=react&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Sanity-black?style=for-the-badge&logoColor=white&logo=sanity&color=F03E2F" alt="sanity" />
    <img src="https://img.shields.io/badge/-Sentry-black?style=for-the-badge&logoColor=white&logo=sentry&color=7830A7" alt="sanity" />
  </div>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🔗 [Assets](#links)
7. 🚀 [More](#more)

[![Netlify Status](https://api.netlify.com/api/v1/badges/349966cc-f424-4392-bb92-e457f44cd437/deploy-status)](https://app.netlify.com/sites/lively-valkyrie-4527ff/deploys)

## 🚨 Tutorial

<a href="https://youtu.be/Zq5fmkH0T78?feature=shared" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

A Next.js 15 platform where entrepreneurs can submit their local ideas for virtual pitch competitions, browse other
pitches, and gain exposure through a clean minimalistic design for a smooth user experience.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React 19
- Next.js 15
- Sanity
- Sass
- TypeScript

## <a name="features">🔋 Features</a>

👉 **Live Content API**: Displays the latest local ideas dynamically on the homepage using Sanity's Content API.

👉 **GitHub Authentication**: Allows users to log in easily using their GitHub account.

👉 **Pitch Submission**: Users can submit local ideas, including title, description, category, and multimedia links (
image or video).

👉 **View Pitches**: Browse through submitted ideas with filtering options by category.

👉 **Pitch Details Page**: Click on any pitch to view its details, with multimedia and description displayed.

👉 **Profile Page**: Users can view the list of pitches they've submitted.

👉 **Editor Picks**: Admins can highlight top local ideas using the "Editor Picks" feature managed via Sanity Studio.

👉 **Views Counter**: Tracks the number of views for each pitch instead of an upvote system.

👉 **Search**: Search functionality to load and view pitches efficiently.

👉 **Minimalistic Design**: Fresh and simple UI with only the essential pages for ease of use and a clean aesthetic.

and many more, including the latest **React 19**, **Next.js 15** and **Sanity** features alongside code architecture and
reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/JavaScript-Mastery-Pro/pitchify.git
cd pitchify
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up &
creating a new project on the [Sanity website](https://www.sanity.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.ts</code></summary>

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        primary: {
          "100": "#FFE8F0",
          DEFAULT: "#EE2B69",
        },
        secondary: "#FBE843",
        black: {
          "100": "#333333",
          "200": "#141413",
          "300": "#7D8087",
          DEFAULT: "#000000",
        },
        white: {
          "100": "#F7F7F7",
          DEFAULT: "#FFFFFF",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        "work-sans": ["var(--font-work-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "100": "2px 2px 0px 0px rgb(0, 0, 0)",
        "200": "2px 2px 0px 2px rgb(0, 0, 0)",
        "300": "2px 2px 0px 2px rgb(238, 43, 105)",
      },
    },
  },
  //eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
```

</details>

<details>
<summary><code>globals.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --radius: 0.5rem;
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer utilities {
  .flex-between {
    @apply flex justify-between items-center;
  }

  .text-30-extrabold {
    @apply text-[30px] font-extrabold text-white;
  }

  .text-30-bold {
    @apply text-[30px] font-bold text-black;
  }

  .text-30-semibold {
    @apply font-semibold text-[30px] text-black;
  }

  .text-26-semibold {
    @apply font-semibold text-[26px] text-black;
  }

  .text-24-black {
    @apply text-[24px] font-black text-black;
  }

  .text-20-medium {
    @apply font-medium text-[20px] text-black;
  }

  .text-16-medium {
    @apply font-medium text-[16px] text-black;
  }

  .text-14-normal {
    @apply font-normal text-sm text-white-100/80;
  }

  .pink_container {
    @apply w-full bg-primary min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6 pt-32;
  }

  .tag {
    @apply bg-secondary px-6 py-3 font-work-sans font-bold rounded-sm uppercase relative tag-tri z-0;
  }

  .heading {
    @apply uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5;
  }

  .sub-heading {
    @apply font-medium text-[20px] text-white max-w-2xl text-center break-words;
  }

  .section_container {
    @apply px-6 py-10 max-w-7xl mx-auto;
  }

  .card_grid {
    @apply grid md:grid-cols-3 sm:grid-cols-2 gap-5;
  }

  .card_grid-sm {
    @apply grid sm:grid-cols-2 gap-5;
  }

  .no-result {
    @apply text-black-100 text-sm font-normal;
  }

  /* profile */
  .profile_container {
    @apply w-full pb-10 pt-20 px-6 max-w-7xl mx-auto lg:flex-row flex-col flex gap-10;
  }

  .profile_card {
    @apply w-80 px-6 pb-6 pt-20 flex flex-col justify-center items-center bg-primary border-[5px] border-black shadow-100 rounded-[30px] relative z-0 h-fit max-lg:w-full;
  }

  .profile_title {
    @apply w-11/12 bg-white border-[5px] border-black rounded-[20px] px-5 py-3 absolute -top-9 after:absolute after:content-[''] after:-top-1 after:right-0 after:-skew-y-6 after:bg-black after:-z-[1] after:rounded-[20px] after:w-full after:h-[60px] before:absolute before:content-[''] before:-bottom-1 before:left-0  before:-skew-y-6 before:w-full before:h-[60px] before:bg-black  before:-z-[1] before:rounded-[20px] shadow-100;
  }

  .profile_image {
    @apply rounded-full object-cover border-[3px] border-black;
  }

  /* idea details */
  .divider {
    @apply border-dotted bg-zinc-400 max-w-4xl my-10 mx-auto;
  }

  .view_skeleton {
    @apply bg-zinc-400 h-10 w-24 rounded-lg fixed bottom-3 right-3;
  }

  /* navbar */
  .avatar {
    @apply p-0 focus-visible:ring-0 bg-none rounded-full drop-shadow-md !important;
  }

  .dropdown-menu {
    @apply w-56 border-[5px] border-black bg-white p-5 rounded-2xl !important;
  }

  .login {
    @apply border-[5px] py-4 border-black bg-white text-black relative shadow-100 font-work-sans font-medium hover:shadow-none transition-all duration-500 !important;
  }

  /* searchform */
  .search-form {
    @apply max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5;
  }

  .search-input {
    @apply flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none;
  }

  .search-btn {
    @apply size-[50px] rounded-full bg-black flex justify-center items-center !important;
  }

  /* localcard */
  .local-card {
    @apply bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100;
  }

  .local-card_date {
    @apply font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100;
  }

  .local-card_desc {
    @apply font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all;
  }

  .local-card_img {
    @apply w-full h-[164px] rounded-[10px] object-cover;
  }

  .local-card_btn {
    @apply rounded-full bg-black-200 font-medium text-[16px] text-white px-5 py-3 !important;
  }

  .local-card_skeleton {
    @apply w-full h-96 rounded-[22px] bg-zinc-400;
  }

  /* localform */
  .local-form {
    @apply max-w-2xl mx-auto bg-white my-10 space-y-8 px-6;
  }

  .local-form_label {
    @apply font-bold text-[18px] text-black uppercase;
  }

  .local-form_input {
    @apply border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300 !important;
  }

  .local-form_textarea {
    @apply border-[3px] border-black p-5 text-[18px] text-black font-semibold rounded-[20px] mt-3 placeholder:text-black-300 !important;
  }

  .local-form_error {
    @apply text-red-500 mt-2 ml-5;
  }

  .local-form_editor {
    @apply mt-3 border-[3px] border-black text-[18px] text-black font-semibold placeholder:text-black-300 !important;
  }

  .local-form_btn {
    @apply bg-primary border-[4px] border-black rounded-full p-5 min-h-[70px] w-full font-bold text-[18px] !important;
  }

  .view-container {
    @apply flex justify-end items-center mt-5 fixed bottom-3 left-3;
  }

  .view-text {
    @apply font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-lg capitalize;
  }

  .category-tag {
    @apply font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full;
  }

  .pattern {
    background-image: linear-gradient(
      to right,
      transparent 49.5%,
      rgba(251, 232, 67, 0.2) 49.5%,
      rgba(251, 232, 67, 0.6) 50.5%,
      transparent 50.5%
    );
    background-size: 5% 100%;
    background-position: center;
    background-repeat: repeat-x;
  }

  .tag-tri {
    @apply before:content-[''] before:absolute before:top-2 before:left-2 before:border-t-[10px] before:border-t-black before:border-r-[10px] before:border-r-transparent after:content-[''] after:absolute after:bottom-2 after:right-2 after:border-b-[10px] after:border-b-black after:border-l-[10px] after:border-l-transparent;
  }
}

.w-md-editor-toolbar {
  padding: 10px !important;
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

</details>

<details>
<summary><code>lib/utils.ts</code></summary>

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}
```

</details>

<details>
<summary><code>lib/validation.ts</code></summary>

```typescript
import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(20).max(500),
  category: z.string().min(3).max(20),
  link: z
    .string()
    .url()
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        return res.headers.get("content-type")?.startsWith("image/");
      } catch {
        return false;
      }
    }),
  pitch: z.string().min(10),
});
```

</details>

<details>
  <summary><code>components/Ping.tsx</code></summary>

```typescript jsx
import * as React from "react";

const Ping = () => {
  return (
    <div className="relative">
      <div className="absolute -left-4 top-1">
        <span className="flex size-[11px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex size-[11px] rounded-full bg-primary" />
        </span>
      </div>
    </div>
  );
};

export default Ping;
```

</details>

<details>
    <summary><code>PLAYLIST_BY_SLUG_QUERY</code></summary>

```typescript
export const PLAYLIST_BY_SLUG_QUERY = defineQuery(`
*[_type == "playlist" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
}`);
```

</details>

---

## CHECK THIS FILE TO UNDERSTAND HOW TO ADD LOTS OF CAFES/RESTAURANTS AT ONCE:

`lib\actions\createLocalsUtil.ts`
