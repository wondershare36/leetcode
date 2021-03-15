function MyPromise(excutor) {
  this.PromiseState = "pending"
  this.PromiseResult = null
  const self = this
  function resolve(data) {
    if (self.PromiseState !== "pending") return
    self.PromiseState = "fulfilled"
    self.PromiseResult = data
  }
  function reject(data) {
    if (self.PromiseState !== "pending") return
    self.PromiseState = "rejected"
    self.PromiseResult = data
  }
  try {
    excutor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}
MyPromise.prototype.then = function (onResolved, onRejected) {

}
