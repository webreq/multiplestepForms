import { Dispatch, SetStateAction } from "react"
import styles from './style.module.scss'
interface form {
    title: string,
    desc: string,
    setTitle: Dispatch<SetStateAction<string>>,
    setDesc: Dispatch<SetStateAction<string>>
}
const ThirdStep = ({ title, desc, setTitle, setDesc }: form) => {
    return (
        <div className={styles.formContainer}>
            <input type={'text'} value={title} placeholder="Nomor Telp." onChange={(e) => setTitle(e.target.value)} />
            <input type={'text'} value={desc} placeholder="Alamat" onChange={(e) => setDesc(e.target.value)} />
        </div>
    )
}

export default ThirdStep