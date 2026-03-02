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
    whatsapp: "https://wa.me/15551234567",
    facebook: "https://www.facebook.com/share/17cKtHdrye/",
    website: "https://your-portfolio.com",
  },
};

export default function LandingPage() {
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
              <SocialButton
                label="WhatsApp"
                href={profileData.social.whatsapp}
                Icon={FaWhatsapp}
                variant="whatsapp"
              />
              <SocialButton
                label="Facebook"
                href={profileData.social.facebook}
                Icon={FaFacebookF}
                variant="facebook"
              />
              <SocialButton
                label="YouTube"
                href={profileData.social.youtube}
                Icon={FaYoutube}
                variant="youtube"
              />
              <SocialButton
                label="Website"
                href={profileData.social.website}
                Icon={FaGlobe}
                variant="website"
              />
            </div>

            <p className="pt-2 text-[11px] sm:text-xs text-slate-500">
              Powered by your personal QR landing page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

