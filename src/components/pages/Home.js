import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import {
  checkActiveDate,
  getTotalActivityDuration,
} from "../../helper/getDriverActivity";
import { Link } from "react-router-dom";
import Pagination from "../common/Pagination";

const Home = () => {
  const [driverList, setDriverList] = useState([]);
  const [filteredDriverList, setFilteredDriverList] = useState([]);
  const [driverListToDisplay, setDriverListToDisplay] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const TOTAL_VALUES_PER_PAGE = 10;

  const loadDriverList = async () => {
    await axios.get("http://localhost:3004/data").then((res) => {
      let driverData = [];
      res.data.map((item) =>
        driverData.push({ name: item.forename + " " + item.surname, ...item })
      );
      setDriverList(driverData);
      setFilteredDriverList(driverData.slice(0, TOTAL_VALUES_PER_PAGE));
      setDriverListToDisplay(driverData.slice(0, TOTAL_VALUES_PER_PAGE));
      setTotalPages(driverData.length / TOTAL_VALUES_PER_PAGE);
    });
  };

  const filterDriverData = (query) => {
    const lowerCasedQuery = query.toLowerCase().trim();
    const filterDriver = driverListToDisplay.filter((item) => {
      return Object.keys(item).some(
        (key) =>
          (key === "name" || key === "vehicleRegistration") &&
          item[key] &&
          item[key].toString().toLowerCase().includes(lowerCasedQuery)
      );
    });
    setFilteredDriverList(filterDriver);
  };

  const cancelSearch = () => {
    setFilteredDriverList(driverListToDisplay);
  };

  useEffect(() => {
    const start = (currentPageNumber - 1) * TOTAL_VALUES_PER_PAGE;
    const end = currentPageNumber * TOTAL_VALUES_PER_PAGE;
    setFilteredDriverList(driverList.slice(start, end));
    setDriverListToDisplay(driverList.slice(start, end));
  }, [currentPageNumber, driverList]);

  useEffect(() => {
    loadDriverList();
  }, []);

  return (
    <div className="block w-full px-3 py-3">
      <div className="block relative max-w-[350px] w-full mb-5">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoSearch size="20px" />
        </div>
        <input
          type="search"
          // value={search}
          placeholder="Search for Driver"
          onChange={(e) =>
            e.target.value !== ""
              ? filterDriverData(e.target.value)
              : cancelSearch()
          }
          className="block w-full p-4 ps-10 text-sm text-gray-900 border-2 border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 focus:outline-none"
        />
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Driver Name
              </th>
              <th scope="col" className="px-6 py-3">
                Vehicle Reg
              </th>
              <th scope="col" className="px-6 py-3">
                Total Activity Duration
              </th>
              <th scope="col" className="px-2 py-3">
                Mon
              </th>
              <th scope="col" className="px-2 py-3">
                Tue
              </th>
              <th scope="col" className="px-2 py-3">
                Wed
              </th>
              <th scope="col" className="px-2 py-3">
                Thu
              </th>
              <th scope="col" className="px-2 py-3">
                Fri
              </th>
              <th scope="col" className="px-2 py-3">
                Sat
              </th>
              <th scope="col" className="px-2 py-3">
                Sun
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredDriverList.length > 0 &&
              filteredDriverList.map((item, i) => (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">
                    <Link
                      className="text-red-600 underline"
                      to={`/driver/${item.driverID}`}
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      className="text-red-600 underline"
                      to={`/vehicle/${item.vehicleRegistration}`}
                    >
                      {item.vehicleRegistration}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    {item.traces.length > 0
                      ? getTotalActivityDuration(item.traces)
                      : "N/A"}
                  </td>
                  <td className="px-2 py-3">
                    <div
                      className={`w-[30px] h-[30px] border-black border ${
                        checkActiveDate(item.traces, "2021-02-01")
                          ? "bg-green-600"
                          : "bg-inherit"
                      }`}
                    ></div>
                  </td>
                  <td className="px-2 py-3">
                    <div
                      className={`w-[30px] h-[30px] border-black border ${
                        checkActiveDate(item.traces, "2021-02-02")
                          ? "bg-green-600"
                          : "bg-inherit"
                      }`}
                    ></div>
                  </td>
                  <td className="px-2 py-3">
                    <div
                      className={`w-[30px] h-[30px] border-black border ${
                        checkActiveDate(item.traces, "2021-02-03")
                          ? "bg-green-600"
                          : "bg-inherit"
                      }`}
                    ></div>
                  </td>
                  <td className="px-2 py-3">
                    <div
                      className={`w-[30px] h-[30px] border-black border ${
                        checkActiveDate(item.traces, "2021-02-04")
                          ? "bg-green-600"
                          : "bg-inherit"
                      }`}
                    ></div>
                  </td>
                  <td className="px-2 py-3">
                    <div
                      className={`w-[30px] h-[30px] border-black border ${
                        checkActiveDate(item.traces, "2021-02-05")
                          ? "bg-green-600"
                          : "bg-inherit"
                      }`}
                    ></div>
                  </td>
                  <td className="px-2 py-3">
                    <div
                      className={`w-[30px] h-[30px] border-black border ${
                        checkActiveDate(item.traces, "2021-02-06")
                          ? "bg-green-600"
                          : "bg-inherit"
                      }`}
                    ></div>
                  </td>
                  <td className="px-2 py-3">
                    <div
                      className={`w-[30px] h-[30px] border-black border ${
                        checkActiveDate(item.traces, "2021-02-07")
                          ? "bg-green-600"
                          : "bg-inherit"
                      }`}
                    ></div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="mt-2">
          <Pagination
            total={totalPages}
            current={currentPageNumber}
            pagination={(crPage) => setCurrentPageNumber(crPage)}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
