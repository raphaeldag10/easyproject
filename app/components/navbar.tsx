"use client";

import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineFolderCopy } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

export default function Navbar() {
  const [activePage, setActivePage] = useState("inicio");

  const navItems = [
    { id: "inicio", label: "Início", icon: IoHomeOutline },
    { id: "projetos", label: "Projetos", icon: MdOutlineFolderCopy },
    { id: "graficos", label: "Relatórios", icon: BsGraphUp },
    { id: "settings", label: "Config.", icon: IoSettingsOutline },
  ];

  return (
    <nav id="Navbar" className="flex items-center justify-around flex-row w-100 bg-white p-2 border-t border-gray-100">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activePage === item.id;

        return (
          <button key={item.id} onClick={() => setActivePage(item.id)} className="flex flex-col items-center justify-center gap-1">
            <div className={`flex items-center justify-center w-12 h-12 rounded-2xl ${isActive ? "bg-sulfibra-200 text-white" : "bg-white text-gray-300"}`}><Icon size={24} /></div>
            <span className={`text-xs font-medium ${isActive ? "text-sulfibra-200" : "text-gray-300"}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}