# 개요

타입스크립트는 자바스크립트가 가진 동적타입으로인해 발생할 수 있는 오류를 예방하기위해 쓰이는 언어이며 부가적으로 코드인텔리전스를 기능을 통한 자동완성 및 변수명 추천을 통해 생상선을 높일 수 있는 것 같다.

# 자주쓰는 유틸

### Pick<T,K>

T에서 프로퍼티 K의 집합을 선택해 타입을 구성합니다.

### Omit<T,K>

T에서 모든 프로퍼티를 선택한 다음 K를 제거한 타입을 구성합니다.

### Readonly<T>

T의 모든 프로퍼티를 읽기 전용(readonly)으로 설정한 타입을 구성합니다, 즉 생성된 타입의 프로퍼티는 재할당할 수 없습니다.

### 그외

https://typescript-kr.github.io/pages/utility-types.html

# 반복숙달이 필요한부분

- 라이브러리를 사용할때 라이브러리마다 타입스크립트사용법을 공식문서에서 참고해야한다 라이브러리에서 지원하는 타입을 적극 이용할것.
- 제너럴에 대한 이해도가 부족..

# 커스텀 훅 생성시 예시

생성

```
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IuseLocalStorage<T> {
  key: string;
  initialValue: T;
}

export default function useLocalStorage<T>({ key, initialValue }: IuseLocalStorage<T>): {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
} {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue === null) {
      return initialValue;
    } else {
      return JSON.parse(jsonValue);
    }
  });

  useEffect(() => {
    console.log(value);
    localStorage.setItem(key, JSON.stringify(value));
    const jsonValue = localStorage.getItem(key);
    console.log(jsonValue);
  }, [key, value]);

  return { value, setValue };
}

```

사용

```
const { value: localToDo, setValue: setLocalToDo } = useLocalStorage<Itodo[]>({ key: "ToDos", initialValue: [] });

```
