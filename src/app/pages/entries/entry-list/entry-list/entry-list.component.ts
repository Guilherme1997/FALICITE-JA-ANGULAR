import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { WebApiService } from '../../../service/web.api.service';

import { Entry } from '../../shared/entry.model';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: []
})
export class EntryListComponent implements OnInit {

  constructor(private entryService: WebApiService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getEntry();
  }

  public entries: Entry[] = [];

  getEntry() {
    this.entryService.getAll().subscribe(
      response => {
        this.entries = response;
        console.log(response)
      },
      error => alert('Erro ao carregar a lista')
    );
  }

  deleteEntry(entry: Entry) {
    const confirmDelet = confirm("Deseja realmente deletar este item?");
    if (confirmDelet === true)
      this.entryService.delete(entry.id).subscribe(
        () => {
        this.entries = this.entries.filter(element => element != entry),
          this.toastr.success('Categoria excluida', 'Sucesso!')
        }
      );
    else return
  }

}
