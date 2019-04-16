import express from 'express';
import usbRoutes from './usb.route';
import authRoutes from './auth.route';
import logRoutes from './log.route';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/', usbRoutes);
router.use('/log', logRoutes);

export default router;