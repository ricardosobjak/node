module.exports = function isAuthorized(req, res, next) {
    const { authorization } = req.headers;
    console.log(authorization);

    if (!authorization) {
        res.setHeader('content-type', 'application/json')
        res.status(401).send(JSON.stringify({ message: "Não autorizado" }));
        return false;
    }
    next();
}