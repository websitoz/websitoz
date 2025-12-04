"use client";
import { FC, Suspense, useRef, useLayoutEffect, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useFBX,
  useProgress,
  Html,
  ContactShadows,
  Center,
} from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

// ------------------------------------------------------------
// Loader
// ------------------------------------------------------------
const Loader: FC = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-gray-400 text-lg font-semibold drop-shadow-lg font-robert-medium">
        {Math.round(progress)}%
      </div>
    </Html>
  );
};

// Font classes
const fonts = {
  heading: "font-zentry",
  paragraph: "font-general",
  medium: "font-robert-medium",
  regular: "font-robert-regular",
};

// ------------------------------------------------------------
const deg2rad = (d: number) => (d * Math.PI) / 180;

// ------------------------------------------------------------
// Scene Content
// ------------------------------------------------------------
const SceneContent: FC<any> = ({ url, autoRotate, autoRotateSpeed }) => {
  const modelRef = useRef<THREE.Group>(null!);
  const ext = url.split(".").pop()?.toLowerCase();

  useFrame((state, delta) => {
    if (autoRotate && modelRef.current) {
      modelRef.current.rotation.y += (autoRotateSpeed || 1) * delta;
    }
  });

  const ModelComponent = () => {
    switch (ext) {
      case "glb":
      case "gltf":
        return <primitive object={useGLTF(url).scene.clone()} />;
      case "fbx":
        return <primitive object={useFBX(url).clone()} />;
      case "obj":
        return <primitive object={useLoader(OBJLoader as any, url).clone()} />;
      default:
        return null;
    }
  };

  return (
    <Center>
      <group ref={modelRef} scale={2.2}>
        <ModelComponent />
      </group>
    </Center>
  );
};

// ------------------------------------------------------------
// Main Viewer Component
// ------------------------------------------------------------
const ModelViewer: FC<any> = ({
  url,
  autoRotate = true,
  autoRotateSpeed = 0.4,
}) => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-16 py-20 px-10">

      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 space-y-6">

        <h2
          className={`text-4xl md:text-5xl font-bold leading-tight text-white ${fonts.heading}`}
        >
          We design & build
          <br />
          exceptional digital experiences.
        </h2>

        <p
          className={`text-gray-700 text-lg leading-relaxed max-w-md ${fonts.paragraph}`}
        >
          From high-performance websites to immersive 3D interfaces and fully animated
          digital experiences — we craft everything that helps brands stand out.
        </p>

        <p className={`text-gray-400 text-base leading-relaxed ${fonts.regular}`}>
          Web Development • App Development • 3D Websites • Interactive UI • Motion Design •
          Branding • Custom Dashboards • Marketing Sites • Complete Digital Solutions
        </p>
      </div>

      {/* RIGHT 3D MODEL */}
      <div className="w-full md:w-1/2 h-[450px] md:h-[560px] rounded-xl overflow-hidden">
        <Canvas
          shadows
          camera={{ fov: 45, position: [0, 0, 2] }}
          gl={{
            toneMapping: THREE.ACESFilmicToneMapping,
            outputColorSpace: THREE.SRGBColorSpace,
          }}
        >
          <Suspense fallback={<Loader />}>
            <SceneContent
              url={url}
              autoRotate={autoRotate}
              autoRotateSpeed={deg2rad(autoRotateSpeed)}
            />
          </Suspense>

          {/* LIGHTS */}
          <ambientLight intensity={0.45} />
          <directionalLight position={[4, 4, 4]} intensity={1} castShadow />
          <ContactShadows position={[0, -1, 0]} opacity={0.35} scale={10} blur={2} />

          <OrbitControls enablePan={false} enableZoom />
        </Canvas>
      </div>
    </section>
  );
};

export default ModelViewer;
