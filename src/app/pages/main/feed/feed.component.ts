import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../service/session/session.service';
import { UserCredentials } from '../../../dto/responses/userCredentials.dto';
import { ButtonsModule } from '../../../components/buttons/buttons.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    ButtonsModule
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent implements OnInit{

  user:UserCredentials|null = null

  constructor(
    private sessionService:SessionService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.user = this.sessionService.loadUserSession()
  }

  logOut = () => {
    this.sessionService.deleteUserSession()
    this.router.navigate([""])
  }
}
