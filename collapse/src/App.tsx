import "./App.css";
import Collapse from "./components/Collapse/Collapse";

function App() {
  return (
    <div className="main">
      <Collapse>
        <p>
          Labore aliquip excepteur tempor consequat anim excepteur ea ea enim
          laborum. Aliquip reprehenderit pariatur exercitation enim duis in
          mollit in. Pariatur ipsum adipisicing non aliquip nostrud exercitation
          eiusmod occaecat ipsum quis ad dolor. Cillum elit commodo qui laboris
          reprehenderit duis.
        </p>
      </Collapse>
      <Collapse collapsedLabel="Открыть" expandedLabel="Закрыть">
        <p>
          Labore aliquip excepteur tempor consequat anim excepteur ea ea enim
          laborum. Aliquip reprehenderit pariatur exercitation enim duis in
          mollit in. Pariatur ipsum adipisicing non aliquip nostrud exercitation
          eiusmod occaecat ipsum quis ad dolor. Cillum elit commodo qui laboris
          reprehenderit duis.
        </p>
      </Collapse>
    </div>
  );
}

export default App;
