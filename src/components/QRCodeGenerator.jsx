import React, { useMemo } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Link } from "react-router-dom";

export default function QRCodeGenerator() {
  const landingUrl = useMemo(() => {
    if (typeof window === "undefined") return "https://qr-social-media.vercel.app/profile";
    return `${window.location.origin}/profile`;
  }, []);

  const handleDownload = () => {
    const canvas = document.getElementById("landing-qr");
    if (!canvas) return;

    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "profile-qr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white flex items-center justify-center px-4 py-10 text-emerald-950">
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="rounded-3xl bg-white/95 border border-emerald-100 shadow-[0_24px_80px_rgba(5,46,22,0.25)] backdrop-blur-2xl px-6 py-8 sm:px-8 sm:py-10 flex flex-col items-center text-center gap-6">
          <div className="space-y-2">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-emerald-500">
              QR Landing System
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-emerald-950">
              Share your premium profile
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Scan the QR code to open a modern, mobile-optimized personal
              landing page that feels like a real SaaS product.
            </p>
          </div>

          <div className="relative mt-2">
            <div className="absolute inset-2 rounded-3xl bg-gradient-to-tr from-emerald-400/25 via-lime-300/25 to-emerald-600/30 blur-2xl opacity-90" />
            <div className="relative rounded-3xl bg-white border border-emerald-100 p-5 sm:p-6 shadow-2xl shadow-emerald-900/10">
              <QRCodeCanvas
                id="landing-qr"
                value={landingUrl}
                size={230}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
                includeMargin={true}
              />
            </div>
          </div>

          <div className="w-full space-y-3">
            <button
              type="button"
              onClick={handleDownload}
              className="w-full inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm sm:text-base font-medium bg-gradient-to-r from-emerald-500 via-emerald-400 to-lime-400 text-emerald-950 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/50 transition duration-300 transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-emerald-500"
            >
              Download QR Code
            </button>

            <Link
              to="/profile"
              className="block w-full text-xs sm:text-sm text-emerald-600 hover:text-emerald-700 transition duration-300 underline underline-offset-4"
            >
              Preview landing page
            </Link>
          </div>

          <p className="pt-1 text-[11px] sm:text-xs text-slate-400">
            URL encoded in QR:
          </p>
          <p className="max-w-full break-all rounded-xl bg-emerald-50 px-3 py-2 text-[10px] sm:text-[11px] text-emerald-900 border border-emerald-100">
            {landingUrl}
          </p>
        </div>
      </div>
    </div>
  );
}

