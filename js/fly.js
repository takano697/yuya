    window.addEventListener('DOMContentLoaded', init);
     
    function init() {
        // レンダラーを作成
        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#canvas'),
            alpha: true,
        });
        // ウィンドウサイズ設定
        width = document.getElementById('main_canvas').getBoundingClientRect().width;
        height = document.getElementById('main_canvas').getBoundingClientRect().height;
        renderer.setPixelRatio(1);
        renderer.setSize(width, height);
        console.log(window.devicePixelRatio);
        console.log(width + ", " + height);
     
        // シーンを作成
        const scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x87B8C0 ); // 背景色
     
        // カメラを作成
        
       camera = new THREE.PerspectiveCamera(90, width / height, 1, 10000);
            
        camera.position.set(300, 200, 0);
        camera.lookAt(-10,150,0);
        var controls = new THREE.FlyControls(camera); 
        controls.movementSpeed = 500;	//移動速度
        controls.rollSpeed = Math.PI / 10;   //回転速度
        controls.dragToLook = true;
       
     // カメラ位置をリセットするためのメニュー項目
          const gui = new dat.GUI();
          const settings = {
            resetCamera: function() {
           var delta = clock.getDelta();  
            controls.update(delta);  
              camera.position.set(300, 200, 0);
               camera.lookAt(-10,150,0);
            }
          };
     
      // メニューGUI
          gui.add(settings, 'resetCamera');
          gui.open();
          
        // Load GLTF or GLB
        const loader = new THREE.GLTFLoader();
        const url = 'school2draco.glb';
        const draco = new THREE.DRACOLoader();
	draco.setDecoderPath( 'draco/' );
	loader.setDRACOLoader( draco );
	    
        // window size
        const w_height = window.innerHeight;

 	const geometry = new THREE.SphereGeometry( 8.0, 5, 5 );
	const material = new THREE.MeshPhongMaterial({color: 0xE83845});
	const sphere = new THREE.Mesh(geometry, material);
	sphere.position.y = 260;
	sphere.position.x = -70;
	sphere.position.z = -140;
	    
	    sphere.name ='sphere';
	    
        let model;
	let gl=[];
        loader.load(
            url,
            function (gltf) {
                model = gltf.scene;
                model.scale.set(150.0, 150.0, 150.0);
                model.position.set(0, 0, 0);
		 //for(let i = 0; i < gltf.asset.length; i++){
 
        //let mesh = gltf.asset[i];
 
        //コンソールにMeshの名前一覧を出力。
       // console.log(gltf.scenes);
   // }
                scene.add(gltf.scene, sphere);
		    const sce =scene.children;
          if (sce[2] !== null) {
		gl = sce[2].children;
               console.log(sce[2].children);
           }
            },
             function (error) {
                console.log('An error happened');
                console.log(error);
            }
         
        );
	   
        renderer.gammaOutput = true;
        renderer.gammaFactor = 2.2;
     
     
        // 平行光源
        const light = new THREE.DirectionalLight(0xFFFFFF);
        light.intensity = 1; // 光の強さ
        light.position.set(3, 10, 1);
        // シーンに追加
        scene.add(light);
     
     
        //環境光源(アンビエントライト)：すべてを均等に照らす、影のない、全体を明るくするライト
        const ambient = new THREE.AmbientLight(0xf8f8ff, 0.7);
        scene.add(ambient); //シーンにアンビエントライトを追加
        let mouse;
        let raycaster;
        let clickFlg = false;
        let moveFlg = false;
		let count = 0;
		mouse = new THREE.Vector2();
        raycaster = new THREE.Raycaster();
                function setControll(){
                    
                    canvas.addEventListener('pointermove',handleMouseMove);
                    canvas.addEventListener('click',handleClick);
                    function handleMouseMove(event){
                        moveFlg = true;
                        const element = event.currentTarget;
                        const x = event.clientX - element.offsetLeft;
                        const y = event.clientY - element.offsetTop;
                        const w = element.offsetWidth;
                        const h = element.offsetHeight;
                        mouse.x = (x/w)*2-1;
                        mouse.y = -(y/h)*2+1;
                    }
                    function handleClick(event){
                        if(clickFlg && count == 0){
                        const element =document.createElement('div'); 
			element.id = "info";
			element.innerHTML = "101情報教室<br>メディア情報系の授業を行う。"; 
			document.getElementById('main_canvas').appendChild(element);
		        count = 1;
				 
				clickFlg=false;
                         }else{
				document.getElementById('info').remove();
				count = 0;
                            clickFlg = false;
                        }
                    }
                }

        //壁判定
	function wallpositionset(){
		raywall = new THREE.Raycaster(controls.object.position, new THREE.Vector3(0, 0, -1));
		const wall = raywall.intersectObjects(gl, false);
		if(wall.length > 0){
			const dist = wall[0].distance;
			    //console.log(dist);
			    //console.log(wall[0].object.name);
			if(dist <= 35)
			{
			   controls.object.position.z = wall[0].point.z + 80;
			}
		}else{
		}
		raywall_2 = new THREE.Raycaster(controls.object.position, new THREE.Vector3(0, 0, 1));
		const wall_2 = raywall_2.intersectObjects(gl, false);
		if(wall_2.length > 0){
			const dist = wall_2[0].distance;
			    //console.log(dist);
			   //console.log(wall_2[0].object.name);
			if(dist <= 35)
			{
			   controls.object.position.z = wall_2[0].point.z + -80;
			}
		}else{
		}
		rayfloor = new THREE.Raycaster(controls.object.position, new THREE.Vector3(0, -1, 0));
		const floor = rayfloor.intersectObjects(gl, false);
		if(floor.length > 0){
			const dist = floor[0].distance;
			    //console.log(dist);
			    //console.log(floor[0].object.name);
			if(dist <= 35)
			{
			   controls.object.position.y = floor[0].point.y + 80;
			}
		}else{
		}
		rayceiling = new THREE.Raycaster(controls.object.position, new THREE.Vector3(0, 1, 0));
		const ceiling = rayceiling.intersectObjects(gl, false);
		if(ceiling.length > 0){
			const dist = ceiling[0].distance;
			    //console.log(dist);
			    //console.log(ceiling[0].object.name);
			if(dist <= 35)
			{
			   controls.object.position.y = ceiling[0].point.y + -80;
			}
		}else{
		}
		rayfront = new THREE.Raycaster(controls.object.position, new THREE.Vector3(1, 0, 0));
		const front = rayfront.intersectObjects(gl, false);
		if(front.length > 0){
			const dist = front[0].distance;
			    //console.log(dist);
			    //console.log(front[0].object.name);
			if(dist <= 35)
			{
			   controls.object.position.x = front[0].point.x + -80;
			}
		}else{
		}
		rayback = new THREE.Raycaster(controls.object.position, new THREE.Vector3(-1, 0, 0));
		const back = rayback.intersectObjects(gl, false);
		if(back.length > 0){
			const dist = back[0].distance;
			    //console.log(dist);
			    //console.log(back[0].object.name);
			if(dist <= 35)
			{
			   controls.object.position.x = back[0].point.x + 80;
			}
		}else{
		}
	}
	    
        const clock = new THREE.Clock();
        // 初回実行
        setControll();
　　　　tick();
     
        function tick() {
        	
            var delta = clock.getDelta();  
            controls.update(delta); 
	　　if(controls.object.position.y !== 200)
	  {
		  controls.object.position.y = 200;
	  }
	　　//if(controls.object.rotation.z !== 1.57){
		//controls.object.rotation.z = 1.57;
		
	//  } 
	 	console.log(controls.object.rotation);
		//console.log(controls.object.position);
            raycaster.setFromCamera(mouse,camera);
                    const intersects = raycaster.intersectObjects(gl, false);
                    if(intersects.length > 0){
                        const obj = intersects[0].object;
			    //console.log(obj.name);
                   if(obj.name == 'Room'){
                           if(moveFlg){
                            clickFlg = true;
                            }
                             }else{
                                clickFlg = false;
                                }
                        }else{
			    
                            clickFlg = false;
		    }
			if(clickFlg){
    			canvas.style.cursor = 'pointer';
   			 }else{
    			canvas.style.cursor = 'grab';
			    }	
	    wallpositionset();
            renderer.render(scene, camera);
            requestAnimationFrame(tick);
        }
    }
