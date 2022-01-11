import { environment } from '@env';

interface Scripts {
  name: string;
  src: string;
}
export const ScriptStore: Scripts[] = [
  { name: 'sdk', src: '../../assets/js/mercadopago.js' },
  // { name: 'recaptcha', src: `https://www.google.com/recaptcha/api.js?render=${environment.captchaSiteKey}&onload=ngRecaptcha3Loaded` }
];
