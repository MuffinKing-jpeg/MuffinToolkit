import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {atLeastOne} from '../../../shared/validators/atLeastOne';
import {ToggleBtnComponent} from '../../../shared/components/forms/toggle/toggle-btn.component';
import {FieldsList} from './settings';
import {MessagingService} from '../../../services/messaging/messaging.service';
import {LoadingService} from '../../../services/loading.service';
import {RandomUsersTableInterface, UsersTableBodyInterface} from '../../../../interfaces/randomUsersTable.interface';
import {environment} from '../../../../environments/environment';
import {Faker} from '@faker-js/faker';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  usersTable: RandomUsersTableInterface = {
    heading: [],
    body: []
  }


  configForm = new FormGroup({
    amount: new FormControl(1, [
      Validators.required
    ]),
    settings: new FormGroup({
      firstName: new FormControl(true),
      lastName: new FormControl(true),
      number: new FormControl(true),
      email: new FormControl(true),
      uuid: new FormControl(false)
    }, [atLeastOne])
  })
  protected readonly ToggleBtnComponent = ToggleBtnComponent;
  protected readonly FieldsList = FieldsList;
  protected readonly environment = environment;
  protected readonly Object = Object;

  constructor(private messages: MessagingService, private loading: LoadingService) {
  }

  generateUsers() {
    this.loading.isLoading.next(true)
    this.usersTable.heading = []
    this.usersTable.body = []
    import('@faker-js/faker').then((faker) => {
      this.fillHeading()
      this.fillBody(faker.faker)
      this.loading.isLoading.next(false)
    }).catch(err => this.messages.sendMessage({
      heading: err,
      msg: err.message,
      type: 'error'
    }))
  }

  fillBody(fakeGen: Faker) {
    const length = this.configForm.controls.amount.value ? this.configForm.controls.amount.value : 0
    const settingsGroup = this.configForm.controls.settings.controls
    for (let i = 0; i < length; i++) {
      const user: UsersTableBodyInterface = {}
      if (settingsGroup.firstName.value) user.firstName = fakeGen.person.firstName()
      if (settingsGroup.lastName.value) user.lastName = fakeGen.person.lastName()
      if (settingsGroup.number.value) user.number = fakeGen.phone.number('(###) ###-##-##')
      if (settingsGroup.email.value) user.email = fakeGen.internet.email({
        firstName: user.firstName,
        lastName: user.lastName
      })
      if (settingsGroup.uuid.value) user.uuid = fakeGen.string.uuid()
      this.usersTable.body.push(user)
    }
  }

  fillHeading() {
    const settingsGroup = this.configForm.controls.settings.controls
    if (settingsGroup.firstName.value) this.usersTable.heading.push($localize`First name`)
    if (settingsGroup.lastName.value) this.usersTable.heading.push($localize`Last name`)
    if (settingsGroup.number.value) this.usersTable.heading.push($localize`Number`)
    if (settingsGroup.email.value) this.usersTable.heading.push($localize`Email`)
    if (settingsGroup.uuid.value) this.usersTable.heading.push($localize`UUID`)
  }
}
