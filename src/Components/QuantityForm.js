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
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="6">6</MenuItem>
                        <MenuItem value="7">7</MenuItem>
                        <MenuItem value="8">8</MenuItem>
                        <MenuItem value="9">9</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="11">11</MenuItem>
                        <MenuItem value="12">12</MenuItem>
                        <MenuItem value="13">13</MenuItem>
                        <MenuItem value="14">14</MenuItem>
                        <MenuItem value="15">15</MenuItem>
                        <MenuItem value="16">16</MenuItem>
                        <MenuItem value="17">17</MenuItem>
                        <MenuItem value="18">18</MenuItem>
                        <MenuItem value="19">19</MenuItem>
                        <MenuItem value="20">20</MenuItem>
                        <MenuItem value="21">21</MenuItem>
                        <MenuItem value="22">22</MenuItem>
                        <MenuItem value="23">23</MenuItem>
                        <MenuItem value="24">24</MenuItem>
                        <MenuItem value="25">25</MenuItem>
        
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
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="6">6</MenuItem>
                        <MenuItem value="7">7</MenuItem>
                        <MenuItem value="8">8</MenuItem>
                        <MenuItem value="9">9</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="11">11</MenuItem>
                        <MenuItem value="12">12</MenuItem>
                        <MenuItem value="13">13</MenuItem>
                        <MenuItem value="14">14</MenuItem>
                        <MenuItem value="15">15</MenuItem>
                        <MenuItem value="16">16</MenuItem>
                        <MenuItem value="17">17</MenuItem>
                        <MenuItem value="18">18</MenuItem>
                        <MenuItem value="19">19</MenuItem>
                        <MenuItem value="20">20</MenuItem>
                        <MenuItem value="21">21</MenuItem>
                        <MenuItem value="22">22</MenuItem>
                        <MenuItem value="23">23</MenuItem>
                        <MenuItem value="24">24</MenuItem>
                        <MenuItem value="25">25</MenuItem>
        
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
        
                        <InputLabel id="label">What sport do you want to see?</InputLabel>
                        <Select labelId="label" id="select" 
                        onChange={handleChange('quantity')} defaultValue={values.quantity}>
                        <MenuItem value="MLB">MLB</MenuItem>
                        <MenuItem value="NBA">NBA</MenuItem>
                        <MenuItem value="NFL">NFL</MenuItem>
                        <MenuItem value="NHL">NHL</MenuItem>
                        <MenuItem value="CFB">College Football</MenuItem>
                        <MenuItem value="CBB">College Basketball</MenuItem>
        
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
        
                        <InputLabel id="label">What would you like to view.</InputLabel>
                        <Select labelId="label" id="select" 
                        onChange={handleChange('quantity')} defaultValue={values.quantity}>
                        <MenuItem value="1">Display Five Categories</MenuItem>
        
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
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="6">6</MenuItem>
                        <MenuItem value="7">7</MenuItem>
                        <MenuItem value="8">8</MenuItem>
                        <MenuItem value="9">9</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="11">11</MenuItem>
                        <MenuItem value="12">12</MenuItem>
                        <MenuItem value="13">13</MenuItem>
                        <MenuItem value="14">14</MenuItem>
                        <MenuItem value="15">15</MenuItem>
                        <MenuItem value="16">16</MenuItem>
                        <MenuItem value="17">17</MenuItem>
                        <MenuItem value="18">18</MenuItem>
                        <MenuItem value="19">19</MenuItem>
                        <MenuItem value="20">20</MenuItem>
                        <MenuItem value="21">21</MenuItem>
                        <MenuItem value="22">22</MenuItem>
                        <MenuItem value="23">23</MenuItem>
                        <MenuItem value="24">24</MenuItem>
                        <MenuItem value="25">25</MenuItem>
        
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