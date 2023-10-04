import "./App.css";
import Nav from "./components/Nav";
import Economics from "./components/Economics";
import Main_Container from "./components/Main_Container";
function App() {
  return (
    <div className="App">
      <body>
        <Nav />
        <Economics />
        <Main_Container />

        <footer></footer>
      </body>
    </div>
  );
}

export default App;
