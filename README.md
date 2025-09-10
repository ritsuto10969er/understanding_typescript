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
動画15：Object型
基本的には余計な型注釈は避けて、型推論に任せる

---
動画17：Array型
型推論が強力に働くのでこれも基本的には推論にまかせてOK
const scores = [99, 80, 95];        // → number[]

---
動画18：Tuple型
TypeScript独自の型　配列に長さと型を指定したバージョン
let user ['string', 'number']
user = ['Ritsu', 22] -> 正解
user = [22, 'Ritsu'] -> 間違い　逆

---
動画19：enum型
列挙型
JavaScriptになくTypeScriptのみ
関連する定数をひとまとめにできる　可読性、型安全性

---
動画19：any型
何でも入る柔軟な型
使用は避ける
TypeScriptが用意した本当にわからないときの最終手段