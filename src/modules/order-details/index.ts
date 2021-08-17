import { StorefrontModule } from '@vue-storefront/core/lib/modules';
import { coreHooks } from '@vue-storefront/core/hooks';
import * as types from './store/mutation-types';
import fetch from 'isomorphic-fetch';
import config from 'config';
const ORDERDETAILS_URL = config.orderDetails.endpoint;

const orderDetailModuleStore = {
  namespaced: true,
  state: {
    orderDetailState: null
  },
  actions: {
    async orderDetailFunction({}, systemData) {
      try {
        const response = await fetch(
          `${ORDERDETAILS_URL}`,
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
        const jsonRes = await response.json();
        if (jsonRes.code === 200) {
          return jsonRes.result;
        }
        console.log('jsonRes', jsonRes);
      } catch (error) {
        console.log(error);
      }
    }
  },
  mutations: {
    [types.orderDetail](state, orderDetail) {
      state.orderDetail = 'orderDetail';
    }
  }
};

export const OrderDetail: StorefrontModule = function ({ store}) {
  console.log('OrderDetail Module Registered');
  store.registerModule('order-detail', orderDetailModuleStore);
  coreHooks.afterAppInit(async () => {
    console.log('App HAVE BEEN initialized');
  });
};
