import { motion } from "framer-motion";
import { AiOutlineProfile } from "react-icons/ai";
import { GiEnlightenment } from "react-icons/gi";

import Title from "../../components/Title";
const GenaralInfo = () => {
  return (
    <motion.circle
    cx={500} animate={{ cx: [null, 100] }}
    >
    <div className=" border-4 drop-shadow-sm px-10 py-5 rounded-2xl bg-yellow-50 hover:bg-yellow-600 hover:text-white transform transition duration-500 hover:scale-105 ">
      <Title title="General Information" />
      <div className="flex gap-2 mt-5">
        <GiEnlightenment className="hover:text-black" size={100} />
        <div className="space-y-3">
            <span className="flex justify-center items-center gap-2"><AiOutlineProfile/>সরকারি সিটি কলেজ সৃষ্টির ইতিহাস</span>
            <span className="flex justify-center items-center gap-2"><AiOutlineProfile/>সরকারি সিটি কলেজ সৃষ্টির ইতিহাস</span>
            <span className="flex justify-center items-center gap-2"><AiOutlineProfile/>সরকারি সিটি কলেজ সৃষ্টির ইতিহাস</span>
            <span className="flex justify-center items-center gap-2"><AiOutlineProfile/>সরকারি সিটি কলেজ সৃষ্টির ইতিহাস</span>
            <span className="flex justify-center items-center gap-2"><AiOutlineProfile/>সরকারি সিটি কলেজ সৃষ্টির ইতিহাস</span>
        </div>
      </div>
    </div>
    </motion.circle>
  );
};

export default GenaralInfo;
