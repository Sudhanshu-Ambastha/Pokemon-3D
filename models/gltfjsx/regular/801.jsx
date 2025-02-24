/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/801.glb -o models/gltfjsx/regular/801.jsx 
Author: ijackprovostjr (https://sketchfab.com/ijackprovostjr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/nintendo-switch-pokemon-scarlet-violet-magearna-0c3abbd8f4794749bcf2c622c702621b
Title: Nintendo Switch Pokemon Scarlet Violet magearna
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/801.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh geometry={nodes.Object_6.geometry} material={materials.body_a_00} skeleton={nodes.Object_6.skeleton} />
        <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.body_a_01} skeleton={nodes.Object_7.skeleton} />
        <skinnedMesh geometry={nodes.Object_8.geometry} material={materials.body_a_02} skeleton={nodes.Object_8.skeleton} />
        <skinnedMesh geometry={nodes.Object_9.geometry} material={materials.body_b_01} skeleton={nodes.Object_9.skeleton} />
        <skinnedMesh geometry={nodes.Object_11.geometry} material={materials.body_a_01} skeleton={nodes.Object_11.skeleton} />
        <skinnedMesh geometry={nodes.Object_13.geometry} material={materials.body_a_00} skeleton={nodes.Object_13.skeleton} />
        <skinnedMesh geometry={nodes.Object_14.geometry} material={materials.body_b_01} skeleton={nodes.Object_14.skeleton} />
        <skinnedMesh geometry={nodes.Object_16.geometry} material={materials.body_a_00} skeleton={nodes.Object_16.skeleton} />
        <skinnedMesh geometry={nodes.Object_17.geometry} material={materials.body_b_01} skeleton={nodes.Object_17.skeleton} />
        <skinnedMesh geometry={nodes.Object_18.geometry} material={materials.body_b_00} skeleton={nodes.Object_18.skeleton} />
        <skinnedMesh geometry={nodes.Object_20.geometry} material={materials.body_a_00} skeleton={nodes.Object_20.skeleton} />
        <skinnedMesh geometry={nodes.Object_21.geometry} material={materials.body_a_01} skeleton={nodes.Object_21.skeleton} />
        <skinnedMesh geometry={nodes.Object_22.geometry} material={materials.body_a_02} skeleton={nodes.Object_22.skeleton} />
        <skinnedMesh geometry={nodes.Object_23.geometry} material={materials.body_b_01} skeleton={nodes.Object_23.skeleton} />
        <skinnedMesh geometry={nodes.Object_24.geometry} material={materials.body_b_00} skeleton={nodes.Object_24.skeleton} />
        <skinnedMesh geometry={nodes.Object_26.geometry} material={materials.body_a_00} skeleton={nodes.Object_26.skeleton} />
        <skinnedMesh geometry={nodes.Object_27.geometry} material={materials.body_b_01} skeleton={nodes.Object_27.skeleton} />
        <skinnedMesh geometry={nodes.Object_29.geometry} material={materials.l_eye} skeleton={nodes.Object_29.skeleton} />
        <skinnedMesh geometry={nodes.Object_30.geometry} material={materials.r_eye} skeleton={nodes.Object_30.skeleton} />
        <skinnedMesh geometry={nodes.Object_32.geometry} material={materials.body_a_00} skeleton={nodes.Object_32.skeleton} />
        <skinnedMesh geometry={nodes.Object_33.geometry} material={materials.body_a_01} skeleton={nodes.Object_33.skeleton} />
        <skinnedMesh geometry={nodes.Object_34.geometry} material={materials.body_a_02} skeleton={nodes.Object_34.skeleton} />
        <skinnedMesh geometry={nodes.Object_35.geometry} material={materials.body_b_01} skeleton={nodes.Object_35.skeleton} />
        <skinnedMesh geometry={nodes.Object_37.geometry} material={materials.body_a_01} skeleton={nodes.Object_37.skeleton} />
        <skinnedMesh geometry={nodes.Object_39.geometry} material={materials.body_b_01} skeleton={nodes.Object_39.skeleton} />
        <skinnedMesh geometry={nodes.Object_40.geometry} material={materials.body_a_00} skeleton={nodes.Object_40.skeleton} />
        <skinnedMesh geometry={nodes.Object_42.geometry} material={materials.body_a_00} skeleton={nodes.Object_42.skeleton} />
        <skinnedMesh geometry={nodes.Object_43.geometry} material={materials.body_b_01} skeleton={nodes.Object_43.skeleton} />
        <skinnedMesh geometry={nodes.Object_44.geometry} material={materials.body_b_00} skeleton={nodes.Object_44.skeleton} />
        <skinnedMesh geometry={nodes.Object_46.geometry} material={materials.body_a_00} skeleton={nodes.Object_46.skeleton} />
        <skinnedMesh geometry={nodes.Object_47.geometry} material={materials.body_a_02} skeleton={nodes.Object_47.skeleton} />
        <skinnedMesh geometry={nodes.Object_48.geometry} material={materials.body_b_01} skeleton={nodes.Object_48.skeleton} />
        <skinnedMesh geometry={nodes.Object_49.geometry} material={materials.body_b_00} skeleton={nodes.Object_49.skeleton} />
        <skinnedMesh geometry={nodes.Object_51.geometry} material={materials.l_eye} skeleton={nodes.Object_51.skeleton} />
        <skinnedMesh geometry={nodes.Object_52.geometry} material={materials.r_eye} skeleton={nodes.Object_52.skeleton} />
        <skinnedMesh geometry={nodes.Object_54.geometry} material={materials.body_b_01} skeleton={nodes.Object_54.skeleton} />
        <skinnedMesh geometry={nodes.Object_55.geometry} material={materials.body_a_00} skeleton={nodes.Object_55.skeleton} />
        <skinnedMesh geometry={nodes.Object_57.geometry} material={materials.body_a_00} skeleton={nodes.Object_57.skeleton} />
        <skinnedMesh geometry={nodes.Object_58.geometry} material={materials.body_a_02} skeleton={nodes.Object_58.skeleton} />
        <skinnedMesh geometry={nodes.Object_59.geometry} material={materials.body_b_01} skeleton={nodes.Object_59.skeleton} />
        <skinnedMesh geometry={nodes.Object_61.geometry} material={materials.body_a_01} skeleton={nodes.Object_61.skeleton} />
        <skinnedMesh geometry={nodes.Object_63.geometry} material={materials.body_a_00} skeleton={nodes.Object_63.skeleton} />
        <skinnedMesh geometry={nodes.Object_64.geometry} material={materials.body_b_01} skeleton={nodes.Object_64.skeleton} />
        <skinnedMesh geometry={nodes.Object_66.geometry} material={materials.body_a_00} skeleton={nodes.Object_66.skeleton} />
        <skinnedMesh geometry={nodes.Object_67.geometry} material={materials.body_b_01} skeleton={nodes.Object_67.skeleton} />
        <skinnedMesh geometry={nodes.Object_68.geometry} material={materials.body_b_00} skeleton={nodes.Object_68.skeleton} />
        <skinnedMesh geometry={nodes.Object_70.geometry} material={materials.body_a_00} skeleton={nodes.Object_70.skeleton} />
        <skinnedMesh geometry={nodes.Object_71.geometry} material={materials.body_a_02} skeleton={nodes.Object_71.skeleton} />
        <skinnedMesh geometry={nodes.Object_72.geometry} material={materials.body_b_01} skeleton={nodes.Object_72.skeleton} />
        <skinnedMesh geometry={nodes.Object_73.geometry} material={materials.body_b_00} skeleton={nodes.Object_73.skeleton} />
        <skinnedMesh geometry={nodes.Object_75.geometry} material={materials.l_eye} skeleton={nodes.Object_75.skeleton} />
        <skinnedMesh geometry={nodes.Object_76.geometry} material={materials.r_eye} skeleton={nodes.Object_76.skeleton} />
        <skinnedMesh geometry={nodes.Object_78.geometry} material={materials.body_b_01} skeleton={nodes.Object_78.skeleton} />
        <skinnedMesh geometry={nodes.Object_79.geometry} material={materials.body_a_00} skeleton={nodes.Object_79.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/801.glb')
