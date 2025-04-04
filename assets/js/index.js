//Scroll on top
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const stickyHeader = document.getElementById("nav");
  const logo = document.getElementsByClassName("logo");
  const scrollToTarget = document.querySelectorAll(".scroll-to-target");

  if (scroll < 85) {
    stickyHeader?.classList.remove("stick-fixed");
    stickyHeader?.classList.remove("small-height");
    logo[0]?.classList.remove("small-height");
  } else {
    stickyHeader?.classList.add("stick-fixed");
    stickyHeader?.classList.add("small-height");
    logo[0]?.classList.add("small-height");
  }
});

// Lấy nút scroll
const scrollTopBtn = document.getElementById("scroll-top");
console.log(scrollTopBtn);

const targetElement = document.querySelector("html");
// Thêm sự kiện click vào nút
scrollTopBtn.addEventListener("click", function () {
  // Cuộn trang về đầu
  console.log("click");

  window.scrollTo({
    top: targetElement.offsetTop,

    behavior: "smooth", // Cuộn trang mượt mà
  });
});

// // Nav menu mobile
// const toggleBtn = document.querySelector(".mobile-nav");
// const content = document.querySelector(".inner-nav.desktop-nav");

// toggleBtn.addEventListener("click", function () {
//   toggleBtn.classList.toggle("active");
//   // Kiểm tra nếu max-height hiện tại là 0 (tức là không hiển thị)
//   if (content.style.maxHeight === "0px") {
//     content.style.maxHeight = "calc(-60px + 100vh)"; // Mở phần tử, thay đổi max-height
//   } else {
//     content.style.maxHeight = "0"; // Đóng phần tử, set max-height về 0

//   }
// });
