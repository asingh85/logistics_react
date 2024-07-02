import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const VehicleActivity = () => {
    const { id } = useParams();
    const [vehicleInfo, setVehicleInfo] = useState({});

    const loadVehicle = async (regID) => {
        await axios.get("http://localhost:3004/data?vehicleRegistration=" + regID).then(res => {
            if (res.status === 200) {
                setVehicleInfo(res.data[0]);
            }
        })
    }

    useEffect(() => {
        loadVehicle(id);
    }, [id]);

    return (<>
        {vehicleInfo && Object.keys(vehicleInfo).length > 0 && (
            <div className='block w-full px-3 py-3'>
                <div className="relative overflow-x-auto">
                    <div className='bg-red-500 p-3 rounded-md text-center mb-4'>
                        <h1 className='text-[20px] text-white'>Vehicle Information</h1>
                    </div>
                    <div className='mb-5'>
                        <div className='flex items-center'>
                            <h4 className='text-md w-[150px] font-bold px-3 py-3 '>Vehicle Reg:</h4>
                            <p className='text-sm'>{vehicleInfo.vehicleRegistration}</p>
                        </div>
                        <div className='flex items-center'>
                            <h4 className='text-md w-[150px] font-bold px-3 py-3 '>Driver Name:</h4>
                            <p className='text-sm'>{vehicleInfo.forename + " " + vehicleInfo.surname}</p>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
    )
}

export default VehicleActivity