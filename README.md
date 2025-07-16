# 🌐 Genstack — Personal Portfolio

Welcome to my personal portfolio!  
This website showcases my background, technical skills, and selected cloud/dev projects as a Junior Cloud Engineer and aspiring Solutions Architect.

🔗 **Live site:** [https://genstack.solutions](https://genstack.solutions)  
📫 **LinkedIn:** [linkedin.com/in/johngenesispamintuan](https://www.linkedin.com/in/johngenesispamintuan/)

---

## 🔧 Tech Stack

### Frontend
- ⚛️ **React** (with TypeScript)
- 🎨 **Tailwind CSS** + **shadcn/ui**
- ⚡ **Vite** as the build tool
- 🔄 **React Router** for client-side navigation

### Cloud / DevOps
- ☁️ **AWS S3** – Static hosting
- 🌍 **CloudFront** – CDN + HTTPS + Caching
- 🔒 **Certificate Manager** – SSL/TLS for custom domain
- 📬 **API Gateway + Lambda + SES** – Secure contact form
- 🌐 **Route 53** – DNS & domain management

---

## 📦 Features

- ✅ Fully responsive, mobile-first design
- 🖼️ Clean UI for showcasing projects and case studies
- 💬 Integrated contact form with email automation
- 📄 Resume link and professional bio
- 🌙 (Optional) Dark mode toggle

---

## 📫 Contact Form Workflow

1. User submits the contact form
2. **API Gateway** receives POST request
3. **Lambda** processes the form
4. **Amazon SES** sends:
   - 📥 Notification email to my inbox
   - 📤 Optional thank-you message to the user

---

## 🚧 In Progress

- ⌨️ Building an admin dashboard to manage form submissions
- 🛠️ Adding CI/CD pipeline using GitHub Actions
- 🐳 Learning Docker, Terraform, and Kubernetes for deeper DevOps integration
- 🔍 Improving SEO and Lighthouse performance scores

---

## 🧠 About Me

I'm **Gen Pamintuan**, a passionate Junior DevOps/Cloud Engineer.  
I love automating workflows, deploying serverless architectures, and learning how modern infrastructure powers great products.

> “Learning in public, building in the cloud.”

---

## 🗂 How to Use Locally

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build
