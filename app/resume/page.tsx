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
            <p>Hi, I&apos;m Igor.</p>
            <p>
              I&apos;m protocol engineer at{' '}
              <a
                className={styles.link}
                href="https://startale.com/en"
                title="Startale Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                Startale
              </a>{' '}
              working on the Astar Network and building distributed systems for
              billions. I&apos;m prev member of the Ternoa core team, an Alumni
              of the Polkadot Blockchain Academy, an entrepreneur and crypto
              enthusiast with 8 years of experience in software development.
            </p>
            <p>
              My experience and interests are in Byzantine fault-tolerant
              systems for blockchain applications, including consensus protocols
              and high-performance execution engines. I am very
              quality-conscious and understand the requirements for creating
              resilient distributed systems that scale. I have the necessary
              rigor to contribute to projects from the research and
              implementation stages through to running them in production.
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
            <br />
            <a
              href="https://www.dontelmo.xyz"
              title="Personnal website"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.dontelmo.xyz
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
              <NavLink label="Projects" to="section-projects" />
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
              <Tag name="Rust" />
              <Tag name="Substrate" />
              <Tag name="Reth" />
              <Tag name="BFT Consensus" />
              <Tag name="Javascript/Typescript" />
              <Tag name="React" version="19" />
              <Tag name="NextJS" version="15" />
              <Tag name="PolkadotJS" />
              <Tag name="EthersJS" />
              <Tag name="NodeJS" />
              <Tag name="Postgres" />
              <Tag name="Ink!" />
              <Tag name="Solidity" />
              <Tag name="OSS" />
            </TechnicalSection>
          </>
        </Section>

        <Section anchor="projects" title="Projects">
          <Experience subtitle="Co-Founder – (2024)" title="• Kudos">
            A Portal for Agile Devtime - The Platform to Connect Teams and
            Skilled Contributors in the Polkadot Ecosystem
            <br />
            Visit:{' '}
            <a
              className={styles.link}
              href="https://morekudos.com"
              title="Kudos Portal website"
              target="_blank"
              rel="noopener noreferrer"
            >
              morekudos.com
            </a>
          </Experience>
          <Experience
            subtitle="Co-Founder - CTO – (2022 - 2023)"
            title="• Secret Stash"
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
        </Section>

        <Section anchor="experience" title="Experience">
          <Experience
            subtitle="Remote – (Jan 2024 - now)"
            title="• Protocol Engineer (Rust | Reth | Substrate) - @Startale"
          >
            <br />- Contribute to Soneium L1, a scalable, decentralized, user
            and developer experience oriented blockchain.
            <br />- Maintain{' '}
            <a
              className={styles.link}
              href="https://astar.network/"
              title="Astar website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Astar
            </a>
            , an interoperable blockchain platform for Polkadot and Ethereum
            ecosystems supporting both Wasm and EVM smart contracts.
            <br />- Lead the development of Swanky, an open source CLI devtool
            to interact with ink! WASM smart contracts, extending
            cargo-contract.
          </Experience>
          <Experience
            subtitle="Remote – (Oct 2021 - July 2023)"
            title="• Blockchain Frontend & Integration engineer (Apps, Typescript SDK & Substrate pallets) - @Ternoa"
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
            is an NFT-centric Layer 1 blockchain built with Substrate and custom
            pallets for innovating advanced NFTs features.
            <br />
            <br />
            - Lead a dedicated team responsible for designing tools to integrate
            Ternoa chain (TS Library + Bridge + Indexer).
            <br />- Development of the NFT, TEE & Transmission Protocol pallets.
          </Experience>
          <Experience
            subtitle="Paris, France – (Oct 2019 - Sept 2021)"
            title="• Frontend Engineer, React - @Vinci Immobilier"
          >
            My team and I were in charge of perfecting Vinci Immobilier website,
            a prominent real estate french company.
            <br />
            <br />
            - Development of the portal app website.
            <br />- Development of a personal space, enabling owners to
            effectively manage their assets.
          </Experience>
          <Experience
            subtitle="Paris, France – (Sept 2018 - Sept 2019)"
            title="• Software Engineer - @Thales"
          >
            - Development of equipement drivers for the GRIFFON, an armoured
            vehicle.
          </Experience>
        </Section>

        <Section anchor="education" title="Education">
          <Experience
            subtitle="UC Berkeley – (July 2023 - Aug 2023)"
            title="• Polkadot Blockchain Academy Alumni (Cohort 3) - @UC Berkeley California"
          >
            The{' '}
            <a
              className={styles.link}
              href="https://polkadot.network/development/academy/"
              title="Polkadot Blockchain Academy website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Polkadot Blockchain Academy
            </a>{' '}
            is an intensive, in-person educational program deeply exploring
            foundational concepts and hands-on blockchain curriculum. Built with
            Polkadot and Substrate tech.
          </Experience>
          <Experience
            subtitle="INP ENSEIRB-MATMECA*, Bordeaux, France – (2015 - 2018)"
            title="• Master of higher education in Electronics specialized in Embedded Systems."
          />
          <Experience
            subtitle="*Bayonne, France – (2013 - 2015)"
            title="• Bachelor’s Degree in Engineering Sciences."
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
