

import { Link } from "react-router-dom";
import HeroImg from "../../assets/Hero1.png";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24">
           
            <div className="absolute inset-0 z-0">
                <img
                    src={HeroImg}
                    alt="Premium leather bags collection"
                    className="w-full h-full object-cover"
                />

                
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
            </div>

         

            <div className="font-Inter relative z-10 max-w-2xl mt-24 md:mt-20 space-y-6 ml-20">


                <h1
                    className="text-5xl md:text-6xl font-extrabold leading-tight">
                    <span className="text-white font-CormorantGaramond italic" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                        Elegância que atravessa gerações
                    </span>
                </h1>

                <p
                    className="text-lg md:text-xl text-muted-foreground font-Inter italic mt-6"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1700"
                >
                    Peças exclusivas feitas para durar. Qualidade, estilo e autenticidade em cada detalhe.
                </p>


                <div className=" flex items-center gap-4">
                    <Link
                        to="/products"
                        className="inline-flex items-center justify-center px-6 py-3 
                         rounded-sm bg-accent text-background 
                         font-medium font-Inter text-sm transition hover:bg-transparent hover:text-white hover:border border-white hover:brightness-110 transform hover:scale-105"
                    >
                        Compre agora
                    </Link>

                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 
                         rounded-sm bg-transparent text-white border border-white
                         font-medium font-Inter text-sm transition hover:bg-accent hover:text-accent-foreground hover:border-none hover:brightness-110 transform hover:scale-105"
                    >
                        Entre em Contato
                    </Link>
                </div>


            </div>


        </section>
    );
};

export default Hero;