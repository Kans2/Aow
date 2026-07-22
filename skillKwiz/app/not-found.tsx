import Link from "next/link";
import SiteLogo from "@/components/site-logo";

const suggestedLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
];

export default function NotFound() {
  return (
    <section className="w-full bg-[#000c2a] text-white">
      <div className="max-w-3xl mx-auto px-6 pt-40 pb-24 text-center">
        <div className="flex justify-center mb-10">
          <SiteLogo variant="light" height={80} asLink={false} />
        </div>

        <p className="text-[#f6c648] font-semibold tracking-[0.2em] text-sm mb-4">
          PAGE NOT FOUND
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          This page is still being{" "}
          <span className="text-[#f73e5d]">assessed</span>
        </h1>

        <p className="text-white/80 text-base md:text-lg mb-10">
          The page you are looking for has moved, or was never here. Use the
          links below to get back to a page that exists.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {suggestedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-6 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[#f73e5d] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
        >
          Back to Home
        </Link>

        <p className="text-sm text-white/60 mt-10">
          Still stuck? Email{" "}
          <a
            href="mailto:info@skillkwiz.com"
            className="text-[#c3dfff] hover:underline"
          >
            info@skillkwiz.com
          </a>
        </p>
      </div>
    </section>
  );
}
