import React, { Component } from 'react'

class ErrorBoundary extends Component {
    state = {hasError: false}

    componentDidCatch(error, info){
        this.setState({hasError:true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops, that doesn't look good</h1>
        } else {
            return (
                <div className={'main'}>
                    {this.props.children}
                </div>
            )
        }
    }
}

export default ErrorBoundary