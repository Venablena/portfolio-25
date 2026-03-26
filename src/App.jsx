import { useState } from 'react';
import Page from './Page';
import * as content from './content';
import Header from './Header';
import About from './About';

function App() {

  // Destructure available content exports (about text lives in captions.about)
  const { atma, basis, element, zen, captions, skills } = content;

  // UI section image arrays
  const atmaImages = [
    { src: atma.compo, alt: 'Atma UI Components'},
    { src: atma.process, alt: 'Atma Design Process'},
  ];

  const elementImages = [
    { src: element.compo, alt: 'Element Science system components' },
    { src: element.project, alt: 'Element Science project view' },
  ];

  const basisImages = [
    { src: basis.mediaControl, alt: 'Basis media control screen' },
    { src: basis.mediaPlayerMap, alt: 'Basis media player map' },
    { src: basis.manualTracking, alt: 'Basis manual tracking interface' },
    { src: basis.usability, alt: 'Basis usability' },
  ];

  const basisAppImages = [
    { src: basis.architecture, alt: 'Basis architecture diagram'},
    { src: basis.wireframes, alt: 'Basis wireframes' },
    { src: basis.screenTests, alt: 'Basis screen tests' },
  ]

  const zenImages = [
    { src: zen.layout, alt: 'Zen center app screen 1'},
    { src: zen.userMap, alt: 'Zen center app screen 2' },
  ];

  const microsoftImages = [
    { src: content.microsoft.dashBoard, alt: 'Microsoft Dashboard Screenshot' },
    { src: content.microsoft.configuration, alt: 'Microsoft Configuration Screenshot' },
    { src: content.microsoft.report, alt: 'Microsoft Report Screenshot' },
  ];

  const visualImages = [
    { src: content.visual.fashion, alt: 'Fashion Visual Design' },
    { src: content.visual.sfzc, alt: 'SFZC Visual Design' },
    { src: content.visual.tech, alt: 'Tech Visual Design' },
  ];

  const navItems = [
    { id: 'About', title: 'About', Component: () => <About text={captions.about} skills={skills} /> },
    { id: 'Microsoft', title: 'Microsoft', Component: () => <Page images={microsoftImages} captions={captions.microsoft} isContinuous={true} /> },
    { id: 'IntelWearable', title: 'Intel Wearable', Component: () => <Page images={basisImages} captions={captions.basis} isContinuous={true} /> },
    { id: 'IntelApp', title: 'Intel App', Component: () => <Page images={basisAppImages} captions={captions.basisApp} isContinuous={true} /> },
    { id: 'Element Science', title: 'Element Science', Component: () => <Page images={elementImages} captions={captions.element} isContinuous={true} /> },
    { id: 'Atma Connect', title: 'Atma Connect', Component: () => <Page images={atmaImages} captions={captions.atma} isContinuous={true} /> },
    { id: 'UX Research', title: 'UX Research', Component: () => <Page images={zenImages} captions={captions.zen} isContinuous={true}/> },
    { id: 'visual', title: 'Visual Design', Component: () => <Page images={visualImages} captions={captions.visual} /> },
  ];

  const [activeId, setActiveId] = useState(navItems[2].id);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleNavSelect = (id) => {
    setActiveId(id);
    setIsMobileNavOpen(false);
  };

  return (
    <div className="app-layout">
      <Header
        skills={skills}
        isMobileNavOpen={isMobileNavOpen}
        onHamburgerToggle={() => setIsMobileNavOpen(open => !open)}
      />
      <div className="main-content">
        <nav className={`portfolio-navbar${isMobileNavOpen ? ' open' : ''}`}>
          {navItems.map(({ id, title }) => (
            <button
              key={id}
              className={`nav-item ${activeId === id ? 'active' : ''}`}
              onClick={() => handleNavSelect(id)}
            >
              {title}
            </button>
          ))}
        </nav>
        <div className="content-display">
          {navItems.map(({ id, Component }) => (
            <div key={id} className={`content-section ${activeId === id ? 'active' : ''}`}>
              <Component />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
