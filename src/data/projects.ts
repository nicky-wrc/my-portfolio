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
  /** Optional verified screenshot; legacy image fields contain shared placeholders. */
  previewImage?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  featuredRank?: number;
  contributors?: string[];
  details?: { title: string; paragraphs: string[] }[];
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
      solution: "A full-stack service-center application connecting reception, workshop, inventory, billing, and management through shared job records and role-based access control.",
      highlights: [
        "Customer and motorcycle registration, appointments, service history, and service requests converted into workshop jobs.",
        "Diagnosis, customer approval, mechanic assignment, repair progress, quality control, and delivery readiness in one job workflow.",
        "Job-linked parts requisitions, approval or rejection, stock deduction on issue, returns, and purchase-order approval that automatically increases stock.",
        "Billing from tracked labor, issued parts, and outsourced work, with quotation fallback, VAT calculation, receipts, and coordinated payment and job status updates.",
        "Role-specific dashboards, financial and stock reports, PDF exports, and employee management backed by JWT authentication and RBAC.",
      ],
    },
    description: "A motorcycle service-center management application connecting vehicle intake, workshop jobs, parts inventory, billing, and management reports through role-based workflows.",
    content: "Smart Moto Service Center brings the main departments of a motorcycle service center into one connected application. Service advisors receive customers and vehicles, foremen and mechanics manage repairs, stock keepers handle parts, cashiers process payments, and owners review operations and finances. The React and TypeScript frontend connects to a modular NestJS API with PostgreSQL and Prisma. The documented core workflow is implemented across reception, jobs, parts, payments, and reports, with dedicated interfaces for all main staff roles. The project is intended for education and demonstration.",
    details: [
      {
        title: "Reception and workshop workflow",
        paragraphs: [
          "Reception / Service Advisor → Foreman and Mechanic / Workshop → Inventory / Stock → Accounting / Billing → Owner and Admin / Dashboard and Reports. Shared job records connect each handoff from vehicle intake to payment and operational reporting.",
          "Reception supports first-time and returning customers, registering additional motorcycles, service appointments, and customer service history. Service requests become jobs for foreman diagnosis and workshop planning.",
          "Workshop jobs progress through diagnosis, customer approval, repair readiness, repair in progress, quality control, and delivery readiness. Foremen record diagnoses, manage queues, and assign mechanics; technicians add mechanic notes and track repair progress. Repeat repairs and second assessments are also supported.",
        ],
      },
      {
        title: "Parts and purchasing",
        paragraphs: [
          "The parts master tracks inventory balances. Staff create job-linked requisitions for approval or rejection, stock is deducted when parts are issued, and unused parts can be returned. Stock movement and requisition history provide a record of inventory activity.",
          "Purchase orders move from draft to pending approval, then approval or cancellation by an owner or administrator. In the documented business workflow, approval automatically increases stock. Management reports cover purchase orders, incoming stock, and parts running low.",
        ],
      },
      {
        title: "Billing and payments",
        paragraphs: [
          "Payments are created from jobs that are ready for delivery. Charges use tracked labor time, parts actually marked as issued, and outsourced work. A quotation provides the calculation basis when detailed cost records are unavailable.",
          "The billing module calculates totals, VAT, and the net amount due, tracks pending and paid payments, and provides payment history and receipt details. Processing a payment updates both the payment record and the associated job status.",
        ],
      },
      {
        title: "Roles and management reports",
        paragraphs: [
          "JWT authentication and role-based access control separate Administrator, Owner, Service Advisor, Foreman, Mechanic, Stock Keeper, and Cashier workflows. Each role has a dedicated starting page, while the administrator dashboard provides access to all modules.",
          "Owners review revenue, profit, outstanding jobs, and unpaid balances. Reports include daily, weekly, and monthly financial views, job backlogs grouped by status, stock levels, and purchasing activity. Recharts visualizes dashboard and report data from the system, and the frontend supports PDF exports.",
          "User management supports creating and editing employee accounts, assigning roles, and recording salaries. These personnel features sit alongside operational and financial reporting in the management interface.",
        ],
      },
      {
        title: "Architecture and development workflow",
        paragraphs: [
          "The frontend uses React, Vite, TypeScript, React Router, and Tailwind CSS. AuthContext and RequestHistoryContext manage shared state, while custom hooks and service modules connect the interface to the backend API.",
          "The NestJS backend separates authentication, users, customers, motorcycles, jobs, parts, purchase orders, payments, and reports into modules, with shared guards, decorators, and helpers. Prisma manages PostgreSQL access and schema changes, Docker runs the database, and Swagger / OpenAPI documents the API.",
          "The repository includes setup instructions, team assignments, API testing guidance, and Git conventions. Development uses feature and bugfix branches integrated through develop, with pull requests into main and GitHub Actions workflows configured in the repository.",
        ],
      },
    ],
    role: "Full-Stack Developer",
    tags: ["React", "TypeScript", "NestJS", "PostgreSQL", "Vite", "React Router", "Tailwind CSS", "Context API", "Custom Hooks", "Recharts", "Node.js", "Prisma ORM", "JWT / RBAC", "Swagger / OpenAPI", "Docker", "GitHub Actions"],
    category: "Web App",
    image: "/AnyConv.com__CPKKU.jpg",
    githubUrl: "https://github.com/nicky-wrc/smart-moto-service-center",
  },
  {
    slug: "pos-pharmacy",
    title: "POS Pharmacy System",
    featured: true,
    featuredRank: 6,
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
    title: "FraudLens — Big Data Analytics Mini Project",
    description: "A credit-card fraud detection project combining real-time predictions, an interactive transaction dashboard, three-model comparison, and CSV exports with Apache Spark and machine learning.",
    content: "FraudLens is a Big Data Analytics course project developed by Worachat Paranya. It brings credit-card transaction analysis and fraud prediction into a React and TypeScript dashboard, supported by a Node.js and Express REST API, PostgreSQL, scikit-learn, and Apache Spark. Users can review statistics, search and filter transactions, request fraud predictions, compare three machine-learning models, and export transaction data to CSV.",
    contributors: ["Worachat Paranya"],
    caseStudy: {
      problem: "Fraudulent transactions make up a very small share of the project dataset. Exploring this imbalance and reviewing model predictions requires both transaction-level tools and a clear overview of the data.",
      solution: "An interactive analytics application connects transaction search, statistical dashboards, real-time fraud prediction, and model comparison through a shared REST API.",
      highlights: [
        "Real-time fraud prediction through a dedicated prediction API.",
        "Interactive dashboard with transaction statistics, filtering, and search.",
        "Comparison of three machine-learning models, with Random Forest identified in the documented ML stack.",
        "CSV export for further transaction analysis.",
        "Apache Spark data scripts and a Docker Compose setup for the project services.",
      ],
    },
    details: [
      {
        title: "Dataset and analytical context",
        paragraphs: [
          "The project uses the Kaggle Credit Card Fraud Dataset: 284,807 transactions, including 492 fraud cases, or approximately 0.17% of the dataset. This imbalance is central to the project's fraud-analysis context.",
          "The dataset is supplied separately as creditcard.csv under spark/data. The project includes a model-comparison view for three models; the README identifies Random Forest but does not specify the other two models or report evaluation scores.",
        ],
      },
      {
        title: "Dashboard and prediction workflow",
        paragraphs: [
          "Users explore transaction statistics through an interactive React dashboard with Recharts visualizations, narrow transaction lists with search and filters, and export data to CSV. Model insights provide a separate comparison of three machine-learning models.",
          "The REST API exposes GET /api/stats for summary statistics, GET /api/transactions for transaction listings, POST /api/predict for fraud prediction, and GET /api/stats/model-comparison for model comparison.",
        ],
      },
      {
        title: "Architecture and local setup",
        paragraphs: [
          "The repository separates the React and TypeScript frontend, Node.js and Express backend, scikit-learn model code, and Apache Spark data scripts into frontend, backend, model, and spark directories. PostgreSQL stores application data, and Docker Compose coordinates the local environment.",
          "The documented setup loads the dataset, builds and starts the services with Docker Compose, and runs the backend seed script. A setup guide and user manual explain installation, testing, and use. FraudLens is presented as an educational Big Data Analytics mini project.",
        ],
      },
    ],
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
    description: "A workplace PPE monitoring prototype that detects people, helmets, and safety vests from USB and RTSP cameras, confirms violations across multiple frames, and supports evidence review, real-time alerts, and PDF reports.",
    content: "Developed by Nicky and Krit, this academic prototype connects computer vision with a practical safety-review workflow. A React and TypeScript frontend provides a shared dashboard, camera monitoring, a Reports & Alerts review center, personal detection settings, and administrator-managed user accounts. A FastAPI backend handles authentication, inference, camera processing, event confirmation, protected evidence, and notifications, with PostgreSQL for persistent records. Image, video, and individual-frame detection are also available through authenticated APIs for safety officers and administrators; the legacy upload page is not exposed in the current interface.",
    contributors: ["Nicky", "Krit"],
    caseStudy: {
      problem: "Safety teams need a way to review missing helmets and safety vests across camera feeds, distinguish persistent violations from transient detections, and retain evidence for follow-up without treating every frame as a separate incident.",
      solution: "A camera-to-review pipeline combines person and PPE detection with zone-specific rules, multi-frame confirmation, evidence capture, and role-controlled alert handling. The system supports human safety supervision rather than replacing it.",
      highlights: [
        "Detects person, helmet, and safety-vest using an Ultralytics YOLO PPE model with a person-assist model, optional low-light enhancement, and person-crop refinement when running on GPU.",
        "Confirms violations in 4 of 5 frames by default, clears the violation state after 3 consecutive compliant frames, and applies a 60-second cooldown to reduce repeated events.",
        "Applies polygon-based zone rules for required helmets and vests, with low, medium, high, or critical risk levels. Active zone rules take precedence over personal settings.",
        "Stores event snapshots and buffered clips, with default windows of 5 seconds before and 10 seconds after an event. Camera evidence receives best-effort head blurring before storage.",
        "Broadcasts real-time updates through WebSocket and sends camera-event email alerts when SMTP is configured, with up to 3 delivery attempts.",
        "Combines shared dashboard analytics, alert review, protected detection media, and browser-generated PDF reports with JWT authentication and role-based access control.",
      ],
    },
    details: [
      {
        title: "Architecture and camera workflow",
        paragraphs: [
          "USB or RTSP source → frame capture → person and PPE inference → zone rules → temporal confirmation → detection, event, and alert creation → privacy-filtered evidence → WebSocket update → optional SMTP delivery. The browser communicates with FastAPI through HTTP, protected media endpoints, MJPEG previews, and WebSocket connections.",
          "Camera runtime, inference coordination, rate limiting, and WebSocket connection state run inside the API process. This architecture targets a single-instance edge pilot. Multiple API replicas require camera workers and shared coordination or a message broker; camera inference currently uses one shared asynchronous lock.",
          "The runtime selects CUDA when available and falls back to CPU, disabling person-crop refinement on CPU to reduce latency. Active cameras attempt to restart with the backend, and reconnect uses exponential backoff up to 30 seconds. These are runtime behaviors and configuration defaults, not measured performance guarantees.",
        ],
      },
      {
        title: "Roles and review workflow",
        paragraphs: [
          "Viewer: reads system-wide dashboards, detection history, alerts, events, and protected evidence, and exports PDF reports. Viewer access is shared across the system rather than limited to personally created records; viewers cannot open unblurred live previews, control cameras, or modify events.",
          "Safety Officer: additionally performs detection, opens live previews, tests and starts or stops registered cameras, acknowledges or resolves incidents, and updates personal detection settings. Administrator: additionally manages users, roles, account status, camera registration, and zone configuration.",
          "Reports & Alerts share a review interface. Events without an associated alert do not yet appear as a separate event list. Camera and zone administration screens do not expose every operation supported by the backend APIs.",
        ],
      },
      {
        title: "Evidence and privacy",
        paragraphs: [
          "The system saves event evidence rather than continuously recording camera video. A JPEG ring buffer retains pre-event frames in memory. Snapshots and clips from backend cameras receive best-effort head blurring; this does not guarantee anonymization and does not cover original uploaded files. The system performs no face recognition or employee identification.",
          "Unblurred live previews stay in memory and are restricted to safety officers and administrators. Detection results, snapshots, and clips are served through authenticated endpoints. Evidence and upload cleanup is configurable, with a default 30-day file retention period; detection and event rows remain, and metadata-row retention is not yet enforced.",
        ],
      },
      {
        title: "Delivery and validation",
        paragraphs: [
          "Docker Compose coordinates PostgreSQL, the Python backend, and the frontend, waits for database health, and runs Alembic migrations before starting the API. The standard backend image uses CPU inference; native execution is recommended for USB cameras where Docker Desktop device passthrough is unsuitable.",
          "The documented Pytest suite covers authentication, role permissions, user administration, camera runtime, detection, alerts, evidence privacy, retention, temporal tracking, and model-evaluation tools. Frontend validation uses lint, strict TypeScript checks, builds, and browser smoke tests; a separate frontend unit or end-to-end suite is not configured.",
          "The project includes model-training, evaluation, and pilot-monitoring tools. Pilot recall, precision, false-alert, throughput, latency, and soak-test targets are acceptance criteria, not achieved results. No production accuracy or performance claim is made here.",
        ],
      },
      {
        title: "Prototype scope and limitations",
        paragraphs: [
          "This is an academic prototype and decision-support system, not a certified safety-control device. It cannot replace safety-officer supervision, may produce false positives or false negatives, and should not be used for automatic disciplinary decisions.",
          "Deployment requires site-specific testing of cameras, network conditions, lighting, hardware, and throughput. The system has no tenant or site isolation, high availability, comprehensive administrator audit log, or formal privacy certification. Model weights, datasets, and the Ultralytics runtime require separate license review before commercial use; the source-code MIT license does not automatically cover them.",
        ],
      },
    ],
    role: "AI & Backend Developer",
    tags: ["React 19", "TypeScript", "FastAPI", "Ultralytics YOLO", "Python 3.11", "OpenCV", "PostgreSQL 15", "SQLAlchemy", "Alembic", "JWT / RBAC", "WebSocket", "SMTP", "Docker Compose", "Vite", "Tailwind CSS 4", "React Router", "Zustand", "Axios", "Recharts", "jsPDF", "html2canvas", "NumPy", "Pillow", "Pydantic", "Pytest"],
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
