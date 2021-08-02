const request = require("supertest");

const server = require("../src/server/index");
describe("test post request", () => {
  it("should return analyzed text", async () => {
    const res = await request(server)
      .post("/test")
      .send({
        body: JSON.stringify({
          txt: " IF you can keep your head when all about you Are losing theirs and blaming it on you",
        }),
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("post");
  });
});
