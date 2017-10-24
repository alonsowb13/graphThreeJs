(function(){

    //vertex shader calcular posiciones y vertices de los primitivos
    //y el frament shader calcula el color y la posicion de los primitivos

    let scene = new THREE.Scene();
    const aspectRatio = window.innerWidth / window.innerHeight;
    let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 30;
    camera.position.y = 5;
    let mesh;

    let loader = new THREE.TextureLoader();

    loader.load('public/map1.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(20,100,100)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })

        mesh = new THREE.Mesh(geometry, material);

        mesh.position.y = 0;
        scene.add(mesh);
    })

    //let geometry = new THREE.BoxGeometry(10,10,10,10);

    let groundMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
    });

    //let mesh = new THREE.Mesh(geometry, groundMaterial);

    let pointLight = new THREE.PointLight(0x404040);

    pointLight.position.y = 80;
    pointLight.position.z = 20;
    
    scene.background = new THREE.Color(0xeeeeee);
    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(pointLight);


    function loop(){
        requestAnimationFrame(loop);
        mesh.rotation.y += 0.01;
        mesh.rotation.z += 0.01;
        mesh.rotation.x += 0.01;
        renderer.render(scene, camera);
    }

    loop();

})();