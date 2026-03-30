import Particles from "./Particles";

export const ParticlesBg = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Particles
          particleCount={360}
          particleSpread={13}
          speed={0.02}
          particleColors={["#606276", "#b5987d", "#ffffff"]}
          moveParticlesOnHover={false}
          particleHoverFactor={1}
          alphaParticles={false}
          particleBaseSize={60}
          sizeRandomness={0.5}
          cameraDistance={21}
          disableRotation={false}
        />
      </div>
    </div>
  );
};
