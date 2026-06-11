const https = require('https');
const urls = [
  'https://loremflickr.com/150/150/mobile',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
];
urls.forEach(url => {
  https.get(url, (res) => {
    console.log(url, res.statusCode);
  }).on('error', (e) => console.error(url, e.message));
});
