//import server from "./backend/mock-server";
import React from "react";
import AppFunctional from "./AppFunctional";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Write your tests here
test("sanity", () => {
  expect(true).toBe(true);
});

test("Koordinatların doğru şekilde render edildiğini doğrula", () => {
  render(<AppFunctional />);
  const koordinatlar = screen.getByText(/koordinatlar/i);
  expect(koordinatlar).toBeInTheDocument();
  expect(koordinatlar).toHaveTextContent("(2,2)"); // index 4'te olduğumuz için
});

test("Adımların doğru şekilde render edildiğini doğrula", () => {
  render(<AppFunctional />);
  const adimlar = screen.getByText(/kere ilerlediniz/i);
  expect(adimlar).toBeInTheDocument();
  expect(adimlar).toHaveTextContent("0"); // Başlangıçta 0 adım
});

test("Yukarı butonuna basıldığında, koordinatların ve adımların doğru şekilde güncellendiğini doğrula", () => {
  render(<AppFunctional />);
  const yukariButonu = screen.getByText(/yukari/i);
  fireEvent.click(yukariButonu);
  const koordinatlar = screen.getByText(/koordinatlar/i);
  expect(koordinatlar).toHaveTextContent("(2,1)"); // index 1'e gitmeliyiz
  const adimlar = screen.getByText(/kere ilerlediniz/i);
  expect(adimlar).toHaveTextContent("1"); // Bir adım attık
});

test("Inputa metin girildiğinde value değişiyor", () => {
  render(<AppFunctional />);
  const email = document.querySelector("#email");
  fireEvent.change(email, { target: { value: "baha@saracoglu.com" } });
  expect(email.value).toBe("baha@saracoglu.com");
});
