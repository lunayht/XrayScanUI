var usb = require('usb');

export function usbcontrol(req, res) {
    // console.log(usb.getDeviceList());
    // var device = usb.findByIds(1256, 26720);
    // device.open();
    // console.log(device.interfaces);
    usb.on('attach', function(device) {
        console.log('Here is a new device attached');
        console.log(device);
        device.open();
        console.log('Here are the device interfaces');
        console.log(device.interfaces);
    });
};