namespace SingleResponsibility {
	type OrderType = number[];

	class OrderProcessor {
		private orderItems: OrderType;

		constructor(orderItems: OrderType) {
			this.orderItems = orderItems;
		}

		confirm(): void {
			console.log('Order confirmed for :', this.orderItems);
		}
	}

	class DeliveryOrder {
		changeStatus(orderItems: OrderType): void {
			console.log('delivery status changing for :', orderItems);
		}
	}

	class InvoiceGenerator {
		generateInvoice(orderItems: OrderType): void {
			console.log('Invoice generated for:', orderItems);
		}
	}

	const orderItems = [1, 2, 3];

	const orderProcessor = new OrderProcessor(orderItems);
	orderProcessor.confirm();

	const deliveryOrder = new DeliveryOrder();
	deliveryOrder.changeStatus(orderItems);

	const invoiceGenerator = new InvoiceGenerator();
	invoiceGenerator.generateInvoice(orderItems);
}
