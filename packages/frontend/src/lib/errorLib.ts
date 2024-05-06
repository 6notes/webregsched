export function onError(error: any) {
  let message = String(error);

  if (!(error instanceof Error) && error.message) {
    console.log(123);
    message = String(error.message);
  }

  alert(message);
}
