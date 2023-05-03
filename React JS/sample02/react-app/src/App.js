import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./Components/NavBar";
import { Box, BoxFn } from "./Components/Box";

function App() {
  return (
    <section id="my-app">
      {/* navbar goes here */}
      <NavigationBar name={'Sandeep'} />

      {/* main body goes here */}
      <Box hero="super-man" hero1="wonder-women" />
      {/* <BoxFn hero="super-man1" /> */}
    </section>
  );
}

export default App;
