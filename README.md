# [Natours](https://natours-ifw4.onrender.com)

## The objective of making this is to learn, backend development, how a software engineer works (think projects, task boards, branches etc) 🤷

- [What can the user do](#what-can-a-user-do)
- [Behind the scenes of, tech breakdown of the project](#tech-breakdown)
- [Interesting features](#interesting-features)
- [Future improvements](#possible-improvements)
## What can a user do:

- browse the available tours, their start dates, start locations, price and other information.
- book tours by making payments through the strip checkout gateway.
- Login/Signup, Reset password, change profile picture, check booking history and view additional information in their dashboard.

<img src='./public/img/natours.gif' alt='site demo'>

A backend-centric project built to learn **Node.js** development.


## Tech Breakdown

Built with **Nodejs** following the MVC architecture:

- _express_ backend
- _mongoDB_ and _mongoose_
- _pug templates_ for rendering pages
- _stripe_ for handling payments
- _sendgrid_ to handle mailing, _mailtrap_ for email testing
- _mapbox_ for maps integration
- _JWT_ for logging users
- an API to get all the data in the website
- docker to containerise application [how to setup in docker](#how-to-setup-in-docker)

---

### Interesting features:

- **Advanced Filtering**: Filter tours by duration, ratings, price, etc.
- **Pagination**: Limit the number of results returned.
- **Sorting**: Sort tours by price, ratings, etc.
- **Field Limiting**: Limit the fields returned in the response.
- **Alias Routes**: Use alias routes to get the top 5 cheap tours, top 5 tours with high ratings, etc.
- **Geospatial Queries**: Get tours within a certain distance from a location.
- **Aggregation Pipelines**: Get statistics like average price, ratings, etc. using MongoDB aggregation pipelines.
- **JWT Authentication**: Protect routes using JWT authentication.
- **User Roles and Permissions**: Implement user roles and permissions.
- **Reset Password Functionality**: Implement reset password functionality.
- **Emailing**: Send welcome emails, password reset emails, etc. (emailing in the prod environment might be slow due to the free tier of service used).
- **Credit Card Payments**: Handle credit card payments using Stripe.
- **Mapbox Integration**: Show tour locations on a map using Mapbox.
- **File Uploads**: Upload and resize images using middleware.
- **Security**: Implement security best practices.
- **Error Handling**: Implement error handling for production.
- **Environment Variables**: Use environment variables to store sensitive data.

### Possible improvements
- Move content (images, text etc.) to a CMS.
- Implement logging using Winston or a similar service.
- Write unit and integration tests.
- Setup CI to test codebase on PR level.
- Move deployment to a combination of Docker Registry(auto build and push, CD)
- EC2 or a similar compute service to run the deployed solution.
- Move to/fix problems with payments+ emailing solution
- Move the frontend to some framework (candidates should have SSG for home & tour pages, SSR for other pages)

### How to setup in Docker

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
