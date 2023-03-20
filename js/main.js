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
      const eachBook = document.querySelectorAll(".each-book-each-audiobest")[i];
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
for (let i = 0; i < labels.length; i++) {
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

/* ------- jQuery ------- */
$(document).ready(function () {
  /* ----- header logo click to top ----- */
  $(".logo-click-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });

  /* ----- example section phrase.json ----- */
  $.getJSON("./json/phrase.json", function (data) {
    const audiobookPhrases = data.audiobook;
    const viewerPhrases = data.viewer;

    // 탭 클릭 시
    $(".tab-item").click(function () {
      const tabId = $(this).attr("data-tab");
      const phrases = tabId === "tab-1" ? audiobookPhrases : viewerPhrases;

      // 1번 버튼에 해당하는 문구 표시
      $(".detail-phrase-first").text(phrases[0].first);
      $(".detail-phrase-second").text(phrases[0].second);

      // 번호 클릭했을 때 해당하는 문구 표시
      $(".click-num li").click(function () {
        const index = $(this).index();
        $(".detail-phrase-first").text(phrases[index].first);
        $(".detail-phrase-second").text(phrases[index].second);
      });
    });

    // 초기에 첫 번째 탭 활성화
    $(".tab-item[data-tab='tab-1']").trigger("click");
  });

  /* ----- example section 큰 tabmenu ----- */
  // 탭 메뉴 클릭 이벤트
  $("ul.tabs-ul li").click(function () {
    const tabId = $(this).attr("data-tab");
    $("ul.tabs-ul li").removeClass("active");
    $(".tab-box").removeClass("active");
    $(this).addClass("active");
    $("#" + tabId).addClass("active");

    // 클릭한 탭 메뉴의 첫 번째 번호와 이미지 활성화
    $("#" + tabId)
      .find(".click-num li")
      .removeClass("active")
      .first()
      .addClass("active");

    $("#" + tabId)
      .find(".images-container")
      .css("transform", "translateX(0)");
    $("#" + tabId)
      .find(".phone-image")
      .removeClass("active")
      .first()
      .addClass("active");
  });

  /* ----- example section 스마트폰 이미지 슬라이드 효과 ----- */
  const clickNums = $(".click-num li");
  const container = $(".images-container");
  let containerWidth;

  function updateContainerWidth() {
    if ($(window).width() <= 768) {
      containerWidth = container.width();
    } else {
      containerWidth = container.width() / 4;
    }
  }

  updateContainerWidth();

  $(window).on("resize", () => {
    updateContainerWidth();
  });

  clickNums.on("click", (event) => {
    const index = $(event.currentTarget).index();
    container.css("transform", `translate(-${index * containerWidth}px)`);
    clickNums.removeClass("active");
    $(event.currentTarget).addClass("active");
  });

  /* ----- ad, story section 광고 비디오 재생 ----- */
  // 광고 1
  $(".play-button-1, .thumbnail-1").click(function () {
    $(".play-button-1").hide();
    $(".thumbnail-1").hide();

    $(".video-1")[0].src += "?autoplay=1";
  });

  // 광고2
  $(".play-button-2, .thumbnail-2").click(function () {
    $(".play-button-2").hide();
    $(".thumbnail-2").hide();

    $(".video-2")[0].src += "?autoplay=1";
  });

  /* ----- qa section accordion ----- */
  $(".accordion-title").click(function () {
    $(this).next().stop().slideToggle();
    $(this)
      .parent()
      .toggleClass("active")
      .siblings()
      .removeClass("active")
      .find(".accordion-content")
      .stop()
      .slideUp();
  });

  /* ----- footer accordion ----- */
  $(".business-info-title").click(function () {
    $(this).next().stop().slideToggle();
    $(this).parent().toggleClass("active");

    if ($(this).parent().hasClass("active")) {
      $(this).text("사업자 정보 닫기");
    } else {
      $(this).text("사업자 정보 펼쳐보기");
    }
  });

  /* ----- books section 스크롤 시 opacity: 1 ----- */
  $(".book-list-wrapper").css("opacity", "0");

  function onScroll() {
    $(".book-list-wrapper").each(function () {
      const targetPosition = $(this).offset().top;
      const userPosition = $(window).scrollTop() + $(window).height();

      if (userPosition > targetPosition) {
        $(this).animate({ opacity: 1 }, 1000);
      } else {
        $(this).css("opacity", "0");
      }
    });
  }

  $(window).scroll(onScroll);

  /* ----- 책 드래그, 스크롤 기능 ----- */
  let startX;
  let scrollLeft;

  // book-list-wrapper를 클릭하면 스크롤
  $(".book-list-wrapper").on("mousedown", function (e) {
    startX = e.pageX - $(this).offset().left;
    scrollLeft = $(this).scrollLeft();
  });

  // 마우스 움직일 때 스크롤 이동 거리 계산
  $(document).on("mousemove", function (e) {
    if (startX) {
      $(".book-list-wrapper").scrollLeft(scrollLeft - (e.pageX - startX));
    }
  });

  // 마우스 놓으면 스크롤 해제
  $(document).on("mouseup", function () {
    startX = null;
  });
});
