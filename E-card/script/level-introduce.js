const images = [
  {
    src: "../public/img/main_img_01.png",
    title: "일상 회화",
    subtitle: "일상에서 자주 사용하는 짧은 표현과 문장들",
  },
  {
    src: "../public/img/main_img_02.png",
    title: "상황별 대화",
    subtitle: "쇼핑, 여행, 레스토랑 등 다양한 상황에서의 대화연습",
  },
  {
    src: "../public/img/main_img_03.png",
    title: "비즈니스 영어",
    subtitle: "비즈니스 상황에서 사용하는 영어, 발표 및 면접 연습",
  },
]

let currentIndex = 0

function updateContent() {
  const imageElement = document.getElementById("main-image")
  const titleElement = document.querySelector(".overlay-title-text")
  const subtitleElement = document.querySelector(".overlay-subtext")

  // 다음 콘텐츠로 변경
  currentIndex = (currentIndex + 1) % images.length // 순환
  const nextContent = images[currentIndex]

  // 이미지 및 텍스트 업데이트
  imageElement.src = nextContent.src
  titleElement.textContent = nextContent.title
  subtitleElement.textContent = nextContent.subtitle
}

// 4초마다 업데이트
window.onload = () => {
  setInterval(updateContent, 4000)
}
