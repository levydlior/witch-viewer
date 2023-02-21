export type userType = {
    user_name: String,
    id: Number
  }
  
  export type LoginAndCreateProps = {
    onLogOrCreate: (user: userType) => void,
    loggedOrCreated: boolean
  }


export interface HeaderProps {
    onLogOut: () => void,
    loggedUser: userType
}