/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/220.glb -o models/gltfjsx/regular/220.jsx 
Author: nguyenlouis32 (https://sketchfab.com/nguyenlouis32)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/swinub-03bf7a73630543c48591487b0abc43ab
Title: Swinub
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/220.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_3.geometry} material={materials.body_mat} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.eye_mat} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.mouth_mat} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.mouth_mat} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.eye_mat} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.body_mat} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/220.glb')
