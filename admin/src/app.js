import { Login } from "./components/login";
import { Dashboard } from "./components/dashboard";
//export function App() {
//    return <h1>Hello world!</h1>;
//  }

export function App(props) {
  const isLoggedIn = false;
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return isLoggedIn ? <Dashboard /> : <Login />;
}