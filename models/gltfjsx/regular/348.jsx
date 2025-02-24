/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/348.glb -o models/gltfjsx/regular/348.jsx 
Author: ijackprovostjr (https://sketchfab.com/ijackprovostjr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pokedex-3d-pro-armaldo-43cb22e1a4884636ac820f89121b7d11
Title: PokeDex 3D Pro Armaldo
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/348.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_72" rotation={[Math.PI / 2, 0, 0]} scale={2.218}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <group name="Object_0_68" />
                  <group name="Object_1_69" />
                  <group name="Object_2_70" />
                  <group name="Object_3_71" />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.BodyA} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.material} skeleton={nodes.Object_9.skeleton} />
                  <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.BodyB} skeleton={nodes.Object_11.skeleton} />
                  <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.BodyA} skeleton={nodes.Object_13.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/348.glb')
