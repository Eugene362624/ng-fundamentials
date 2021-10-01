import { Component, Input } from "@angular/core";


@Component({
    styles: [`
    `],
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4>
            <ng-content select="[well-title]"></ng-content>
        </h4>
        <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
    `,
    selector: 'collapsible-well'
})

export class CollapsibleWellComponent{
    visible: boolean;

    toggleContent() {
        this.visible = !this.visible
    }
}