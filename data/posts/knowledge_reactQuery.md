# 주요키워드

## Query

- get요청과 비슷한 느낌으로 생각하면 된다고 배웠다.

## Mutation

- 데이터를 변경하는 것으로 CRUD중 CUD에 해당한다고 배웠다.

## Query Invalidation

- 가져온 Query를 최신값으로 갱신시키는 개념? 으로 배웠다.

# 사용법

query의 기능이 필요한 컴포넌트 최상위에 아래와같이 쿼리클라이언트프로바이더를 달아주면 된다.

```
const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  );
};
```

비동기 함수의 값을 가져올때는 useQuery(쿼리키,비동기함수)를 호출하면
자동으로 로딩과 에러상태까지 생성해준다.

```
export const getToDos = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/toDos`);
  return response.data;
};

 const { data: todos, isLoading, isError } = useQuery("toDos", getToDos);

```

값의 수정이 필요할경우 useMutation(비동기함수,{비동기함수의 결과값에따라 실행할 함수를 키 밸뷰형식})으로 사용이 가능하다.

```
  const queryClient = useQueryClient();


  onSuccess: () => {
      queryClient.invalidateQueries("toDos");
      console.log("성공하였습니다.");
    },
    onError: () => {
    console.log("실패하였습니다..");
    }
```

queryClient.invalidateQueries("toDos")는
해당 키에 있는 쿼리값을 최신화 시켜주는 기능인 것 같다.

이전에 firebase를 사용할때 onSnapshot을 통해 특정 컬렉션에 값의 변경을 감지하고 변경을 감지 시 수동으로 값을 넣어줬던 기억이있는데 useQuery는 익숙해지기만 하면 매우 편할 것 같다.

[오늘의 에너지](https://www.youtube.com/watch?v=I0WW0e-HRuM&list=RDGMEMSEvw8hQsBZkGYx3gT2QBwgVMS_R0FwqjnDI&index=2)
