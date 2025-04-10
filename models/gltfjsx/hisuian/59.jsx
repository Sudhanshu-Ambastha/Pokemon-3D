/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/hisuian/59.glb -o models/gltfjsx/hisuian/59.jsx 
Author: Forsaken AR Official (https://sketchfab.com/FNAF_AR_Official)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mobile-pokemon-home-059-arcanine-hisuian-6d1bce43389e4aa3be6262a01273b1bc
Title: Mobile - Pokemon HOME - 059 Arcanine Hisuian
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/hisuian/59.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="Object_115" geometry={nodes.Object_115.geometry} material={materials['pm0059_00_41-BodyA01']} skeleton={nodes.Object_115.skeleton} scale={0.5} />
        <skinnedMesh name="Object_116" geometry={nodes.Object_116.geometry} material={materials['pm0059_00_41-BodyA01']} skeleton={nodes.Object_116.skeleton} scale={0.5} />
        <skinnedMesh name="Object_117" geometry={nodes.Object_117.geometry} material={materials['pm0059_00_41-LEye']} skeleton={nodes.Object_117.skeleton} scale={0.5} />
        <skinnedMesh name="Object_118" geometry={nodes.Object_118.geometry} material={materials['pm0059_00_41-LEye']} skeleton={nodes.Object_118.skeleton} scale={0.5} />
        <skinnedMesh name="Object_120" geometry={nodes.Object_120.geometry} material={materials['pm0059_00_41-BodyB01']} skeleton={nodes.Object_120.skeleton} scale={0.5} />
        <skinnedMesh name="Object_122" geometry={nodes.Object_122.geometry} material={materials['pm0059_00_41-BodyA01']} skeleton={nodes.Object_122.skeleton} scale={0.5} />
        <skinnedMesh name="Object_124" geometry={nodes.Object_124.geometry} material={materials['pm0059_00_41-BodyB01']} skeleton={nodes.Object_124.skeleton} scale={0.5} />
        <skinnedMesh name="Object_125" geometry={nodes.Object_125.geometry} material={materials['pm0059_00_41-BodyB01']} skeleton={nodes.Object_125.skeleton} scale={0.5} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/hisuian/59.glb')
