"use client";
import { useOnboardingStore } from "@/stores/onboarding";
import {} from "zustand";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ClientBootstraping = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, _hasHydrated } = useOnboardingStore();
  const router = useRouter();

  useEffect(() => {
    useOnboardingStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    console.log("hydrated?", _hasHydrated);
    if (!_hasHydrated) return;
    if (isOpen) {
      router.push("/onboarding");
    }
  }, [isOpen, _hasHydrated, router]);

  return <>{children}</>;
};

export default ClientBootstraping;
