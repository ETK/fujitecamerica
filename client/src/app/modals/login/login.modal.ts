import {
    Component
} from '@angular/core';
import {
    MdDialogRef
} from '@angular/material';
import {
    BaseModal
} from 'app/core';
import {
    User
} from 'app/models';
import {
    AuthenticationService,
    StringService
} from 'app/services';

@Component({
    selector: 'login',
    templateUrl: 'login.modal.html'
})
export class LoginModal extends BaseModal {

    public password: string = '';
    public username: string = '';

    private _errorMessage: string = '';
    private _showRegForm: boolean = false;

    private get _canLogin(): boolean {
        return (!this.isNullOrEmpty(this.username) && !this.isNullOrEmpty(this.password));
    }

    constructor(
        private loginModal: MdDialogRef<LoginModal>,
        private authService: AuthenticationService
    ) {
        super('LoginModal');
    }

    private _cancel(user: User): void {
        this.username = '';
        this.password = '';
        this.loginModal.close(user);
    }
    private _login(): void {
        if (this._canLogin) {
            this.authService.login(this.username, this.password, (user) => {
                this._cancel(user);
            }, (e) => {
                this._errorMessage = e;
            });
        }
    }
    private _register(): void {
        // TODO: add registration code
        return;
    }
    private _cancelRegistration(): void {
        this._showRegForm = false;
    }
}
