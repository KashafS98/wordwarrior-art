import img from "./moulding.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundImage:`url('${img}')`, position: "relative", width:'100wv', height: '100vh', backgroundPosition:'center', backgroundSize:'cover', backgroundAttachment:'fixed' }} />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: '25%',
          fontSize: "64px",
          width: "50%",
          margin: "0 auto",
          color: 'white',
          fontWeight: 900
        }}
      >
        Moulding all experiences into something interesting!
      </div>
    </div>
  );
}

export default App;
