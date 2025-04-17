import { Router } from "express";
import {
    getEnquiriesByCustomer,
    getEnquiryById,
    createEnquiry,
    updateEnquiryStatus,
} from "../../handlers/restaurant/enquiry.restaurant.handler.js";
import { addEnquirySchema } from "../../validations/restaurant/enquiry.restaurant.schema.js";
import { validateRequest } from "zod-express-middleware";
import ifCustomer from "../../middlewares/customer.auth.js";
import auth from "../../middlewares/auth.js";
const router = Router();

router.route("/enquiry").get(auth, ifCustomer, getEnquiriesByCustomer);
router.route("/enquiry").post(auth, ifCustomer, validateRequest({ body: addEnquirySchema }), createEnquiry);
router.route("/enquiry/:id").get(auth, ifCustomer, getEnquiryById);
router.route("/enquiry/status/:id").put(auth, ifCustomer, updateEnquiryStatus);


export default router;
