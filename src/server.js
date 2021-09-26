//using destructuring and default arguments, set the variable PORT to equal wahtever value is found inside of the process.env file... OR default to 5000
const { PORT = 5000 } = process.env;


//require the express app that you exported in app.js
const app = require("./app");


//this function will run when the server successfully starts
const listener = () => console.log(`Server is running on Port ${PORT}`);


//the listen() method on your Express app is what runs the server. it takes 2 arguments, a port number and a function
//the PORT var defines where your server is running and the listener() function will get called as soon as the server has successfully started
app.listen(PORT, listener);
