

import React from 'react'
import { render, screen, fireEvent } from "@testing-library/react"; 
import AnimalForm from "./AnimalForm";

test('AnimalForm adds new animals to the list', () => {
    //type into all 3 inputs
        render(<AnimalForm />);
        // 1.query for all inputs
        // 2.run the change event to add text
        const speciesInput = screen.getByLabelText(/species:/i);
        const ageInput = screen.getByLabelText(/age:/i);
        const notesInput = screen.getByLabelText(/notes:/i);

        //events with RTL
        fireEvent.change(speciesInput, { target:{ value: 'Monkey' } })
        fireEvent.change(ageInput, { target:{ value: 15 } })
        fireEvent.change(notesInput, { target:{ value: 'docile' } })

    //click submit button
        // 1.Query for the button
        // 2.run the click event on the button
        const submitButton = screen.getByText(/submit!/i);
        fireEvent.click(submitButton);

    //assert that my new animal is in the list
        // 1.query for the new animal text
        // 2.assert that it is being rendered
        const newAnimal = screen.getByText(/monkey/i)
        expect(newAnimal).toBeInTheDocument();
        
})