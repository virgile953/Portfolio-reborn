"use client";

import { useTechCardsItems } from "../../lib/constants";
import TechCard from "./TechCard";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl"; // declare this import

const Skills = () => {
	const t = useTranslations("Skills");
	const items = useTechCardsItems();
	return (
		<div className="relative z-10 py-16 sm:py-24" id="about">
			<div className="space-y-4 mb-10">
				<motion.h1
					initial={{ opacity: 0, x: -75 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.25 }}
					className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
				>
					{t("Current")}
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, x: -90 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.25 }}
					className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70"
				>
					{t("Subtitle")}<br/>
					{t("MainTechs")}
				</motion.p>
			</div>

			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={{
					hidden: { opacity: 1 },
					visible: {
						opacity: 1,
						transition: {
							staggerChildren: 0.15,
						},
					},
				}}
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4"
			>
				{items.map((cardItem) => (
					<motion.div
						key={cardItem.name}
						variants={{
							hidden: { opacity: 0, y: 75 },
							visible: { opacity: 1, y: 0 },
						}}
						transition={{ duration: 0.5 }}
					>
						<TechCard cardInfo={cardItem} />
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default Skills;
