import React from 'react';


class SearchBar extends React.Component{

    state={term:''};


    formsub = event =>{
     event.preventDefault();
        this.props.onSubmit(this.state.term);

    };

    
    render(){
        return(
        
            <div className="search-bar ui segment" style={{marginTop: "10px"}}>
                <form onSubmit={this.formsub} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text"  value={this.state.term} onChange={(e)=>this.setState({term :e.target.value})} />

                    </div>

                </form>

            </div>

        );

    }
}




export default SearchBar;