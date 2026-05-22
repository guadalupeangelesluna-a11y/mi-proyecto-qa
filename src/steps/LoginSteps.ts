import { BaseSteps } from "./BaseSteps";
import { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";


export class LoginSteps extends BaseSteps {
    protected loginPage: LoginPage;

    constructor(page: Page) {
        super(page);
        this.loginPage = new LoginPage(page);
    }
    async IniciarSesion(username: string, password: string) {
        
        await this.loginPage.escribirUsuario(username);
        await this.loginPage.escribirPassword(password);
        await this.loginPage.hacerClickIngresar();
        
    }
}