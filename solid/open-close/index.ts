namespace OpenClosePrinciple {
	type EmployeeType = number;

	interface EmployeeInterface {
		detail(): void;
	}

	class Employee implements EmployeeInterface {

		constructor(protected employeeId: EmployeeType) { }

		detail(): void {
			console.log('Employee detail for empId :', this.employeeId);
		}

	}

	class EmployeeWork extends Employee {

		logWork(h: number): void {
			console.log('log work for empID :', this.employeeId);
		}

	}


	const employeeWork = new EmployeeWork(1);
	employeeWork.detail()
	employeeWork.logWork(8);
}