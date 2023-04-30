import React, { useEffect, useState, useRef } from 'react';
import { Script } from 'gatsby';
import * as styles from './TechRadar.module.scss';

/*declare global {
  interface Window {
    radar_visualization: (visConfig: VisualizationConfig) => void;
  }
  https://github.com/gsandf/tech-radar/blob/e9b2fd52b43142516a2428c13a85a8dce4f3f90f/src/components/Radar/index.tsx
}*/

const TechRadar = () => {
  const svgRef = useRef();
  const [hasD3Loaded, setD3HasLoaded] = useState(false);
  const [hasZalandoRadarLoaded, setZalandoRadarHasLoaded] = useState(false);

  useEffect(() => {
    const svgElement = svgRef.current;

    if (!(hasD3Loaded && hasZalandoRadarLoaded)) {
      return;
    }

    window.radar_visualization({
      svg_id: 'radar',
      width: 1450,
      height: 1000,
      colors: {
        background: '#fff',
        grid: '#bbb',
        inactive: '#ddd',
      },
      title: '2023.05',
      quadrants: [
        { name: 'Languages & Frameworks' },
        { name: 'Infrastructure' },
        { name: 'Data Management' },
        { name: 'Tools' },
      ],
      rings: [
        { name: 'ADOPT', color: '#5ba300' },
        { name: 'TRIAL', color: '#009eb0' },
        { name: 'ASSESS', color: '#c7ba00' },
        { name: 'HOLD', color: '#e09b96' },
      ],
      print_layout: true,
      links_in_new_tabs: true,
      entries: [
        {
          label: 'Java',
          quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
          ring: 0, // 0,1,2,3 (starting from inside)
          moved: 0, // -1 = moved out (triangle pointing down)
          //  0 = not moved (circle)
          //  1 = moved in  (triangle pointing up)
        },
        {
          label: 'TypeScript',
          quadrant: 0,
          ring: 0,
          moved: 0,
        },
        {
          label: 'Kotlin',
          quadrant: 0,
          ring: 1,
          moved: 0,
        },
        {
          label: 'Rust',
          quadrant: 0,
          ring: 1,
          moved: 0,
        },
        {
          label: 'IHP',
          quadrant: 0,
          ring: 1,
          moved: 0,
        },
        {
          label: 'F#',
          quadrant: 0,
          ring: 2,
          moved: 0,
        },
        {
          label: 'WebAssembly',
          quadrant: 0,
          ring: 2,
          moved: 0,
        },
        {
          label: 'Vercel',
          quadrant: 0,
          ring: 2,
          moved: 0,
        },
        {
          label: 'Gatsby',
          quadrant: 0,
          ring: 3,
          moved: 0,
        },
        {
          label: 'GitHub pages',
          quadrant: 0,
          ring: 3,
          moved: 0,
        },
        {
          label: 'C++',
          quadrant: 0,
          ring: 3,
          moved: 0,
        },
        {
          label: 'CloudFlare',
          quadrant: 1,
          ring: 0,
          moved: 0,
        },
        {
          label: 'Kubernetes',
          quadrant: 1,
          ring: 0,
          moved: 0,
        },
        {
          label: 'Docker',
          quadrant: 1,
          ring: 0,
          moved: 0,
        },
        {
          label: 'CrossPlane',
          quadrant: 1,
          ring: 2,
          moved: 0,
        },
        {
          label: 'Ansible',
          quadrant: 1,
          ring: 3,
          moved: 0,
        },
        {
          label: 'PostgreSQL',
          quadrant: 2,
          ring: 0,
          moved: 0,
        },
        {
          label: 'Redis',
          quadrant: 2,
          ring: 0,
          moved: 0,
        },
        {
          label: 'Kafka',
          quadrant: 2,
          ring: 0,
          moved: 0,
        },
        {
          label: 'RabbitMQ',
          quadrant: 2,
          ring: 0,
          moved: 0,
        },
        {
          label: 'ElasticSearch',
          quadrant: 2,
          ring: 0,
          moved: 0,
        },
        {
          label: 'AWS S3',
          quadrant: 2,
          ring: 0,
          moved: 0,
        },
        {
          label: 'etcd',
          quadrant: 2,
          ring: 2,
          moved: 0,
        },
        {
          label: 'MongoDB',
          quadrant: 2,
          ring: 2,
          moved: 0,
        },
        {
          label: 'MySQL',
          quadrant: 2,
          ring: 3,
          moved: 0,
        },
        {
          label: 'Zookeeper',
          quadrant: 2,
          ring: 3,
          moved: 0,
        },
        {
          label: 'VS Code',
          quadrant: 3,
          ring: 0,
          moved: 0,
        },
        {
          label: 'GitHub',
          quadrant: 3,
          ring: 0,
          moved: 0,
        },
        {
          label: 'ChatGPT',
          quadrant: 3,
          ring: 1,
          moved: 0,
        },
        {
          label: 'Cachix devenv',
          quadrant: 3,
          ring: 2,
          moved: 0,
        },
        {
          label: 'Eclipse',
          quadrant: 3,
          ring: 3,
          moved: 0,
        },
      ],
    });

    return () => {
      if (svgElement) {
        svgElement.childNodes.forEach((node) => node.remove());
      }
    };
  }, [hasD3Loaded, hasZalandoRadarLoaded]);

  return (
    <>
      <Script src="https://d3js.org/d3.v4.min.js" onLoad={() => setD3HasLoaded(true)} />
      <Script
        src="http://zalando.github.io/tech-radar/release/radar-0.7.js"
        onLoad={() => setZalandoRadarHasLoaded(true)}
      />
      <svg id="radar" ref={svgRef} className={styles.techRadar} />
    </>
  );
};

export default TechRadar;
