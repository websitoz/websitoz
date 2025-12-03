// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const GymForm = () => {
//   const container = useRef();

//   useEffect(() => {
//     gsap.from(container.current, {
//       opacity: 0,
//       y: 40,
//       duration: 1.2,
//       ease: "power3.out",
//     });
//   }, []);

//   return (
//     <div
//       ref={container}
//       className="min-h-screen flex flex-col md:flex-row items-center justify-between p-10 bg-gray-900 text-white"
//     >
//       <div className="md:w-1/2 space-y-5">
//         <h1 className="text-5xl font-bold">Gym / Fitness Website</h1>
//         <p className="text-gray-300 text-lg">
//           Build a strong online presence for your gym with high-quality design,
//           membership plans, trainer profiles & modern animations.
//         </p>

//         <form className="space-y-4 bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">
//           <input className="w-full p-3 rounded bg-gray-700" placeholder="Name" />
//           <input className="w-full p-3 rounded bg-gray-700" placeholder="Email" />
//           <input className="w-full p-3 rounded bg-gray-700" placeholder="Gym Type (e.g. CrossFit)" />
//           <button className="w-full p-3 bg-red-600 rounded hover:bg-red-700">
//             Get Gym Website
//           </button>
//         </form>
//       </div>

//       <img
//         src="https://cdn.dribbble.com/userupload/18241704/file/original-19ad7655f9c717cf53115ee7e6b2f094.jpg?resize=1504x1128&vertical=center"
//         className="w-full md:w-1/2 rounded-xl shadow-xl mt-10 md:mt-0"
//       />
//     </div>
//   );
// };

// export default GymForm;
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const GymForm = () => {
//   const container = useRef();

//   useEffect(() => {
//     gsap.from(container.current, {
//       opacity: 0,
//       y: 30,
//       duration: 1.3,
//       ease: "power3.out",
//     });
//   }, []);

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      
//       {/* 🔥 Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
//       >
//         <source src="/videos/gym.mp4" type="video/mp4" />
//       </video>

//       {/* 🔥 Black Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

//       {/* Content */}
//       <div
//         ref={container}
//         className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-between p-10 backdrop-blur-sm"
//       >
//         {/* Text Section */}
//         <div className="md:w-1/2 space-y-6">
//           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
//             Gym / Fitness <br /> Website Design
//           </h1>

//           <p className="text-gray-300 text-lg max-w-md">
//             Get a modern, powerful and high-converting fitness website with 
//             animations, trainer profiles, membership plans & more.
//           </p>

//           {/* Form */}
//           <form className="space-y-4 bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-2xl w-full max-w-md border border-white/10">
//             <input className="w-full p-3 rounded bg-white/10 focus:bg-white/20 outline-none" placeholder="Full Name" />
//             <input className="w-full p-3 rounded bg-white/10 focus:bg-white/20 outline-none" placeholder="Email Address" />
//             <input className="w-full p-3 rounded bg-white/10 focus:bg-white/20 outline-none" placeholder="Gym Type (CrossFit, MMA…)" />

//             <button className="w-full p-3 bg-red-600 rounded-lg hover:bg-red-700 transition-all">
//               Get Gym Website
//             </button>
//           </form>
//         </div>

//         {/* Image Section (Optional Showcase) */}
//         <img
//           src="https://cdn.dribbble.com/userupload/18241704/file/original-19ad7655f9c717cf53115ee7e6b2f094.jpg?resize=1504x1128&vertical=center"
//           className="w-full md:w-1/2 rounded-xl shadow-xl mt-10 md:mt-0 border border-white/10"
//           alt="Gym Design"
//         />
//       </div>
//     </div>
//   );
// };

// export default GymForm;
import { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";
import gsap from "gsap";
 function GymAd() {
  const container = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gymType: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ⭐ YOUR GOOGLE SCRIPT URL ⭐
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwz_1Jye4e8u74ve0NR0nETwaP0FZeqp4ztS6zxSIvJBYAWutEneFO4fFYnkMxYStq5aw/exec";

  // GSAP animation
  useEffect(() => {
    gsap.from(container.current, {
      opacity: 0,
      y: 30,
      duration: 1.3,
      ease: "power3.out",
    });
  }, []);

  // handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("gymType", formData.gymType);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
      });

      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", gymType: "" });
    } catch (error) {
      alert("Error submitting form!");
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      >
        <source src="/videos/gym.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>

      {/* MAIN CONTENT */}
      <div
        ref={container}
        className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-between p-10 backdrop-blur-sm"
      >
        {/* TEXT SECTION */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Gym / Fitness <br /> Website Design
          </h1>

          <p className="text-gray-300 text-lg max-w-md">
            Get a premium & modern fitness website with animations, trainer sections, 
            membership plans and high-converting landing pages.
          </p>

          {/* SUCCESS MESSAGE */}
          {isSubmitted ? (
            <p className="text-green-400 font-semibold text-lg">
              ✅ Thank you! We will contact you soon.
            </p>
          ) : null}

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-2xl w-full max-w-md border border-white/10"
          >
            <input
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="w-full p-3 rounded bg-white/10 focus:bg-white/20 outline-none"
              placeholder="Full Name"
              required
            />

            <input
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full p-3 rounded bg-white/10 focus:bg-white/20 outline-none"
              placeholder="Email Address"
              required
            />

            <input
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              className="w-full p-3 rounded bg-white/10 focus:bg-white/20 outline-none"
              placeholder="Phone Number"
              required
            />

            <input
              name="gymType"
              onChange={handleChange}
              value={formData.gymType}
              className="w-full p-3 rounded bg-white/10 focus:bg-white/20 outline-none"
              placeholder="Gym Type (CrossFit, MMA, etc...)"
            />

            <button
              disabled={loading}
              className="w-full p-3 bg-red-600 rounded-lg hover:bg-red-700 transition-all"
            >
              {loading ? "Submitting..." : "Get Gym Website"}
            </button>
          </form>
        </div>

        {/* IMAGE */}
        <img
          src="https://cdn.dribbble.com/userupload/18241704/file/original-19ad7655f9c717cf53115ee7e6b2f094.jpg?resize=1504x1128&vertical=center"
          className="w-full md:w-1/2 rounded-xl shadow-xl mt-10 md:mt-0 border border-white/10"
          alt="Gym Design"
        />
      </div>
    </div>
  );
}
export default GymAd;