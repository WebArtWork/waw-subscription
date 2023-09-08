import Http from '/api/wjst/http';
import Event from '/api/wjst/event';
class Subscription {
	api = '/api/subscription';

	async subscribe(email) {
		try {
			await Http.post(`${this.api}/subscription`, {
				email
			});

			Event.emit('subscription_subscribe');
		} catch (error) {
			throw new Error(`Failed to subscription: ${error.message}`);
		}

	}
}

export default new Subscription();
