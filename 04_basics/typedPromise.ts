function complexLogic(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("REsolved");
    }, 2000);
  });
}

complexLogic().then((data: string) => {
  console.log(data);
});
