require("dotenv").config()
const express = require("express");
const server = express();
const pgp = require("pg-promise")();
const db = pgp(process.env.URL);
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const RUNNINGPORT = process.env.PORT || 3030


server.use(cors({
    origin: ["http://localhost:5173", "https://govindas.vercel.app/", "*"],
    methods: ["GET", "POST", "DELETE", 'UPDATE','PUT','PATCH']
}));
server.use(express.json());

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

server.post('/create-checkout-session', async (req, res) => {

    const product_info = req.body;
    console.log(product_info)

	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			mode: 'payment',
			line_items: [
					{price_data: {
						currency: 'usd',
						product_data: {
							name: product_info.product_name
						},
						unit_amount: product_info.amount,
                    },
					quantity: product_info.quantity}
				],
			// redirect urls 
			success_url:`http://localhost:8080${product_info.location.pathname}`,
            })
            // response url => stripe
            res.json({url: session.url});
	} catch (e) {
		res.status(500).json({ error: e.message})
	}
});

server.listen(RUNNINGPORT, () => {
    console.log(`The server is running at PORT ${RUNNINGPORT}`);
});

