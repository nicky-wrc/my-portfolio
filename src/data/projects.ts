// src/data/projects.ts

export interface Project {
  slug: string;
  title: string;
  description: string;
  content: string;
  role: string;
  tags: string[];
  category: string;
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  featuredRank?: number;
  caseStudy?: {
    problem: string;
    solution: string;
    highlights: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "face-recognition-attendance",
    title: "Face Recognition Attendance",
    caseStudy: {
      problem: "Manual classroom attendance can allow proxy sign-ins and makes attendance records harder to manage.",
      solution: "A Python and OpenCV desktop system that recognizes registered faces, records attendance, and manages student data.",
      highlights: [
        "Face detection and recognition with OpenCV and deep learning",
        "Attendance history, dashboards, and Excel or CSV export",
        "Unknown-face notifications and face database management",
      ],
    },
    description: "A high-accuracy facial-recognition attendance system that reduces verification time and helps prevent proxy attendance.",
    content: "An automated facial-recognition attendance system built with Python and OpenCV to address proxy attendance in classrooms. It uses OpenCV and deep learning for face detection and recognition, with a face database for storing and managing student profiles. Attendance is recorded automatically when students enter the classroom. The system provides attendance history and statistics, student record management, Excel or CSV data export, alerts for unknown faces or recognition failures, and a dashboard with attendance statistics and charts. It was developed with Python 3.x, OpenCV, NumPy, Pandas, Tkinter, SQLite/MySQL, and the Face Recognition library, using face-detection and recognition models, database management, and a GUI application framework.",
    role: "AI & Backend Developer",
    tags: ["Python", "OpenCV", "Deep Learning", "NumPy", "Pandas", "Tkinter", "SQLite", "Face Recognition", "Computer Vision", "AI"],
    category: "Web App",
    image: "/AnyConv.com__CPKKU.jpg",
    githubUrl: "https://github.com/nicky-wrc/Face-Recognition-Attendance-project",
  },
  {
    slug: "food-order-app",
    title: "Food Order App Admin & User",
    description: "A food-ordering application with separate administrator and customer experiences and real-time order status updates.",
    content: "A complete food-ordering application with separate administrator and customer experiences, built with Flutter and Firebase. Firebase Authentication handles registration and sign-in. Administrators can add, edit, and remove menu items with images and prices, manage every order, and update delivery status. Customers can browse and filter menus by name or category, add items to a shopping cart, place orders, manage profile and delivery information, and review their complete order history. Firebase Realtime Database provides immediate order-status updates, while push notifications alert customers when an order changes. The application uses Flutter, Dart, Firebase Authentication, Firebase Realtime Database, Firebase Storage, Firebase Cloud Messaging, Kotlin for native features, Provider or Bloc for state management, cloud storage, and push notifications.",
    role: "Mobile Developer",
    tags: ["Flutter", "Dart", "Firebase", "Firebase Authentication", "Firebase Realtime Database", "Firebase Storage", "Kotlin", "Mobile App", "State Management"],
    category: "Mobile App",
    image: "/AnyConv.com__CPKKU.jpg",
    githubUrl: "https://github.com/nicky-wrc/UserEatAtHome",
  },
  {
    slug: "smart-moto-service",
    title: "Smart Moto Service Center",
    featured: true,
    featuredRank: 4,
    caseStudy: {
      problem: "A motorcycle service center needs to coordinate vehicle intake, repairs, parts, payments, reporting, and personnel across one workflow.",
      solution: "An in-progress full-stack management system for customer records, service tracking, repair history, parts, and operational reporting.",
      highlights: [
        "Customer records, service requests, and repair-status tracking",
        "Parts, payments, reporting, and personnel workflows",
        "React and NestJS architecture with PostgreSQL, Prisma, RBAC, Swagger, and Docker",
      ],
    },
    description: "An end-to-end motorcycle service-center management system covering vehicle intake, repairs, parts, payments, reporting, and personnel operations.",
    content: "A comprehensive web application for managing a motorcycle service center. The project is currently in development and is expected to be completed within four months. It covers customer and service management, repair-status tracking, repair history, parts inventory, and operational reporting. The system uses a modern full-stack architecture to deliver an efficient workflow. Current work includes system analysis, database schema design, and development of the full-stack service tracking and management solution.",
    role: "Full-Stack Developer",
    tags: ["React (Vite + TypeScript)", "React Router", "Tailwind CSS", "Context API (AuthContext, RequestHistoryContext)", "Custom hooks and Service", "Recharts", "Node.js", "NestJS", "PostgreSQL", "Prisma ORM", "JWT Authentication", "Role-based Access Control (RBAC)", "Swagger", "Docker"],
    category: "Web App",
    image: "/AnyConv.com__CPKKU.jpg",
    githubUrl: "https://github.com/nicky-wrc/smart-moto-service-center",
  },
  {
    slug: "pos-pharmacy",
    title: "POS Pharmacy System",
    description: "A pharmacy point-of-sale system built with Laravel 8 and MySQL for end-to-end product, purchasing, sales, inventory, and reporting workflows.",
    content: "A point-of-sale system designed specifically for pharmacies and built with Laravel 8 and MySQL. Product management supports creating, editing, and removing products; organizing categories; monitoring out-of-stock and expired items; and managing prices and discounts. Purchase management records purchases, imports Excel data, edits or removes records, tracks purchase history, and exports data. The sales interface calculates prices, records sales history, manages discounts, and exports sales data. Additional workflows cover supplier records and contacts, role- and permission-based user access, profile and password management, authentication and authorization, and dashboards with charts and statistics. Reports can be exported to Excel or PDF and visualized with Chart.js. Pusher and event listeners provide real-time out-of-stock notifications. The system also supports automated database backups and restoration, application branding and settings, data import and export, printing, responsive layouts, and a user-friendly interface. It uses PHP 7.3/8.0, Laravel 8.12, MySQL, JavaScript, Bootstrap, Chart.js, Laravel Excel, Laravel Permission, Laravel Backup, Pusher, Axios, and Laravel Mix, following MVC, Eloquent ORM, RBAC, and automated database-backup practices.",
    role: "Backend Developer",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "Chart.js", "Laravel Excel", "Pusher", "Axios", "POS", "Backend"],
    category: "Web App",
    image: "/AnyConv.com__CPKKU.jpg",
    githubUrl: "https://github.com/nicky-wrc/Pharmacy-Project",
  },
  {
    slug: "game-key-marketplace",
    title: "Game Key Marketplace",
    description: "A full-featured e-commerce marketplace for buying and selling game keys across multiple platforms, built with a modern full-stack architecture.",
    content: "Game Key Marketplace is a complete e-commerce platform for buying and selling game keys. It supports titles from Steam, PlayStation, Xbox, Nintendo, and Epic Games, with inventory management for games and activation codes. A digital wallet supports online balance top-ups, transaction history, and fixed or percentage discount coupons. Administrators can manage gacha or mystery boxes and their randomized game rewards. JWT authentication and role-based access control support user, seller, and administrator roles. The administration dashboard manages games, inventory, coupons, mystery boxes, sales reports, and summary statistics. Other features include real-time search, advanced filtering and sorting, wishlists and favorites, game comparison, featured games, reviews and ratings, responsive design, Tailwind CSS interfaces, and toast notifications. The project uses React 19, React Router DOM v7, Vite, Tailwind CSS, Axios, Node.js, Express.js, PostgreSQL, JWT, Multer, bcryptjs, and CORS. Its architecture combines an MVC backend, RESTful APIs, component-based frontend development, and normalized database design.",
    role: "Full-Stack Developer",
    tags: ["React 19", "Node.js", "Express.js", "PostgreSQL", "JWT", "Vite", "Tailwind CSS", "E-commerce", "Full-Stack"],
    category: "Web App",
    image: "/AnyConv.com__CPKKU.jpg",
    githubUrl: "https://github.com/nicky-wrc/game-key-marketplace",
    demoUrl: "https://game-key-marketplace-frontend.vercel.app",
  },
  {
    slug: "ecommerce-springboot",
    title: "E-commerce",
    featured: true,
    featuredRank: 5,
    caseStudy: {
      problem: "An e-commerce platform must coordinate customer, seller, and administrator workflows across orders, inventory, payments, and support.",
      solution: "A Spring Boot REST API with JWT access control, a Next.js frontend, real-time seller chat, and multiple payment workflows.",
      highlights: [
        "Customer, seller, and administrator role workflows",
        "Product variants, stock, cart, and order tracking",
        "WebSocket chat, notifications, and payment webhooks",
      ],
    },
    description: "A Spring Boot RESTful API for a multi-role e-commerce platform with customer, seller, and administrator workflows, multiple payment methods, and real-time chat.",
    content: "A RESTful e-commerce API built with Spring Boot 3.3.2 and Java 21. It supports customer, seller, and administrator roles through JWT authentication and role-based access control. Core commerce workflows include shopping carts, order management and tracking, products and variants, and inventory. Sellers can apply for an account, create a shop, manage products, variants, stock, and orders, review sales dashboards and statistics, and support customers through chat. A WebSocket chat system using STOMP provides file and image sharing and real-time notifications. Payment integration supports credit and debit cards, PromptPay, TrueMoney, Rabbit LINE Pay, cash on delivery, PayPal, and Stripe through the Omise payment gateway, with payment webhooks and refunds. Customers can register, sign in, browse products and variants, manage carts and wishlists, track orders, choose among payment methods, review and rate products, and chat with sellers. Administrators manage users, products, shops, orders, payments, categories, and system statistics. The backend uses Java 21, Spring Boot 3.3.2, Spring Security, Spring Data JPA, PostgreSQL 15, JWT, Spring WebSocket, Lombok, and Maven. The frontend uses Next.js 14, TypeScript, Tailwind CSS, React 18, Zustand, and Axios. The system also supports product variants, multiple payment gateways, file and image management, reviews and ratings, and Docker.",
    role: "Backend Developer",
    tags: ["Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "JWT", "WebSocket", "Next.js", "TypeScript", "React", "E-commerce", "RESTful API"],
    category: "Web App",
    image: "/AnyConv.com__CPKKU.jpg",
    githubUrl: "https://github.com/E-comproject/e_commerceSpringboots",
  },
  {
    slug: "Big-Data-Analytics-Mini-Project",
    title: "Big Data Analytics Mini Project",
    description: "",
    content: "",
    role: "Full-Stack Developer",
    tags: ["React", "TypeScript", "Recharts", "Node.js", "Express", "PostgreSQL", "scikit-learn (Random Forest)", "Apache Spark", "Docker"],
    category: "Data Analytics",
    image: "/AnyConv.com__CPKKU.jpg",
    githubUrl: "https://github.com/nicky-wrc/Big-Data-Analytics-Mini-Project",
    demoUrl: "https://big-data-analytics-mini-project.vercel.app/",
  },
  {
    slug: "expense-eracker",
    title: "Expense Tracker",
    description: "",
    content: "",
    role: "Full-Stack Developer",
    tags: ["React 19", "React Router DOM v7", "Vite", "Recharts", "Lucide React", "Axios", "date-fns", "Node.js", "Express.js v5", "Prisma ORM", "PostgreSQL", "JWT", "bcryptjs", "CORS"],
    category: "Web App",
    image: "/AnyConv.com__CPKKU.jpg",
    githubUrl: "https://github.com/nicky-wrc/expense-tracker",
    demoUrl: "https://expense-tracker-phi-drab-82.vercel.app/login",
  },
  {
    slug: "ppe-detection-system",
    title: "PPE Detection System",
    featured: true,
    featuredRank: 1,
    description: "",
    content: "",
    role: "AI & Backend Developer",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "FastAPI", "SQLAlchemy", "PostgreSQL", "Ultralytics YOLO (PPE Detection)"],
    category: "AI",
    image: "/AnyConv.com__CPKKU.jpg",
    githubUrl: "https://github.com/nicky-wrc/ppe-detection-system",
  },
  {
    slug: "Powered-Product-Recommendation-Engine-Web-app",
    title: "AI-Powered Product Recommendation Engine Web app",
    featured: true,
    featuredRank: 2,
    caseStudy: {
      problem: "A product catalog needs recommendations and search that can respond to both user behavior and product meaning.",
      solution: "A hybrid recommendation system combining collaborative filtering, semantic product embeddings, and natural-language search in a Next.js and FastAPI commerce app.",
      highlights: [
        "ALS collaborative filtering with scheduled retraining and MLflow tracking",
        "Sentence Transformer embeddings stored with PostgreSQL and pgvector",
        "Claude-powered query parsing and Redis recommendation caching",
      ],
    },
    description: "An AI-powered e-commerce platform with Amazon-style personalized recommendations, built with Next.js and FastAPI and supporting collaborative filtering, content-based filtering, and LLM-assisted search.",
    content: "A complete e-commerce platform that combines AI with personalized product recommendations, built with Next.js and FastAPI. Its recommendation engine combines multiple algorithms. ALS collaborative filtering learns from users with similar preferences to recommend products a customer has not yet viewed; the model retrains nightly through a cron job, and MLflow tracks experiments. Content-based filtering converts product names, descriptions, and tags into vector embeddings with Sentence Transformers, stores them in pgvector, and finds similar products through cosine similarity. A hybrid recommender combines both scores with a weighted average to improve accuracy and variety. Claude API powers natural-language search by converting requests such as a birthday gift for a woman with a budget of 500 into structured product filters. Behavior tracking records views, clicks, cart additions, and purchases with weighted events so recommendations can improve over time. The personalized home page includes recommendations, trending products, recently viewed items, similar products, and frequently bought together suggestions. Commerce features include a persistent cart, wishlist, coupons and promotional codes, multi-step checkout, order tracking, returns and refunds, and order history. The administration dashboard reports real-time CTR, conversion rate, and revenue, supports A/B testing across algorithms, and tracks model versions through MLflow. Redis caches recommendation results, similar products, and trending items to reduce latency and computation. The frontend uses Next.js 14 App Router and Tailwind CSS. The backend and machine-learning layer use FastAPI, SQLAlchemy, PostgreSQL with pgvector, Redis, MLflow, Scikit-learn, and Sentence Transformers. Deployment uses Docker, Vercel for the frontend, Railway for the backend, and GitHub Actions for CI/CD.",
    role: "Full-Stack Developer",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "pgvector", "Tailwind CSS", "Docker", "Redis", "MLflow", "Scikit-learn", "Sentence Transformers", "Claude API", "Collaborative Filtering"],
    category: "Web App",
    image: "/AnyConv.com__CPKKU.jpg",
    githubUrl: "https://github.com/nicky-wrc/Powered-Product-Recommendation-Engine-Web-app",
  },
  {
    slug: "restaurant-qr-system",
    title: "Restaurant QR System",
    featured: true,
    featuredRank: 3,
    caseStudy: {
      problem: "Restaurant orders need to move clearly from each table to the kitchen while staff retain role-specific controls.",
      solution: "A QR-based ordering system with real-time Socket.io updates, a kitchen display, table management, and role-based administration.",
      highlights: [
        "Per-table QR ordering without app installation",
        "Kitchen display with real-time order status updates",
        "Four staff roles, menu media management, and sales reporting",
      ],
    },
    description: "A QR-based restaurant ordering system with real-time order updates, a kitchen display, and an administration dashboard with clearly separated staff roles.",
    content: "A complete QR-based restaurant ordering system built with Next.js 14, Node.js, and Express for real-time ordering and restaurant operations. The system generates a unique QR code for each table, allowing customers to scan, browse, and order without installing an application. Menu management supports categories, creating, editing, or hiding items, and image uploads through Cloudinary. Customers can add menu items to a cart, include notes, and confirm an order. The Kitchen Display System receives orders in real time through Socket.io and lets kitchen staff confirm and update their status immediately. Role-based access control defines four roles—Owner, Manager, Chef, and Waiter—each limited to the relevant functions. Table management supports opening and closing tables, printing QR codes, and viewing real-time table status. The sales dashboard reports daily, weekly, and monthly revenue with order history and digital receipts. The frontend uses Next.js 14 App Router, TypeScript, Tailwind CSS, and shadcn/ui. The backend uses Node.js, Express, Socket.io, Prisma ORM, PostgreSQL, and JWT. Socket.io provides real-time communication, role-based controls manage permissions, and Cloudinary stores menu images.",
    role: "Full-Stack Developer",
    tags: ["Next.js", "Express", "PostgreSQL", "Prisma", "Socket.io", "TypeScript", "Tailwind CSS"],
    category: "Web App",
    image: "/AnyConv.com__CPKKU.jpg",
    githubUrl: "https://github.com/nicky-wrc/restaurant-qr-system",
  },
  {
    slug: "first-issue",
    title: "First Issue",
    description: "An open-source discovery platform that recommends GitHub issues suited to a developer's skill level, with AI match scores and a weekly email digest.",
    content: "Open Source Finder helps developers discover GitHub issues that match their skills. Built with Next.js 14 and Node.js, it uses GitHub OAuth to analyze repositories and frequently used languages, then creates a skill profile automatically. Issue discovery retrieves data through the GitHub GraphQL API and filters results by language, labels such as good first issue, issue age, and repository star count. Claude API analyzes each issue, summarizes the knowledge needed before contributing, and produces a 0–100 match score against the user's skills. Bookmarking and issue tracking let users save opportunities and update their status, including interested, applying, or pull request submitted. Resend delivers a weekly email digest of new issues matching each profile. Upstash Redis caches GitHub API results to reduce rate-limit pressure and improve loading speed. The frontend uses Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui, and NextAuth.js. The backend uses Node.js, PostgreSQL, Prisma ORM, and Upstash Redis. GitHub GraphQL provides issue data, Claude API handles AI analysis, and Resend sends the email digest.",
    role: "Full-Stack Developer",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "GitHub API", "Claude API", "TypeScript", "Redis"],
    category: "Web App",
    image: "/AnyConv.com__CPKKU.jpg",
    githubUrl: "https://github.com/nicky-wrc/first-issue",
  },
];

export const projectSlugAliases = {
  "smart-moto-service-center": "smart-moto-service",
  e_commerce: "ecommerce-springboot",
} as const satisfies Record<string, string>;

export function resolveProjectSlug(slug: string) {
  return (
    projectSlugAliases[slug as keyof typeof projectSlugAliases] ?? slug
  );
}

export const featuredProjects = projects
  .filter(
    (project) => project.featured && project.featuredRank !== undefined,
  )
  .sort(
    (firstProject, secondProject) =>
      (firstProject.featuredRank ?? Number.MAX_SAFE_INTEGER) -
      (secondProject.featuredRank ?? Number.MAX_SAFE_INTEGER),
  );
