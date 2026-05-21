"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Stars } from "@react-three/drei";
import type { Group } from "three";
import { skills } from "@/lib/portfolio-data";

const palette = ["#49f5d7", "#ffe86a", "#ff5a7a", "#5f8cff", "#b0ff7a", "#ffffff"];

function SkillPlanet({
  label,
  index,
  ring,
  total
}: {
  label: string;
  index: number;
  ring: number;
  total: number;
}) {
  const [active, setActive] = useState(false);
  const angle = (index / total) * Math.PI * 2 + ring * 0.38;
  const radius = 1.75 + ring * 0.66;
  const y = Math.sin(angle * 1.7) * 0.42;
  const color = palette[(index + ring) % palette.length];

  return (
    <group position={[Math.cos(angle) * radius, y, Math.sin(angle) * radius]}>
      <mesh
        onPointerOver={() => setActive(true)}
        onPointerOut={() => setActive(false)}
        scale={active ? 1.28 : 1}
      >
        <sphereGeometry args={[0.13 + ring * 0.015, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={active ? 2 : 0.65} />
      </mesh>
      <Html center distanceFactor={active ? 8 : 11} className="pointer-events-none select-none">
        <span
          className="whitespace-nowrap rounded-full border border-white/10 bg-black/55 px-2.5 py-1 text-[10px] font-semibold text-white shadow-glow backdrop-blur-md"
          style={{ color: active ? color : "#f7fbff" }}
        >
          {label}
        </span>
      </Html>
    </group>
  );
}

function GalaxyCore() {
  const group = useRef<Group>(null);
  const allSkills = useMemo(
    () =>
      Object.entries(skills).flatMap(([category, items], ring) =>
        items.map((label, index) => ({ category, label, ring, index, total: items.length }))
      ),
    []
  );

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.08;
      group.current.rotation.x = Math.sin(Date.now() * 0.00025) * 0.08;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[0.48, 64, 64]} />
        <meshStandardMaterial color="#49f5d7" emissive="#49f5d7" emissiveIntensity={1.8} />
      </mesh>
      {[1.75, 2.41, 3.07, 3.73, 4.39, 5.05].map((radius) => (
        <mesh key={radius} rotation={[Math.PI / 2.25, 0, 0]}>
          <torusGeometry args={[radius, 0.006, 8, 160]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.11} />
        </mesh>
      ))}
      {allSkills.map((skill) => (
        <SkillPlanet
          key={`${skill.category}-${skill.label}`}
          label={skill.label}
          index={skill.index}
          ring={skill.ring}
          total={skill.total}
        />
      ))}
    </group>
  );
}

export function SkillGalaxy() {
  return (
    <div className="relative h-[560px] overflow-hidden rounded-[28px] border border-white/10 bg-black/35 shadow-2xl md:h-[680px]">
      <Canvas camera={{ position: [0, 3.35, 10.8], fov: 45 }} dpr={[1, 1.6]}>
        <color attach="background" args={["#04060a"]} />
        <ambientLight intensity={0.42} />
        <pointLight position={[4, 6, 4]} intensity={42} color="#49f5d7" />
        <pointLight position={[-4, -2, -3]} intensity={18} color="#ff5a7a" />
        <Stars radius={50} depth={18} count={900} factor={3} saturation={0} fade speed={0.6} />
        <GalaxyCore />
        <OrbitControls enablePan={false} minDistance={7.5} maxDistance={14} autoRotate autoRotateSpeed={0.35} />
      </Canvas>
      <div className="pointer-events-none absolute left-5 top-5 max-w-xs">
        <p className="font-display text-xs uppercase tracking-[0.28em] text-signal">Skill Galaxy</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-5xl">Orbital tech stack</h2>
      </div>
    </div>
  );
}
