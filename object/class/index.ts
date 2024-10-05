// クラス
class Person { }
const person = new Person();
console.log(person) // Person {}

// コンストラクタ => クラスを new したときに実行される関数
class Person2 {
  constructor(name: string) {
    console.log(`${name}です`)
  }
}
new Person2("Alice")

// フィールド
class Person3 {
  name: string | undefined;
}
const alice1 = new Person3();
alice1.name = "Alice";
console.log(alice1) // Person3 { name: 'Alice' }

/// コンストラクタを用いたフィールドの初期化
class Person4 {
  name: string;

  constructor() {
    this.name = "Alice"
  }
}

/// コンストラクタに引数を持たせてフィールドを動的に
class Person5 {
  name: string;

  constructor(personName: string) {
    this.name = personName
  }
}
const alice2 = new Person5("三苫");
console.log(alice2) // Person5 { name: '三苫' }