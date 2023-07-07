import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {atLeastOne} from '../../../shared/validators/atLeastOne';
import {ToggleBtnComponent} from '../../../shared/components/forms/toggle/toggle-btn.component';
import {FieldsList} from './settings';
import {MessagingService} from '../../../services/messaging/messaging.service';
import {LoadingService} from '../../../services/loading/loading.service';
import {RandomUsersTableInterface, UsersTableBodyInterface} from '../../../../interfaces/randomUsersTable.interface';
import {environment} from '../../../../environments/environment';
import {Faker, Sex} from '@faker-js/faker';
import {writeContents} from "../../../shared/functions/fileWriter";
import {Subscription} from "rxjs";
import {ToolsComponentInterface} from "../../../../interfaces/toolsComponent.interface";
import {dataSubscription} from '../../../shared/functions/dataSubscription'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy, ToolsComponentInterface {

  dataSubscription?: Subscription
  title?: string
  icon?: string

  usersTable: RandomUsersTableInterface = {
    heading: [],
    body: []
  }

  configForm = new FormGroup({
    amount: new FormControl(10, [
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

  constructor(private message: MessagingService, private loading: LoadingService, private route: ActivatedRoute) {
  }

  generateUsers() {
    this.loading.isLoading.next(true)
    this.usersTable.heading = []
    this.usersTable.body = []
    import('@faker-js/faker').then((faker) => {
      this.fillHeading()
      this.fillBody(faker.faker)
      this.loading.isLoading.next(false)
    }).catch(err => this.message.sendMessage({
      heading: err,
      msg: err.message,
      type: 'error'
    }))
  }

  saveXLSX() {
    this.loading.isLoading.next(true)
    import('xlsx').then((xlsx) => {
      if (this.usersTable.body) {
        const worksheet = xlsx.utils.json_to_sheet(this.usersTable.body);
        const workbook = {Sheets: {data: worksheet}, SheetNames: ['data']};
        const excelBuffer: Blob = xlsx.write(workbook, {bookType: 'xlsx', type: 'array'});
        const EXEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
        const EXCEL_EXTENSION = '.xlsx';
        writeContents(excelBuffer, 'random_users', EXEL_TYPE, EXCEL_EXTENSION)
        this.loading.isLoading.next(false)
        this.message.sendMessage({
          heading: 'Exported:',
          msg: `Exported to .XLSX`,
          type: 'info'
        })
      } else {
        this.message.sendMessage({
          heading: 'No data to export',
          type: 'info'
        })
      }
    }).catch((err) => this.message.sendMessage({
      heading: err.message,
      type: 'error'
    }))
  }

  saveJSON() {
    if (this.usersTable.body) {
      this.loading.isLoading.next(true)
      const JSON_TYPE = 'application/json;charset=UTF-8'
      const JSON_EXTENSION = '.json'
      const blob = new Blob([new TextEncoder().encode(JSON.stringify(this.usersTable.body, null, 4))], {
        type: "application/json;charset=utf-8"
      })
      writeContents(blob, 'random_users', JSON_TYPE, JSON_EXTENSION)
      this.loading.isLoading.next(false)
      this.message.sendMessage({
        heading: 'Exported:',
        msg: `Exported to JSON`,
        type: 'info'
      })
    } else {
      this.message.sendMessage({
        heading: 'No data to export',
        type: 'info'
      })
    }

  }


  fillBody(fakeGen: Faker) {
    const length = this.configForm.controls.amount.value ? this.configForm.controls.amount.value : 0
    const settingsGroup = this.configForm.controls.settings.controls
    for (let i = 0; i < length; i++) {
      const user: UsersTableBodyInterface = {}
      const userSex = fakeGen.person.sex() as Sex
      if (settingsGroup.firstName.value) user.firstName = fakeGen.person.firstName(userSex)
      if (settingsGroup.lastName.value) user.lastName = fakeGen.person.lastName(userSex)
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

  ngOnInit() {
    this.dataSubscription = dataSubscription(this, this.route, this.message)
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe()
  }
}
