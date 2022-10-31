import Home from "../HomePage/Home"
import About from "../About/About";
import Error from "../ErrorPage/Error";
import Counter from '../Counter/Counter'
import { Routes, Route } from "react-router-dom";




function Navigation() {
	return (
	  <div>
		<Routes>
		  <Route path="/" element={<Home />} />
		  <Route path="/about" element={<About />} />
		  <Route path="/counter" element={<Counter />} />
		  <Route path="*" element={<Error />} />
		</Routes>
	  </div>
	);
  }

  export default Navigation;