"use strict";
const bcrypt = require("bcrypt");
const createUser = async () => {
    return [
        {
            id: 1,
            email: "mel@gmail.com",
            phone: 12345678,
            password: await bcrypt.hash("mel", 10),
            address: "193 Bishan street 13",
            postalCode: "570193",
            username: "mel",
        },
    ];
};
module.exports = createUser;
