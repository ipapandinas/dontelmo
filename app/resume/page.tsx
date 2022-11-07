import React from 'react'

import styles from './styles.module.css'
import BackLink from './ui/BackLink/BackLink'
import Experience from './ui/Experience/Experience'
import NavLink from './ui/NavLink/NavLink'
import Section from './ui/Section/Section'
import Tag from './ui/Tag/Tag'
import TechnicalSection from './ui/TechnicalSection/TechnicalSection'

export default function Page() {
  return (
    <>
      <div className={styles.backLink}>
        <BackLink />
      </div>
      <div className={styles.resume}>
        <h2 className={styles.name}>Igor Papandinas</h2>
        <h3 className={styles.job}>Software Engineer</h3>

        <div className={styles.intro}>
          <div className={styles.description}>
            <p>Hello, I&apos;m Igor.</p>
            <p>
              I&apos;m a blockchain ecosystem lead engineer and manager for
              fullstack project. I&apos;m a member of the Ternoa core team, an
              entrepreneur and crypto enthusiast with 5 years of experience in
              development.
            </p>
            <p>
              I am very quality conscious and understand the requirements to
              create user-friendly experiences. I have the necessary rigour to
              manage a project properly and support my clients.
            </p>
          </div>
          <div className={styles.contact}>
            <a
              href="mailto:contact.mrtelmo@gmail.com"
              title="Contact Mail"
              target="_blank"
              rel="noopener noreferrer"
            >
              igor.papandinas@posteo.net
            </a>
            <a
              href="tel:+33667603981"
              title="Contact Phone"
              target="_blank"
              rel="noopener noreferrer"
            >
              +33 6 67 60 39 81
            </a>
            <br />
            <a
              href="https://www.mrtelmo.com"
              title="Personnal website"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.mrtelmo.com
            </a>
            <a
              href="https://www.linkedin.com/in/igor-papandinas/?locale=en_US"
              title="Personnal LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              in: @igor-papandinas
            </a>
            <a
              href="https://github.com/ipapandinas"
              title="Personnal Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              github: ipapandinas
            </a>
          </div>
        </div>

        <div className={styles.tableContentsMobile}>
          <div className={styles.tableContentsLabel}>Contents</div>
          <ul className={styles.links}>
            <li>
              <NavLink label="Technical skills" to="section-skills" />
            </li>
            <li>
              <NavLink label="Experience" to="section-experience" />
            </li>
            <li>
              <NavLink label="Education" to="section-education" />
            </li>
            <li>
              <NavLink label="Languages" to="section-languages" />
            </li>
          </ul>
        </div>

        <Section anchor="skills" title="Technical skills">
          <>
            <TechnicalSection>
              <Tag name="Javascript/Typescript" />
              <Tag name="React" version="18" />
              <Tag name="NextJS" version="13" />
              <Tag name="GraphQL" />
              <Tag name="NodeJS" />
              <Tag name="ExpressJS" />
              <Tag name="MongoDB" />
              <Tag name="Substrate" />
              <Tag name="Rust" />
              <Tag name="Solidity" />
              <Tag name="Web3JS" />
              <Tag name="CSS-in-JS" />
              <Tag name="OSS" />
            </TechnicalSection>
          </>
        </Section>

        <Section anchor="experience" title="Experience">
          <Experience
            subtitle="Co-Founder - CTO – (June 2022 - now)"
            title="Secret Stash"
          >
            Development of the first NFTs marketplace on the Ternoa blockchain.
            Management and community growth.
            <br />
            Here is the final result:{' '}
            <a
              className={styles.link}
              href="https://secret-stash.io"
              title="Secret Stash website"
              target="_blank"
              rel="noopener noreferrer"
            >
              secret-stash.io
            </a>
          </Experience>
          <Experience
            subtitle="Remote – (Oct 2021 - now)"
            title="Blockchain ecosystem lead engineer - @Ternoa"
          >
            <a
              className={styles.link}
              href="https://www.ternoa.network/"
              title="Ternoa website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ternoa
            </a>{' '}
            is an NFT-centric Layer 1 blockchain build with Substrate and custom
            pallets for innovating advanced NFTs features.
            <br />
            <br />
            My team and I are in charge to design high-level programming tools
            to build on top of the Ternoa Chain. I am responsible for the
            builder experience by maintaining the Ternoa JS SDK and the Ternoa
            Indexer. Both tools are OSS on Github.
          </Experience>
          <Experience
            subtitle="Paris, France – (Oct 2019 - Sept 2021)"
            title="Frontend Engineer, React - @Vinci Immobilier"
          >
            My team and I were in charge of perfecting Vinci Immobilier website,
            a real state company. This was followed by the development of a
            brand new personal space, used by an owner for his assets
            management. Here is the final result:{' '}
            <a
              className={styles.link}
              href="https://www.vinci-immobilier.com"
              title="Vinci Immobilier website"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.vinci-immobilier.com
            </a>
          </Experience>
          <Experience
            subtitle="Paris, France – (Sept 2018 - Sept 2019)"
            title="Software Engineer - @Thales"
          >
            My mission was to design equipement drivers for the{' '}
            <a
              className={styles.link}
              href="https://www.defense.gouv.fr/terre/equipements/vehicules/scorpion/griffon"
              title="Griffon"
              target="_blank"
              rel="noopener noreferrer"
            >
              GRIFFON
            </a>
            , an armoured vehicle.
          </Experience>
        </Section>

        <Section anchor="education" title="Education">
          <Experience
            subtitle="INP ENSEIRB-MATMECA*, Bordeaux, France – (2015 - 2018)"
            title="Master of higher education in Electronics specialized in Embedded Systems."
          />
          <Experience
            subtitle="*Bayonne, France – (2013 - 2015)"
            title="Bachelor’s Degree in Engineering Sciences."
          />
        </Section>

        <Section anchor="languages" title="Languages">
          <div className={styles.languages}>
            <span>
              <strong>French</strong>, Native
            </span>
            <span>
              <strong>Spanish</strong>, Native
            </span>
            <span>
              <strong>English</strong>, Fluent
            </span>
            <span>
              <strong>Greek</strong>, Notions
            </span>
          </div>
        </Section>
      </div>
    </>
  )
}
