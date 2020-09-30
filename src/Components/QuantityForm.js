import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export class QuantityForm extends React.Component {
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

        console.log(values.selectedGenre);

        switch(values.selectedGenre){
            case "movies":
                return(
                    <MuiThemeProvider>
                    <>
                      <Dialog
                        open
                        fullWidth
                        maxWidth='sm'
                      >
                        <AppBar />
        
                        <InputLabel id="label">How many do you want to see?</InputLabel>
                        <Select labelId="label" id="select" 
                        onChange={handleChange('quantity')} defaultValue={values.quantity}>
                        <MenuItem value="1">The Most Popular One</MenuItem>
                        <MenuItem value="5">The Top 5</MenuItem>
                        <MenuItem value="10">The Top 10</MenuItem>
                        <MenuItem value="15">The Top 15</MenuItem>
                        <MenuItem value="20">The Top 20</MenuItem>
        
                        </Select>
    
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
                break;

            case "songs":
                return(
                    <MuiThemeProvider>
                    <>
                      <Dialog
                        open
                        fullWidth
                        maxWidth='sm'
                      >
                        <AppBar />
        
                        <InputLabel id="label">How many do you want to see?</InputLabel>
                        <Select labelId="label" id="select" 
                        onChange={handleChange('quantity')} defaultValue={values.quantity}>
                        <MenuItem value="1">The Most Popular One</MenuItem>
                        <MenuItem value="5">The Top 5</MenuItem>
                        <MenuItem value="10">The Top 10</MenuItem>
                        <MenuItem value="15">The Top 15</MenuItem>
                        <MenuItem value="20">The Top 20</MenuItem>
        
                        </Select>
    
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
                break;

            case "sports":
                return(
                    <MuiThemeProvider>
                    <>
                      <Dialog
                        open
                        fullWidth
                        maxWidth='sm'
                      >
                        <AppBar />
        
                        <InputLabel id="label">Who do you want to see?</InputLabel>
                        <Select labelId="label" id="select" 
                        onChange={handleChange('quantity')} defaultValue={values.quantity}>
                        <MenuItem value="1">Championship Winners</MenuItem>
                        <MenuItem value="2">Champions and Finalists</MenuItem>
                        <MenuItem value="3">Champions, Finalists and Semi-Finalists</MenuItem>
        
                        </Select>
    
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
                break;

            case "various":
                return(
                    <MuiThemeProvider>
                    <>
                      <Dialog
                        open
                        fullWidth
                        maxWidth='sm'
                      >
                        <AppBar />
        
                        <InputLabel id="label">Please select a year.</InputLabel>
                        <Select labelId="label" id="select" 
                        onChange={handleChange('quantity')} defaultValue={values.quantity}>
                        <MenuItem value="1">Just go ahead</MenuItem>
        
                        </Select>
    
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
                break;

            case "shows":
                return(
                    <MuiThemeProvider>
                    <>
                      <Dialog
                        open
                        fullWidth
                        maxWidth='sm'
                      >
                        <AppBar />
        
                        <InputLabel id="label">How many do you want to see?</InputLabel>
                        <Select labelId="label" id="select" 
                        onChange={handleChange('quantity')} defaultValue={values.quantity}>
                        <MenuItem value="1">The Most Popular One</MenuItem>
                        <MenuItem value="5">The Top 5</MenuItem>
                        <MenuItem value="10">The Top 10</MenuItem>
                        <MenuItem value="15">The Top 15</MenuItem>
                        <MenuItem value="20">The Top 20</MenuItem>
        
                        </Select>
    
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
                break;

            case "videogames":
                return(
                    <MuiThemeProvider>
                    <>
                      <Dialog
                        open
                        fullWidth
                        maxWidth='sm'
                      >
                        <AppBar />
        
                        <InputLabel id="label">How many do you want to see?</InputLabel>
                        <Select labelId="label" id="select" 
                        onChange={handleChange('quantity')} defaultValue={values.quantity}>
                        <MenuItem value="1">The Most Popular Game</MenuItem>
                        <MenuItem value="2">Several Games</MenuItem>
        
                        </Select>
    
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
                );
                break;
        }
      }
}

export default QuantityForm