var shell = require('shelljs');

export function usbcontrol(req, res) {
    const { data } = req.body;
    let shellusb = `echo '` + data + `' | sudo ./hardpass-sendHID-master/scan /dev/hidg0 1 3`;
    console.log(shellusb);
    // shell.exec(shellusb);
    res.send({
        data: data,
        success: true
    });
};