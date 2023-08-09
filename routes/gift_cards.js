require("dotenv").config()
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

router.post('/buy-gift-card', async (req, res) => {

    const { product_name, buyer, recipient, comment, id, amount, quantity, location } = req.body;

	try {
        const product = await stripe.products.retrieve(
            'prod_OPq6f0MEfgaUEu'
          );
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			mode: 'payment',
			line_items: [
					{
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: product_name,
                                images: product.images,
                                description: product.description
                            },
                            unit_amount: amount,
                        },
                        quantity: quantity,
                        adjustable_quantity: {
                            enabled: true
                        }
                    }
				],
            customer_email: buyer.email,
			// redirect urls 
			success_url: "http://localhost:5173/order/success?session_id={CHECKOUT_SESSION_ID}",
            cancel_url: "http://localhost:5173/"
            })
            res.json({url: session.url});
	} catch (e) {
		res.status(500).json({ error: e.message})
	}
});

module.exports = router;