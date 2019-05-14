
describe('Account controller', () => {
  describe('Post operation', () => {
    test('It should response the POST method', (done) => {
      request(app).post('/operation/').then((response) => {
        expect(response.statusCode).toBe(201);
        done();
      });
    });
  })
});
