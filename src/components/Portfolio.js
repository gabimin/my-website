import React from 'react';
import clsx from 'clsx';
import styles from './Portfolio.module.css';

// Lista de proyectos
const ProjectList = [
  {
    title: '',
    image: 'img/public-repos.png',
    description: '',
    link: 'https://github.com/gabimin?tab=repositories&q=&type=public&language=&sort=',
    buttonText: 'Public Repos' // Texto específico para este botón
  },

  {
    image: 'img/proyecto1.svg',
    description: 'Boostrap | HTML | CSS',
    link: 'https://gabimin.github.io/BootstrapPage/',
    buttonText: 'Boostrap Page'
  },
  

  {
    image: 'img/proyecto1.svg',
    description: 'Mobile First | HTML | CSS',
    link: 'https://gabimin.github.io/ResponsiveDesign/',
    buttonText: 'Mobile First Page'
  },


  {
    image: 'img/proyecto1.svg',
    description: 'Static | HTML | CSS',
    link: 'https://qasyst.vercel.app/',
    buttonText: 'Landing Page'
  },
{
  image: 'img/proyecto1.svg',
    description: 'Responsive | HTML | CSS',
    link: 'https://gabimin.github.io/css-gallery/',
    buttonText: 'CSS Responsive Gallery'
 },
 {
  image: 'img/proyecto1.svg',
    description: 'jQuery | HTML | CSS',
    link: 'https://gabimin.github.io/TinDog/',
    buttonText: 'Social Landing Page'
 },





  // Agrega más proyectos según sea necesario
];

// Componente de cada proyecto
function Project({ image, title, description, link, buttonText }) { // Añade buttonText a los props
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.projectImage} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="button button--primary">
          {buttonText || 'Ver Proyecto'} {/* Usa el texto específico o un valor por defecto */}
        </a>
      </div>
    </div>
  );
}
// Componente principal del portafolio
export default function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <div className="container">
        <h2 className="text--center">PROJECTS</h2>
        <div className="row">
          {ProjectList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
