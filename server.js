require("dotenv").config()
const express = require("express");
const server = express();
const pgp = require("pg-promise")();
const db = pgp(process.env.URL);
const cors = require("cors");
const cookieParser = require("cookie-parser");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const PORT = process.env.PORT || 3030

const {giftCardsRouter, sessionIdRetrieves} = require("./routes");



server.use(cors({
    origin: ["http://localhost:5173", "https://govindas.vercel.app/", "*"],
    methods: ["GET", "POST", "DELETE", 'UPDATE','PUT','PATCH'],
    credentials: true
}));
server.use(express.json());
server.use(cookieParser());

server.get('/heartbeat', (req, res) => {
    res.json({
        "message": "Heartbeat"
    });
});

server.post("/add-review", async (req, res) => {
    const { name, rating, comment } = req.body;

    try {
        await db.none(`
            INSERT INTO reviews (name, rating, comment)
            VALUES ($1, $2, $3)
        `, [name, rating, comment]);

        res.status(200).json({message: "Review added successfully"});
        
    } catch (err) {
        console.error("Error,", err);
        res.status(500).json({error: "Something went wrong"});
    }
});

server.post("/gift-card", async (req, res) => {
    const inputFields = req.body;
    console.log(inputFields)

    res.json({"message": "added successfully"})
    // try {
    //     await db.none(`
    //         INSERT INTO buyers (id, first_name, last_name, email, phone_number, amount)
    //         VALUES ($1, $2, $3, $4, $5, $6)
    //     `, [])
    // } catch (error) {
        
    // }
})


// Routes

server.use("/", giftCardsRouter);
server.use("/", sessionIdRetrieves);

server.listen(PORT, () => {
    console.log(`The server is running at PORT ${PORT}`);
});

