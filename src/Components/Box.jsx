import { OrbitControls} from "@react-three/drei";
import { MultiplyOperation } from "three";

const Box = () => {
    return (
        <>

            <mesh scale={2}>
                <OrbitControls enableZoom={false} autoRotate={true} />
                <ambientLight />
                <meshLambertMaterial fog={true} combine={MultiplyOperation} color={"#049ef4"} emissive={"#000000"} />
                <perspectiveCamera makeDefault={true} position={[10, 0, 10]} />
                <boxGeometry />

            </mesh>
        </>
    );
};

export default Box;