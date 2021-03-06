'use strict';

let React = require('react')
    , Rx = require('rx-lite')
    , Router = require('react-router')
    , _ = require('lodash');

let Howl = require('howler').Howl;

require('./main.less');

let {Route, DefaultRoute, NotFoundRoute, RouteHandler} = Router;

/*
 *
 *
 *
 * main app
 * */

let WelcomeComponent = require('./views/welcome/welcomeComponent');
let StadiumComponent = require('./views/stadiumView/stadiumView');
let TweetView = require('./views/tweetView/tweetView');
let MainMenu = require('./views/mainMenu/mainMenu');
let pageShare = require('./views/pageShare/pageShare');
let NotFound = require('./views/notFound');


let sound;

let App = React.createClass({
    onWordSelected: function (word) {

        this.setState({tag: word, state: 'tweet'});
    }
    , onTweetDone: function () {

        sound = new Howl({
            urls: ['./sound/Estadio-Fondo_01.mp3']
        }).play();
        this.setState({state: 'pageShare'});
    }
    , onClickToStadium: function () {
        this.setState({state: 'stadium'});
    }
    , onStartAgain: function () {
        sound.stop();
        this.setState({state: 'welcome'});
    }

    , getInitialState: function () {
        return {
            state: 'welcome' //['welcome', 'pageShare', 'tweet', 'stadium']
            , tag: ''
        };
    }
    , render: function () {
        let Tag;
        switch (this.state.state) {
            case 'welcome':
                Tag = WelcomeComponent;
                break;
            case 'tweet':
                Tag = TweetView;
                break;
            case 'stadium':
                Tag = StadiumComponent;
                break;
            case 'pageShare':
                Tag = pageShare;
                break;
        }


        return ( <div className='Main'>
        {/* <MainMenu/>*/}
            <Tag model={model} state={this.state} onWordSelected={this.onWordSelected} onTweetDone={this.onTweetDone} onStartAgain={this.onStartAgain} onClickToStadium={this.onClickToStadium}/>
        {/*<RouteHandler model={model} state={this.state} onWordSelected={this.onWordSelected}/>*/}
        </div> );
    }
});

//
//let tags = ['#FACupFinal'
//    , '#copadelrey'
//    , '#finalcopadelrey'
//    , '#finalcopa'
//    , '#barcelona'
//    , '#bilbao'
//    , '#fcb'
//    , '#athleticbilbao'
//    , '#AthleticGuGara'
//    , '#athlive'
//    , '#fcb'
//    , '#athletic'
//    , '#barcelonafutbolclub'
//    , '#futbol'
//    , '#fútbol'
//    , '#fútbolfotos'
//    , '#soccer'
//    , '#Barcelonafutbol'
//    , '#fcblive'
//    , '#denokbatera athleticclub'
//    , '#FIFA'
//    , '#crispacion'
//    , '#independencia'
//    , '#independència'
//    , '#denokbatera'
//    , '#independentzia'
//    , '#españa'
//    , '#spain'
//    , '#independence'
//    , '#pitadaconcausa'
//    , '#porquepitas'
//    , '#ChiringuitoPitos'
//    , '#Pitadahimno'
//    , '#marchem'
//    , '#denokbatera'
//    , '#himno'
//    , '#rey'];


let tags = [
     '#democracia'
    , '#independencia'
    , '#justiciasocial'
    , '#república'
    , '#deshaucios'
    , '#pobreza'
    , '#sociedad justa'
    , '#sanidadpública'
    , '#educaciónpública'
    , '#culturalibre'
    , '#desigualdadesdegénero'
    , '#libreexpresión'
    , '#jugarlimpio'
    , '#naciólliure'
    , '#sociedadjusta'
    , '#independentzia'
    , '#crispacion'
    , '#independentzia'
    , '#himno'
    , '#rey'];



let model = {
    posibleTags: tags
};

//var routes = (
//    <Route handler={App} path="/">
//        <DefaultRoute handler={WelcomeComponent} />
//        <Route name="welcome" handler={WelcomeComponent} />
//        <Route name="tweet" handler={TweetView}/>
//        <Route name="stadium" handler={StadiumComponent}/>
//        <NotFoundRoute handler={NotFound}/>
//    </Route>
//);

//Router.run(routes, function (Handler) {
//    React.render(<Handler/>, document.body);
//});

React.render(<App/>, document.body);



