import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Search from "../Search/Search";

describe('SearchLayout', () => {
    
    //testing snapshot render
    it('renders the component', () => {
        const {container} = render(<Search />)

        expect(container.firstChild).toMatchSnapshot()
    })


    //testing render card
    test("render card", () => {
      const card = document.createElement("Card");

      const { container } = render(<Search />, {
        container: document.body.appendChild(card)
      });
    });

    //testing input value lower case
    test("sets the value to the lower version of the value", () => {
      const { getByLabelText } = render(<Search />);
      const upperInput = getByLabelText(/search/i);
      const search = "STUFF";
      fireEvent.change(upperInput, { target: { value: search } });
      expect(upperInput.value).toEqual(search.toLowerCase());
    });
    
    //testing input value interger into string
    test("sets the value input integer to string", () => {
      const { getByLabelText } = render(<Search />);
      const upperInput = getByLabelText(/search/i);
      const search = 1;
      fireEvent.change(upperInput, { target: { value: search } });
      expect(upperInput.value).toBe("1")
    });
    

    //test adding checkbox
   test("checkboxes (and radios) must use click", () => {
     const handleChange = jest.fn();
     const { container } = render(
       <input type="checkbox" onChange={handleChange} />
     );
     const checkbox = container.firstChild;
   
     fireEvent.click(checkbox);
     expect(handleChange).toHaveBeenCalledTimes(1);
     expect(checkbox.checked).toBe(true);
   });


})