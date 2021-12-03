import { FC } from "react"
import styled from "styled-components"
import { Invite, TeamMember } from "../types/type"
import { Person } from "./Person"

const UsersWrapper = styled.div`
  align-items: center;
  display:flex;
  color:grey;
`
const Img = styled.img`
  margin:0.5rem;
  width:1rem;
  height:1rem;
`
interface items extends Invite, TeamMember{}

interface Props {
  className?: string
  img: string,
  title: string,
  items:items[]
}

export const UsersList:FC<Props> = ({ className, img, title, items }) => {
  
  return (
    <div className={className}>
      <UsersWrapper>
        <Img src={img} alt='img'/>
        <p>{title}</p>
      </UsersWrapper>
      {items.length > 0 && items.map((item)=> <Person key={item.id} data={item} />)}
    </div>
  )
}