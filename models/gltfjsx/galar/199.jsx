/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/galar/199.glb -o models/gltfjsx/galar/199.jsx 
Author: artpants_ (https://sketchfab.com/artpants_)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/galarian-slowking-pokemon-scarlet-violet-0199-b701441517e0401ea87c594c89893f30
Title: Galarian slowking Pokemon Scarlet Violet - 0199
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/galar/199.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.body_b_00} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.body_b_01} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.l_eye_a} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.l_eye_b} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.r_eye_a} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.r_eye_b} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.body_a_00} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/galar/199.glb')
