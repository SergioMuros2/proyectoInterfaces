import { Component } from '@angular/core';
import { NenodexFrame } from '../../nenodex-frame/nenodex-frame';
import { NenodexList } from '../../nenodex-list/nenodex-list';
import { UserNenodexList } from '../../user-nenodex-list/user-nenodex-list';
import { CommonModule } from '@angular/common';
import { AddNenomonComponent } from "../../add-nenomon/add-nenomon";

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, NenodexFrame, NenodexList, UserNenodexList, AddNenomonComponent],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {}
