import { Provider } from "./contexts";
import Principal from "./pages/principal";

export default function App() {
  return (
    <Provider>
      <Principal />
    </Provider>
  );
}
