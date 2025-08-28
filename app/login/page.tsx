"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import {
  Loader2,
  AlertCircle,
  CheckCircle,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError("Email y contraseña requeridos");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, action: "login" }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Usuario o contraseña incorrectos");
      } else {
        setSuccess("Inicio de sesión exitoso");
        console.log("Usuario logueado:", data);
        window.location.href = "/canal-denuncias/lista-denuncias";
      }
    } catch (err) {
      setError("Error en el servidor. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <Card className="bg-blue-50 dark:bg-gray-800 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-7 h-7 text-orange-500" />
              <h1 className="text-2xl font-bold text-blue-600 dark:text-gray-100">
                Iniciar Sesión
              </h1>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label
                  htmlFor="email"
                  className="text-blue-600 dark:text-gray-300 font-medium"
                >
                  Correo electrónico *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ejemplo@correo.com"
                  className="mt-1 bg-white text-gray-900 placeholder:text-slate-400 dark:bg-gray-200 dark:text-slate-900"
                />
              </div>

              <div className="relative">
                <Label
                  htmlFor="password"
                  className="text-blue-600 dark:text-gray-300 font-medium"
                >
                  Contraseña *
                </Label>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Ingresa tu contraseña"
                  className="mt-1 pr-10 bg-white text-gray-900 placeholder:text-slate-400 dark:bg-gray-200 dark:text-slate-900"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-[38px] text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 mr-1" />
                  ) : (
                    <Eye className="w-5 h-5 mr-1" />
                  )}
                </button>
              </div>

              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    key="error"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex items-center gap-2 text-red-600"
                  >
                    <AlertCircle className="h-5 w-5" />
                    <p>{error}</p>
                  </motion.div>
                )}
                {success && (
                  <motion.div
                    key="success"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex items-center gap-2 text-green-600"
                  >
                    <CheckCircle className="h-5 w-5" />
                    <p>{success}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 flex items-center justify-center gap-2"
                  >
                    {loading && (
                      <Loader2 className="animate-spin h-5 w-5 text-white" />
                    )}
                    Ingresar
                  </Button>
                </motion.div>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
