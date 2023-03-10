const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");

let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
});

const options = {
    viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve("./views"),
        defaultLayout: false
    },
    viewPath: path.resolve("./views"),
    extName: ".handlebars"
}

transporter.use("compile", hbs(options));

module.exports = transporter;

// host: "smtp.office365.com",
//     port: 587,
//         secure: false, // true for 465, false for other ports