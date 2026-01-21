import { Github } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-white/20">
      <div className="mx-auto max-w-screen px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <div className="h-10 w-10">
            <img src="../public/opensource-icon.svg" alt="" />
          </div>
          <span className="text-xl font-semibold text-gray-900 tracking-tight">
            SIAM x ICP
          </span>
        </div>

        <nav className="flex">
          <a
            href="#how-to-contribute"
            className="relative text-gray-700 font-medium transition hover:text-indigo-600
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
              after:bg-gradient-to-r after:from-indigo-500 after:to-cyan-400
              after:transition-all after:duration-300 hover:after:w-full"
          >
            How to Contribute?
          </a>
          <a href="https://github.com/siamjuit/look-who-committed" target="_blank" className=" flex   ml-6 text-gray-700 font-medium transition hover:text-indigo-600">
            <Github className="h-5 w-5" />
            <img
                className="ml-4 h-5"
                src="https://komarev.com/ghpvc/?username=siamjuit&label=Visitors&color=6366f1&style=flat"
                alt="Visitor counter"
            />
          </a>
        </nav>
      </div>
    </header>
    );
}