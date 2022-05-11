import Link from "next/link";
import Router from "next/router";
import { HiPencilAlt, HiTrash } from "react-icons/hi";

const data = require("../../data/alternatif.json");

import MainLayout from "../../components/template/MainLayout";
import { getAllAlternatif, deleteAlternatif } from "../../services/alternatif";

export default function Alternatif() {
  const handleDelete = async (id) => {
    const answer = confirm("Apakah yakin menghapus alternatif?");

    if (answer) {
      await deleteAlternatif(id);
      alert("Berhasil menghapus alternatif");
      Router.reload();
    }
  };
  return (
    <MainLayout location="alternatif">
      <div className="bg-white border-transparent rounded-lg shadow-xl w-full">
        <div className="bg-gray-100 uppercase text-gray-800 border-b border-gray-300 rounded-tl-lg rounded-tr-lg p-2 flex justify-between items-center">
          <h className="font-bold uppercase text-gray-600">
            Data Biji Kopi + Penilaian
          </h>
          <Link href="/alternatif/tambah">
            <a className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded flex items-center space-x-1">
              <HiPencilAlt />
              <span>Tambah</span>
            </a>
          </Link>
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
                <th scope="col" className="px-6 py-3">
                  Aksi
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
                  <td className="px-6 py-4 flex items-center space-x-2">
                    <Link href={`/alternatif/${id}`}>
                      <a className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex items-center space-x-1">
                        <HiPencilAlt />
                        <span>Edit</span>
                      </a>
                    </Link>
                    <button
                      onClick={() => handleDelete(id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded flex items-center space-x-1"
                    >
                      <HiTrash />
                      <span>Hapus</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}
