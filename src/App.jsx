import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Notebook from "./pages/Notebook.jsx";
import Contact from "./pages/Contact.jsx";
import Bookshelf from "./pages/More/Bookshelf.jsx";
import TechStack from "./pages/More/TechStack.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="notebook" element={<Notebook />} />
        <Route path="contact" element={<Contact />} />
        <Route path="bookshelf" element={<Bookshelf />} />
        <Route path="tech-stack" element={<TechStack />} />
      </Route>
    </Routes>
  );
}

export default App;
