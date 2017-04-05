# reimagined-lamp

This package has been compiled as part of a IoT controller framework. We have fashioned this code base as a mashup of several ESP8266 Arduino editor examples. We took the best of each example and we also got several other features to work as expected.

Here is a brief list of current features:
* Async TCP and webserver
* Browser-based editor using Ace (cobbled together from several sources)
* Expanding folders on SPIFFS file list in editor page
* Add, edit and delete files. 
* Upload new files
* Added additional icons for folders, text files, images and Gzipped files
* Websocket-serial bridge (based on https://github.com/hallard/WebSocketToSerial)
* jQuery 1.x, 2.x and 3.x in minified Gzip form
* jQuery-UI (with smooth/scalable font icons)
* Backbone.js, underscore.js
* Marionette 3.x
* backbone.radio
* Require.js (with example application framework starter)

The webserver serves files with caching turned on for all Gzip'd files. Browser caching allows for fast page load times. 

## Arduino Libraries Needed
* https://github.com/me-no-dev/ESPAsyncTCP
* https://github.com/me-no-dev/ESPAsyncWebServer



