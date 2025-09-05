const express = require("express");
const homeRoute = require("./routes/home").router;

console.log("Trying to load newMessage route...");
const newMessageModule = require("./routes/newMessage");
console.log("newMessageModule:", newMessageModule);
console.log("newMessageModule.router:", newMessageModule.router);
const newMessageRoute = newMessageModule.router;

const app = express(); // Initialize the Express app

app.use(express.urlencoded({ extended: true }));

// Set the views directory and the view engine
app.set('views', "./views");
app.set('view engine', "ejs");

// Use the home route
app.use("/", homeRoute);
app.use("/new", newMessageRoute);

// Start the server
app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port 3000");
    }
});
