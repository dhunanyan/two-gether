| ![Screenshot 1](/docs/image-1.png) | ![Screenshot 2](/docs/image-2.png) | ![Screenshot 3](/docs/image-3.png) |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |

<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=react&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Sanity-black?style=for-the-badge&logoColor=white&logo=sanity&color=F03E2F" alt="sanity" />
    <img src="https://img.shields.io/badge/-Sentry-black?style=for-the-badge&logoColor=white&logo=sentry&color=7830A7" alt="sanity" />
  </div>
</div>

<div align="center">
  <div>
    <img src="https://api.netlify.com/api/v1/badges/349966cc-f424-4392-bb92-e457f44cd437/deploy-status" alt="netlify-status" />
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
git clone https://github.com/dhunanyan/two-gether.git
cd two-gether
```

**Installation**

Install the project dependencies using npm:

```bash
yarn install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="vX"
SANITY_WRITE_TOKEN=
SENTRY_AUTH_TOKEN=
```

Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up &
creating a new project on the [Sanity website](https://www.sanity.io/).

**Running the Project**

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>globals.css</code></summary>

```css
@import "../styles/settings";

body {
  @include scrollbar;
  background-color: $grey-color-lighter;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $font-work-sans;
  overflow-x: hidden;

  &:focus,
  &:active {
    outline: none;
  }

  button,
  hr,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  body,
  html,
  header,
  section,
  main,
  span,
  ol,
  ul,
  li,
  blockquote {
    background-color: transparent;
    padding: 0;
    margin: 0;
    border: 0;

    &:before,
    &:after {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    &:focus,
    &:active {
      outline: none;
    }
    &:visited {
      text-d &:hover {
        text-decoration: none;
      }
    }
  }

  nav,
  footer,
  header,
  aside {
    display: block;
  }

  input,
  button,
  textarea {
    font-family: inherit;
  }

  input {
    &::-ms-clear {
      display: none;
    }
    &[type="file"] {
      display: none;
    }
  }

  button {
    cursor: pointer;

    &::-moz-focus-inner {
      padding: 0;
      border: 0;
    }
  }

  ul li,
  ol li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  color: rgb(161, 242, 187);
}

html,
body {
  width: 100%;
  height: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
```

</details>

<details>
  <summary><code>components/IsVisited.tsx</code></summary>

```typescript jsx
import * as React from "react";

import "./IsVisited.scss";
import { Icons, patchIsVisited } from "@/lib";
import { Local } from "@/sanity/types";

export type IsVisitedPropsType = {
  isVisited: Local["isVisited"];
  localId: Local["_id"];
  userEmail?: string;
};

export const IsVisited = ({
  isVisited,
  localId,
  userEmail,
}: IsVisitedPropsType) => {
  const isActive = isVisited?.find(
    (current) => current.userEmail === userEmail
  )?.value;

  return (
    <div className={"is-visited" + (isActive ? " is-visited--active" : "")}>
      <p
        className={
          "is-visited__text" + (isActive ? " is-visited__text--active" : "")
        }
      >
        <span />
        {isActive ? "Visited" : "Not visited"}
      </p>

      <form
        action={async () => {
          "use server";
          await patchIsVisited({
            value: !isActive,
            isVisited,
            localId,
            userEmail: userEmail as string,
          });
        }}
      >
        <button
          className={
            "is-visited__button" +
            (isActive ? " is-visited__button--active" : "")
          }
          dangerouslySetInnerHTML={{
            __html: isActive ? Icons.Times : Icons.Check,
          }}
        />
      </form>
    </div>
  );
};
```

</details>

<details>
    <summary><code>CAFES_QUERY</code></summary>

```typescript
export const CAFES_QUERY = defineQuery(`
*[_type == "local" && type == "cafe" && 
  ((defined(slug.current) && !defined($search)) || 
  (title match $search || categories match $search || author->name match $search))] | order(_createdAt desc) {
  _id,
  type,
  image,
  title,
  rating,
  isVisited,
  categories,
}`);
```

</details>

---

##### NOTE: CHECK THIS FILE TO UNDERSTAND HOW TO ADD LOTS OF CAFES/RESTAURANTS AT ONCE:

`lib\actions\createLocalsUtil.ts`
