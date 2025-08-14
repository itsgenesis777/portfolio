# Genstack — Personal Portfolio

Welcome to my personal portfolio.  
This website showcases my background, technical skills, and selected cloud/dev projects.

**Live site:** [https://genstack.solutions](https://genstack.solutions)  
**LinkedIn:** [linkedin.com/in/johngenesispamintuan](https://www.linkedin.com/in/johngenesispamintuan/)

---

## Tech Stack

### Frontend
- React (with TypeScript)
- Tailwind CSS + shadcn/ui
- Vite as the build tool
- React Router for client-side navigation

### Cloud / DevOps
- AWS S3 – Static hosting
- CloudFront – CDN + HTTPS + Caching
- Certificate Manager – SSL/TLS for custom domain
- API Gateway + Lambda + SNS – Contact form: Lambda publishes submissions to SNS, which sends email notifications
- Route 53 – DNS & domain management

---

## Features

- Fully responsive, mobile-first design
- Clean UI for showcasing projects and case studies
- Integrated contact form with email notifications via SNS
- Resume link and professional bio

---

## Contact Form Workflow

1. User submits the contact form
2. API Gateway receives POST request
3. Lambda processes the form and publishes a message to SNS
4. Amazon SNS sends:
   - Notification email to my inbox
   - Optional thank-you message to the user

---

## 📫 Contact Form Lambda

The contact form is powered by an AWS Lambda function in the lambda folder

---

## In Progress

- Building an admin dashboard to manage form submissions
- Adding CI/CD pipeline using GitHub Actions
- Learning Docker, Terraform, and Kubernetes for deeper DevOps integration


---

## About Me

I'm Gen Pamintuan, a passionate Cloud Practitioner.  
I love automating workflows, deploying serverless architectures, and learning how modern infrastructure powers great products.

> “Learning in public, building in the cloud.”

---

## How to Use Locally

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build
