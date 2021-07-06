import React from 'react'
import styles from './index.scss'

const IndexPage: React.FC = () => {
    const [a, setA] = React.useState(false)

    const b = React.useMemo(() => {
        return a
    }, [])

    React.useEffect(() => {
        console.log(b)
        setA(true)
    }, [])

    return (
        <div>
            <h1 className={styles.title}>Page index</h1>
        </div>
    )
}

export default IndexPage
