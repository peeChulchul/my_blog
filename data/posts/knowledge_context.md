# Context

리엑트 훅, 최적화를 배우고 난 후 전역 상태관리를 배우기 시작했다.
상위 컴포넌트에서 하위컴포넌트로 어떤 값이나 상태 업데이트를 함수를 전달할때
복잡하게 여러 컴포넌트를 거쳐서 전달해야하는 경우를 해결하기 위해 사용한다.

context를 생성하고 해당 context에서 관리하는 값을 사용할 컴포넌트들을
contextProvider의 children으로 전달하고 provider의 children들은 useContext 를 사용하여 값에 접근할 수 있다.
간편하게 사용하기 위해 다양한 패턴이 있겠지만 아래의 패턴이 제일 눈에 익고 편해보여서 가져왔다.

유틸함수를 자주 만들어보고 훅화도 자주 해봐야겠다.
참고로 컨텍스트를 사용할때 provider안에있는 children들은 context의 값이 변경될때 모두 리랜더링 된다는점을 기억해야겠다.

```
import { createContext, useState, useContext } from "react";

// createContext
const Context = createContext("Default Value");
const UpdateContext = createContext({
   setDefaultValue("new Value");
});

// export useContext
export const useDefaultContext = () => useContext(Context);
export const useDefaultContextUpdate = () => useContext(UpdateContext);

// export Provider
export const ContextProvider = ({ children }) => {
  const [defaultValue, setDefaultValue] = useState("");

  const updateContext = () => {
    setDefaultValue("new Value");
  };

  return (
    <Context.Provider value={defaultValue}>
      <UpdateContext.Provider value={updateContext}>{children}</UpdateContext.Provider>
    </Context.Provider>
  );
};

```

[#오늘의 에너지](https://www.youtube.com/watch?v=5DeOSLNbhfg)
