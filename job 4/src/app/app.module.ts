import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from
'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserProvider } from '../providers/user/user';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { IonicStorageModule }from '@ionic/storage';
import { AboutPage } from '../pages/about/about';
import { MenuPage } from '../pages/menu/menu';
import { DatabaseProvider } from
'../providers/database/database';
import { ProductProvider } from
'../providers/product/product';
import { CategoryProvider } from
'../providers/category/category';
import { SQLite } from '@ionic-native/sqlite';
import { EditProductPage } from '../pages/edit-product/edit-product';
import { CategoryPage } from '../pages/category/category';
import { EditCategoryPage } from '../pages/edit-category/edit-category';
import { FavoritePage } from '../pages/favorite/favorite';
import { FavoriteProvider } from
'../providers/favorite/favorite';
@NgModule({
 declarations: [
 MyApp,
 HomePage,
 LoginPage,
 RegisterPage,
 AboutPage,
 MenuPage,
 EditProductPage,
 CategoryPage,
 EditCategoryPage,
 FavoritePage
 ],
 imports: [
 BrowserModule,
 IonicModule.forRoot(MyApp),
 IonicStorageModule.forRoot()
 ],
 bootstrap: [IonicApp],
 entryComponents: [
 MyApp,
 HomePage,
 LoginPage,
 RegisterPage,
 AboutPage,
 MenuPage,
 EditProductPage,
 CategoryPage,
 EditCategoryPage,
 FavoritePage
 ],
 providers: [
 StatusBar,
 SplashScreen,
 {provide: ErrorHandler, useClass: IonicErrorHandler},
 SQLite,
 UserProvider,
 DatabaseProvider,
 ProductProvider,
 CategoryProvider,
 FavoriteProvider
 ]
})
export class AppModule {}
