import { Antdesign } from "./antdesign/Antdesign";
import { Radix } from "./radix/Radix";

function App() {
  return (
    <>
      <div className="p-10">
        <div>
          <h2 className="font-bold">Antd</h2>
          <div className="mt-2">
            <Antdesign />
          </div>
        </div>
        <div>
          <h2 className="font-bold mt-10">Radix</h2>
          <div className="mt-2">
            <Radix />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
