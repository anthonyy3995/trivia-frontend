import { useRouter } from 'next/router'
import styles from '@/styles/Landing.module.css'

export default function Login() {
    const router = useRouter()

    const handleLogin = () => {
        //auth stuff



        router.push('/')
    }

    const handleSignup = () => {
        //auth stuff



        router.push('/')
    }

    return (
        <div className={styles.main}>
        {/* TODO: ADD STYLING */}
            <h1>TRIVIA</h1>
            <div style={{"display": "flex", "justifyContent": "center", "width": "90%"}}>
                    <button onClick={handleLogin}>
                        Login
                    </button>
                    <button onClick={handleSignup}>
                        Signup
                    </button>
            </div>

        </div>

        

    )
}