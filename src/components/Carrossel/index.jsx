import { useState, useEffect, useRef } from "react";
import { Container } from "./styles.jsx";
import { motion } from "framer-motion";

import comenatario from "../../assets/comentario.png";
import comenatario2 from "../../assets/comentario2.png";
import comenatario3 from "../../assets/comentario3.png";
import comenatario4 from "../../assets/comentario4.png";

const images = [comenatario, comenatario2, comenatario3, comenatario4];

export default function Carrossel() {
  const carrosselRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(
      carrosselRef.current?.scrollWidth - carrosselRef.current?.clientWidth
    );
  }, []);

  return (
    <Container>
      <motion.div
        ref={carrosselRef}
        className="carrossel"
        whileHover={{ scale: 1.1 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
          dragElastic={0.1}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <motion.img src={image} alt="comentario" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
}
