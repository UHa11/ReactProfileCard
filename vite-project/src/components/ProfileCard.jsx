import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
  width: 200px;
  height: 200px;
/*  */
  display: flex;
  flex-direction: column;
  justify-content: center;
/*  */
  border-radius: 100%;
  border: 3px solid gray;
/*  */
  background-color: white;
  padding: 0;
`
const Li = styled.li`
  align-self: center;
  list-style: none;
  color: black;
  padding-bottom: 5px;
`

const ProfileCard = ({pData}) => {
  return (
    <>
    <Ul>
      <Li>{pData.name}</Li>
      <Li>{pData.age}</Li>
      <Li>{pData.isOnline === true ? "🟢 온라인 상태입니다" : "🔴 오프라인 상태입니다"}</Li>
    </Ul>
    </>
  )
}

export default ProfileCard