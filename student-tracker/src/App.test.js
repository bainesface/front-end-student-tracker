import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import createBlockHistoryObject from "./__test__/utils";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe.only("createBlockHistoryObject", () => {
  it("returns an empty object when passed an empty object", () => {
    const obj = [];
    const actual = createBlockHistoryObject(obj);
    expect(actual).toStrictEqual({});
  });

  it("takes a single object and returns an object with key fundamentals and value of 1", () => {
    const obj = [
      {
        _id: "5e4e6335f7c6fcc027cc780d",
        number: 1,
        name: "Fundamentals",
        slug: "fun"
      }
    ];
    const actual = createBlockHistoryObject(obj);
    expect(actual).toStrictEqual({ Fundamentals: 1 });
  });

  it("takes multiple objects and returns the number of blocks in key value pair", () => {
    const obj = [
      {
        _id: "5e4e6335f7c6fcc027cc780d",
        number: 1,
        name: "Fundamentals",
        slug: "fun"
      },
      {
        _id: "5e4e6335f7c6fcc027cc780d",
        number: 1,
        name: "Fundamentals",
        slug: "fun"
      }
    ];
    const actual = createBlockHistoryObject(obj);
    expect(actual).toStrictEqual({ Fundamentals: 2 });
  });
  it("multiple objects", () => {
    const obj = [
      {
        _id: "5e4e6335f7c6fcc027cc780d",
        number: 1,
        name: "Fundamentals",
        slug: "fun"
      },
      {
        _id: "5e4e6335f7c6fcc027cc780d",
        number: 1,
        name: "Fundamentals",
        slug: "fun"
      },
      {
        _id: "5e4e6335f7c6fcc027cc780d",
        number: 1,
        name: "Backend",
        slug: "fun"
      },
      {
        _id: "5e4e6335f7c6fcc027cc780d",
        number: 1,
        name: "Backend",
        slug: "fun"
      }
    ];
    const actual = createBlockHistoryObject(obj);
    expect(actual).toStrictEqual({ Fundamentals: 2, Backend: 2 });
  });
});
