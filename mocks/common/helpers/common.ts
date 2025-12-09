// 共享功能模块文件
import {} from 'node:path';
import { access, appendFileSync, writeFileSync, constants, readFileSync } from 'node:fs';

/**
 * asyncWriteFileData 函数 - 异步写入文件数据
 *
 * @returns Promise<boolean>
 */
export async function asyncWriteFileData(fileTuple: [string, string], data: any): Promise<boolean> {
  return new Promise((resolve, reject) => {
    try {
      access(`${fileTuple[0]}/${fileTuple[1]}`, constants.F_OK, err => {
        if (err) throw new Error('当前需要写入数据的文件不存在');
      });

      const dataString = typeof data === 'string' ? data : JSON.stringify(data);

      writeFileSync(fileTuple[0] + '/' + fileTuple[1], dataString, { encoding: 'utf-8' });

      return resolve(true);
    } catch (error) {
      return reject(false);
    }
  });
}

/** */
export async function asyncReadFileData() {}
