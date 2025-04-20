import ProfileCard from './components/ProfileCard'

const profileData = [{
  no : 1,
  name : "김유하1",
  age : "1993.11.08",
  isOnline : false
},{
  no : 2,
  name : "김유하2",
  age : "1993.11.09",
  isOnline : true
},{
  no : 3,
  name : "김유하3",
  age : "1993.11.10",
  isOnline : false
}]
function App() {
  return (
    <>
      <ProfileCard pData={profileData}/>
    </>
  )
}

export default App
