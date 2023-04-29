# Sr. Full Stack Engineer- Take Home Test

As a user, I would like a page that lists TODO items. Each item has a description, a due date and a priority. The items in the page should be filterable by description (partial match) or priority. I may have thousands of TODO items.

You may use component libraries on the frontend if you wish..
You may use a SQLite file for backend storage or a flat file.

Take no more than 2 hours to implement the page. A hard stop at 2 hours is acceptable. The project should be runnable locally.

## Setup

This project has a NestJS backend `/api` and an Angular app `/app`, as well as a **SQLite** file `/api/.db/sql`. I intended to make a project that is as well structured as possible, within the 2 hours limit, so that it can be easily scaled and implementable.

I ended giving more attention to the backend, which ended consuming a bit more time off the frontend, but I believe the frontend is coded properly in order to receive quick improvements.

For both applications, I used _**yarn**_ as my package manager; so I recommend using it instead of _**npm**_.

### Backend Setup

Run `yarn install` on the backend repository `/api`. Once finished, you can run `yarn start` to get the api running locally at `http://localhost:3000`.

#### SQLite

The **SQLite** file is stored at `/api/.db/sql` with 15 todo items randomly generated. If you wish to add more 15 random items, you can run `yarn run db:seed` in the api folder.

If you want to increase the number of generated todo items as you seed the database, you can set the number on `api/src/core/database/seeds/initial.seed.ts`, at the line 7:

`await factory(Todo)().createMany(15);`

This way you can add as much as todo items as you'd like to the database. If you want to delete all todo items, you have to delete the **SQLite** file and restart the server.

Don't forget you must have SQLite installed on your computer.

#### Todo paginated list

To fetch todo items from the api, you must send a _GET_ request to `http://localhost:3000/todo`. The endpoint will return a paginated list, so you can send _page_ and _limit_ as an URL query to handle the pagination.

To filter the retrived items by description and/or priority, simply add _description_ and _priority_ to the URL query, respectively.

`http://localhost:3000/todo?page=2&description=perferendis%20voluptatem&priority=0`

The limit of the pagination is 10 by default and the page is 1.

### Frontend Setup

Before running the frontend, make sure the backend is set up and running, otherwise the application should break.

Run `yarn install` on `/app`, then start the application with `yarn start`. Once the application is running, you can access it on `http://localhost:4200`.
