import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObj1, homeObj2 } from '../components/InfoSection/Data';
import RealTime from '../components/InfoSection/RealTime';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObj1}/>
            <InfoSection {...homeObj2}/>
            <RealTime id="users"/>
        </>
    );
};

export default Home;
