const usernameInput = document.getElementById("username")
const clickBtn = document.getElementById("searchbtn");
const resultArea = document.getElementById("result");

clickBtn.addEventListener("click", clicksearch);
function clicksearch() {
    const username = usernameInput.value.trim();
    if (!username) {
        resultArea.innerHTML = `ユーザー名を入力してください。`;
        return;
    }
    console.log("取得したユーザー名:", username);
    const url = `https://api.github.com/users/${username}`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`ユーザーが見つかりませんでした。`);
            }
            return response.json();
        }
        )
        .then(date =>
            resultArea.innerHTML =
            `<p>ユーザーID：${date.login}</p>
            <p>ユーザー名：${date.name}</p>
            <p>フォロワー数：${date.followers}</p>
            <p>公開リポジトリ数：${date.public_repos}</p>
            <img src=${date.avatar_url} alt ="アイコン">`)
        .catch(error =>
            resultArea.innerHTML =
            error.message
        )
}





// HTML要素への参照を取得します（入力欄、ボタン、表示領域）。
// ボタン要素にイベントリスナーを設定し、クリックされた際に特定の関数を実行するようにします。
// イベントリスナーで実行する関数を作成します。この関数内で以下の処理を行います。
// 入力欄からユーザー名を取得します。
// GitHub APIのエンドポイント（https://api.github.com/users/{ユーザー名}）を組み立てます。
// fetch APIを使って、GitHub APIにリクエストを送信します。
// APIからのレスポンスを処理します（JSON形式で取得）。
// 取得したユーザー情報をHTMLの表示領域に表示します。ユーザー名、名前、フォロワー数、
// 公開リポジトリ数、プロフィール画像
// エラーハンドリングを行います（APIリクエストの失敗など）。





