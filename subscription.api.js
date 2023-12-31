
module.exports = async (waw) => {
	const Schema = waw.mongoose.Schema({
		email: String
	});
	
	const Subscription = waw.mongoose.model('Subscription', Schema);

	const router = waw.router('/api/subscription');

	router.post('/subscribe', async (req, res) => {
		const subscription = await Subscription.findOne({
			email: req.body.email
		});

		res.json(subscription || await Subscription.create({
			email: req.body.email
		}));
	});

	router.post('/unsubscribe', async (req, res) => {
		await Subscription.deleteOne({
			email: req.body.email
		});

		res.json(true);
	});
}
