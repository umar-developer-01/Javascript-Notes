// React.forwardRef is used in React to forward refs to a child component. 
//This is particularly useful when you need to access or interact with a DOM element or a React component instance within a child component from a parent component. 
//Here's a detailed breakdown of its use and benefits:

// What Does React.forwardRef Do?
// Forwarding Refs to DOM Elements: It allows functional components to forward refs they receive to their child DOM elements or other components.

// Accessing DOM Nodes: Enables direct manipulation of DOM nodes, such as scrolling to a specific element or focusing an input field.

// Working with Higher-Order Components: It is useful when working with higher-order components (HOCs) that wrap other components and need to pass refs down.

import React, { forwardRef } from 'react';

const Intro = forwardRef((props, ref) => {
  return <div ref={ref} {...props}>Intro Section</div>;
});



// forwardRef: A higher-order function that takes a component as an argument.
// (props, ref): The function receives props and ref. ref is forwarded to the element or component inside.

import React, { useRef } from 'react';
import Intro from './Intro';

const Homepage = () => {
  const introRef = useRef(null);

  const scrollToIntro = () => {
    if (introRef.current) {
      introRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Intro ref={introRef} />
      <button onClick={scrollToIntro}>Scroll to Intro</button>
    </>
  );
};

export default Homepage;