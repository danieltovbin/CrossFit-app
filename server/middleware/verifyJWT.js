import jwt from 'jsonwebtoken';

const verifyJWT = (req, res, next) => {
    const authHeather = req.headers.authorization || req.headers.Authorization;
    if (!authHeather?.startsWith('Bearer ')) return res.sendStatus(401);
    const token = authHeather.split(' ')[1];
    console.log(token)
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403);
            req.user = decoded.UserInfo.username;
            req.roles = decoded.UserInfo.roles;
            next()
        }
    )
}

export default verifyJWT