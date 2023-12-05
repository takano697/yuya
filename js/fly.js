    window.addEventListener('DOMContentLoaded', init);
     
    function init() {
        // レンダラーを作成
        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#canvas'),
            alpha: true,
            //antialias: true,
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
            
        camera.position.set(300, 250, 0);
	//camera.rotation.order = "ZYX";
	//camera.rotation.set(0,0,0);
        camera.lookAt(-10,250,0);
        var controls = new THREE.FlyControls(camera); 
        controls.movementSpeed = 500;	//移動速度
        controls.rollSpeed = Math.PI / 4;   //回転速度
        controls.dragToLook = true;
	
       
     // カメラ位置をリセットするためのメニュー項目
          const gui = new dat.GUI();
          const settings = {
            resetPosition: function() {
           var delta = clock.getDelta();  
            controls.update(delta);  
              camera.position.set(300, 250, 0);
               camera.lookAt(-10,250,0);
            }
          };
     	 const settings2 = {
            	resetRotation: function() {
           	var delta = clock.getDelta();  
            	controls.update(delta);  
		camera.lookAt(0,250,0);
           	}
          	};
　　　　　　
      // メニューGUI
          gui.add(settings, 'resetPosition');
	  gui.add(settings2, 'resetRotation');
          gui.open();
          
        // Load GLTF or GLB
        const loader = new THREE.GLTFLoader();
        const url = 'university.glb';
        const draco = new THREE.DRACOLoader();
	draco.setDecoderPath( 'draco/' );
	loader.setDRACOLoader( draco );
	    
        // window size
        const w_height = window.innerHeight;

 	const geometry = new THREE.SphereGeometry( 8.0, 5, 5 );
	const material = new THREE.MeshPhongMaterial({color: 0xE83845});
	const sphere = new THREE.Mesh(geometry, material);
	sphere.position.y = 300;
	sphere.position.x = -300;
	sphere.position.z = -280;
	    
	    sphere.name ='sphere';
	    
        let model,anime;
	let gl,gl2,gl3,gl4,gl5 =[];
	let objgroup = [];
	let light1 = [],light2 = [];
	let doorclip,doorclip2,doormixer,doormixer2;
        loader.load(
            url,
            function (gltf) {
		anime = gltf.animations;
                model = gltf.scene;
                model.scale.set(150.0, 150.0, 150.0);
                model.position.set(0, 0, 0);
                scene.add(gltf.scene, sphere);
		doormixer = new THREE.AnimationMixer(model);
		doormixer2 = new THREE.AnimationMixer(model);
		doorclip =  THREE.AnimationClip.findByName( anime, 'Door_GroupOpen' );
		doorclip2 =  THREE.AnimationClip.findByName( anime, 'Door_GroupClose' );
		doormixer.clipAction(doorclip).play();　
		doormixer2.clipAction(doorclip2).play();
		    console.log(anime);
		    console.log(scene.children);
		    const sce =scene.children;
          if (sce[2] !== null) {
		gl = sce[2].children;
               console.log(sce[2].children);
           for(let i = 0; i+1 <= gl.length; i++){
			if(gl[i].children.length > 0){
				if(gl[i].type == 'Mesh'){
				objgroup.push(gl[i]);
				}
				gl2 = gl[i].children;
				for(let i = 0; i+1 <= gl2.length; i++){
				if(gl2[i].children.length > 0){
					if(gl2[i].type == 'Mesh'){
					objgroup.push(gl2[i]);
					}
					gl3 = gl2[i].children;
					for(let i = 0; i+1 <= gl3.length; i++){
					if(gl3[i].children.length > 0){
						if(gl3[i].type == 'Mesh'){
						objgroup.push(gl3[i]);
						}
						gl4 = gl3[i].children;
						for(let i = 0; i+1 <= gl4.length; i++){
						if(gl4[i].children.length > 0){
							if(gl4[i].type == 'Mesh'){
							objgroup.push(gl4[i]);
							}
							gl5 = gl4[i].children;
							for(let i = 0; i+1 <= gl5.length; i++){
							objgroup.push(gl5[i]);
							}
						}else{	
						objgroup.push(gl4[i]);
						}
					 	}	
					}else{	
					objgroup.push(gl3[i]);
					}
					}
				}else{	
				objgroup.push(gl2[i]);
				}
	    			}			
			}else{	
				objgroup.push(gl[i]);
			}
			}
				}
			console.log(objgroup);
		    	for(i=0; i+1 <= objgroup.length; i++){
			if(objgroup[i].name == "light" || objgroup[i].name == "light001" || objgroup[i].name == "light002" || objgroup[i].name == "light003" ||
			  objgroup[i].name == "light004" || objgroup[i].name == "light005"){
			light1.push(objgroup[i]);
			}else if(objgroup[i].name == "light006" || objgroup[i].name == "light007" || objgroup[i].name == "light008" || objgroup[i].name == "light009" ||
				objgroup[i].name == "light010" || objgroup[i].name == "light011"){
				light2.push(objgroup[i]);
			}
			}
		    console.log(light1);
		    console.log(light2);
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
        	let doorFlg,lightFlg,lightFlg2 = false;
        	let moveFlg = false;
		let count = 0;
	     	let stoptime = null;
		let cstoptime = 1000;
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
                        if(doorFlg){
			function update() {
                    	if (doormixer) {
                        doormixer.update(clock.getDelta());
                    	}
                	}
			if(cstoptime == 1000 || cstoptime >= 2){
			cstoptime = null;
			doormixer.clipAction(doorclip).reset();
			let timestamp = Math.floor( Date.now() / 1000 );
			renderer.setAnimationLoop(() => {
			let timestamp2 = Math.floor( Date.now() / 1000 );
			stoptime = timestamp2 - timestamp;
			if(stoptime > 2){
				renderer.setAnimationLoop(null);
			}
			update();
			renderer.render(scene,camera);
			});
			}
		        function update2() {
                    		if (doormixer2) {
                       		 doormixer2.update(clock.getDelta());
                    			}
                		}
			        if(stoptime >= 2){
				stoptime = null;
				doormixer2.clipAction(doorclip2).reset();
				let ctimestamp = Math.floor( Date.now() / 1000 );
				renderer.setAnimationLoop(() => {
				let ctimestamp2 = Math.floor( Date.now() / 1000 );
				cstoptime = ctimestamp2 - ctimestamp;
				if(cstoptime > 2){
				renderer.setAnimationLoop(null);
				}
				update2();
				renderer.render(scene,camera);
				});
				}
				count = 1;
				 
				doorFlg=false;
                         }else{
				count = 0;
                            doorFlg = false;
                        }
			let lightcount = 0;
			let lightcount2 = 0;
			if(lightFlg && lightcount == 0){
			for(i=0;i > light1.length; i++){
			light1[i].material.emissive.setRGB(1,1,1);
			}
			renderer.render(scene,camera);
			lightcount = 1;
			}else if(lightFlg && lightcount == 1){
			for(i=0;i > light.length; i++){
			light1[i].material.emissive.setRGB(0,0,0);
			}
			renderer.render(scene,camera);
			lightcount = 0;
			}
			    
			if(lightFlg2 && lightcount2 == 0){
			for(i=0;i > light2.length; i++){
			light2[i].material.emissive.setRGB(1,1,1);
			}
			renderer.render(scene,camera);
			lightcount2 = 1;
			}else if(lightFlg2 && lightcount2 == 1){
			for(i=0;i > light2.length; i++){
			light2[i].material.emissive.setRGB(0,0,0);
			}
			renderer.render(scene,camera);
			lightcount2 = 0;
			}
			    //const element =document.createElement('div'); 
				//element.id = "info";
				//element.innerHTML = "101情報教室<br>メディア情報系の授業を行う。"; 
				//document.getElementById('main_canvas').appendChild(element);
			    //document.getElementById('info').remove();
                    }
                }

        //壁判定
	function wallpositionset(){
		raywall = new THREE.Raycaster(controls.object.position, new THREE.Vector3(0, 0, -1));
		const wall = raywall.intersectObjects(objgroup, false);
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
		const wall_2 = raywall_2.intersectObjects(objgroup, false);
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
		const floor = rayfloor.intersectObjects(objgroup, false);
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
		const ceiling = rayceiling.intersectObjects(objgroup, false);
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
		const front = rayfront.intersectObjects(objgroup, false);
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
		const back = rayback.intersectObjects(objgroup, false);
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

	//クリックしたオブジェクトを判定
	function setfromcamera(){
	    	raycaster.setFromCamera(mouse,camera);
                    const intersects = raycaster.intersectObjects(objgroup, false);
                    if(intersects.length > 0){
                        const obj = intersects[0].object;
			    //console.log(obj.name);
                   if(obj.name == 'DoorFrame' || obj.name == 'Door_1' || obj.name == 'Door_2' || obj.name == 'Handle_Back' || obj.name == 'Handle_Front'){
                           if(moveFlg){
                            doorFlg = true;
                            }else{
                                doorFlg = false;
                                }
                        }else{ 
                            doorFlg = false;
		    }
		    if(obj.name == 'switch'){
                           if(moveFlg){
                            lightFlg = true;
                            }else{
                                lightFlg = false;
                                }
                        }else{
                            lightFlg = false;
		    }
		    if(obj.name == 'switch.001'){
                           if(moveFlg){
                            lightFlg2 = true;
                            }else{
                                lightFlg2 = false;
                                }
                        }else{
                            lightFlg2 = false;
		    }    
		    }
			if(doorFlg || lightFlg || lightFlg2){
    			canvas.style.cursor = 'pointer';
   			 }else{
    			canvas.style.cursor = 'grab';
			    }	
	}
	    
        const clock = new THREE.Clock();
        // 初回実行
        setControll();
　　　　tick();
     
        function tick() {
        	
            var delta = clock.getDelta();  
            controls.update(delta); 
	　　if(controls.object.position.y !== 250)
	  {
		  controls.object.position.y = 250;
	  }
	
            setfromcamera();
	    wallpositionset();
            renderer.render(scene, camera);
            requestAnimationFrame(tick);
        }
    }
