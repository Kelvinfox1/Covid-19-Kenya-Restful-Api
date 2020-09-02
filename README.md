# Covid-19-Kenya-Rest-Api
A volunteer-driven, crowd-sourced database for COVID-19 stats & patient tracing in Kenya.

[Source Code on Github](https://github.com/Kelvinfox1/Covid-19-Kenya-Rest-Api)

# API Documentation
Detailed documentation regarding the API end-point can be found here

### JSON Endpoints

| Status        | Data                                                                         | URL                                                     |
| ------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------- |
| :green_heart: | Cummulative daily cases till date                                            | <https://api.covid19Kenya.org/>                         |
| :green_heart: | Cummulative daily cases County level                                         | <https://api.covid19Kenya.org/>                         |
| :green_heart: | Cummulative daily Cases Constituency level                                   | <https://api.covid19Kenya.org/>                         |


### CSV

Sometimes, having files in a spreadsheet format is more useful for analysts and scientists. We have provided the files as downloadable csv files at the following location.

| Data                 | URL                                               |
| -------------------- | ------------------------------------------------- |
| Google sheets in CSV | <https://docs.google.com/spreadsheets/d/1QbTHJx-ElzFBbpjMhwjEWdkM8UVUo_kEKcBdrHYsGJA/edit?usp=sharing> |

> :rocket: Quick example : Apply the formula `=IMPORTDATA("https://api.covid19Kenya.org/csv/latest/County.csv")` in A1 cell of a Google Sheets to get the County data for analysis :)

## How to work with the data

- Data in this repository is generated from Google Sheets
- Volunteers collect data from trusted sources and update the sheet main source is the Ministry of Health
- Github Actions periodically fetch the data from the sheet and upload static json and csv files into `gh-pages` branch of this repo


## License

License for Code (Consider this as everything in the `master` branch) : MIT License (Detailed in LICENSE_CODE.txt)  

## Citation 

You can cite us in your work in the following format  

```tex
@misc{Kelvinfox1,
  author = {Kelvin Ngure},
  title = {Covid-19-Restfull-Api},
  year = {2013},
  publisher = {GitHub}
}
```

## Contributing

- Contributions to new data formats and making the data fetch process more efficient are welcome.
- Please create a github issue and discuss your idea before working on the same.
- Report issues regarding 



## Team Projects Using This API

- [COVID-19 KENYA TRACKER](https://www.covid19Kenya.org/) (Main Dashboard)

..................................made with :heart: by Kelvin Ngure
