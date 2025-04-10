/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/196.glb -o models/gltfjsx/regular/196.jsx 
Author: seth the yutyrannus (https://sketchfab.com/slang107123456789)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pokedex-3d-pro-espeon-6e839167f75c47129d03dc0802d838d6
Title: Pokedex 3d Pro Espeon
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/196.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="Object_80" geometry={nodes.Object_80.geometry} material={materials.Mouth} skeleton={nodes.Object_80.skeleton} position={[0.037, 0, 0]} />
        <skinnedMesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials.material} skeleton={nodes.Object_82.skeleton} position={[0.037, 0, 0]} />
        <skinnedMesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials.BodyB} skeleton={nodes.Object_84.skeleton} position={[0.037, 0, 0]} />
        <skinnedMesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials.BodyB} skeleton={nodes.Object_86.skeleton} position={[0.037, 0, 0]} />
        <skinnedMesh name="Object_88" geometry={nodes.Object_88.geometry} material={materials.BodyB} skeleton={nodes.Object_88.skeleton} position={[0.037, 0, 0]} />
        <skinnedMesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials.BodyB} skeleton={nodes.Object_90.skeleton} position={[0.037, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/196.glb')
