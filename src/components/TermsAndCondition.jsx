import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TermsAndConditions() {
  useEffect(() => {
    gsap.from(".fade-section", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".fade-section",
        start: "top 90%",
      },
    });

    gsap.to(".glow-border", {
      boxShadow: "0 0 40px rgba(99,102,241,0.6)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-gray-200 py-20 px-6 md:px-20 lg:px-40 font-general">
      <div className="glow-border rounded-3xl border border-indigo-500/40 p-10 md:p-16 bg-black/40 backdrop-blur-xl">
        <h1 className="text-4xl md:text-6xl font-bold text-indigo-400 mb-10 text-center fade-section">
          Terms & Conditions
        </h1>

        <section className="fade-section mb-10">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            By using this platform, you agree to comply with and be legally bound
            by the terms outlined here. If you do not agree with any part of these
            Terms & Conditions, you must discontinue use immediately.
          </p>
        </section>

        <section className="fade-section mb-10">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-3">2. User Responsibilities</h2>
          <p className="text-gray-300 leading-relaxed">
            You agree to use the platform responsibly and avoid any activity that
            could harm the system, misuse data, or violate any applicable laws.
          </p>
        </section>

        <section className="fade-section mb-10">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-3">3. Intellectual Property</h2>
          <p className="text-gray-300 leading-relaxed">
            All content, design assets, images, animations, and code are the
            exclusive property of the company and protected under copyright laws.
          </p>
        </section>

        <section className="fade-section mb-10">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-3">4. Service Modifications</h2>
          <p className="text-gray-300 leading-relaxed">
            We reserve the right to modify, suspend, or discontinue any part of the
            service at any time without prior notice.
          </p>
        </section>

        <section className="fade-section mb-10">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-3">5. Limitation of Liability</h2>
          <p className="text-gray-300 leading-relaxed">
            We are not liable for any direct, indirect, incidental, or
            consequential damages arising from the use or inability to use our
            platform.
          </p>
        </section>

        <section className="fade-section mb-10">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-3">6. Updates to Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            These Terms & Conditions may be updated at any time. Continued use of
            the platform signifies your acceptance of the updated policies.
          </p>
        </section>

        <footer className="text-center text-gray-400 mt-12 fade-section">
          © {new Date().getFullYear()} All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
