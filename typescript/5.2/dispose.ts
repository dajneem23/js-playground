class Resource {
  private resource: string | null;
  constructor() {
    this.resource = "Acquired resource";
    console.log(this.resource);
  }

  [Symbol.dispose]() {
    console.log("Disposing of resource");
    this.resource = null;
  }
}

using resource = new Resource();
