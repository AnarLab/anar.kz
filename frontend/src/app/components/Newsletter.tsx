import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-lg">
      <div className="flex items-start mb-4">
        <Mail className="w-8 h-8 mr-3 flex-shrink-0" />
        <div>
          <h3 className="text-2xl mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-blue-100">
            Get the latest tech insights and updates delivered to your inbox
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!isSubscribed ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center justify-center p-4 bg-white/10 rounded-lg"
          >
            <CheckCircle className="w-6 h-6 mr-2" />
            <span>Thank you for subscribing!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
