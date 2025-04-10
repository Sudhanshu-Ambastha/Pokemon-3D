/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/1025.glb -o models/gltfjsx/regular/1025.jsx 
Author: Squirmy Worm (https://sketchfab.com/squirmyworm064)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pecharunt-8107b1f76c7f4ae89dbd24a8433944e2
Title: Pecharunt
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/1025.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI, 0, 0]} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.PaletteMaterial002} rotation={[-Math.PI, 0, 0]} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/1025.glb')
