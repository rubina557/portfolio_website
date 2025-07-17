import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Notebook from "./pages/Notebook.jsx";
import Contact from "./pages/Contact.jsx";
import Bookshelf from "./pages/More/Bookshelf.jsx";
import TechStack from "./pages/More/TechStack.jsx";

const MorePage = () => (
  <div className="text-center py-10">
    <h2 className="text-2xl font-bold">More Content</h2>
    <p className="text-gray-500">
      Please select a section from the navigation.
    </p>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Top-level pages */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="notebook" element={<Notebook />} />
        <Route path="contact" element={<Contact />} />

        <Route path="more">
          <Route index element={<MorePage />} />
          <Route path="bookshelf" element={<Bookshelf />} />
          <Route path="tech-stack" element={<TechStack />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
