// const Result = ({ suggestions }) => (
//     <div className="max-w-lg mx-auto p-6">
//       <h2 className="text-2xl mb-4">Resume Analysis</h2>
//       <div className="text-lg">{suggestions}</div>
//     </div>
//   );
  
//   export default Result;
  

// import { motion } from 'framer-motion';

const Result = ({ suggestions }) => (
  // <motion.div
  // initial={{ opacity: 0, scale: 0.95 }}
  // animate={{ opacity: 1, scale: 1 }}
  // transition={{ duration: 0.4 }}
  // className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full"
  // >
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI Suggestions</h2>
        <div className="bg-gray-100 p-4 rounded text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
          {suggestions}
        </div>
      </div>
    </div>
  // </motion.div>
);

export default Result;
