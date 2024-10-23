# Natours

A user can:

- browse the available tours, their start dates, start locations, price and other information.
- book tours by making payments through the strip checkout gateway.
- Login/Signup, Reset password, change profile picture and view additional information in thier dashboard.

<img src='./public/img/natours.gif' alt='site demo'>

A backend centric project built to learn **Node.js** development.

Built in **Nodejs** following the MVC architecture with:

- _express_ backend
- _mongoDB_ and _mongoose_
- _pug templates_ for rendering pages
- _stripe_ for handling payments
- _sendgrid_ to handle mailing
- _mapbox_ for maps integration
- _JWT_ for loging users
- an API to get all the data in the website (advanced features)
- docker to containerise application [how to setup in docker](#how-to-setup-in-docker)

---

## How to setup in Docker

- Install docker
- go to the project root dir and run
  - `npm run build:js` this will build the js bundles required by frontend(can be skipped if you want to play with APIs only)
  - `npm run build:docker` this will build docker img
  - `npm run start:dev-docker` this pull the required image and start docker containers in dev mode
  - if running for the first time, you might want to seed the db with some data, to do this, open the docker shell and run `npm run embedd-data` to import data, `delete-data` to clean all data from db.
  - the easiest way to open the running container shell is via docker desktop
    - open containers tab on the left
    - expand the running `natours` container to reveal the app container, click on it
    - Click on the `exec` tab to reveal terminal for the running docker container

<br/>
<br/>

Website published at: [Natours](https://natours-ifw4.onrender.com)

API documentation is available at: [Natours API docs](https://documenter.getpostman.com/view/13583598/TVzSiwJj)
