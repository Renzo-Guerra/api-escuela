class ApplicationError extends Error {
  constructor(errStatus, errMessage) {
    super(errMessage);
    this.errStatus = errStatus;
  }
}