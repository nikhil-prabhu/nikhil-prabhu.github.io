import { motion } from "framer-motion";
import { PiMouseSimpleBold } from "react-icons/pi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { IoFingerPrintOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="h-screen snap-start m-0 flex flex-col items-center justify-evenly">
      <div>
        {/* TODO: implement matrix text animation for name */}
        <motion.p
          className="font-gotham text-2xl uppercase text-foreground-400"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1],
          }}
          transition={{
            duration: 1.5,
            ease: "easeIn",
          }}
        >
          Nikhil Prabhu
        </motion.p>

        {/* TODO: implement render animations for roles */}
        <p className="font-gotham-bold text-7xl">Developer</p>
        <p className="font-gotham-bold text-7xl">
          <motion.span
            className="text-foreground-400 inline-block"
            initial={{
              rotate: 0,
            }}
            animate={{
              rotate: [0, 45, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          >
            +
          </motion.span>{" "}
          DevOps Engineer
        </p>
      </div>

      <div className="flex items-center justify-center">
        {/* Non-touchscreen devices */}
        <motion.div
          animate={{
            y: ["0%", "50%"],
            opacity: [1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.5,
            ease: "easeInOut",
          }}
          className="touch:hidden"
        >
          <PiMouseSimpleBold className="text-4xl text-foreground-600" />
          <MdOutlineKeyboardArrowDown className="text-4xl text-foreground-600" />
        </motion.div>

        {/* Touchscreen devices */}
        <motion.div
          animate={{
            y: ["50%", "0%"],
            opacity: [1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.5,
            ease: "easeInOut",
          }}
          className="no-touch:hidden"
        >
          <MdOutlineKeyboardArrowUp className="text-4xl text-foreground-600" />
          <IoFingerPrintOutline className="text-4xl text-foreground-600" />
        </motion.div>
      </div>
    </div>
  );
}
