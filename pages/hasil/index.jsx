import MainLayout from "../../components/template/MainLayout";
import { kriteria } from "../../data/kriteria";

const data = require("../../data/alternatif.json");

export default function Hasil() {
  // * mereturn nilai maximum tiap kriteria
  const maxValue = () => {
    const maxC1 = Math.max(...data.map(({ C1 }) => C1.bobot));
    const maxC2 = Math.max(...data.map(({ C2 }) => C2.bobot));
    const maxC3 = Math.max(...data.map(({ C3 }) => C3.bobot));
    const maxC4 = Math.max(...data.map(({ C4 }) => C4.bobot));
    const maxC5 = Math.max(...data.map(({ C5 }) => C5.bobot));
    const maxC6 = Math.max(...data.map(({ C6 }) => C6.bobot));

    return { maxC1, maxC2, maxC3, maxC4, maxC5, maxC6 };
  };

  // * normalisasi nilai kriteria
  const normalisasi = (nilai, max) => {
    return Number(nilai / max).toFixed(2);
  };

  // * meranking dan sorting hasil dari keputusan
  const ranking = () => {
    const ranked = data.map(({ id, alternatif, C1, C2, C3, C4, C5, C6 }) => ({
      id,
      alternatif,
      totalValue: Number(
        normalisasi(C1.bobot, maxValue().maxC1) * kriteria[0].bobot +
          normalisasi(C2.bobot, maxValue().maxC2) * kriteria[1].bobot +
          normalisasi(C3.bobot, maxValue().maxC3) * kriteria[2].bobot +
          normalisasi(C4.bobot, maxValue().maxC4) * kriteria[3].bobot +
          normalisasi(C5.bobot, maxValue().maxC5) * kriteria[4].bobot +
          normalisasi(C6.bobot, maxValue().maxC6) * kriteria[5].bobot
      ).toFixed(3),
    }));

    return ranked.sort((a, b) => b.totalValue - a.totalValue);
  };

  return (
    <MainLayout location="hasil">
      {/* Table Data Kriteria */}
      <div className="bg-white border-transparent rounded-lg shadow-xl w-1/3">
        <div className="bg-gray-100 uppercase text-gray-800 border-b border-gray-300 rounded-tl-lg rounded-tr-lg p-2 flex justify-between items-center">
          <h className="font-bold uppercase text-gray-600">Data Kriteria</h>
        </div>
        <div className="">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Kriteria
                </th>
                <th scope="col" className="px-6 py-3">
                  Penilaian
                </th>
                <th scope="col" className="px-6 py-3">
                  Bobot
                </th>
              </tr>
            </thead>
            <tbody>
              {kriteria.map(({ kode, namaKriteria, bobot }, idx) => (
                <tr key={kode} className="bg-white border-b hover:bg-gray-50 ">
                  <td className="px-6 py-4">{kode}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                  >
                    {namaKriteria}
                  </th>
                  <td className="px-6 py-4">{bobot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabel Data Biji Kopi */}
      <div className="bg-white border-transparent rounded-lg shadow-xl w-full mt-8">
        <div className="bg-gray-100 uppercase text-gray-800 border-b border-gray-300 rounded-tl-lg rounded-tr-lg p-2 flex justify-between items-center">
          <h className="font-bold uppercase text-gray-600">Data Biji Kopi</h>
        </div>
        <div className="">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Alternatif
                </th>
                <th scope="col" className="px-6 py-3">
                  C1
                </th>
                <th scope="col" className="px-6 py-3">
                  C2
                </th>
                <th scope="col" className="px-6 py-3">
                  C3
                </th>
                <th scope="col" className="px-6 py-3">
                  C4
                </th>
                <th scope="col" className="px-6 py-3">
                  C5
                </th>
                <th scope="col" className="px-6 py-3">
                  C6
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ id, alternatif, C1, C2, C3, C4, C5, C6 }, idx) => (
                <tr key={id} className="bg-white border-b hover:bg-gray-50 ">
                  <td className="px-6 py-4">{idx + 1}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                  >
                    {alternatif}
                  </th>
                  <td className="px-6 py-4">{C1.pilihan}</td>
                  <td className="px-6 py-4">{C2.pilihan}</td>
                  <td className="px-6 py-4">{C3.pilihan}</td>
                  <td className="px-6 py-4">{C4.pilihan}</td>
                  <td className="px-6 py-4">{C5.pilihan}</td>
                  <td className="px-6 py-4">{C6.pilihan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabel Data Biji Kopi + Penilaian */}
      <div className="bg-white border-transparent rounded-lg shadow-xl w-full mt-8">
        <div className="bg-gray-100 uppercase text-gray-800 border-b border-gray-300 rounded-tl-lg rounded-tr-lg p-2 flex justify-between items-center">
          <h className="font-bold uppercase text-gray-600">
            Data Biji Kopi + Penilaian
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
                  Alternatif
                </th>
                <th scope="col" className="px-6 py-3">
                  C1
                </th>
                <th scope="col" className="px-6 py-3">
                  C2
                </th>
                <th scope="col" className="px-6 py-3">
                  C3
                </th>
                <th scope="col" className="px-6 py-3">
                  C4
                </th>
                <th scope="col" className="px-6 py-3">
                  C5
                </th>
                <th scope="col" className="px-6 py-3">
                  C6
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ id, alternatif, C1, C2, C3, C4, C5, C6 }, idx) => (
                <tr key={id} className="bg-white border-b hover:bg-gray-50 ">
                  <td className="px-6 py-4">{idx + 1}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                  >
                    {alternatif}
                  </th>
                  <td className="px-6 py-4">{C1.bobot}</td>
                  <td className="px-6 py-4">{C2.bobot}</td>
                  <td className="px-6 py-4">{C3.bobot}</td>
                  <td className="px-6 py-4">{C4.bobot}</td>
                  <td className="px-6 py-4">{C5.bobot}</td>
                  <td className="px-6 py-4">{C6.bobot}</td>
                </tr>
              ))}
              <tr className="bg-white border-b hover:bg-gray-50 ">
                <td className="px-6 py-4">#</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                >
                  Max
                </th>
                <td className="px-6 py-4">{maxValue().maxC1}</td>
                <td className="px-6 py-4">{maxValue().maxC2}</td>
                <td className="px-6 py-4">{maxValue().maxC3}</td>
                <td className="px-6 py-4">{maxValue().maxC4}</td>
                <td className="px-6 py-4">{maxValue().maxC5}</td>
                <td className="px-6 py-4">{maxValue().maxC6}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabel Normalisasi */}
      <div className="bg-white border-transparent rounded-lg shadow-xl w-full mt-8">
        <div className="bg-gray-100 uppercase text-gray-800 border-b border-gray-300 rounded-tl-lg rounded-tr-lg p-2 flex justify-between items-center">
          <h className="font-bold uppercase text-gray-600">Normalisasi</h>
        </div>
        <div className="">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Alternatif
                </th>
                <th scope="col" className="px-6 py-3">
                  C1
                </th>
                <th scope="col" className="px-6 py-3">
                  C2
                </th>
                <th scope="col" className="px-6 py-3">
                  C3
                </th>
                <th scope="col" className="px-6 py-3">
                  C4
                </th>
                <th scope="col" className="px-6 py-3">
                  C5
                </th>
                <th scope="col" className="px-6 py-3">
                  C6
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ id, alternatif, C1, C2, C3, C4, C5, C6 }, idx) => (
                <tr key={id} className="bg-white border-b hover:bg-gray-50 ">
                  <td className="px-6 py-4">{idx + 1}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                  >
                    {alternatif}
                  </th>
                  <td className="px-6 py-4">
                    {normalisasi(C1.bobot, maxValue().maxC1)}
                  </td>
                  <td className="px-6 py-4">
                    {normalisasi(C2.bobot, maxValue().maxC2)}
                  </td>
                  <td className="px-6 py-4">
                    {normalisasi(C3.bobot, maxValue().maxC3)}
                  </td>
                  <td className="px-6 py-4">
                    {normalisasi(C4.bobot, maxValue().maxC4)}
                  </td>
                  <td className="px-6 py-4">
                    {normalisasi(C5.bobot, maxValue().maxC5)}
                  </td>
                  <td className="px-6 py-4">
                    {normalisasi(C6.bobot, maxValue().maxC6)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabel Nilai Ranking */}
      <div className="bg-white border-transparent rounded-lg shadow-xl w-1/3 mt-8">
        <div className="bg-gray-100 uppercase text-gray-800 border-b border-gray-300 rounded-tl-lg rounded-tr-lg p-2 flex justify-between items-center">
          <h className="font-bold uppercase text-gray-600">Nilai Ranking</h>
        </div>
        <div className="">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Alternatif
                </th>
                <th scope="col" className="px-6 py-3">
                  Nilai
                </th>
                <th scope="col" className="px-6 py-3">
                  Rank
                </th>
              </tr>
            </thead>
            <tbody>
              {ranking().map(({ alternatif, totalValue }, idx) => (
                <tr key={idx} className="bg-white border-b hover:bg-gray-50 ">
                  <td
                    scope="row"
                    className="px-6 py-4  font-medium text-gray-900  whitespace-nowrap"
                  >
                    {alternatif}
                  </td>
                  <td className="px-6 py-4">{totalValue}</td>
                  <td className="px-6 py-4">{idx + 1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}
