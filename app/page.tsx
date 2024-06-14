import CameraFeed from '../components/CameraFeed';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <main className="relative w-full h-full">
        <CameraFeed modelPath="/models/mobilenet_docker/model.json" />
      </main>
    </div>
  );
};

export default Home;
