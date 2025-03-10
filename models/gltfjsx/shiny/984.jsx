/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/shiny/984.glb -o models/gltfjsx/shiny/984.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/shiny/984.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="984glb">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="Collosalfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <group name="Object_2">
                <group name="RootNode">
                  <group name="body" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Rock_Things" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Eyes" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Shiny" position={[455.806, 0, 0]} scale={100}>
                    <group name="Object_262">
                      <primitive object={nodes._rootJoint_1} />
                      <group name="Object_507" position={[455.806, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                      <group name="Object_509" position={[455.806, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                      <group name="Object_512" position={[455.806, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                      <skinnedMesh name="Object_508" geometry={nodes.Object_508.geometry} material={materials.Shiny_Body_B} skeleton={nodes.Object_508.skeleton} />
                      <skinnedMesh name="Object_510" geometry={nodes.Object_510.geometry} material={materials.r_eye_Shiny} skeleton={nodes.Object_510.skeleton} />
                      <skinnedMesh name="Object_511" geometry={nodes.Object_511.geometry} material={materials.l_eye_Shiny} skeleton={nodes.Object_511.skeleton} />
                      <skinnedMesh name="Object_513" geometry={nodes.Object_513.geometry} material={materials.Shiny_Body} skeleton={nodes.Object_513.skeleton} />
                      <skinnedMesh name="Object_514" geometry={nodes.Object_514.geometry} material={materials.Shiny_Body_B} skeleton={nodes.Object_514.skeleton} />
                    </group>
                  </group>
                  <group name="Rock_Things001" position={[455.806, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Eyes001" position={[455.806, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="body001" position={[455.806, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/shiny/984.glb')
