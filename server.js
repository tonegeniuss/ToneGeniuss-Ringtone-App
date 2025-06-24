const express = require('express');  
const ytdl = require('ytdl-core');  
const app = express();  

// RINGTONE DOWNLOADER  
app.get('/download', async (req, res) => {  
  const { url, start = 0, end = 15 } = req.query; // 15-second clip  
  try {  
    res.header('Content-Disposition', 'attachment; filename="ToneGeniuss-Ringtone.mp3"');  
    ytdl(url, { filter: 'audioonly', start, end }).pipe(res);  
  } catch (err) {  
    res.status(500).send('Error: ' + err.message);  
  }  
});  

// STRIPE PAYMENTS (UNCOMMENT LATER)  
// const stripe = require('stripe')('sk_test_yourKey');  

app.listen(3000, () => console.log('ToneGeniuss Backend Live!'));  
