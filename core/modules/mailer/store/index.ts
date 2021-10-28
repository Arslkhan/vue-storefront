import { Logger } from '@vue-storefront/core/lib/logger'
import MailItem from '../types/MailItem'
import { Module } from 'vuex'
import config from 'config'
import { processURLAddress } from '@vue-storefront/core/helpers'
import getApiEndpointUrl from '@vue-storefront/core/helpers/getApiEndpointUrl';
const GETSINGLESQM = 'https://costacoffee.w10.world/api/ext/mail-service/clear-cart';

export const mailerStore: Module<any, any> = {
  namespaced: true,
  actions: {
    async sendEmail (context, letter: MailItem) {
      try {
        const res = await fetch(
          processURLAddress(config.mailer.endpoint.send),
          {
            method: 'POST',
            mode: 'cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(letter)
          }
        )
        return res
      } catch (e) {
        Logger.error(e, 'mailer')()
        throw new Error(e)
      }
    },
    async clearCart (context, letter: MailItem) {
      try {
        const res = await fetch(
          `${GETSINGLESQM}`,
          {
            method: 'POST',
            mode: 'cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(letter)
          }
        )
        return res
      } catch (e) {
        Logger.error(e, 'mailer')()
        throw new Error(e)
      }
    }
  }
}
