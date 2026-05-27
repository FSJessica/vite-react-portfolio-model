
import './App.css'
import About from './components/About';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import Footer from './components/Footer';
 
function App() {
  return (
    <div className= "App">
      {/* Header section */}
      <Header />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <ProjectList />

      {/* Contact Section*/}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  );

}

export default App
