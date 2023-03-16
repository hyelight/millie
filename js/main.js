/* ----- books section, fav-books section 정적 데이터 순회 ----- */
function bookInfo(book) {
  return `
    <p class="book-title">${book.title}</p>
    <p class="book-author">${book.author}</p>
    <div class="complete-percent-time-wrapper">
      <img src="img/icon-complete-reading.png" alt="percent와 time 정보" />
      <span class="book-percent-time">${book.percent} &nbsp;| &nbsp;${book.time}</span>
    </div>
  `;
}
function bookInfoOnlyTitleAuthor(book) {
  return `
    <p class="book-title">${book.title}</p>
    <p class="book-author">${book.author}</p>
  `;
}
fetch("../json/books.json")
  .then((res) => res.json())
  .then((data) => {
    // bestseller section
    data.bestseller.forEach((book, i) => {
      const eachBook = document.querySelectorAll(".each-book-each")[i];
      eachBook.style.backgroundImage = `url(${book.image})`;

      const eachInfo = document.querySelectorAll(".a-book-info")[i];
      eachInfo.innerHTML = bookInfo(book);
    });

    // month section
    data.month.forEach((book, i) => {
      const eachBook = document.querySelectorAll(".each-book-each-month")[i];
      eachBook.style.backgroundImage = `url(${book.image})`;

      const eachInfo = document.querySelectorAll(".a-book-info-month")[i];
      eachInfo.innerHTML = bookInfo(book);
    });

    // audiobest section
    data.audiobest.forEach((book, i) => {
      const eachBook = document.querySelectorAll(".each-book-each-audiobest")[
        i
      ];
      eachBook.style.backgroundImage = `url(${book.image})`;

      const eachInfo = document.querySelectorAll(".a-book-info-audiobook")[i];
      eachInfo.innerHTML = bookInfo(book);
    });

    // original section
    data.original.forEach((book, i) => {
      const eachBook = document.querySelectorAll(".each-book-each-original")[i];
      eachBook.style.backgroundImage = `url(${book.image})`;

      const eachInfo = document.querySelectorAll(".a-book-info-original")[i];
      eachInfo.innerHTML = bookInfoOnlyTitleAuthor(book);
    });

    // stock section
    data.stock.forEach((book, i) => {
      const eachBook = document.querySelectorAll(".stock")[i];
      eachBook.style.backgroundImage = `url(${book.image})`;

      const eachInfo = document.querySelectorAll(".first-info")[i];
      eachInfo.innerHTML = bookInfo(book);
    });

    // english section
    data.english.forEach((book, i) => {
      const eachBook = document.querySelectorAll(".english")[i];
      eachBook.style.backgroundImage = `url(${book.image})`;

      const eachInfo = document.querySelectorAll(".second-info")[i];
      eachInfo.innerHTML = bookInfo(book);
    });

    // classic section
    data.classic.forEach((book, i) => {
      const eachBook = document.querySelectorAll(".classic")[i];
      eachBook.style.backgroundImage = `url(${book.image})`;

      const eachInfo = document.querySelectorAll(".third-info")[i];
      eachInfo.innerHTML = bookInfo(book);
    });

    // interior section
    data.interior.forEach((book, i) => {
      const eachBook = document.querySelectorAll(".interior")[i];
      eachBook.style.backgroundImage = `url(${book.image})`;

      const eachInfo = document.querySelectorAll(".fourth-info")[i];
      eachInfo.innerHTML = bookInfo(book);
    });

    // diet section
    data.diet.forEach((book, i) => {
      const eachBook = document.querySelectorAll(".diet")[i];
      eachBook.style.backgroundImage = `url(${book.image})`;

      const eachInfo = document.querySelectorAll(".fifth-info")[i];
      eachInfo.innerHTML = bookInfo(book);
    });
  });

/* ----- 바로 전 태그의 class가 label => 모든 a-book-info 유형 class 태그 margin-top 변경 ----- */
const labels = document.querySelectorAll(".label");
for (let i in labels) {
  const bookInfo = labels[i].nextElementSibling;
  if (
    bookInfo.classList.contains("a-book-info") ||
    bookInfo.classList.contains("a-book-info-month") ||
    bookInfo.classList.contains("a-book-info-audiobook") ||
    bookInfo.classList.contains("a-book-info-original")
  ) {
    bookInfo.style.marginTop = "4px";
  } else {
    bookInfo.style.marginTop = "12px";
  }
}
