import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

import gsap from 'gsap';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('zoomContainer', { static: true }) containerRef!: ElementRef;
  @ViewChild('zoomImage', { static: true }) imageRef!: ElementRef;

  ngAfterViewInit(): void {
    const container = this.containerRef.nativeElement;
    const image = this.imageRef.nativeElement;

    container.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 50;
      const y = ((e.clientY - rect.top) / rect.height) * 50;

      gsap.to(image, {
        scale: 0,
        transformOrigin: `${x}% ${y}%`,
        duration: 0.5,
        ease: 'power2.out',
      });
    });

    container.addEventListener('mouseleave', () => {
      gsap.to(image, {
        scale: 1,
        transformOrigin: 'center center',
        duration: 0.3,
      });
    });
    gsap.from("#iconos_home", {
      scrollTrigger: {
      trigger: "#iconos_home", // el elemento que activa la animación
      start: "top 60%",         // inicia cuando el top del elemento llega al 80% de la pantalla
      toggleActions: "play none none none", // solo se ejecuta una vez
          },
        duration: 4,
        opacity: 0,
        y: 300
      });
  }
}
