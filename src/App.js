import Banner from './components/Banner';
import Project from './components/Project';
import { projects } from './data';
import profilePicture from './assets/images/md_musa.png';
import About from './components/About';
import ecommerce from './assets/images/ecommerce.png';
import travel from './assets/images/traveling.png';
import algorithm from './assets/images/algo.png';
function App() {
  const images = [ecommerce, travel, algorithm];

  return (
    <main className="">
      <Banner />

      <div className="relative mt-10" style={{ backgroundImage: profilePicture }}>
        {projects.map((project, key) => (
          <Project project={project} img={images[key]} key={key} />
        ))}

        <div className="absolute -top-5 right-16 rounded-md italic shadow-md font-medium text-xl px-5 py-2 bg-primary text-white">
          Latest Projects
        </div>
      </div>

      {/* <About /> */}
    </main>
  );
}

export default App;
