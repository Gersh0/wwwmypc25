import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Laptop =(props)=> {
  const { nodes, materials } = useGLTF('/models/computer/source/laptop.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_1.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_2.geometry}
        material={materials['Material.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_3.geometry}
        material={materials['Material.004']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_4.geometry}
        material={materials['Material.006']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_5.geometry}
        material={materials['Material.007']}
      />
    </group>
  )
}

export default Laptop

useGLTF.preload('/models/computer/source/laptop.glb')



