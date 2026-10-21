import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ParticleField() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth || window.innerWidth;
    const h = mount.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, w / h, 0.1, 1000);
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Primary particle cloud
    const count = window.innerWidth < 768 ? 1200 : 2800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorA = new THREE.Color(0x00d4ff); // electric blue
    const colorB = new THREE.Color(0x0d7377); // teal
    const colorC = new THREE.Color(0x1a3a5c); // deep blue

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 90;
      positions[i3 + 1] = (Math.random() - 0.5) * 70;
      positions[i3 + 2] = (Math.random() - 0.5) * 50;

      const r = Math.random();
      const c = r < 0.5 ? colorA : r < 0.8 ? colorB : colorC;
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // Connecting lines layer (sparse)
    const lineCount = window.innerWidth < 768 ? 30 : 80;
    const linePositions = new Float32Array(lineCount * 6);
    for (let i = 0; i < lineCount; i++) {
      const i6 = i * 6;
      linePositions[i6] = (Math.random() - 0.5) * 70;
      linePositions[i6 + 1] = (Math.random() - 0.5) * 50;
      linePositions[i6 + 2] = (Math.random() - 0.5) * 30;
      linePositions[i6 + 3] = (Math.random() - 0.5) * 70;
      linePositions[i6 + 4] = (Math.random() - 0.5) * 50;
      linePositions[i6 + 5] = (Math.random() - 0.5) * 30;
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.06,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    // Mouse parallax
    const mouse = { x: 0, y: 0 };
    const targetCam = { x: 0, y: 0 };
    const handleMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouse);

    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      particles.rotation.y = t * 0.03;
      particles.rotation.x = t * 0.015;

      // Subtle wave on y positions — update only every 3 frames for perf
      if (Math.round(t * 60) % 3 === 0) {
        const pos = geo.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          pos.array[i3 + 1] =
            (positions[i3 + 1]) + Math.sin(t * 0.4 + positions[i3] * 0.05) * 0.8;
        }
        pos.needsUpdate = true;
      }

      // Smooth camera parallax
      targetCam.x += (mouse.x * 4 - targetCam.x) * 0.04;
      targetCam.y += (mouse.y * 3 - targetCam.y) * 0.04;
      camera.position.x = targetCam.x;
      camera.position.y = targetCam.y;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const nw = mount.clientWidth || window.innerWidth;
      const nh = mount.clientHeight || window.innerHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}
