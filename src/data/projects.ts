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
    content: "โปรเจกต์นี้พัฒนาขึ้นเพื่อแก้ปัญหาการลงชื่อแทนกันในห้องเรียน...",
    role: "AI & Backend Developer",
    tags: ["Python", "OpenCV", "Deep Learning"],
    category: "Web App",
    image: "/face-recognition.jpg", 
    githubUrl: "https://github.com/nicky-wrc/Face-Recognition-Attendance-project",
  },
  {
    slug: "food-order-app",
    title: "Food Order App",
    description: "แอพสั่งอาหารที่มีระบบจัดการ 2 ฝั่ง (Admin/User) รองรับสถานะออเดอร์ Real-time",
    content: "Application สำหรับจัดการร้านอาหารแบบครบวงจร...",
    role: "Mobile Developer",
    tags: ["Flutter", "Firebase", "Kotlin"],
    category: "Mobile App",
    image: "/food-order.jpg", 
    githubUrl: "https://github.com/nicky-wrc/UserEatAtHome", 
  },
  {
    slug: "smart-moto-service",
    title: "Smart Moto Service Center",
    description: "ระบบบริหารจัดการศูนย์บริการรถจักรยานยนต์ครบวงจร",
    content: "ระบบ Web Application สำหรับบริหารจัดการอู่ซ่อมรถจักรยานยนต์...",
    role: "Full-Stack Developer",
    tags: ["System Analysis", "Web App"],
    category: "Web App",
    image: "/moto-service.jpg", 
    githubUrl: "https://github.com/nicky-wrc/smart-moto-service-center",
  },
  {
    slug: "pos-pharmacy",
    title: "POS Pharmacy System",
    description: "ระบบขายหน้าร้านสำหรับร้านขายยา จัดการสต็อกและคำนวณราคา",
    content: "ระบบ Point of Sale (POS) ที่ออกแบบเฉพาะสำหรับร้านขายยา...",
    role: "Backend Developer",
    tags: ["Database", "PHP" , "Lavarel"],
    category: "Web App",
    image: "/pharmacy.jpg", 
    githubUrl: "https://github.com/nicky-wrc/Pharmacy-Project",
  },
  {
    slug: "pet-adoption",
    title: "Pet Adoption Explorer",
    description: "แพลตฟอร์ม E-commerce หาบ้านใหม่ให้สัตว์เลี้ยง",
    content: "Web Application ที่ทำหน้าที่เป็นสื่อกลางระหว่างผู้ต้องการหาบ้านให้สัตว์เลี้ยง...",
    role: "Frontend Developer",
    tags: ["UI/UX", "Frontend"],
    category: "Web App",
    image: "/pet-adoption.jpg", 
    githubUrl: "https://github.com/krit633806374-2/pet-adoption-explorer",
  },
  {
    slug: "game-key-marketplace",
    title: "Game Key Marketplace",
    description: "ตลาดซื้อขายคีย์เกมออนไลน์ แหล่งรวมเกมราคาดี",
    content: "แพลตฟอร์ม Marketplace สำหรับซื้อขาย CD-Keys ของเกมต่างๆ...",
    role: "Full-Stack Developer",
    tags: ["E-commerce", "Marketplace"],
    category: "Web App",
    image: "/game-key.jpg", 
    githubUrl: "https://github.com/nicky-wrc/game-key-marketplace",
  },
  {
    slug: "ecommerce-springboot",
    title: "E-commerce Backend API",
    description: "ระบบหลังบ้าน E-commerce พัฒนาด้วย Java Spring Boot",
    content: "RESTful API สำหรับระบบ E-commerce พัฒนาด้วย Spring Boot...",
    role: "Backend Developer",
    tags: ["Java", "Spring Boot"],
    category: "Web App",
    image: "/ecommerce.jpg", 
    githubUrl: "https://github.com/E-comproject/e_commerceSpringboots",
  }
];