import { motion } from "framer-motion"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, image, isActive }: SectionProps) {
  return (
    <section
      id={id}
      className="relative h-screen w-full snap-start flex items-center overflow-hidden"
    >
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
      )}

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10 px-8 md:px-16 lg:px-24">
        <div className="flex-1 max-w-2xl">
          {subtitle && (
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {subtitle}
            </motion.div>
          )}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title}
          </motion.h2>
          {content && (
            <motion.p
              className="text-lg md:text-xl max-w-xl mt-6 text-neutral-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {content}
            </motion.p>
          )}
        </div>

        {image && (
          <motion.div
            className="hidden md:block flex-shrink-0 w-[340px] lg:w-[420px] h-[280px] lg:h-[340px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            initial={{ opacity: 0, x: 60 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
