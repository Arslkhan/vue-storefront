import { Logger } from '@vue-storefront/core/lib/logger'
import MailItem from '../types/MailItem'
import { Module } from 'vuex'
import config from 'config'
import { processURLAddress } from '@vue-storefront/core/helpers'
import getApiEndpointUrl from '@vue-storefront/core/helpers/getApiEndpointUrl';

export const mailerStore: Module<any, any> = {
  namespaced: true,
  actions: {
    async sendEmail (context, letter: MailItem) {
      console.log('sendEmail test', context, letter)
      // try {
        // const res = await fetch(processURLAddress(getApiEndpointUrl(config.mailer.endpoint, 'token')))
        // const resData = await res.json()
        // if (resData.code === 200) {
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
            console.log('sendEmail VSF res', res)
            return res
          } catch (e) {
            Logger.error(e, 'mailer')()
            throw new Error(e)
          }
        // } else {
        //   throw new Error(resData.code)
        // }
      // } catch (e) {
      //   Logger.error(e, 'mailer')()
      //   throw new Error(e)
      // }
    },
    async clearCart (quote) {
      console.log('clearCart quote', quote)
      try {
        const res = await fetch(
          processURLAddress(config.cartClearCall.endpoint),
          {
            method: 'POST',
            mode: 'cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(quote)
          }
        )
        console.log('sendEmail VSF res', res)
        return res
      } catch (e) {
        Logger.error(e, 'mailer')()
        throw new Error(e)
      }
    }
  }
}
