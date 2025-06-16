const assert = require("assert");
describe("Fitur Reqres", function () {
  it("Get Reqres", async function () {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();
    // console.log(data);
    // assert status respon
    assert.strictEqual(response.status, 200, "Status respon bukan 200");
    // assert untuk memastikan respon tidak kosong
    assert.ok(data, "Respon tidak berisi teks apapun atau kosong");
    // assert untuk memastikan respon berisi teks json valid
    assert.ok(data.data, "Respon tidak berisi properti 'data'");
  });

  it("POST Reqres", async function () {
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "name": "fara",
        "job": "Freelance paraphrasing & Dokumen editing",
      }),
    });

    const data = await response.json();
    //console.log(data);
    // assert status respon
    assert.strictEqual(response.status, 201, "Status respon bukan 201");
    // assert untuk memastikan respon tidak kosong
    assert.ok(data, "Respon tidak berisi teks apapun atau kosong");
    // assert untuk memastikan nama yang ada sesuai
    assert.strictEqual(data.name, "fara", "Nama tidak sesuai");
  });

  it("PATCH Reqres", async function () {
    const response = await fetch("https://reqres.in/api/users/2", {
      method: "PATCH",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "name": "fara",
        "job": "QA Engineer",
      }),
    });

    const data = await response.json();
    //console.log(data);
    // assert status respon
    assert.strictEqual(response.status, 200, "Status respon bukan 200 OK");
    // assert untuk memastikan respon tidak kosong
    assert.ok(data, "Respon tidak berisi teks apapun atau kosong");
    // assert untuk memastikan job terupdate dengan relevan
    assert.strictEqual(data.job, "QA Engineer", "Updatean job tidak relevan");
  });

  it("DELETE Reqres", async function () {
    const response = await fetch("https://reqres.in/api/users/2", {
      method: "DELETE",
      headers: { "x-api-key": "reqres-free-v1" }, //api key untuk dapat mengakses website
    });

    // menggunakan respon text karena body respon kosong tidak memuat text JSON
    const responseText = await response.text();

    // console.log(data);
    // assert status respons
    assert.strictEqual(response.status, 204, "Status respon bukan 204");
    // assert untuk memastikan body respon kosong
    assert.strictEqual(responseText, "", "Respon tidak kosong, seharusnya kosong");
  });
});
