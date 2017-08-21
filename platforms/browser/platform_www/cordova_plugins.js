cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "pluginId": "org.apache.cordova.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/src/browser/DeviceProxy.js",
        "id": "org.apache.cordova.device.DeviceProxy",
        "pluginId": "org.apache.cordova.device",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device": "0.3.0",
    "cordova-plugin-whitelist": "1.2.2"
}
// BOTTOM OF METADATA
});