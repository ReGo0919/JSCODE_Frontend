const logo = document.querySelector("#logo");
// logo 변수를 생성하고 CSS포함, 문서 전체(document)에서 id(#)가 logo인 요소를 찾아 리턴 시키고 logo 변수에 할당.

setTimeout(() => {
  logo.classList.add("show");
  // 자바스크립트의 setTimeout 함수를 logo(원래 CSS 파일의 #logo를 참조하는 변수)의 classList에 show라는 클래스 이름으로 저장함.
}, 2000);
// 2000은 setTimeout 함수의 기본 단위 시간이 밀리초이기 때문임.
