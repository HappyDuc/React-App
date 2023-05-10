import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import NewButton from "./components/NewButton";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectedItem}
      />

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}

      <NewButton onClick={() => setAlertVisibility(true)}>My Button</NewButton>
    </div>
  );
}

export default App;
