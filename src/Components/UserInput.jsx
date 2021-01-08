import React from "react";
import "./UserInput.css"

function UserInput(props){
     return <div>
          <label>Change Name  : </label>
          <input class="form__field" type="text" onChange={props.change}/>
     </div>
}

export default UserInput;