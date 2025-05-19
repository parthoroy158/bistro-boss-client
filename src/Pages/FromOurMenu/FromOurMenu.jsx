import React from 'react';
import back from '../../assets/home/featured.jpg'
import SectionTitle from '../../Components/SectionTitle.jsx/SectionTitle';


const FromOurMenu = () => {
    return (
        <section
            className="relative flex items-center justify-center h-[848px] bg-center bg-cover mt-10 mb-10"
            style={{
                backgroundImage:
                    `url(${back})`,
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content container */}
            <div className="relative max-w-6xl w-full px-4 md:px-8 text-white">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <SectionTitle
                        subHeading={'---Check it out---'}
                        heading={'FROM OUR MENU'}

                    >
                    </SectionTitle>
                </div>

                {/* Card row */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Food photo */}
                    <figure className="rounded-xl overflow-hidden shadow-xl md:h-72 lg:h-80">
                        <img
                            src={back}
                            alt="Tray of assorted bite‑sized hors d’oeuvres"
                            className="w-full h-full object-cover"
                        />
                    </figure>

                    {/* Text block */}
                    <div>
                        <p className="text-sm opacity-80 mb-1">March 20, 2023</p>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Where can I get some?</h3>
                        <p className="leading-relaxed mb-6 opacity-90">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores
                            quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis
                            ullam maxime tenetur.
                        </p>
                        <button className="btn btn-outline  border-b-3 border-black">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FromOurMenu;