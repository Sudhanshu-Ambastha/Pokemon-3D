/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/392.glb -o models/gltfjsx/regular/392.jsx 
Author: ijackprovostjr (https://sketchfab.com/ijackprovostjr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pokemon-pokedex-3d-pro-infernape-51ec3101d01849d5b0c9930498c9ef47
Title: Pokemon PokeDex 3D Pro Infernape
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/392.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_125" rotation={[Math.PI / 2, 0, 0]} scale={1.937}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <group name="Object_0_116" />
                  <group name="Object_1_117" />
                  <group name="Object_2_118" />
                  <group name="Object_3_119" />
                  <group name="Object_4_120" />
                  <group name="Object_5_121" />
                  <group name="Object_6_122" />
                  <group name="Object_7_123" />
                  <group name="Object_8_124" />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.BodyB} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials['Eye.002']} skeleton={nodes.Object_9.skeleton} />
                  <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.BodyA} skeleton={nodes.Object_11.skeleton} />
                  <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.BodyA} skeleton={nodes.Object_13.skeleton} />
                  <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.BodyA} skeleton={nodes.Object_15.skeleton} />
                  <skinnedMesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.BodyA} skeleton={nodes.Object_17.skeleton} />
                  <skinnedMesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.BodyA} skeleton={nodes.Object_19.skeleton} />
                  <skinnedMesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials.BodyC_powa} skeleton={nodes.Object_21.skeleton} />
                  <skinnedMesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials.BodyC_line} skeleton={nodes.Object_23.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/392.glb')
