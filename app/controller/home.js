'use strict';

const Controller = require('egg').Controller;
const crypto = require('crypto');

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;

    let list = await app.redis.get('list');

    list = JSON.parse(list);

    const len = list.length;
    const rnd = await ctx.service.index.getRandomNum();
    const random = rnd % len;

    const dataList = {
      result: random,
      list,
    };
    // await this.ctx.render('home/index.tpl', dataList);
    this.ctx.body = dataList;
  }

  async getList() {
    const { ctx, app } = this;

    const list = await app.redis.get('list');

    ctx.body = list;
  }

  async getTodayTea() {
    const { ctx, app } = this;

    let list = await app.redis.get('list');

    list = JSON.parse(list);

    const len = list.length;
    const rnd = await ctx.service.index.getRandomNum();
    const random = rnd % len;

    this.ctx.body = list[random];
  }

  async updateList() {
    const { ctx, app } = this;

    const body = ctx.request.body;

    const params = body.data;

    await app.redis.set('list', JSON.stringify(params));

    const list = await app.redis.get('list');

    ctx.body = list;
  }

  getRandomBytes() {
    const promise = new Promise((resolve, reject) => {
      crypto.randomBytes(8, (err, buf) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(parseInt(parseInt('0x' + buf.toString('hex')) / 10000));
      });
    });

    return promise;
  }
}

module.exports = HomeController;
