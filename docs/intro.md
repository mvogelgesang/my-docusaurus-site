---
sidebar_position: 1
---

# Tutorial Intro

::::browser-window

  :::detail-note Notes - open me to see the note!

  Note!
  :::

  :::detail-warning Warning!

  Aaah!
  :::

::::

:::image-with-details (docusaurus.png)

  Enable Dev Hub features in your PBO.

  1. Open **Setup** and type `dev` in the QuickFind box.
  2. Open the **Dev Hub** admin page.
  3. Ensure the **Dev Hub** feature is enabled.
  4. Ensure the **Unlocked Packages and Second-Generation Managed Packages** feature is enabled.

:::

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
