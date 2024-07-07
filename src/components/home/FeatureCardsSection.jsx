import briefcaseIcon from '../../assets/img/icon1.png'; // Update with the correct path to your image
import stellaricon from '../../assets/img/icon2.png'; // Update with the correct path to your image
import globeIcon from '../../assets/img/icon3.png'; // Update with the correct path to your image

const FeatureCardsSection = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'ease-in-out',
        pauseOnHover: true,
        pauseOnFocus: true,
      };
    return (
        <div {...settings} className="relative">
            <section className="relative flex flex-wrap justify-center p-8 bg-black text-white -mt-24"> {/* Adjust the margin-top to overlap */}
                <div
                data-aos="fade-up"
                
                className="absolute w-full flex justify-center top-[-6rem]"> {/* Position the first card absolutely */}
                    <div className="bg-[#020817] text-white p-6 rounded-lg flex items-center justify-between w-full md:w-1/2 transition transform hover:scale-105 hover:shadow-xl hover:border-white border-2 border-transparent shadow-lg z-20">
                        <div className="py-10">
                            <h2
                            
                            className="text-2xl font-semibold mb-4">Effortless Funding with Smart Contracts</h2>
                            <p  
                            className="mb-4">Support projects with ease. No hidden charges.</p>
                            <button className="bg-[#2ED846] text-black border-none py-2 px-4 cursor-pointer rounded-md transition transform hover:scale-105">
                                Discover projects
                            </button>
                        </div>
                        {/* for sizing of icon text-'8'xl */}
                        <div className="text-8xl mb-2">
                            <img src={briefcaseIcon} alt="Briefcase Icon" className="h-36 w-44" /> {/* Adjust size as needed */}
                        </div>
                    </div>
                </div>
                <div
                data-aos="fade-up"
                className="w-full flex justify-between flex-wrap md:flex-nowrap mt-36"> {/* Add top margin to adjust for the absolute positioning */}
                    <div className="bg-[#020817] text-white p-6 rounded-lg flex items-center justify-between w-full md:w-[calc(50%-1rem)] mb-6 md:mb-0 transition transform hover:scale-105 hover:shadow-xl hover:border-white border-2 border-transparent shadow-lg">
                        <div className="mt-auto">
                            <h2 className="text-2xl font-semibold mb-4">Earn Rewards for Every Contribution!</h2>
                            <p className="mb-4">Exciting rewards and cashback await you.</p>
                            <p className="mb-4">+ 10 bonus tokens!</p>
                        </div>

                        {/* for sizing of icon text-'8'xl */}
                        <div className="text-8xl mb-2">
                            <img src={stellaricon} alt="Money Bag Icon" className="h-36 w-36" /> {/* Adjust size as needed */}
                        </div>
                    </div>
                    <div className="bg-[#020817] text-white p-6 rounded-lg flex items-center justify-between w-full md:w-[calc(50%-1rem)] transition transform hover:scale-105 hover:shadow-xl hover:border-white border-2 border-transparent shadow-lg">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Global Funding Network</h2>
                            <p className="mb-4">Supporting projects worldwide. Transparent and limitless.</p>
                        </div>
                       {/* for sizing of icon text-'8'xl */}
                        <div className="text-8xl mb-2">
                            <img src={globeIcon} alt="Globe Icon" className="h-36 w-44" /> {/* Adjust size as needed */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FeatureCardsSection;