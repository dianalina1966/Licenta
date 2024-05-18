import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent{
    collapsed = true;
    showDropdown: boolean = false;
    searchTerm: string ='';


    @Output() featureSelected= new EventEmitter<string>();
    @Output() search = new EventEmitter<string>();

    onSelect(feature: string){
        this.featureSelected.emit(feature);
    }
   
    
    toggleDropdown() {
        this.showDropdown = !this.showDropdown;
    }

    
    onSearch(){
        this.search.emit(this.searchTerm);
    }
}