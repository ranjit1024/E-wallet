"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Optional: Custom styling
NProgress.configure({ showSpinner: false });

export default function LoadingBar() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500); // delay to simulate loading

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
