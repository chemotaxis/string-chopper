'use strict';

function Basic() {
  const [string, setString] = React.useState("iamyourlyftdriver");
  const [result, setResult] = React.useState("");
  const [resp, setResp] = React.useState({});

  const handleChange = e => {
    setString(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("/test", {
      "string_to_cut": string
    })
    .then(response => {
      console.log(response);
      setResult(response.data.return_string);
      setResp(response);
    })
    .catch(error => {
      console.log(error);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="form-floating mb-3">
          <input tabindex="0" type="text" class="form-control"
            name="string" id="string" required autocomplete="off"
            onChange={handleChange} autoFocus
            aria-describedby="stringHelp"
            placeholder="sample string" value={string}></input>
          <label for="string">String to chop</label>
          <div id="stringHelp" class="form-text">This string will be processed by returning every third letter, starting at the third letter.</div>
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>

      <h2>Chopped string: {result}</h2>

      <h3>HTTP Status: {resp.status} {resp.statusText}</h3>
    </div>
  );
}

function MyApp() {
  return (
  <div class="container-md">
    <div class="row">
      <h1>String Chopper</h1>
    </div>

    <div class="row">
      <Basic/>
    </div>
  </div>
  );
}

const container = document.getElementById('form');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
