import express from 'express';
import * as logCtrl from '../controllers/log.controller';

const logRoutes = express.Router();

logRoutes.route('/')
    .post((req, res) => {
        logCtrl.save(req, res)
    })

logRoutes.route('/query')
    .post((req, res) => {
        logCtrl.queryData(req, res)
    })

export default logRoutes;