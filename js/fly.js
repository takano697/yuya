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
            
        camera.position.set(100, 150, 0);
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
              camera.position.set(100, 150, 0);
               camera.lookAt(-10,150,0);
            }
          };
     
      // メニューGUI
          gui.add(settings, 'resetCamera');
          gui.open();
          
        // Load GLTF or GLB
        const loader = new THREE.GLTFLoader();
        const url = 'school2.glb';
     
        // window size
        const w_height = window.innerHeight;
     
        let model = null;
        loader.load(
            url,
            function (gltf) {
                model = gltf.scene;
                model.scale.set(150.0, 150.0, 150.0);
                model.position.set(0, 0, 0);
		 for(let i = 0; i < model.children.length; i++){
 
        let mesh = model.children[i];
 
        //コンソールにMeshの名前一覧を出力。
        console.log(i,mesh.name);
    }
                scene.add(gltf.scene);
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
			element.innerHTML = "hogehoge"; 
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
        const clock = new THREE.Clock();
        // 初回実行
        setControll();
        tick();
     
        function tick() {
        	
            var delta = clock.getDelta();  
            controls.update(delta);  
     
            if (model !== null) {
                console.log(model);
            }
            raycaster.setFromCamera(mouse,camera);
                    const intersects = raycaster.intersectObjects(scene.children,false);
                    if(intersects.length > 0){
                        const obj = intersects[0].object;
			    console.log(intersects[0].object.name);
                        if(obj.name == 'Door_Group001' || obj.name == 'Door.001'){
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
            renderer.render(scene, camera);
            requestAnimationFrame(tick);
        }
    }
