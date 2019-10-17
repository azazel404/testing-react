import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountriesList from './countries.json';

class Search extends Component {
  state = {
    search: ''
  };

  
  onChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filterCountries = CountriesList.filter(item => {
      return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    console.log(filterCountries)
    return (
      <div>
        <div className='container'>
          <div className='row mt-4'>
            <div className='col-md-6'>
              <label htmlFor="search">Search</label>
            </div>
            <div className='col-md-6'>
              <input className='form-control' icon='search' id="search" placeholder="Search..." onChange={this.onChange} />
            </div>
          </div>
          <div className='row mt-4'>
            {filterCountries.map((country,idx) => {
              return(
                <div className='col-md-12' key={idx}>
                  <Card className='mt-4'>
                    <CardContent>
                      <Typography color='textSecondary' gutterBottom>
                        {country.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
