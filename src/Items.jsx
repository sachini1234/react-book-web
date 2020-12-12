import React from 'react';
import axios from 'axios'

export default class Items extends React.Component{
    constructor(props){
        super(props);
        this.state = { items:[] }
    }

    componentDidMount(){
        axios.get("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=jVUsbrRWHosGyF4WS05CFj9Gm5DwuYgP")
        .then(res=>{
            console.log(res.data.results);
            this.setState({items:res.data.results});
        });
    }

    render(){
        return(
            <>
            books;

            <table>
                {this.state.items.map(book => 
                <tr>
                    <td>
                    {book.list_name}

                        <td>
                            {book.list_name_encoded}
                            <br></br>
                            {book.oldest_published_date}
                            <br></br>
                            {book.newest_published_date}
                            <br></br>
                            {book.updated}
                            <br></br>
                            <a href="#">
                            View Details
                            </a>
                        </td>

                    </td>
                    
                </tr>
                )

                }
            </table>

            </>
        )
    }
}