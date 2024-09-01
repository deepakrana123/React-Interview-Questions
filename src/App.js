// import AddTodoList from './AddTodoList';
import "./App.css";
// import {useCallback,useState} from "react"
// import InfiniteScroll from './InfiniteScroll';
// import axios from "axios";
// import {dataTodo} from "./data"
// import Todo from './todo';
// import { useSelector } from 'react-redux';
// import EmiCalculator from './EmiCalculator';
// import Typehead from './Typehead';
// import ItemList from './Item';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
function App() {
  // const [Query,setQuery]=useState("")
  // const transformData=(data)=>data.results

  // const dataPromise=async(query,signal)=> await fetch(`https://swapi.dev/api/people?search=${query}`,{signal});

  // const handleInput=useCallback((e)=>{
  //   setQuery(e.target.value)
  // })
  // const getData=()=>{

  // }

  const TicTacToe = lazy(() => import("./TicTacToe/TicTacToe"));
  const Password = lazy(() => import("./Password/Password"));
  const Time = lazy(() => import("./Time/Time"));
  const ProgressBar = lazy(() => import("./ProgressBar/ProgressBar"));
  const Pagination = lazy(() => import("./Pagination/Pagination"));
  const Form = lazy(() => import("./From/From"));
  const Date = lazy(() => import("./Date/Date"));
  const Stopwatch = lazy(() => import("./Stopwatch/Stopwatch"));
  const CountDown = lazy(() => import("./CountDown/CountDown"));
  const ReactHooks = lazy(() => import("./ReactHooks/ReactHooks"));
  const InfiniteScroll = lazy(() => import("./InfiniteScroll/InfiniteScroll"));
  const ConstructorPattern = lazy(() => import("./ConstructorPattern/constructorPattern"));
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="tictactoe"
            element={
              <Suspense>
                <TicTacToe />
              </Suspense>
            }
          />
          <Route
            path="passwordgenrator"
            element={
              <Suspense>
                <Password />
              </Suspense>
            }
          />
          <Route
            path="infiniteScroll"
            element={
              <Suspense>
                <InfiniteScroll />
              </Suspense>
            }
          />
          <Route
            path="time"
            element={
              <Suspense>
                <Time />
              </Suspense>
            }
          />
          <Route
            path="progressBar"
            element={
              <Suspense>
                <ProgressBar />
              </Suspense>
            }
          />
          <Route
            path="pagination"
            element={
              <Suspense>
                <Pagination />
              </Suspense>
            }
          />
          <Route
            path="form"
            element={
              <Suspense>
                <Form />
              </Suspense>
            }
          />
          <Route
            path="date"
            element={
              <Suspense>
                <Date />
              </Suspense>
            }
          />
          <Route
            path="countStop"
            element={
              <Suspense>
                <Stopwatch />
              </Suspense>
            }
          />
          <Route
            path="countDown"
            element={
              <Suspense>
                <CountDown />
              </Suspense>
            }
          />
          <Route
            path="reactHooks"
            element={
              <Suspense>
                <ReactHooks />
              </Suspense>
            }
          />
          <Route
            path="contructor"
            element={
              <Suspense>
                <ConstructorPattern />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>

      {/* <TicTacToe/> */}
      {/* <Password/>  */}
      {/* <div className="hii">
          <h1>Hii</h1>
          {data && data.todos && data.todos.map((item)=>(
            <Todo item={item} key={item.id}/>
        ))}
       </div>
       <AddTodoList/> */}
      {/* <EmiCalculator/> */}
      {/* <Typehead
          id="personname"
          name="personname"
          label="Enter Person Name"
          placeholder="Enter your favourite star war charcater"
          autoComplete={true}
          maxLimit="5"
          styles={{
            label:"",
            input:""
          }}
          debounceWait={500}
          listBox={(item)=><ItemList item={item}/>}
          noItemMessage={()=><div>Sorry no person found</div>}
          errorMessage={()=><div>Something made wrong</div>}
          transformData={transformData}
          dataPromise={dataPromise}
       /> */}

      {/* 
     <input type="text" value={Query} onChange={handleInput}/>
    <InfiniteScroll
       renderListItem={""}
       getData={getData}
       listData={""}
       query={Query}
    />
  */}
    </div>
  );
}

export default App;
