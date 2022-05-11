import Link from "next/link";
import Router from "next/router";
import { useState, useCallback, useEffect } from "react";
import { useUID } from "react-uid";

import MainLayout from "../../../components/template/MainLayout";
import Select from "../../../components/Select";
import { kriteria } from "../../../data/kriteria";
import {
  createAlternatif,
  getAlternatifById,
  updateAlternatif,
} from "../../../services/alternatif";

export default function TambahAlternatif() {
  const uid = useUID();

  const [alternatif, setAlternatif] = useState("");
  const [kriteria1, setKriteria1] = useState(kriteria[0].nilaiMutu[0]);
  const [kriteria2, setKriteria2] = useState(kriteria[1].nilaiMutu[0]);
  const [kriteria3, setKriteria3] = useState(kriteria[2].nilaiMutu[0]);
  const [kriteria4, setKriteria4] = useState(kriteria[3].nilaiMutu[0]);
  const [kriteria5, setKriteria5] = useState(kriteria[4].nilaiMutu[0]);
  const [kriteria6, setKriteria6] = useState(kriteria[5].nilaiMutu[0]);

  const setAlternatifValue = useCallback(async () => {
    const { data } = await getAlternatifById(Router.query.id);

    setAlternatif(data.alternatif);
    setKriteria1(data.C1);
    setKriteria2(data.C2);
    setKriteria3(data.C3);
    setKriteria4(data.C4);
    setKriteria5(data.C5);
    setKriteria6(data.C6);

    console.log(data);
  }, []);

  useEffect(() => {
    setAlternatifValue();
  }, [setAlternatifValue]);

  const onSubmit = async () => {
    const data = {
      // id: Router.asPath.id,
      alternatif,
      C1: {
        kriteria: kriteria[0].namaKriteria,
        pilihan: kriteria1.pilihan,
        bobot: kriteria1.bobot,
      },
      C2: {
        kriteria: kriteria[1].namaKriteria,
        pilihan: kriteria2.pilihan,
        bobot: kriteria2.bobot,
      },
      C3: {
        kriteria: kriteria[2].namaKriteria,
        pilihan: kriteria3.pilihan,
        bobot: kriteria3.bobot,
      },
      C4: {
        kriteria: kriteria[3].namaKriteria,
        pilihan: kriteria4.pilihan,
        bobot: kriteria4.bobot,
      },
      C5: {
        kriteria: kriteria[4].namaKriteria,
        pilihan: kriteria5.pilihan,
        bobot: kriteria5.bobot,
      },
      C6: {
        kriteria: kriteria[5].namaKriteria,
        pilihan: kriteria6.pilihan,
        bobot: kriteria6.bobot,
      },
    };

    console.log("data", data);

    Router.push("/alternatif");
    await updateAlternatif(Router.query.id, data);
  };

  return (
    <MainLayout location="alternatif">
      <div className="px-4 w-full pb-48">
        <h1 className="text-3xl font-medium text-gray-800">Update Data</h1>

        <form className="mt-8 space-y-3">
          <div className="flex w-1/2 flex-col space-y-2 ">
            <label
              htmlFor="title"
              className="text-base font-normal text-gray-800"
            >
              Data Alternatif
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={alternatif}
              onChange={(e) => setAlternatif(e.target.value)}
              placeholder="Data Alternatif"
              className="w-full rounded-lg bg-gray-100 p-2 text-sm font-normal border-gray-300 border"
            />
          </div>

          <Select
            selected={kriteria1}
            setSelected={setKriteria1}
            data={kriteria[0]}
          />
          <Select
            selected={kriteria2}
            setSelected={setKriteria2}
            data={kriteria[1]}
          />
          <Select
            selected={kriteria3}
            setSelected={setKriteria3}
            data={kriteria[2]}
          />
          <Select
            selected={kriteria4}
            setSelected={setKriteria4}
            data={kriteria[3]}
          />
          <Select
            selected={kriteria5}
            setSelected={setKriteria5}
            data={kriteria[4]}
          />
          <Select
            selected={kriteria6}
            setSelected={setKriteria6}
            data={kriteria[5]}
          />
        </form>

        <div className="flex space-x-3 mt-8">
          <Link href="/alternatif">
            <a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded flex items-center space-x-1">
              <span>Kembali</span>
            </a>
          </Link>
          <button
            onClick={onSubmit}
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded flex items-center space-x-1"
          >
            <span>Simpan</span>
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
