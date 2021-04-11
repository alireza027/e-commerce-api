// add modules
import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";

// define authenticate token
function authenticateToken(req, res: Response, next: NextFunction) {
    // Gather the jwt access token from the request header
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) {
        req.errorForbidden = "Forbidden";
    } // if there isn't any token

    jwt.verify(token, process.env.JWT_SECRET_KEY || "E_COMMERCE_JWT_SECRET_KEY", (err, user) => {
        if (err) {
            req.errorUnauthorized = "Unauthorized";
        }
        req.user = user;
        next(); // pass the execution off to whatever request the client intended
    });
}

// export module
export default authenticateToken;
