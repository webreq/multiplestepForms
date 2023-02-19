import cx from 'classnames'
import { useState } from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import styles from './style.module.scss'
const StepForms = () => {
    const [nama, setNama] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [alamat, setAlamat] = useState<string>('')
    const [notel, setNotel] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [desc, setDesc] = useState<string>('')

    const [validation, setValidation] = useState<string>('')
    const [step, setStep] = useState<number>(1)

    const validationStep = (): boolean => {
        if (step == 1) return !(nama && email)
        if (step == 2) return !(alamat && notel)
        if (step == 3) return !(title && desc)
        return false
    }
    const manageStep = () => {
        setValidation('')
        if (validationStep()) {
            if (step === 3) {
                setValidation(`isi form dulu sebelum mengsubmit`)
            } else {
                setValidation(`isi form dulu sebelum ke step ${step + 1}`)
            }
            return
        }
        if (step === 3) {
            console.log('this is to your API')
            // setStep(1)
            // setNama('')
            // setAlamat('')
            // setEmail('')
            // setNotel('')
            // setTitle('')
            // setDesc('')
        } else {
            setStep(prev => prev + 1)
        }
    }
    const stepComponent = () => {
        switch (step) {
            case 1:
                return <FirstStep nama={nama} email={email} setNama={setNama} setEmail={setEmail} />
            case 2:
                return <SecondStep notel={notel} setNotel={setNotel} alamat={alamat} setAlamat={setAlamat} />
            case 3:
                return <ThirdStep title={title} desc={desc} setTitle={setTitle} setDesc={setDesc} />
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.stepperContainer}>
                {[1, 2, 3].map(val => <>
                    <div className={cx(styles.circle, {
                        [styles.disable]: val > step
                    })}>
                        <div className={cx(styles.checked, {
                            [styles.unchecked]: val == step
                        })}>{val < step && <>&#10004;</>}</div>
                    </div>
                    <div className={cx(styles.stem, {
                        [styles.disable]: (val + 1) > step
                    })}></div>
                </>)}
            </div>
            {stepComponent()}
            {validation && <p className={styles.error}>{validation}</p>}
            <div className={styles.buttonContainer}>
                {step > 1 && <p
                    onClick={() => setStep(prev => prev - 1)}
                    className={styles.buttonBack}>back</p>}
                <button
                    onClick={manageStep}
                    className={cx(styles.buttonNext, {
                        [styles.buttonSubmit]: false
                    })}>next</button>
            </div>
        </div>
    )
}

export default StepForms