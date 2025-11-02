# understanding_typescript
-- Section6: 高度な型
**tsconfig.jsonの変更
  "noUnusedLocals": false,
  "noUnusedParameters": false,
  →'p2' is declared but its value is never read.のエラーが出なくなる
  開発時はtrueにすべき

  高度な型
  ⇒実行前にバグをつぶす、設計意図を型で表す、変更に強いコードにする
  Union Type どれか一つ許可 A or B
  Intersection Type 合成 A and B
  Type Guards 型ごとに分岐 type of / instance of / in
  Type Casting 型を伝えるだけ as ~
  keyof / Indexed Access Types 型のキーと値 keyofとT[K]の組み合わせ
  Conditional Types　if文みたいな感じ

-- Section5: クラスとインターフェース
動画57~71
**抽象クラス 
abstract class クラス名
子クラスへ継承するためのみでインスタンス化(new)できない
具体的なメソッドは不可でメソッドの型のみを設計、子クラスで強制

**静的クラス static
インスタンスでなくクラスそのものに属するメンバー　(new)する必要がない
呼び方 ClassName. staticMember
thisの扱い方の違い
static this -> クラスそのもの
インスタンスメソッド内のthis -> そのメソッドを呼び出したインスタンス

**superとは
親クラスのコンストラクタやメソッドを呼ぶためのキーワード
コンストラクタでの super(...)
メソッドでの super.method()

**getter ans setter
getter: 読み取り時のロジック,
        必ず値を返す、返さない場合 undefined or 例外
setter: 書き込み時のロジック
        基本的に引数は1つ、普通に二つ以上はメソッドにする


-- Section4: 新しい世代のJavaScriptとTypeScript
動画54,55
レストパラメーター（残余引数）
可変長の引数を受け取る仕組み
(...numbers: number[])　→　任意個の引数(number)を渡せる

分割代入(destructuring)
配列の値やオブジェクトのプロパティを個別の変数に展開できる
データの取り出しをより簡単に
const { プロパティ名 } = オブジェクト;

-- Section3: TypeScriptの設定とコンパイラ
動画33,34
Watchモード　プロジェクト全体のコンパイル
*command
tsc --init 最初に初期化　1回のみ　tsconfig.jsonを作成
tsc.tsのファイル全てコンパイル
tsc -w　でwatchmode

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