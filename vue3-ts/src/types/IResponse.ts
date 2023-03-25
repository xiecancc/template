/**
 * 服务器返回的数据格式
 */
export interface IResponse<T = any> {
  /**
   * 状态码，200代表成功
   */
  code: number;
  /**
   * 错误信息
   */
  msg: string;
  /**
   * 操作结果
   */
  data: T;
}
