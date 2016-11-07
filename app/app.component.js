"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by andypax on 28/09/16.
 */
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<!-- Navigation -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n        </div>\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li>\n                    <a routerLink=\"/servicos\">Servi\u00E7os</a>\n                </li>\n                <li>\n                    <a routerLink=\"/sobre\">Sobre n\u00F3s</a>\n                </li>\n                <li>\n                    <a routerLink=\"/contato\">Contato</a>\n                </li>\n                <li>\n                    <a routerLink=\"/cadastro\" routerLinkActive=\"active\">Cadastre-se</a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container -->\n</nav>\n\n\n    <router-outlet></router-outlet>\n\n<!-- Footer -->\n<footer>\n    <div class=\"container\">\n        <div class=\"row\">\n            <br/>\n            <br/>\n            <br/>\n            <div class=\"span6\">Copyright &copy; 2016 Equipe PetTour: Anderson Nascimento - Joanna Maressith | Todos os direitos reservados<br/>\n\n            </div>\n            <div class=\"span6\">\n                <div class=\"social pull-right\">\n                    <a href=\"#\" target=\"blank_\"><img src=\"assets/img/Other-Mail-Metro-icon.png\" alt=\"\"></a> <!-- Criar p\u00E1gina de formul\u00E1rio de contato -->\n                    <a href=\"https://www.linkedin.com/\" target=\"blank_\"><img src=\"assets/img/linkedin-icon.png\" alt=\"\"></a>\n                    <a href=\"https://www.facebook.com/\" target=\"blank_\"><img src=\"assets/img/facebook-icon.png\" alt=\"\"></a>\n                    <a href=\"https://twitter.com/\" target=\"blank_\"><img src=\"assets/img/twitter-icon.png\" alt=\"\"></a>\n                    <a href=\"https://www.youtube.com/\" target=\"blank_\"><img src=\"assets/img/youtube-icon.png\" alt=\"\"></a>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>    \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map