// Import React hooks for state management and performance optimization
import React, { useState, useReducer, useCallback, useMemo } from "react";

function App() {
  // State to store array of products
  const [products, setProducts] = useState([]);
  
  // =============================
  // Reducer - Manages form state transitions
  // =============================
  const formReducer = (state, action) => {
    switch (action.type) {
      case "INPUT_CHANGE":
        // Update both field value and validation error
        return {
          ...state,
          values: {
            ...state.values,
            [action.name]: action.value, // Update specific field
          },
          errors: {
            ...state.errors,
            [action.name]: action.error, // Update field error
          },
        };
      case "SET_ERRORS":
        // Set multiple errors at once
        return {
          ...state,
          errors: action.errors,
        };
      case "RESET":
        // Reset form to initial state
        return action.initialState;
      default:
        return state;
    }
  };
  
  // =============================
  // Custom Hook - Reusable form logic
  // =============================
  const useForm = (initialValues, validate) => {
    // Memoize initial state to prevent unnecessary re-creation
    const initialState = useMemo(
      () => ({
        values: initialValues, // Form field values
        errors: {},           // Form validation errors
      }),
      [initialValues]
    );
    
    // Use reducer for complex state management
    const [state, dispatch] = useReducer(formReducer, initialState);
    
    // Memoized input change handler - prevents re-creation on every render
    const handleChange = useCallback(
      (e) => {
        const { name, value } = e.target;
        dispatch({
          type: "INPUT_CHANGE",
          name,
          value,
          error: validate(name, value), // Validate on change
        }); 
      },
      [validate] // Only recreate if validate function changes
    );
    
    // Memoized form submit handler - returns a function that handles submit
    const handleSubmit = useCallback(
      (callback) => (e) => {
        e.preventDefault();
        callback(state.values); // Pass form values to callback
      },
      [state.values] // Recreate when form values change
    );
    
    // Memoized form reset function
    const resetForm = useCallback(() => {
      dispatch({ type: "RESET", initialState });
    }, [initialState]);
    
    // Return form utilities
    return {
      values: state.values,
      errors: state.errors,
      handleChange,
      handleSubmit,
      resetForm,
    };
  };
  
  // =============================
  // Validation Function - Memoized to prevent re-creation
  // =============================
  const validate = useCallback((name, value) => {
    // Simple required field validation
    if (!value.trim()) return `${name} is required`;
    return ""; // No error
  }, []); // Empty dependency array - function never changes
  
  // =============================
  // Initialize Form Hook with default values
  // =============================
  const { values, errors, handleChange, handleSubmit, resetForm } = useForm(
    { name: "", quantity: "", price: "" }, // Initial form values
    validate // Validation function
  );
  
  // =============================
  // Memoized products list - prevents unnecessary re-renders
  // =============================
  const sortedProducts = useMemo(() => {
    return [...products]; // Create new array reference (could add sorting here)
  }, [products]); // Only recalculate when products array changes
  
  // Memoized form submission handler
  const onSubmit = useCallback(
    (formValues) => {
      // Add new product to products array
      setProducts((prev) => [...prev, { ...formValues }]);
      resetForm(); // Clear form after submission
    },
    [resetForm] // Dependency on resetForm function
  );
  // =============================
  // Component Render
  // =============================
  return (
    <div>
      <h1>Product Management</h1>
      
      {/* Form with controlled inputs and validation */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={values.name}        // Controlled input value
          onChange={handleChange}    // Handle input changes
        />
        {/* Display validation error for name field */}
        <span style={{ color: "red" }}>{errors.name}</span>
        
        {/* Product Quantity Input */}
        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          value={values.quantity}    // Controlled input value
          onChange={handleChange}    // Handle input changes
        />
        {/* Display validation error for quantity field */}
        <span style={{ color: "red" }}>{errors.quantity}</span>
        
        {/* Product Price Input */}
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={values.price}       // Controlled input value
          onChange={handleChange}    // Handle input changes
        />
        {/* Display validation error for price field */}
        <span style={{ color: "red" }}>{errors.price}</span>
        
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
      
      <br />
      
      {/* Products Display Table */}
      <table border="1" width="400">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {/* Render each product as a table row */}
          {sortedProducts.map((product, index) => (
            <tr key={index}> {/* Use index as key (not ideal for production) */}
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
