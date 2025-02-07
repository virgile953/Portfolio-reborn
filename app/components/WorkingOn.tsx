import Image from "next/image";

const WorkingOn = () => {
	return (
		<div className="py-32" id="now">
			<div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between">
				<h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
					What i&apos;m working on now:
				</h2>

			</div>
			<div className="grid lg:grid-cols-2 gap-4 mt-8">

				<div className="col-span-2 text-xl">coucou</div>

				<Image className="row-span-2" src="/imgs/working-on/vaillant-demo.gif" alt="Working on 1" width={500} height={500} />

				<div className="text-3xl">TopRight</div>
				<div className="text-3xl">coucou</div>

			</div>
		</div>
	);
};

export default WorkingOn;
