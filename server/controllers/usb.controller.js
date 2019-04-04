export function usbcontrol(req, res) {
    const { data } = req.body;
    console.log('DATA: ' + data);
    res.send({
        success: true
    });
};
