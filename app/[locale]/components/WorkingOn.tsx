import Image from "next/image";
import TechStack from "./TechStack";
import Button from "./ui/Button";
import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";

const WorkingOn = () => {
	const t = useTranslations("WorkingOn");

	return (
		<div className="py-32">
			<div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between" id="now">
				<h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
					{t("title")}
				</h2>
			</div>
			<div className="grid lg:grid-cols-2 gap-4 mt-8">
				<div className="text-2xl">
					<div dangerouslySetInnerHTML={{ __html: t.markup("description", {bold: (chunks) => `<strong>${chunks}</strong>`}) }} />
					<br />
					<br />
					<Image
						className="col-span-2 md:row-span-2 rounded-lg border border-black dark:border-stone-200 mx-auto"
						src="/imgs/working-on/vaillant-demo.gif"
						alt="Working on 1"
						width={800}
						height={500}
						unoptimized
					/>
				</div>
				<div className="text-l row-span-3">
					<div dangerouslySetInnerHTML={{ __html: t.markup("idea", {bold: (chunks) => `<strong>${chunks}</strong>`}) }} />
					<br />
					<br />
					<div dangerouslySetInnerHTML={{ __html: t.markup("requirements", {bold: (chunks) => `<strong>${chunks}</strong>`}) }} />
					<br />
					<br />
					{t("mainPage")}
					<ul className="list-disc pl-5">
						<li dangerouslySetInnerHTML={{ __html: t.markup("leftSide", {bold: (chunks) => `<strong>${chunks}</strong>`}) }} />
						<li dangerouslySetInnerHTML={{ __html: t.markup("rightSide", {bold: (chunks) => `<strong>${chunks}</strong>`}) }} />
					</ul>
					<div dangerouslySetInnerHTML={{ __html: t.markup("divider", {bold: (chunks) => `<strong>${chunks}</strong>`}) }} />
					<br />
					<br />
					<div dangerouslySetInnerHTML={{ __html: t.markup("adminPanel", {bold: (chunks) => `<strong>${chunks}</strong>`}) }} />
					<ul className="list-disc pl-5">
						<li>{t("adminTasks.createItems")}</li>
						<li>{t("adminTasks.validateTestimonials")}</li>
					</ul>
					<br />
					<div dangerouslySetInnerHTML={{ __html: t.markup("techStack", {bold: (chunks) => `<strong>${chunks}</strong>`}) }} />
				</div>
				<div>
					<div className="mt-1">
						<TechStack
							techStack={[
								"React",
								"Supabase (sql)",
								"Blob store",
								"TailwindCSS",
								"JWT",
							]}
						/>
						<div className="mt-4">
							<Button
								icon={<Globe />}
								iconPosition="left"
								href={"https://vaillant.vercel.app"}
							>
								{t("viewDemo")}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkingOn;
