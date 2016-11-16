
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router';
//import { connect } from "react-redux";

export class App extends React.Component {
    render() {
        return <div>
            <h1>Martial mentor. ---</h1>
            {this.props.children}
        </div>;
    }
}

export class Home extends React.Component {
    render() {
        return <h1>Martial mentor. home</h1>;
    }
}

// function disTest(dispatch, ownProps) {
//     return { type: "add_count" }
// }
// export default connect(
//     (state) => ({
//         count: state.count || -999
//     })
//     ,
//     { disTest }
// )(Home)

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/home" component={Home} />
        </Route>
    </Router>,
    document.getElementById('app')
)