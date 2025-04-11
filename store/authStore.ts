import { create } from 'zustand'
import {
    type User,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updatePassword,
    EmailAuthProvider,
    reauthenticateWithCredential
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
    changePassword: (currentPassword: string, newPassword: string) => Promise<void>
    checkPassword: (password: string) => Promise<boolean>
}

const useAuthStore = create<AuthStoreType>((set, get) => ({
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
    resetError: () => set({ error: null }),

    checkPassword: async (password: string) => {
        const user = get().user
        if (!user) {
            console.error("No user is signed in")
            return false
        }

        if (!user.email) {
            console.error("No Email Found")
            return false
        }

        const credential = EmailAuthProvider.credential(user.email, password)

        try {
            await reauthenticateWithCredential(user, credential)
            console.log("Old password is correct")
            return true
        } catch (error) {
            console.error("Old password is incorrect:", error)
            return false
        }
    },

    changePassword: async (currentPassword: string, newPassword: string) => {
        try {
            const user = get().user

            if (!user) {
                throw new Error("User not logged in")
            }

            const isCurrentPassCorrect = await get().checkPassword(currentPassword)
            if (isCurrentPassCorrect) {
                const res = await updatePassword(user, newPassword)
                console.log(res)
            } else {
                throw new Error("Incorrect Password")
            }
        } catch (error: any) {
            console.log(error.message)
        }
    }
}))

// Subscribe to auth state changes
onAuthStateChanged(auth, (user) => {
    useAuthStore.getState().setUser(user)
})

export default useAuthStore 