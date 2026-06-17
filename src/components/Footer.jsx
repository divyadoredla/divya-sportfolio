import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex items-center justify-center">
      <p className="text-sm text-muted-foreground text-center">
        Created with ❤️ by Doredla Divya Sri @2026
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors absolute right-4 md:right-8"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
