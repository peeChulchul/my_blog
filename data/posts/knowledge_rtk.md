# 스토어

- 기존 방법
  combineReducers로 리듀서를 묶어준다음 createStore에 할당한다.

```
const rootReducer = combineReducers({
  modulesLetters
});

const store = createStore(rootReducer);
```

- 툴킷 사용시
  configurStore에 있는 객체에 있는 reducer 키의 값으로 넣어주면 된다.
  리듀서 말고도 다른 옵션도 존재한다.

```
const store = configureStore({
  reducer: {
    todosSlice
  }
});
```

# 리듀서 및 액션

- 기존 방법
  액션 타입을 변수할당하고 액션 함수를 생성하여 export해서 사용처에서 dispatch해서 사용
  리듀서의 경우 스위치문을 통해 액션함수의 타입에 따라 값을 return하여 상태관리를 하였다.

```
const DELETE_LETTER = "delete/letter";

export const deleteLetter = (paylod) => {
  return {
    type: DELETE_LETTER,
    paylod
  };
};

export const modulesLetters = (state = localLetters, action) => {
  switch (action.type) {
    case DELETE_LETTER: {
      const newState = state.filter((letter) => letter.id !== action.paylod);
      localStorage.setItem(LOCAL_KEY, JSON.stringify(newState));
      return newState;
    }
    default: {
      return state;
    }
  }
};
```

\*툴킷 사용

createSlice에 액션로직이 통합되었다.
reducers에 있는 키값으로 자동으로 액션함수가 생성된다.
(reducers에 있는 액션 함수들은 void를 리턴해야한다 (값을리턴하면안된다)
추가로 immer라이브러리가 포함되어있어 불변성을 고려하지않고 값을 업데이트 및 수정할 수 있다.)

```

const toDosSlice = createSlice({
  name: "toDosSlice",
  initialState,
  reducers: {
    getToDos: (state, action) => {}
  },
});

export const toDosSliceActions = toDosSlice.actions;

```

# 미들웨어

createAsyncThunk를 통해 thunk미들웨어 생성
첫번째 인자는 이름 , 두번째 인자는 콜백함수다.
콜백함수는 페이로드와 thunkapi를 갖는다.

동작의 완료상태에 따라 thunkAPI에서 제공하는 메서드를 사용하여 값을 리턴해줘야한다.
fulfillWithValue,rejectWithValue, 혹은 dispatch도 제공한다.

extraReducers객체내부에서 관리된다.
builder라는 인자에 addCase메서드를 사용하여 첫번째 인자로 미들웨어의 리턴 상태값을 두번째 인자는 일반리듀서와 동일하게 상태관리 관련 콜백함수를 지원한다.

```

export const __getToDos = createAsyncThunk(GET_TODOS, async (payload, thunkAPI) => {
  try {
    const response = await instance.get("todos");
    console.log(response);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const toDosSlice = createSlice({
  name: "toDosSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getToDos.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(__getToDos.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.todos = actions.payload;
      })
      .addCase(__getToDos.rejected, (state, actions) => {
        state.isLoading = true;
        state.error = actions.payload;
      })
      .addDefaultCase((state, action) => {});
  }
});

```

[오늘의 에너지](https://www.youtube.com/watch?v=k5mX3NkA7jM)
