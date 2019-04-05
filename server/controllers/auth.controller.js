import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.model';
import logger from '../config/winston';

export function login(req, res) {
    const {userid, password} = req.body;
    User.query({
        where: {userid: userid},
    }).fetch().then(user => {
        if (user) {
            if (bcrypt.compareSync(password, user.get('password'))) {

                const token = jwt.sign({
                    id: user.get('id'),
                    userid: user.get('userid')
                }, process.env.TOKEN_SECRET_KEY);

                res.json({
                    success: true,
                    token,
                    userid:  user.get('userid')
                });
            } else {
                logger.log('error', 'Authentication failed. Invalid password.');

                res.status(HttpStatus.UNAUTHORIZED).json({
                    success: false,
                    message: 'Authentication failed. Invalid password.'
                });
            }
        } else {
            logger.log('error', 'Invalid username or password.');

            res.status(HttpStatus.UNAUTHORIZED).json({
                success: false, message: 'Invalid username or password.'
            });
        }
    });
}
