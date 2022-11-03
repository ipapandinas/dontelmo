import styles from './styles.module.css'

export default function Page() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>hi,</h1>
      <p className={styles.description}>
        I&apos;m a blockchain ecosystem lead engineer and manager for fullstack
        project.
        <br />
        <br />
        this is my current DOM:
      </p>
      <p className={styles.block}>{'<ipapandinas>'}</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          🖖 Ternoa blockchain core team member
        </li>
        <li className={styles.listItem}>
          🐦 follow me on{' '}
          <a
            className={styles.link}
            href="https://twitter.com/dontelmo_"
            title="Twitter Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li className={styles.listItem}>
          🤝 I’m looking to collaborate, reach me on{' '}
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/igor-papandinas/"
            title="LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.listItem}>🍝 pasta purist</li>
      </ul>
      <p className={styles.block}>{'</ipapandinas>'}</p>
    </div>
  )
}
