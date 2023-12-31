class ApiError extends Error {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    super();
    this.status = status
    this.message = message
  }

  static badRequest(message: string) {
    return new ApiError(401, message)
  }

  static internal(message: string) {
    return new ApiError(500, message)
  }

  static forbidden(message: string) {
    return new ApiError(403, message)
  }

  static badGateway(message: string) {
    return new ApiError(502, message)
  }
}

export default ApiError