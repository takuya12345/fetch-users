// DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// クリックした際に名前が追加される
button.addEventListener("click", async function() {
  // データのやり取り
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  
  // DOM
  users.forEach(function(user) {
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
  });
});

// ロードした際に名前が表示される
window.addEventListener("load", async function() {
  // データのやり取り
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  
  // DOM操作
  users.forEach(function(user) {
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
  });
});


// for文
// for (let index = 0; index < users.length; index++) {
//   const user = users[index];
//   const list = document.createElement("li");
//   list.innerText = user.name;
//   lists.appendChild(list);
// }

// if文
// if (user.id <= 5) {
//   const list = document.createElement("li");
//   list.innerText = user.name;
//   lists.appendChild(list);
// }


/**
 * リファクタリング
 */
// // 関数（メソッド）
// function addList(user) {
//   // liタグを追加
//   const list = document.createElement("li");
//   // liタグのテキストに名前を代入
//   list.innerText = user.name;
//   // 指定された親ノードの子ノードリストの末尾にノードを追加名前を追加
//   lists.appendChild(list);
// }

// async function getUsers() {
//   // dataのやり取り（API取得して、jsonで返す）
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   return users;
// }

// async function listUsers() {
//   const users = await getUsers();
//   // 取得したユーザーのAPIをforEachで展開する
//   users.forEach(addList);
// }

// イベント
// 画面をロードした際に、APIを取得
// window.addEventListener("load", listUsers);

// // ボタンをクリックした際に、APIを取得する
// button.addEventListener("click", listUsers);