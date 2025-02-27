import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "Since switching to Emonjoy, I've seen a significant reduction in pest damage and an increase in crop yields.",
    author: "Abena Koomson",
    rating: 5,
  },
  {
    id: 2,
    text: "As a gardener, I'm always looking for ways to keep my plants healthy and pest-free without harming the environment. Emonjoy Pesticide has been a lifesaver!",
    author: "Kwame Adu",
    rating: 4,
  },
];

const flipVariants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

export default function TestimonialSection() {
  const [flipped, setFlipped] = useState(Array(testimonials.length).fill(false));

  const toggleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <section className="flex flex-wrap justify-center gap-6 py-12 bg-gray-100">
      {testimonials.map((testimonial, index) => (
        <div key={testimonial.id} className="relative w-80 h-64 perspective">
          <motion.div
            className="absolute w-full h-full rounded-xl shadow-lg bg-white p-6 flex flex-col justify-center items-center cursor-pointer"
            initial="front"
            animate={flipped[index] ? "back" : "front"}
            variants={flipVariants}
            transition={{ duration: 0.6 }}
            onClick={() => toggleFlip(index)}
            style={{ backfaceVisibility: "hidden" }}
          >
            <h3 className="text-lg font-semibold">TESTIMONIAL</h3>
            <div className="flex text-yellow-400 text-xl my-2">
              {"★".repeat(testimonial.rating)}
            </div>
            <p className="text-gray-600 text-center">{testimonial.text}</p>
            <p className="mt-4 font-bold">— {testimonial.author}</p>
          </motion.div>

          {/* Back Side */}
          <motion.div
            className="absolute w-full h-full rounded-xl shadow-lg bg-green-500 text-white p-6 flex flex-col justify-center items-center cursor-pointer"
            initial="back"
            animate={flipped[index] ? "front" : "back"}
            variants={flipVariants}
            transition={{ duration: 0.6 }}
            onClick={() => toggleFlip(index)}
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <h3 className="text-lg font-semibold">More About {testimonial.author}</h3>
            <p className="text-center mt-4">"I can feel good about what I'm putting on my crops and into the environment. Highly recommended!"</p>
            <p className="mt-4 italic">Tap to flip back</p>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
