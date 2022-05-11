import MainLayout from "../components/template/MainLayout";
import { kriteria } from "../data/kriteria";

const Home = () => {
  return (
    <MainLayout location="home">
      <h1 className="text-lg font-gray-700 font-semibold ml-3">
        Selamat datang di web Sistem Pendukung Keputusan
      </h1>
    </MainLayout>
  );
};

export default Home;
