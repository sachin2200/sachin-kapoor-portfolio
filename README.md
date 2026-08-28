# Sachin Kapoor — Personal Portfolio

A responsive, one-page portfolio built with semantic HTML, modern CSS, and lightweight JavaScript. It is designed for GitHub Pages and requires no backend or build step.

## Project structure

```text
.
├── index.html
├── CNAME
├── .nojekyll
├── site.webmanifest
├── blog/
│   ├── index.html
│   ├── posts-data.js
│   └── posts/
│       └── post-template.html
├── assets/
│   ├── css/styles.css
│   ├── css/blog.css
│   ├── images/profile-photo.png
│   ├── images/favicon.png
│   ├── js/main.js
│   ├── js/blog.js
│   └── resume/Sachin_Kapoor_2026.pdf
└── README.md
```

## Local setup

You can open `index.html` directly, but a small local server is recommended so every link behaves like it will on GitHub Pages.

1. Open a terminal in this folder.
2. Run `python3 -m http.server 8000`.
3. Visit `http://localhost:8000` in a browser.

No package installation or build command is required.

## Update portfolio content

- Update page copy, links, metadata, experience, projects, and credentials in `index.html`.
- Update colors, spacing, responsive behavior, and component styling in `assets/css/styles.css`.
- Update menu, theme, animation, active navigation, and contact-form behavior in `assets/js/main.js`.
- Replace `assets/images/profile-photo.png` with a square image using the same filename to update the headshot without changing the HTML.
- Replace `assets/resume/Sachin_Kapoor_2026.pdf` to publish a newer resume. Keep the filename, or update both resume links in `index.html`.

## Publish a blog post

The blog uses individual HTML files so every article has its own shareable, search-engine-friendly URL. No backend or build step is needed.

1. Duplicate `blog/posts/post-template.html` in the same `blog/posts/` folder.
2. Rename it with a short lowercase URL slug, for example `leading-ai-enabled-operations.html`.
3. Replace every clearly marked placeholder in the copied file, including the title, description, publication date, category, read time, canonical URL, introduction, headings, and article body.
4. Remove the template-only `<meta name="robots" content="noindex, nofollow" />` line from the new article.
5. Add the article metadata to the array in `blog/posts-data.js`:

```js
{
  title: "Leading AI-enabled operations",
  date: "2026-08-29",
  category: "Automation",
  excerpt: "A concise summary that will appear on the blog page.",
  readTime: "6 min read",
  url: "posts/leading-ai-enabled-operations.html",
  featured: true
}
```

6. Test the blog locally at `http://localhost:8000/blog/`.
7. Commit and push both the article file and `blog/posts-data.js`. GitHub Pages will publish them with the rest of the site.

The blog page automatically sorts articles by newest date and supports keyword search and category filtering. Set `featured: true` only for an article you want to emphasize. An optional `image` property may point to a local image, such as `../assets/images/blog/article-cover.jpg`.

## Configured values

- Public site: `https://sachin-kapoor.com/`
- GitHub repository: `https://github.com/sachin2200/sachin-kapoor-portfolio`
- GitHub profile: `https://github.com/sachin2200`
- Custom domain: `sachin-kapoor.com` (declared in `CNAME`)
- Contact email: `sachin.kapoor.2200@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/sachin-kapoor-4068a024/`

The only remaining one-time configuration is contact-form activation, described below.

## Activate contact-form email delivery

The contact form is configured to send submissions to `sachin.kapoor.2200@gmail.com` through [FormSubmit](https://formsubmit.co/). It includes the visitor's name, email, subject, and message, uses a readable table email template, retains CAPTCHA protection, and includes a hidden honeypot for additional spam filtering.

1. Deploy the site or run it through the local web server described above.
2. Send one test message through the contact form.
3. FormSubmit will send an activation email to `sachin.kapoor.2200@gmail.com`.
4. Open that email and click the activation link.
5. Send a second test message and verify that it arrives in the inbox. Check the spam folder if necessary.

Activation is required only once for this form and email address. Future visitor messages will be delivered to the same mailbox. FormSubmit is a third-party form-processing service, so review its privacy terms before publishing if organizational policy requires it.

## Deploy to GitHub Pages

1. Push these files to the `main` branch of `sachin2200/sachin-kapoor-portfolio`.
2. In that repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the default branch and the `/ (root)` folder, then save.
5. Wait for GitHub Pages to publish the site.
6. Verify the custom domain and enable HTTPS when GitHub makes the option available.

Because the site uses relative asset paths and no server-side code, it works for both user/organization Pages sites and project Pages sites.

## Configure a custom domain

1. Keep `CNAME` in the project root with `sachin-kapoor.com` as its only line.
2. In GoDaddy, point the apex (`@`) A records to GitHub Pages and point `www` to `sachin2200.github.io`.
3. Preserve the existing MX, SPF, DKIM, DMARC, and other email-related DNS records.
4. In **Settings → Pages**, enter `sachin-kapoor.com` and enable HTTPS after GitHub finishes validating it.
5. If the domain changes later, update `CNAME` plus the canonical and social URLs in `index.html` and `blog/index.html`.

## Privacy note

The web page displays only the professional location, primary email, and LinkedIn profile. The phone number and secondary email from the resume are not rendered on the page.
