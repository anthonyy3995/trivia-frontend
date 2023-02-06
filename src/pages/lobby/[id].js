import { useRouter } from 'next/router'
import styles from '@/styles/Lobby.module.css'

/**
 * Lobby page
 * Will render different components (whether to show Start Game button or not)
 * depending on local state (maybe useContext) based on selection from Home page (index.js)
 * @returns 
 */
export default function Lobby() {
    const router = useRouter()
    //NOT THIS: we get channel info from context
    // const { channelID } = router.query

    const startGame = () => {
        router.push('../game/38221')
    }
    
    return (
        <div className={styles.main}>
        <h1>In Lobby </h1>
        <button onClick={startGame}>Start Game</button>
        </div>
    )
}
// May not need, since we don't need all channels 
// export async function getStaticPaths() {
//     // Return a list of possible value for id
//         //an array of objects

//     // TODO: make call to fetch
// }

// export async function getStaticProps({ params }) {
//     // Fetch necessary data for the blog post using params.id
// }