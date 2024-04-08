# [Natours](https://natours-ifw4.onrender.com)

A user can:

- browse the available tours, their start dates, start locations, price and other information.
- book tours by making payments through the strip checkout gateway.
- Login/Signup, Reset password, change profile picture, check booking history and view additional information in their dashboard.

<img src='./public/img/natours.gif' alt='site demo'>

A backend centric project built to learn **Node.js** development better.

Built in **Nodejs** following the MVC architecture with:

- _express_ backend
- _mongoDB_ and _mongoose_
- _pug templates_ for rendering pages
- _stripe_ for handling payments
- _sendgrid_ to handle mailing, _mailtrap_ for email testing
- _mapbox_ for maps integration
- _JWT_ for logging users
- an API to get all the data in the website

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
- **Logging**: Implement logging using Winston.(work in progress)
- **Testing**: Write unit and integration tests using Jest and Supertest.(work in progress)  

Website published at: [Natours](https://natours-ifw4.onrender.com)

API documentation is available at: [Natours API docs](https://documenter.getpostman.com/view/13583598/TVzSiwJj)
