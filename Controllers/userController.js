const User = require("../Model/User");
const bcrypt=require('bcrypt')

exports.Register = async (req, res) => {
    let { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send('Please Fill all the Fields');
    }

    try {
        let checkUser = await User.findOne({ email: email });

        if (checkUser) {
            return res.status(400).send('User Already exists. Please Login');
        }

        let newUser = new User({
            name: name,
            email: email,
            password: password  
        });

        await newUser.save();
        res.status(201).send('User Registration Successful.');
    } catch (error) {
        console.error(error);  
        return res.status(400).send('Error during Registration');
    }
}
