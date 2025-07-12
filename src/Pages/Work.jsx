import React from "react";
import Title from "../Components/Title";
import ProjectCard from "../Components/ProjectCard";
import { assets } from "../assets/assets";

const Work = () => {
  return (
    <div className="page lg:h-full lg:overflow-y-auto font-[Poppins]">
      <Title text="My Projects" />

      <div className="grid xl:grid-cols-1 gap-6 my-5">
        <ProjectCard
          title="Wonderlust – Book Unique Stays"
          description="A full-stack Airbnb-style website for booking stays. Includes auth, property listings, dashboards and booking flow."
          image={assets.wonderlust_thumbnail}
          techStack="EJS, Express, MongoDB, Mongoose"
          github="https://github.com/DeepakVaishnav3112/Wanderlust"
          liveDemo="https://airbnb-tlxc.onrender.com"
          bgColor="bg-[#FFEBD1]"
        />

        <ProjectCard
          title="Zerodha Clone + Custom Dashboard"
          description="Zerodha homepage clone with a fully custom-built dashboard UI. Includes charts and real-time investment tracking layout."
          image={assets.zerodha_clone_thumbnail}
          techStack="React, Tailwind CSS, Chart.js, Express, MongoDB, Mongoose"
          github="https://github.com/DeepakVaishnav3112/Zerodha-Clone"
          liveDemo="https://zerodha-clone-frontend-zeta.vercel.app/"
          bgColor="bg-[#F2F7FC]"
        />

        <ProjectCard
          title="NekoNime – Anime Info & Community (In Dev)"
          description="Anime info site with user watchlists, ratings, and community features. Built with full-stack tech. Still adding custom lists and discussion features."
          image={assets.nekonime_thumbnail}
          techStack="React, Tailwind, Express, MongoDB, Mongoose, AniList API, Jikan API, Youtube Data V3 API"
          github="https://github.com/yourusername/nekonime"
          bgColor="bg-[#FFEBD1]"
        />
      </div>
    </div>
  );
};

export default Work;
