import React from "react";

const actualData = (data) => {
  return new Date().getFullYear() - new Date(data).getFullYear();
}

const Greeting = (props) => {
  return (
    <div className="greeting">
      {`My name is ${props.firstName} Doe. I'm 17 years old`}
    </div>
  )
}

export default Greeting;