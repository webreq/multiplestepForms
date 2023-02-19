import { Dispatch, SetStateAction } from "react"
import styles from './style.module.scss'
interface form {
    nama: string,
    email: string,
    setNama: Dispatch<SetStateAction<string>>,
    setEmail: Dispatch<SetStateAction<string>>
}
const FirstStep = ({ nama, setNama, email, setEmail }: form) => {
    return (
        <div className={styles.formContainer}>
            <input type={'text'} value={nama} placeholder="Nama" onChange={(e) => setNama(e.target.value)} />
            <input type={'text'} value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
    )
}

export default FirstStep