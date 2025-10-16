//interfaceで関数型も定義できる
// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

//interface -> オブジェクトがどんな形なのか定義するもの
//objectの設計図でなく、単にオリジナルの型を定義するのみ？
interface Named {
    readonly name?: string; //readonlyのみ
}

//interfaceは複数継承可能、最終的にはマージされるから？
interface Greetable extends Named {
    greet(phrase: string): void; //voidって何だっけ？
    outputNanme?: string; //optionalのプロパティ
}

class Person implements Greetable {
    name?: string;
    age = 22;
    constructor(n?: string) { //costructorの引数もoptionalにすることが可能
        if(n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if(this.name) {
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi!')
        }
        
    }

}

let user1: Greetable;

user1 = new Person();

// user1 = {
//     name: 'Ritsu',
//     // age: 22,
//     greet(phrase: string) {
//         console.log(phrase + " I'm " + this.name);
//     }
// }

//このuser1はPersonのインターフェースを満たす形である→OK
user1.greet('Hello!');
console.log(user1)
//なぜインターフェースが便利なのか？
//共通の機能（インターフェース）を複数のクラスに強制的に持たせることができる？？
add(4, 5);