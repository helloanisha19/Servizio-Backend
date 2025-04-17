import jwt from "jsonwebtoken";
import { doubleEncryptData, doubleDecryptData } from "./doubleEncryption.js";

class JwtService {
  // Set expiry to 365 days by default
  static sign(payload, expiry = "365d", secret = process.env.ACCESS_TOKEN_KEY) {
    if (!secret) {
      throw new Error("Secret key is not defined");
    }

    const jwtToken = jwt.sign(payload, secret, { expiresIn: expiry });
    return doubleEncryptData(jwtToken);
  }

  static verify(token, secret = process.env.ACCESS_TOKEN_KEY) {
    if (!secret) {
      throw new Error("Secret key is not defined");
    }
    try {
      const decryptedToken = doubleDecryptData(token);
      const verified = jwt.verify(decryptedToken, secret);
      console.log("Token verified successfully", verified);
      return verified;
    } catch (error) {
      console.error("Invalid Token", error);
      throw new Error("Invalid Token");
    }
  }
}

export default JwtService;