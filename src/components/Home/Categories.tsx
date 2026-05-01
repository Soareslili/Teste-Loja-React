

import productTote from "../../../public/img/BolsaCouro.png";
import productBackpack from "../../../public/img/MochilaHeritage.png";
import productDuffle from "../../../public/img/Diffle.png";
import productBriefcase from "../../../public/img/Briefcase.png";
import productMessenger from "../../../public/img/Messenger.png";
import productWallet from "../../../public/img/ClassicWallet.png";
import { Link } from "react-router-dom";

const categories = [
    { name: "Tote Bags", image: productTote },
    { name: "Backpacks", image: productBackpack },
    { name: "Duffels & Totes", image: productDuffle },
    { name: "Briefcases", image: productBriefcase },
    { name: "Messenger Bags", image: productMessenger },
    { name: "Accessories", image: productWallet },
];

const Categories = () => {
    return (
        <section id="categories" className="section-padding bg-foreground/5 py-20">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="heading-section text-3xl text-background font-Cormorant font-bold mb-4">Nossa linha completa</h2>
                    <p className="text-body text-muted-foreground max-w-2xl mx-auto">
                        Artigos de couro artesanais projetados para o estilo de vida moderno. Cada peça é feita com cuidado e construída para durar.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 ml-10">
                    {categories.map((category, index) => (
                        <Link
                            key={category.name}
                            to="/products"
                            className="card-category group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-warm-gray overflow-hidden bg-secondary shadow-soft group-hover:shadow-warm transition-shadow duration-300">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <span className="text-small font-medium text-card text-center ml-8">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;