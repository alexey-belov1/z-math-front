import {Component, OnInit} from '@angular/core';

export interface Item {
    router: string;
    src: string;
    text: string;
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

    items: Item[] = [
        {
            router: '/',
            src: 'content/image/icon/home.png',
            text: 'Главная'
        },
        {
            router: '/tasks',
            src: 'content/image/icon/tasks.png',
            text: 'Список задач'
        },
        {
            router: '/rules',
            src: 'content/image/icon/rules.png',
            text: 'Правила <br> оформления <br>заказов'
        },
        {
            router: '/new-task',
            src: 'content/image/icon/new-task.png',
            text: 'Оформить заказ'
        },
        {
            router: '/reviews',
            src: 'content/image/icon/reviews.png',
            text: 'Отзывы'
        },
        {
            router: '/contacts',
            src: 'content/image/icon/contacts.png',
            text: 'Контакты'
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
