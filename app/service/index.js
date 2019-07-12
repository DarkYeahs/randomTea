'use strict';

const Service = require('egg').Service;

class IndexService extends Service {
  async getRandomNum(random, opt = {
    min: 1,
    max: 100,
    col: 1,
    base: 10,
    format: 'plain',
    rnd: 'new',
  }) {
    const { data: randomNum } = await this.ctx.curl(
      'https://www.random.org/integers/',
      {
        data: {
          ...opt,
          num: random || 1,
        },
        timeout: 3000,
        dataType: 'text',
      }
    );

    console.log(randomNum);

    return randomNum;
  }
}

module.exports = IndexService;
