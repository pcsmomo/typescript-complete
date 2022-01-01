import './UserEdit.styles.css';
import { View } from './View';
import { User, UserProps } from '../models/User';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show-wrapper',
      userForm: '.user-form-wrapper',
    };
  }

  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }

  template(): string {
    return `
      <div class="user-edit">
        <div class="user-show-wrapper"></div>
        <div class="user-form-wrapper"></div>
      </div>
    `;
  }
}
