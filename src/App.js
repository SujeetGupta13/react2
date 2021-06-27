import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetList from './http/GetList';
import PostForm from './http/PostForm';
import HookCounter from './hooks/1useStateHooks/HookCounter';
import HookCounterWithPrevState from './hooks/1useStateHooks/HookCounterWithPrevState';
import ClassWithLifeCycleMethods from './hooks/2useEffectHooks/ClassWithLifeCycleMethods';
import UseEffectHook from './hooks/2useEffectHooks/UseEffectHook';
import ComponentC from './hooks/3useContextHooks/ComponentC';
import CounterOne from './hooks/4userReducer/useReducerWithSimpleStateAndAction/CounterOne';
import ParentComponent from './hooks/5useCallbacHooks/ParentComponent';
import Counter from './hooks/6useMemoHooks/Counter';
import FocusInput from './hooks/7useRefHooks/FocusInput';
import DocTitleOne from './hooks/8customHooks/DocTitleOne';
import DocTitleTwo from './hooks/8customHooks/DocTitleTwo';
import GlobalStateManagement from './hooks/4userReducer/useReducerWithUseContextForGlobalStateManagement/GlobalStateManagement';
import DataFetching from './hooks/2useEffectHooks/fetchingDataUsingUseEffect/DataFetching';
import CounterTwo from './hooks/4userReducer/useReducerWithComplexStateAndAction/CounterTwo';
import CounterThree from './hooks/4userReducer/useReducerWithMultipleUseReducer/CounterThree';
import DataFetchingOne from './hooks/4userReducer/fetchingDataUsingUseReducer/DataFetchingOne';
import DataFetchingTwo from './hooks/4userReducer/fetchingDataUsingUseReducer/DataFetchingTwo';
import ClassWithLifeCycleMethodsWithConditions from './hooks/2useEffectHooks/conditionalltRunEffect/ClassWithLifeCycleMethodsWithConditions';
import UseEffectHookConditionally from './hooks/2useEffectHooks/conditionalltRunEffect/UseEffectHookConditionally';
import ClassMouse from './hooks/2useEffectHooks/runEffectOnlyOnce/ClassMouse';
import HookMouse from './hooks/2useEffectHooks/runEffectOnlyOnce/HookMouse';
import MouseContainer from './hooks/2useEffectHooks/useEffectWithCleanup/MouseContainer';
import IntervalClassCounter from './hooks/2useEffectHooks/useEffectWithIncorrectDependency/IntervalClassCounter';
import IntervalHookCounter from './hooks/2useEffectHooks/useEffectWithIncorrectDependency/IntervalHookCounter'; 
import ClassTimer from './hooks/7useRefHooks/ClassTimer';
import HookTimer from './hooks/7useRefHooks/HookTimer';
import CustomeCounterOne from './hooks/8customHooks/CustomeCounterOne';
import CustomeCounterTwo from './hooks/8customHooks/CustomeCounterTwo';
import UserForm from './hooks/8customHooks/UserForm';
import UseStateWithObject from './hooks/1useStateHooks/UseStateWithObject';
import UseStateWithArray from './hooks/1useStateHooks/UseStateWithArray';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <GetList /> */}
      <PostForm />
      <HookCounter />
      <HookCounterWithPrevState />
      <UseStateWithObject />
      <UseStateWithArray />
      {/* <ClassWithLifeCycleMethods /> */}
      <UseEffectHook />
      <ClassWithLifeCycleMethodsWithConditions />
      <UseEffectHookConditionally />
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      <MouseContainer />
      <IntervalClassCounter />
      <IntervalHookCounter />
      <DataFetching />

      <UserContext.Provider value={'Sujeet'}>
        <ChannelContext.Provider value={'My channel'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

      <CounterOne />
      <CounterTwo />
      <CounterThree />
      <GlobalStateManagement />
      <DataFetchingOne />
      <DataFetchingTwo />

      <ParentComponent />

      <Counter />

      <FocusInput />
      <ClassTimer />
      <HookTimer />

      <DocTitleOne />
      <DocTitleTwo />
      <CustomeCounterOne />
      <CustomeCounterTwo />
      <UserForm />

    </div>
  );
}

export default App;
