// import React from 'react'
// import HeroSection from '../Components/HeroSection'
// import Services from '../Components/Services/Services'
// const Home = () => {
//   return (
//     <div className='w-full'>
//       <HeroSection/>
//       <Services/>
//     </div>
//   )
// }

// export default Home
import React from "react";
import HeroSection from "../Components/HeroSection";
import Services from "../Components/Services";
import tvs from "../assets/my-tvs-4.webp";
import mobil from "../assets/mobil-2.webp";
import jindal from "../assets/jindal-6.webp";
import doggy from "../assets/doggy-doo-3.webp";
import icat from "../assets/icat-5.webp";
import hp from "../assets/hp-1.webp";
import dineout from "../assets/431-88-8.webp";
import ClientWebsite from "../Components/ClientWebsite";
import Industries from "../Components/Industries";
const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <Services />
      <ClientWebsite image={tvs} />
      <ClientWebsite image={doggy} />
      <ClientWebsite image={mobil} />
      <ClientWebsite image={jindal} />
      <ClientWebsite image={icat} />
      <ClientWebsite image={hp} />
      <ClientWebsite image={dineout} />
      <ClientWebsite image={tvs} />
      <Industries />
    </div>
  );
};

export default Home;
