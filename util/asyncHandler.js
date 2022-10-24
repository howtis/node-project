module.exports = (requestHandler) => {
    return async (request, response, next) => {
        try {
            await requestHandler(request, response);
        } catch (error) {
            next(error);
        }
    }
}