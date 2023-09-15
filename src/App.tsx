import Dock from "@/components/Dock";
import Desktop from "@/components/Desktop";
import MenuBar from "@/components/MenuBar";

function App() {
  return (
    <>
      <Desktop>
        <MenuBar />
        <Dock />
      </Desktop>
    </>
  );
}

export default App;
