import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { checkActiveDate, getActivityDuration } from '../../helper/getDriverActivity';

const DriverActivity = () => {

    const { id } = useParams();
    const [driverInfo, setDriverInfo] = useState({});
    const [driverActivity, setDriverActivity] = useState({});

    const loadDriver = async (driverID) => {
        await axios.get("http://localhost:3004/data?driverID=" + driverID).then(res => {
            if (res.status === 200) {
                setDriverInfo(res.data[0]);
                const activityData = getActivityDuration(res.data[0].traces);
                setDriverActivity(activityData);
            }
        })
    }

    useEffect(() => {
        loadDriver(id);
    }, [id]);

    return (<>
        {driverInfo && Object.keys(driverInfo).length > 0 && (
            <div className='block w-full px-3 py-3'>
                <div className="relative overflow-x-auto">
                    <div className='bg-red-500 p-3 rounded-md text-center mb-4'>
                        <h1 className='text-[20px] text-white'>Driver Information</h1>
                    </div>
                    <div className='mb-5'>
                        <div className='flex items-center'>
                            <h4 className='text-md w-[150px] font-bold px-3 py-3 '>Driver Name:</h4>
                            <p className='text-sm'>{driverInfo.forename + " " + driverInfo.surname}</p>
                        </div>
                        <div className='flex items-center'>
                            <h4 className='text-md w-[150px] font-bold px-3 py-3 '>Vehicle Reg:</h4>
                            <p className='text-sm'>{driverInfo.vehicleRegistration}</p>
                        </div>
                    </div>
                    <h4 className='text-md font-bold px-3 py-3 '>TOTAL ACTIVITY DURATION :</h4>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Work</th>
                                <th scope="col" className="px-6 py-3">Drive</th>
                                <th scope="col" className="px-6 py-3">Rest</th>
                                <th scope="col" className="px-6 py-3">Available</th>
                                <th scope="col" className="px-6 py-3">Total Activity Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4">{driverActivity.workHours}</td>
                                <td className="px-6 py-4">{driverActivity.driveHours}</td>
                                <td className="px-6 py-4">{driverActivity.restHours}</td>
                                <td className="px-6 py-4">{driverActivity.availableHours}</td>
                                <td className="px-6 py-4">{driverActivity.totalActivityHours}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-5">
                        <h4 className='text-md font-bold px-3 py-3 '>Driver Activity Traces:</h4>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-2 py-3">Mon</th>
                                    <th scope="col" className="px-2 py-3">Tue</th>
                                    <th scope="col" className="px-2 py-3">Wed</th>
                                    <th scope="col" className="px-2 py-3">Thu</th>
                                    <th scope="col" className="px-2 py-3">Fri</th>
                                    <th scope="col" className="px-2 py-3">Sat</th>
                                    <th scope="col" className="px-2 py-3">Sun</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-2 py-3"><div className={`w-[30px] h-[30px] border-black border ${checkActiveDate(driverInfo.traces, "2021-02-01") ? 'bg-green-600' : 'bg-inherit'}`}></div></td>
                                    <td className="px-2 py-3"><div className={`w-[30px] h-[30px] border-black border ${checkActiveDate(driverInfo.traces, "2021-02-02") ? 'bg-green-600' : 'bg-inherit'}`}></div></td>
                                    <td className="px-2 py-3"><div className={`w-[30px] h-[30px] border-black border ${checkActiveDate(driverInfo.traces, "2021-02-03") ? 'bg-green-600' : 'bg-inherit'}`}></div></td>
                                    <td className="px-2 py-3"><div className={`w-[30px] h-[30px] border-black border ${checkActiveDate(driverInfo.traces, "2021-02-04") ? 'bg-green-600' : 'bg-inherit'}`}></div></td>
                                    <td className="px-2 py-3"><div className={`w-[30px] h-[30px] border-black border ${checkActiveDate(driverInfo.traces, "2021-02-05") ? 'bg-green-600' : 'bg-inherit'}`}></div></td>
                                    <td className="px-2 py-3"><div className={`w-[30px] h-[30px] border-black border ${checkActiveDate(driverInfo.traces, "2021-02-06") ? 'bg-green-600' : 'bg-inherit'}`}></div></td>
                                    <td className="px-2 py-3"><div className={`w-[30px] h-[30px] border-black border ${checkActiveDate(driverInfo.traces, "2021-02-07") ? 'bg-green-600' : 'bg-inherit'}`}></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )}
    </>
    )
}

export default DriverActivity