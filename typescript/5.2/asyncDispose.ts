class AsyncResource {
  private resource: string | null;
  constructor() {
    this.resource = "Acquired resource";
    console.log(this.resource);
  }

  async [Symbol.asyncDispose]() {
    console.log("Disposing of resource asynchronously");
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async cleanup
    this.resource = null;
    console.log("Resource disposed");
  }
}

(async () => {
  await using resource = new AsyncResource();
})();
