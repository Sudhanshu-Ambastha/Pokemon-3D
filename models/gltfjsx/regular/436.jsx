/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/436.glb -o models/gltfjsx/regular/436.jsx 
Author: nguyenlouis32 (https://sketchfab.com/nguyenlouis32)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bronzor-2744861cdfde4bc4b6c3a8826fb23b51
Title: Bronzor
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/436.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[3.141, Math.PI / 2, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.DohmirrorDh} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.DohmirrorEyeDh} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/436.glb')
