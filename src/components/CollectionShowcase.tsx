import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product3 from "@/assets/product-3.jpg";

const collections = [
  {
    id: 1,
    name: "Anime Essentials",
    description: "Iconic quotes & characters",
    image: product1,
    itemCount: 24,
  },
  {
    id: 2,
    name: "Street Minimalist",
    description: "Clean aesthetic pieces",
    image: product3,
    itemCount: 18,
  },
];

const CollectionShowcase = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            Shop by <span className="text-gradient">Collection</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Explore our curated collections designed for the modern streetwear enthusiast
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to="/collections"
                className="group block relative overflow-hidden rounded-2xl card-glow"
              >
                <div className="aspect-[16/9] lg:aspect-[16/7]">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="text-primary text-sm font-medium">
                    {collection.itemCount} Items
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {collection.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                    Shop Now <ArrowRight size={18} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;
