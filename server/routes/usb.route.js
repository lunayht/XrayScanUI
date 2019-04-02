import express from 'express';
import * as usbCtrl from '../controllers/usb.controller';

const usbRoutes = express.Router();

usbRoutes.route('/usb')
    .post((req, res) => {
        usbCtrl.usbcontrol(req, res);
    })
export default usbRoutes;
