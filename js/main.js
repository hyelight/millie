/* ----- books section, fav-books section 정적 데이터 순회 ----- */
function bookInfo(book, includePercentTime = true) {
  const timeInfo = includePercentTime
    ? `
      <div class="complete-percent-time-wrapper">
        <img src="img/icon-complete-reading.png" alt="percent와 time 정보" />
        <span class="book-percent-time">${book.percent} &nbsp;| &nbsp;${book.time}</span>
      </div>
    `
    : "";
  return `
    <p class="book-title">${book.title}</p>
    <p class="book-author">${book.author}</p>
    ${timeInfo}
  `;
}

function putIntoBookFrame(books, bookImages, infoOfBooks, infoIncludeOrNot) {
  books.forEach((book, i) => {
    const eachBook = document.querySelectorAll(bookImages)[i];
    eachBook.style.backgroundImage = `url(${book.image})`;

    const eachInfo = document.querySelectorAll(infoOfBooks)[i];
    eachInfo.innerHTML = infoIncludeOrNot(book);
  });
}

fetch("json/books.json")
  .then((res) => res.json())
  .then((data) => {
    // bestseller section
    putIntoBookFrame(
      data.bestseller,
      ".each-book-each",
      ".a-book-info",
      bookInfo
    );

    // month section
    putIntoBookFrame(
      data.month,
      ".each-book-each-month",
      ".a-book-info-month",
      bookInfo
    );

    // audiobest section
    putIntoBookFrame(
      data.audiobest,
      ".each-book-each-audiobest",
      ".a-book-info-audiobook",
      bookInfo
    );

    // original section
    putIntoBookFrame(
      data.original,
      ".each-book-each-original",
      ".a-book-info-original",
      (book) => bookInfo(book, false)
    );

    // stock section
    putIntoBookFrame(data.stock, ".stock", ".first-info", bookInfo);

    // english section
    putIntoBookFrame(data.english, ".english", ".second-info", bookInfo);

    // classic section
    putIntoBookFrame(data.classic, ".classic", ".third-info", bookInfo);

    // interior section
    putIntoBookFrame(data.interior, ".interior", ".fourth-info", bookInfo);

    // diet section
    putIntoBookFrame(data.diet, ".diet", ".fifth-info", bookInfo);
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
  /* ----- 이미지 최적화를 위한 loading="lazy" 추가 ----- */
  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    image.setAttribute("loading", "lazy");
  });

  /* ----- header logo click to top ----- */
  $(".logo-click-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });

  /* ----- example section phrase.json ----- */
  $.getJSON("json/phrase.json", function (data) {
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

  /* ----- header section hamburger toggle ----- */
  const $hamburgerBtn = $(
    '<button class="hamburger-menu" type="button"><span class="hamburger-line"></span><span class="hamburger-line"></span><span class="hamburger-line"></span></button>'
  );
  $("header").prepend($hamburgerBtn);

  $("nav ul").append(
    '<li class="customer-service"><a href="#none">고객센터</a></li>'
  );

  $(window)
    .on("resize", function () {
      $("nav ul .customer-service").toggle($(window).width() <= 768);
    })
    .resize();

  $hamburgerBtn.on("click", function () {
    $(this).toggleClass("open");
    $("nav ul").stop().slideToggle();
  });

  $(window).on("resize", function () {
    if ($(window).width() > 768) {
      $hamburgerBtn.removeClass("open");
      $("nav ul").removeAttr("style");
    }
  });
});
