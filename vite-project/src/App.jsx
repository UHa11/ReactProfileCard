import ProfileCard from './components/ProfileCard'

const profileData = {
  name : "김유하",
  age : "1993.11.08",
  isOnline : "true"
}
function App() {
  return (
    <>
      <ProfileCard pData={profileData}/>
    </>
  )
}

export default App
