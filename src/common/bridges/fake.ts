import songsFake from "../fakes/songs";

class ApiServiceFake {
  get(url: string): Promise<any> {
    songsFake.data = songsFake.data.slice(-15)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(songsFake);
      }, 400);
    });
  }
}

export default new ApiServiceFake();
