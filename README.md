# CS465
CS-465-X6171 Full Stack Development I 23EW6

**Architecture**

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?

Express HTML:
Express is a web application framework for Node.js for building server-side applications. HTML is the standard language for creating web pages. In this context, using Express with HTML involved rendering dynamic HTML pages on the server side and sending them to the client browser (server-side rendering or SSR). It's effective for traditional websites where each page has its own distinct URL and content is generated on the server.

JavaScript:
JavaScript is a programming language that's commonly used for adding dynamic behavior to websites. With JavaScript, you can manipulate the Document Object Model to create interactive elements, handle user inputs, and make asynchronous requests to the server.

Single-Page Application (SPA):
A Single-Page Application is a web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. SPAs are built using JavaScript frameworks or libraries like React, Angular, or Vue.js. They offer a smoother user experience by reducing page reloads and providing a more fluid and responsive interaction. SPAs fetch data from the server using APIs and update the DOM as needed, making them suitable for applications where seamless user interactions are a priority.

MongoDB: 
In the backend, MongoDB was likely chosen for its flexibility, scalability, and ability to accommodate changes in a dynamic project environment.

**Functionality**

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON solely focusses on data representation, while Javascript is a complete programming language. Json serves as a common format for exchanging data between the two components. When data needs to be transferred from the backend to the frontend or vice versa, it is often serialized into JSON format. 
There were plenty of instance sin the project where future itterations were better served breaking functionality out into reusable components, then routing to the new pages and the components dynamically, instead of writing redundant code. Identifying redundancies ia key piece of refactoring. 

**Testing**

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Testing the API endpoints was relatively straightforward through postman. You attach the necessary headers for security, pass the payload as JSON in the body (if needed), and debug the retrieved status code. This process should be automated through a unit test suite, ensuring the calls are being sent as anticipated, and that the app can handle bad responses appropriately. 

**Reflection**

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

Before this course my exposure to web-app development was minimal. My skills have primarily been back end focussed, with little engagement in the big 3 front end frameworks, React, Angular, and Vue. This course gave be heightened awareness and comfortability in some of the more general processes used in said frameworks. 
