import { NumbineAdminComponent } from './demo/dell/Admin/components/numbine-admin/numbine-admin.component';
import { AccessPageComponent } from './demo/dell/Admin/pages/access-page/access-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './theme/shared/shared.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';

import { ToggleFullScreenDirective } from './theme/shared/full-screen/toggle-full-screen';

/* Menu Items */
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from './demo/dell/general-components/button/button.component';
import { TestComponent } from './demo/dell/general-components/test/test.component';
import { InputComponent } from './demo/dell/general-components/input/input.component';
import { IconComponent } from './demo/dell/general-components/icon/icon.component';
import { NumbineNavLeftComponent } from './demo/dell/general-components/numbineNavbar/numbine-nav-left/numbine-nav-left.component';
import { NumbineNavRightComponent } from './demo/dell/general-components/numbineNavbar/numbine-nav-right/numbine-nav-right.component';
import { NumbineNavbarComponent } from './demo/dell/general-components/numbine-navbar/numbine-navbar.component';
import { NumbineNavigationComponent } from './demo/dell/general-components/numbine-navigation/numbine-navigation.component';
import { NumbineNavContentComponent } from './demo/dell/general-components/numbineNavigation/numbine-nav-content/numbine-nav-content.component';
import { NumbineNavGroupComponent } from './demo/dell/general-components/numbineNavigation/numbineNavigation/numbine-nav-group/numbine-nav-group.component';
import { NumbineNavCollapseComponent } from './demo/dell/general-components/numbineNavigation/numbine-nav-collapse/numbine-nav-collapse.component';
import { NumbineNavItemComponent } from './demo/dell/general-components/numbineNavigation/numbine-nav-item/numbine-nav-item.component';
import { NumbineChartsComponent } from './demo/dell/general-components/numbine-charts/numbine-charts.component';
import { NumbineAlertComponent } from './demo/dell/general-components/numbine-alert/numbine-alert.component';
import { LogInComponent } from './demo/dell/generalScreens/log-in/log-in.component';
import { ProductSelectorComponent } from './demo/dell/configurator/components/product-selector/product-selector.component';
import { ProductReleaseMappingComponent } from './demo/dell/configurator/pages/product-release-mapping/product-release-mapping.component';
import { NewParamMappingComponent } from './demo/dell/configurator/pages/new-param-mapping/new-param-mapping.component';
import { TestConfigurationComponent } from './demo/dell/configurator/pages/test-configuration/test-configuration.component';
import { NumbineSelectBoxComponent } from './demo/dell/general-components/numbine-select-box/numbine-select-box.component';
import { NumbineButtonAlertComponent } from './demo/dell/general-components/numbine-button-alert/numbine-button-alert.component';
import { NumbineCheckBoxComponent } from './demo/dell/general-components/numbine-check-box/numbine-check-box.component';
import { HttpClientModule } from '@angular/common/http';
import { ReleasesComponent } from './demo/dell/configurator/pages/releases/releases.component';
import { NewReleaseComponent } from './demo/dell/configurator/pages/new-release/new-release.component';
import { UpdateReleaseComponent } from './demo/dell/configurator/pages/update-release/update-release.component';
import { NumbineTableComponent } from './demo/dell/general-components/numbine-table/numbine-table.component';
import { AppLoadingComponent } from './demo/dell/general-components/app-loading/app-loading.component';
import { NumbineActionsTableComponent } from './demo/dell/general-components/numbine-actions-table/numbine-actions-table.component'
import { ForgotPassComponent } from './demo/dell/generalScreens/log-in/forgot-pass/forgot-pass.component';
import { AddUserPageComponent } from './demo/dell/Admin/pages/add-user-page/add-user-page/add-user-page.component'
import { ParamSelectorComponent } from './demo/dell/configurator/components/param-selector/param-selector.component';
import { UserConfigGeneratorPageComponent } from './demo/dell/tester/user-config-generator-page/user-config-generator-page.component';
@NgModule({
  declarations: [
    NewReleaseComponent,
    UpdateReleaseComponent,
    ReleasesComponent,
    AppComponent,
    AdminComponent,
    AuthComponent,
    NavigationComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    ConfigurationComponent,
    ToggleFullScreenDirective,
    ButtonComponent,
    TestComponent,
    InputComponent,
    IconComponent,
    NumbineNavLeftComponent,
    NumbineNavRightComponent,
    NumbineNavbarComponent,
    NumbineNavigationComponent,
    NumbineNavContentComponent,
    NumbineNavGroupComponent,
    NumbineNavCollapseComponent,
    NumbineNavItemComponent,
    NumbineChartsComponent,
    NumbineAlertComponent,
    ProductSelectorComponent,
    NumbineTableComponent,
    LogInComponent,
    ProductReleaseMappingComponent,
    NewParamMappingComponent,
    AccessPageComponent,
    TestConfigurationComponent,
    NumbineSelectBoxComponent,
    NumbineButtonAlertComponent,
    NumbineCheckBoxComponent,
    NumbineAdminComponent,
    LogInComponent,
    AccessPageComponent,
    AppLoadingComponent,
    NumbineActionsTableComponent,
    ForgotPassComponent,
    AddUserPageComponent,
    ParamSelectorComponent,
    UserConfigGeneratorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    HttpClientModule,
    NgbTabsetModule
  ],
  providers: [NavigationItem],
  bootstrap: [AppComponent]
})
export class AppModule { }
