import React, { Component } from 'react';



class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchContent: this.props.match.params.searchContent,
            errfor:"a",
        };

        console.log("Searching for: ")
        console.log(this.state.searchContent)

    }

    componentDidMount() {

        var string_tokens = this.state.searchContent.split(":")

        if (string_tokens.length === 1) {
            if (string_tokens[0] === "") {
                this.props.history.push("/dashboard")
            }
            else {
                this.props.history.push(`/portal/search/company/${string_tokens[0]}`)
            }
        }
        else if (string_tokens.length === 2) {
            if (string_tokens[0].toLowerCase() === ("inv")) {

                this.props.history.push(`/portal/search/inv/${string_tokens[1]}`)
            }
            else {
                    this.props.history.push({
                        pathname: '/dashboard',  
                        state:this.state.errfor
                    });

                }
            }
        else {
            this.props.history.push({
                pathname: '/dashboard',
                state:this.state.errfor
            });
            
        }

    }



    render() {

        return (

            <div>

            </div>

        );

    }

}





export default Search;