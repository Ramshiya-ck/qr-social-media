import React from "react";

export default function SocialButton({ label, href, Icon, variant = "default" }) {
  const baseClasses =
    "w-full inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm sm:text-base font-medium transition duration-300 transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-emerald-500";

  const variants = {
    instagram:
      "bg-gradient-to-r from-emerald-500 via-emerald-400 to-lime-400 text-emerald-950 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40",
    whatsapp:
      "bg-emerald-500 text-emerald-50 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40",
    facebook:
      "bg-emerald-600 text-emerald-50 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/40",
    youtube:
      "bg-emerald-700 text-emerald-50 shadow-lg shadow-emerald-700/25 hover:shadow-emerald-600/40",
    website:
      "bg-emerald-50 text-emerald-900 shadow-lg shadow-emerald-100/40 hover:shadow-emerald-200/60",
    default:
      "bg-emerald-900 text-emerald-50 shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/60",
  };

  const className = `${baseClasses} ${variants[variant] || variants.default}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
      <span>{label}</span>
    </a>
  );
}

