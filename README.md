# Model-View-Controller-Blog

## Description
            
For this assignment, my motive was to create a full-functioning fullstack app where I operate both the frontend and the backend, so I made sure the server ran smoothly and that the schema and the data was coming through to the frontend. I also made sure that the data from the server was displayed on the browser and that the UI was aesthetically pleasing and overall looked good. There were many, many hurdles throughout this assignment and it was as if after I fixed something, something else would occur. This assignment encouraged me to reach out to my learning assistants and ask for help. Usually I'd face the problem by doing research but sometimes sitting for hours trying to figure something out doesn't really help you move forward.

```````````````````````
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
````````````````````````````

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install the project, you must run "npm i" in the terminal

## Usage

In order to use the application, you must run mysql by typing in "mysql -u root -p" and enter in a password. Then run "source db/schema.sql" before switching over to the powershell WHILE the mysql is running. Then you must do "npm run seed", allowing the data to come through. Then enter in "node server" to run the server and browser.

## Contributions

N/A

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Tests

N/A

## Questions

- Github: https://github.com/jmaduafo
- Email: 

## Screenrecord

[mvc-blog.webm](https://github.com/jmaduafo/Model-View-Controller-Blog/assets/87540591/c66c4d09-296a-4635-a405-fb6849ce4c18)

