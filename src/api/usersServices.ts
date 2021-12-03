import { Invite, TeamMember, Users } from "../types/type";

const usersData = [{
    id: 123456781,
    status: "approved" ,
    user: {
      id: 7685940321,
      name: 'Danial',
      lastName: 'Redklif',
      phone: '+0906752507',
      email: 'vatra@gmail.com'
    },
    role: "Administrator"  ,
        
},
{
    id: 123456782,
    status: "invited",
    user: {
      id: 7685940322,
      name: 'Quentin',
      lastName: 'Tarantino',
      phone: '+0906752507',
      email: 'vatra@gmail.com'
    },
    role: "Administrator"  ,
        
  },
{
    id: 123456783,
    status: "pending",
    user: {
      id: 7685940323,
      name: 'Milers',
      lastName: 'Farmer',
      phone: '+0906752507',
      email: 'vatra@gmail.com'
    },
    role: "Standard" ,
        
  },
{
    id: 123456784,
    status: "invited",
    user: {
      id: 7685940324,
      name: 'Valeria',
      lastName: 'Redklif',
      phone: '+0906752507',
      email: 'vatra@gmail.com'
    },
    role:"Standard"  ,
        
  }]
    
const invitesData = [{
          id: 987654325,
          phone: '+0508762905',
          role:"Administrator"  
},
{
          id: 987654326,
          phone: '+0508762905',
          role: "Standard"
  },
{
          id: 987654327,
          phone: '+0508762905',
          role: "Standard"
  },
{
          id: 987654328,
          phone: '+0508762905',
          role: "Standard"
        }]

export const usersServices:Users = {
  getUsers: () => {
    const promise = new Promise<TeamMember[]>(resolve => {
      resolve(usersData)
    })
    return promise
  },
    getInvites: () => {
      const promise = new Promise<Invite[]>(resolve => {
        resolve(invitesData)
      })
    return promise
  }

  
}