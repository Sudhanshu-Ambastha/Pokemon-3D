/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/245.glb -o models/gltfjsx/regular/245.jsx 
Author: Dodogamer (https://sketchfab.com/lazaronogueira832)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/suicune-f6381fbdaeef4f8588f08555c48851e5
Title: suicune
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/245.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.BodyB} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.BodyB_0} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.BodyASpc01} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.BodyASpc00} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.material} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.Eye01} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.BodyAVco} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.BodyAVco_0} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.BodyAVco_1} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.BodyAVco_2} />
          <mesh geometry={nodes.Object_14.geometry} material={materials.BodyA} />
          <mesh geometry={nodes.Object_15.geometry} material={materials.BodyA_0} />
          <mesh geometry={nodes.Object_16.geometry} material={materials.BodyA_1} />
          <mesh geometry={nodes.Object_17.geometry} material={materials.BodyA_2} />
          <mesh geometry={nodes.Object_18.geometry} material={materials.BodyA_2} />
          <mesh geometry={nodes.Object_19.geometry} material={materials.BodyA_1} />
          <mesh geometry={nodes.Object_20.geometry} material={materials.BodyA_0} />
          <mesh geometry={nodes.Object_21.geometry} material={materials.BodyA} />
          <mesh geometry={nodes.Object_22.geometry} material={materials.BodyAVco_2} />
          <mesh geometry={nodes.Object_23.geometry} material={materials.BodyAVco_1} />
          <mesh geometry={nodes.Object_24.geometry} material={materials.BodyAVco_0} />
          <mesh geometry={nodes.Object_25.geometry} material={materials.BodyAVco} />
          <mesh geometry={nodes.Object_26.geometry} material={materials.Eye01} />
          <mesh geometry={nodes.Object_27.geometry} material={materials.material} />
          <mesh geometry={nodes.Object_28.geometry} material={materials.BodyASpc00} />
          <mesh geometry={nodes.Object_29.geometry} material={materials.BodyASpc01} />
          <mesh geometry={nodes.Object_30.geometry} material={materials.BodyB_0} />
          <mesh geometry={nodes.Object_31.geometry} material={materials.BodyB} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/245.glb')
