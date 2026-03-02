import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";
import SocialButton from "../components/SocialButton";
import logo from "/images/YasMart.jpeg"

const profileData = {
  name: "YasMart",
  bio: "Fresh • Affordable • Convenient",
  image:
    logo,
  social: {
    instagram: "https://www.instagram.com/yasmart_hyper?igsh=MXVlYnAyMGIwYXh3eA==",
    whatsapp: "https://wa.me/9746093590",
    whatsappChannel: "https://whatsapp.com/channel/0029VaBTKNj72WTwcyatBI2q",
    facebook: "https://www.facebook.com/share/17cKtHdrye/",
    website: "https://your-portfolio.com",
  },
};

export default function LandingPage() {
  const [showWhatsAppOptions, setShowWhatsAppOptions] = React.useState(false);

  const openWhatsAppOptions = () => setShowWhatsAppOptions(true);
  const closeWhatsAppOptions = () => setShowWhatsAppOptions(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-5">
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="relative rounded-3xl bg-white/95  px-6 py-8 sm:px-8 sm:py-10">
          <div className="absolute inset-x-10 -top-12 h-24  pointer-events-none" />

          <div className="relative flex flex-col items-center text-center space-y-5">
            <div className="relative">
              <div className="absolute inset-0 rounded-full opacity-80 blur-md" />
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full border border-emerald-100 bg-white overflow-hidden shadow-xl shadow-emerald-900/15 ring-4 ring-emerald-50">
                <img
                  src={profileData.image}
                  alt={profileData.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-emerald-950">
                {profileData.name}
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                {profileData.bio}
              </p>
            </div>


            <div className="w-full space-y-3">
              <SocialButton
                label="Instagram"
                href={profileData.social.instagram}
                Icon={FaInstagram}
                variant="instagram"
              />
              <button
                type="button"
                onClick={openWhatsAppOptions}
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm sm:text-base font-medium bg-emerald-500 text-emerald-50 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40 transition duration-300 transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-emerald-500"
              >
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                <span>WhatsApp</span>
              </button>
              <SocialButton
                label="Facebook"
                href={profileData.social.facebook}
                Icon={FaFacebookF}
                variant="facebook"
              />
            </div>

            <p className="pt-6 mt-4 flex items-center justify-center text-[10px] sm:text-[11px] text-slate-400">
              <button
                type="button"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/doquad.labs?igsh=MXB2ODRrbGhoNzZ4ZA%3D%3D&utm_source=qr",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-600"
              >
                <span>Powered by</span>
                <FaInstagram className="h-3 w-3" aria-hidden="true" />
                <span>doquad.labs</span>
              </button>
            </p>
          </div>

          {showWhatsAppOptions && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="w-full max-w-xs rounded-2xl bg-white p-5 shadow-xl space-y-4">
                <h2 className="text-sm font-semibold text-slate-900 text-center">
                  Choose WhatsApp option
                </h2>
                <div className="space-y-2">
                  <SocialButton
                    label="WhatsApp Chat"
                    href={profileData.social.whatsapp}
                    Icon={FaWhatsapp}
                    variant="whatsapp"
                  />
                  <SocialButton
                    label="WhatsApp Channel"
                    href={profileData.social.whatsappChannel}
                    Icon={FaWhatsapp}
                    variant="whatsapp"
                  />
                </div>
                <button
                  type="button"
                  onClick={closeWhatsAppOptions}
                  className="w-full mt-1 rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

