import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';

import {TopMoviesArray} from '../Data/MoviesList';
import {YearEndSongsArray} from "../Data/MusicList";
import {TopSportsArray} from '../Data/SportsList';  
import {TopThingsArray} from '../Data/TopList';  
import {TopTvShowsArray} from '../Data/TvShowsList';
import {VideoGamesArray} from '../Data/VideoGamesList';
import { Collapse } from '@material-ui/core';

function findInitialList(year, genre){
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

function findPrintedList(initialList, quantity, genre){
  const setUpList = [];
    switch(genre){
      case "movies":
            for(var i = 0; i < quantity; i++){
              setUpList.push(initialList[i]);
            }

            return setUpList;
            break;

        case "songs":
             for(var i = 0; i < quantity; i++){
               setUpList.push(initialList[i]);
             }

            return setUpList;
            break;

        case "sports":
            if(quantity == 3){

              for(var i = 0; i < initialList.length; i++){
                setUpList.push(initialList[i]);
              }

              return setUpList;
            }

            else if(quantity == 2){

              for(var i = 0; i < initialList.length; i++){
                if(i % 4 === 0  || i % 4 === 1){
                  setUpList.push(initialList[i]);
                }
              }

              return setUpList;
            }

            else{
          
              for(var i = 0; i < initialList.length; i++){
                if(i % 4 === 0){
                  setUpList.push(initialList[i]);
                }
              }

              return setUpList;
            }

            break;

        case "various":
             return initialList;
            
            break;

        case "shows":
            for(var i = 0; i < quantity; i++){
              setUpList.push(initialList[i]);
            }

            return setUpList;
            break;

        case "videogames":
          if(quantity == 2){
            return initialList;
          }

          else{
            setUpList.push(initialList[0]);
            return setUpList;
          }
            
            break;
  }
}


export class ListPrinter extends Component{

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
      }


    render(){
        const { values, handleChange } = this.props;
        const initialList = findInitialList(values.year,values.selectedGenre);
        const printedList = findPrintedList(initialList, values.quantity, values.selectedGenre); 
        
        switch(values.selectedGenre){
            case "movies":
                const movieList = printedList.map((movie) =>
                <li><FormControlLabel value={movie.link} control={<Radio />} label={movie.title} /> </li>
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
                  
                  <FormControl component="fieldset">
                  <FormLabel component="legend">Which one would you like to view.</FormLabel>
                  <RadioGroup aria-label="link" name="link1" onChange={handleChange('selectedLink')}>
                  <ol>{movieList}</ol>
                  </RadioGroup>
                  </FormControl>
      
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                  >Back</Button>

              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
              >Continue</Button>
      
                </Dialog>
              </>
            </MuiThemeProvider>
                );


            case "songs":
                const songList = printedList.map((song) => 
                <li><FormControlLabel value={song.link} control={<Radio />} label={song.artist + " - " + song.title} /> </li>
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
                  
                  <FormControl component="fieldset">
                  <FormLabel component="legend">Which one would you like to view.</FormLabel>
                  <RadioGroup aria-label="link" name="link1" onChange={handleChange('selectedLink')}>
                  <ul>{songList}</ul>
                  </RadioGroup>
                  </FormControl>
      
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                  >Back</Button>

              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
              >Continue</Button>
      
                </Dialog>
              </>
            </MuiThemeProvider>
                );


            case "sports":
                const sportsList = printedList.map((sport) => 
                <li><FormControlLabel value={sport.link} control={<Radio />} label={sport.category + sport.title} /> </li>
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
                  
                  <FormControl component="fieldset">
                  <FormLabel component="legend">Which one would you like to view.</FormLabel>
                  <RadioGroup aria-label="link" name="link1" onChange={handleChange('selectedLink')}>
                  <ul>{sportsList}</ul>
                  </RadioGroup>
                  </FormControl>
      
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                  >Back</Button>

              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
              >Continue</Button>
      
                </Dialog>
              </>
            </MuiThemeProvider>
                );



            case "various":
                const variousList = printedList.map((thing) => 
                <li><FormControlLabel value={thing.link} control={<Radio />} label={thing.category + ": " + thing.title} /> </li>
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
                  
                  <FormControl component="fieldset">
                  <FormLabel component="legend">Which one would you like to view.</FormLabel>
                  <RadioGroup aria-label="link" name="link1" onChange={handleChange('selectedLink')}>
                  <ul>{variousList}</ul>
                  </RadioGroup>
                  </FormControl>

                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                  >Back</Button>

              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
              >Continue</Button>
      
                </Dialog>
              </>
            </MuiThemeProvider>
                );



            case "shows":
                const showsList = printedList.map((show) => 
                <li><FormControlLabel value={show.link} control={<Radio />} label={show.title} /> </li>
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
                  
                  <FormControl component="fieldset">
                  <FormLabel component="legend">Which one would you like to view.</FormLabel>
                  <RadioGroup aria-label="link" name="link1" onChange={handleChange('selectedLink')}>
                  <ol>{showsList}</ol>
                  </RadioGroup>
                  </FormControl>
      
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                  >Back</Button>

                <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
              >Continue</Button>
      
                </Dialog>
              </>
            </MuiThemeProvider>
                );


            case "videogames":
                const videoGamesList =  printedList.map((game) => 
                <li><FormControlLabel value={game.link} control={<Radio />} label={game.title} /></li>
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
                  
                  <FormControl component="fieldset">
                  <FormLabel component="legend">Which one would you like to view.</FormLabel>
                  <RadioGroup aria-label="link" name="link1" onChange={handleChange('selectedLink')}>
                  <ul>{videoGamesList}</ul>
                  </RadioGroup>
                  </FormControl>
      
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                  >Back</Button>

              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
              >Continue</Button>
      
                </Dialog>
              </>
            </MuiThemeProvider>
                );



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