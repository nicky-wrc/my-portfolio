import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { siteConfig } from "@/data/site";
import { workflowValues } from "@/data/workflow";

export type AssistantAnswer = { text: string; links?: { label: string; href: string }[]; projectSlug?: string };
const aliases: Record<string, string[]> = {
  "ppe-detection-system": ["ppe", "หมวก", "นิรภัย"],
  "smart-moto-service": ["smart moto", "รถจักรยานยนต์", "ศูนย์บริการ"],
  "pos-pharmacy": ["pharmacy", "ร้านขายยา", "pos"],
  "food-order-app": ["food order", "eat at home", "สั่งอาหาร"],
  "Big-Data-Analytics-Mini-Project": ["fraudlens", "big data", "ฉ้อโกง"],
  "expense-eracker": ["expense", "expensio", "ค่าใช้จ่าย"],
  "game-key-marketplace": ["game key", "คีย์เกม"],
  "ecommerce-springboot": ["e-commerce", "ecommerce", "spring boot"],
  "Powered-Product-Recommendation-Engine-Web-app": ["recommendation", "แนะนำสินค้า"],
};
const clean = (text: string) => text.replace(/\p{Extended_Pictographic}|\p{Regional_Indicator}|[\uFE0F\u200D\u20E3]/gu, "");

