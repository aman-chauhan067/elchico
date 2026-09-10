# El Chico Forms Audit (Phase 0.5)

The initial audit found 13 form endpoints. This document deduplicates them to identify the actual unique forms required.

## 1. Contact Form 7 Instances
The source website heavily relies on the Contact Form 7 WordPress plugin. Almost all `POST` requests discovered are variations of CF7 endpoints.

### Unique Form Types Discovered:
1. **General Contact Form (`#wpcf7-f808`)**
   - **Usage:** Placed on almost every page (Homepage, Menu, Take Away, Our Story, Contact Us).
   - **Fields (Inferred):** Name, Email, Subject, Message.
   - **Redesign Implication:** We do NOT need 10 separate form components. We need one robust `<ContactForm />` component that can be reused or placed in a global footer/modal.

2. **Secondary Contact Form (`#wpcf7-f510`)**
   - **Usage:** Found specifically on the `/contact-us/` page alongside `f808`.
   - **Redesign Implication:** Likely a legacy duplicate or a specific inquiry form (e.g., catering vs general). The redesign should consolidate this into a single smart form with a "Reason for Inquiry" dropdown.

## 2. WordPress Core Forms
1. **Blog Comments (`/wp-comments-post.php`)**
   - **Usage:** Attached to blog articles (`/2022/10/07`, `/the-food-industry-in-india`).
   - **Redesign Implication:** If the blog is migrated to a headless CMS (like Sanity/Contentful) or static Markdown, a new comment system (like Giscus or Disqus) will be needed, OR comments should be removed if they are just spam magnets.

## Redesign Strategy
- **Consolidation:** Replace all CF7 endpoints with a modern serverless form handler (e.g., Formspree, Netlify Forms, or a custom Next.js API route / Vite backend).
- **UX:** Do not render forms on every single sub-page. Instead, use clear CTAs that lead to a dedicated, beautifully designed `/contact` page.
