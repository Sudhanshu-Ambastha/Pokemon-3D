/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/197.glb -o models/gltfjsx/regular/197.jsx 
Author: seth the yutyrannus (https://sketchfab.com/slang107123456789)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pokedex-3d-pro-umbreon-8fda51cf8e664142ae6f037b68993fcb
Title: Pokedex 3d Pro Umbreon
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/197.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="Object_68" geometry={nodes.Object_68.geometry} material={materials.material} skeleton={nodes.Object_68.skeleton} />
        <skinnedMesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials.Mouth} skeleton={nodes.Object_70.skeleton} />
        <skinnedMesh name="Object_72" geometry={nodes.Object_72.geometry} material={materials.Body} skeleton={nodes.Object_72.skeleton} />
        <skinnedMesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials.Body} skeleton={nodes.Object_74.skeleton} />
        <skinnedMesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials.material} skeleton={nodes.Object_76.skeleton} />
        <skinnedMesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials.Mouth} skeleton={nodes.Object_78.skeleton} />
        <skinnedMesh name="Object_80" geometry={nodes.Object_80.geometry} material={materials.Body} skeleton={nodes.Object_80.skeleton} />
        <skinnedMesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials.Body} skeleton={nodes.Object_82.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/197.glb')
