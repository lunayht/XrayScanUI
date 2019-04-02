<<<<<<< HEAD
import HttpStatus from 'http-status-codes';

export function usbcontrol(req, res) {
    const { data } = req.body;
    console.log('The data is ' + data)
    res.json({
        success: true
    })
};
=======
export function usbcontrol(req, res) {
    const { data } = req.body;
    console.log('DATA: ' + data);
    res.json({
        success: true
    });
};
>>>>>>> 68f2e68a42bc68b34d9224a96d1ca1aab7b07465
