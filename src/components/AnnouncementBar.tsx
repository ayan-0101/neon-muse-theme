import { motion } from "framer-motion";

const AnnouncementBar = () => {
  const announcements = [
    "🔥 FREE SHIPPING ON ORDERS OVER $100",
    "✨ NEW DROPS EVERY FRIDAY",
    "💎 USE CODE ANIME20 FOR 20% OFF",
    "🎌 LIMITED EDITION COLLECTION OUT NOW",
  ];

  return (
    <div className="announcement-bar py-2 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...announcements, ...announcements, ...announcements].map((text, index) => (
          <span
            key={index}
            className="mx-8 text-sm font-semibold text-primary-foreground tracking-wide"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default AnnouncementBar;
