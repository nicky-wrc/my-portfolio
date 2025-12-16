# EmailJS Setup Guide

## ขั้นตอนการตั้งค่า EmailJS เพื่อส่งอีเมลจาก Contact Form

### 1. สร้าง Account ที่ EmailJS
- ไปที่ https://www.emailjs.com/
- สร้าง account ฟรี (มี 200 emails/เดือน ฟรี)

### 2. เพิ่ม Email Service
1. ไปที่ **Email Services** ใน dashboard
2. คลิก **Add New Service**
3. เลือก **Gmail** (หรือ email provider ที่คุณใช้)
4. ใส่ email: `nick.worachatz@gmail.com`
5. ตั้งชื่อ service (เช่น "Portfolio Contact")
6. คัดลอก **Service ID** (จะใช้ตอนสร้าง template)

### 3. สร้าง Email Template
1. ไปที่ **Email Templates**
2. คลิก **Create New Template**
3. ตั้งชื่อ template (เช่น "Contact Form")
4. ในส่วน **Content** ให้ใช้ template นี้:

```
Subject: {{subject}} - จาก {{from_name}}

จาก: {{from_name}}
Email: {{from_email}}
หัวข้อ: {{subject}}

ข้อความ:
{{message}}

---
ส่งจาก Portfolio Contact Form
```

5. ในส่วน **Settings**:
   - **To Email**: `nick.worachatz@gmail.com`
   - **From Name**: `{{from_name}}`
   - **Reply To**: `{{from_email}}`

6. คัดลอก **Template ID**

### 4. รับ Public Key
1. ไปที่ **Account** > **General**
2. คัดลอก **Public Key**

### 5. ตั้งค่า Environment Variables
1. สร้างไฟล์ `.env.local` ใน root directory ของโปรเจกต์
2. เพิ่มค่าต่อไปนี้:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. แทนที่ `your_service_id_here`, `your_template_id_here`, และ `your_public_key_here` ด้วยค่าจริงที่คุณคัดลอกมา

### 6. Restart Development Server
หลังจากเพิ่ม environment variables แล้ว ให้ restart server:
```bash
npm run dev
```

### 7. ตั้งค่า Environment Variables สำหรับ Production (สำคัญมาก!)

#### สำหรับ Vercel:
1. ไปที่ Vercel Dashboard > Project Settings > Environment Variables
2. เพิ่ม environment variables ต่อไปนี้:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = your_service_id
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = your_template_id
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = your_public_key
3. เลือก **Environment** เป็น **Production, Preview, Development** (หรือเลือกตามต้องการ)
4. คลิก **Save**
5. **Redeploy** project เพื่อให้ environment variables มีผล

#### สำหรับ Netlify:
1. ไปที่ Netlify Dashboard > Site Settings > Environment Variables
2. เพิ่ม environment variables ต่อไปนี้:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = your_service_id
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = your_template_id
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = your_public_key
3. คลิก **Save**
4. **Redeploy** site เพื่อให้ environment variables มีผล

#### สำหรับ Platform อื่น:
- ตรวจสอบ documentation ของ platform ที่คุณใช้
- ต้องตั้งค่า environment variables ที่มี prefix `NEXT_PUBLIC_` เพื่อให้ Next.js expose ให้ client-side
- หลังจากตั้งค่าแล้ว ต้อง **rebuild และ redeploy** project

### 8. ทดสอบ
1. เปิดหน้าเว็บ (local หรือ production)
2. ไปที่หน้า Contact
3. กรอกฟอร์มและส่งข้อความ
4. ตรวจสอบอีเมลที่ `nick.worachatz@gmail.com`

---

**หมายเหตุ:** 
- EmailJS ฟรี tier มี limit 200 emails/เดือน
- ถ้าต้องการส่งมากกว่านั้น ต้อง upgrade plan
- Public Key และ Service ID สามารถเปิดเผยได้ (ใช้ใน client-side)
- แต่ไม่ควรเปิดเผย Private Key
- **สำคัญ:** Environment variables ต้องตั้งค่าใน production platform ด้วย ไม่ใช่แค่ `.env.local` (ใช้สำหรับ development เท่านั้น)






