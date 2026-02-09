import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-xl font-semibold text-primary mb-1">Queen Koba</p>
          <p className="text-xs text-muted-foreground font-body">Nairobi, Kenya</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/queenkoba?igsh=enA5MmtlbzUwMThl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/people/queenkoba/61587189032062/?rdid=lzJ0CjVdGtSgfoGg&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1UWfoE4o1h%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/254119559180"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground font-body">© 2026 Queen Koba. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
