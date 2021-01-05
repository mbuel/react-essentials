import { fireEvent } from "@testing-library/react";
import React from 'react';
import { render } from '@testing-library/react';
import Checkbox from './Checkbox.js';


test("selecting checkbox", () => {
    const { getByLabelText } = render(<Checkbox />);
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
})