"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

type Model = {
	name: string;
	modelPath: string;
	bgColor: string;
	texturePath: string | { color: string; normal: string };
};

const ModelDisplay: React.FC<{ model: Model }> = ({ model }) => {
	const mountRef = useRef<HTMLDivElement>(null);
	const loader = new FBXLoader();

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000000);
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(300, 300);

		// Lights
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
		directionalLight.position.set(5, 10, 7.5);
		scene.add(directionalLight);

		// Texture loader
		const textureLoader = new THREE.TextureLoader();
		let material: THREE.MeshStandardMaterial | undefined;

		// Load the texture if specified
		if (model.texturePath) {
			let texture: THREE.Texture;
			if (typeof model.texturePath === "object") {
				texture = textureLoader.load(model.texturePath.color);
			}
			else
				texture = textureLoader.load(model.texturePath as string);

			material = new THREE.MeshStandardMaterial({ map: texture });

		}

		// Define 'coucou' initially as undefined
		let coucou: THREE.Group | undefined;

		// Load the model
		loader.load(model.modelPath, (object) => {
			console.log(model.modelPath + " loaded");

			// If there's a material with the texture, apply it to the model
			if (material) {
				object.traverse((child) => {
					if (child instanceof THREE.Mesh) {
						child.material = material;
					}
				});
			}

			coucou = object;
			scene.add(coucou); // Add the model to the scene once it's loaded
		});

		camera.position.z = 5;

		function animate() {
			// Check if 'coucou' is loaded and animate it
			if (coucou) {
				coucou.rotation.x += 0.01;
				// coucou.rotation.y += 0.01;
			}

			renderer.render(scene, camera);
			requestAnimationFrame(animate);
		}
		animate();

		return () => {
			renderer.dispose();
			scene.clear();
		};
	}, [model.modelPath, model.texturePath, loader]);

	return <div ref={mountRef} />;
};

export default ModelDisplay;
