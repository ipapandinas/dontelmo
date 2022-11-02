import React from 'react'

import styles from './styles.module.css'
import Experience from './ui/Experience/Experience'
import Section from './ui/Section/Section'
import Tag from './ui/Tag/Tag'
import TechnicalSection from './ui/TechnicalSection/TechnicalSection'

export default function Page() {
  return (
    <div className={styles.resume}>
      <h2 className={styles.name}>Igor Papandinas</h2>
      <h3 className={styles.job}>Software Engineer - Frontend, React</h3>

      <div className={styles.intro}>
        <div className={styles.description}>
          <p>
            I am a Frontend engineer based in Paris with 3 years of experience
            in development.
          </p>
          <p>
            I am very quality-conscious and understand the requirements to
            create fantastic user-friendly experiences. This passion drives me,
            as much in development as in music or in my everyday life.
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
        </div>
      </div>

      <Section anchor="skills" title="Technical skills">
        <>
          <TechnicalSection>
            <Tag name="Modern Javascript" version="ES8" />
            <Tag name="Typescript" version="4" />
            <Tag name="React" version="17" />
            <Tag name="Gatsby" version="2" />
            <Tag name="NextJS" version="10" />
            <Tag name="GraphQL" />
            <Tag name="Redux" />
            <Tag name="CSS-in-JS – Styled Component" />
            <Tag name="Strapi" />
            <Tag name="Drupal" />
            <Tag name="CI/CD Pipelines – Eslint / Prettier / Stylelint / Husky" />
          </TechnicalSection>
        </>
      </Section>

      <Section anchor="experience" title="Work experience">
        <Experience
          subtitle="Vinci Immobilier*, Paris, France – (Oct 2019 - Jan 2021)"
          title="Frontend Engineer, React"
        >
          My team and I were in charge of perfecting Vinci Immobilier website, a
          real state company. This was followed by the development of a brand
          new personal space, used by an owner for his assets management. The
          team work was based on the <strong>Agile Scrum</strong> method.
          <ul>
            <li>Bundle 1</li>
            The architecture is based on a <strong>Drupal-9</strong> /{' '}
            <strong>
              NextJS-10 (React 17)
              <strong />
            </strong>
            synchronization, with a reusable and easy-to-maintain component
            approach. The Javascript code is clean and modern according to
            ES6/ES8 standards. The content is dynamically created in blocks,
            then retrieved mostly in{' '}
            <strong>
              SSR
              <strong />
            </strong>{' '}
            for SEO optimization. Data management is handled by{' '}
            <strong>Redux</strong> and the CSS design is modular.
            <li>Bundle 2</li>A personal space is an added value to the site. The
            front is provided in data from the Vinci Immobilier CRM for user
            profiles creation/updating. The performances brought by the hooks
            React make the renderings more fluid.
          </ul>
          Here is the final result:{' '}
          <a
            href="https://www.vinci-immobilier.com"
            title="Vinci Immobilier website"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.vinci-immobilier.com
          </a>
          <br />
          <br />I would like to highlight some strengths:
          <ol>
            <li>
              Effective research thanks to <strong>Elasticsearch</strong>.
            </li>
            <li>
              The complete creation of customizable forms from Drupal Webforms,
              a powerful React structure and a clean design overlaying for
              Material Ui components. However the use of React Hook Form would
              have simplified the development.
            </li>
            <li>
              A well-thought architecture for the separation of public/personal
              sections. The dataset is cleanly structured despite not using
              GraphQL.
            </li>
          </ol>
        </Experience>
        <Experience
          subtitle="Thales*, Paris, France – (Sept 2018 - Sept 2019)"
          title="Software Engineer"
        >
          My mission was to design equipement drivers for the{' '}
          <a
            href="https://www.defense.gouv.fr/terre/equipements/vehicules/scorpion/griffon"
            title="Griffon"
            target="_blank"
            rel="noopener noreferrer"
          >
            GRIFFON
          </a>
          , an armoured vehicle. The protocol communication was based on DDS
          bus. The programming language was <strong>C++</strong> on a{' '}
          <strong>Debian Linux</strong> environment. The functional test chain
          was automated on several <strong>Jenkins</strong> test benches with
          tests written as <strong>Python</strong> scenarios. The team work was
          based on the{' '}
          <strong>
            Agile Scrum
            <strong />
          </strong>{' '}
          method.
          <br />
          <br />
          Results:
          <ul>
            <li>
              Development of an important feature for the vehicle GPS data
              persistancy during navigation.
            </li>
            <li>
              Development of an interface to connect a tracking test case to the
              vehicle.
            </li>
          </ul>
        </Experience>
      </Section>

      <Section anchor="projects" title="Personnal projects">
        <Experience
          link="https://www.desarchitectes.com"
          subtitle="www.desarchitectes.com*, initial release: March 2020"
          title="desarchitectes"
        >
          The abecedary desarchitectes is an architectural project created by my
          sister. It is a collection of bilingual articles aimed at explaining
          the elements of our architectural everyday life. My contribution to
          the project is the support: the website. The monochrome format, the
          structure inspired by notebooks and the performance, are the three
          points on which my attention was focused to ensure the best reading
          experience.
          <br />
          <br />
          The site write in <strong>Typescript</strong> is based on a{' '}
          <strong>Strapi-3</strong> / <strong>Gatsby-25 (React 17)</strong>{' '}
          synchronization. The multilingual content is ensured by GraphQL with
          <strong>SSR</strong>. I maintain the code following industry-standard
          best practices, you will find it on my{' '}
          <a
            href="https://github.com/ipapandinas/desarchitectes_front"
            title="desarchitectes repository"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
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
        <div className="Resume__languages">
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
            <strong>German</strong>, Notions
          </span>
        </div>
      </Section>
    </div>
  )
}
