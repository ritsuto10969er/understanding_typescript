# understanding_typescript
-- Section2: TypeScriptの基本と型
動画10~14

JavaScriptとTypeScriptの型の違い
JavaScript　コード実行時
TypeScript　コンパイル前
*コンパイルとは言語で書かれたソースコードを、実行できる別の形式に変換すること

型推論（変数）
let num1: number
num1 = 1;

型注釈（関数の引数）
function add(num1: number, num2:number, showResult:boolean, resultPhrase:string)

---
動画　15：Object型
基本的には余計な型注釈は避けて、型推論に任せる