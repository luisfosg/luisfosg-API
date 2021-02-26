import { jsonWTVerify } from '../services/token';
import User from '../models/user';

export const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"];

    if(!token) return res.status(403).json({ "status": "No Token Provided" });

    const decoded = jsonWTVerify(token);

    const user = await User.findById(decoded.id, { password: 0});

    if(!user) return res.status(404).json({ "status": "User no Found"});

    next();
}
