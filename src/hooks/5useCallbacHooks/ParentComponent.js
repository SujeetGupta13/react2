import React, { useCallback, useState } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

//Here if we click on increment age or increment salary button, after update all coponent is getting rendered. that causes performance issue.
// To overcome this issue, React.memo comes into picture. React.memo is HOC, which prevents functional component from being rerendered
//if its props or state do not changed. React.memo is nothing to do with React Hooks. it's present in react from react 16.6.
//To use React.memo  in other 3 componet make change like ex. export default Count to export default React.memo(Count).
//Now after this, Component whose prps or state do not chage will no be re-rendered. 
//Even after use of React.memo, if we click on age  button, <Button handleClick={incrementSalary}>Increment Salary</Button> is being re-rendered. because when
//parent component re-rendered, incrementSalary fn is creatted again, which is same as before but it this is a new one and have diffrent
//reference. and this new incrementSalary fn is being passed as a props to Button component. hence Button for salary is also beig re-rendered.

//Then how to tell react that there is no need to craete new incrementSalary fn when we click on age button.Answers is useCallback.
//usecallback is a hook that will return a memoized version of callback fn that only cahnges if one of the dependencies has changed.
//In our case usecallback hook will cache the incrementSalary function and retrun that if salary is not incremented.

//why we shud callback?
//answers: it is useful when passing callback to optimized child components that rely on reference equality to prevent unneccessary renders.
//How to use callback?  check below useCallback accepts the callback function as its 1st parameter and array of dependency as 2nd parameters.


//then why we dont use useCallback hook everytime then answers is at https://kentcdodds.com/blog/usememo-and-usecallback

// useCallback is used for performance optimization. useMemo Hook is also used for same purose.
const ParentComponent = () => {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    // const incrementAge = () => {
    //     setAge( age + 1)
    // }
    // const incrementSalary = () =>{
    //     setSalary( salary + 1000)
    // }

    const incrementAge = useCallback( () => {
        setAge( age + 1 )
    }, [age])

    const incrementSalary = useCallback( () => {
        setSalary( salary + 1000 )
    }, [salary])
    return (
        <div>
            <Title />
            <Count text="Age" count ={age}/>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count ={salary}/>
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    );
};

export default ParentComponent;