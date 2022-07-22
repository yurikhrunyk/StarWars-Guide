import { rest } from "msw";

export const handlers = [
  rest.get("https://swapi.dev/api/", (req, res, ctx) => {
    return res(ctx.json({ name: "Luke Skywalker" }));
  }),
  rest.get("https://swapi.dev/api/people", (req, res, ctx) => {
    return res(ctx.json({results: [{name: 'Luke Skywalker'}, {name: 'C-3P0'}]}));
  }),
];
