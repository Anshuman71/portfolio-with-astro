import { motion } from "framer-motion";

export default function NameAnimation() {
  return (
    <h1 className={"text-gray-100 text-3xl md:text-5xl overflow-hidden"}>
      Hi, I&apos;m{" "}
      {"Anshuman".split("").map((char, index) => (
        <motion.p
          key={char + index}
          className={"inline-block text-yellow-400"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.2 + index * 0.15,
            duration: 0.3,
          }}
        >
          {char}
        </motion.p>
      ))}
    </h1>
  );
}
