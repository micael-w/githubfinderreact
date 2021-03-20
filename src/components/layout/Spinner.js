import React, { Fragment} from 'react'
import spinner from "./spinner.gif";

export const Spinner = () =>
// not passing anything and arrow function
// means we don't need return()
    <>
      <img
      src={spinner}
      alt="Loading..."
      style={{width: "200px", margin:"auto", display: "block"}}/>
    </>
  
  export default Spinner;

