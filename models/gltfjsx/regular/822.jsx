/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/822.glb -o models/gltfjsx/regular/822.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/822.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.pm0919_00_00} />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
        <skinnedMesh geometry={nodes.Mesh002.geometry} material={materials.BodyA00} skeleton={nodes.Mesh002.skeleton} />
        <skinnedMesh geometry={nodes.Mesh002_1.geometry} material={materials.Eye} skeleton={nodes.Mesh002_1.skeleton} />
        <skinnedMesh geometry={nodes.Mesh002_2.geometry} material={materials.BodyB00} skeleton={nodes.Mesh002_2.skeleton} />
        <skinnedMesh geometry={nodes.Mesh002_3.geometry} material={materials.BodyA00} skeleton={nodes.Mesh002_3.skeleton} />
        <skinnedMesh geometry={nodes.Mesh002_4.geometry} material={materials.BodyB00} skeleton={nodes.Mesh002_4.skeleton} />
        <skinnedMesh geometry={nodes.Mesh002_5.geometry} material={materials.BodyA00} skeleton={nodes.Mesh002_5.skeleton} />
      </group>
      <skinnedMesh geometry={nodes.pm0919_00_00_LCloseWingSkin.geometry} material={materials.BodyA00} skeleton={nodes.pm0919_00_00_LCloseWingSkin.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={0.025} />
      <skinnedMesh geometry={nodes.pm0919_00_00_RCloseWingSkin.geometry} material={materials.BodyA00} skeleton={nodes.pm0919_00_00_RCloseWingSkin.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={0.025} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/822.glb')
