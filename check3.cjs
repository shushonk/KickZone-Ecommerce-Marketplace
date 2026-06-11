const https = require('https');
const url = 'https://images.unsplash.com/photo-1515523110800-9415d13b84a1?w=150&q=80';
https.get(url, (res) => {
  console.log(url, res.statusCode);
});
