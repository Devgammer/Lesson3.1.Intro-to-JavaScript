const axios = require("axios").default;

test.only("add new book to user[/BookStore/v1/Books] ", async () => {
const responseToken = await axios.post(
    "https://bookstore.toolsqa.com/Account/v1/GenerateToken",
    {
     
  "userName": "michael-testuser",
  "password": "52hPed%s"

    }, 
{
 
 validateStatus: function () {
    return true;
 }
});

  const response = await axios.post(
    "https://bookstore.toolsqa.com/BookStore/v1/Books",
    {
      "userId": "07a44798-a8ae-4eeb-9581-79c87b467a4f",
      "collectionOfIsbns": [
        {
          "isbn": "9781593277574"
        }
      ]
    }, 
{
  headers: {
    'Authorization': `Bearer ${responseToken.data.token}`
  },
 validateStatus: function () {
    return true;
 }
});

  const responseBody = response.data;
 console.log(responseBody);
});




test("Generate token[/Account/v1/GenerateToken] ", async () => {
  const response = await axios.post(
    "https://bookstore.toolsqa.com/Account/v1/GenerateToken",
    {
     
  "userName": "michael-testuser",
  "password": "52hPed%s"

    }, 
{
 
 validateStatus: function () {
    return true;
 }
});

  const responseBody = response.data;
 console.log(responseBody.token);
});
