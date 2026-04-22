import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FloatingShapeProps {
  className?: string;
}

export function FloatingShape({ className = '' }: FloatingShapeProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth || 400;
    const h = mount.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Outer torus knot — wireframe
    const torusKnotGeo = new THREE.TorusKnotGeometry(1.4, 0.4, 120, 16, 2, 3);
    const torusKnotMat = new THREE.MeshBasicMaterial({
      color: 0x0d7377,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    scene.add(torusKnot);

    // Inner icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(0.85, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    scene.add(ico);

    // Outer ring
    const ringGeo = new THREE.TorusGeometry(2.2, 0.015, 8, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.3,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 4;
    scene.add(ring);

    // Ambient particles around shape
    const dotCount = 120;
    const dotPositions = new Float32Array(dotCount * 3);
    for (let i = 0; i < dotCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotCount);
      const theta = Math.sqrt(dotCount * Math.PI) * phi;
      const r = 2.8 + (Math.random() - 0.5) * 0.5;
      dotPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      dotPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      dotPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3));
    const dotMat = new THREE.PointsMaterial({
      color: 0x00d4ff,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
    });
    const dots = new THREE.Points(dotGeo, dotMat);
    scene.add(dots);

    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      torusKnot.rotation.x = t * 0.3;
      torusKnot.rotation.y = t * 0.2;
      ico.rotation.x = -t * 0.15;
      ico.rotation.z = t * 0.1;
      ring.rotation.z = t * 0.08;
      dots.rotation.y = t * 0.05;

      // Float up/down
      torusKnot.position.y = Math.sin(t * 0.7) * 0.15;
      ico.position.y = Math.sin(t * 0.7 + 0.5) * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const nw = mount.clientWidth || 400;
      const nh = mount.clientHeight || 400;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      torusKnotGeo.dispose();
      torusKnotMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      dotGeo.dispose();
      dotMat.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={`w-full h-full ${className}`} />;
}
