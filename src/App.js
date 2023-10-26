import Routes from "./routes/Routes";
import { Provider } from "react-wrap-balancer";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider>
    {" "}
    <ToastContainer />
      <Routes />
  </Provider>
  );
}

export default App;
