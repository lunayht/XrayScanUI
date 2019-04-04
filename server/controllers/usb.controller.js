var shell = require('shelljs');

export function usbcontrol(req, res) {
    const { data } = req.body;
    let shellusb = `echo ` + data ;
    console.log(shellusb);
    shell.exec(shellusb);
    res.send({
        success: true
    });
};