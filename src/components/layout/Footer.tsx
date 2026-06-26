export function Footer() {  
  return (  
    <footer className="border-t border-neutral-800 py-12" role="contentinfo">  
      <div className="mx-auto max-w-7xl px-6">  
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">  
          <a href="#" className="flex items-center gap-2 text-white" aria-label="Home">  
            <svg className="h-6 w-6" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">  
              <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />  
            </svg>  
            <span className="font-mono text-base font-bold tracking-tight">NexusAI</span>  
          </a>  
          <nav aria-label="Footer navigation">  
            <ul className="flex flex-wrap items-center gap-6 text-sm">  
              <li><a href="#features" className="text-neutral-500 transition-colors hover:text-neutral-300">Features</a></li>  
              <li><a href="#workflow" className="text-neutral-500 transition-colors hover:text-neutral-300">Workflow</a></li>  
              <li><a href="#pricing" className="text-neutral-500 transition-colors hover:text-neutral-300">Pricing</a></li>  
              <li><a href="#testimonials" className="text-neutral-500 transition-colors hover:text-neutral-300">Testimonials</a></li>  
              <li><span className="text-neutral-600 text-xs">(c) 2026 NexusAI. All rights reserved.</span></li>  
            </ul>  
          </nav>  
        </div>  
      </div>  
    </footer>  
  );  
} 
