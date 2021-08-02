# Evaluate news article project

This is my project submission for the evaluate news article project

## To start the app, follow the following steps:

## step 1:

- First, you will need to go tho the meaningcloud website to sign up to the API [here](www.meaningcloud.com). Signing up will get you an API key.
- create a file named `.env` in the root of your project and add the api key you received after signing up under :

  ```
   API_KEY=********
  ```

## step 2 in the terminal, do the following:

1. `cd` ito your main directory.
2. run `npm install` to install all the dependencies of the app.
3. to start the app in dev mode run `npm run build-dev`, and in another terminal run `npm start` to start the api server.

### or

3. to start the app in production mode, run `npm run build-prod` then `npm start`.

4. when the app runs in production mode, simply open your browser to http://localhost:8081/ and you should see the app running.
5. The form accepts URLs and text. When you run submit, you should see submitted data type (Text / URL)
6. When the server returns a response the json response is then parsed and shown in the UI
