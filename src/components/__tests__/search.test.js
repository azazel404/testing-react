import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Search from "../Search/Search";

describe('SearchLayout', () => {
    

    it('renders the component', () => {
        const {container} = render(<Search />)

        expect(container.firstChild).toMatchSnapshot()
    })

    test("test set value lower case in search input",() => {
        const {getByLabelText} = render(<Search />);
        const upperInput = getByLabelText(/search/i)
        const upper = 'indonesian';

        fireEvent.change(upperInput, { target: { value: upper } })
        expect(upperInput.value).toEqual(upper.toLowerCase())
    })
    

})