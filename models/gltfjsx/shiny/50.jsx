/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/shiny/50.glb -o models/gltfjsx/shiny/50.jsx 
Author: Miret (https://sketchfab.com/miret)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/taupiqueur-shiny-b784c7adce434f6f88d6bffd351faed7
Title: Taupiqueur Shiny
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/shiny/50.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube_trou_0.geometry} material={materials.trou} position={[0.194, 4.784, 0.023]} rotation={[-1.608, -0.387, 3.042]} scale={[0.06, 0.663, 0.426]} />
      <mesh geometry={nodes.tete_tete_0.geometry} material={materials.tete} position={[0, 4.851, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.167} />
      <mesh geometry={nodes.nez_nez_0.geometry} material={materials.material} position={[0.176, 4.967, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.035, 0.069, 0.031]} />
      <mesh geometry={nodes.oeil_droit_oeils_0.geometry} material={materials.oeils} position={[0.157, 5.049, -0.047]} rotation={[-Math.PI / 2, 1.454, 0]} scale={[0.039, 0.017, 0.011]} />
      <mesh geometry={nodes.pupille_droit_pupilles_0.geometry} material={materials.pupilles} position={[0.161, 5.071, -0.045]} rotation={[-Math.PI / 2, 1.266, 0]} scale={[0.01, 0.005, 0.003]} />
      <mesh geometry={nodes.ground_ao_ground_ao_0.geometry} material={materials.ground_ao} position={[0, 4.723, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.435} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/shiny/50.glb')
