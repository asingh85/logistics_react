import Header from './components/common/Header';
import SidebarMenu from './components/common/SidebarMenu';
import Home from './components/pages/Home';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DriverActivity from './components/pages/DriverActivity';
import VehicleActivity from './components/pages/VehicleActivity';
import Drivers from './components/pages/Drivers';
import Vehicles from './components/pages/Vehicles';
import About from './components/pages/About';

function App() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="main">
      <Header expanded={expanded} setExpanded={setExpanded} />
      <div className='flex items-start content-start'>
        <div className={`overflow-hidden transition-all ${expanded ? "w-[15%]" : "w-0"}`}>
          <SidebarMenu expanded={expanded} />
        </div>
        <div className={`transition-all ${expanded ? "w-[85%]" : "w-full"}`}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/drivers' element={<Drivers />} />
            <Route path='/driver/:id' element={<DriverActivity />} />
            <Route path='/vehicles' element={<Vehicles />} />
            <Route path='/vehicle/:id' element={<VehicleActivity />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
