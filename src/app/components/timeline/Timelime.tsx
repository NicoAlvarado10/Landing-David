'use client'
import { data } from "@components/app/utils/Paint";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TimelineStep } from "./TimelineStep";

export const Timeline = () => {
	const timelineRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: timelineRef,
		offset: ["start 100%", "end 20%"],
	});
	const scaleY = useTransform(scrollYProgress, [0, 0.08, 0.1, 0.12, 1], [0, 0.3, 0.72, 1, 1]);
	const opacity = useTransform(scrollYProgress, [0, 0.1, 0.95, 1], [0, 1, 1, 0]);

	return (
		<div
			className="timeline  z-[-10] mt-0 relative py-[4rem] w-full"
			id="timeline "
		>
			<div className="w-full  mx-auto px-4">
				{/* Section Title */}
				<motion.h2
				 initial={{ opacity: 0, y: 20 }}
				 whileInView={{ opacity: 1, y: 0 }}
				 transition={{ duration: 0.8,}}
				 viewport={{ once: true }}
				className="mb-4 mt-6  max-lg:mt-4 text-primary text-xl md:text-6xl max-lg:text-center text-center py-12   tracking-widest font-sedan  mx-auto ">
          Una Vida de Aprendizaje y Superación
        </motion.h2>

				<div
					ref={timelineRef}
					className="flex flex-col items-center justify-center mx-auto h-full w-full md:max-w-[1220px] relative"
				>
					{/* Vertical timeline background with progress indicator */}
					<div
						className="absolute z-[-15] w-[2px] h-full 
							bg-[linear-gradient(#000000,#1a1a1a_3%,#1a1a1a_97%,#000000)] 
							rounded-full left-4 md:left-1/2 md:-translate-x-1/2 shadow-2xl"
					>
						{/* Golden progress line */}
						<motion.div
							className="
								z-[-5] w-[3px] h-[50vh]
								sticky inset-0 top-0 left-1/2 -translate-x-1/2
								origin-top
								bg-[linear-gradient(#D4AF37,#B8860B_30%,#8B5A2B)]
								[mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)]
								rounded-full
								will-change-[opacity,scaleY,transform]
								shadow-[0_0_15px_5px_rgba(212,175,55,0.6),0_0_30px_10px_rgba(255,215,0.3),inset_0_0_10px_rgba(218,165,32,0.5)]
							"
							style={{
								opacity: opacity,
								scaleY: scaleY,
							}}
						/>
					</div>

					{/* Render each timeline step */}
					{data.map((item, index) => (
						<TimelineStep key={index} item={item} index={index} />
					))}
				</div>
			</div>
		</div>
	);
};
