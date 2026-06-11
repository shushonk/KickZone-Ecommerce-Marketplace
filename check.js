const https = require('https');
const urls = [
  'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150&q=80',
  'https://images.unsplash.com/photo-1515523110800-9415d13b84a1?w=150&q=80',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
  'https://placehold.co/150x150/f0f5ff/2874f0?text=Test'
];
urls.forEach(url => {
  https.get(url, (res) => {
    console.log(url, res.statusCode);
  }).on('error', (e) => console.error(url, e.message));
});
