const button = document.getElementById("add-todo").addEventListener("click", ()=>{
    clickAddTodoButton()//関数を入れるのにかっこが必要
    //alert("todoを追加してください")
})

const clickAddTodoButton = () => {
    //入力されたテキストを取得
    const inputText = document . getElementById("input-todo").value.trim()//trimは空白を削除する
    //console.log(inputText) //コンソールログで変数の確認する。（f12で検証する）

    if(inputText){//文字が入力された場合 truthyの意味※！を頭につけると逆転
        document.getElementById("input-todo").value = ""//入力してボタンを押すと入力した文字が消えるコマンド
        //リストのitemになる要素を作成
            const todotext = addtodo(inputText)
    
        //console.log(listItem)
        //ulタグの子要素にliタグを入れる
        document.getElementById("todo-list").appendChild(todotext)//getelementの子要素
        //空白もリストに入ってしまうので・・・ifでtruthy,falsy
    }else{
        alert("todoを追加してください")//条件外の場合（falsyじゃないortruthyでない）
    }//↑入力フィールドを空にする

}

const addtodo =(text) =>{//
    const listItem = document.createElement("li")
    listItem.innerText = text//inputText//liタグのテキストに文字を挿入。listitemのインナーテキストの要素が入る
        //console.log(listItem)

        //削除用のボタンを作成
        const deleteButton = createDeleteButton(listItem)

        listItem.appendChild(deleteButton)

    return listItem//listitemをリターンする

}

const createDeleteButton = (target) =>{
    //ボタンを作成
    const deleteButton = document.createElement("button")
    deleteButton.textContent ="削除"
    deleteButton.id="delete-button"
    deleteButton.addEventListener("click",() =>{
            target.remove()
    })
    return deleteButton
}

//完了ボタン作成。doneに移行※削除と完了への追加
//もどすボタン作成。todoに移行
//編集ボタン。保存。
//