import Link from "next/link";
import Button from "../../components/ui/Button";
import { Home } from "lucide-react";

const NotFoundPage = () => {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center text-center dark:bg-dark-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.06]">
			<h1 className="text-4xl font-semibold mb-6 mt-4">
				Looks like I haven&apos;t made that project yet ¯\_(ツ)_/¯
			</h1>
			<div
				className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white
        [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"
			/>
			<div>
				<Button icon={<Home />} iconPosition="left">
					<Link
						href="/"
						className="inline-block text-lg text-primary font-bold hover:underline"
					>
						Go back home
					</Link>
				</Button>
			</div>
		</main>
	);
};

export default NotFoundPage;
