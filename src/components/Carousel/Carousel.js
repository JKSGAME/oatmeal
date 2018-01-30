import React, { Component } from 'react';
import './Carousel.css'

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            current: 0
        }
    }

    componentDidMount() {
        const { children } = this.props
        this.setState({ total: children.length })
        // this.interval = setInterval(this.showNext, 70000000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    componentWillReceiveProps(props){
        this.setState({
            total: props.length
        })
    }

    showNext = () => {
        const { total, current } = this.state
        this.setState({
            current: current + 1 === total ? 0 : current + 1
        })
    }

  render() {
    //   console.log(this.state)
    //   const { children } = this.props
    //   const bullets = Array(this.state.total).fill('*')
    //   bullets[this.state.current] = '^'
    return (
      <div className="Carousel">
      {this.props.children[this.state.current]}
      </div>
    );
  }
}

export default Carousel;