/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/803.glb -o models/gltfjsx/regular/803.jsx 
Author: Squirmy Worm (https://sketchfab.com/squirmyworm064)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/poipole-ddecd139eebf4d88ba7c58e76c90fcad
Title: Poipole
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/803.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI, 0, 0]} />
      <mesh geometry={nodes.Object_3.geometry} material={materials.PaletteMaterial002} rotation={[-Math.PI, 0, 0]} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.PaletteMaterial003} rotation={[-Math.PI, 0, 0]} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/803.glb')
