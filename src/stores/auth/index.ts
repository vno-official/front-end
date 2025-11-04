import { IUser } from "@/apis/vno/interfaces/user"
import { create } from "zustand"

interface AuthState {
  user: IUser | null
  loading: boolean
  setUser: (user: IUser | null) => void
  setLoading: (v: boolean) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  setLoading: (v) => set({ loading: v }),
  logout: () => set({ user: null }),
}))
