const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve((req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
