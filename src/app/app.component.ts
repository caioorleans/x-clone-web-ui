import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthenticationModule } from './pages/authentication-page/authentication.module';
import { HttpClientModule } from '@angular/common/http';
import { SessionService } from './service/session/session.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AuthenticationModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'x-clone';

  constructor(
    private sessionService:SessionService,
    private router:Router
  ){}

  ngOnInit(): void {
    initFlowbite();
    if(this.sessionService.loadUserSession())
      this.router.navigate(["feed"])
  }
}
