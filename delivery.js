const myPromise = new Promise((resolve, reject) => {
  let username = "tanishq123";
  let password = "1234";
  if (username == "tanishq123" && password == "1234") {
    resolve("sucess");
  } else {
    resolve("invalid");
  }
});


async function orderreceived() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("one order received");
    }, 1000);
  });
}
async function orderprepared() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("order prepared");
    }, 1000);
  });
}
async function orderhandover() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("order handed");
    }, 1000);
  });
}
let votp;
async function orderdelivered() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("order delivered");
    }, 1000);
  });
}
function otp() {
  votp = Math.floor(1000 + Math.random()* 9000);
  return votp;
}
async function handlelogin() {
  const status = await myPromise;
  console.log(status);
  if (status == "sucess") {
    console.log("hi");
    const orderstatus = await orderreceived();
    console.log(orderstatus);
    const orderstatus2 = await orderprepared();
    console.log(orderstatus2);
    const orderstatus3 = await orderhandover();
    console.log(orderstatus3);
    console.log("generate otp", otp());
    const orderstatus4 = await orderdelivered();
    console.log(orderstatus4);
  }
}
handlelogin();