import { create } from 'zustand'
import {
    type User,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { auth } from '~/firebase/firebaseConfig'

type AuthStoreType = {
    user: User | null
    isLoading: boolean
    error: string | null
    signUp: (email: string, password: string) => Promise<void>
    signIn: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    setUser: (user: User | null) => void
    setError: (error: string | null) => void
    setLoading: (isLoading: boolean) => void
    resetError: () => void
}

const useAuthStore = create<AuthStoreType>((set) => ({
    user: null,
    isLoading: false,
    error: null,
    
    signUp: async (email: string, password: string) => {
        try {
            set({ isLoading: true, error: null })
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (error: any) {
            set({ error: error.message })
            setTimeout(() => set({ error: null }), 5000)
            throw error
        } finally {
            set({ isLoading: false })
        }
    },

    signIn: async (email: string, password: string) => {
        try {
            set({ isLoading: true, error: null })
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error: any) {
            set({ error: error.message })
            setTimeout(() => set({ error: null }), 5000)
            throw error
        } finally {
            set({ isLoading: false })
        }
    },

    logout: async () => {
        try {
            set({ isLoading: true, error: null })
            await signOut(auth)
            set({ user: null })
        } catch (error: any) {
            set({ error: error.message })
            setTimeout(() => set({ error: null }), 5000)
            throw error
        } finally {
            set({ isLoading: false })
        }
    },

    setUser: (user: User | null) => set({ user }),
    setError: (error: string | null) => {
        set({ error })
        if (error) {
            setTimeout(() => set({ error: null }), 5000)
        }
    },
    setLoading: (isLoading: boolean) => set({ isLoading }),
    resetError: () => set({ error: null })
}))

// Subscribe to auth state changes
onAuthStateChanged(auth, (user) => {
    useAuthStore.getState().setUser(user)
})

export default useAuthStore 