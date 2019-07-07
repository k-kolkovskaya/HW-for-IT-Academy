let delay = ms => {
  return new Promise(resolve => {
    const time = ms;
    setTimeout(() => resolve(time), ms);
  });
};

delay(2000).then(getTime => console.log(getTime));
