const express = require('express');
const app = express();
const port = 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.post('/api/form-post', (req, res) => {

    let username = req.body.username || "";
    let email = req.body.email || "";
    let message = req.body.message || "";

    let text = `
    <table border="1" style="border-collapse: collapse; margin: 0 auto;">
        <caption>ข้อมูลที่ส่งขึ้นไป</caption>
        <tr><th>ชื่อ</th><td>${username}</td></tr>
        <tr><th>อีเมล</th><td>${email}</td></tr>
        <tr><th>ข้อความ</th><td>${message}</td></tr>
    </table>
    `;

    res.send(text);
});
    
  
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
