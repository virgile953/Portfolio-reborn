import Image from "next/image";
import TechStack from "./TechStack";
import Button from "./ui/Button";
import { Globe } from "lucide-react";

const WorkingOn = () => {
	return (
		<div className="py-32" >
			<div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between" id="now">
				<h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
					What I&apos;m working on now:
				</h2>
			</div>
			<div className="grid lg:grid-cols-2 gap-4 mt-8">
				<div className="text-2xl">
					Development of a <strong>showcase and e-shopping website</strong>
					<br />
					<br />
					<Image
						className="col-span-2 md:row-span-2 rounded-lg border border-black dark:border-stone-200 mx-auto"
						src="/imgs/working-on/vaillant-demo.gif"
						alt="Working on 1"
						width={800}
						height={500}
					/>
				</div>
				<div className="text-l row-span-3">
					I got the idea to create this website for Coach Vaillant when he told
					me about his apparel brand and how he needed a platform to{" "}
					showcase his <strong>coaching programs</strong> and{" "}
					<strong>customer reviews</strong>, while also serving as an{" "}
					<strong>e-commerce</strong> site to sell his apparel.
					<br />
					<br />
					His requirements were very specific, and I knew I could create a{" "}
					<strong>unique design</strong> tailored to his needs.
					<br />
					<br />
					The main page is divided into two halves by default:
					<ul className="list-disc pl-5">
						<li>
							The <strong>left side</strong> is dedicated to coaching programs,
							featuring his sports expertise and customer reviews.
						</li>
						<li>
							The <strong>right side</strong> is dedicated to the{" "}
							<strong>e-shop</strong>.
						</li>
					</ul>
					The divider&apos;s position can be adjusted by the user, and its state
					is stored in <strong>LocalStorage</strong> for quick retrieval on the
					next visit.
					<br />
					<br />
					The website also includes an <strong>admin panel</strong>, accessible
					via <strong>JWT authentication</strong>, which allows the admin to:
					<ul className="list-disc pl-5">
						<li>Create new items, colors, and collections</li>
						<li>Validate customer testimonials for the coaching section</li>
					</ul>
					The website is built with <strong>Next.js</strong> and{" "}
					<strong>Tailwind CSS</strong> for the front-end, and uses{" "}
					<strong>Supabase</strong> for the database and{" "}
					<strong>Blob Store</strong> for image storage. It also integrates with
					external APIs, such as automatically retrieving a reviewer&apos;s{" "}
					<strong>Instagram profile picture</strong> to display alongside their
					testimonial.
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
								View Demo
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkingOn;
