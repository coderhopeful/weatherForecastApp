
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service'
import { FormsModule } from '@angular/forms';
import { WeatherData } from './models/weather.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }
cityName:string = 'Delhi';
  weatherData?: WeatherData;
  forecastData?:any;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.getForecast(this.cityName);
    this.cityName='';
  }
onSubmit(){
this.getWeatherData(this.cityName);
this.getForecast(this.cityName);
this.cityName='';
}

private getWeatherData(cityName:string){
  this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {

          this.weatherData = response;
          console.log(response);

        }
      });

}
private getForecast(cityName:string){
  this.weatherService.getForecast(cityName)
  .subscribe({
    next: (resp) => {

      this.forecastData = resp;
      console.log(resp);

    }
  });
}


}
