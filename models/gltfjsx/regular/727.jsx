/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/727.glb -o models/gltfjsx/regular/727.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/727.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
        <primitive object={nodes.pm0846_00} />
        <skinnedMesh geometry={nodes.Incineroar_Belt_Layer1.geometry} material={materials.FireStenA1} skeleton={nodes.Incineroar_Belt_Layer1.skeleton} />
        <skinnedMesh geometry={nodes.Incineroar_Belt_Layer2.geometry} material={materials.FireStenA2} skeleton={nodes.Incineroar_Belt_Layer2.skeleton} />
        <skinnedMesh geometry={nodes.Incineroar_Belt_Layer3.geometry} material={materials.BodyC} skeleton={nodes.Incineroar_Belt_Layer3.skeleton} />
        <skinnedMesh geometry={nodes.Incineroar_BeltSpikes_Layer1.geometry} material={materials.FireStenA1} skeleton={nodes.Incineroar_BeltSpikes_Layer1.skeleton} />
        <skinnedMesh geometry={nodes.Incineroar_BeltSpikes_Layer2.geometry} material={materials.FireStenA2} skeleton={nodes.Incineroar_BeltSpikes_Layer2.skeleton} />
        <skinnedMesh geometry={nodes.Incineroar_BeltSpikes_Layer3.geometry} material={materials.BodyC} skeleton={nodes.Incineroar_BeltSpikes_Layer3.skeleton} />
        <skinnedMesh geometry={nodes.Mesh.geometry} material={materials.BodyA} skeleton={nodes.Mesh.skeleton} />
        <skinnedMesh geometry={nodes.Mesh_1.geometry} material={materials.Eye} skeleton={nodes.Mesh_1.skeleton} />
        <skinnedMesh geometry={nodes.Mesh_2.geometry} material={materials.LIris} skeleton={nodes.Mesh_2.skeleton} />
        <skinnedMesh geometry={nodes.Mesh_3.geometry} material={materials.RIris} skeleton={nodes.Mesh_3.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/727.glb')
