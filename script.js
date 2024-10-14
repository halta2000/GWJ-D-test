// ゲームのスタート
function startGame() {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('question1').classList.remove('hidden');
}

// 位置の確認
function verifyLocation() {
    // ここでGPSの位置判定ロジックを入れる（仮に正解とする）
    const correct = Math.random() > 0.5;  // ランダムで正解か不正解を判定（テスト用）
    
    if (correct) {
        alert('正解です！次のクエストへ進みます。');
        nextQuestion();
    } else {
        showHint();
    }
}

// 次のクエストへ
function nextQuestion() {
    const currentPage = document.querySelector('.page:not(.hidden)');
    currentPage.classList.add('hidden');
    
    if (currentPage.id === 'question1') {
        document.getElementById('question2').classList.remove('hidden');
    } else if (currentPage.id === 'question2') {
        document.getElementById('question3').classList.remove('hidden');
    } else {
        document.getElementById('result').classList.remove('hidden');
    }
}

// ヒントを表示
function showHint() {
    const currentPage = document.querySelector('.page:not(.hidden)');
    const hint = currentPage.querySelector('.hint');
    hint.classList.remove('hidden');
}

// ゲームのリスタート
function restartGame() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('intro').classList.remove('hidden');
}
