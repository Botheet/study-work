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
    
        //console.log(listItem) //コンソールログで変数の確認する。（f12で検証する）
        //ulタグの子要素にliタグを入れる
        document.getElementById("todo-list").appendChild(todotext)//getelementの子要素
        //空白もリストに入ってしまうので・・・ifでtruthy,falsy
    }else{ //条件外の場合（falsyじゃないor truthyでない）
        alert("todoを追加してください")
    }//↑ここまで入力フィールドを空にするコマンド&未入力の場合のアラートコマンド

}

const addtodo =(text) =>{//
    const listItem = document.createElement("li")
    listItem.innerText = text//inputText//liタグのテキストに文字を挿入。listitemのインナーテキストの要素が入る
        //console.log(listItem)

        //削除用のボタンを作成
        const deleteButton = createDeleteButton(listItem)
        listItem.appendChild(deleteButton)

        const CompleteButton = createCompleteButton(listItem)
        listItem.appendChild(CompleteButton)

    return listItem//listitemをリターン

}

//削除ボタンを作成
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
//完了ボタンを作成
const createCompleteButton = (target) =>{
    const CompleteButton = document.createElement("button")
    CompleteButton.textContent ="完了"
    CompleteButton.id = "complete-button"
    CompleteButton.addEventListener("click",() =>{
            ActionComplete(target) 
    })

    return CompleteButton
    
}

const ActionComplete = (target)=>{
    target.querySelector("#delete-button").remove() //クエリ⇨（）内の要素を対象とする
    target.querySelector("#complete-button").remove() 　//クエリセレクタはいろんなものを対象と出来るので。。idを取る時は＃が必要
    target.remove()
    document.getElementById("complete-list").appendChild(target) //document(全体から)getelement~の最初に出てきたやつを対象にする
}


//test
//完了ボタン作成。doneに移行※削除と完了への追加
//もどすボタン作成。todoに移行
//編集ボタン。保存。
//test2