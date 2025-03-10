/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/959.glb -o models/gltfjsx/regular/959.jsx 
Author: ijackprovostjr (https://sketchfab.com/ijackprovostjr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pokemon-scarlet-and-violet-tinkaton-30b57799bd2042038503e9fd376148fa
Title: Pokemon Scarlet and Violet Tinkaton
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/959.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0.037]} scale={4.126}>
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh geometry={nodes.Object_7.geometry} material={materials['body_a_01.003']} skeleton={nodes.Object_7.skeleton} />
        <skinnedMesh geometry={nodes.Object_8.geometry} material={materials['body_a_00.003']} skeleton={nodes.Object_8.skeleton} />
        <skinnedMesh geometry={nodes.Object_10.geometry} material={materials['body_a_01.003']} skeleton={nodes.Object_10.skeleton} />
        <skinnedMesh geometry={nodes.Object_11.geometry} material={materials['body_a_00.003']} skeleton={nodes.Object_11.skeleton} />
        <skinnedMesh geometry={nodes.Object_13.geometry} material={materials['body_a_01.003']} skeleton={nodes.Object_13.skeleton} />
        <skinnedMesh geometry={nodes.Object_14.geometry} material={materials['body_a_00.003']} skeleton={nodes.Object_14.skeleton} />
        <skinnedMesh geometry={nodes.Object_16.geometry} material={materials['l_eye.004']} skeleton={nodes.Object_16.skeleton} />
        <skinnedMesh geometry={nodes.Object_17.geometry} material={materials['r_eye.004']} skeleton={nodes.Object_17.skeleton} />
        <skinnedMesh geometry={nodes.Object_19.geometry} material={materials['l_eye.004']} skeleton={nodes.Object_19.skeleton} />
        <skinnedMesh geometry={nodes.Object_20.geometry} material={materials['r_eye.004']} skeleton={nodes.Object_20.skeleton} />
        <skinnedMesh geometry={nodes.Object_22.geometry} material={materials['l_eye.004']} skeleton={nodes.Object_22.skeleton} />
        <skinnedMesh geometry={nodes.Object_23.geometry} material={materials['r_eye.004']} skeleton={nodes.Object_23.skeleton} />
        <skinnedMesh geometry={nodes.Object_25.geometry} material={materials['body_a_01.003']} skeleton={nodes.Object_25.skeleton} />
        <skinnedMesh geometry={nodes.Object_27.geometry} material={materials['body_a_01.003']} skeleton={nodes.Object_27.skeleton} />
        <skinnedMesh geometry={nodes.Object_29.geometry} material={materials['body_a_01.003']} skeleton={nodes.Object_29.skeleton} />
        <skinnedMesh geometry={nodes.Object_31.geometry} material={materials['body_a_00.003']} skeleton={nodes.Object_31.skeleton} />
        <skinnedMesh geometry={nodes.Object_33.geometry} material={materials['body_a_00.003']} skeleton={nodes.Object_33.skeleton} />
        <skinnedMesh geometry={nodes.Object_35.geometry} material={materials['body_a_00.003']} skeleton={nodes.Object_35.skeleton} />
        <skinnedMesh geometry={nodes.Object_37.geometry} material={materials['body_b_01.003']} skeleton={nodes.Object_37.skeleton} />
        <skinnedMesh geometry={nodes.Object_38.geometry} material={materials['body_b_00.003']} skeleton={nodes.Object_38.skeleton} />
        <skinnedMesh geometry={nodes.Object_40.geometry} material={materials['body_b_01.003']} skeleton={nodes.Object_40.skeleton} />
        <skinnedMesh geometry={nodes.Object_41.geometry} material={materials['body_b_00.003']} skeleton={nodes.Object_41.skeleton} />
        <skinnedMesh geometry={nodes.Object_43.geometry} material={materials['body_b_01.003']} skeleton={nodes.Object_43.skeleton} />
        <skinnedMesh geometry={nodes.Object_44.geometry} material={materials['body_b_00.003']} skeleton={nodes.Object_44.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/959.glb')
