import {
  Component,
  AfterViewInit,
  ElementRef,
  Renderer2
} from '@angular/core';
import { gsap} from 'gsap';
import * as THREE from 'three';
import { WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';
import { SharedModule } from '../../shared/shared.module';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  
})
export class HomeComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    
    const container = this.el.nativeElement.querySelector('#three-container');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.5, 200);
    camera.position.set(5, 4, 1);

    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;

    this.renderer2.appendChild(container, renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1, 0);
    controls.update();

    const ambient = new THREE.HemisphereLight(0x000080, 0x8d8d8d, 0.60);
    scene.add(ambient);

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(400, 400),
      new THREE.MeshLambertMaterial({ color: 0xbcbcbc })
    );
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1;
    plane.receiveShadow = true;
    scene.add(plane);

    const spotLight = new THREE.SpotLight(0xF2E3B3, 200);
    spotLight.position.set(5, 7, 7);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 1;
    spotLight.decay = 2;
    spotLight.castShadow = true;
    scene.add(spotLight);

    const helper = new THREE.SpotLightHelper(spotLight);
    scene.add(helper);

    const loader = new PLYLoader();
    loader.load('assets/models/Lucy100k.ply', (geometry) => {
      geometry.scale(0.0026, 0.0026, 0.0026);
      geometry.computeVertexNormals();

      const mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshLambertMaterial({ color: 0xF2E3B3 })
      );
      mesh.rotation.y = -Math.PI / 2;
      mesh.position.y = 0.8;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
    });

    function animate() {
      const time = performance.now() / 3000;
      spotLight.position.x = Math.cos(time) * 2.5;
      spotLight.position.z = Math.sin(time) * 2.5;
      helper.update();
      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);
  }
  ngOnInit() {
      gsap.from("#title_home", {
        duration: 3, opacity: 0
        , y: -80
      });
      gsap.from("#subtitle_one", {
      scrollTrigger: {
      trigger: "#subtitle_one", // el elemento que activa la animación
      start: "top 50%",         // inicia cuando el top del elemento llega al 80% de la pantalla
      toggleActions: "play none none none", // solo se ejecuta una vez
          },
        duration: 4,
        opacity: 0,
        y: 240
      });
      gsap.from("#subtitle_two", {
      scrollTrigger: {
      trigger: "#subtitle_two", // el elemento que activa la animación
      start: "top 50%",         // inicia cuando el top del elemento llega al 80% de la pantalla
      toggleActions: "play none none none", // solo se ejecuta una vez
          },
        duration: 5,
        opacity: 0,
        y: 260
      });
      gsap.from("#subtitle_three", {
      scrollTrigger: {
      trigger: "#subtitle_three", // el elemento que activa la animación
      start: "top 60%",         // inicia cuando el top del elemento llega al 80% de la pantalla
      toggleActions: "play none none none", // solo se ejecuta una vez
          },
        duration: 6,
        opacity: 0,
        y: 280
      });
      gsap.from("#subtitle_four", {
      scrollTrigger: {
      trigger: "#subtitle_four", // el elemento que activa la animación
      start: "top 70%",         // inicia cuando el top del elemento llega al 80% de la pantalla
      toggleActions: "play none none none", // solo se ejecuta una vez
          },
        duration: 7,
        opacity: 0,
        y: 300
      });
      gsap.from("#button_container", {
        scrollTrigger: {
          trigger: "#button_container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        duration: 8,
        opacity: 0,
        y: 300,
        ease: "bounce.out"
      });
      
      
    }
  }
  
    

