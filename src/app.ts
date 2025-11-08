//Generics -- ある意味何か二つを統合したもの？
//型安全性の向上と自動補完のサポート
const names: Array<string> = []; // string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It's done")
    }, 2000);
})
//promiseについては返す型を判定できる

promise.then(data => {
    data.split(' ');
})

//Generic Function
function merge<T extends object, U extends object>(objA: T, objB: U) { //交差型を返り値として推論
    return Object.assign(objA, objB)
}
//T,UのgenericsでmergedObjの型推論がnameとageのプロパティがあることを理解
const mergedObj = merge({name: 'Ritsu'}, {age: 22});
// mergedObj.name;  プロパティnameにアクセスできない 型推論はobjectになっているなんで？
console.log(mergedObj);
//interfaceって何のためにあるんだっけ？
interface Lengthy {
    length: number;
}
//genericsは型は厳格に指定しないけど一定の制限を設けるとき？
function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = '値がありません';
    if(element.length > 0 ) {
        descriptionText = '値は' + element.length + 'です。';
    }
    return [element]
}

console.log(countAndDescribe("おつかれさまです"))

function extractAndCOnvert<T extends object, U extends keyof T> (obj: T, key: U) {
    return 'value: ' + obj[key];
}

extractAndCOnvert({name: 'Ritsu'}, 'name');

//このクラスでは型が統一されていることのみを保証したい
class DataStrage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item:T) {
        this.data.push(item);
    }

    removeItem(item:T) {
        if(this.data.indexOf(item) === -1) {
            return;
        }
        
        this.data.splice(this.data.indexOf(item), 1); //.spliceってなんだっけ？
    }

    getItems() {
        return [... this.data];
    }
}

const textStrage = new DataStrage<string>();
textStrage.addItem('data1');
textStrage.addItem('data2');
textStrage.addItem('data3');
textStrage.removeItem('data2');

console.log(textStrage.getItems());

// const objStrage = new DataStrage<object>(); //objectはリファレンス型だからうまくいかない？？
// const obj1 = {name: 'Ritsu', age: 22};
// objStrage.addItem(obj1);
// objStrage.addItem({name: 'Mina', age: 20});
// objStrage.removeItem(obj1);
// console.log(objStrage.getItems());
//このクラスはプリミティブ用だからリファレンス用のクラスを作成する方が良い

//Genericsのユーティリティ

interface courseGoal{
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, completeUntil: Date): courseGoal {
    let courseGoal:Partial<courseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal as courseGoal;
}

//PartialはcourseGoalで必要なプロパティをすべてoptionalにする？

const people: Readonly<string[]> = ['anna', 'max'];
// people.push('manu'); <-操作できなくする


//Generics or Union これらの違いは？使い分け方は？