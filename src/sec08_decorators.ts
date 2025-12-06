//Decorators -> 一般的にクラスにつける？　そして最終的にはただの関数になるの？

//Targetがクラスなので引数が一つ必要？？
function Logger(logString:string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    return function <T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super(); //オリジナルのコンストラクターを呼び出す？
                console.log('テンプレ表示')
            const hookEL =document.getElementById(hookId);
            if(hookEL) {
                hookEL.innerHTML = template;
                hookEL.querySelector('h1')!.textContent = this.name;
            }

            }
        }
    }
}

//デコレーターはクラスが定義されたときに実行 インスタンス化の時ではない
//デコレーターファクトリーを使うことで引数を受け取れる
//デコレーター内の関数を返す
//デコレーターの実行順序は？
// @Logger('ログ出力中 - Person')
@WithTemplate('<h1>Personオブジェクト</h1>', 'app')
class Person {
    name = 'Ritsu';

    constructor() {
        console.log('Personオブジェクトを作成中…')
    }
}

const pers = new Person(); //そういえばここに()が必要なのは何でだっけ？
console.log(pers);

//デコレーターは必ずクラスが必要だが、必ずしもクラスで実行する必要はない？？
//インスタンスのプロパティに追加するとそのプロトタイプになる？
//スタティックのプロパティに追加するとコンストラクターになる？

function Log(target: any, propatyName: string | Symbol) {
    console.log('プロパティデコレーター');
    console.log(target, propatyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('アクセサーデコレーター');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('メソッドデコレーター');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('パラメーターデコレーター');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if(val > 0) {
            this._price = val;
        } else {
            throw new Error ('不正な価格です')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor;
}
//mehtodデコレーターはpropertydescriptorの設定を値として返せる？

class Printer {
    message = 'Clicked';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

//デコレーターのバリデーション

interface ValidatorConfig{
    [prop: string]: {
        [validatableProp: string]: string[] //['required', 'positive']
    }
}

const registerdValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registerdValidators[target.constructor.name] = {
        ...registerdValidators[target.constructor.name],
        [propName]: ['required'],
    }
}

function Positive(target: any, propName: string) {
    registerdValidators[target.constructor.name] = {
        ...registerdValidators[target.constructor.name],
        [propName]: ['positive'],
    }
}

function validate(obj: any) {
    const objValidatorConfig = registerdValidators[obj.constructor.name];
    if(!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return true;

}


class Course {
    @Required
    title: string;
    @Positive
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', evt => {
    evt.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEL = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEL.value;

    const createdCourse = new Course(title, price);

    if(!validate(createdCourse)) {
        alert('正しくにゅうりょくしてください');
        return;
    }
    console.log(createdCourse);

})