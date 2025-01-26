import { motion } from "framer-motion"
import Logo from "./logo"

const Splash = () => {
  return (
      <div className="relative">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}  transition={{ duration: 1.2, ease: "easeInOut" }}>
          <Logo className="h-32 w-32 md:h-56 md:w-56" />
        </motion.div>
      </div>
  )
}

export default Splash
