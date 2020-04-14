import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
export default function Home() {
    return (
       <>
            <Hero>
                <Banner title="Amaya Resort Hikkaduwa" subtitle="Deluxe Rooms starting at $300">
                    <Link to="/rooms" className="btn-primary">Our Rooms</Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRooms/> 
        </>
    )
}

