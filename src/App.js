import "./styles.css";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="App">
      <motion.div
        initial={{ rotate: -10 }}
        whileHover={{
          rotate: 0,
          scale: 1.1
        }}
        whileTap={{
          scale: 0.9
        }}
        className="profile-pic"
      ></motion.div>
    </div>
  );
}
