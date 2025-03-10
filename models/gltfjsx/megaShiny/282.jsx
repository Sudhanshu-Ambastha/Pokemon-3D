/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/megaShiny/282.glb -o models/gltfjsx/megaShiny/282.jsx 
Author: Gh4xt3r (https://sketchfab.com/Gh4xt3r)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mega-gardevoir-shiny-8fe0bf2f1a74459db55f4ab21576e256
Title: Mega Gardevoir Shiny
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/megaShiny/282.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh geometry={nodes.Object_412.geometry} material={materials.Head} skeleton={nodes.Object_412.skeleton} />
          <skinnedMesh geometry={nodes.Object_413.geometry} material={materials.Body} skeleton={nodes.Object_413.skeleton} />
          <skinnedMesh geometry={nodes.Object_414.geometry} material={materials.Body_Forearm} skeleton={nodes.Object_414.skeleton} />
          <skinnedMesh geometry={nodes.Object_415.geometry} material={materials.Chest_Piece} skeleton={nodes.Object_415.skeleton} />
          <skinnedMesh geometry={nodes.Object_416.geometry} material={materials.Vagina} skeleton={nodes.Object_416.skeleton} />
          <skinnedMesh geometry={nodes.Object_417.geometry} material={materials.Hair_Short} skeleton={nodes.Object_417.skeleton} />
          <skinnedMesh geometry={nodes.Object_418.geometry} material={materials.Hair_Long} skeleton={nodes.Object_418.skeleton} />
          <skinnedMesh geometry={nodes.Object_419.geometry} material={materials.Eyes} skeleton={nodes.Object_419.skeleton} />
          <skinnedMesh geometry={nodes.Object_420.geometry} material={materials.Eye_Highlights} skeleton={nodes.Object_420.skeleton} />
          <skinnedMesh geometry={nodes.Object_421.geometry} material={materials.Eyebrows} skeleton={nodes.Object_421.skeleton} />
          <skinnedMesh geometry={nodes.Object_422.geometry} material={materials.Heart_Eyes} skeleton={nodes.Object_422.skeleton} />
          <skinnedMesh geometry={nodes.Object_423.geometry} material={materials.Star_Eyes} skeleton={nodes.Object_423.skeleton} />
          <skinnedMesh geometry={nodes.Object_424.geometry} material={materials.Teeth} skeleton={nodes.Object_424.skeleton} />
          <skinnedMesh geometry={nodes.Object_425.geometry} material={materials.Tongue} skeleton={nodes.Object_425.skeleton} />
          <skinnedMesh geometry={nodes.Object_426.geometry} material={materials.Mouth} skeleton={nodes.Object_426.skeleton} />
          <skinnedMesh geometry={nodes.Object_427.geometry} material={materials.Hairpin} skeleton={nodes.Object_427.skeleton} />
          <skinnedMesh geometry={nodes.Object_428.geometry} material={materials.Corset} skeleton={nodes.Object_428.skeleton} />
          <skinnedMesh geometry={nodes.Object_429.geometry} material={materials.Ribbons} skeleton={nodes.Object_429.skeleton} />
          <skinnedMesh geometry={nodes.Object_430.geometry} material={materials.Dress_Strands} skeleton={nodes.Object_430.skeleton} />
          <skinnedMesh geometry={nodes.Object_431.geometry} material={materials.Panties} skeleton={nodes.Object_431.skeleton} />
          <skinnedMesh geometry={nodes.Object_432.geometry} material={materials.Stockings} skeleton={nodes.Object_432.skeleton} />
          <skinnedMesh geometry={nodes.Object_433.geometry} material={materials.Bikini_Top} skeleton={nodes.Object_433.skeleton} />
          <skinnedMesh geometry={nodes.Object_434.geometry} material={materials.Bikini_Bottom} skeleton={nodes.Object_434.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/megaShiny/282.glb')
