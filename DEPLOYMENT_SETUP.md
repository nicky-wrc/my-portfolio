# การตั้งค่า Environment Variables สำหรับ Production

## ปัญหาที่พบ
- ✅ ส่งอีเมลได้ใน localhost (development)
- ❌ ส่งอีเมลไม่ได้ใน production (deployed website)

## สาเหตุ
Environment variables ที่ตั้งค่าใน `.env.local` ใช้ได้เฉพาะใน local development เท่านั้น  
สำหรับ production ต้องตั้งค่าใน deployment platform (Vercel/Netlify) ด้วย

---

## วิธีแก้ไข: Vercel

### ขั้นตอนที่ 1: เข้าไปที่ Vercel Dashboard
1. ไปที่ https://vercel.com
2. Login และเลือก Project ของคุณ

### ขั้นตอนที่ 2: ตั้งค่า Environment Variables
1. คลิก **Settings** (ด้านบน)
2. คลิก **Environment Variables** (เมนูซ้าย)
3. เพิ่ม 3 environment variables ต่อไปนี้:

#### 1. NEXT_PUBLIC_EMAILJS_SERVICE_ID
- **Name:** `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- **Value:** ใส่ Service ID ของคุณ (จาก EmailJS Dashboard)
- **Environment:** เลือก ✅ Production, ✅ Preview, ✅ Development

#### 2. NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
- **Name:** `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- **Value:** ใส่ Template ID ของคุณ (จาก EmailJS Dashboard)
- **Environment:** เลือก ✅ Production, ✅ Preview, ✅ Development

#### 3. NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
- **Name:** `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- **Value:** ใส่ Public Key ของคุณ (จาก EmailJS Dashboard)
- **Environment:** เลือก ✅ Production, ✅ Preview, ✅ Development

4. คลิก **Save** หลังจากเพิ่มแต่ละตัว

### ขั้นตอนที่ 3: Redeploy
1. ไปที่ **Deployments** tab
2. คลิก **"..."** (สามจุด) ที่ deployment ล่าสุด
3. เลือก **Redeploy**
4. รอให้ deploy เสร็จ (ประมาณ 1-2 นาที)

### ขั้นตอนที่ 4: ทดสอบ
1. เปิดเว็บไซต์ที่ deploy แล้ว
2. ไปที่หน้า Contact
3. กรอกฟอร์มและส่งข้อความ
4. ตรวจสอบอีเมลที่ `nick.worachatz@gmail.com`

---

## วิธีแก้ไข: Netlify

### ขั้นตอนที่ 1: เข้าไปที่ Netlify Dashboard
1. ไปที่ https://app.netlify.com
2. Login และเลือก Site ของคุณ

### ขั้นตอนที่ 2: ตั้งค่า Environment Variables
1. คลิก **Site Settings** (เมนูด้านบน)
2. คลิก **Environment Variables** (เมนูซ้าย)
3. คลิก **Add a variable**
4. เพิ่ม 3 environment variables ต่อไปนี้:

#### 1. NEXT_PUBLIC_EMAILJS_SERVICE_ID
- **Key:** `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- **Value:** ใส่ Service ID ของคุณ (จาก EmailJS Dashboard)
- **Scopes:** เลือก ✅ All scopes

#### 2. NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
- **Key:** `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- **Value:** ใส่ Template ID ของคุณ (จาก EmailJS Dashboard)
- **Scopes:** เลือก ✅ All scopes

#### 3. NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
- **Key:** `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- **Value:** ใส่ Public Key ของคุณ (จาก EmailJS Dashboard)
- **Scopes:** เลือก ✅ All scopes

5. คลิก **Save** หลังจากเพิ่มแต่ละตัว

### ขั้นตอนที่ 3: Redeploy
1. ไปที่ **Deploys** tab
2. คลิก **Trigger deploy** → **Deploy site**
3. รอให้ deploy เสร็จ (ประมาณ 1-2 นาที)

### ขั้นตอนที่ 4: ทดสอบ
1. เปิดเว็บไซต์ที่ deploy แล้ว
2. ไปที่หน้า Contact
3. กรอกฟอร์มและส่งข้อความ
4. ตรวจสอบอีเมลที่ `nick.worachatz@gmail.com`

---

## วิธีหา EmailJS Credentials

### Service ID และ Template ID
1. ไปที่ https://www.emailjs.com/
2. Login เข้า Dashboard
3. ไปที่ **Email Services** → คัดลอก **Service ID**
4. ไปที่ **Email Templates** → คัดลอก **Template ID**

### Public Key
1. ไปที่ **Account** → **General**
2. คัดลอก **Public Key**

---

## ตรวจสอบว่า Environment Variables ถูกตั้งค่าหรือไม่

### วิธีที่ 1: ตรวจสอบใน Dashboard
- Vercel: Settings → Environment Variables → ดูว่ามี 3 ตัวหรือไม่
- Netlify: Site Settings → Environment Variables → ดูว่ามี 3 ตัวหรือไม่

### วิธีที่ 2: ตรวจสอบใน Build Logs
- ดู Build Logs ว่า environment variables ถูก load หรือไม่
- ถ้าเห็น `NEXT_PUBLIC_EMAILJS_*` ใน logs แสดงว่าถูกตั้งค่าแล้ว

### วิธีที่ 3: ตรวจสอบใน Browser Console
- เปิดเว็บไซต์ที่ deploy แล้ว
- เปิด Developer Tools (F12)
- ไปที่ Console
- พิมพ์ `console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)`
- ถ้าเห็นค่า (ไม่ใช่ undefined) แสดงว่าถูกตั้งค่าแล้ว

---

## สิ่งสำคัญที่ต้องจำ

1. ✅ Environment variables ต้องมี prefix `NEXT_PUBLIC_` เพื่อให้ Next.js expose ให้ client-side
2. ✅ หลังจากตั้งค่าแล้ว **ต้อง Redeploy** เพื่อให้ environment variables มีผล
3. ✅ ตรวจสอบว่าใส่ค่าถูกต้อง (ไม่มี space หรือ typo)
4. ✅ ถ้ายังไม่ได้ ให้ตรวจสอบ Build Logs ว่ามี error อะไรหรือไม่

---

## ถ้ายังไม่ได้ทำอย่างไร

1. **ตรวจสอบ EmailJS Account:**
   - ตรวจสอบว่า account ยัง active อยู่
   - ตรวจสอบว่าไม่เกิน monthly limit (200 emails/เดือน สำหรับ free tier)

2. **ตรวจสอบ EmailJS Configuration:**
   - Service ID, Template ID, Public Key ถูกต้องหรือไม่
   - Template ใน EmailJS ตั้งค่าถูกต้องหรือไม่

3. **ตรวจสอบ Browser Console:**
   - เปิด Developer Tools (F12)
   - ดู Console tab ว่ามี error อะไรหรือไม่

4. **ตรวจสอบ Network Tab:**
   - ดู Network tab ว่ามี request ไป EmailJS หรือไม่
   - ดู response ว่ามี error อะไรหรือไม่

---

## ติดต่อ
ถ้ายังแก้ไม่ได้ ให้ตรวจสอบ:
- EmailJS Dashboard: https://www.emailjs.com/
- Vercel Documentation: https://vercel.com/docs
- Netlify Documentation: https://docs.netlify.com/

