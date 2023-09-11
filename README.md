<div id="top"></div><!-- for back-linking to the top of the README -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />

<div style="text-align: center">
  <a href="https://github.com/fmstuff/lieblingsrezepte">
    <img src="public/images/logo.png" width="260" alt="Logo">
  </a>

  <h3>Lieblingsrezepte</h3>

  <p>
    Astro based website for some of my favorite recipes
    <br />
    <br />
    <a href="https://fmstuff.github.io/lieblingsrezepte/">View the Website</a>
    ·
    <a href="https://github.com/fmstuff/lieblingsrezepte-v2/issues">Report Bug</a>
    ·
    <a href="https://github.com/fmstuff/lieblingsrezepte-v2/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#serve-lieblingsrezepte-locally">Serve lieblingsrezepte locally</a></li>
        <li><a href="#build-lieblingsrezepte">Build lieblingsrezepte</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://fmstuff.github.io/lieblingsrezepte/)

Over the years my wife and I have been writing down recipes that we liked and
loved to cook. Often we had done some slight alterations and/or simplifications
to the original recipes (we like it simple 😉).  
Once done and ready to be served, we took a picture and jotted down the list of
ingredients and instructions to a note-taking app.

Around spring 2022 I felt like it would be a fun project to create a little
website/blog to provide a new "home" to our collected recipes and thereby also
share them with the rest of the world 🍽

> In 2023 I also was curious to get into [Astro][astro-url] for generating the
> site from Markdown files 😁. So, I decided to re-build the site which was
> previously based on [Eleventy][eleventy-url] using Astro.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Astro][astro-url]
- [Tailwind CSS][tailwind-url]
- [Bookworm Light (theme)][bookworm-url]

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get the website up and running locally (for writing more content) follow
these steps.

### Prerequisites

The following list of tools you need to have installed on your machine:

- Node.js (v18), see: https://nodejs.org
- npm
  ```sh
  $ npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   $ git clone git@github.com:fmstuff/lieblingsrezepte-v2.git
   ```
2. Install NPM packages
   ```sh
   $ npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

### Serve lieblingsrezepte locally

To run Astro locally and serve the website on `localhost:3000` run:

```sh
$ npm run dev
```

Most useful for when writing new content or working on the website's styles.

### Build lieblingsrezepte

To build a static version of lieblingsrezepte run:

```sh
$ npm run build
```

### Deploy lieblingsrezepte

_Coming soon..._

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- My wife, Julia, for all the love, joy & fun when cooking together, and the
  relentless thirst for new dishes ❤️
- [Ethan Chlebowski](https://www.youtube.com/c/CookwithE) for some amazing inspiration! 🍽

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/fmstuff/lieblingsrezepte-v2.svg?style=for-the-badge
[contributors-url]: https://github.com/fmstuff/lieblingsrezepte-v2/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/fmstuff/lieblingsrezepte-v2.svg?style=for-the-badge
[forks-url]: https://github.com/fmstuff/lieblingsrezepte-v2/network/members
[stars-shield]: https://img.shields.io/github/stars/fmstuff/lieblingsrezepte-v2.svg?style=for-the-badge
[stars-url]: https://github.com/fmstuff/lieblingsrezepte-v2/stargazers
[issues-shield]: https://img.shields.io/github/issues/fmstuff/lieblingsrezepte-v2.svg?style=for-the-badge
[issues-url]: https://github.com/fmstuff/lieblingsrezepte-v2/issues
[license-shield]: https://img.shields.io/github/license/fmstuff/lieblingsrezepte-v2.svg?style=for-the-badge
[license-url]: https://github.com/fmstuff/lieblingsrezepte-v2/blob/main/LICENSE.txt
[eleventy-url]: https://www.11ty.dev/
[product-screenshot]: ./public/images/project_screenshot.png
[astro-url]: https://astro.build/
[tailwind-url]: https://tailwindcss.com/
[bookworm-url]: https://github.com/themefisher/bookworm-light-astro
