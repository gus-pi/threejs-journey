import { useFrame } from '@react-three/fiber';
import {
    AccumulativeShadows,
    BakeShadows,
    ContactShadows,
    Environment,
    Lightformer,
    OrbitControls,
    RandomizedLight,
    Sky,
    SoftShadows,
    Stage,
    useHelper,
} from '@react-three/drei';
import { useRef } from 'react';
import { Perf } from 'r3f-perf';
import * as THREE from 'three';
import { useControls } from 'leva';

export default function Experience() {
    const directionalLight = useRef();
    useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

    const cube = useRef();

    useFrame((state, delta) => {
        // const time = state.clock.elapsedTime;
        // cube.current.position.x = 2 + Math.sin(time);
        cube.current.rotation.y += delta * 0.2;
    });

    const { color, opacity, blur } = useControls('contact shadows', {
        color: '#1d8f75',
        opacity: { value: 0.4, min: 0, max: 1 },
        blur: { value: 2.8, min: 0, max: 10 },
    });

    const { sunPosition } = useControls('sky', {
        sunPosition: { value: [1, 2, 3] },
    });

    const { envMapIntensity, envMapHeight, envMapRadious, envMapScale } = useControls(
        'environment map',
        {
            envMapIntensity: { value: 3.5, min: 0, max: 12 },
            envMapHeight: { value: 7, min: 0, max: 100 },
            envMapRadious: { value: 20, min: 10, max: 1000 },
            envMapScale: { value: 100, min: 10, max: 1000 },
        }
    );

    return (
        <>
            {/* <Environment
                preset="sunset"
                ground={{
                    height: envMapHeight,
                    radius: envMapRadious,
                    scale: envMapScale,
                }}
            > */}
            {/* <color args={['black']} attach="background" />
                <Lightformer position-z={-5} scale={10} color="red" intensity={10} /> */}
            {/* <mesh position-z={-5} scale={10}>
                    <planeGeometry />
                    <meshBasicMaterial color={[1, 0, 0]} />
                </mesh> */}
            {/* </Environment> */}

            {/* <BakeShadows /> */}
            {/* <SoftShadows frustum={3.75} size={50} near={9.5} smaples={17} rings={11} /> */}

            {/* <color args={['ivory']} attach="background" /> */}

            <Perf position="top-left" />

            <OrbitControls makeDefault />

            {/* <AccumulativeShadows
                position={[0, -0.99, 0]}
                scale={10}
                color="#316d39"
                frames={Infinity}
                temporal
                opacity={0.8}
                blend={100}
            >
                <RandomizedLight
                    position={[1, 2, 3]}
                    amount={8}
                    radius={1}
                    intensity={1}
                    ambient={0.5}
                    bias={0.001}
                />
            </AccumulativeShadows> */}

            {/* <ContactShadows
                position={[0, 0, 0]}
                scale={10}
                resolution={512}
                far={5}
                color={color}
                opacity={opacity}
                blur={blur}
            /> */}

            {/* <directionalLight
                ref={directionalLight}
                position={sunPosition}
                intensity={4.5}
                castShadow
                shadow-mapSize={[1024, 1024]}
                shadow-camera-near={1}
                shadow-camera-far={10}
            />

            <ambientLight intensity={1.5} />

            <Sky sunPosition={sunPosition} /> */}

            {/* <mesh castShadow position-y={1} position-x={-2}>
                <sphereGeometry />
                <meshStandardMaterial color="orange" envMapIntensity={envMapIntensity} />
            </mesh>

            <mesh castShadow ref={cube} position-y={1} position-x={2} scale={1.5}>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" envMapIntensity={envMapIntensity} />
            </mesh> */}

            {/* <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" envMapIntensity={envMapIntensity} />
            </mesh> */}

            <Stage
                contactShadow={{ opacity: 0.2, blue: 3 }}
                environment="sunset"
                preset="portrait"
                intensity={2}
            >
                <mesh castShadow position-y={1} position-x={-2}>
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" envMapIntensity={envMapIntensity} />
                </mesh>

                <mesh castShadow ref={cube} position-y={1} position-x={2} scale={1.5}>
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple" envMapIntensity={envMapIntensity} />
                </mesh>
            </Stage>
        </>
    );
}
