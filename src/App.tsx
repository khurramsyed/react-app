//import ListGroup from "./components/ListGroup";

import Accordion from "./components/Accordion";
import Alert from "./components/Alert";

function App() {
  /*let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
  );*/

  return (
    <>
      <div className="row">
        <div className="col">
          <Alert> Hello Worlds</Alert>
        </div>
        <div className="col">
          <Accordion></Accordion>
        </div>
      </div>
    </>
  );
}

export default App;
