/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/310.glb -o models/gltfjsx/regular/310.jsx 
Author: nguyenlouis32 (https://sketchfab.com/nguyenlouis32)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/manectric-f157a720da314b5cb1510a72efc2e389
Title: Manectric
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/310.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh geometry={nodes.Object_6.geometry} material={materials.BodyVco01} skeleton={nodes.Object_6.skeleton} />
        <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.Body00} skeleton={nodes.Object_7.skeleton} />
        <skinnedMesh geometry={nodes.Object_8.geometry} material={materials.material} skeleton={nodes.Object_8.skeleton} />
        <skinnedMesh geometry={nodes.Object_9.geometry} material={materials.BodyVco00} skeleton={nodes.Object_9.skeleton} />
        <skinnedMesh geometry={nodes.Object_10.geometry} material={materials.Body02} skeleton={nodes.Object_10.skeleton} />
        <skinnedMesh geometry={nodes.Object_11.geometry} material={materials.Body01} skeleton={nodes.Object_11.skeleton} />
        <skinnedMesh geometry={nodes.Object_12.geometry} material={materials.Body03} skeleton={nodes.Object_12.skeleton} />
        <skinnedMesh geometry={nodes.Object_13.geometry} material={materials.Body04} skeleton={nodes.Object_13.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/310.glb')
