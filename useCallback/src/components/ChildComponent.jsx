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
//re-rendder tabhi hoga jab props change honge nhi toh nahi hoga