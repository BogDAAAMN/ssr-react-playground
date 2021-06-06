const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello Deta!'));

if (!process.env.DETA_RUNTIME){
    console.log("running on 8080")
    app.listen(8080);
}

// export 'app'
module.exports = app;