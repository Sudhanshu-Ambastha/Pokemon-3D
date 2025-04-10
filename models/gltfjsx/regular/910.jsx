/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/910.glb -o models/gltfjsx/regular/910.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/910.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.pm1014_00_00} />
      <group rotation={[2.03, 0, 0]} scale={0.025}>
        <skinnedMesh geometry={nodes.Mesh001.geometry} material={materials.body_b_03} skeleton={nodes.Mesh001.skeleton} />
        <skinnedMesh geometry={nodes.Mesh001_1.geometry} material={materials.body_a_01} skeleton={nodes.Mesh001_1.skeleton} />
        <skinnedMesh geometry={nodes.Mesh001_2.geometry} material={materials.body_a_01} skeleton={nodes.Mesh001_2.skeleton} />
      </group>
      <group rotation={[2.03, 0, 0]} scale={0.025}>
        <skinnedMesh geometry={nodes.Mesh008.geometry} material={materials.body_b_03} skeleton={nodes.Mesh008.skeleton} />
        <skinnedMesh geometry={nodes.Mesh008_1.geometry} material={materials.body_a_01} skeleton={nodes.Mesh008_1.skeleton} />
        <skinnedMesh geometry={nodes.Mesh008_2.geometry} material={materials.body_a_01} skeleton={nodes.Mesh008_2.skeleton} />
      </group>
      <group rotation={[2.03, 0, 0]} scale={0.025}>
        <skinnedMesh geometry={nodes.Mesh015.geometry} material={materials.body_b_03} skeleton={nodes.Mesh015.skeleton} />
        <skinnedMesh geometry={nodes.Mesh015_1.geometry} material={materials.body_a_01} skeleton={nodes.Mesh015_1.skeleton} />
        <skinnedMesh geometry={nodes.Mesh015_2.geometry} material={materials.body_a_01} skeleton={nodes.Mesh015_2.skeleton} />
      </group>
      <group rotation={[2.03, 0, 0]} scale={0.025}>
        <skinnedMesh geometry={nodes.Mesh.geometry} material={materials.l_eye} skeleton={nodes.Mesh.skeleton} />
        <skinnedMesh geometry={nodes.Mesh_1.geometry} material={materials.l_eye} skeleton={nodes.Mesh_1.skeleton} />
      </group>
      <group rotation={[2.03, 0, 0]} scale={0.025}>
        <skinnedMesh geometry={nodes.Mesh007.geometry} material={materials.l_eye} skeleton={nodes.Mesh007.skeleton} />
        <skinnedMesh geometry={nodes.Mesh007_1.geometry} material={materials.l_eye} skeleton={nodes.Mesh007_1.skeleton} />
      </group>
      <group rotation={[2.03, 0, 0]} scale={0.025}>
        <skinnedMesh geometry={nodes.Mesh014.geometry} material={materials.l_eye} skeleton={nodes.Mesh014.skeleton} />
        <skinnedMesh geometry={nodes.Mesh014_1.geometry} material={materials.l_eye} skeleton={nodes.Mesh014_1.skeleton} />
      </group>
      <skinnedMesh geometry={nodes.pm1014_00_00_eyelid_a_mesh_shape.geometry} material={materials.body_b_03} skeleton={nodes.pm1014_00_00_eyelid_a_mesh_shape.skeleton} rotation={[2.03, 0, 0]} scale={0.025} />
      <skinnedMesh geometry={nodes.pm1014_00_00_eyelid_a_mesh_shape_lod1.geometry} material={materials.body_b_03} skeleton={nodes.pm1014_00_00_eyelid_a_mesh_shape_lod1.skeleton} rotation={[2.03, 0, 0]} scale={0.025} />
      <skinnedMesh geometry={nodes.pm1014_00_00_eyelid_a_mesh_shape_lod2.geometry} material={materials.body_b_03} skeleton={nodes.pm1014_00_00_eyelid_a_mesh_shape_lod2.skeleton} rotation={[2.03, 0, 0]} scale={0.025} />
      <skinnedMesh geometry={nodes.pm1014_00_00_eyelid_b_mesh_shape.geometry} material={materials.body_b_03} skeleton={nodes.pm1014_00_00_eyelid_b_mesh_shape.skeleton} rotation={[2.03, 0, 0]} scale={0.025} />
      <skinnedMesh geometry={nodes.pm1014_00_00_eyelid_b_mesh_shape_lod1.geometry} material={materials.body_b_03} skeleton={nodes.pm1014_00_00_eyelid_b_mesh_shape_lod1.skeleton} rotation={[2.03, 0, 0]} scale={0.025} />
      <skinnedMesh geometry={nodes.pm1014_00_00_eyelid_b_mesh_shape_lod2.geometry} material={materials.body_b_03} skeleton={nodes.pm1014_00_00_eyelid_b_mesh_shape_lod2.skeleton} rotation={[2.03, 0, 0]} scale={0.025} />
      <skinnedMesh geometry={nodes.pm1014_00_00_inc_a_mesh_shape.geometry} material={materials.body_b_03} skeleton={nodes.pm1014_00_00_inc_a_mesh_shape.skeleton} rotation={[2.03, 0, 0]} scale={0.025} />
      <skinnedMesh geometry={nodes.pm1014_00_00_inc_a_mesh_shape_lod1.geometry} material={materials.body_b_03} skeleton={nodes.pm1014_00_00_inc_a_mesh_shape_lod1.skeleton} rotation={[2.03, 0, 0]} scale={0.025} />
      <skinnedMesh geometry={nodes.pm1014_00_00_inc_a_mesh_shape_lod2.geometry} material={materials.body_b_03} skeleton={nodes.pm1014_00_00_inc_a_mesh_shape_lod2.skeleton} rotation={[2.03, 0, 0]} scale={0.025} />
      <skinnedMesh geometry={nodes.pm1014_00_00_inc_b_mesh_shape.geometry} material={materials.body_b_03} skeleton={nodes.pm1014_00_00_inc_b_mesh_shape.skeleton} rotation={[2.03, 0, 0]} scale={0.025} />
      <skinnedMesh geometry={nodes.pm1014_00_00_inc_b_mesh_shape_lod1.geometry} material={materials.body_b_03} skeleton={nodes.pm1014_00_00_inc_b_mesh_shape_lod1.skeleton} rotation={[2.03, 0, 0]} scale={0.025} />
      <skinnedMesh geometry={nodes.pm1014_00_00_inc_b_mesh_shape_lod2.geometry} material={materials.body_b_03} skeleton={nodes.pm1014_00_00_inc_b_mesh_shape_lod2.skeleton} rotation={[2.03, 0, 0]} scale={0.025} />
      <skinnedMesh geometry={nodes.pm1014_00_00_nest_mesh_shape.geometry} material={materials.body_b_02} skeleton={nodes.pm1014_00_00_nest_mesh_shape.skeleton} rotation={[2.03, 0, 0]} scale={0.025} />
      <skinnedMesh geometry={nodes.pm1014_00_00_nest_mesh_shape_lod1.geometry} material={materials.body_b_02} skeleton={nodes.pm1014_00_00_nest_mesh_shape_lod1.skeleton} rotation={[2.03, 0, 0]} scale={0.025} />
      <skinnedMesh geometry={nodes.pm1014_00_00_nest_mesh_shape_lod2.geometry} material={materials.body_b_02} skeleton={nodes.pm1014_00_00_nest_mesh_shape_lod2.skeleton} rotation={[2.03, 0, 0]} scale={0.025} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/910.glb')
