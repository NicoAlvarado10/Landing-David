import type { TimelineData } from "@components/app/utils/Paint";
import { motion } from "framer-motion";

export const TimelineStep = ({ item, index }: { item: TimelineData; index: number }) => {
	return (
		<div
			className="relative z-[2] mt-10 py-[80px] grid grid-cols-[60px_1fr] md:grid-cols-[1fr_180px_1fr]"
			style={{
				gridGap: "0px",
				gridAutoColumns: "1fr",
				willChange: "opacity, transform",
				contentVisibility: "auto",
				contain: "layout paint style",
			}}
		>
			{/* LEFT TITLE - Desktop */}
			<motion.div
				className={`hidden md:flex text-right justify-end items-start ${
					index % 2 === 0 ? "md:order-1" : "md:order-3"
				}`}
				style={{
					position: "sticky",
					top: "50vh",
					alignSelf: "start",
					zIndex: 10,
				}}
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true, amount: 0.2 }}
			>
				<h2
					className="text-[48px] font-medium leading-[1.2] tracking-[-0.02em]"
					style={{
						color: "var(--color-primary)",
						fontFamily: "var(--font-sedan)",
					}}
				>
					{item.step}
				</h2>
			</motion.div>

			{/* CENTER DOT */}
			<div className="flex justify-start md:justify-center order-1 md:order-2 ml-2 md:ml-0">
				<motion.div
					className="w-[18px] h-[18px] sticky top-[50vh]"
					style={{
						backgroundColor: "var(--color-primary)",
						borderRadius: "100%",
						boxShadow: "0 0 0 8px #1a1a1a, 0 0 12px rgba(212, 175, 55, 0.3)",
						willChange: "background",
					}}
				/>
			</div>

			{/* RIGHT BLOCK - Content */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true, amount: 0.2 }}
				className={`opacity-40 hover:opacity-100 transition-opacity duration-300 w-full max-w-[600px] mx-auto order-2 ${
					index % 2 === 0 ? "md:order-3" : "md:order-1"
				}`}
				style={{ willChange: "opacity" }}
			>
				{/* TITLE MOBILE */}
				<motion.div
					className="flex md:hidden justify-end max-md:justify-start mb-10"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, amount: 0.2 }}
				>
					<h2
						className="text-[48px] font-medium leading-[1.2] tracking-[-0.02em]"
						style={{
							color: "var(--color-primary)",
							fontFamily: "var(--font-sedan)",
						}}
					>
						{item.step}
					</h2>
				</motion.div>

				{/* CONTENT BLOCKS */}
				<div className="space-y-6">
					{item.content.blocks.map((block, i) => {
						if (block.type === "paragraph") {
							return (
								<motion.p
									key={i}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6 }}
									viewport={{ once: true, amount: 0.2 }}
									className="text-xl tracking-wide leading-8"
									style={{
										color: "#f5f5f5",
										fontFamily: "var(--font-syne)",
									}}
								>
									{block.text}
								</motion.p>
							);
						} else if (block.type === "list") {
							return (
								<ul key={i} className="list-none pl-4 space-y-2">
									{block.items.map((item, j) => (
										<motion.li
											key={j}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.6 }}
											viewport={{ once: true, amount: 0.2 }}
											className="text-lg tracking-wide flex items-start"
											style={{
												color: "#f5f5f5",
												fontFamily: "var(--font-syne)",
											}}
										>
											<span
												className="mr-2"
												style={{ color: "var(--color-primary)" }}
											>
												•
											</span>
											<span>{item}</span>
										</motion.li>
									))}
								</ul>
							);
						}
						return null;
					})}
				</div>
			</motion.div>
		</div>
	);
};
