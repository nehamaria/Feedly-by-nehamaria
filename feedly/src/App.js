import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Main from "./components/Main";

function App() {
  return (
    <ErrorBoundary>
      <>
        <div className="App">
          <Main />
        </div>
        <div id="ModalPortal"></div>
        <div id="SubscribePortal"></div>
      </>
    </ErrorBoundary>
  );
}
export default App;
