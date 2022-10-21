import React from 'react'
import "../InputUsername/InputUsername.css"

const InputUsername = ({value, setFormState}) => {
  return (
    <div className="InputUsernameContainer">
      <label htmlFor="#inputUsername" className="InputUsernameContainer__Label">
        Topmate Username
      </label>
      <input
        id="inputUsername"
        placeholder=""
        value={value}
        onChange={(e) =>
          setFormState((prev) => ({ ...prev, topmateUsername: e.target.value }))
        }
        className="InputUsernameContainer_Input"
        required
      />
    </div>
  )
}

export default InputUsername