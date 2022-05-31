import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  public async sendEmailConfirmation() {
    const url = 'http://localhost:3000/';

    await this.mailerService.sendMail({
      to: 'example@example.com',
      from: '"Company Name" <company@company.com>',
      subject: 'Please, confirm your email',
      template: 'confirmation',
      context: {
        name: 'Srinivasa Ramanujan',
        url,
      },
    });
  }
}
