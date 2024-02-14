namespace SingleResponsibility {
	type EmployeeId = number;

	class Employee {
		constructor(private employeeId: EmployeeId) { }

		info(): void {
			console.log('Employee Info for empID :', this.employeeId);
		}
	}

	class EmployeeWork {
		dailyWorkLog(employeeId: EmployeeId): void {
			console.log('today employee work log :', employeeId);
		}
	}

	class EmployeeGrowth {
		progressReport(orderItems: EmployeeId): void {
			console.log('Invoice generated for:', orderItems);
		}
	}

	const orderProcessor = new Employee(1);
	orderProcessor.info();

	const deliveryOrder = new EmployeeWork();
	deliveryOrder.dailyWorkLog(1);

	const invoiceGenerator = new EmployeeGrowth();
	invoiceGenerator.progressReport(1);
}
