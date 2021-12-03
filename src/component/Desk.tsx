import styled from "styled-components"
import { usersServices } from "../api/usersServices"
import { FC, useEffect, useState } from "react"
import { Invite, TeamMember } from "../types/type"
import admin from '../img/admin.jpg'
import user from '../img/user.jpg'
import { UsersList } from "./UsersList"

const DeskWrapper = styled.div`
  width:375px;
  height:100vh;
  padding:1rem;
  background-color:#F5F5F5;
`

const StandardUsersList = styled(UsersList)`
  margin-top: 3rem;
`

export const Desk: FC = () => {
  const [invites, setInvites] = useState<Invite[]>([])
  const [users, setUsers] = useState<TeamMember[]>([])

  useEffect(() => {
    usersServices.getInvites().then(res => setInvites(res))
    usersServices.getUsers().then(res => setUsers(res))
  }, [])

  const administrators = [...invites, ...users].filter(person => person.role === "Administrator")
  const standardUsers = [...invites, ...users].filter(person => person.role === "Standard")

  return (
    <DeskWrapper>
      <UsersList img={admin} title="Administrators" items={administrators} />
      <StandardUsersList img={user} title="Standard Users" items={standardUsers} />
    </DeskWrapper>
  )
}