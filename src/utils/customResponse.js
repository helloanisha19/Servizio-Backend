import ApiResponse from "./ApiResponse.js";

const ControllerResponse = (res, status, data, message) => {
  return res.status(status).send(new ApiResponse(status, data, message));
};

const ErrorHandler = (res, status, message, errors) => {
  return res.status(status).send(new ApiResponse(status, errors, message));
};

export { ControllerResponse, ErrorHandler };
