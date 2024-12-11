const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/employees')

const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/employee");
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    // EmployeeModel.findOne({ email: email })
    //     .then(user => {
    //         if (user) {
    //             if (user.password === password) {
    //                 res.json({
    //                     status: "success",
    //                     message: "Login successful",
    //                     userData: {
    //                         name: user.name,
    //                         email: user.email,
    //                         role: user.role,  // Add any other user details you want to pass
    //                     }
    //                 });
    //             } else {
    //                 res.json({ status: "error", message: "Incorrect password" });
    //             }
    //         } else {
    //             res.json({ status: "error", message: "No record exists" });
    //         }
    //     }) 
    //     .catch(err => res.json({ status: "error", message: err.message }));

    const user = await EmployeeModel.findOne({ email })

    if (!user) {
        return res.json({
            status: "error",
            message: "User not found"
        })
    }

    if (user.password !== password) {
        return res.json({
            status: "error",
            message: "Incorrect password"
        })
    }


    res.json({
        status: "success",
        message: "Login successful",
        userData: {
            name: user.name,
            email: user.email,
            role: user.role,  // Add any other user details you want to pass
        }
    })
});



app.post("/register", async (req, res) => {
    // EmployeeModel.create(req.body)
    //     .then((employees) => res.json(employees))
    //     .catch((err) => res.json(err));
    try {
        let employees = await EmployeeModel.create(req.body);
        return res.json(employees);
    } catch (error) {
        return res.json(err);
    }
});
app.listen(3000, () => {
    console.log("server is running ")
    // console.log(EmployeeModel)
})