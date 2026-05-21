import { BaseSteps } from "./BaseSteps";
import { Page } from "@playwright/test";
import { MenuPrincipalPage } from "../pages/MenuPrincipalPage";

export class MenuPrincipalSteps extends BaseSteps {
    protected menuPrincipalPage: MenuPrincipalPage;
    
    constructor(page: Page) {
        super(page);
        this.menuPrincipalPage = new MenuPrincipalPage(page);
    }

    async ValidarMenuPrincipal(): Promise<void>{
this.menuPrincipalPage.validarElementoTitulo();
    }
}