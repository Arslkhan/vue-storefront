import { StorefrontModule } from '@vue-storefront/core/lib/modules';
import { coreHooks } from '@vue-storefront/core/hooks';
import * as types from './store/mutation-types';
import fetch from 'isomorphic-fetch';
import config from 'config';
const contactEmail_URL = config.contactEmail;

const vinylModuleStore = {
  namespaced: true,
  state: {
    contactEmailState: null
  },
  actions: {
    async sendContactEmail ({}, systemData) {
      console.log('sendContactEmail', systemData, contactEmail_URL)
      try {
        const response = await fetch(
          `${contactEmail_URL}`,
          {
            method: 'post',
            mode: 'cors',
            headers: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(systemData)
          }
        );
        console.log('response jsonRes', response)
        const jsonRes = await response.json();
        console.log('sendContactEmail jsonRes', jsonRes)
        if (jsonRes.code === 200) {
          return jsonRes.result;
        }
        console.log(jsonRes);
      } catch (error) {
        console.log(error);
      }
    }
  },
  mutations: {
    [types.contactEmail] (state, contactEmail) {
      state.contactEmail = 'contactEmail';
    }
  }
};

export const contactEmail: StorefrontModule = function ({ store}) {
  console.log('contactEmail Module Registered');
  store.registerModule('contact-email', vinylModuleStore);
  coreHooks.afterAppInit(async () => {
    console.log('App HAVE BEEN initialized');
  });
};
