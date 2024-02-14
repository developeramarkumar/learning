namespace InterfaceSegregation {

    type EmployeeType = number;

    interface EmployeeBasic {
        details(employeeId: EmployeeType): void
    }

    interface EmployeeWork {
        logWork(employeeId: EmployeeType): void
        todayWork(employeeId: EmployeeType): void
    }

    interface EmployeeSalary {
        processSalary(employeeId: EmployeeType): void
        taxDeductionOnSalary(employeeId: EmployeeType): void
    }

    class Employee implements EmployeeBasic, EmployeeWork, EmployeeSalary {
        details(employeeId: EmployeeType) {
            console.log(' employee details for employeeId : ' + employeeId)
        }

        logWork(employeeId: EmployeeType): void {
            console.log(' employee log work for employeeId : ' + employeeId)
        }

        todayWork(employeeId: EmployeeType): void {
            console.log(' employee work details for employeeId : ' + employeeId)
        }

        processSalary(employeeId: EmployeeType): void {
            console.log('process salary for  for employeeId : ' + employeeId)
        }

        taxDeductionOnSalary(employeeId: EmployeeType): void {
            console.log('totdal Tax deduction on this month employeeId : ' + employeeId)
        }

    }

    const employee = new Employee();
    employee.details(1);
    employee.logWork(1);
    employee.todayWork(1);
    employee.processSalary(1);
    employee.taxDeductionOnSalary(1);

}