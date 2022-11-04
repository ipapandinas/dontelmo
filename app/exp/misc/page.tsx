import FileHeader from '@/ui/FileHeader/FileHeader'

import styles from './styles.module.css'

export default function Page() {
  return (
    <div className={styles.root}>
      <p className={styles.text}>
        here I present things that are different from my work as an engineer.
        <br />
        <br />
        varied content where you don&apos;t have to situate yourself.
      </p>

      <div className={styles.video}>
        <FileHeader title="A:\rooftop_mix.mp4" />
        <div className={styles.content}>
          <iframe
            className={styles.iframe}
            title="Mister Telmo Rooftop Mix"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cYkJC9D3DJE"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.description}>
          I share a dj set with modern, soaring eastern sounds that I recorded
          in June 2019. enjoy.
        </p>
      </div>
    </div>
  )
}
