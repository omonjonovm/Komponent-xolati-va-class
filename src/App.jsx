import { Component } from "react"
class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,age:''
    }
  }
  clickHandle = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }))
  }
  handleDelete =() => {
    this.setState(prevState => ({
      counter:prevState.counter -1,
    }))
  }
  handleRes = () => {
    this.setState({
      counter:0,
    })
  }
  changeHandle = (e) => {
   this.setState({
    age:e.target.value,
   })
  }
  render() {
    const { firstname, lastName, link } = this.props
    const {age,counter} = this.state
    return (
      <div className="w-50 mx-auto">
        <div className="border p-3 mt-5">
          <h4>
            Mening ismim - {firstname} sharifim - {lastName}, yoshim - {age}
          </h4>
          <a href={link}>telegram sahifam</a>
          <div className="mt-3">
            <button onClick={this.clickHandle} className="btn btn-success">Increment</button>
            <button onClick={this.handleDelete}className="btn btn-danger mx-2">Decrement</button>
            <button onClick={this.handleRes}className="btn btn-info ">Restart</button>
            <p>{counter}</p>
          </div>
          <form>
            <span>Yoshingiz</span>
            <input type="number" className="form-control" onChange={this.changeHandle}/>
          </form>
        </div>
      </div>
    )
  }
}


const App = () => {
  return (
    <div>
      <User firstname='Murodjon' lastName='Omonjonov' link='https://web.telegram.org' />
      <User firstname='Doniyor' lastName='Xayrulla' link='youtube.com' />
    </div>
  )
}
export default App