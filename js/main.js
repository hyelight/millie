/* ----- books section 정적 데이터 순회 ----- */
// bestseller section
fetch("../JSON/books.json")
  .then((res) => res.json())
  .then((data) => {
    data.bestseller.forEach((book, i) => {
      const eachBook = document.querySelectorAll(".each-book-each")[i];
      eachBook.style.backgroundImage = `url(${book.image})`;

      const eachInfo = document.querySelectorAll(".a-book-info")[i];
      eachInfo.innerHTML = `
        <p class="book-title">${book.title}</p>
        <p class="book-author">${book.author}</p>
        <div class="complete-percent-time-wrapper">
          <img src="img/icon-complete-reading.png" alt="percent와 time 정보" />
          <span class="book-percent-time">${book.percent} &nbsp;| &nbsp;${book.time}</span>
        </div>
      `;
    });

    // month section
    data.month.forEach((book, i) => {
      const eachBook = document.querySelectorAll(".each-book-each-month")[i];
      eachBook.style.backgroundImage = `url(${book.image})`;

      const eachInfo = document.querySelectorAll(".a-book-info-month")[i];
      eachInfo.innerHTML = `
        <p class="book-title">${book.title}</p>
        <p class="book-author">${book.author}</p>
        <div class="complete-percent-time-wrapper">
          <img src="img/icon-complete-reading.png" alt="percent와 time 정보" />
          <span class="book-percent-time">${book.percent} &nbsp;| &nbsp;${book.time}</span>
        </div>
      `;
    });

    // audiobest section
    data.audiobest.forEach((book, i) => {
      const eachBook = document.querySelectorAll(".each-book-each-audiobest")[
        i
      ];
      eachBook.style.backgroundImage = `url(${book.image})`;

      const eachInfo = document.querySelectorAll(".a-book-info-audiobook")[i];
      eachInfo.innerHTML = `
        <p class="book-title">${book.title}</p>
        <p class="book-author">${book.author}</p>
        <div class="complete-percent-time-wrapper">
          <img src="img/icon-complete-reading.png" alt="percent와 time 정보" />
          <span class="book-percent-time">${book.percent} &nbsp;| &nbsp;${book.time}</span>
        </div>
      `;
    });

    // original section
    data.original.forEach((book, i) => {
      const eachBook = document.querySelectorAll(".each-book-each-original")[i];
      eachBook.style.backgroundImage = `url(${book.image})`;

      const eachInfo = document.querySelectorAll(".a-book-info-original")[i];
      eachInfo.innerHTML = `
        <p class="book-title">${book.title}</p>
        <p class="book-author">${book.author}</p>
      `;
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
