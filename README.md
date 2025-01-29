# Real-Time Messenger

## Getting Started

Install dependencies and run the project:

```bash
npm i
# or
yarn
# or
pnpm i

# Start the app
npm run dev
# or
yarn dev
# or
pnpm dev
```

---

## About

A real-time messaging application with channels, user authentication, and profile customization. Built to demonstrate fullstack development using modern tools like GraphQL, Apollo Client, and Feature Sliced Design.

**Key Features**:
- Real-time messaging via GraphQL Subscriptions
- JWT authentication with HttpOnly cookies
- Customizable user profiles (AWS S3 avatar upload)
- Dark/light theme support
- Channel creation and management

---

## Architecture

The project follows **Feature Sliced Design** for scalable and maintainable code. Layers include:
- `app`: Routing and global setup
- `pages`: Page components
- `widgets`: Complex UI blocks (e.g., chat interface)
- `features`: Business logic (e.g., authentication, messaging)
- `entities`: Core data models (users, channels, messages)
- `shared`: Utilities, UI components, and configs

---

## Scripts
- `pnpm run dev`: Start development server and auto-generate GraphQL types
- `pnpm run build`: Create production build
- `pnpm run lint`: Run ESLint checks
- `pnpm run lint:fix`: Fix linting issues
- `pnpm run codegen`: Generate GraphQL types

---

## Technology Stack
- **Frontend**: React, TypeScript, Vite
- **State Management**: Zustand
- **Styling**: TailwindCSS, shadcn-ui
- **GraphQL**: Apollo Client, GraphQL Codegen
- **Architecture**: Feature Sliced Design

---

## ENV Structure
```
VITE_API_URL= in prod, MAIN AND PROXY are the same. In dev, this is main frontend URL, for vite its http://localhost:5173
VITE_API_PROXY_URL= in prod, MAIN AND PROXY are the same. In dev, this is main backedn URL
VITE_WS_URL= WS Backend URL
```

---

## Disclaimer
This project is for educational purposes only.
