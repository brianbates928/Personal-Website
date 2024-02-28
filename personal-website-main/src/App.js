import { styles } from "./AppStyle";
import { BoxContainer } from "./components/BoxContainer";
import { SideNav } from "./components/SideNav";

function App() {
  return (
    <div style={styles.content}>
      <SideNav />
      <BoxContainer />
    </div>
  );
}

export default App;
