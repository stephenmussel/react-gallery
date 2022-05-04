# Checklist

- [ ] Readme
    - [ ] Description
- [ ] Use [multer](http://github.com/expressjs/multer) for image upload
- [ ] Add comments
- [ ] Deploy to Heroku?
- [ ] Refactor  
<br />


<!-- STATS -->
<!-- 
![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)
-->

# REACT GALLERY  

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li>
      <a href="#preview">Preview</a></li>
      <ul>
        <li>
            <a href="#prerequisites">Prerequisites</a></li>
        </li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#acknowledgement">Acknowledgment</a></li>
    <li><a href="#support">Support</a></li>
  </ol>
</details>
<br />

<!-- DESCRIPTION -->
## Description

_Duration: 2 Day Sprint_

Your project description goes here. What problem did you solve? How did you solve it? 

This app displays photos and relevant info from a SQL database. The database stores a file path, title, description, and number of likes.

How does it do the above?

The user also has the ability to add more photos. Each new photo is displayed first.

How does it do the above?

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)  

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Preview -->
## Preview  
<br />

![React Gallery GIF](/public/images/react-gallery.gif)
<br /> 

<p align="right">(<a href="#top">back to top</a>)</p>

### Prerequisites  

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](http://postgresql.org)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- INSTALLATION -->
## Installation

1. Create a database named `react-gallery`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Now that the server is running, open a new terminal with `cmd + t`.
6. Run `npm run client` in your terminal
7. The `npm run client` command will open up a new browser tab for you! If it doesn't enter: localhost:3000 in a new tab.  

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE -->
## Usage
How does someone use this application? Tell a user story here.

1. The app displays a collection of photos with the ability to like and delete a photo.
2. Liking a photo will increment the heart counter.
3. Clicking the photo will display a description.
4. Clicking the description will re-display the photo.
5. If the user decides to delete a photo, they will need to confirm their decision. 
6. The user can also add more photos to the gallery.
7. To add a photo, you'll need to provide a url, title, and description.
5. The newest photos will be displayed first.
6. Enjoy!  

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- BUILT WITH -->
## Built With

* [React.js](https://reactjs.org/)
* [Axios](http://npmjs.com/package/axios)
* [Material-UI](https://mui.com/)
* HTML5
* CSS3
* [Express.js](http://expressjs.com)
* [Node.js](https://nodejs.org/en)
* [PostgreSQL](https://postgresgl.org)  

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ACKNOWLEDGEMENT -->
## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Thank you to my wife and our dog Laurel for their continued support and patience.

<!-- SUPPORT -->
## Support
If you have suggestions or issues, please contact me at:  

[LinkedIn](https://www.linkedin.com/in/phaydara-vongsavanthong/)  
[GitHub](https://github.com/stephenmussel)  

<p align="right">(<a href="#top">back to top</a>)</p>