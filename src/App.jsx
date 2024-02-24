"use client";
import { Button } from "@material-tailwind/react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import * as React from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { buttonAtom, buttonCounter } from "./jotai/masterAtom";
import Cards from "./components/Card";
import lagu from "./audio/lagu.mp3";
import img from "./img/img.jpeg";
function App() {
  const card_next = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ];
  const [counterAtom] = useAtom(buttonCounter);
  let counter = card_next[counterAtom].id;
  const [buttonAtoms, setButtonAtom] = useAtom(buttonAtom);
  const handleButton = () => {
    try {
      const targetAudio = document.getElementsByClassName("audioBtn")[0];
      targetAudio.play();
      console.log(targetAudio);
    } catch (error) {
      console.log(error);
    }
    setButtonAtom(true);
  };

  // play
  return (
    <React.Fragment>
      <div
        className="container mx-auto min-w-screen min-h-screen 
        justify-center items-center hidden lg:flex"
      >
        Tampilan hanya tersedia pada layar Handphone dan juga Tablet
      </div>
      <div className="container mx-auto min-w-screen min-h-screen flex justify-center items-center lg:hidden max-w-sm">
        <audio className="audioBtn">
          <source src={lagu}></source>
        </audio>
        {!buttonAtoms && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            {" "}
            <div>
              <Button
                className="flex items-center gap-2"
                onClick={handleButton}
              >
                <FaRegArrowAltCircleRight />
                CLICK ME
              </Button>
            </div>
          </motion.div>
        )}

        {/* card 1 */}
        {buttonAtoms && counter === 1 && (
          <div className="p-10">
            <Cards
              title={"Terima Kasih"}
              desc={
                "Terima kasih atas segala bimbingan dan dukungan Anda selama ini, Pak Marko."
              }
            />
          </div>
        )}
        {/* card 1 */}

        {/* card 2 */}
        {buttonAtoms && counter === 2 && (
          <div className="p-10">
            <Cards
              title={"Sukses Selalu"}
              desc={
                "Selamat jalan, Pak. Semoga langkah Anda selalu diberkati dan sukses di tempat baru."
              }
            />
          </div>
        )}
        {/* card 2 */}

        {/* card 3 */}
        {buttonAtoms && counter === 3 && (
          <div className="p-10">
            <Cards
              title={"Merindukan Kehadiran"}
              desc={
                "Kami akan merindukan kehadiran dan arahan Anda, Pak Marko. Terima kasih atas segala pengorbanan yang telah Anda berikan."
              }
            />
          </div>
        )}
        {/* card 3 */}

        {/* card 4 */}
        {buttonAtoms && counter === 4 && (
          <div className="p-10">
            <Cards
              title={"Penuh Berkah"}
              desc={
                "Semoga perjalanan menuju masa depan yang baru penuh berkah dan keberhasilan, Pak Asep. Kami akan selalu mengenang jejak Anda di sini."
              }
            />
          </div>
        )}
        {/* card 4 */}

        {/* card 5 */}
        {buttonAtoms && counter === 5 && (
          <div className="p-10">
            <Cards
              img={img}
              title={"Sampai Jumpa"}
              desc={
                "Sampai jumpa, Pak Marko. Doa kami menyertai langkah Anda dalam meniti perjalanan baru. Terima kasih atas semua pelajaran dan inspirasi yang telah Anda bagi selama ini."
              }
              classF="text-center"
            />
          </div>
        )}
        {/* card 5 */}

      </div>
    </React.Fragment>
  );
}

export default App;
