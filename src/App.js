import './App.css';
function App() {
  const firstName= 'Gowrinadha Manikanta';
  const lastname = 'Badam';
  const age = 21
  const job = 'Developer'
  return (
    <div className="App">
        <h1>ReactJS by Manikanta</h1>
        firstName : {firstName}
        lastname:{lastname}<br></br>
        age:{age}<br></br>
        job:{job}
    </div>
  );
}
export default App;
