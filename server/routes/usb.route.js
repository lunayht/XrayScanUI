import express from 'express';
import * as usbCtrl from '../controllers/usb.controller';

const usbRoutes = express.Router();

usbRoutes.route('/')
    .post((req, res) => {
        res.send(req.body);
        console.log(res);
    })

export default usbRoutes;
