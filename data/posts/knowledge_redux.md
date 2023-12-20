# redux

이전에 배운 context와 유사하다.
다만 context는 prop으로 전달해야하는 값을 전역에서 공유해주는 역활이라면,
redux는 action을 통해 상태값을 관리(추가 제거 등등) 이 가능한 점이 다른 것 같다.
아직 익숙하지 않지만 자주 사용해서 숙달해봐야겠다.

store

```
configStore.jsx
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  //Reducer들
});

const store = createStore(rootReducer);

// store의 값을 사용하려면 Provider의 아래에 위치해야한다.
const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;

```

reducer

```
todo.js
//액션 타입을 선언해두었다.
const LOCAL_KEY = "toDos";
const ADD_TODOS = "toDos/add";
const DELETE_TODOS = "toDos/delete";

//액션 함수 payload를 인자로 받을 수 있다.
export const addToDos = (payload) => {
  return {
    type: ADD_TODOS,
    payload
  };
};

const localToDos = localStorage.getItem(LOCAL_KEY);

const initialState = localToDos ? JSON.parse(localToDos) : [];

//리듀서 함수로 state와 action을 인자로 받는다.
const toDo = (state = initialState, action) => {
  switch (action.type) {
  //action의 타입에 따라 state의 변경 및 다양한 일을 할 수 있다.
    case ADD_TODOS:
      localStorage.setItem(LOCAL_KEY, JSON.stringify([...state, { ...action.payload }]));
      return [...state, { ...action.payload }];

    default:
      return [...state];
  }
};

export default toDo;

```

폴더구조
![](https://velog.velcdn.com/images/peechulchul/post/e3313b95-cf2b-4ad1-8bd7-4728d2071833/image.png)

[#오늘의 에너지](https://www.youtube.com/watch?v=hfyi9cewKe4&list=RDhfyi9cewKe4&start_radio=1)
