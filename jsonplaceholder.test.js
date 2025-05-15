const axios = require ('axios').default;
const NewControllers = require('./qatesting/NewControllers.js');
const PlaceholderController = require('./qatesting/PlaceholderController.js')

// test1
test('get all posts [/posts] and verify number', async () => {
 const response = await PlaceholderController.getAllPosts();
 const responseBody = response.data;
 expect(response.status).toBe(200);
 expect(responseBody).toHaveLength(100);
 console.log(response.data);
})
// Test2

    test('get first post [/posts/1] and verify userId', async () => {
    const response = await PlaceholderController.getPost(1);
    const responseBody = response.data;
    expect(response.status).toBe(200);
    expect(responseBody.userId).toBe(1);
    expect(responseBody.id).toBe(1);
    console.log(response.data);
   })

// Test3
test('Create new post [/posts/1] and verify response is successfull', async () => {
      const newPost = {
        title: 'New Post',
        body: 'bar',
        userId: 1,
           }
const response = await PlaceholderController.addPost(newPost.title,newPost.body,newPost.userId);
   
   const responseData = response.data;
   expect(response.status).toBe(201);
   expect(responseData.userId).toBe(newPost.userId);
   console.log(response.status);
   console.log(response.data);
   })
// Test4
test('get first album [albums/1/photos] and verify title', async () => {
   const response = await NewControllers.getPhotos(1);
    const responseBody = response.data;
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(responseBody[0].title).toBe('accusamus beatae ad facilis cum similique qui sunt');
    
   })
// Test5
test('get first comment [/posts/1/comments] and verify name', async () => {
   const response = await NewControllers.getComment(1);
    const responseBody = response.data;
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(responseBody[0].name).toBe('id labore ex et quam laborum');
    
   })