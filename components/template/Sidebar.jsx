import Link from "next/link";
import { HiHome, HiViewList, HiViewGrid, HiCalculator } from "react-icons/hi";

export default function Sidebar({ location }) {
  return (
    <nav aria-label="alternative nav">
      <div className="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-full z-10 w-full md:w-48 content-center">
        <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
          <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
            <li className="mr-3 flex-1">
              <Link href="/">
                <a
                  className={`py-1 md:py-3 pl-1 text-white no-underline hover:text-white border-b-2 border-gray-800 flex items-center space-x-2 ${
                    location === "home"
                      ? "border-green-500"
                      : "hover:border-green-500 "
                  }`}
                >
                  <HiHome />
                  <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                    Dashboard
                  </span>
                </a>
              </Link>
            </li>
            <li className="mr-3 flex-1">
              <Link href="/kriteria">
                <a
                  className={`py-1 md:py-3 pl-1 text-white no-underline hover:text-white border-b-2 border-gray-800 flex items-center space-x-2 ${
                    location === "kriteria"
                      ? "border-pink-500"
                      : "hover:border-pink-500 "
                  }`}
                >
                  <HiViewList />
                  <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                    Data Kriteria
                  </span>
                </a>
              </Link>
            </li>
            <li className="mr-3 flex-1">
              <Link href="/alternatif">
                <a
                  className={`py-1 md:py-3 pl-1 text-white no-underline hover:text-white border-b-2 border-gray-800 flex items-center space-x-2 ${
                    location === "alternatif"
                      ? "border-purple-500"
                      : "hover:border-purple-500 "
                  }`}
                >
                  <HiViewGrid />
                  <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                    Data Kopi
                  </span>
                </a>
              </Link>
            </li>
            <li className="mr-3 flex-1">
              <Link href="/hasil">
                <a
                  className={`py-1 md:py-3 pl-1 text-white no-underline hover:text-white border-b-2 border-gray-800 flex items-center space-x-2 ${
                    location === "hasil"
                      ? "border-blue-500"
                      : "hover:border-blue-500 "
                  }`}
                >
                  <HiCalculator />
                  <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                    Nilai / Proses SPK
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
