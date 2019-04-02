import HttpStatus from 'http-status-codes';

export function usbcontrol(req, res) {
    const { data } = req.body;
    console.log('The data is ' + data)
    res.json({
        success: true
    })
};