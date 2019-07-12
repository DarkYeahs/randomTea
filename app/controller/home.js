'use strict';

const Controller = require('egg').Controller;
const crypto = require('crypto');

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;

    // await app.redis.set('list', JSON.stringify(
    //   [
    //     '十三星座',
    //     '一些柠檬一些茶',
    //     '益禾堂',
    //     '上茶',
    //     '一芳',
    //     '垯柠',
    //     '一点点',
    //     '新作的茶',
    //     'coco',
    //   ]
    // ));

    let list = await app.redis.get('list');

    list = JSON.parse(list);

    const len = list.length;
    const rnd = await ctx.service.index.getRandomNum();
    const random = rnd % len;

    const dataList = {
      result: random,
      list,
    };
    await this.ctx.render('home/index.tpl', dataList);
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
