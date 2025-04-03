import { Component, OnInit } from '@angular/core';
import { MessageService, Message } from '../../services/message.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageDetailComponent } from '../message-detail/message-detail.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  standalone : true
})
export class MessagesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'content', 'receivedAt', 'actions'];
  messages: Message[] = [];

  constructor(private messageService: MessageService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(): void {
    this.messageService.getMessages().subscribe((data) => {
      this.messages = data;
    });
  }

  openDetails(message: Message): void {
    this.dialog.open(MessageDetailComponent, {
      width: '400px',
      data: message,
    });
  }
}
