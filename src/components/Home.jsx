// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const Home = () => {
// //   const [resumeFile, setResumeFile] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [suggestions, setSuggestions] = useState(null);

// //   const handleFileChange = (e) => {
// //     setResumeFile(e.target.files[0]);
// //   };

// //   const handleSubmit = async () => {
// //     if (!resumeFile) return;

// //     setLoading(true);
// //     const formData = new FormData();
// //     formData.append('resume', resumeFile);

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/analyze-resume', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });
// //       setSuggestions(response.data.suggestions);
// //     } catch (error) {
// //       console.error("Error uploading resume:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="max-w-lg mx-auto p-6">
// //       <h1 className="text-3xl mb-4">Resume Analyzer</h1>
// //       <input type="file" onChange={handleFileChange} className="mb-4" />
// //       <button
// //         onClick={handleSubmit}
// //         disabled={loading}
// //         className="px-4 py-2 bg-blue-500 text-white rounded"
// //       >
// //         {loading ? 'Analyzing...' : 'Analyze Resume'}
// //       </button>

// //       {suggestions && (
// //         <div className="mt-6">
// //           <h2 className="text-2xl">Suggestions:</h2>
// //           <pre>{suggestions}</pre>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Home;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Home = ({ setSuggestions }) => {
//   const [resumeFile, setResumeFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleFileChange = (e) => {
//     setResumeFile(e.target.files[0]);
//   };

//   const handleSubmit = async () => {
//     if (!resumeFile) return;

//     setLoading(true);
//     const formData = new FormData();
//     formData.append('resume', resumeFile);

//     try {
//       const response = await axios.post('http://localhost:5000/api/analyze-resume', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setSuggestions(response.data.suggestions);
//       navigate('/result');
//     } catch (error) {
//       console.error("Error uploading resume:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6">
//       <h1 className="text-3xl mb-4 text-center">Resume Analyzer</h1>
//       <input
//         type="file"
//         onChange={handleFileChange}
//         className="block w-full mb-4"
//       />
//       <button
//         onClick={handleSubmit}
//         disabled={loading}
//         className="w-full px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
//       >
//         {loading ? 'Analyzing...' : 'Analyze Resume'}
//       </button>
//     </div>
//   );
// };

// export default Home;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// import { motion } from 'framer-motion';


const Home = ({ setSuggestions }) => {
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!resumeFile) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('resume', resumeFile);

    try {
      const response = await axios.post('${import.meta.env.VITE_API_URL}/api/analyze-resume', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuggestions(response.data.suggestions);
      navigate('/result');
    } catch (error) {
      console.error("Error uploading resume:", error);
    } finally {
      setLoading(false);
    }
  };


  {/* ...content */}

  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 40 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5 }}
    //   className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl"
    // >
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Upload Your Resume
          </h1>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-6"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {loading ? 'Analyzing Resume...' : 'Analyze Resume'}
          </button>
        </div>
      </div>
    // </motion.div>
  );
};

export default Home;
