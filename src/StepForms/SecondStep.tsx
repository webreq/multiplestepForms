import { Dispatch, SetStateAction } from "react"
import styles from './style.module.scss'
interface form {
    notel: string,
    alamat: string,
    setNotel: Dispatch<SetStateAction<string>>,
    setAlamat: Dispatch<SetStateAction<string>>
}
const SecondStep = ({ notel, alamat, setAlamat, setNotel }: form) => {
    return (
        <div className={styles.formContainer}>
            <input type={'text'} value={notel} placeholder="Nomor Telp." onChange={(e) => setNotel(e.target.value)} />
            <input type={'text'} value={alamat} placeholder="Alamat" onChange={(e) => setAlamat(e.target.value)} />
        </div>
    )
}

export default SecondStep