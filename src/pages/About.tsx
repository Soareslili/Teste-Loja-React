import { Link } from 'react-router-dom';
import  Artesan from '../../public/img/artesan.png';

const About = () => {
    return (
        <section id="about" className=" py-20 min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                
                <div className="relative h-[400px] lg:h-auto">
                    <img
                        src={Artesan}
                        alt="Artisan crafting leather bag"
                        className="w-full h-full object-cover"
                    />
                </div>

              
                <div className="bg-[#BC5F31] flex items-center py-20 px-8 lg:px-16">
                    <div className="max-w-lg">
                        <span className="text-foreground uppercase tracking-widest mb-4 block">
                            Nossa história
                        </span>
                        <h2 className="heading-section text-foreground text-7xl font-Cormorant italic mb-6">
                            Feito com amor em São Paulo
                        </h2>
                        <p className="text-sm text-foreground/90 mb-4">
                            Todos os nossos produtos são cuidadosamente feitos à mão em nosso ateliê em São Paulo, onde a tradição e a paixão pelo artesanato se encontram. Desde a seleção do couro até os detalhes finais, cada etapa do processo é realizada com dedicação e atenção aos detalhes.
                        </p>
                        <p className="text-sm text-foreground/90 mb-8">
                            Nosso compromisso é criar peças únicas e duráveis, que não apenas atendam às suas necessidades, mas também transmitam a essência do nosso amor pelo artesanato. Cada produto é uma expressão da nossa paixão e do nosso compromisso com a qualidade.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-primary rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                        >
                            Entre em contato
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;