'use client'
import { useOnboardingStore } from "@/stores/onboarding";
import {} from "zustand";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ClientBootstraping = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useOnboardingStore();
  console.log("🚀 ~ ClientBootstraping ~ isOpen:", isOpen)

  const router = useRouter();

  useEffect(() => {
    if (!useOnboardingStore.persist.hasHydrated) return; // đợi hydrate xong
    if (isOpen) {
      router.push("/onboarding");
    }
  }, [isOpen, router]);

  return <>{children}</>;
};

export default ClientBootstraping;
