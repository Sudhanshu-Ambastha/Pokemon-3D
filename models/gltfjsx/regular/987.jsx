/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/987.glb -o models/gltfjsx/regular/987.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/987.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm1087_00_00} />
        <primitive object={nodes.origin} />
        <primitive object={nodes.lod_group} />
        <skinnedMesh geometry={nodes.pm1087_00_00_jewel_mesh_shape.geometry} material={materials.body_b} skeleton={nodes.pm1087_00_00_jewel_mesh_shape.skeleton} />
        <skinnedMesh geometry={nodes.pm1087_00_00_body_mesh_shape_mesh.geometry} material={materials.body_a} skeleton={nodes.pm1087_00_00_body_mesh_shape_mesh.skeleton} />
        <skinnedMesh geometry={nodes.pm1087_00_00_body_mesh_shape_mesh_1.geometry} material={materials.body_b_01} skeleton={nodes.pm1087_00_00_body_mesh_shape_mesh_1.skeleton} />
        <skinnedMesh geometry={nodes.pm1087_00_00_eye_mesh_shape_mesh.geometry} material={materials.l_eye} skeleton={nodes.pm1087_00_00_eye_mesh_shape_mesh.skeleton} />
        <skinnedMesh geometry={nodes.pm1087_00_00_eye_mesh_shape_mesh_1.geometry} material={materials.r_eye} skeleton={nodes.pm1087_00_00_eye_mesh_shape_mesh_1.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/987.glb')
