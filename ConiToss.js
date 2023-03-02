import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {value: 1, total: 0, heads: 0, tails: 0}

  randomImage = () => {
    const {value, total, heads} = this.state
    const random = Math.ceil(Math.random() * 2)
    this.setState({value: random})
    this.setState(prevState => {
      return {total: prevState.total + 1}
    })
    if (random === 1) {
      this.setState(pre => {
        return {heads: pre.heads + 1}
      })
    } else {
      this.setState(each => {
        return {tails: each.tails + 1}
      })
    }
  }

  render() {
    const {value, total, heads, tails} = this.state
    const img =
      value === 1
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="card1">
        <div className="card2">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img className="image" src={img} alt="toss result" />
          <br />
          <button onClick={this.randomImage}>Toss Coin</button>
          <div className="card3">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
