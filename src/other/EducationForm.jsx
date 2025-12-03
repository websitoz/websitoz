// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const EducationForm = () => {
//   const container = useRef();

//   useEffect(() => {
//     gsap.from(container.current, { opacity: 0, y: 40, duration: 1.2 });
//   }, []);

//   return (
//     <div className="relative min-h-screen text-white overflow-hidden">
      
//       <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
//         <source src="/videos/education.mp4" type="video/mp4" />
//       </video>

//       <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

//       <div ref={container} className="relative z-10 flex flex-col md:flex-row items-center p-10">
        
//         <div className="md:w-1/2 space-y-5">
//           <h1 className="text-5xl font-bold">Education / Coaching Website</h1>
//           <p className="text-gray-300">
//             Build a modern education platform with course pages, teacher profiles, scheduling, and forms.
//           </p>

//           <form className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-xl max-w-md">
//             <input className="w-full p-3 rounded bg-black/40" placeholder="Name" />
//             <input className="w-full p-3 rounded bg-black/40" placeholder="Institute Email" />
//             <input className="w-full p-3 rounded bg-black/40" placeholder="Website Type (School / Coaching)" />
//             <button className="w-full p-3 bg-green-600 rounded hover:bg-green-700">
//               Build Education Website
//             </button>
//           </form>
//         </div>

//         <img
//           src="https://cdn.dribbble.com/userupload/43929256/file/original-cf966e820a960693bc3633256001a01e.png?resize=1504x1128&vertical=center"
//           className="w-full md:w-1/2 rounded-xl shadow-xl mt-10 md:mt-0 border border-white/20"
//         />
//       </div>
//     </div>
//   );
// };

// export default EducationForm;
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const EducationForm = () => {
  const container = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Google Sheet Script URL
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzGfE0ssObKkFNQitXK331lKkSXtXkXIxXNxGML2Hyo-si0Df8dni38LhBayicrxKmwzQ/exec";

  useEffect(() => {
    gsap.from(container.current, { opacity: 0, y: 40, duration: 1.2 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);

    try {
      await fetch(scriptURL, { method: "POST", body: formDataToSend });
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error("Error!", error);
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/videos/education.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div
        ref={container}
        className="relative z-10 flex flex-col md:flex-row items-center p-10"
      >
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-5xl font-bold">
            Education / Coaching Website
          </h1>

          <p className="text-gray-300">
            Build a modern education platform with course pages, teacher profiles,
            scheduling, and forms.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-xl max-w-md"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black/40"
              placeholder="Name"
              required
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black/40"
              placeholder="Institute Email"
              required
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black/40"
              placeholder="Phone Number"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 bg-green-600 rounded hover:bg-green-700 transition-all"
            >
              {loading ? "Submitting..." : "Build Education Website"}
            </button>

            {isSubmitted && (
              <p className="text-green-400 text-sm pt-2">
                ✔ Your request has been submitted!
              </p>
            )}
          </form>
        </div>

        <img
          src="https://cdn.dribbble.com/userupload/43929256/file/original-cf966e820a960693bc3633256001a01e.png?resize=1504x1128&vertical=center"
          className="w-full md:w-1/2 rounded-xl shadow-xl mt-10 md:mt-0 border border-white/20"
          alt="Education Website"
        />
      </div>
    </div>
  );
};

export default EducationForm;
