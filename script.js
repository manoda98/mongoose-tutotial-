const mongoose = require("mongoose")
const User = require("./User")

mongoose.connect("mongodb://localhost:27017/testdb")
run()
async function run() {
    try {
        const user = await User.create({ 
            name: "Mano", 
            age: 26,
            email: "TEST@gmail.com",
            hobbies: ["Weight Listing", "Bowling"],
            address: {
                street: "Main St",
            },
        })
        console.log(user)

    } catch (e) {
        console.log(e.message)
    }

}
