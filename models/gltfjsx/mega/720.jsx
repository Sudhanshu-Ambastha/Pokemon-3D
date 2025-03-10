/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/mega/720.glb -o models/gltfjsx/mega/720.jsx 
Author: ijackprovostjr (https://sketchfab.com/ijackprovostjr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pokemon-scarlet-and-violet-mega-hoppa-38d1bb0afee74b468ab05db8c283c0bf
Title: Pokemon Scarlet and Violet Mega Hoppa
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/mega/720.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={4.332}>
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh geometry={nodes.Object_7.geometry} material={materials['body_a_00.001']} skeleton={nodes.Object_7.skeleton} />
        <skinnedMesh geometry={nodes.Object_9.geometry} material={materials['body_a_00.001']} skeleton={nodes.Object_9.skeleton} />
        <skinnedMesh geometry={nodes.Object_11.geometry} material={materials['body_a_00.001']} skeleton={nodes.Object_11.skeleton} />
        <skinnedMesh geometry={nodes.Object_13.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_13.skeleton} />
        <skinnedMesh geometry={nodes.Object_15.geometry} material={materials['l_eye.001']} skeleton={nodes.Object_15.skeleton} />
        <skinnedMesh geometry={nodes.Object_17.geometry} material={materials['r_eye.001']} skeleton={nodes.Object_17.skeleton} />
        <skinnedMesh geometry={nodes.Object_19.geometry} material={materials['body_a_00.001']} skeleton={nodes.Object_19.skeleton} />
        <skinnedMesh geometry={nodes.Object_21.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_21.skeleton} />
        <skinnedMesh geometry={nodes.Object_23.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_23.skeleton} />
        <skinnedMesh geometry={nodes.Object_25.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_25.skeleton} />
        <skinnedMesh geometry={nodes.Object_27.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_27.skeleton} />
        <skinnedMesh geometry={nodes.Object_29.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_29.skeleton} />
        <skinnedMesh geometry={nodes.Object_31.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_31.skeleton} />
        <skinnedMesh geometry={nodes.Object_33.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_33.skeleton} />
        <skinnedMesh geometry={nodes.Object_35.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_35.skeleton} />
        <skinnedMesh geometry={nodes.Object_37.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_37.skeleton} />
        <skinnedMesh geometry={nodes.Object_39.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_39.skeleton} />
        <skinnedMesh geometry={nodes.Object_41.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_41.skeleton} />
        <skinnedMesh geometry={nodes.Object_43.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_43.skeleton} />
        <skinnedMesh geometry={nodes.Object_45.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_45.skeleton} />
        <skinnedMesh geometry={nodes.Object_47.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_47.skeleton} />
        <skinnedMesh geometry={nodes.Object_49.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_49.skeleton} />
        <skinnedMesh geometry={nodes.Object_51.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_51.skeleton} />
        <skinnedMesh geometry={nodes.Object_53.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_53.skeleton} />
        <skinnedMesh geometry={nodes.Object_55.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_55.skeleton} />
        <skinnedMesh geometry={nodes.Object_57.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_57.skeleton} />
        <skinnedMesh geometry={nodes.Object_59.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_59.skeleton} />
        <skinnedMesh geometry={nodes.Object_61.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_61.skeleton} />
        <skinnedMesh geometry={nodes.Object_63.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_63.skeleton} />
        <skinnedMesh geometry={nodes.Object_65.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_65.skeleton} />
        <skinnedMesh geometry={nodes.Object_67.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_67.skeleton} />
        <skinnedMesh geometry={nodes.Object_69.geometry} material={materials['body_b_00.001']} skeleton={nodes.Object_69.skeleton} />
        <skinnedMesh geometry={nodes.Object_71.geometry} material={materials['body_a_00.001']} skeleton={nodes.Object_71.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/mega/720.glb')
