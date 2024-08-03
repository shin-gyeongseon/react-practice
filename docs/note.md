### Destructuring assignment
- 변수를 초기화하는 과정에서 선언된 변수명과 전달된 필드명이 동일해야 된다. 
- key 필드의 경우는 중요한 인자라서 이건 전달되지 않습니다. 단어의 제한이 있음

### Side Effect
- local storage 는 브라우져 자원을 의미 

### useEffect 도 결국은 Hook이다
- 참고 
> If the dependency array of React’s useEffect is an empty array, the function for the side-effect is only called once when the component renders for the first time.

2번째 인자가 빈 배열이라면 최초에 한 번만 실행된다. 

- side effect 가 들어가는게 적절할까 생각했다. -> 책에서 말하는 의도는 부작용으로 볼 수 있는 동작들이 생성되었을 때 언급된 작업을 한다는 것이다. 
> In conclusion, using React useEffect Hook instead of managing the side-effect in the (event) handler has made the application more robust. Whenever and wherever the searchTerm state is updated via setSearchTerm, the browser’s local storage will always be in sync with it.

> **useState** is used for values that change **over time**; **useEffect** is used **to opt into the lifecycle of your components to introduce side-effects**. 

useState, useEffect 를 어떤 타이밍에 사용하는게 적절한지 알려준다. 


### Destructuring Assignment 혼돈되었던 부분들 
배열 구조 분해 할당: 변수명은 자유롭게 지정할 수 있으며, 배열의 순서에 따라 값을 할당합니다.
객체 구조 분해 할당: 변수명은 객체의 키와 일치해야 합니다. 필요에 따라 키 이름을 변경할 수 있습니다.

### jsx 에서 반환하는 태그에다가 이벤트를 넣을 때 ⚠️ 주의 
나는 그냥 안에다가 `console.log()` 이런식으로 코드를 넣어서 동작하게 하려고 했는데 이벤트에 들어가는건 함수여야 합니다. 그래서 익명함수를 사용하던 아니면 함수를 만들어서 전달하는게 적절합니다. (은근히 혼돈되는 부분이 많습니다. ㅠㅠ )

### 자식한테 전달하고 싶은 태그를 children 으로 전달한다 ? 
react composition 을 보는데 자식한테 태그 자체를 전달하는 방법을 알게됨. 자식 태그에서 children 파라미터 선언을 통해 부모에서 내려준 태그를 그대로 사용할 수 있다. 이건 신기하네 ?! ㅋㅋㅋ

