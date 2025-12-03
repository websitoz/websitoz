// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const TravelForm = () => {
//   const container = useRef();

//   useEffect(() => {
//     gsap.from(container.current, { opacity: 0, y: 40, duration: 1 });
//   }, []);

//   return (
//     <div className="relative min-h-screen text-white overflow-hidden">
      
//       <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
//         <source src="/videos/travel.mp4" type="video/mp4" />
//       </video>

//       <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

//       <div ref={container} className="relative z-10 flex flex-col md:flex-row items-center p-10">
        
//         <div className="md:w-1/2 space-y-5">
//           <h1 className="text-5xl font-bold">Travel / Tour Website</h1>
//           <p className="text-gray-300">
//             Perfect for agencies with tour packages, bookings, maps, and beautiful animations.
//           </p>

//           <form className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-xl max-w-md">
//             <input className="w-full p-3 rounded bg-black/40" placeholder="Name" />
//             <input className="w-full p-3 rounded bg-black/40" placeholder="Travel Email" />
//             <input className="w-full p-3 rounded bg-black/40" placeholder="Travel Type (Adventure / Luxury)" />
//             <button className="w-full p-3 bg-yellow-600 rounded hover:bg-yellow-700">
//               Get Travel Website
//             </button>
//           </form>
//         </div>

//         <img
//           src="https://cdn.dribbble.com/userupload/45572383/file/76b77606b67239afc2294092bc922cd6.png?resize=1504x1128&vertical=center"
//           className="w-full md:w-1/2 rounded-xl shadow-xl mt-10 md:mt-0 border border-white/20"
//         />

//       </div>
//     </div>
//   );
// };

// export default TravelForm;
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const TravelForm = () => {
  const container = useRef();

  // ------------------------ FORM STATES ------------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Travel Website",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // YOUR GOOGLE SHEET SCRIPT URL
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyxk2M41PpzQoxTPt6i6lxnyyu3_wnLHErBovYCjhsjrQZ-PSNWEfkqc9L8bSeKwnCt0g/exec";

  // ------------------------ GSAP ENTRY ANIMATION ------------------------
  useEffect(() => {
    gsap.from(container.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  // ------------------------ HANDLE INPUT ------------------------
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ------------------------ HANDLE SUBMIT ------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Travel Website",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error!", error.message);
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      
      {/* BG VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/videos/travel.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* CONTENT */}
      <div
        ref={container}
        className="relative z-10 flex flex-col md:flex-row items-center p-10"
      >
        {/* LEFT SIDE TEXT */}
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-5xl font-bold">Travel / Tour Website</h1>
          <p className="text-gray-300">
            Perfect for agencies with tour packages, bookings, maps, and beautiful animations.
          </p>

          {/* SUCCESS MESSAGE */}
          {isSubmitted && (
            <p className="text-green-400 font-semibold">
              🎉 Your request has been submitted!
            </p>
          )}

          {/* FORM */}
          <form
            className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-xl max-w-md"
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-black/40 outline-none"
              placeholder="Name"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-black/40 outline-none"
              placeholder="Email"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-black/40 outline-none"
              placeholder="Phone Number"
            />

            <input
              name="service"
              value={formData.service}
              readOnly
              className="w-full p-3 rounded bg-black/40 outline-none"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full p-3 rounded bg-black/40 outline-none"
              placeholder="Your Requirements"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 bg-yellow-600 rounded hover:bg-yellow-700 transition-all"
            >
              {loading ? "Submitting..." : "Get Travel Website"}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <img
          src="https://cdn.dribbble.com/userupload/45572383/file/76b77606b67239afc2294092bc922cd6.png?resize=1504x1128&vertical=center"
          className="w-full md:w-1/2 rounded-xl shadow-xl mt-10 md:mt-0 border border-white/20"
          alt="travel design"
        />
      </div>
    </div>
  );
};

export default TravelForm;
