namespace OpenClosePrinciple {
	type OrderType = number[];
	interface OrderProcessorInterface {
		confirm(): void;
	}
	class OrderProcessor implements OrderProcessorInterface {
		protected orderItems: OrderType;

		constructor(orderItems: OrderType) {
			this.orderItems = orderItems;
		}

		confirm(): void {
			console.log('Order confirmed for :', this.orderItems);
		}

		addMoreOrder(orderId: number): void {
			this.orderItems.push(orderId);
			console.log('New order added for :', orderId);
		}
	}

	class OrderProcessorWithInvoice extends OrderProcessor {

		generateInvoice(): void {
			console.log('Order invoice generated for :', this.orderItems);
		}

	}

	const orderItems = [1, 2, 3];

	const orderProcessor = new OrderProcessorWithInvoice(orderItems);
	orderProcessor.addMoreOrder(4)
	orderProcessor.confirm();
	orderProcessor.generateInvoice();
}