# Learning Journey

### Learning Journey is a web app that helps you learn and create your own online courses with the help of AI

# Demo Video

https://github.com/kaifcoder/learning-journey/assets/57701861/759eee21-2696-4085-8e33-774f1332f4b9

## Features

- Create your own online courses on any topic or niche that you are passionate about or want to share with others.
- Use the AI course creator feature to generate your course outline and content.

## Technologies

- **Next.js**: A powerful framework for building React applications.
- **React**: A JavaScript library for building user interfaces.
- **PostgreSQL**: PostgreSQL is a powerful, open source relational database system.
- **Stripe**: A platform for online payment processing and e-commerce.
- **OpenAIAPI**: The OpenAI API is a platform that allows you to access a variety of AI models for natural language, code, image, and speech tasks.
- **Youtube data api**: An API provided by google to query the data available on youtube.
- **Prisma**: Prisma is a platform for building data-driven applications with Node.js and TypeScript.
- **Docker** (For Deployment): Docker is a popular platform that allows you to create, deploy, and run applications using containers.
  
## Installation

To run this project locally, you need to have Node.js, npm, and MongoDB installed on your machine. Then, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project folder and run `npm install` to install the dependencies.
3. Create a `.env` file in the root folder and add the following variables:

```
DATABASE_URL = <ADD DB CONNECTION STRING>
NEXTAUTH_SECRET = <ADD OWN KEY>
NEXTAUTH_URL = 'http://localhost:3000'
GOOGLE_CLIENT_ID =  <ADD OWN KEY>
GOOGLE_CLIENT_SECRET =  <ADD OWN KEY>
OPENAI_API_KEY= <ADD OWN KEY>
UNSPLASH_API_KEY= <ADD OWN KEY>
YOUTUBE_API_KEY= <ADD OWN KEY>
STRIPE_API_KEY= <ADD OWN KEY>
STRIPE_WEBHOOK_SECRET = <ADD OWN KEY>
```

4. Run `npm run dev` to start the development server.
5. Open `http://localhost:3000` in your browser to see the app.

## Usage

To use this app, you need to create an account or log in with an existing one. Then, you can access the following pages:

- `/gallery`: This is where you can find the courses.
- `/create`: This is where you can create your own online courses using the AI course creator feature. You can also edit and preview your courses here.
- `/course/[courseID]`: This is where you can watch the courses that available.
- `/settings`: This is where you can see and edit your pro subscription.

## Disclaimer

Learning Journey is a prototype web app that uses OpenAI's API & Youtube API to power the AI assistant. The app is not affiliated with OpenAI or Google. The app is for demonstration and knowledge purposes only and does not guarantee the accuracy, quality, or suitability of the responses. The app may not work properly on some devices or browsers. The app may stop working at any time due to API limitations or other reasons.

## Feedback

If you have any feedback, suggestions, or issues with the app, please contact me at kaifmohd2014@gmail.com. I would love to hear from you and improve the app. Thank you for using Learning Journey! 😊
