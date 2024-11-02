"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { TrackballControls } from "three/addons/controls/TrackballControls.js";
import { TDSLoader } from "three/addons/loaders/TDSLoader.js";

const TDSFiles: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let camera: THREE.PerspectiveCamera;
		let scene: THREE.Scene;
		let renderer: THREE.WebGLRenderer;
		let controls: TrackballControls;

		// Initialize scene, camera, and renderer
		const init = () => {
			// Camera setup
			camera = new THREE.PerspectiveCamera(60, 300 / 300, 0.1, 10);
			camera.position.z = 2;

			// Scene setup
			scene = new THREE.Scene();
			scene.add(new THREE.AmbientLight(0xffffff, 3));

			const directionalLight = new THREE.DirectionalLight(0xffeedd, 3);
			directionalLight.position.set(0, 0, 2);
			scene.add(directionalLight);

			// Load texture and model
			const normal = new THREE.TextureLoader().load("/models/portalgun/textures/normal.jpg");

			const loader = new TDSLoader();
			loader.setResourcePath("/models/portalgun/textures/");
			loader.load("/models/portalgun/portalgun.3ds", (object) => {
				object.traverse((child) => {
					if ((child as THREE.Mesh).isMesh) {
						const mesh = child as THREE.Mesh;
						(mesh.material as THREE.MeshStandardMaterial).metalness = 0.1;
						(mesh.material as THREE.MeshStandardMaterial).normalMap = normal;
					}
				});
				scene.add(object);
			});

			// Renderer setup
			renderer = new THREE.WebGLRenderer({ antialias: true });
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(300, 300);
			renderer.setAnimationLoop(animate);

			// Append renderer to the DOM
			containerRef.current?.appendChild(renderer.domElement);

			// Controls setup
			controls = new TrackballControls(camera, renderer.domElement);

			// Handle window resize
			window.addEventListener("resize", onWindowResize);
		};

		// Resize handler
		const onWindowResize = () => {
			camera.aspect = 300 / 300;
			camera.updateProjectionMatrix();
			renderer.setSize(300, 300);
		};

		// Animation loop
		const animate = () => {
			controls.update();
			renderer.render(scene, camera);
		};

		// Initialize the scene
		init();

		// Cleanup function
		return () => {
			renderer.dispose();
			window.removeEventListener("resize", onWindowResize);
		};
	}, []);

	return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
};

export default TDSFiles;
