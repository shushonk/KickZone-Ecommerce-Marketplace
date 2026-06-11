const https = require('https');
const url = 'https://loremflickr.com/500/500/mobile?lock=1';
https.get(url, (res) => {
  console.log(url, res.statusCode, res.headers.location);
});
