import { Component } from "react";
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import vertexShader from "./shaders/vertex.js"
import fragmentShader from "./shaders/fragment.js"

//asssets 
import Object from "../assets/objs/map.obj";
import TextureAmbientOcclusionMap from "../assets/textures/Grass_AmbientOcclusion.jpg"
import TextureBaseColorMap from "../assets/textures/Grass_BaseColor.jpg"
import TextureHeightMap from "../assets/textures/Grass_Height.png"
import TextureNormalMap from "../assets/textures/Grass_Normal.jpg"
import TextureRoughnessMap from "../assets/textures/Grass_Roughness.jpg"

const style = {
    height: 500 // we can control scene size by setting container dimensions
};

const { TextureLoader } = THREE;

class Map extends Component {
    componentDidMount() {
        console.log(vertexShader);
        console.log(fragmentShader);
        this.sceneSetup();
        this.addLights();
        this.loadTheModel();
        this.startAnimationLoop();
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
        window.cancelAnimationFrame(this.requestID);
        this.controls.dispose();
    }

    // Standard scene setup in Three.js. Check "Creating a scene" manual for more information
    // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
    sceneSetup = () => {
        // get container dimensions and use them for scene sizing
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        const bgcolor = new THREE.Color(0x21672b);


        this.scene = new THREE.Scene();
        this.scene.background = bgcolor;
        this.camera = new THREE.PerspectiveCamera(
            75, // fov = field of view
            width / height, // aspect ratio
            0.1, // near plane
            10000 // far plane
        );
        this.camera.position.z = 1000; // is used here to set some distance from a cube that is located at z = 0
        // OrbitControls allow a camera to orbit around the object
        // https://threejs.org/docs/#examples/controls/OrbitControls
        this.controls = new OrbitControls(this.camera, this.mount);
        this.renderer = new THREE.WebGLRenderer();
        this.manager = new THREE.LoadingManager();
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement);
        // mount using React ref
    };

   

    setShaderParams = ({map}) => {
        return {
            uniforms: {
                texture: {
                    value: map 
                }
            }, 
            vertexShader,
            fragmentShader,
        }
    }

    // Code below is taken from Three.js OBJ Loader example
    // https://threejs.org/docs/#examples/en/loaders/OBJLoader
    loadTheModel = () => {
        // instantiate a loader
        const loader = new OBJLoader();
        const meshParams = this.loadTexture()
        const material_1 = new THREE.MeshStandardMaterial(meshParams);
        const shaderMaterial = new THREE.ShaderMaterial(
             this.setShaderParams(meshParams)
        )

        // load a resource
        loader.load(
            // resource URL relative to the /public/index.html of the app
            Object,
    
            // called when resource is loaded
            (object) => {

                object.traverse(
                    ( elem ) => {if ( elem instanceof THREE.Mesh ) elem.material = shaderMaterial;}
                );

                this.scene.add(object);

                // get the newly added object by name specified in the OBJ model (that is Elephant_4 in my case)
                // you can always set console.log(this.scene) and check its children to know the name of a model
                const map = this.scene.getObjectByName("map");
                // change some custom props of the element: placement, color, rotation, anything that should be
                // done once the model was loaded and ready for display
                map.position.set(0, 0, 0);
                map.rotation.x = 1.57;


                // // make this element available inside of the whole component to do any animation later
                this.model = map;
            },
            // called when loading is in progresses
            (xhr) => {

                const loadingPercentage = Math.ceil(xhr.loaded / xhr.total * 100);
                console.log((loadingPercentage) + '% loaded');

                // update parent react component to display loading percentage
                this.props.onProgress(loadingPercentage);
            },
            // called when loading has errors
            (error) => {

                console.log('An error happened:' + error);

            }
        );
    };

    loadTexture = () => {
         const loader = new TextureLoader();
         const textureAmbientOcclusionMap = loader.load(TextureAmbientOcclusionMap);
         const textureBaseColorMap = loader.load(TextureBaseColorMap);
         const textureHeightMap = loader.load(TextureHeightMap);
         const textureNormalMap = loader.load(TextureNormalMap);
         const textureRoughnessMap = loader.load(TextureRoughnessMap);
       
         return {
            map: textureBaseColorMap,
            normalMap: textureNormalMap,
            displacementMap: textureHeightMap,
            displacementScale: 4.0,
            roughnessMap: textureRoughnessMap,
            roughness: 0.5, 
            aoMap: textureAmbientOcclusionMap
         };

    };

    // adding some lights to the scene
    addLights = () => {
        const lights = [];

        // set color and intensity of lights
        lights[0] = new THREE.PointLight(0xffffff, 1, 0);
        lights[1] = new THREE.PointLight(0xffffff, 1, 0);
        lights[2] = new THREE.PointLight(0xffffff, 1, 0);

        // place some lights around the scene for best looks and feel
        lights[0].position.set(0, 2000, 0);
        lights[1].position.set(1000, 2000, 1000);
        lights[2].position.set(- 1000, - 2000, - 1000);

        this.scene.add(lights[0]);
        this.scene.add(lights[1]);
        this.scene.add(lights[2]);
    };

    startAnimationLoop = () => {
        //slowly rotate an object
        if (this.model) this.model.rotation.z += 0.002;

        this.renderer.render(this.scene, this.camera);

        // The window.requestAnimationFrame() method tells the browser that you wish to perform
        // an animation and requests that the browser call a specified function
        // to update an animation before the next repaint
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    };

    handleWindowResize = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;

        // Note that after making changes to most of camera properties you have to call
        // .updateProjectionMatrix for the changes to take effect.
        this.camera.updateProjectionMatrix();
    };

    render() {
        return <div style={style} ref={ref => (this.mount = ref)} />;
    }
}

export default Map;