import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isUsingFallback, setIsUsingFallback] = useState(false);
  const [activeStage, setActiveStage] = useState<"exploded" | "assembling" | "sealed">("exploded");

  // Keep a ref to images to avoid re-creating them
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const totalFrames = 192;

  useEffect(() => {
    let scrollTriggerInstance: any = null;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high DPI screens
    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      render();
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Sequence loading function
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];
    let isCancelled = false;

    // Set a timeout to decide if we should use fallback
    const fallbackTimeout = setTimeout(() => {
      if (!isPreloaded && loadedCount < 5) {
        console.warn("Image sequence loading timed out. Using high-fidelity procedural canvas engine.");
        setIsUsingFallback(true);
        setIsPreloaded(true);
      }
    }, 1500);

    // Preload the first frame and force drawing it immediately
    const firstImg = new Image();
    const firstIndex = 0;
    firstImg.src = `/images/frames/hulpak-frame_${(firstIndex + 1).toString().padStart(6, '0')}.jpg`;
    images.push(firstImg);

    firstImg.onload = () => {
      if (isCancelled) return;
      
      // Store reference to images immediately so render can access it
      imagesRef.current = images;
      
      // Draw first frame immediately so hero isn't blank
      render();

      // Now load the rest of the frames (from frame 2 to 192) in parallel
      for (let i = 2; i <= totalFrames; i++) {
        if (isCancelled) return;
        const img = new Image();
        const index = i - 1;
        img.src = `/images/frames/hulpak-frame_${(index + 1).toString().padStart(6, '0')}.jpg`;
        img.onload = () => {
          if (isCancelled) return;
          loadedCount++;
          // 1 preloaded frame + loadedCount
          const totalLoaded = loadedCount + 1;
          const progressPercent = Math.round((totalLoaded / totalFrames) * 100);
          setLoadingProgress(progressPercent);

          if (totalLoaded === totalFrames) {
            clearTimeout(fallbackTimeout);
            setIsPreloaded(true);
            setIsUsingFallback(false);
          }
        };
        img.onerror = () => {
          if (!isUsingFallback) {
            clearTimeout(fallbackTimeout);
            setIsUsingFallback(true);
            setIsPreloaded(true);
          }
        };
        images.push(img);
      }
    };

    firstImg.onerror = () => {
      clearTimeout(fallbackTimeout);
      setIsUsingFallback(true);
      setIsPreloaded(true);
    };

    // Set up GSAP ScrollTrigger
    scrollTriggerInstance = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=300%", // Scroll distance
      pin: true,
      scrub: 1,
      onUpdate: render,
    });

    // Drawing/Rendering function (standard declaration to support hoisting)
    function render(self?: any) {
      const progress = self && typeof self.progress === "number"
        ? self.progress
        : (scrollTriggerInstance ? scrollTriggerInstance.progress : 0);
      const seq = { frame: progress * (totalFrames - 1) };
      const frameIndex = Math.round(seq.frame);

      // Update states safely
      setScrollProgress(progress);
      if (progress < 0.35) {
        setActiveStage("exploded");
      } else if (progress < 0.85) {
        setActiveStage("assembling");
      } else {
        setActiveStage("sealed");
      }

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      if (!isUsingFallback && imagesRef.current[frameIndex]) {
        // Draw the image sequence frame, maintaining aspect ratio
        const img = imagesRef.current[frameIndex];
        if (img && img.complete) {
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
          const imgRatio = img.width / img.height;
          const canvasRatio = canvasWidth / canvasHeight;

          let drawWidth = canvasWidth;
          let drawHeight = canvasHeight;
          let offsetX = 0;
          let offsetY = 0;

          if (imgRatio > canvasRatio) {
            drawHeight = canvasHeight;
            drawWidth = canvasHeight * imgRatio;
            offsetX = (canvasWidth - drawWidth) / 2;
          } else {
            drawWidth = canvasWidth;
            drawHeight = canvasWidth / imgRatio;
            offsetY = (canvasHeight - drawHeight) / 2;
          }

          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
      } else {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        // --- HIGH FIDELITY PROCEDURAL CANVASES ENGINE ---
        // Create an eco-friendly deep forest green background gradient
        const bgGrad = ctx.createRadialGradient(
          canvasWidth / 2,
          canvasHeight / 2,
          canvasWidth * 0.1,
          canvasWidth / 2,
          canvasHeight / 2,
          canvasWidth * 0.8
        );
        bgGrad.addColorStop(0, "#0e3419"); // Bright forest green highlight
        bgGrad.addColorStop(0.5, "#071c0e"); // Deep emerald shadow
        bgGrad.addColorStop(1, "#020703"); // Pure deep black-green
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        // Ambient moss particles drifting up
        for (let j = 0; j < 15; j++) {
          const x = (Math.sin(j * 43.1 + progress * 2) * 0.4 + 0.5) * canvasWidth;
          const y = ((0.9 - (j * 0.07 + progress * 0.3) % 1) * canvasHeight);
          const radius = (Math.cos(j * 12.5) * 4 + 6) * (canvasWidth / 1920);
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(141, 198, 63, ${0.12 * Math.sin(progress * Math.PI + j)})`;
          ctx.shadowBlur = 15;
          ctx.shadowColor = "#8dc63f";
          ctx.fill();
        }
        ctx.shadowBlur = 0; // reset shadow

        // Render soft atmospheric light rays
        ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
        ctx.lineWidth = 2;
        for (let r = 0; r < 6; r++) {
          ctx.beginPath();
          ctx.moveTo(canvasWidth * (0.3 + r * 0.08), 0);
          ctx.lineTo(canvasWidth * (0.1 + r * 0.15), canvasHeight);
          ctx.stroke();
        }

        // Moss / Organic Bed at the base
        const mossY = canvasHeight * 0.72;
        const mossW = canvasWidth * 0.6;
        const mossH = canvasHeight * 0.12;
        const mossGrad = ctx.createRadialGradient(
          canvasWidth / 2,
          mossY,
          10,
          canvasWidth / 2,
          mossY,
          mossW / 2
        );
        mossGrad.addColorStop(0, "rgba(58, 115, 75, 0.85)"); // Velvet moss green
        mossGrad.addColorStop(0.6, "rgba(31, 62, 40, 0.4)");
        mossGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = mossGrad;
        ctx.beginPath();
        ctx.ellipse(canvasWidth / 2, mossY, mossW / 2, mossH / 2, 0, 0, Math.PI * 2);
        ctx.fill();

        // Let's draw some procedural moss details (little grass points)
        ctx.fillStyle = "rgba(110, 179, 130, 0.3)";
        for (let g = 0; g < 40; g++) {
          const gx = canvasWidth / 2 + (Math.sin(g * 9.2) * mossW * 0.4);
          const gy = mossY + (Math.cos(g * 5.7) * mossH * 0.4);
          ctx.beginPath();
          ctx.moveTo(gx, gy);
          ctx.lineTo(gx - 3, gy - 8 - Math.sin(g) * 4);
          ctx.lineTo(gx + 3, gy);
          ctx.fill();
        }

        // --- DRAW METALLIC ALUMINIUM CONTAINER ---
        // Container stays stationary near the bottom
        const containerW = canvasWidth * 0.34;
        const containerH = canvasHeight * 0.14;
        const containerX = (canvasWidth - containerW) / 2;
        const containerY = canvasHeight * 0.52;

        // Container Shadow
        const shadowGrad = ctx.createRadialGradient(
          canvasWidth / 2,
          containerY + containerH,
          10,
          canvasWidth / 2,
          containerY + containerH,
          containerW * 0.6
        );
        shadowGrad.addColorStop(0, "rgba(0,0,0,0.75)");
        shadowGrad.addColorStop(0.8, "rgba(0,0,0,0.1)");
        shadowGrad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = shadowGrad;
        ctx.beginPath();
        ctx.ellipse(
          canvasWidth / 2,
          containerY + containerH,
          containerW * 0.55,
          containerH * 0.25,
          0,
          0,
          Math.PI * 2
        );
        ctx.fill();

        // Helper function for rounded rects
        const drawRoundedRect = (
          x: number,
          y: number,
          w: number,
          h: number,
          r: number,
          fill: CanvasGradient | string,
          stroke?: string,
          strokeWidth?: number
        ) => {
          ctx.beginPath();
          ctx.moveTo(x + r, y);
          ctx.lineTo(x + w - r, y);
          ctx.quadraticCurveTo(x + w, y, x + w, y + r);
          ctx.lineTo(x + w, y + h - r);
          ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
          ctx.lineTo(x + r, y + h - r);
          ctx.quadraticCurveTo(x, y + h, x, y + h - r);
          ctx.lineTo(x, y + r);
          ctx.quadraticCurveTo(x, y, x + r, y);
          ctx.closePath();
          ctx.fillStyle = fill;
          ctx.fill();
          if (stroke) {
            ctx.strokeStyle = stroke;
            ctx.lineWidth = strokeWidth || 1;
            ctx.stroke();
          }
        };

        // Inner/Base gradient for 3D metallic depth
        const metalGrad = ctx.createLinearGradient(
          containerX,
          containerY,
          containerX + containerW,
          containerY
        );
        metalGrad.addColorStop(0, "#a1a8b5");
        metalGrad.addColorStop(0.2, "#f3f4f6"); // Reflective highlight
        metalGrad.addColorStop(0.4, "#929aa6");
        metalGrad.addColorStop(0.7, "#cbd5e1");
        metalGrad.addColorStop(1, "#7d8591");

        // Rounded body of aluminium tray
        drawRoundedRect(
          containerX,
          containerY,
          containerW,
          containerH,
          18,
          metalGrad,
          "rgba(255, 255, 255, 0.4)",
          1.5
        );

        // Ridges on the tray walls (standard eco-aluminium ridges for structural strength)
        const numRidges = 12;
        ctx.strokeStyle = "rgba(0, 0, 0, 0.15)";
        ctx.lineWidth = 1.5;
        const ridgeY1 = containerY + containerH * 0.2;
        const ridgeY2 = containerY + containerH * 0.8;
        for (let k = 1; k < numRidges; k++) {
          const rx = containerX + (containerW / numRidges) * k;
          ctx.beginPath();
          ctx.moveTo(rx, ridgeY1);
          ctx.lineTo(rx, ridgeY2);
          ctx.stroke();
          ctx.strokeStyle = "rgba(255,255,255,0.3)";
          ctx.beginPath();
          ctx.moveTo(rx + 1.5, ridgeY1);
          ctx.lineTo(rx + 1.5, ridgeY2);
          ctx.stroke();
          ctx.strokeStyle = "rgba(0, 0, 0, 0.15)";
        }

        // Inner rim lip
        const lipGrad = ctx.createLinearGradient(
          containerX,
          containerY,
          containerX,
          containerY + 12
        );
        lipGrad.addColorStop(0, "#cbd5e1");
        lipGrad.addColorStop(0.5, "#ffffff");
        lipGrad.addColorStop(1, "#94a3b8");
        drawRoundedRect(
          containerX - 3,
          containerY - 2,
          containerW + 6,
          8,
          4,
          lipGrad,
          "rgba(0,0,0,0.1)",
          1
        );

        // --- DRAW VEGETABLES/SALAD FLOATING (Exploded state) ---
        const saladProgress = Math.min(progress / 0.45, 1);
        const pieces = [
          { rx: -0.15, ry: -0.22, color: "#e11d48", type: "tomato", size: 16, angle: 1.2 },
          { rx: 0.12, ry: -0.28, color: "#84cc16", type: "spinach", size: 24, angle: -0.8 },
          { rx: -0.05, ry: -0.34, color: "#4ade80", type: "lettuce", size: 28, angle: 0.4 },
          { rx: 0.22, ry: -0.16, color: "#ea580c", type: "carrot", size: 12, angle: 2.1 },
          { rx: -0.22, ry: -0.12, color: "#84cc16", type: "spinach", size: 20, angle: -1.9 },
        ];

        pieces.forEach((piece, index) => {
          const startY = containerY - canvasHeight * 0.35 + (index * 20);
          const endY = containerY + containerH * 0.3; // inside container
          const currentPieceY = startY + (endY - startY) * saladProgress;
          const currentPieceX = canvasWidth / 2 + piece.rx * containerW;

          // Fade out as it settles deep into container
          const opacity = Math.max(1 - saladProgress * 0.75, 0.15);

          ctx.save();
          ctx.translate(currentPieceX, currentPieceY);
          ctx.rotate(piece.angle + progress * 2.5);

          if (piece.type === "tomato") {
            ctx.shadowBlur = 10;
            ctx.shadowColor = piece.color;
            ctx.fillStyle = `rgba(225, 29, 72, ${opacity})`;
            ctx.beginPath();
            ctx.arc(0, 0, piece.size, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = `rgba(244, 63, 94, ${opacity})`;
            ctx.beginPath();
            ctx.arc(0, 0, piece.size * 0.7, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = `rgba(253, 224, 71, ${opacity})`;
            for (let s = 0; s < 4; s++) {
              ctx.beginPath();
              ctx.arc(Math.cos(s * Math.PI / 2) * 5, Math.sin(s * Math.PI / 2) * 5, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          } else if (piece.type === "spinach" || piece.type === "lettuce") {
            ctx.shadowBlur = 8;
            ctx.shadowColor = piece.color;
            ctx.fillStyle = `rgba(74, 222, 128, ${opacity})`;
            ctx.beginPath();
            ctx.ellipse(0, 0, piece.size, piece.size * 0.5, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = `rgba(34, 197, 94, ${opacity * 0.6})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(-piece.size, 0);
            ctx.lineTo(piece.size, 0);
            ctx.stroke();
          } else {
            ctx.shadowBlur = 8;
            ctx.shadowColor = piece.color;
            ctx.fillStyle = `rgba(234, 88, 12, ${opacity})`;
            ctx.beginPath();
            ctx.arc(0, 0, piece.size, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
        });

        // --- DRAW LID CLOSING ---
        const lidProgress = Math.max(0, Math.min((progress - 0.35) / 0.5, 1));
        const lidYStart = containerY - canvasHeight * 0.42;
        const lidYEnd = containerY - 1; // perfectly on the rim
        const currentLidY = lidYStart + (lidYEnd - lidYStart) * lidProgress;

        // Draw lid shadow on the container
        if (lidProgress > 0.05) {
          const lidShadowOpacity = lidProgress * 0.45;
          const lidShadowH = (1 - lidProgress) * 35;
          const lidShadowGrad = ctx.createRadialGradient(
            canvasWidth / 2,
            containerY,
            5,
            canvasWidth / 2,
            containerY,
            containerW * 0.5
          );
          lidShadowGrad.addColorStop(0, `rgba(0, 0, 0, ${lidShadowOpacity})`);
          lidShadowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = lidShadowGrad;
          ctx.beginPath();
          ctx.ellipse(
            canvasWidth / 2,
            containerY + 5,
            containerW * 0.52,
            12 + lidShadowH,
            0,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }

        // Draw the Lid itself
        ctx.save();
        const lidAngle = (1 - lidProgress) * 0.04;
        ctx.translate(canvasWidth / 2, currentLidY);
        ctx.rotate(lidAngle);

        const lidW = containerW * 0.99;
        const lidH = containerH * 0.14;

        // Lid silver gradient
        const lidGrad = ctx.createLinearGradient(
          -lidW / 2,
          0,
          lidW / 2,
          0
        );
        lidGrad.addColorStop(0, "#ccd3e0");
        lidGrad.addColorStop(0.3, "#f8fafc");
        lidGrad.addColorStop(0.6, "#94a3b8");
        lidGrad.addColorStop(0.8, "#cbd5e1");
        lidGrad.addColorStop(1, "#64748b");

        drawRoundedRect(
          -lidW / 2,
          -lidH / 2,
          lidW,
          lidH,
          8,
          lidGrad,
          "rgba(255,255,255,0.7)",
          1.5
        );

        // Raised structural rectangle panel inside lid
        const innerLidW = lidW * 0.88;
        const innerLidH = lidH * 0.72;
        const innerLidGrad = ctx.createLinearGradient(
          -innerLidW / 2,
          0,
          innerLidW / 2,
          0
        );
        innerLidGrad.addColorStop(0, "#94a3b8");
        innerLidGrad.addColorStop(0.4, "#cbd5e1");
        innerLidGrad.addColorStop(1, "#475569");

        drawRoundedRect(
          -innerLidW / 2,
          -innerLidH / 2,
          innerLidW,
          innerLidH,
          5,
          innerLidGrad,
          "rgba(0,0,0,0.15)",
          1.2
        );

        // Embossed Hulpak brand name on lid
        ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
        ctx.font = `bold ${Math.max(12, 15 * (canvasWidth / 1920))}px "Outfit", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("HULPAK", 0, -1);

        // Shadow underneath letters for debossed effect
        ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
        ctx.fillText("HULPAK", 0, -2);

        // Eco Logo badge on lid
        ctx.fillStyle = "rgba(141, 198, 63, 0.35)";
        ctx.font = `bold ${Math.max(8, 10 * (canvasWidth / 1920))}px "Inter", sans-serif`;
        ctx.fillText("♻ 100% RECYCLABLE", 0, lidH * 0.22);

        ctx.restore();

        // --- DRAW SEALING RIPPLE EFFECT AT THE END ---
        if (progress >= 0.85) {
          const sealProgress = (progress - 0.85) / 0.15;
          const rippleRadius = (containerW * 0.5) + (sealProgress * 220);
          const rippleOpacity = 1 - sealProgress;

          ctx.strokeStyle = `rgba(141, 198, 63, ${rippleOpacity * 0.85})`;
          ctx.lineWidth = 3 - sealProgress * 1.5;
          ctx.beginPath();
          ctx.ellipse(
            canvasWidth / 2,
            containerY + 2,
            rippleRadius,
            rippleRadius * 0.18,
            0,
            0,
            Math.PI * 2
          );
          ctx.stroke();

          // Spark particles flying off the seal edges
          ctx.fillStyle = `rgba(255, 255, 255, ${rippleOpacity})`;
          for (let s = 0; s < 10; s++) {
            const angle = (s * Math.PI / 5) + (progress * 2);
            const px = canvasWidth / 2 + Math.cos(angle) * (containerW * 0.5 + sealProgress * 100);
            const py = containerY + Math.sin(angle) * (containerW * 0.12 + sealProgress * 20);
            ctx.beginPath();
            ctx.arc(px, py, 2.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }

    // Initial render call
    render();

    return () => {
      isCancelled = true;
      clearTimeout(fallbackTimeout);
      window.removeEventListener("resize", handleResize);
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, [isUsingFallback]);

  const lines = [
    "Reinventing Packaging with Innovation, Inclusion and a Greener Tomorrow.",
    "Hulpak: Redefining Packaging through Innovation and Inclusion.",
    "Smart Packaging Meets Green Innovation and Inclusive Growth.",
    "Future-Ready Packaging fueled by Innovation, Inclusion and Sustainability.",
    "Eco-Engineered. Ethically Driven. Exclusively Hulpak."
  ];

  const getLineOpacity = (progress: number, index: number) => {
    const ranges = [
      { start: 0.0, peakStart: 0.0, peakEnd: 0.15, end: 0.22 },
      { start: 0.18, peakStart: 0.23, peakEnd: 0.35, end: 0.42 },
      { start: 0.38, peakStart: 0.43, peakEnd: 0.55, end: 0.62 },
      { start: 0.58, peakStart: 0.63, peakEnd: 0.75, end: 0.82 },
      { start: 0.78, peakStart: 0.83, peakEnd: 1.0, end: 1.0 },
    ];
    
    const { start, peakStart, peakEnd, end } = ranges[index];
    if (index === lines.length - 1) {
      if (progress < start) return 0;
      if (progress >= peakStart) return 1;
      return (progress - start) / (peakStart - start);
    }
    
    if (progress < start || progress > end) return 0;
    if (progress >= peakStart && progress <= peakEnd) return 1;
    if (progress < peakStart) {
      return (progress - start) / (peakStart - start);
    } else {
      return (end - progress) / (end - peakEnd);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero-scroll"
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center select-none"
    >
      {/* Loading Cover */}
      {!isPreloaded && (
        <div className="absolute inset-0 bg-[#020703] z-50 flex flex-col items-center justify-center text-white px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 border-4 border-emerald-500/25 border-t-emerald-400 rounded-full animate-spin" />
            <Leaf className="w-6 h-6 text-emerald-400 animate-pulse absolute" />
          </div>
          <h2 className="text-2xl font-display font-medium tracking-tight text-white mb-2">
            Loading Hulpak Experience
          </h2>
          <p className="text-gray-400 text-sm font-mono tracking-wider">
            PRELOADING SCENERY & BULLION: {loadingProgress}%
          </p>
          <div className="w-64 h-1 bg-emerald-950 rounded-full mt-4 overflow-hidden">
            <div
              className="h-full bg-emerald-400 transition-all duration-200"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Dynamic Fading Text Overlays (Montserrat) */}
      <div className="absolute inset-y-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center md:justify-start pointer-events-none select-none z-10 pt-24 pb-10">
        {/* Glassmorphism Container */}
        <div 
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "20px",
          }}
          className="w-[90%] sm:w-full max-w-xl p-6 sm:p-10 flex flex-col items-start justify-center text-left pointer-events-auto shadow-2xl max-h-[80vh] overflow-y-auto"
        >
          <div className="relative w-full h-[180px] sm:h-[160px] md:h-[200px] flex items-center justify-start">
            {lines.map((text, idx) => {
              const opacity = getLineOpacity(scrollProgress, idx);
              const translateY = (1 - opacity) * 20; // Subtle lift as it fades out / appears
              return (
                <h2
                  key={idx}
                  style={{
                    opacity,
                    transform: `translateY(${translateY}px)`,
                    transition: "opacity 0.15s ease-out, transform 0.15s ease-out",
                    fontFamily: '"Montserrat", sans-serif',
                  }}
                  className="absolute text-left text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white max-w-full leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
                >
                  {text}
                </h2>
              );
            })}
          </div>

          {/* Persistent Elements (Montserrat Slogan and Action Buttons) */}
          <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col items-start gap-4 sm:gap-5 pointer-events-auto z-25 w-full">
            {/* Static Slogan */}
            <span 
              style={{ fontFamily: '"Montserrat", sans-serif' }}
              className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-emerald-400 text-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            >
              A Stamp of Quality
            </span>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-6 w-full">
              <button
                onClick={() => scrollToSection("products")}
                style={{ fontFamily: '"Montserrat", sans-serif' }}
                className="w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-[#4C9E39] hover:bg-[#5bb347] text-white font-extrabold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_6px_20px_rgba(76,158,57,0.3)] hover:shadow-[0_6px_25px_rgba(76,158,57,0.5)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                Browse Products
              </button>
              <button
                onClick={() => scrollToSection("recipes")}
                style={{ fontFamily: '"Montserrat", sans-serif' }}
                className="w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-extrabold text-xs md:text-sm tracking-wider uppercase backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                Recipes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient shadow transition to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none z-20"
        style={{
          background: "linear-gradient(to bottom, transparent, #000000)"
        }}
      />
    </section>
  );
}
