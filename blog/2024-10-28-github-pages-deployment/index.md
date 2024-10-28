---
slug: github-pages-deployment
title: Deploy Docusaurus Site on Gihtub Pages
authors: [gabriela]
tags: [github-pages, docusaurus]
---

![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)

# How to Deploy a Docusaurus Site on GitHub Pages

Creating a website with Docusaurus is an excellent choice for developers and technical writers who want to focus on content and documentation without diving into complex setups. GitHub Pages provides a free and easy way to host websites directly from your GitHub repository. In this post, we'll walk through the steps to publish a Docusaurus website on GitHub Pages.

<!-- truncate -->

## Prerequisites

Before we start, ensure that you have:

- A GitHub account
- Node.js and npm installed on your system
- A Docusaurus project ready to deploy

If you haven’t created a Docusaurus project yet, you can set one up quickly by following the [Docusaurus documentation](https://docusaurus.io/docs).

## Step 1: Configure GitHub Repository

1. **Create a New GitHub Repository:**
   - Go to GitHub and create a new repository. The repository name will determine your GitHub Pages URL. For example, if your username is `username` and your repository is named `my-website`, your site will be hosted at `https://username.github.io/my-website`.

2. **Initialize Repository:**
   - Initialize your new repository with a README file, or you can clone an empty repository and add files later. Either way, make sure you have write access to push files.

## Step 2: Configure Docusaurus for GitHub Pages

1. **Install Docusaurus GitHub Pages Plugin:**
   - If you haven’t already, install Docusaurus GitHub Pages dependencies by running:

     ```bash
     npm install @docusaurus/plugin-sitemap @docusaurus/core @docusaurus/preset-classic
     ```

2. **Set Up the `docusaurus.config.js` File:**
   - Open the `docusaurus.config.js` file in the root of your project and locate the following keys to configure them for GitHub Pages:

     ```javascript
     module.exports = {
       // Other configuration settings...

       url: 'https://username.github.io', // Your GitHub Pages URL
       baseUrl: '/my-website/', // Repository name with slashes

       // If your website is in a subdirectory like /docs/, specify that here.
       projectName: 'my-website', 
       organizationName: 'username', // Your GitHub username
     };
     ```

   - Ensure the `projectName` and `organizationName` fields match your GitHub repository and username, respectively.

## Step 3: Deploy with GitHub Actions (Recommended)

Using GitHub Actions is the preferred way to automate deployments on GitHub Pages.

1. **Create a GitHub Actions Workflow:**
   - In your repository, navigate to `.github/workflows/` and create a file named `deploy.yml`.
   - Add the following workflow configuration:

     ```yaml
     name: Deploy Docusaurus site to GitHub Pages

     on:
       push:
         branches:
           - main # Change this to your default branch if necessary

     jobs:
       deploy:
         runs-on: ubuntu-latest
         steps:
           - name: Checkout repository
             uses: actions/checkout@v2

           - name: Install dependencies
             run: npm install

           - name: Build site
             run: npm run build

           - name: Deploy to GitHub Pages
             env:
               GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
             run: |
               npm install -g docusaurus
               npm run deploy
     ```

   - This workflow listens for pushes to the `main` branch and will automatically build and deploy your site to GitHub Pages.

2. **Commit and Push the Workflow:**
   - Commit your changes and push them to your GitHub repository. The GitHub Actions runner will start, and your site should be deployed to GitHub Pages shortly.

## Step 4: Access Your Site

After deployment, you can visit your site at `https://username.github.io/my-website`. Allow a few minutes for GitHub Pages to process your site and make it available.

## Step 5: Troubleshooting Common Issues

- **404 Error on the Site:**
  - Make sure your `baseUrl` and `url` settings in `docusaurus.config.js` are correct. The `baseUrl` should match the repository name (e.g., `/my-website/`).
  
- **GitHub Pages Not Updating:**
  - Confirm that the GitHub Actions workflow completed without errors. You can check the Actions tab in your GitHub repository for logs.

- **Custom Domain:**
  - If you’re using a custom domain, add a `CNAME` file to the `static` folder with your domain name, and configure DNS settings as outlined in GitHub’s [custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## All done

With these steps, you’re now able to deploy a Docusaurus site on GitHub Pages using GitHub Actions, ensuring that your site is up-to-date with every commit. This setup offers a simple yet powerful way to showcase your documentation or website with minimal effort. Happy deploying!


