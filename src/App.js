import Banner from './components/Banner';
import Project from './components/Project';
import { projects } from './data';
import img1 from './assets/images/image1.jpg';
import About from './components/About';

function App() {
  return (
    <main className="">
      <Banner />

      <div className="relative mt-10" style={{ backgroundImage: img1 }}>
        {projects.map((project, key) => (
          <Project project={project} key={key} />
        ))}

        <div className="absolute -top-5 right-16 rounded-md italic shadow-md font-medium text-xl px-5 py-2 bg-primary text-white">
          Latest Projects
        </div>
      </div>

      <About />
    </main>
  );
}

export default App;
