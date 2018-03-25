# Spotify-Karaoke (a.k.a. LeadKaraoke)

 - ### Squad Members: (In Alphabetical Order)
   - Vincent Cavallero
   - Vraj Dalal
   - Ralph Esposito
   - Matt Scuteri

- ### Suggestions for application name:
   - Partyoke
   - Heroyoke
   - KaraokApp(LAME)
   - The Karaoke Spot
   - karryOke
   - LeadKaraoke

- ### Access to the project on GitHub (Backend)
   - [GitHub Repo link](https://github.com/Code4GG/Spotify-Karaoke.git)

- ### Access to the project on Heroku (Frontend)


# Project Requirements
  - This document outlines the base requirements for Project 2.
- ### Requirements
   - Your project **_must_**:
     - Use a Node and Express Web Server;
     - Be backed by a MySQL Database
     - Have both GET and POST routes for retrieving and adding new data;
     - Be deployed using Heroku (with Data);
     - Utilize at least one new library, package, or technology that we haven't discussed;
     - Have a polished frontend / UI;
     - Have folder structure that meets the MVC Paradigm;
     - Meet good quality coding standards (indentation, scoping, naming).
     - Must not expose sensitive API key information on the server
- ### Suggestions
  - Your project **_should_**:
     - Use Handlebars for Server-Side Templating
     - Incorporate Authentication (JSON Web Tokens, Sessions, Etc.)
     - Use an existing public dataset to power the database
     - Create a migration strategy for sharing data across team members

# Resources
1. ### Spotify API
   - [Spotify Documentation](https://beta.developer.spotify.com/documentation/)

2. ### iTunes
   - [iTunes Documentation](https://developer.apple.com/library/content/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html#//apple_ref/doc/uid/TP40017632-CH3-SW1)

3. ### Twillio
   - [Twillio Video](https://www.youtube.com/watch?v=f9jE5ywz8cs&t=3s)
   - [Twillio Documentation](https://www.twilio.com/docs/api?filter-product=sms)

3. ### Bounce.js
   - [Bounce.js](http://bouncejs.com/)

# Logo
   - [Logojoy](https://logojoy.com)
   
1. <img src="https://user-images.githubusercontent.com/22352542/37876199-13b6d1ce-3017-11e8-8746-2a35e4f02787.png" width="200"> <img src="https://user-images.githubusercontent.com/22352542/37876226-6aafbc16-3017-11e8-99a3-3d5f28e064be.png" width="200">

2. <img src="https://user-images.githubusercontent.com/22352542/37876251-b9d63478-3017-11e8-80fe-9a2dbcff805b.png" width="200"> <img src="https://user-images.githubusercontent.com/22352542/37876254-c6ddac1e-3017-11e8-9467-01a95ee76ecb.png" width="200">

3. <img src="https://user-images.githubusercontent.com/22352542/37876277-fa23925a-3017-11e8-9b37-9917940d4c7c.png" width="200"> <img src="https://user-images.githubusercontent.com/22352542/37876279-05f80d36-3018-11e8-9458-0a40facfabf9.png" width="200">

# Favicon
   - [favicon.io](https://favicon.io/)

1. <img src="https://user-images.githubusercontent.com/22352542/37876120-26285cc0-3016-11e8-8d31-4f1d11b0bfb2.png" height="100" width="100">

# Spotify-Karaoke / App Outline
 
## PROJECT BASE v1.0
### 1. USER page / Homepage
1. a web page that displays a **[request to sing button]** and the list of singers
   - **[request button]** brings you to a modal to enter “user info” (nickname, full name, email, phone, song to sing) w/ enter button.
     - **[enter button]** 
       - saves user info to an SQL database
       - searches based on the song selected to pull the band info and cover art
       - brings you back to the user page

### 2. ADMIN / page(s)
1. Admin page
   - **[login button]**
     - displays a the list of singers and a delete button for each.
   - **[singer data button]**
     - displays a list of all singer data (name, nickname, phone, & email)
       - **[admin home button]**
         - brings you back to the previous page with singer list
2. Admin config page
   - **[login button]**
     - displays a the list of admins with an approve button and delete button for each.
