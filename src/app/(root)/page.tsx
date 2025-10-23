'use client'
import { useSidebar } from "@/components/ui/sidebar";
import HomePageScreen from "@/features/screens/home";

export default function Home() {
    const {state, } = useSidebar()
    console.log("🚀 ~ Home ~ state:", state)
  return <HomePageScreen />;
}
