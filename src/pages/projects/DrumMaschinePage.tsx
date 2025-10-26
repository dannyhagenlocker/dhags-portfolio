// File: pages/projects/drum-machine.tsx
// This is a complete example for the Bare-Metal Drum Machine project

import ProjectDemo, { MediaItem } from "../../components/ProjectDemo";
import { DocumentTitle } from "../../utils/utils";

export default function DrumMachinePage() {
  DocumentTitle("Bare-Metal Drum Maschine | Danny Hagenlocker");

  // Define your media items (images and videos)
  const media: MediaItem[] = [
    {
      type: "gdrive-video",
      url: "https://drive.google.com/file/d/1UKRTW8vlCAdnzaCiYS088zhgsl5VtdMF/view?usp=sharing",
      caption: "Dermot (see yourself in my eyes) - Fred Again",
    },
    {
      type: "gdrive-video",
      url: "https://drive.google.com/file/d/1F0b-yq32ixaenxGLoljuvmDdAKNoC8oP/view?usp=sharing",
      caption: "Tate (how i feel) - Fred Again",
    },
    {
      type: "gdrive-image",
      url: "https://drive.google.com/file/d/1Uu5TQQV6qyd-5iCs46S8Yf5J0VMqh0CX/view?usp=sharing",
      caption: "Whiteboarding our system architecture",
    },
    {
      type: "gdrive-video",
      url: "https://drive.google.com/file/d/1nELE-Qtysk-nrj2ZHgPL5tspjHVq2aNf/view?usp=sharing",
      caption: "Drum pad circuit bring up",
    },
  ];

  return (
    <ProjectDemo
      // Basic info (required)
      title="Bare-Metal Drum Maschine"
      description="A simple drum pad made incredibly difficult because it's programmed entirely from scratch on a bare-metal MangoPi."
      coverImage="projects/cs107e/cover.png"
      tags={["Stanford", "CS 107E", "Software", "Hardware", "Music"]}
      // Media carousel
      media={media}
      // Project details
      role="Solo Developer"
      duration="10 weeks (Winter 2025)"
      teamSize={2}
      techStack={["C", "ARM Assembly", "Bare Metal", "GPIO", "I2C"]}
      // Links (all optional)
      // githubUrl="https://github.com/yourusername/drum-machine"
      // liveUrl="https://demo.com" // if you have a live demo
      // paperUrl="https://..." // if you wrote a paper

      // Content sections (all optional - use what makes sense for your project)
      overview="For Stanford's CS 107E (Computer Systems from the Ground Up), I built a fully functional drum machine without using any operating system, standard libraries, or high-level frameworks. Every line of code, from GPIO pin manipulation to audio synthesis, was written from scratch in C and ARM assembly. The result is a working musical instrument that demonstrates deep understanding of computer architecture and embedded systems."
      challenge="The biggest challenge was doing everything without abstractions. No malloc, no printf, no drivers—just direct hardware manipulation. I had to implement my own memory management, create a custom audio synthesis engine, handle real-time input from pressure-sensitive pads, and ensure sample-accurate timing for audio playback. All of this while working with the constraints of bare-metal programming where a single pointer error could crash the entire system with no debugging tools available."
      solution="I developed the system in structured layers, starting with low-level GPIO control and progressively adding higher-level features. After implementing a minimal memory allocator and display driver, I created an audio playback engine that could dynamically stream extended samples from memory. Unlike earlier iterations that relied on algorithmic sound synthesis, our final system could load any custom sample and play it in real time. A flexible configuration layer allowed switching between sampling setups without recompiling, making it easy to load new songs or modify performance parameters on the fly. Input from pressure-sensitive pads was read via I²C, and the ARM system timer ensured precise, low-latency timing critical for musical performance. The controller's LED array provided real-time visual feedback, enhancing live usability."
      results="The final drum machine supported complete song performances with dynamic samples, responsive input, and seamless reconfiguration. It maintained stable, low-latency playback while providing clear visual cues through the LED interface. The project earned an A+ and was featured in the course’s final project showcase. More importantly, it deepened my understanding of embedded systems, real-time performance constraints, and low-level system design—skills. It also lets me perform like Fred Again, which I think is pretty dope."
      learnings="This project taught me that abstractions we take for granted (like malloc or printf) involve enormous complexity. I learned to think carefully about memory layout, understand the ARM architecture intimately, and debug without traditional tools using only LED blinks and logic analyzers. I also discovered that constraints breed creativity—without access to standard libraries, I had to come up with novel solutions to common problems. Most importantly, I learned that the best way to truly understand something is to build it yourself from scratch."
    />
  );
}
