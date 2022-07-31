enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded",
}

const isLoading = (state: LoadingState) => {
  return state === LoadingState.loading;
};
console.log(isLoading(LoadingState.loaded));

//Literal types

const rollDice = (dice: 1 | 2 | 3): number => {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1;
  }

  return pip;
};

console.log(rollDice(3));
function sendEvent(name: "addToCart", data: { productID: number }): void;
function sendEvent(name: "checkout", data: { cartCount: number }): void;
function sendEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent("checkout", { cartCount: 12345 });
sendEvent("addToCart", { productID: 12345 });
