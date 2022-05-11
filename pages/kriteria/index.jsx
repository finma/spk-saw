import MainLayout from "../../components/template/MainLayout";
import { kriteria } from "../../data/kriteria";

const Kriteria = () => {
  return (
    <MainLayout location="kriteria">
      {kriteria.map(({ kode, namaKriteria, nilaiMutu }) => (
        <div key={kode} className="w-full md:w-1/2 p-2">
          <div className="bg-white border-transparent rounded-lg shadow-xl">
            <div className="bg-gray-100 uppercase text-gray-800 border-b border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
              <h className="font-bold uppercase text-gray-600">
                {namaKriteria}
              </h>
            </div>
            <div className="">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Pilihan
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Bobot
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {nilaiMutu.map(({ pilihan, bobot }, idx) => (
                    <tr
                      key={pilihan}
                      className="bg-white border-b hover:bg-gray-50 "
                    >
                      <td className="px-6 py-4">{idx + 1}</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                      >
                        {pilihan}
                      </th>
                      <td className="px-6 py-4">{bobot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </MainLayout>
  );
};

export default Kriteria;
