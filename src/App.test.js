import React from "react";
import { render, screen } from "@testing-library/react"; // to render components in a virtual DOM
import App from "./App";// we need the component we are testing/rendering. In this case App Component

//jest global functions to write our test
// -test()// used to run a test


//Jest is going to be our "test runner" -Jest is the cmd line interface
//test('title', cbToRunTheTest)

test('renders App component without errors', () => {
    //Render the App component
    render(<App/>);

    //tests will fail if an error is "thrown" from any function/component
    //inside the test cb
    // breakTheTest(true);
})

// function breakTheTest(someValue){
//     if(someValue === true){
//         //do nothing
//     }else {
//         throw new Error("This test failed because we threw an error inside 'breakTheTest");
//     }
// }


//query the virtual dom for an element and make an "assertion" about that element

test('App renders the from header', () => {
    //-------------Arrange---------------------
    render(<App />);
    

    //------------Act--------------------------
    //query for the header element
    const header = screen.getByText(/add new animal/i)

    //------------Assert-----------------------
    //make an assertion
    //make an assertion (using global functions)
    expect(header).toBeInTheDocument()
})


//q1:render()
//q2: when a test doesn't pass an assertion
//q3: You should make a test fail to make sure the test is running as expected and add extra confidence in the test.
