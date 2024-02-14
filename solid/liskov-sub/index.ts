namespace LiskovSubstitution {

    type EmployeeType = number;

    class Employee {
        detail(employeeId: EmployeeType): void {
            console.log('Employee details for employeeId : ' + employeeId)
        }
    }

    class ParmanentEmployee extends Employee {
        getDepartment(employeeId: EmployeeType): void {
            console.log('current department info for employeeId ' + employeeId)
        }
    }

    class ContractualEmployee extends Employee {
        getContractDuration(employeeId: EmployeeType): void {
            console.log('contract duration for employeeId: ' + employeeId)
        }
    }

    const parmanentEmployee = new ParmanentEmployee();
    parmanentEmployee.detail(1);
    parmanentEmployee.getDepartment(1);

    const tempEmployee = new ContractualEmployee();
    tempEmployee.detail(1);
    tempEmployee.getContractDuration(1);


}