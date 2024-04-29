const request = require("supertest");
const app = require("../app");

describe("User routes testing", () => {
  it("Register a user", async () => {
    const response = await request(app).post("/api/user/addUser").send({
      username: "test2",
      email: "test2@test.com",
      password: "passsword2",
    });
    expect(response.status).toBe(200);
  });

  it("Register a user", async () => {
    const response = await request(app).post("/api/user/addUser").send({
      username: "test",
      email: "test@test.com",
      password: "passsword",
    });
    expect(response.status).toBe(400);
  });
});
