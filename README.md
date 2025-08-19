A modern design system assignment built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Storybook**. This project comes with fast HMR, ESLint rules, and a component-driven workflow.

---

## 🚀 Features

- **Vite** for blazing-fast development environment
- **React 19 + TypeScript**
- **Tailwind CSS** (v4.1) for utility-first styling and dark mode
- **Storybook** for isolated UI component development & documentation
- **Testing** with Jest or Vitest + @storybook/testing-react
- **ESLint** (with recommended and style checks)
- **Component-driven structure** (Input, DataTable, Navbar, Card, etc.)
- **Ready for scalable design system work**

---

## 📦 Installation

Clone the repository:
`git clone https://github.com/HrOS-Summer/uzence_design_studio_assignment.git`  
`cd uzence_design_studio_assignment`


Install all dependencies:
`npm install`


---

## 🖥️ Running the Project

Start the development server:
npm run dev



- App will be served at [http://localhost:5173](http://localhost:5173) (default Vite port)

---

## 🪄 Storybook (UI component explorer)

Start Storybook for component documentation, testing, and isolated development:

npm run storybook

- Visit [http://localhost:6006](http://localhost:6006)

---

## 🧪 Running Tests

If using Jest or Vitest (check your package.json scripts):

npm run test


- Includes support for **@storybook/testing-react** so you can test your components and stories.

---

## 💅 Linting

Run ESLint to check/fix code style and catch bugs early:
npm run lint

---

## 🧑‍💻 Recommended VSCode Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

---

## 📁 Folder Structure

<img width="410" height="526" alt="file_structure" src="https://github.com/user-attachments/assets/1174fec0-38ec-4865-845c-ff868712b40c" />

## 📷 Screenshots
### Light Theme
![lightTheme](https://github.com/user-attachments/assets/5b1ec95b-e953-4298-ad20-69dda6bb274e)

### Dark Theme
![screen_dark](https://github.com/user-attachments/assets/cbe038ef-235a-4a73-aaf2-169b03ced57c)

### Table Loading State
<img width="584" height="224" alt="loader" src="https://github.com/user-attachments/assets/9930779b-fbe1-4493-83fc-be1bd737145e" />

### Input Error
<img width="928" height="222" alt="input_error" src="https://github.com/user-attachments/assets/644fdef1-05e9-4811-a6c4-238577bf45a7" />


## 📝 Notes

- Update the component stories (`*.stories.tsx`) as you add or change components.
- See Storybook’s [Docs](https://storybook.js.org/docs/writing-docs) and [Testing](https://storybook.js.org/docs/writing-tests) for more guidance.

---

## 🛠️ Troubleshooting

- If Storybook is not picking up Tailwind styles, ensure `import '../src/index.css'` is present in `.storybook/preview.ts`.
- For "Cannot find module '@storybook/testing-react'", run:  
  `npm install --save-dev @storybook/testing-react`
- For React version mismatches with Storybook, double check your `react` and `@storybook/*` versions.

---

## 📄 License

[MIT](LICENSE) — Free to use and adapt.

---

## 👤 Maintainer

- [Hariom Singh](https://github.com/HrOS-Summer)

---




