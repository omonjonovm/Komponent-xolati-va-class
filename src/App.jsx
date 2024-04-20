import {Component} from "react"
class  User  extends Component{
  constructor(props){
      super(props)
  }

  render(){
    const {firstname,lastName,link} = this.props
    return(
          <div>
            <h1>
              Mening ismim - {firstname} sharifim - {lastName}
            </h1>
            <a href={link}>telegram sahifam</a>
          </div>
        )
  }
}


const App  = () => {
  return(
    <div>
      <User  firstname='Murodjon' lastName='Omonjonov' link='https://web.telegram.org'/>
      <User  firstname='Doniyor' lastName='Xayrulla' link='youtube.com'/>
    </div>
  )
}
export default App