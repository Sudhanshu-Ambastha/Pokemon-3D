/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/696.glb -o models/gltfjsx/regular/696.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/696.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group scale={2.54}>
        <group position={[0, 0.576, -0.05]} rotation={[1.553, 0, Math.PI / 2]}>
          <primitive object={nodes.Hips} />
          <primitive object={nodes.Spine} />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
        <skinnedMesh geometry={nodes.Tyrunt_1.geometry} material={materials['Material #10']} skeleton={nodes.Tyrunt_1.skeleton} />
        <skinnedMesh geometry={nodes.Tyrunt_2.geometry} material={materials['Material #11']} skeleton={nodes.Tyrunt_2.skeleton} />
        <skinnedMesh geometry={nodes.Tyrunt_3.geometry} material={materials['Material #12']} skeleton={nodes.Tyrunt_3.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/696.glb')
