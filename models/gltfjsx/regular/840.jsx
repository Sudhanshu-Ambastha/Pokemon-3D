/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/840.glb -o models/gltfjsx/regular/840.jsx 
Author: Spooky Boi (https://sketchfab.com/Aaron13)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pokemon-sword-and-shield-applin-model-e2850bffbec94b579d8f36c4f028a23a
Title: Pokemon Sword and Shield Applin Model
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/840.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Cylinder002_07_-_Default_0'].geometry} material={materials['07_-_Default']} position={[5.169, 0, 19.053]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['Cylinder002_Material_#25_0'].geometry} material={materials.Material_25} position={[5.169, 0, 19.053]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['Cylinder003_03_-_Default_0'].geometry} material={materials['03_-_Default']} position={[-16.043, 0, 19.053]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/840.glb')
