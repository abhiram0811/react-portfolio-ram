import { RiReactjsLine } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { AiOutlineKubernetes } from "react-icons/ai";
import { RiOpenaiFill } from "react-icons/ri";
import { SiDatabricks } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { motion } from "framer-motion"; 

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x:-100}}
        transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x:-100}}
        transition={{duration: 1.5}}
       className="flex flex-wrap items-center justify-center gap-4"
       >
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-[#61DAFB]" /> {/* React - Cyan Blue */}
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDocker className="text-7xl text-[#2496ED]" /> {/* Docker - Blue */}
        </motion.div>
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <AiOutlineKubernetes className="text-7xl text-[#326CE5]" /> {/* Kubernetes - Blue */}
        </motion.div>
        <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-[#3776AB]" /> {/* Python - Blue */}
        </motion.div>
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDatabricks className="text-7xl text-[#FF3621]" /> {/* Databricks - Red */}
        </motion.div>
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiOpenaiFill className="text-7xl text-[#10A37F]" /> {/* OpenAI - Green */}
        </motion.div>
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAws className="text-7xl text-[#FF9900]" /> {/* AWS - Orange */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
