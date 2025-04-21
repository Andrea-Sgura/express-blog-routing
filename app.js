// importo express
const express = require(`express`);

// inizializzo express nella variabile app
const app = express();

// inizializzo la porta
const port = 3000;

// importo il router in una variabile
const postsRouter = require(`./routers/posts.js`);

// definisco la mia rotta base
app.get(`/`,(req, res) => {
    res.send(`Il mio blog`)
});

// metto in ascolto il server
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`);
})