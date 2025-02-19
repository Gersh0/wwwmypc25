import React from 'react';
import { useGLTF } from '@react-three/drei';


const Laptop = (props) => {
  const { nodes, materials } = useGLTF("C:\\Users\\vorte\\Downloads\\UNIVERSIDAD\\wwwmypc25\\components\\atomic-design\\atoms\\models\\laptop\\laptop.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0.121, 0.007, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.MacBookPro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.MacBookPro}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.MacBookPro}
      />
    </group>
  );
};

export default Laptop;

useGLTF.preload("C:\\Users\\vorte\\Downloads\\UNIVERSIDAD\\wwwmypc25\\components\\atomic-design\\atoms\\models\\laptop\\laptop.gltf");