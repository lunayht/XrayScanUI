import HttpStatus from 'http-status-codes';
import Threats from '../models/threat.model';

export function save(req, res) {
    const weapon = req.body.weapon;
    const img = req.body.img;
    const percentage = req.body.percentage;

    Threats.forge({weapon, img, percentage}, {hasTimestamp: true}).save()
    .then(threats => res.send({
        save: true,
        data: threats.toJSON()
    }))
    .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err
    }));
};

export function queryData(req, res) {
    // console.log(req.body.data.data.id);
    let id = req.body.data.data.id;
    Threats.query({
        where: {weaponid: id}
    }).fetch()
    .then(threats => res.send({
        query: true,
        data: threats.toJSON()
    }))
    .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err
    }));
};