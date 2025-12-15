// src/data/projects.ts

export interface Project {
  slug: string;
  title: string;
  description: string;
  content: string;
  role: string;
  tags: string[];
  category: string;
  image: string; // <--- เพิ่มบรรทัดนี้
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "face-recognition-attendance",
    title: "Face Recognition Attendance",
    description: "ระบบเช็คชื่อด้วยใบหน้าแม่นยำสูง ลดเวลาตรวจสอบและป้องกันการลงชื่อแทน",
    content: "ระบบเช็คชื่ออัตโนมัติด้วยการจดจำใบหน้า พัฒนาด้วย Python และ OpenCV เพื่อแก้ปัญหาการลงชื่อแทนกันในห้องเรียน. ระบบ Face Detection และ Recognition ที่ใช้ OpenCV และ Deep Learning สำหรับการตรวจจับและจดจำใบหน้า. ระบบจัดการฐานข้อมูลใบหน้า (Face Database) สำหรับบันทึกและจัดการข้อมูลใบหน้าของนักเรียน. ระบบเช็คชื่ออัตโนมัติ (Automatic Attendance) ที่สามารถเช็คชื่อได้อัตโนมัติเมื่อนักเรียนเข้ามาในห้องเรียน. ระบบรายงานการเช็คชื่อ (Attendance Report) สำหรับดูประวัติการเช็คชื่อและสถิติการเข้าเรียน. ระบบจัดการผู้ใช้ (User Management) สำหรับเพิ่ม/แก้ไข/ลบข้อมูลนักเรียน. ระบบ Export ข้อมูล (Data Export) สำหรับส่งออกข้อมูลการเช็คชื่อเป็นไฟล์ Excel หรือ CSV. ระบบแจ้งเตือน (Notification System) เมื่อตรวจพบใบหน้าที่ไม่รู้จักหรือมีปัญหาในการจดจำ. ระบบ Dashboard สำหรับแสดงสถิติการเช็คชื่อและกราฟการเข้าเรียน. พัฒนาด้วย Python 3.x, OpenCV, NumPy, Pandas, Tkinter, SQLite/MySQL, และ Face Recognition Library. ใช้ Face Detection Algorithm, Face Recognition Model, Database Management System, และ GUI Application Framework.",
    role: "AI & Backend Developer",
    tags: ["Python", "OpenCV", "Deep Learning", "NumPy", "Pandas", "Tkinter", "SQLite", "Face Recognition", "Computer Vision", "AI"],
    category: "Web App",
    image: "/AnyConv.com__CPKKU.jpg", 
    githubUrl: "https://github.com/nicky-wrc/Face-Recognition-Attendance-project",
  },
  {
    slug: "food-order-app",
    title: "Food Order App",
    description: "แอพสั่งอาหารที่มีระบบจัดการ 2 ฝั่ง (Admin/User) รองรับสถานะออเดอร์ Real-time",
    content: "แอปพลิเคชันสั่งอาหารแบบครบวงจรพร้อมระบบจัดการ 2 ฝั่ง (Admin/User) พัฒนาด้วย Flutter และ Firebase. ระบบจัดการผู้ใช้ (User Management) ด้วย Firebase Authentication สำหรับการลงทะเบียนและเข้าสู่ระบบ. ระบบจัดการเมนูอาหาร (Menu Management) สำหรับ Admin เพิ่ม/แก้ไข/ลบเมนูอาหารพร้อมรูปภาพและราคา. ระบบสั่งอาหาร (Order System) ที่ผู้ใช้สามารถเลือกเมนู เพิ่มลงตะกร้า และสั่งอาหารได้. ระบบอัปเดตสถานะออเดอร์แบบ Real-time (Real-time Order Status) ด้วย Firebase Realtime Database แสดงสถานะออเดอร์แบบทันที. ระบบจัดการออเดอร์ (Order Management) สำหรับ Admin ดูและจัดการออเดอร์ทั้งหมด พร้อมอัปเดตสถานะการจัดส่ง. ระบบแจ้งเตือน (Push Notifications) แจ้งเตือนผู้ใช้เมื่อออเดอร์มีการอัปเดตสถานะ. ระบบประวัติการสั่งอาหาร (Order History) สำหรับผู้ใช้ดูประวัติการสั่งอาหารทั้งหมด. ระบบโปรไฟล์ผู้ใช้ (User Profile) สำหรับจัดการข้อมูลส่วนตัวและที่อยู่จัดส่ง. ระบบค้นหาและกรองเมนู (Search & Filter) สำหรับค้นหาเมนูอาหารตามชื่อหรือหมวดหมู่. ระบบตะกร้าสินค้า (Shopping Cart) สำหรับจัดการรายการอาหารก่อนสั่ง. พัฒนาด้วย Flutter, Dart, Firebase Authentication, Firebase Realtime Database, Firebase Storage, Firebase Cloud Messaging, และ Kotlin สำหรับ Native Features. ใช้ State Management (Provider/Bloc), Real-time Database, Cloud Storage, และ Push Notifications.",
    role: "Mobile Developer",
    tags: ["Flutter", "Dart", "Firebase", "Firebase Authentication", "Firebase Realtime Database", "Firebase Storage", "Kotlin", "Mobile App", "State Management"],
    category: "Mobile App",
    image: "/AnyConv.com__CPKKU.jpg", 
    githubUrl: "https://github.com/nicky-wrc/UserEatAtHome", 
  },
  {
    slug: "smart-moto-service",
    title: "Smart Moto Service Center",
    description: "ระบบบริหารจัดการศูนย์บริการรถจักรยานยนต์ครบวงจร กำลังดำเนินการทำโปรเจคภายใน 4 เดือนนี้",
    content: "ระบบ Web Application สำหรับบริหารจัดการศูนย์บริการรถจักรยานยนต์แบบครบวงจร กำลังอยู่ในขั้นตอนการพัฒนาและคาดว่าจะแล้วเสร็จภายใน 4 เดือนนี้. ระบบนี้จะครอบคลุมการจัดการลูกค้า การจัดการบริการ การติดตามสถานะการซ่อม และรายงานต่างๆ. โปรเจกต์นี้จะใช้เทคโนโลยี Full-Stack Modern เพื่อสร้างระบบที่ทันสมัยและมีประสิทธิภาพ. ระบบจะรองรับการจัดการข้อมูลลูกค้า ประวัติการซ่อม การจัดการอะไหล่ และระบบรายงาน. กำลังดำเนินการวิเคราะห์ระบบ ออกแบบ Database Schema และพัฒนาโซลูชันแบบ Full-Stack สำหรับการติดตามและจัดการบริการ.",
    role: "Full-Stack Developer",
    tags: ["System Analysis", "Web App", "Full-Stack", "In Progress"],
    category: "Web App",
    image: "/AnyConv.com__CPKKU.jpg", 
    githubUrl: "https://github.com/nicky-wrc/smart-moto-service-center",
  },
  {
    slug: "pos-pharmacy",
    title: "POS Pharmacy System",
    description: "ระบบ Point of Sale (POS) สำหรับร้านขายยา พัฒนาด้วย Laravel 8 และ MySQL จัดการสินค้า การซื้อ-ขาย สต็อก และรายงานแบบครบวงจร",
    content: "ระบบ Point of Sale (POS) ที่ออกแบบเฉพาะสำหรับร้านขายยา พัฒนาด้วย Laravel 8 และ MySQL เพื่อช่วยให้ร้านขายยาจัดการสินค้า การซื้อ-ขาย และสต็อกได้อย่างมีประสิทธิภาพ. ระบบจัดการสินค้า (Product Management) ที่มีฟีเจอร์เพิ่ม/แก้ไข/ลบสินค้า, จัดการหมวดหมู่สินค้า, ติดตามสินค้าหมดสต็อกและหมดอายุ, และจัดการราคาและส่วนลด. ระบบจัดการการซื้อ (Purchase Management) ที่รองรับการบันทึกการซื้อสินค้า, Import ข้อมูลการซื้อจาก Excel, แก้ไขและลบข้อมูลการซื้อ, ติดตามประวัติการซื้อทั้งหมด, และ Export ข้อมูลการซื้อ. ระบบขายหน้าร้าน (Sales/POS System) ที่มีฟีเจอร์ขายสินค้าแบบ Point of Sale, คำนวณราคาอัตโนมัติ, บันทึกประวัติการขาย, จัดการส่วนลดการขาย, และ Export ข้อมูลการขาย. ระบบจัดการซัพพลายเออร์ (Supplier Management) สำหรับเพิ่ม/แก้ไข/ลบข้อมูลซัพพลายเออร์, ติดตามการซื้อจากแต่ละซัพพลายเออร์, และจัดการข้อมูลติดต่อ. ระบบจัดการผู้ใช้และสิทธิ์ (User & Access Control) ที่มีระบบ Roles และ Permissions, Profile Management, เปลี่ยนรหัสผ่าน, และระบบ Authentication และ Authorization. Dashboard และรายงาน (Dashboard & Reports) พร้อมกราฟและสถิติ, สร้างรายงานการขายและการซื้อ, Export ข้อมูลเป็น Excel/PDF, และ Data Visualization ด้วย Chart.js. การแจ้งเตือน (Notifications) เมื่อสินค้าหมดสต็อกด้วย Real-time notifications ผ่าน Pusher และระบบ Event & Listener. ระบบสำรองข้อมูล (Backup System) ที่รองรับการสำรองข้อมูลอัตโนมัติ, สำรองฐานข้อมูล, และ Restore ข้อมูล. การตั้งค่า (Settings) สำหรับตั้งค่าทั่วไปของแอปพลิเคชัน, จัดการโลโก้และ Favicon, และตั้งชื่อแอปพลิเคชัน. ระบบอื่นๆ ครอบคลุม Export/Import ข้อมูล, Print ข้อมูล, Responsive Design, และ User-friendly Interface. พัฒนาด้วย PHP 7.3/8.0, Laravel 8.12, MySQL, JavaScript, Bootstrap, Chart.js, Laravel Excel, Laravel Permission, Laravel Backup, Pusher, Axios, และ Laravel Mix. ใช้ MVC Architecture, Eloquent ORM, Role-based Access Control (RBAC), และ Automated Database Backup System.",
    role: "Backend Developer",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "Chart.js", "Laravel Excel", "Pusher", "Axios", "POS", "Backend"],
    category: "Web App",
    image: "/AnyConv.com__CPKKU.jpg", 
    githubUrl: "https://github.com/nicky-wrc/Pharmacy-Project",
  },
  {
    slug: "pet-adoption",
    title: "Pet Adoption Explorer",
    description: "แพลตฟอร์ม E-commerce หาบ้านใหม่ให้สัตว์เลี้ยง",
    content: "แพลตฟอร์ม E-commerce สำหรับหาบ้านใหม่ให้สัตว์เลี้ยง พัฒนาด้วย React และ Modern Web Technologies. ระบบแสดงรายการสัตว์เลี้ยง (Pet Listing) สำหรับแสดงรายการสัตว์เลี้ยงทั้งหมดพร้อมรูปภาพและรายละเอียด. ระบบค้นหาและกรอง (Search & Filter) สำหรับค้นหาสัตว์เลี้ยงตามประเภท อายุ สายพันธุ์ และสถานที่. ระบบรายละเอียดสัตว์เลี้ยง (Pet Details) แสดงข้อมูลครบถ้วนของสัตว์เลี้ยงแต่ละตัว. ระบบจัดการโปรไฟล์ (Profile Management) สำหรับผู้ใช้จัดการข้อมูลส่วนตัวและสัตว์เลี้ยงที่สนใจ. ระบบติดต่อเจ้าของ (Contact Owner) สำหรับติดต่อเจ้าของสัตว์เลี้ยงผ่านระบบข้อความหรืออีเมล. ระบบเพิ่มสัตว์เลี้ยง (Add Pet) สำหรับเจ้าของเพิ่มสัตว์เลี้ยงที่ต้องการหาบ้านใหม่. ระบบจัดการสัตว์เลี้ยงของฉัน (My Pets) สำหรับเจ้าของจัดการสัตว์เลี้ยงที่เพิ่มไว้. ระบบ Favorites/Wishlist สำหรับผู้ใช้บันทึกสัตว์เลี้ยงที่สนใจ. ระบบ Responsive Design รองรับทุกอุปกรณ์ทั้ง Desktop Tablet และ Mobile. ระบบ UI/UX ที่ทันสมัยและใช้งานง่าย พร้อม Animation และ Transition Effects. พัฒนาด้วย React, JavaScript, HTML5, CSS3, Tailwind CSS, และ Modern Frontend Libraries. ใช้ Component-based Architecture, Responsive Design, และ Modern UI/UX Principles.",
    role: "Frontend Developer",
    tags: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "UI/UX", "Frontend", "Responsive Design", "Component-based"],
    category: "Web App",
    image: "/AnyConv.com__CPKKU.jpg", 
    githubUrl: "https://github.com/krit633806374-2/pet-adoption-explorer",
  },
  {
    slug: "game-key-marketplace",
    title: "Game Key Marketplace",
    description: "แพลตฟอร์ม E-Commerce สำหรับซื้อขายคีย์เกม (CD-Keys) แบบครบวงจร พัฒนาด้วย Full-Stack Modern Technologies",
    content: "Game Key Marketplace เป็นแพลตฟอร์ม E-Commerce สำหรับซื้อขายคีย์เกมแบบครบวงจร พัฒนาด้วยเทคโนโลยี Full-Stack ที่ทันสมัย. ระบบ E-Commerce Marketplace ที่รองรับการซื้อขายเกมหลายแพลตฟอร์ม (Steam, PlayStation, Xbox, Nintendo, Epic Games) พร้อมระบบจัดการสต็อกเกมและโค้ดเกม. ระบบกระเป๋าเงินดิจิทัล (Digital Wallet) สำหรับเติมเงินออนไลน์ พร้อมประวัติการทำธุรกรรมและระบบคูปองส่วนลด (Fixed & Percentage Discount). ระบบกล่องสุ่มของขวัญ (Gacha/Mystery Box) ที่ Admin สามารถจัดการได้ พร้อมระบบสุ่มรางวัลเกม. ระบบ User Management & Authentication ด้วย JWT Token Authentication และ Role-based Access Control (User, Seller, Admin). Admin Control Panel ที่มี Dashboard แสดงสถิติภาพรวม จัดการเกม สต็อก คูปอง Gacha Boxes และรายงานยอดขาย. ระบบค้นหาแบบ Real-time พร้อม Advanced Filtering และ Sorting System. ระบบ Wishlist/Favorites, Game Comparison, และ Featured Games. ระบบ Review และ Rating สำหรับเกม. Responsive Design รองรับทุกอุปกรณ์ พร้อม Modern UI/UX ด้วย Tailwind CSS และ Toast Notifications. พัฒนาด้วย React 19, React Router DOM v7, Vite, Tailwind CSS, Axios, Node.js, Express.js, PostgreSQL, JWT, Multer, bcryptjs และ CORS. ใช้ MVC Pattern ในการออกแบบ Backend, RESTful API สำหรับการสื่อสาร, Component-based Architecture ใน Frontend, และ Database Normalization สำหรับจัดการข้อมูลอย่างมีประสิทธิภาพ.",
    role: "Full-Stack Developer",
    tags: ["React 19", "Node.js", "Express.js", "PostgreSQL", "JWT", "Vite", "Tailwind CSS", "E-commerce", "Full-Stack"],
    category: "Web App",
    image: "/AnyConv.com__CPKKU.jpg", 
    githubUrl: "https://github.com/nicky-wrc/game-key-marketplace",
  },
  {
    slug: "ecommerce-springboot",
    title: "E-commerce Backend API",
    description: "RESTful API สำหรับระบบ E-commerce พัฒนาด้วย Spring Boot รองรับการทำงานแบบ Multi-role (Customer, Seller, Admin) พร้อมระบบชำระเงินหลายช่องทางและแชทแบบ Real-time",
    content: "RESTful API สำหรับระบบ E-commerce พัฒนาด้วย Spring Boot 3.3.2 และ Java 21 รองรับการทำงานแบบ Multi-role User Management 3 บทบาท (Customer, Seller, Admin) พร้อม JWT Authentication และ Role-based Access Control. ระบบ E-Commerce Core ที่มี Shopping Cart Management, Order Management & Tracking, Product & Variant Management, และ Stock Management. Seller Platform สำหรับผู้ขายที่มี Seller Application & Shop Creation, Product & Variant Management, Sales Dashboard & Statistics, และ Customer Chat Support. ระบบ Real-Time Communication ด้วย WebSocket Chat System (STOMP Protocol) พร้อม File & Image Sharing และ Real-time Notifications. Payment Integration ที่รองรับหลายช่องทาง ได้แก่ Credit/Debit Card, PromptPay, TrueMoney, Rabbit LINE Pay, Cash on Delivery, PayPal, Stripe ผ่าน Omise Payment Gateway Integration พร้อม Payment Webhook Support และ Refund Functionality. Customer Features ครอบคลุม ลงทะเบียน/เข้าสู่ระบบ, เรียกดูสินค้าและ Product Variants, Shopping Cart, Order Tracking, Multiple Payment Methods, Product Reviews & Ratings, Wishlist Management, และ Real-time Chat with Sellers. Seller Features มี Seller Application, Shop Creation, Product & Variant Management, Stock Management, Order Management, Sales Dashboard & Statistics, และ Customer Chat Support. Admin Features ประกอบด้วย Admin Dashboard, User Management, Product & Shop Management, Order & Payment Management, Category Management, และ System Statistics. พัฒนาด้วย Java 21, Spring Boot 3.3.2, Spring Security, Spring Data JPA, PostgreSQL 15, JWT, Spring WebSocket, Lombok, Maven สำหรับ Backend และ Next.js 14, TypeScript, Tailwind CSS, React 18, Zustand, Axios สำหรับ Frontend. ใช้ RESTful API Architecture, Product Variants System, Multi-Payment Gateway, Real-time Chat, File Upload & Image Management, Review & Rating System, และ Docker Support.",
    role: "Backend Developer",
    tags: ["Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "JWT", "WebSocket", "Next.js", "TypeScript", "React", "E-commerce", "RESTful API"],
    category: "Web App",
    image: "/AnyConv.com__CPKKU.jpg", 
    githubUrl: "https://github.com/E-comproject/e_commerceSpringboots",
  }
];