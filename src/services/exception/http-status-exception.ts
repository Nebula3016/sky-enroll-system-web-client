// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorResponseHandleMethod: Record<string, (errorData: any) => void> = {
  '400': badRequest,
  '401': unauthorized,
  '403': Forbidden,
  '404': notFound,
  '500': internalServerError,
  '503': serviceUnavailable,
  '408': networkTimeout,
  default: unknownError,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HttpStatusExceptionHandle(error: any) {
  const { status, data, message } = error.response;
  const statusStr = status.toString() as keyof typeof errorResponseHandleMethod;
  // eslint-disable-next-line no-console
  console.error('HttpStatusExceptionHandle', message);
  return errorResponseHandleMethod[statusStr](data);
}

/* =============== 工具函数 =============== */
function badRequest(errorData: any) {}

function unauthorized(errorData: any) {}

function Forbidden(errorData: any) {}

function notFound(errorData: any) {}

function internalServerError(errorData: any) {}

function serviceUnavailable(errorData: any) {}

function networkTimeout(errorData: any) {}

function unknownError(errorData: any) {}
