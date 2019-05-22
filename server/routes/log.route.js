import express from 'express';
import * as logCtrl from '../controllers/log.controller';

const logRoutes = express.Router();

logRoutes.route('/')
    .post((req, res) => {
        logCtrl.save(req, res)
    })

export default logRoutes;