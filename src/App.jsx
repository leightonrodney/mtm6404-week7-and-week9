import './App.css'

const NameTag = ({name, style}) => {
  return <h2 style={style}>{name}</h2>
}

const StudentImg = ({imgURL}) => {
  return <img src={imgURL} alt="student image" height="100" />
}

const Identification = ({studentNumber, expiryDate, children}) => {
  return (
    <div className="student-id">
      <h1>Student ID</h1>
      {children}
      <span>Expires: {expiryDate}</span>
      <h2 className='student-number'>{studentNumber}</h2>
      <p>Algonquin College</p>
    </div>
  );
}

function App() {

  const nameTagStyle = {
    color: 'red',
    fontWeight: 'bold',
    fontSize: '48px'
  };

  return (
    <>
      <Identification studentNumber="00000143247934734" expiryDate="20/12/2024">
        <StudentImg imgURL="https://c8.alamy.com/comp/WJ38MT/college-student-carrying-a-backpack-and-smiling-WJ38MT.jpg" />
      </Identification>
    </>
  )
}

export default App
