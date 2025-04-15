import type { TimelineData } from "@components/app/utils/Paint";

export const TimelineStep = ({ item, index }: { item: TimelineData; index: number }) => {
	const isEven = index % 2 === 0;

	// En desktop: el contenido sale desde el centro hacia su lado
	// En mobile: todo sale desde la izquierda
	const blockAnimationClass = isEven
		? "fade-left md:fade-from-center-right"
		: "fade-left md:fade-from-center-left";

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
			<div
				className={`hidden md:flex fade-up text-right justify-end items-start ${
					isEven ? "md:order-1" : "md:order-3"
				}`}
				style={{
					position: "sticky",
					top: "50vh",
					alignSelf: "start",
					zIndex: 10,
				}}
			>
				<h2
					className="text-[48px] font-medium leading-[1.2] tracking-[-0.02em] fade-up"
					style={{
						color: "var(--color-primary)",
						fontFamily: "var(--font-sedan)",
					}}
				>
					{item.step}
				</h2>
			</div>

			{/* CENTER DOT */}
			<div className="flex justify-start md:justify-center order-1 md:order-2 ml-2 md:ml-0">
				<div
					className="w-[18px] h-[18px] sticky top-[50vh]"
					style={{
						backgroundColor: "var(--color-primary)",
						borderRadius: "100%",
						boxShadow: "0 0 0 8px #1a1a1a, 0 0 12px rgba(212, 175, 55, 0.3)",
					}}
				/>
			</div>

			{/* RIGHT BLOCK - Content */}
			<div
				className={`opacity-40 hover:opacity-100 transition-opacity duration-300 w-full max-w-[600px] mx-auto order-2 fade-up ${
					isEven ? "md:order-3" : "md:order-1"
				}`}
			>
				{/* TITLE MOBILE */}
				<div className="flex md:hidden justify-end max-md:justify-start mb-10 fade-up">
					<h2
						className="text-[48px] font-medium leading-[1.2] tracking-[-0.02em] fade-up"
						style={{
							color: "var(--color-primary)",
							fontFamily: "var(--font-sedan)",
						}}
					>
						{item.step}
					</h2>
				</div>

				{/* CONTENT BLOCKS */}
				<div className="space-y-6">
					{item.content.blocks.map((block, i) => {
						if (block.type === "paragraph") {
							return (
								<p
									key={i}
									className={`text-xl tracking-wide leading-8 ${blockAnimationClass}`}
									style={{
										color: "#f5f5f5",
										fontFamily: "var(--font-syne)",
									}}
								>
									{block.text}
								</p>
							);
						} else if (block.type === "list") {
							return (
								<ul key={i} className="list-none pl-4 space-y-2">
									{block.items.map((item, j) => (
										<li
											key={j}
											className={`text-lg tracking-wide flex items-start ${blockAnimationClass}`}
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
										</li>
									))}
								</ul>
							);
						}
						return null;
					})}
				</div>
			</div>
		</div>
	);
};
