function delay(ms) {
  return Promise.resolve().then(() => {
    return new Promise(function(res) {
      setTimeout(res.bind(this, ms), ms);
    });
  });
}

function delay2(ms) {
  return Promise.resolve().then(() => {
    return new Promise(function(res) {
      setTimeout(() => {
        res.call(this, ms);
      }, ms);
    });
  });
}

delay(1000).then(function(ms) {
  console.log("delay_1000:", ms);
});
delay2(3000).then(function(ms) {
  console.log("delay_3000:", ms);
});