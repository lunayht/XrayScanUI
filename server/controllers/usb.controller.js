export function usbcontrol(req, res) {
    const { data } = req.body;
    console.log('DATA: ' + data);
    res.send({
        // data: data,
        data: data,
        success: true
    });
    // console.log(res);
};