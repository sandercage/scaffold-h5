import React from 'react'
import styles from './index.scss'

const IndexPage: React.FC = () => {
    const [a, setA] = React.useState(false)

    const b = React.useMemo(() => {
        return a
    }, [a])

    const c = React.useMemo(() => {
        console.log(b)
        return a
    }, [a, b])

    React.useEffect(() => {
        console.log(c)
        setA(true)
    }, [c])

    return (
        <div>
            <h1 className={styles.title}>Page index</h1>
        </div>
    )
}

export default IndexPage
