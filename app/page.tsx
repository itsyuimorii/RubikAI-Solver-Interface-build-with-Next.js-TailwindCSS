import CameraFeed from './components/CameraFeed';
import Navbar from './components/Navbar'

const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <main className="relative w-full h-full">
    
        {/* <div className="text-center text-2xl font-bold p-40">
          <CameraFeed modelPath="/models/web_model/model.json" />
          </div> */}
      </main>
    </div>
  );
};

export default Home;
