"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, Loader2, Check, Trash2 } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface Denuncia {
  id: number;
  ticketId: string;
  estado: string;
  mensaje: string;
  respuesta: string;
  createdAt: string;
}

export default function ListaDenunciasPage() {
  const [tickets, setTickets] = useState<Denuncia[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [searchText, setSearchText] = useState("");
  const [filterEstado, setFilterEstado] = useState("");
  const [originalTickets, setOriginalTickets] = useState<Denuncia[]>([]);

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 5;

  useEffect(() => {
    const fetchTickets = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/denuncias/lista-denuncias");
        if (!res.ok) throw new Error("Error al obtener denuncias");
        const data: Denuncia[] = await res.json();
        setTickets(data);
        setOriginalTickets(data);
      } catch (err) {
        MySwal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudieron cargar los tickets",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchTickets();
  }, []);

  // Data simulada
  //   useEffect(() => {
  //     const fetchTickets = async () => {
  //       setLoading(true);
  //       try {
  //         const mockTickets: Denuncia[] = Array.from({ length: 30 }, (_, i) => {
  //           const estados = ["Pendiente", "En proceso", "Resuelto"];
  //           return {
  //             id: i + 1,
  //             ticketId: `T-${1000 + i}`,
  //             estado: estados[i % 3],
  //             mensaje: `Mensaje de prueba número ${i + 1}`,
  //             respuesta: `Respuesta de prueba número ${i + 1}`,
  //             createdAt: new Date(Date.now() - i * 1000 * 60 * 60).toISOString(),
  //           };
  //         });
  //         await new Promise((r) => setTimeout(r, 500));
  //         setTickets(mockTickets);
  //         setOriginalTickets(mockTickets);
  //       } catch (err) {
  //         MySwal.fire({
  //           icon: "error",
  //           title: "Error",
  //           text: "No se pudieron cargar los tickets",
  //         });
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchTickets();
  //   }, []);

  const hasChanged = (ticket: Denuncia) => {
    const original = originalTickets.find((t) => t.id === ticket.id);
    if (!original) return false;
    return (
      ticket.estado !== original.estado ||
      ticket.respuesta !== original.respuesta
    );
  };

  const handleUpdate = async (
    id: number,
    data: { estado?: string; respuesta?: string }
  ) => {
    setSavingId(id);
    try {
      const res = await fetch(`/api/denuncias/lista-denuncias/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error al actualizar ticket");
      const updated = await res.json();
      setTickets((prev) =>
        prev.map((t) => (t.id === id ? { ...t, ...updated } : t))
      );
      setOriginalTickets((prev) =>
        prev.map((t) => (t.id === id ? { ...t, ...updated } : t))
      );
      MySwal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Ticket actualizado correctamente",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (err) {
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo actualizar el ticket",
      });
    } finally {
      setSavingId(null);
    }
  };

  const handleDelete = async (id: number) => {
    const result = await MySwal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (!result.isConfirmed) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/denuncias/lista-denuncias/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error al eliminar ticket");
      setTickets((prev) => prev.filter((t) => t.id !== id));
      MySwal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Ticket eliminado correctamente",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (err) {
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el ticket",
      });
    } finally {
      setDeletingId(null);
    }
  };

  // Filtrar tickets
  const filteredTickets = tickets.filter(
    (t) =>
      (t.ticketId.toLowerCase().includes(searchText.toLowerCase()) ||
        t.mensaje.toLowerCase().includes(searchText.toLowerCase())) &&
      (filterEstado === "" || t.estado === filterEstado)
  );

  // Paginación
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = filteredTickets.slice(
    indexOfFirstTicket,
    indexOfLastTicket
  );
  const totalPages = Math.ceil(filteredTickets.length / ticketsPerPage);

  const getBadgeColor = (estado: string) => {
    switch (estado) {
      case "Pendiente":
        return "bg-yellow-200 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100";
      case "En proceso":
        return "bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-100";
      case "Resuelto":
        return "bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-100";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen dark:bg-gray-900">
      {/* Logo */}
      <section className="relative h-50 flex items-center justify-center">
        <Image
          src="/img/logo-tandem.jpg"
          alt="Logo Tandem"
          width={180}
          height={180}
          className="rounded-full object-cover border-4 border-white shadow-lg mt-8"
          priority
        />
      </section>

      <div className="container mx-auto px-4 pb-12 pt-4">
        {/* Título */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Megaphone className="w-8 h-8 text-red-500" />
            <h1 className="text-2xl font-bold text-blue-600">
              Lista de Denuncias
            </h1>
          </div>
          <p className="text-blue-600 dark:text-gray-300">
            Aquí puedes visualizar, actualizar el estado y la respuesta de cada
            ticket de denuncia.
          </p>
        </div>

        {/* Filtros de búsqueda */}
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Buscar ticket o mensaje..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                setCurrentPage(1); // Reset pag 1 al filtrar
              }}
              className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <select
              value={filterEstado}
              onChange={(e) => {
                setFilterEstado(e.target.value);
                setCurrentPage(1); // Reset pag 1 al filtrar
              }}
              className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">Todos los estados</option>
              <option value="Pendiente">Pendiente</option>
              <option value="En proceso">En proceso</option>
              <option value="Resuelto">Resuelto</option>
            </select>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          viewport={{ once: true }}
        >
          <Card className="bg-blue-50 dark:bg-gray-800 shadow-lg">
            <CardContent className="p-6">
              {loading ? (
                <div className="flex justify-center py-12">
                  <Loader2 className="animate-spin h-8 w-8 text-blue-600" />
                </div>
              ) : filteredTickets.length === 0 ? (
                <p className="text-center text-gray-600 dark:text-gray-300">
                  No hay denuncias registradas.
                </p>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px] md:min-w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-gray-200">
                          <th className="p-3 border-b">Ticket</th>
                          <th className="p-3 border-b">Mensaje</th>
                          <th className="p-3 border-b">Estado</th>
                          <th className="p-3 border-b">Respuesta</th>
                          <th className="p-3 border-b">Fecha de Creación</th>
                          <th className="p-3 border-b">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentTickets.map((t) => (
                          <tr
                            key={t.id}
                            className="hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                          >
                            <td className="p-3 border-b">{t.ticketId}</td>
                            <td className="p-3 border-b max-w-xs">
                              <div className="max-h-24 overflow-y-auto break-words">
                                {t.mensaje}
                              </div>
                            </td>
                            {/* Estado con badge + select centrado */}
                            <td className="p-3 border-b whitespace-nowrap text-center">
                              <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                                <span
                                  className={`px-2 py-1 rounded-full text-sm font-semibold ${getBadgeColor(
                                    t.estado
                                  )}`}
                                >
                                  {t.estado}
                                </span>
                                <select
                                  value={t.estado}
                                  onChange={(e) =>
                                    setTickets((prev) =>
                                      prev.map((x) =>
                                        x.id === t.id
                                          ? { ...x, estado: e.target.value }
                                          : x
                                      )
                                    )
                                  }
                                  className="ml-0 md:ml-2 bg-white dark:bg-gray-700 p-1 rounded border border-gray-300 dark:border-gray-600"
                                >
                                  <option value="Pendiente">Pendiente</option>
                                  <option value="En proceso">En proceso</option>
                                  <option value="Resuelto">Resuelto</option>
                                </select>
                              </div>
                            </td>
                            <td className="p-3 border-b">
                              <textarea
                                value={t.respuesta}
                                onChange={(e) =>
                                  setTickets((prev) =>
                                    prev.map((x) =>
                                      x.id === t.id
                                        ? { ...x, respuesta: e.target.value }
                                        : x
                                    )
                                  )
                                }
                                className="w-full bg-white dark:bg-gray-700 p-1 rounded border border-gray-300 dark:border-gray-600"
                                rows={3}
                              />
                            </td>
                            <td className="p-3 border-b whitespace-nowrap">
                              {new Date(t.createdAt).toLocaleString("es-CL")}
                            </td>
                            <td className="p-3 border-b">
                              <div className="flex flex-col md:flex-row gap-2 justify-center">
                                <Button
                                  size="sm"
                                  onClick={() =>
                                    handleUpdate(t.id, {
                                      estado: t.estado,
                                      respuesta: t.respuesta,
                                    })
                                  }
                                  disabled={savingId === t.id || !hasChanged(t)}
                                  className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-1 px-3 py-1"
                                >
                                  {savingId === t.id ? (
                                    <Loader2 className="animate-spin h-4 w-4" />
                                  ) : (
                                    <Check className="h-4 w-4" />
                                  )}
                                  Guardar
                                </Button>

                                <Button
                                  size="sm"
                                  onClick={() => handleDelete(t.id)}
                                  disabled={deletingId === t.id}
                                  className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-1 px-3 py-1"
                                >
                                  {deletingId === t.id ? (
                                    <Loader2 className="animate-spin h-4 w-4" />
                                  ) : (
                                    <Trash2 className="h-4 w-4" />
                                  )}
                                  Borrar
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Paginación */}
                  <div className="flex justify-center mt-4 gap-2">
                    <Button
                      size="sm"
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      className="text-white"
                    >
                      Anterior
                    </Button>
                    <span className="px-2 py-1">
                      Página {currentPage} de {totalPages}
                    </span>
                    <Button
                      size="sm"
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className="text-white"
                    >
                      Siguiente
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
