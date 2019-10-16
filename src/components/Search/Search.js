import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountriesList from './countries.json';

class Search extends Component {
  state = {
    search: ''
  };

  retriveRenderCountry = country => {
    var code = country.code.toLowerCase();
    return (
      <React.Fragment>
        <div className='col-md-12'>
          <Card className='mt-4'>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                {country.name}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </React.Fragment>
    );
  };

  onChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filterCountries = CountriesList.filter(item => {
      return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    return (
      <div>
        <div className='container'>
          <div className='row mt-4'>
            <div className='col-md-12'>
              <input className='form-control' icon='search' onChange={this.onChange} />
            </div>
          </div>
          <div className='row mt-4'>
            {filterCountries.map(country => {
              return this.retriveRenderCountry(country);
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
