import { motion } from "motion/react"
import team1 from "../../src/assets/team/team1 (1).jpg"
import team2 from "../../src/assets/team/team2.jpg"
const Banner = () => {
  return (
    <div className="hero bg-base-200  min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
          animate={{y:[50,80,50]}}
          transition={{duration: 10, repeat:Infinity}}
            src={team1}
            className="max-w-sm w-64 rounded-t-3xl rounded-br-3xl border-l-8  border-b-8  border-blue-500 shadow-2xl"
          />
          <motion.img
          animate={{x:[150,190,150]}}
          transition={{duration: 10, repeat:Infinity}}
            src={team2}
            className="max-w-sm w-64 rounded-t-3xl rounded-br-3xl border-l-8  border-b-8  border-blue-500 shadow-2xl"
          />
        </div>
         
        <div className="flex-1">
          <motion.h1 
          animate={{x: 50  }}
          transition={{duration : 1, ease: "easeInOut", repeat: Infinity}}
          
           className="text-5xl font-bold text-purple-500">Latest <motion.span 
           animate={{color:['#2d71f9', '#27f1f7', '#b307c8','#f7bd42']}}
           transition={{duration: 1.5, ease:"easeInOut", repeat:Infinity}}
           >Jobs </motion.span> For You!</motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
