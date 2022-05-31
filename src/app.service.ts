import { MailService } from 'src/mail/mail.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private mailService: MailService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async sendEmail() {
    await this.mailService.sendEmailConfirmation();
    return { ok: true };
  }
}
