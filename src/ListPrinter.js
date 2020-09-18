import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {TopMoviesArray} from './Data/MoviesList';
import {YearEndSongsArray} from "./Data//MusicList"  
import {TopSportsArray} from './Data/SportsList';  
import {TopThingsArray} from './Data/TopList';  
import {TopTvShowsArray} from './Data/TvShowsList';
import {VideoGamesArray} from './Data/VideoGamesList';

function findPrintedList(year, genre){
    switch(genre){
        case "movies":
            for(var i = 0; i < TopMoviesArray.length; i++){
                if(year == (1975 + i)){
                    return TopMoviesArray[i];
                }
            }
            break;

        case "songs":
            for(var i = 0; i < YearEndSongsArray.length; i++){
                if(year == (1950 + i)){
                    return YearEndSongsArray[i];
                }
            }
            break;

        case "sports":
            for(var i = 0; i < TopSportsArray.length; i++){
                if(year == (1950 + i)){
                    return TopSportsArray[i];
                }
            }
            break;

        case "various":
            for(var i = 0; i < TopThingsArray.length; i++){
                if(year == (1950 + i)){
                    return TopThingsArray[i];
                }
            }
            break;

        case "shows":
            for(var i = 0; i < TopTvShowsArray.length; i++){
                if(year == (1951 + i)){
                    return TopTvShowsArray[i];
                }
            }
            break;

        case "videogames":
            for(var i = 0; i < VideoGamesArray.length; i++){
                if(year == (1971 + i)){
                    return VideoGamesArray[i];
                }
            }
            break;
    }
}

export class ListPrinter extends Component{

    back = e => {
        e.preventDefault();
        this.props.prevStep();
      }


    render(){
        const { values, handleChange } = this.props;
        const printedList = findPrintedList(values.year,values.selectedGenre);
        
        switch(values.selectedGenre){
            case "movies":
                const movieList = printedList.map((movie) =>
                <li>{movie.title}</li>
                );

                return(
                    <MuiThemeProvider>
              <>
                <Dialog
                  open
                  fullWidth
                  maxWidth='sm'
                >
                  <AppBar />
                  
                  <ol>{movieList}</ol>
      
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                  >Back</Button>
      
                </Dialog>
              </>
            </MuiThemeProvider>
                );
                break;

            case "songs":
                const songList = printedList.map((song) => 
                <li>{song.artist} - {song.title}</li>
                );

                return(
                    <MuiThemeProvider>
              <>
                <Dialog
                  open
                  fullWidth
                  maxWidth='sm'
                >
                  <AppBar />
                  
                  <ol>{songList}</ol>
      
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                  >Back</Button>
      
                </Dialog>
              </>
            </MuiThemeProvider>
                );

                break;

            case "sports":
                const sportsList = printedList.map((sport) => 
                <li>{sport.category}{sport.title}</li>
                );

                return(
                    <MuiThemeProvider>
              <>
                <Dialog
                  open
                  fullWidth
                  maxWidth='sm'
                >
                  <AppBar />
                  
                 <ul>{sportsList}</ul>
      
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                  >Back</Button>
      
                </Dialog>
              </>
            </MuiThemeProvider>
                );

                break;

            case "various":
                const variousList = printedList.map((thing) => 
                <li>{thing.category}: {thing.title}</li>
                );

                return(
                    <MuiThemeProvider>
              <>
                <Dialog
                  open
                  fullWidth
                  maxWidth='sm'
                >
                  <AppBar />
                  
                  <ul>{variousList}</ul>

                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                  >Back</Button>
      
                </Dialog>
              </>
            </MuiThemeProvider>
                );

                break;

            case "shows":
                const showsList = printedList.map((show) => 
                <li>{show.title}</li>
                );

                return(
                    <MuiThemeProvider>
              <>
                <Dialog
                  open
                  fullWidth
                  maxWidth='sm'
                >
                  <AppBar />
                  
                  <ol>{showsList}</ol>
      
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                  >Back</Button>
      
                </Dialog>
              </>
            </MuiThemeProvider>
                );

                break;

            case "videogames":
                const videoGamesList =  printedList.map((game) => 
                <li>{game.title}</li>
                );

                return(
                    <MuiThemeProvider>
              <>
                <Dialog
                  open
                  fullWidth
                  maxWidth='sm'
                >
                  <AppBar />
                  
                  <ul>{videoGamesList}</ul>
      
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                  >Back</Button>
      
                </Dialog>
              </>
            </MuiThemeProvider>
                );

                break;

            default:
            return(
                <MuiThemeProvider>
              <>
                <Dialog
                  open
                  fullWidth
                  maxWidth='sm'
                >
                  <AppBar />
                  
      
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                  >Back</Button>
      
                </Dialog>
              </>
            </MuiThemeProvider>
            )
        }
    }
}

export default ListPrinter;