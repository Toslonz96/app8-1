const express = require('express');
const app = express();
const port = 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/server-time', (req, res) => {
    let now = new Date();
    let time = {
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
    }
  res.json(time);
});

function rd(min, max) {
    let x = (max - min) + 1
    return min + Math.floor(Math.random() * x)
}

app.get('/api/football-results', (req, res) => {
    let table = `
    <table border="1" style="margin: 7px auto;">
        <tr><th>Team</th><th>Points</th><th>Team</th></tr>
        <tr><td>Man United</td><td>${rd(0, 5)}</td><td>Liverpool</td></tr>
        <tr><td>Chelsea</td><td>${rd(0, 5)}</td><td>Manchester City</td></tr>
        <tr><td>Arsenal</td><td>${rd(0, 5)}</td><td>Crystal Palace</td></tr>
    </table>`;

    res.send(table);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});