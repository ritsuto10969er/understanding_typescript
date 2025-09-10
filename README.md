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
動画20：any型
何でも入る柔軟な型
使用は避ける
TypeScriptが用意した本当にわからないときの最終手段

---
動画21、22：Union & Literal型
Union-複数の型のいずれか
Literal-具体的な１つの値そのものを型とする

よく使うのがリテラルユニオン（Enumとも近い）

今回のコード
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-nunmber" | "as-string"
)

---
動画22：型エイリアス
自分自身の型を設定
型の名前を説明的にし可読性を上げる

一番上で一回定義すればいいので再利用性も高い
例）type 型の名前 = まとめたい型

---
動画25~2：：function型
基本
引数と戻り値の型をつける→何を受け取り何を返すかっていうのを明確に
　　　Void型　これはTS的に無視していい　戻り値がない関数に使う

変数に代入
代入先にどのような関数を入れるか型で制限

コールバック関数：少し特殊
引数は厳格に、戻り値はチェック緩め（Void）
→コールバック関数の目的は処理の呼び出しであることがほとんど、結果を返すことは目的ではない
なので柔軟性を維持することが重要

---
動画28,29：unknown, never型
両方あまり使わないけど知っとくと便利な時があるかも

unknown 
型が何になるかわからないとき
「値はくるけど型がわからない」時に使う安全な型
any との違い：
  any: 何でも代入・操作できる（型チェックをスルー）
  unknown: 使う前に型チェックを強制される→ランタイム上で型チェックをしなければならない

never
絶対に戻り値を返さない関数につける型
neverになるものでもtypescriptはvoidと推測
これを明示的にneverとすることで可読性が上がる
void との違い：
  void: 「戻り値はない」けど関数は最後まで実行される。
  never: 「関数が正常終了しない」＝絶対に戻り値が返らない。