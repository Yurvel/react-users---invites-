import { FC } from "react"
import styled from "styled-components"
import arrow from '../img/arrow.svg'
import { Invite, TeamMember } from "../types/type"

const PersonWrapper = styled.div`
display:flex;
align-items: center;
margin-bottom:0.1rem;
height:2.5rem;
background-color:white;
border-radius:1rem;
padding:1.5rem;
justify-content: space-between;
`
const Img = styled.img`
width:0.6rem;
`
const Span = styled.span`
background-color:lightgrey;
padding:0.2rem 0.5rem 0.2rem 0.5rem;
margin-right:1rem;
border-radius:0.5rem;
`
const Phone = styled.p`
color:grey;
`
interface Props extends Invite, TeamMember{}
  


export const Person: FC<{ data: Props }> = ({ data }) => {
  return (
    <PersonWrapper>
      {data?.phone && <Phone>{data.phone}</Phone>}
      {data?.user?.name && <p>{data.user.name }</p>}
      <div>
        {data?.status && <Span>{data?.status}</Span>}
        <Img src={arrow} alt='arrow' />
        </div>
    </PersonWrapper>
  )
}