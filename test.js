var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    },
    headers: {
        Authorization: 'Basic dGVzdEtleTp0ZXN0VmFsdWU='
      }
};

webdriverio
    .remote(options)
    .init()
    .url('http://www.google.de')
    .getTitle().then((title)=>{
        console.log('title was: ' + title);
    })
    .end()
    .catch(err=>{
        console.log(err);
    });