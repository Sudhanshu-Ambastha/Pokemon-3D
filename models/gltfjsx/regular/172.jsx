/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/172.glb -o models/gltfjsx/regular/172.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/172.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <primitive object={nodes.Spine} />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
        <skinnedMesh geometry={nodes.Pichu_1.geometry} material={materials['Material #146']} skeleton={nodes.Pichu_1.skeleton} />
        <skinnedMesh geometry={nodes.Pichu_2.geometry} material={materials['Material #147']} skeleton={nodes.Pichu_2.skeleton} />
        <skinnedMesh geometry={nodes.Pichu_3.geometry} material={materials['Material #148']} skeleton={nodes.Pichu_3.skeleton} />
        <skinnedMesh geometry={nodes.Pichu_4.geometry} material={materials['Material #149']} skeleton={nodes.Pichu_4.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/172.glb')
