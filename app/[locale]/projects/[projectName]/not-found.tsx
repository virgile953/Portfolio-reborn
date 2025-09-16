import Button from "../../components/ui/Button";
import { Home } from "lucide-react";
import { useTranslations } from "next-intl";

const NotFoundPage = () => {
	const t = useTranslations("Projects.notFound");

	return (
		<main className="min-h-screen flex flex-col items-center justify-center text-center dark:bg-dark-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.06]">
			<h1 className="text-4xl font-semibold mb-6 mt-4">{t("title")}</h1>
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white mask-[radial-gradient(ellipse_at_center,transparent_30%,black)]" />
			<div>
				<Button icon={<Home />} iconPosition="left" href="/">
					{t("goHome")}
				</Button>
			</div>
		</main>
	);
};

export default NotFoundPage;
