# Select Skip Page Redesign

This is a redesigned version of the **“Choose Your Skip Size”** page from the [We Want Waste](https://wewantwaste.co.uk) flow.

## 💡 Goal

Redesign the UI/UX of the skip selection page while preserving the original functionality.

---

## ⚙️ Key Features & Implementation Details

### 🎨 UI & Interaction

- **Dark mode UI:** All components follow a dark theme for modern aesthetics and readability
- **Responsive design:** Mobile-first design with custom breakpoint logic for edge cases to ensure smooth UX across all devices
- **Smooth micro-interactions:** Motion effects on hover and mount/unmount using Framer Motion to improve visual feedback

### 🔄 Data Handling

- **Mock data fallback:** In case of `"Project not specified"` errors from the API, mock data is used to preserve functionality during development
- **API Integration**: Axios handles API requests via a dedicated service layer for better abstraction
- **Server State Management**: React Query manages loading, caching, and error states efficiently
- **Client State Management**: React Context API handles selected skip data globally across the app

---

## 🧪 Development Notes

- **Component-Based Architecture**: All logic is broken down into reusable components like `SkipCard`, `NavLink`, `AnimatedText`, etc. to ensure scalability
- **Persistent Layouts**: Implemented using Next.js App Router layouts to keep structural elements like Navbar outside individual routes
- **Class Handling**: Used the `classnames` library to simplify conditional Tailwind class logic
- **Mobile Optimization**: Focused on correct image scaling and centering to maintain visual balance on smaller screens
- **Custom Theme System**: `globals.css` defines a design token system using `@theme` and CSS variables, enabling consistent styling and easier global theming

---

## 🛠️ Tech Stack

- Next.js (App Router)
- TypeScript
- React Context API
- React Query
- Axios
- Framer Motion
- Tailwind CSS
- React Icons

