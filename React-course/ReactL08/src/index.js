import React from 'react';
import ReactDOM from 'react-dom';

const API = 'https://api.github.com/users';

class App extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            username : 'ubosquet',
            name : '',
            avatar : '',
            location : '',
            repos : '',
            followers : '',
            following : '',
            homeUrl: '',
            notFound: ''
        };
    }

    fetchProfile(username) {
        let url = `${API}/${username}`;
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            this.setState(
                {
            username : data.login,
            name:data.name,
            avatar : data.avatar_url,
            location: data.location,
            repos : data.public_repos,
            followers: data.followers,
            following: data.following,
            homeUrl: data.html_url,
            notFound: data.message
                }
            );
        })
            .catch(error => console.log('Oops ! There is a Problem'));


    }
    componentDidMount(){
        this.fetchProfile(this.state.username);
    }

    render(){
        return (
            <div>
                <section>
                    <Profile data = {this.state} />
                </section>
            </div>
        );
    }
}


class Profile extends React.Component {

    render(){
        let data = this.props.data;
        let followers = `${data.homeUrl}/followers`;
        let repositories = `${data.homeUrl}?tab=repositories`;
        let following = `${data.homeUrl}/following`;
        return (
            <section className = "github--profile">
                <div className= "github--profile_info">
                    <a href = {data.homeUrl} target = "_blank" title = {data.name || data.username} >
                        <img src= {data.avatar} alt= {data.username} /> 
                    </a>

                    <h2> 
                        <a href= {data.homeUrl} title = {data.username} target="_blank">
                            {data.name || data.username}
                        </a>
                    </h2>

                </div>
                <div className= "git--profile__state">
                    <ul>
                        <li>
                            <a href= {followers} target="_blank" title="Number of Followers">
                                <i>{data.followers}</i>
                                <span>Followers</span>
                            </a>
                        </li>
                        <li>
                            <a href={following} target= "_blank" title= " Number of Following">
                                <i>{data.following}</i>
                                <span>Following</span>
                            </a>
                        </li>
                    </ul>

                </div>

            </section>
        );
    }
}

ReactDOM.render( <App/>, document.getElementById('root'));