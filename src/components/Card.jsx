import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { buttonCounter } from "../jotai/masterAtom";
import { useAtom } from "jotai";

// eslint-disable-next-line react/prop-types
export default function Cards({ img, title, desc, classF }) {
  const [counterAtom, setCounterAtom] = useAtom(buttonCounter);
  let isShowBtn = true;
  if (counterAtom === 4) {
    isShowBtn = false;
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      {" "}
      <Card className="mt-6 min-w-[250px]">
        {img && (
          <CardHeader color="blue-gray" className="relative object-cover">
            <img src={img} alt="" />
          </CardHeader>
        )}
        <CardBody className={`${classF}`}>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>{desc}</Typography>
        </CardBody>
        <div className="flex  justify-end w-full">
          {isShowBtn && (
            <CardFooter className="pt-0">
              <Button
                onClick={() => setCounterAtom(counterAtom + 1)}
                className="flex items-center gap-2"
              >
                Next <FaRegArrowAltCircleRight />
              </Button>
            </CardFooter>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
