import "./App.css";
import InputList from "./components/InputList/InputList";
import Title from "./components/Title/Title";
import { AppBar } from "@mui/material";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <AppBar
        sx={{
          backgroundColor: "#add8e6",
          display: "flex",
          flexDirection: "row",
          padding: "8px",
          gap: "8px",
        }}
      >
        <Button variant="outlined">Food Memories</Button>
        <Button variant="outlined">Recipe Lookup</Button>
      </AppBar>
      <Title />
      <InputList />
    </div>
  );
}

export default App;
