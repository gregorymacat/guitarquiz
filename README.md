<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
<!-- [![Issues][issues-shield]][issues-url] -->
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/gregorymacat/guitarquiz">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Guitar Notes Quiz</h3>

  <p align="center">
    Test your knowledge of notes on the guitar
    <br />
    <a href="https://github.com/gregorymacat/guitarquiz"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/gregorymacat/guitarquiz">View Demo</a>
    ·
    <a href="https://github.com/gregorymacat/guitarquiz/issues">Report Bug</a>
    ·
    <a href="https://github.com/gregorymacat/guitarquiz/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
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
        <li><a href="#installation--setup">Installation & Setup</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
![guitarquizupdate (2)](https://github.com/gregorymacat/guitarquiz/assets/83787397/4d7cedf5-d55d-4b63-ba60-50f710b054b2)

### Built With
* [![Javascript][Javascript]][Javascript-url]
* [![Node.js][Node.js]][Node.js-url]
* [![React][React.js]][React-url]
* [![Material UI][MaterialUI]][MaterialUI-url]

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

I am using:
- WSL 1
- Ubuntu 22.04.1 LTS (jammy)
- node v18.14.0 LTS (hydrogen)
- Visual Studio Code
* npm
  ```sh
  npm install npm@latest -g
  ```

<!-- Installation & Setup -->
### Installation & Setup

1. Clone the repo
   ```sh
   git clone git@github.com:gregorymacat/guitarquiz.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the build
   ```sh
   npm run build
   ```
4. In separate terminal, start development server
   ```sh
   npm start
   ```
5. Navigate to http://localhost:3000


<!-- USAGE EXAMPLES -->
## Usage
Ability to change settings letting the user choose:
- How many strings the guitar should have
- Which frets the notes will appear on/between
- How long to see feedback for correct answers

![image](https://github.com/gregorymacat/guitarquiz/assets/83787397/a8e6f5fa-4655-47d3-81d3-ae7344101dc1)

It is also possible to reset the counter to get a fresh start. Otherwise, scores are tracked throughout sessions using cookies. These cookies will track settings and scores
letting multiple sessions be counted together if so desired.

**Make sure to save changes when finished changing settings.**

### Video Preview
A simple preview of the application and how the quiz works:


https://github.com/gregorymacat/guitarquiz/assets/83787397/a7390e45-1720-498d-85e0-d91c7d45b61a


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/gregorymacat/guitarquiz/issues) for a list of proposed features (and known issues).

### Features:
- [ ] More Options
  - [ ] Tuning
  - [ ] Naturals/Accidentals Only
  - [ ] etc.
- [ ] Sounds
  - [ ] Note sound
  - [ ] Congratulatory Sound
  - [ ] etc.
- [ ] Add Bass Guitar (maybe other instruments, unlikely though)
- [ ] Timer
- [ ] Streaks
- [ ] Chord Quiz
- [ ] User Accounts
  - [ ] Create user accounts
  - [ ] Save into database
  - [ ] Update stats/settings
  - [ ] Load account on login
  - [ ] Delete account if desired 
- [ ] Online Competition Between Users (timed mode)
- [ ] Probably many more!

### Continuous Improvements:
- Refactor/remove redundancies, inefficiences, and nonnecessities
- Refine interface and visuals
- Increased documentation

<!-- CONTRIBUTING -->
## Contributing

I would greatly appreciate any advice or criticism about this project. Feedback is welcome on any aspect of it and I appreciate anyone who took the time to
read through this! I hope you have a wonderful day.

<!-- 1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Gregory Macat - gregorymacat@gmail.com

Project Link: [https://github.com/gregorymacat/guitarquiz](https://github.com/gregorymacat/guitarquiz)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [https://www.flaticon.com/](https://www.flaticon.com/free-icon/setting_2040504?term=settings&page=1&position=1&origin=tag&related_id=2040504) (Settings Icon)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/gregorymacat/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/gregorymacat/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/gregorymacat/repo.svg?style=for-the-badge
[forks-url]: https://github.com/gregorymacat/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/gregorymacat/repo.svg?style=for-the-badge
[stars-url]: https://github.com/gregorymacat/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/gregorymacat/repo.svg?style=for-the-badge
[issues-url]: https://github.com/gregorymacat/guitarquiz/issues
[license-shield]: https://img.shields.io/github/license/gregorymacat/repo.svg?style=for-the-badge
[license-url]: https://github.com/gregorymacat/repo/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/gregorymacat
[Javascript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Javascript-url]: https://www.javascript.com/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node.js-url]: https://nodejs.org/en
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[MaterialUI]: https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white
[MaterialUI-url]: https://mui.com/
