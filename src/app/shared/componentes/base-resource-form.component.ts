import { OnInit, AfterContentChecked, Injector, Directive } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { BaseResourceModel } from "../../shared/componentes/models/base-resource.models"

import toastr from "toastr";

@Directive()
export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit, AfterContentChecked{
  
  currentAction: string;
  resourceForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;

  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;

  constructor(
    protected injector: Injector,
    public resource: T,
 
    protected jsonDataToResourceFn: (jsonData) => T
  ) { 
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.formBuilder = this.injector.get(FormBuilder);
  }

  ngOnInit() {
    this.setCurrentAction();
    this.buildResourceForm();
   
  }

  ngAfterContentChecked(){
    this.setPageTitle();
  }

 

  // PRIVATE METHODS

  protected setCurrentAction() {
    if(this.route.snapshot.url[0].path == "new")
      this.currentAction = "new"
    else
      this.currentAction = "edit"
  }




  protected setPageTitle() {
    if (this.currentAction == 'new')
      this.pageTitle = this.creationPageTitle();
    else{
      this.pageTitle = this.editionPageTitle();
    }
  }

  protected creationPageTitle(): string{
    return "Novo"
  }

  protected editionPageTitle(): string{
    return "Edição"
  }


 

  
  protected actionsForSuccess(resource: T){
    toastr.success("Solicitação processada com sucesso!");

    const baseComponentPath: string = this.route.snapshot.parent.url[0].path;

    // redirect/reload component page
    this.router.navigateByUrl(baseComponentPath, {skipLocationChange: true}).then(
      () => this.router.navigate([baseComponentPath, resource.id, "edit"])
    )
  }


  protected actionsForError(error){
    toastr.error("Ocorreu um erro ao processar a sua solicitação!");

    this.submittingForm = false;

    if(error.status === 422)
      this.serverErrorMessages = JSON.parse(error._body).errors;
    else
      this.serverErrorMessages = ["Falha na comunicação com o servidor. Por favor, tente mais tarde."]
  }


  protected abstract buildResourceForm(): void;
}
