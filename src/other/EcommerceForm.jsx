// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const EcommerceForm = () => {
//   const box = useRef();

//   useEffect(() => {
//     gsap.from(box.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1.2,
//       ease: "power4.out",
//     });
//   }, []);

//   return (
//     <div
//       ref={box}
//       className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between p-10 bg-white"
//     >
//       <img
//         src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&q=80&w=800"
//         className="w-full md:w-1/2 rounded-xl shadow-lg"
//       />

//       <div className="md:w-1/2 space-y-5">
//         <h1 className="text-5xl font-bold text-gray-900">E-Commerce Website</h1>
//         <p className="text-gray-600">
//           Get a complete online shop with payment gateway, product pages & a
//           smooth UI.
//         </p>

//         <form className="space-y-4 bg-gray-100 p-6 rounded-xl shadow">
//           <input className="w-full p-3 rounded border" placeholder="Name" />
//           <input className="w-full p-3 rounded border" placeholder="Email" />
//           <input className="w-full p-3 rounded border" placeholder="Business Type" />
//           <button className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700">
//             Create My Store
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EcommerceForm;
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const EcommerceForm = () => {
//   const container = useRef();

//   useEffect(() => {
//     gsap.from(container.current, { opacity: 0, y: 40, duration: 1, ease: "power3.out" });
//   }, []);

//   return (
//     <div className="relative min-h-screen text-white overflow-hidden">
      
//       <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
//         <source src="/videos/ecommerce.mp4" type="video/mp4" />
//       </video>

//       <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

//       <div ref={container} className="relative z-10 flex flex-col md:flex-row items-center p-10">
        
//         <div className="md:w-1/2 space-y-5">
//           <h1 className="text-5xl font-bold">E-Commerce Website</h1>
//           <p className="text-gray-300">
//             Start selling online with cart, checkout, admin panel, products, secure payments,
//             and a modern UI built with animations.
//           </p>

//           <form className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-xl max-w-md">
//             <input className="w-full p-3 rounded bg-black/40" placeholder="Name" />
//             <input className="w-full p-3 rounded bg-black/40" placeholder="Business Email" />
//             <input className="w-full p-3 rounded bg-black/40" placeholder="Store Type (Fashion / Electronics)" />
//             <button className="w-full p-3 bg-blue-600 rounded hover:bg-blue-700">
//               Get E-Commerce Site
//             </button>
//           </form>
//         </div>

//         <img
//           src="https://cdn.dribbble.com/userupload/17626688/file/original-5026a2dc1709bf9ba15cdb0396e82aa7.png?resize=1504x1128&vertical=center"
//           className="w-full md:w-1/2 rounded-xl shadow-xl mt-10 md:mt-0 border border-white/20"
//         />

//       </div>
//     </div>
//   );
// };

// export default EcommerceForm;
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const EcommerceForm = () => {
  const container = useRef();

  // FORM STATES (NO TS)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 🔥 Your Google Sheet Script URL
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwK1I9kzgExYukuzhgrgP5M7_n2ipcVn-A2nWUqSnJ_YsjZsXU7sC9ckpLGnxB3gIjn/exec";

  // GSAP Animation
  useEffect(() => {
    gsap.from(container.current, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // SUBMIT FORM TO GOOGLE SHEETS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      });

      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      alert("Error submitting form!");
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      
      {/* 🔥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/videos/ecommerce.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* CONTENT */}
      <div
        ref={container}
        className="relative z-10 flex flex-col md:flex-row items-center p-10"
      >
        {/* LEFT TEXT */}
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-5xl font-bold">E-Commerce Website</h1>
          <p className="text-gray-300">
            Start selling online with cart, checkout, admin panel, products,
            secure payments and modern UI animations.
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-xl max-w-md border border-white/10"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black/40 outline-none"
              placeholder="Your Name"
              required
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black/40 outline-none"
              placeholder="Email Address"
              required
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black/40 outline-none"
              placeholder="Phone Number"
              required
            />

            <button
              className="w-full p-3 bg-blue-600 rounded hover:bg-blue-700 transition-all"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Get E-Commerce Site"}
            </button>

            {isSubmitted && (
              <p className="text-green-400 text-sm">Form submitted successfully!</p>
            )}
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src="https://cdn.dribbble.com/userupload/17626688/file/original-5026a2dc1709bf9ba15cdb0396e82aa7.png?resize=1504x1128&vertical=center"
          className="w-full md:w-1/2 rounded-xl shadow-xl mt-10 md:mt-0 border border-white/20"
        />
      </div>
    </div>
  );
};

export default EcommerceForm;
