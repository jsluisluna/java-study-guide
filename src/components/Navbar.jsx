import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const { query, setQuery } = useSearch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate("/buscar");
    }
  };

  return (
    <header className="w-full h-16 bg-white shadow-sm border-b flex items-center justify-between px-6 sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-20 h-20" />
        </Link>
        <h1 className="text-lg font-bold text-blue-600">Java Study Guide</h1>
      </div>
      <form onSubmit={handleSubmit} className="relative w-64">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar tema..."
          className="w-full border rounded-md pl-10 pr-4 py-1.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={16}
        />
      </form>
    </header>
  );
}
