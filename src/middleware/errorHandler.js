const ErrorHandler = () => {
  console.log("Error hadler takes action!");

  const errStatus = err.errStatus || 500;
  const errMessage = err.message || "Opps, se encontró un error no especificado!";

  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: process.env.NODE_ENV === 'development' ? err.stack : {}
  });
}

export default ErrorHandler;