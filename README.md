# Next.js Shadcn App

This project is a Next.js application built with Shadcn UI and Tailwind CSS. It utilizes React Query for API management and is structured for easy scalability and maintainability.

## Features

- **Next.js 14.2.24**: A React framework for building server-side rendered applications.
- **Shadcn UI**: A set of components for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Query**: A library for fetching, caching, and updating data in React applications.

## Folder Structure

```
nextjs-shadcn-app
├── src
│   ├── app
│   │   ├── api
│   │   │   └── route.ts
│   │   ├── (routes)
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── ui
│   │   │   └── button.tsx
│   │   └── layout
│   │       ├── header.tsx
│   │       └── footer.tsx
│   ├── lib
│   │   ├── utils.ts
│   │   └── shadcn-ui.ts
│   ├── hooks
│   │   └── use-debounce.ts
│   └── services
│       ├── api-client.ts
│       └── queries
│           └── user-queries.ts
├── public
│   └── favicon.ico
├── .env.example
├── .eslintrc.json
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/nextjs-shadcn-app.git
   cd nextjs-shadcn-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Copy `.env.example` to `.env` and configure your environment variables.

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000` to see your application in action.

## API Management

This project uses React Query for managing API calls. You can find the API client setup in `src/services/api-client.ts` and user-related queries in `src/services/queries/user-queries.ts`. This structure allows for easy addition and management of API endpoints.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.# nextjs-shadcn-app
# nextjs-shadcn-app
