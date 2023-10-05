// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(event.target.elements.usernameInput.value);
  }

  function handleChange(event) {
    const {value} = event.target;
    const isLower = value === value.toLowerCase();
    setError(isLower ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input htmlFor='usernameInput' onChange={handleChange} type="text" />
      </div>
      <>
        {error ? <p role="alert">{error}</p> : null}
      </>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