export function answerPortfolioQuestion(question: string, previousProject?: string): AssistantAnswer {
  const q = question.toLowerCase().trim();
  const thai = /[ก-๙]/.test(q);
  const has = (pattern: RegExp) => pattern.test(q);
  const say = (en: string, th: string) => thai ? th : en;
  const contact = [{ label: "Contact Worachat", href: "/#contact" }, { label: siteConfig.email, href: siteConfig.emailHref }];
  let answer: AssistantAnswer;
  const named = projects.filter(p => q.includes(p.title.toLowerCase()) || q.includes(p.slug.toLowerCase()) || (aliases[p.slug] ?? []).some(alias => q.includes(alias)));
  const followup = has(/\b(it|this project|that project|its)\b|โปรเจกต์นี้|โปรเจคนี้|ระบบนี้|ใช้เทค|ใช้ภาษา|ฟีเจอร์|ทำอะไรได้/);
  const selected = named.length ? named : followup && previousProject ? projects.filter(p => p.slug === previousProject) : [];

  if (selected.length) {
    answer = {
      text: selected.map(p => {
        const tech = has(/stack|technolog|built with|language|เทคโนโลยี|ใช้ภาษา|ใช้เทค/);
        const role = has(/\brole\b|รับผิดชอบ|หน้าที่/);
        return `${p.title}\n${tech ? p.tags.join(", ") : role ? p.role : p.description + "\n\n" + (p.caseStudy?.highlights.join("\n") || p.content || say("See the project page for available details.", "ดูรายละเอียดที่มีในหน้าโปรเจกต์"))}`;
      }).join("\n\n"),
      links: selected.map(p => ({ label: p.title, href: `/projects/${p.slug}` })),
      projectSlug: selected.length === 1 ? selected[0].slug : undefined,
    };
  } else if (has(/price|rate|salary|cost|ราคา|ค่าจ้าง|เงินเดือน|เท่าไหร่|เท่าไร/)) {
    answer = { text: say("Rates and salary expectations are not published in this portfolio. Contact Worachat with the scope, timeline, and budget to discuss them directly.", "พอร์ตยังไม่ได้ระบุอัตราค่าจ้างหรือเงินเดือนที่คาดหวัง สามารถติดต่อ Worachat พร้อมขอบเขตงาน ระยะเวลา และงบประมาณเพื่อพูดคุยโดยตรง"), links: contact };
  } else if (has(/contact|hire|email|phone|available|remote|intern|ติดต่อ|จ้าง|อีเมล|โทร|ฝึกงาน|ว่าง|รีโมต/)) {
    answer = { text: say(`To discuss a project or internship with ${siteConfig.name}, describe the work, timeline, and expectations by email. Availability and response time should be confirmed directly.\n\nEmail: ${siteConfig.email}\nPhone: ${siteConfig.phone}`, `ติดต่อ ${siteConfig.name} เพื่อพูดคุยเรื่องโปรเจกต์หรือโอกาสฝึกงาน โดยส่งรายละเอียดงาน ระยะเวลา และความคาดหวังทางอีเมล สอบถามวันเริ่มงานและเวลาที่สะดวกกับเจ้าตัวโดยตรง\n\nอีเมล: ${siteConfig.email}\nโทร: ${siteConfig.phone}`), links: contact };
  } else if (has(/resume|\bcv\b|เรซูเม่|ประวัติย่อ/)) {
    answer = { text: say("You can view Worachat's resume here.", "เปิดดู Resume ของ Worachat ได้ที่ลิงก์นี้"), links: [{ label: "View Resume", href: "/resume" }] };
  } else if (has(/process|workflow|values|วิธีทำงาน|ขั้นตอน|แนวทาง/)) {
    answer = { text: workflowValues.map(v => `${v.title}\n${v.description}`).join("\n\n") };
  } else if (has(/github|linkedin|social|โซเชียล/)) {
    answer = { text: say("Worachat's public profiles:", "ช่องทางโปรไฟล์ของ Worachat:"), links: [{ label: `GitHub @${siteConfig.github.handle}`, href: siteConfig.github.url }, { label: "LinkedIn", href: siteConfig.linkedin.url }] };
  } else {
    const relevantSkills = skills.filter(group => q.includes(group.category.toLowerCase()) || group.items.some(item => {
      const escaped = item.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return new RegExp(`(?:^|[^a-z0-9])${escaped}(?=$|[^a-z0-9])`).test(q);
    }) || (has(/ฐานข้อมูล/) && group.category === "Databases") || (has(/เอไอ|ปัญญาประดิษฐ์/) && group.category === "Data & AI"));
    if (relevantSkills.length || has(/skill|stack|technology|ทักษะ|ภาษาโปรแกรม|ทำอะไรได้/)) {
      answer = { text: (relevantSkills.length ? relevantSkills : skills).map(s => `${s.category}\n${s.items.join(", ")}`).join("\n\n"), links: [{ label: "View skills", href: "/#skills" }] };
    } else if (has(/project|portfolio|work|ผลงาน|โปรเจ|โครงการ/)) {
      answer = { text: say(`Explore ${projects.length} projects. Ask about a project by name, its features, technology stack, or Worachat's role.`, `มีผลงาน ${projects.length} โปรเจกต์ สามารถพิมพ์ชื่อโปรเจกต์เพื่อถามเกี่ยวกับฟีเจอร์ เทคโนโลยี หรือบทบาทของ Worachat ได้`), links: projects.map(p => ({ label: p.title, href: `/projects/${p.slug}` })) };
    } else if (has(/about|who|name|location|แนะนำตัว|เป็นใคร|ชื่อ|อยู่ที่ไหน|เกี่ยวกับ/)) {
      answer = { text: `${siteConfig.name}\n${siteConfig.role}\n${siteConfig.location}`, links: [{ label: "About Worachat", href: "/about" }] };
    } else if (has(/^(hi|hello|hey|สวัสดี)|thank|ขอบคุณ/)) {
      answer = { text: say("Hello. I can help you explore Worachat's projects, skills, workflow, resume, and contact information. What would you like to know?", "สวัสดีครับ สอบถามข้อมูลผลงาน ทักษะ วิธีทำงาน Resume หรือช่องทางติดต่อของ Worachat ได้เลยครับ") };
    } else {
      answer = { text: say("I couldn't find a specific answer in the portfolio. I use the published portfolio information, so I won't guess. Try naming a project or technology, or contact Worachat for details that aren't listed.", "ยังไม่พบคำตอบที่ตรงในข้อมูลพอร์ต ระบบนี้ตอบจากข้อมูลที่เผยแพร่ไว้และจะไม่เดาข้อมูลเพิ่มเติม ลองระบุชื่อโปรเจกต์หรือเทคโนโลยี หรือสอบถาม Worachat โดยตรงสำหรับข้อมูลที่ยังไม่ได้ระบุ"), links: contact };
    }
  }
  return { ...answer, text: clean(answer.text), links: answer.links?.map(link => ({ ...link, label: clean(link.label) })) };
}
