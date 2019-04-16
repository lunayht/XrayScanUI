import HttpStatus from 'http-status-codes';
import Threats from '../models/threat.model';

export function save(req, res) {
    const weapon = req.body.weapon;
    const img = req.body.img;
    const percentage = req.body.percentage;

    Threats.forge({weapon, img, percentage}, {hasTimestamp: true}).save()
    .then(res.send({
        save: true
    }))
    .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err
    }));
};