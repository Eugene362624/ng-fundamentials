import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "..";


@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions:ISession[] | undefined
    @Input() filterBy: string
    @Input() sortBy: 'name' | 'votes'
    visibleSessions: ISession[] | undefined = []

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
            this.sortBy === 'name' ? this.visibleSessions?.sort(sortByNameAsc) : this.visibleSessions?.sort(sortByVotesDesc) 
        }
    }

    filterSessions(filter: string) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions?.slice(0)
        } else {
            this.visibleSessions = this.sessions?.filter(session => {return session.level.toLocaleLowerCase() === filter})

        }
    }
}

const sortByNameAsc = (s1: ISession, s2: ISession) => {
    if(s1.name > s2.name) return 1
    else if (s1.name === s2.name) return 0
    else return -1
}

const sortByVotesDesc = (s1: ISession, s2: ISession) => {
    return s2.voters.length - s1.voters.length
}