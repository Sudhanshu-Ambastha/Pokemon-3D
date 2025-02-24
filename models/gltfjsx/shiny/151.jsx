/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/shiny/151.glb -o models/gltfjsx/shiny/151.jsx 
Author: Marshmerou (https://sketchfab.com/Marshmerou)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mew-shiny-8b530913b8e34d1182e09b03a6426ca7
Title: Mew Shiny
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/shiny/151.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[8.097, 266.144, -247.164]} rotation={[-1.396, 0, Math.PI / 2]} scale={100}>
          <mesh geometry={nodes.NurbsPath_Material002_0.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.NurbsPath_Material001_0.geometry} material={materials['Material.001']} />
        </group>
        <group position={[0, 248.89, 0]} rotation={[-1.233, 0, 0]} scale={[85.743, 100, 100]}>
          <mesh geometry={nodes.duplicate_Material_0.geometry} material={materials.Material} />
          <mesh geometry={nodes.duplicate_Material001_0.geometry} material={materials['Material.001']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/shiny/151.glb')
