var camera, scene, renderer;
var geometry, material, mesh;
var geometryT, materialT, meshT;

init();
animate();

function init() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10);
    camera.position.set(0, 2, 6);
    camera.lookAt(scene.position);

    geometry = new THREE.CubeGeometry(2,2,2);
    material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        wireframeLinewidth: 4,
    });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    geometryT = new THREE.CubeGeometry(1.99,1.99,1.99);
    materialT = [
        // right start face
        new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('blank.png')
        }),
        // left start face
        new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('blank.png')
        }),
        // top face:
        new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('blank.png')
        }),
        // bottom face?
        new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('blank.png')
        }),
        // front face
        new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('logo-face-01.svg'),
            emissive: 0xffffff
        }),
        // back face
        new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('logo-face-01.svg'),
            emissive: 0xffffff
        })
    ];

    meshT = new THREE.Mesh( geometryT, new THREE.MeshFaceMaterial(materialT) );
    scene.add(meshT);

    // renderer = new THREE.CanvasRenderer();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

}

function animate() {

    // note: three.js includes requestAnimationFrame shim
    requestAnimationFrame(animate);

    // mesh.rotation.x += 0.01;
    mesh.rotation.y -= 0.002;
    meshT.rotation.y -= 0.002;

    renderer.render(scene, camera);

}