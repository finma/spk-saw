export const kriteria = [
  {
    kode: "C1",
    namaKriteria: "Kadar Air",
    bobot: 0.17,
    nilaiMutu: [
      {
        pilihan: "> 17%",
        bobot: 4,
      },
      {
        pilihan: "16% - 17%",
        bobot: 3,
      },
      {
        pilihan: "12.6% - 15%",
        bobot: 2,
      },
      {
        pilihan: "0% - 12.5%",
        bobot: 1,
      },
    ],
  },
  {
    kode: "C2",
    namaKriteria: "Kadar Kotoran",
    bobot: 0.17,
    nilaiMutu: [
      {
        pilihan: "> 0.8%",
        bobot: 4,
      },
      {
        pilihan: "0.7% - 0.8%",
        bobot: 3,
      },
      {
        pilihan: "0.6%",
        bobot: 2,
      },
      {
        pilihan: "0% - 0.5%",
        bobot: 1,
      },
    ],
  },
  {
    kode: "C3",
    namaKriteria: "Serangga Hidup",
    bobot: 0.17,
    nilaiMutu: [
      {
        pilihan: "Tidak Ada",
        bobot: 2,
      },
      {
        pilihan: "Ada",
        bobot: 1,
      },
    ],
  },
  {
    kode: "C4",
    namaKriteria: "Biji Berbau Busuk",
    bobot: 0.17,
    nilaiMutu: [
      {
        pilihan: "Tidak Berbau",
        bobot: 2,
      },
      {
        pilihan: "Berbau",
        bobot: 1,
      },
    ],
  },
  {
    kode: "C5",
    namaKriteria: "Ukuran Biji",
    bobot: 0.15,
    nilaiMutu: [
      {
        pilihan: "Besar",
        bobot: 2,
      },
      {
        pilihan: "Kecil",
        bobot: 1,
      },
    ],
  },
  {
    kode: "C6",
    namaKriteria: "Nilai Cacat",
    bobot: 0.17,
    nilaiMutu: [
      {
        pilihan: "> 150 (Mutu 6)",
        bobot: 7,
      },
      {
        pilihan: "81 - 150 (Mutu 5)",
        bobot: 6,
      },
      {
        pilihan: "61 - 80 (Mutu 4b)",
        bobot: 5,
      },
      {
        pilihan: "45 - 60 (Mutu 4a)",
        bobot: 4,
      },
      {
        pilihan: "26 - 44 (Mutu 3)",
        bobot: 3,
      },
      {
        pilihan: "12 - 25 (Mutu 2)",
        bobot: 2,
      },
      {
        pilihan: "0 - 11 (Mutu 1)",
        bobot: 1,
      },
    ],
  },
];
