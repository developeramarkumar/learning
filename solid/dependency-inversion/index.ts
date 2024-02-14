namespace DependencyInversion {

    type EmployeeType = number;

    interface EmployeeInterface {
        detail(employeeId: EmployeeType): void
    }
    class Employee implements EmployeeInterface {
        detail(employeeId: EmployeeType): void {
            console.log('Employee details for employeeId : ' + employeeId)
        }
    }

    class ParmanentEmployee {
        constructor(private employee: EmployeeInterface) { }

        getDepartment(employeeId: EmployeeType): void {
            this.employee.detail(employeeId);
            console.log('current department info for employeeId ' + employeeId)
        }
    }

    class ContractualEmployee {
        constructor(private employee: EmployeeInterface) { }

        getContractDuration(employeeId: EmployeeType): void {
            this.employee.detail(employeeId);
            console.log('contract duration for employeeId: ' + employeeId)
        }
    }
    const employee = new Employee()
    const parmanentEmployee = new ParmanentEmployee(employee);
    parmanentEmployee.getDepartment(1);

    const tempEmployee = new ContractualEmployee(employee);
    tempEmployee.getContractDuration(1);

}