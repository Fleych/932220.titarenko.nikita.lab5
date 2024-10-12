const title = {
    article1: 'Новость 1', 
    article2: 'Новость 2', 
    article3: 'Новость 3',
}

const text = {
    article1: 'Новость 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!',
    article2: 'Новость 2: Lorem ipsum, dolor sit amet consectetur adipisicing elit. A alias.',
    article3: 'Новость 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!'
}

function open_popup_window(article) {
    let news_title = document.getElementById('news-title');
    let news_text = document.getElementById('news-text');
    let popup_window = document.getElementById('popup-window');
    news_title.innerText = title[article];
    news_text.innerText = text[article];
    popup_window.style.visibility = 'visible';
}

function close_popup_window() {
    let popup_window = document.getElementById('popup-window');
    popup_window.style.visibility = 'hidden';
}