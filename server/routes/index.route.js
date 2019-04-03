import express from 'express';
import usbRoutes from './usb.route';

const router = express.Router();

router.use('/', usbRoutes);

export default router;
