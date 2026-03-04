const express = require('express');
const app = express();
const port = 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/form-get', (req, res) => {
    let t = req.query.target ||"";
    let k = req.query.kw ||"";
    let n = parseInt((Math.random() * 1000));
    let r = {
        target: t,
        kw: k,
        results: n
    }
    res.json(r);
});
    
  
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
