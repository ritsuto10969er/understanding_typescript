//高度な型
type Admin =  {
    name: string,
    privileges: string[],
}

type Employee = {
    name: string,
    startDate: Date,
}

// interface ElevatedEmployee extends Admin, Employee {}
type ElevatedEmployee = Admin & Employee; //交差型
//e1はAdmin,Employeeの両方のプロパティを持つ必要がある？？
const e1: ElevatedEmployee = {
    name: 'Ritsu',
    privileges: ['aiueo'],
    startDate: new Date(),
}

//型ガード　type guard
//Union型の時に役立つ　どの型が変数や定数に入ってるか知りたいとき
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// Universal is the intersection of Combinable and Numeric, which results in 'number'
const universalValue: Universal = 42;

console.log('ElevatedEmployee:', e1);
console.log('Universal value:', universalValue);

//function overload
function add(a: number, b: number): number; //これでadd(number, nubmer)の時は戻り値の型推論がnumberになる
function add(a: string, b: string): string; //ここまで型推論を正確にする意味は？？
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
    //Type Guard - typeofを使うパターン
    //typeofはコンパイルされた後？？
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }

    return a + b;
}
//↑このコードの問題点、typescriptが戻り値を正しく推論できない
//下の戻り値の型推論がstrign | numberになってる
//引数がnumber, numberっだと戻り値はnumberのはず
add('aiu', 'eo');

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log(emp.name);
    //ここでは何でtypeofが使えないのか？？
    //Type Guard - inを使うパターン
    //型定義のプロパティを検証できる？　typeofとの違いは？
    if('privileges' in emp) {
        console.log(emp.privileges);
    } 

    if('startDate' in emp) {
        console.log(emp.startDate);
    }
}

printEmployeeInformation(e1); //Type Guardにより実行できる
// printEmployeeInformation({name: 'Mina', startDate: new Date()})

class Car {
    drive() {
        console.log('車を運転中')
    }
}

class Truck {
    drive() {
        console.log('トラックを運転中')
    }

    loadCargo(amount: number) {
        console.log('積載中' + amount)
    }
}

type Vehicle = Car | Truck; //Union

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    //Type Guard - instanceofのパターン
    //class内のプロパティ検？？？？
    //interfaceの時は使えない？？
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
}

useVehicle(v1);
useVehicle(v2);

//Descriminated Unions 判別可能なUnion型

interface Bird {
    type: 'bird'; //実際の値でない　literal型
    flyingSpeed:number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    // if('flyingSpeed' in animal) {
    //     console.log(animal.flyingSpeed); //interfaceが増えるたびにifを増やさなければいけないのが面倒->Descriminated Unions
    // }

    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }

    console.log('移動速度：' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10}); //ここはなんで{}？


//型キャスト
const p1 = document.querySelector('p'); //ここでは型推論が HTMLParagraphElement | null
const p2 = document.getElementById('paragraph') //ここの型推論は HTMLElement | null

// const userInput = <HTMLInputElement>document.getElementById('userInput')!; //ここの型推論は HTMLElement | null
// const userInput = <HTMLInputElement>document.getElementById('userInput')!; //ここの型推論は HTMLElement | null
//この<>の書き方はReactのJSXと構文がかぶってるからダブってるから避けたほうがいい？ 
const userInput = document.getElementById('userInput')! as HTMLInputElement;
userInput.value = 'aiueo';

//index type 例）なんかしらの入力を受け取る
//どのようなプロパティが事前にわからない->index型が便利？
interface ErrorContainer {
    [prop: string]: string;
} //オブジェクトにしたいからinterfaceを使う？

const errorBag: ErrorContainer = {
    email: '正しいメールアドレスではありません',
    username: '正しい名前ではありません'
}

//Optional Chaining ネストされたプロパティいに安全にアクセスできる、実行時エラーにならない
//なんでこれがバックエンドからデータをフェッチするときに便利？
const fetchedUserData = {
    id: 'ui',
    name: 'Ritsu',
    job: {
        title: 'developper',
        descripttion: 'typescript'
    }
}

console.log(fetchedUserData?.job?.title);

//Null合体演算子
const userInput1 = undefined;
const storedData = userInput1 ?? 'DEFAULT';
// ||との違い,falsyで引っかかるかどうか？
// ||値がfalsyだとすべて引っかかる->DEFAULTを出力？
// ?? null or undefined

console.log(storedData);



