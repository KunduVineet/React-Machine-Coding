import React from 'react'

const ChildComponent = React.memo((props) => {
    console.log("Child component rendered again");
  return (
    <div>
        <button>
            {props.OnClick}
            {props.button}</button>

    </div>
  )

}
);

export default ChildComponent

//React.memo -> wrap the component with React.memo to prevent re-rendering of the child component when the parent component re-renders.
// re-render tabhi hoga jab props change honge nhi toh nahi hoga

//If u r sending a function, then react.memo won't be able to save you from re-rendering. 