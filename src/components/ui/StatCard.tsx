import { motion } from "framer-motion";

interface Props {
  title: string;
  value: string;
}

function StatCard({ title, value }: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl"
    >
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="text-3xl font-bold text-green-600 mt-3">
        {value}
      </p>
    </motion.div>
  );
}

export default StatCard;