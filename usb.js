var usb = require('usb');
console.log('Program is running......');

usb.on('attach', function(device) {
    console.log('New device attached');
    
    device.open();
    
    var deviceInterface = device.interface(0);
    
    deviceInterface.claim();
    
    var endpoints = deviceInterface.endpoints,
        inEndpoint = endpoints[0],
        outEndpoint = endpoints[1];

    inEndpoint.transferType = 3;
    inEndpoint.startPoll(1, 64);
    inEndpoint.transfer(64, function(data, error) {
        if (!error) {
            console.log(data);
        } else {
            console.log(error);
        }
    });
    inEndpoint.on('data', function(data) {
        console.log(data);
    });
    inEndpoint.on('error', function(error) {
        console.log(error);
    });
    
    // outEndpoint.transferType = 3;
    // outEndpoint.startPoll(1, 64);
    // outEndpoint.transfer(data, function(error) {
    //     console.log(error)
    // });
});

usb.on('detach', function(device) {
    console.log('Device is detached');
    console.log(device);
});