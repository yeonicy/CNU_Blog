const Resume = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        maxWidth: '800px',
        margin: 'auto',
        padding: '20px',
        lineHeight: '1.6',
      }}
    >
      <header style={{ textAlign: 'center', borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1 style={{ margin: '0', fontSize: '2em' }}>DoHyeon KIM</h1>
        <p style={{ margin: '5px 0' }}>11-29 Yuseong-daero, Daejeon, Kore</p>
        <p style={{ margin: '5px 0' }}>+82-10-2780-3277</p>
        <p style={{ margin: '5px 0' }}>gdb1520@gmail.com</p>
        <p style={{ margin: '5px 0' }}>
          <a style={{ color: '#0073e6', textDecoration: 'none' }} href="https://github.com/dohyeon321">
            https://github.com/dohyeon321
          </a>
        </p>
      </header>
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#0073e6', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>OBJECTIVE</h2>
        <p>Cybersecurity position in the Silicon Valley.</p>
      </section>
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#0073e6', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>SUMMARY</h2>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          <li>Junior student, Computer Science and Engineering, Chungnam National University</li>
          <li>Proficient with Java, C, C++, Linux, Matlab</li>
        </ul>
      </section>
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#0073e6', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>EDUCATION</h2>
        <p>Chungnam National University, Computer Science and Engineering</p>
        <p>Mar 2022 – Feb 2026 (expected)</p>
        <p>Courses taken included:</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          <li>Data Structure</li>
          <li>Algorithm</li>
          <li>Object-Oriented Design</li>
          <li>System Programming</li>
        </ul>
      </section>
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#0073e6', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>EXPERIENCE</h2>
        <div>
          <h3 style={{ marginTop: '10px', color: '#555' }}>Encouragement Award, AI/SW Creative Contest, November 2023</h3>
          <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
            <li>Recognized for leadership in team project development.</li>
            <li>Focused on creating an app beneficial for team collaboration during group assignments.</li>
            <li>Utilized Flutter and Figma development tools for user-centered development.</li>
            <li>Coordinated team roles and optimized project outcomes and performance using Slack.</li>
          </ul>
        </div>
        <div>
          <h3 style={{ marginTop: '10px', color: '#555' }}>Java Mentor, School Club, March - May 2023</h3>
          <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
            <li>Led introductory Java training sessions for freshmen, focusing on fundamental concepts.</li>
            <li>Fostered teamwork among students to cultivate a supportive learning environment.</li>
            <li>
              Delivered individualized support to students, providing personalized assistance tailored to their specific learning needs and
              challenges.
            </li>
          </ul>
        </div>
      </section>
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#0073e6', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>ACTIVITIES</h2>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          <li>Participate in Information Protection Specialization College Track (2024-2026)</li>
          <li>In charge of human resources at the student council login (2024)</li>
          <li>Research in Cybersecurity Laboratory (2023-2024)</li>
          <li>Encouragement Award at AI/SW Creation Contest (November, 2023)</li>
          <li>Encouragement Award, ARGOS CTF CONTEST (2023)</li>
          <li>Encouragement Award at AI/SW Junior Creative Contest (November, 2022)</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;