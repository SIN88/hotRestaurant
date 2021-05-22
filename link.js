const express = require ("express");
const path = require ("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var tables = [
    {
        tableName: "1",
        tableStatus: "booked"
    },
    {
        tableName: "2",
        tableStatus: "open"
    },
    {   
        tableName: "3",
        tableStatus: "booked"
    },
    {
        tableName: "4",
        tableStatus: "booked"
    },
    {
        tableName: "5",
        tableStatus: "open"
    }
];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'reservation.html')));



app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));