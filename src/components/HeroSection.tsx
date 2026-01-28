import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-primary text-sm font-medium mb-6">
              New Collection 2024
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Wear Your
            <br />
            <span className="text-gradient">Story</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted-foreground mb-8 max-w-md"
          >
            Bold streetwear inspired by anime culture, movie quotes, and aesthetic typography. Express yourself differently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/collections" className="btn-neon inline-flex items-center justify-center gap-2">
              Shop Collection
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="btn-neon-outline inline-flex items-center justify-center gap-2"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <div className="flex items-center gap-3 glass px-4 py-3 rounded-xl border border-border">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">2.5K+ Happy Customers</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
