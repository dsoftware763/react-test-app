import React from 'react'

export default function HOC(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        window.addEventListener("resize", this.update);
    }

    componentDidMount() {
        this.update();
    }


    update = () => {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        });
    };

    handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value

        window.setDivHeight(value)
        this.setState({
            height: value 
        })
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={{...this.state}} handleChange={this.handleChange}  {...this.props} />;
    }
  };
}