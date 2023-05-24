import React from 'react'

export default function main() {
  return (

    <div className='main'>
    <div className = "canvas">
<form>
  <div class="card1">
<h1>Create Connection</h1>
  <div class="mb-3">
    <label for="exampleInputText" class="form-label">Connection Name</label>
    <input type="text" class="form-control" id="exampleInputTecxt" aria-describedby="textHelp" placeholder='Connection name'/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>

  <div class="mb-3">
    <label for="exampleInputText" class="form-label">Connection type</label>
    {/* <input type="Text" class="form-control" id="exampleInputText"/> */}
    <select class="form-select" aria-label="Default select example">
  <option selected>Open this select Connection type</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
</div>
<div class="card2">
  <h1>Database Credentials</h1>

  <div class="mb-3">
    <label for="exampleInputhost" class="form-label">Host</label>
    <input type="Text" class="form-control" id="exampleInputhost"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputhost" class="form-label">schema</label>
    <input type="Text" class="form-control" id="exampleInputhost"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputhost" class="form-label">user name</label>
    <input type="Text" class="form-control" id="exampleInputhost"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputhost" class="form-label">Port</label>
    <input type="Text" class="form-control" id="exampleInputhost"/>
  </div>

  <div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Password</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-labelledby="passwordHelpInline"/>
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div>

</div>
{/* 
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
<div class="button">
  <br/>
  <button type="submit" class="btn btn-dark" alignItems= 'center'>Submit</button >
  </div>
</form>
    </div>
    </div>
  )
}
