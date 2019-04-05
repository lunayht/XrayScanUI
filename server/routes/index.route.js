import express from 'express';
import usbRoutes from './usb.route';
import authRoutes from './auth.route';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/', usbRoutes);

export default router;
