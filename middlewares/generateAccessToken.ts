// add modules
const jwt = require("jsonwebtoken");

// define generate access token
function generateAccessToken(email: string, password: string, _id: string, role: string) {
    return jwt.sign({ email: email, password: password, _id: _id, role: role }, process.env.JWT_SECRET_KEY, {
        expiresIn: "30d"
    });
}

// export module
export default generateAccessToken;
