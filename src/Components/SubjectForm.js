import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { render } from '@testing-library/react';

export class SubjectForm extends React.Component {

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

    if(values.year >= 1975){
      return (
        <MuiThemeProvider>
          <>
            <Dialog
              open
              fullWidth
              maxWidth='sm'
            >
              <AppBar />
              
              <FormControl component="fieldset">
              <FormLabel component="legend">What would you like to view.</FormLabel>
              <RadioGroup aria-label="genre" name="genre1" onChange={handleChange('selectedGenre')}>
              <FormControlLabel value="movies" control={<Radio />} label="Top Twenty Movies" />
              <FormControlLabel value="songs" control={<Radio />} label="Billboard Top Twenty Year End Songs" />
              <FormControlLabel value="sports" control={<Radio />} label="Sports Champions" />
              <FormControlLabel value="various" control={<Radio />} label="Various #1 Things" />
              <FormControlLabel value="shows" control={<Radio />} label="Top Twenty TV Shows" />
              <FormControlLabel value="videogames" control={<Radio />} label="Most Popular Video Games" />
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
    }

    else if(values.year < 1975 && values.year >= 1971) {
      return (
        <MuiThemeProvider>
          <>
            <Dialog
              open
              fullWidth
              maxWidth='sm'
            >
              <AppBar />
              
              <FormControl component="fieldset">
              <FormLabel component="legend">What would you like to view.</FormLabel>
              <RadioGroup aria-label="genre" name="genre1" onChange={handleChange('selectedGenre')}>
              <FormControlLabel value="movies" disabled control={<Radio />} label="Top Twenty Movies" />
              <FormControlLabel value="songs" control={<Radio />} label="Billboard Top Twenty Year End Songs" />
              <FormControlLabel value="sports" control={<Radio />} label="Sports Champions" />
              <FormControlLabel value="various" control={<Radio />} label="Various #1 Things" />
              <FormControlLabel value="shows" control={<Radio />} label="Top Twenty TV Shows" />
              <FormControlLabel value="videogames" control={<Radio />} label="Most Popular Video Games" />
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
    }

    else if(values.year < 1971  && values.year >= 1951){
      return (
        <MuiThemeProvider>
          <>
            <Dialog
              open
              fullWidth
              maxWidth='sm'
            >
              <AppBar />
              
              <FormControl component="fieldset">
              <FormLabel component="legend">What would you like to view.</FormLabel>
              <RadioGroup aria-label="genre" name="genre1" onChange={handleChange('selectedGenre')}>
              <FormControlLabel value="movies" disabled control={<Radio />} label="Top Twenty Movies" />
              <FormControlLabel value="songs" control={<Radio />} label="Billboard Top Twenty Year End Songs" />
              <FormControlLabel value="sports" control={<Radio />} label="Sports Champions" />
              <FormControlLabel value="various" control={<Radio />} label="Various #1 Things" />
              <FormControlLabel value="shows" control={<Radio />} label="Top Twenty TV Shows" />
              <FormControlLabel value="videogames" disabled control={<Radio />} label="Most Popular Video Games" />
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
    }

    else {
      return (
        <MuiThemeProvider>
          <>
            <Dialog
              open
              fullWidth
              maxWidth='sm'
            >
              <AppBar />
              
              <FormControl component="fieldset">
              <FormLabel component="legend">What would you like to view.</FormLabel>
              <RadioGroup aria-label="genre" name="genre1" onChange={handleChange('selectedGenre')}>
              <FormControlLabel value="movies" disabled control={<Radio />} label="Top Twenty Movies" />
              <FormControlLabel value="songs" control={<Radio />} label="Billboard Top Twenty Year End Songs" />
              <FormControlLabel value="sports" control={<Radio />} label="Sports Champions" />
              <FormControlLabel value="various" disabled control={<Radio />} label="Various #1 Things" />
              <FormControlLabel value="shows" control={<Radio />} label="Top Twenty TV Shows" />
              <FormControlLabel value="videogames" disabled control={<Radio />} label="Most Popular Video Games" />
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
    }

    }
  }

export default SubjectForm;