/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/multiForm/RotomHeat.glb -o models/gltfjsx/multiForm/RotomHeat.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/multiForm/RotomHeat.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty" position={[-5.968, 1.496, -0.861]} rotation={[1.159, -0.014, 0.032]} />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.14}>
          <primitive object={nodes.pm0479_12_00_prefab} />
          <skinnedMesh name="_000_pm0479_12_00_prefab" geometry={nodes._000_pm0479_12_00_prefab.geometry} material={materials.pm0479_12_00_BodyHinoarashi00} skeleton={nodes._000_pm0479_12_00_prefab.skeleton} />
          <skinnedMesh name="_001_pm0479_12_00_prefab" geometry={nodes._001_pm0479_12_00_prefab.geometry} material={materials.pm0479_12_00_FireMask} skeleton={nodes._001_pm0479_12_00_prefab.skeleton} />
          <skinnedMesh name="_002_pm0479_12_00_prefab" geometry={nodes._002_pm0479_12_00_prefab.geometry} material={materials.pm0479_12_00_BodyRotomVco02} skeleton={nodes._002_pm0479_12_00_prefab.skeleton} />
          <skinnedMesh name="_003_pm0479_12_00_prefab" geometry={nodes._003_pm0479_12_00_prefab.geometry} material={materials.pm0479_12_00_BodyRotomVco01} skeleton={nodes._003_pm0479_12_00_prefab.skeleton} />
          <skinnedMesh name="_004_pm0479_12_00_prefab" geometry={nodes._004_pm0479_12_00_prefab.geometry} material={materials.pm0479_12_00_BodyRotomVco00} skeleton={nodes._004_pm0479_12_00_prefab.skeleton} />
          <skinnedMesh name="_005_pm0479_12_00_prefab" geometry={nodes._005_pm0479_12_00_prefab.geometry} material={materials.pm0479_12_00_BodyRotom01} skeleton={nodes._005_pm0479_12_00_prefab.skeleton} />
          <skinnedMesh name="_006_pm0479_12_00_prefab" geometry={nodes._006_pm0479_12_00_prefab.geometry} material={materials.pm0479_12_00_BodyRotom00} skeleton={nodes._006_pm0479_12_00_prefab.skeleton} />
          <skinnedMesh name="_007_pm0479_12_00_prefab" geometry={nodes._007_pm0479_12_00_prefab.geometry} material={materials.pm0479_12_00_Mouth} skeleton={nodes._007_pm0479_12_00_prefab.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/multiForm/RotomHeat.glb')
