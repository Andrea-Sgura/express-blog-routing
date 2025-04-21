// importo express
const express = require(`express`);

// inizializzo express nella variabile app
const app = express();

// inizializzo la porta
const port = 3000;

// definisco la mia rotta base
app.get(`/`,(req, res) => {
    res.send(`Il mio blog`)
});

// metto in ascolto il server
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`);
})