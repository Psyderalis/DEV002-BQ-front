import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import ProductCard from "./ProductCard";

describe('ProductCard', () => {
  beforeEach(()=> {
    render(<ProductCard/>)
  })
  test('should show the ProductCard component', () => {
    expect(screen.queryByText(/precio/i)).toBeDefined()
  })
  test('Should show tittle all the time', () => {
   expect() 
  })
})