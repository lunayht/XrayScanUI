import HttpStatus from 'http-status-codes';
import Threats from '../models/threat.model';

let weapon, img, percentage;

export function save(req, res) {
    for (var i = 0; i < req.body.length; i++) {
        weapon = req.body[i].weapon;
        img = req.body[i].img;
        percentage = req.body[i].percentage;
        Threats.forge({weapon, img, percentage}, {hasTimestamp: true}).save()
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            error: err
        }));
    }
    res.json({
        save: true
    })
};