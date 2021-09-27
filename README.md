# vanilla-counter

A simple counter in Vanilla JS

## 요구 사항

- `Counter` 클래스를 별도의 파일 모듈로 구현한다.
- `new counter` 버튼을 클릭하면 새로운 `Counter` 인스턴스가 생성된다.
- 각 카운터는 독립적으로 증가, 감소, 리셋된다.
- 로컬 스토리지에 카운터 정보를 저장하여 데이터를 보존한다.

## 새롭게 배운 것

- Vanilla JS에서 처음 클래스를 사용해보았다.
- 클래스의 getter와 setter ([MDN 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/get))
  - 함수 앞에 `get` 또는 `set` 키워드를 사용하여 유사 프로퍼티(pseudo-property)를 만들 수 있다.
- `Array.prototype.filter()`는 호출되는 배열을 변화시키지 않는다.

## 할 일

[x] 객체 타입의 상태를 immutable하게 관리하는 연습 ([참고](https://sustainable-dev.tistory.com/156))
[x] 이벤트 위임 개념을 사용하여 이벤트 리스너 리팩토링
[x] 모든 카운터를 삭제하는 clear 버튼 만들기
[ ] 모든 카운터를 한꺼번에 컨트롤하는 +1, 0, -1 버튼 만들기
[ ] 코드 리뷰 & 리팩토링

## 의문점

- 상태 + 클래스를 어떻게 구현해야 하는지 잘 모르겠다.

> 보통 상태는 최상위 부모나 따로 만든 스토리지에서 관리하는데, 클래스를 만드니까 다 꼬인 것 같은 느낌..?
