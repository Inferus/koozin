class ApiError extends Error{
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }

    static badRequest(message) {
        throw new ApiError(404, message)
    }

    static internal(message) {
        throw new ApiError(500, message)
    }

    static forbidden(message) {
        throw new ApiError(403, message)
    }
}

module.exports = ApiError