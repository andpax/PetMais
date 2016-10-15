/**
 * Created by andypax on 28/09/16.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<!-- Navigation -->
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" routerLink="/home" routerLinkActive="active">Home</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li>
                    <a href="#">Serviços</a>
                </li>
                <li>
                    <a href="#">Sobre nós</a>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
                <li>
                    <a routerLink="/cadastro" routerLinkActive="active">Cadastre-se</a>
                </li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
</nav>


    <router-outlet></router-outlet>

<!-- Footer -->
<footer>
    <div class="container">
        <div class="row">
            <br/>
            <br/>
            <br/>
            <div class="span6">Copyright &copy; 2016 Equipe PetTour: Anderson Nascimento - Joanna Maressith | Todos os direitos reservados<br/>

            </div>
            <div class="span6">
                <div class="social pull-right">
                    <a href="#" target="blank_"><img src="http://icons.iconarchive.com/icons/dakirby309/windows-8-metro/48/Other-Mail-Metro-icon.png" alt=""></a> <!-- Criar página de formulário de contato -->
                    <a href="https://www.linkedin.com/" target="blank_"><img src="http://icons.iconarchive.com/icons/danleech/simple/48/linkedin-icon.png" alt=""></a>
                    <a href="https://www.facebook.com/" target="blank_"><img src="http://icons.iconarchive.com/icons/sicons/flat-shadow-social/48/facebook-icon.png" alt=""></a>
                    <a href="https://twitter.com/" target="blank_"><img src="http://icons.iconarchive.com/icons/danleech/simple/48/twitter-icon.png" alt=""></a>
                    <a href="https://www.youtube.com/" target="blank_"><img src="http://icons.iconarchive.com/icons/danleech/simple/48/youtube-icon.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</footer>    
    `
})
export class AppComponent { }
