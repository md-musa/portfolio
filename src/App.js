import Banner from './components/Banner';
import Project from './components/Project';
import { projects } from './data';
import img1 from './assets/images/image1.jpg';

function App() {
  return (
    <main className="">
      <Banner />

      <div className="" style={{ backgroundImage: img1 }}>
        {projects.map(project => (
          <Project project={project} />
        ))}
      </div>
    </main>
  );
}

export default App;
