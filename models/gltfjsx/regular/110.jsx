/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/110.glb -o models/gltfjsx/regular/110.jsx 
Author: ghost028 (https://sketchfab.com/ghost028)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pokemon-weezing-09764c47b7224ef0a23b56421f798f64
Title: Pokemon Weezing
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/110.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={1.003}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.body} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.body} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={1.003}>
        <mesh geometry={nodes.Object_7.geometry} material={materials.body} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.body} />
      </group>
      <mesh geometry={nodes.Object_10.geometry} material={materials.body} position={[1.024, -0.587, -0.836]} rotation={[Math.PI / 2, 0, 0]} scale={1.003} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.material} rotation={[Math.PI / 2, 0, 0]} scale={1.003} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.material} rotation={[Math.PI / 2, 0, 0]} scale={1.003} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.mouth} position={[-0.008, -0.28, 0.607]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_18.geometry} material={materials.smoke} rotation={[Math.PI / 2, 0, 0]} scale={1.003} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.body} position={[1.277, -0.111, 0.219]} rotation={[-0.412, 0.19, 0.015]} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.mouth} rotation={[Math.PI / 2, 0, 0]} scale={1.003} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.mouth} rotation={[Math.PI / 2, 0, 0]} scale={1.003} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/110.glb')
