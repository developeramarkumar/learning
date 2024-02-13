namespace InterfaceSegregation {
    type OrderIdType = number;
    interface OrderInfo {
        orderDetails(orderId: OrderIdType): void
    }
    interface OrderStatus {
        orderStatus(orderId: OrderIdType): void
        changeStatus(orderId: OrderIdType): void
    }
    interface ProcessOrder {
        processForDelivery(orderId: OrderIdType): void
    }

    class Order implements OrderInfo, OrderStatus, ProcessOrder {
        orderDetails(orderId: OrderIdType) {
            console.log(' order details for orderId : ' + orderId)
        }

        orderStatus(orderId: OrderIdType): void {
            console.log(' order status for orderId : ' + orderId)
        }

        changeStatus(orderId: OrderIdType): void {
            console.log(' change order status for orderId : ' + orderId)
        }
        
        processForDelivery(orderId: OrderIdType): void {
            console.log('process order for delivery for orderId : ' + orderId)
        }

    }
    const order = new Order();
    order.orderDetails(1);
    order.orderStatus(1);
    order.changeStatus(1);
    order.processForDelivery(1);

}