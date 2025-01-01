import React, { useState, useEffect } from 'react';

const TerminalPortfolio = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    'Welcome to my portfolio! Type "help" to see available commands.'
  ]);



  const commands = {
    help: () => [
      'Available commands:',
      '- aboutMe: Learn about me',
      '- resume: View my resume',
      '- linkedin: Open LinkedIn profile',
      '- clear: Clear terminal',
      '- help: Show this help message',
    ],
    aboutme: () => [
      "Hi! I'm a Software Developer passionate about creating innovative solutions.",
      'I specialize in React, Node.js, and Python.',
      'Currently working on exciting projects in web development.',
    ],
    resume: () => [
      '╔════════════════════ ALI MOHAMMED HAQ ════════════════════╗',
      '║ SOFTWARE DEVELOPER | COMPUTER SCIENCE                     ║',
      '║ South Barrington, IL                                     ║',
      '║ ahaq7@depaul.edu | (224) 517-7392                       ║',
      '╚═══════════════════════════════════════════════════════════╝',
      '',
      '=== EDUCATION ===',
      'DePaul University – Chicago, IL (09/2023-Present)',
      'Bachelor of Computer Science',
      'GPA: 3.5/4.0',
      '',
      'Coursework:',
      '• Data Structures • Algorithms • Discrete Mathematics',
      '• Software Development • Computer Logic • Databases',
      '',
      '=== EXPERIENCE ===',
      'Mobile App Developer | Shia+ (Remote) | 01/2023-04/2023',
      '• Led 5-member team for Shia+ mobile app (10,000+ Downloads)',
      '• Developed using Xcode/Swift with web API integration',
      '• Implemented alarm system for event notifications',
      '',
      'Software Developer Intern | WOQA Charity | 05/2023-08/2023',
      '• Built full-stack web app using React and Tailwind CSS',
      '• Deployed via Google Firebase with high client satisfaction',
      '',
      '=== PROJECTS ===',
      'Cypher Cyber Security Clinic | 01/2024-03/2024',
      '• Led 6-member team to win best application competition',
      '• Built with React, Flask, SQL-Alchemy',
      '',
      'Syluz Ecommerce Store | 08/2022-08/2024',
      '• Founded successful ecommerce business with 4-figure income',
      '• Developed 3 websites using React, Flask, TypeScript',
      '',
      'PC Building | 02/2022-05/2023',
      '• Led 3-person team for custom PC assembly and optimization',
      '',
      'InnoClock | 12/2020-01/2021',
      '• Created Android alarm app with sleep pattern analysis',
      '',
      '=== SKILLS ===',
      'Languages: C++, C#, Java, Python, TypeScript, Flutter, Swift',
      'Frontend: HTML, CSS, JS, React, Tailwind',
      'Backend: Flask, SQL-Alchemy, MySQL, MongoDB',
      'Tools: AWS, Azure, Firebase, Git, Xcode',
      '',
      'Type "download-resume" to download the PDF version',
    ],
    'download-resume': () => {
      const link = document.createElement('a');
      link.href = 'resume.pdf'; // You'll need to provide the actual PDF file
      link.download = 'AliHaq_Resume.pdf';
      link.click();
      return ['Downloading resume...'];
    },
    linkedin: () => {
      setTimeout(() => {
        window.location.href = 'https://www.linkedin.com/in/alimhaq/';
      }, 1000);
      return ['Opening LinkedIn profile...'];
    },
    clear: () => [],
  };

  const handleCommand = cmd => {
    const lowercaseCmd = cmd.toLowerCase();
    if (commands[lowercaseCmd]) {
      return commands[lowercaseCmd]();
    }
    return [`Command not found: ${cmd}. Type "help" for available commands.`];
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      const newOutput = [...output, `> ${input}`, ...handleCommand(input)];
      setOutput(newOutput);
      setInput('');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [input]);

  return (
    <div className='min-h-screen bg-gray-900 p-8 flex flex-col items-center'>
      {/* Computer Screen */}
      <div className='w-full max-w-4xl bg-gray-800 rounded-t-lg p-4 border-2 border-gray-700'>
        <div className='bg-black rounded p-4 h-96 overflow-y-auto font-mono text-green-500'>
          {output.map((line, i) => (
            <div key={i} className='mb-1'>
              {line.startsWith('http') ? (
                <a
                  href={line}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-400 hover:underline'
                >
                  {line}
                </a>
              ) : (
                line
              )}
            </div>
          ))}
          <div className='flex'>
            <span className='mr-2'>{'>'}</span>
            <input
              type='text'
              value={input}
              onChange={e => setInput(e.target.value)}
              className='bg-transparent outline-none flex-1 text-green-500'
              autoFocus
            />
          </div>
        </div>
      </div>

      {/* Mechanical Keyboard */}
      <div className='w-full max-w-4xl bg-gray-700 p-8 rounded-b-lg grid grid-cols-12 gap-2'>
        {Array(60)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className='aspect-square bg-gray-800 rounded-md shadow-md hover:bg-gray-600 transition-colors'
            />
          ))}
      </div>
    </div>
  );
};

export default TerminalPortfolio;
