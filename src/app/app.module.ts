import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { HarrypotterComponent } from './harrypotter/harrypotter.component';
import { JamesbondComponent } from './jamesbond/jamesbond.component';
import { JurassicworldComponent } from './jurassicworld/jurassicworld.component';
import { MissionimpossibleComponent } from './missionimpossible/missionimpossible.component';
import { JohnwickComponent } from './johnwick/johnwick.component';
import { PiratesofthecaribbeanComponent } from './piratesofthecaribbean/piratesofthecaribbean.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AdditemsComponent } from './additems/additems.component';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';
import { HarrypotterStoreComponent } from './harrypotter-store/harrypotter-store.component';
import { JamesbondStoreComponent } from './jamesbond-store/jamesbond-store.component';
import { JohnwickStoreComponent } from './johnwick-store/johnwick-store.component';
import { JurassicworldStoreComponent } from './jurassicworld-store/jurassicworld-store.component';
import { MissionimpossibleStoreComponent } from './missionimpossible-store/missionimpossible-store.component';
import { PiratesofthecaribbeanStoreComponent } from './piratesofthecaribbean-store/piratesofthecaribbean-store.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    HarrypotterComponent,
    JamesbondComponent,
    JurassicworldComponent,
    MissionimpossibleComponent,
    JohnwickComponent,
    PiratesofthecaribbeanComponent,
    StoreComponent,
    LoginComponent,
    SignupComponent,
    AdditemsComponent,
    AdminComponent,
    ProductComponent,
    HarrypotterStoreComponent,
    JamesbondStoreComponent,
    JohnwickStoreComponent,
    JurassicworldStoreComponent,
    MissionimpossibleStoreComponent,
    PiratesofthecaribbeanStoreComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
