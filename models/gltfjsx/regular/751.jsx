/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/751.glb -o models/gltfjsx/regular/751.jsx 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/751.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_6001.geometry} material={materials['pm0850_00_Body_tga_png-material']} position={[-39.076, 0, 0]} />
      <mesh geometry={nodes.Object_1001.geometry} material={materials['pm0850_00_Eye_tga_png-material.001']} />
      <mesh geometry={nodes.Object_1001_1.geometry} material={materials['pm0850_00_Body_tga_png-material.001']} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/751.glb')
