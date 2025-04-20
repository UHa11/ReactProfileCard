import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
`
const Ul = styled.ul`
  width: 200px;
  height: 200px;
/*  */
  display: flex;
  flex-direction: column;
  justify-content: center;
/*  */
  border-radius: 10%;
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
    <Div>
    {pData.map((data) =>
    <Ul  key={data.no}>
    <Li>{data.name}</Li>
    <Li>{data.age}</Li>
    <Li>{data.isOnline === true ? "🟢 온라인 상태입니다" : "🔴 오프라인 상태입니다"}</Li>
    </Ul>
    )}

    </Div>
  )
}

export default ProfileCard