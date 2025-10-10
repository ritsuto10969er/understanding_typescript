//abstractクラスはインスタンス化できない
//継承されるためだけのもの
abstract class Department {
    static fiscalYear = 2020;
    // private id: string;
    // name: string;
    protected employees: string[] = [];

    static createEmployee(name: string ) {
        return {name: name};
    }

    constructor(protected readonly id: string, public name: string) {
        // this.name = n;
    }
    
    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        //validation etc...
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
};

class ITDepartment extends Department {
    admins: string[];
    constructor(id:string, admins:string[]) {
        super(id, 'IT'); //super??
        this.admins = admins;
    }

    describe() {
        console.log('IT部門  ID - ' + this.id);
    }
};

class AccountingDepartment extends Department {
    private lastReport: string | undefined;
    private static instance: AccountingDepartment; //型がこのクラスのオブジェクトって？？

    //一般的には対象となるプロパティに近い名前
    //getterは何かを返さなければならない、カプセル化のようなもの
    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }

        throw new Error('There is no report');
    }
    
    set mostRecentReport(value: string) {
        if(!value) {
            throw new  Error("Set a correct value");
        }

        this.addReports(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(AccountingDepartment.instance) {
            return this.instance; //static内なのでthisはこのクラスを指す？？
        }

        this.instance = new AccountingDepartment('D2', []);
        return this.instance;
    }

    describe() {
        console.log('会計部門  ID - ' + this.id);
    }

    addReports(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

    addEmployee(name: string): void {
        if(name === 'Max') {
            return
        }
        
        this.employees.push(name);
    
    }
}

const employee1 = Department.createEmployee('max');
console.log(employee1, Department.fiscalYear);

const IT = new ITDepartment('D1', ['Ritsuto']);
// console.log(accounting);
IT.describe();

IT.addEmployee('Ritsu');
IT.addEmployee('Mina');

// accounting.employees[2] = 'Nori';
IT.printEmployeeInformation();


// const accounting = new AccountingDepartment('D2', []);
const accounting = AccountingDepartment.getInstance();
accounting.mostRecentReport = '特別会計レポート';
accounting.addReports('something');
console.log(accounting.mostRecentReport);
// accounting.printReports();

accounting.addEmployee('Max');
accounting.addEmployee('Nori');

accounting.describe();
// accounting.printEmployeeInformation();

