namespace SingleResponsibility {
	type EmployeeId = number;

	class Employee {
		info(employeeId: EmployeeId): void {
			console.log('Employee Info for empID :', employeeId);
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

	const employee = new Employee();
	employee.info(1);

	const employeeWork = new EmployeeWork();
	employeeWork.dailyWorkLog(1);

	const employeeGrowth = new EmployeeGrowth();
	employeeGrowth.progressReport(1);
}
