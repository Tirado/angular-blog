import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-post-list-item-component',
    templateUrl: './post-list-item-component.component.html',
    styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

    @Input() title: string;
    @Input() content: string;
    @Input() loveIts: number;
    @Input() createdAt: Date;

    constructor() {
    }

    ngOnInit() {
    }

    onLoveIt() {
        this.loveIts += 1;
    }

    onDontLoveIt() {
        this.loveIts -= 1;
    }
}
