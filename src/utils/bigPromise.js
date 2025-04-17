const BigPromise = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    console.error("ERROR", error);
    res.status(error.code < 500 ? error.code : 500).json({
      success: false,
      message: error.message,
    });
  }
};
export default BigPromise;
