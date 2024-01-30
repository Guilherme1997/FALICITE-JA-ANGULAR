import { Component } from '@angular/core';

import { BaseResourceListComponent } from "../../../shared/componentes/service/base-resource-list.component";

import { Entry } from "../shared/entry.model";
import { WebApiService } from "../../service/web.api.service";
import { MESSAGE_PAY_ANALYSIS } from  '../shared/message.pay.const';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent extends BaseResourceListComponent<Entry> {

  public entrySelected :Entry;
  public message: string;

  public showAlert: boolean = false;

  constructor(private entryService: WebApiService) { 
    super(entryService);
  }

  public getEntryForPay(entry :Entry){
    this.entrySelected = entry;
  }

  
  get descriptionModalForPay(): string {
    return  this.entrySelected == null ? null : MESSAGE_PAY_ANALYSIS
  }

  get getTitleModal(): string {
    return  this.entrySelected == null ? null : this.entrySelected.name + ' / ' + "R$" + this.entrySelected.amount;
  }

  public getTicked(){
      this.message ="Prezado Usuário. Informamos que seu pagamento para transação está atualmente em fase de análise. Estamos trabalhando para processar a transação o mais rápido possível. Agradecemos sua compreensão.";
 
    
    }

  public getResponse(evento:string){
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 7000);
   this.message = evento;
  }


}
