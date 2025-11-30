import { Component } from '@angular/core';
import { NenodexFrame } from '../../nenodex-frame/nenodex-frame';
import { NenodexList } from '../../nenodex-list/nenodex-list';
import { UserNenodexList } from '../../user-nenodex-list/user-nenodex-list';
import { CommonModule } from '@angular/common';
import { AddNenomonComponent } from "../../add-nenomon/add-nenomon";
import { DeleteNenomonComponent } from "../../delete-nenomon/delete-nenomon";
import { NenomonDetailsComponent } from "../../nenomon-details/nenomon-details";

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule,
    NenodexFrame,
    NenodexList,
    UserNenodexList,
    AddNenomonComponent,
    DeleteNenomonComponent,
    NenomonDetailsComponent
  ],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {}
