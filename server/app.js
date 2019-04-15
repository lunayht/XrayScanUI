import path from 'path';
import app from './config/express';
import routes from './routes/index.route';
import * as errorHandler from './middlewares/errorHandler';

// enable webpack hot module replacement in development mode
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack/webpack.config.dev';
import { onGeneratedData, getDetectionData, deleteEntry } from './config/socketio';

if (process.env.NODE_ENV === 'development') {
    console.log('App running in development mode!')
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
    app.use(webpackHotMiddleware(compiler));
}

// Router
app.use('/', routes);

// Landing page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/client.bundle.js'));
});

// Error Handler
app.use(errorHandler.notFoundErrorHandler);
app.use(errorHandler.errorHandler);

var http = require('http').Server(app);
var io = require('socket.io')(http, { wsEngine: 'ws' });

io.on('connection', function(socket){
    // console.log('A user connected');
    // socket.on('disconnect', function(){
    //     console.log('A user disconnected');
    // });
    socket.on('data', function(data) {
        onGeneratedData(data);
        io.emit('ready', getDetectionData());
        io.emit('open');
    });
    socket.on('delete', function() {
        var dlt = deleteEntry();
        io.emit('response', 'Machine Resume');
        // console.log('reached delete');
        if (dlt) {
            // console.log('Array not empty');
            io.emit('open');
            io.emit('ready', getDetectionData());
        } else {
            console.log('Array Empty');
        };
    });
});

http.listen(app.get('port'), app.get('host'), () => {
    console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});

export default http;