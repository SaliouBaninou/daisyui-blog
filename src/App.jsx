import { Header } from "./components/Header";
import { useHash } from "./hooks/useHash";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
  const { page } = useHash();
  const pageContent = getPageContent(page);
  return (
    <>
      <Header />
      <div className="container p-4">{pageContent}</div>
    </>
  );
}

/**
 *
 * @param {string} page
 */
function getPageContent(page) {
  switch (page) {
    case "home":
      return <Home />;
    case "blog":
      return <Blog />;
    case "contact":
      return <Contact />;
  }
  return <NotFound page={page} />;
}

export default App;
