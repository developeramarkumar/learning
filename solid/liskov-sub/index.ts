namespace LiskovSubstitution {
    type OrderType = number;
    class Delivery {
        parcelDetail(orderId: OrderType): void {
            console.log('Parcel detail for orderid : ' + orderId)
        }
    }

    class SurfaceDelivery extends Delivery {
        transportDetail(orderId: OrderType): void {
            // transport type, number route
            console.log('transport detail for orderid: ' + orderId)
        }
    }

    class AirDelivery extends Delivery {
        fligthDetail(orderId: OrderType): void {
            // flight number
            console.log('flight detail for orderid: ' + orderId)
        }
    }

    const airDelivery = new AirDelivery();
    airDelivery.parcelDetail(1);
    airDelivery.fligthDetail(1);

    const surfaceDelivery = new SurfaceDelivery();
    surfaceDelivery.parcelDetail(1);
    surfaceDelivery.transportDetail(1);


}