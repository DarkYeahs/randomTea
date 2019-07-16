'use strict';

const Service = require('egg').Service;

class IndexService extends Service {
  async getRandomNum(random, opt = {
    min: 1,
    max: 1000,
    col: 1,
    base: 10,
    format: 'plain',
    rnd: 'new',
    sets: 1,
    seqnos: 'on',
    sort: 'off',
    commas: 'on',
    order: 'index',
  }) {
    let { data: randomNum } = await this.ctx.curl(
      'https://www.random.org/integer-sets/',
      {
        data: {
          ...opt,
          num: random || 1,
        },
        timeout: 3000,
        dataType: 'text',
      }
    );

    randomNum = randomNum.slice(7).split(', ');

    return randomNum;
  }
}

module.exports = IndexService;
