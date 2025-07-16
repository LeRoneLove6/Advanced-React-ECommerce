
Project Requirements
Product Catalog:
Product Listing and Display:
Use React Query to retrieve all of the products in the store and display them on the Home component. 
Show the title, price, category, description, rate, and image.
Each product should have a button that will allow the user to add it to the shopping cart
Category Navigation:
Provide a select drop down that allows users to select a product category
NOTE: FakeStoreAPI has an endpoint that will give you an array of all the product categories
Use React Query to request that endpoint to populate your select dropdown.  
The dropdown should not be hard coded, it should dynamically pull the values from the API
When the user selects a different category from the dropdown, only display the products from that category.
NOTE: The FakeStoreAPI has an endpoint that allows you to get products of a specific category.  Make sure to use React Query to make the request to this endpoint.  
Shopping Cart:
State Management with Redux Toolkit:
Utilize Redux Toolkit for managing the shopping cart state, including adding, updating, and removing products from the cart.
Define reducers and actions to handle cart-related state changes and interactions with the FakeStoreAPI.
Shopping Cart Component:
Create a Shopping Cart component where users can view and manage the products within their cart.
Display a list of products currently added to the cart including the title, image, count, and price of each product.
Each product should have a button that removes it from the cart
REMEMBER: Users should be able to add products to the shopping cart directly from the home product listing page.
Session Storage for Shopping Cart:
Store, retrieve, and update the shopping cart data in sessionStorage to ensure persistence across different components and browser sessions.
Store the shopping cart as an array of product objects
Total Amount and Price Calculation:
In the shopping cart component, display the total number of products in the cart
Display the total price of all the products in the cart.
Update these values dynamically as users modify the contents of their cart, ensuring accuracy and real-time feedback.
Checkout Functionality:
Implement a checkout feature allowing users to complete their purchases.
FakeStoreAPI does not have a way to process orders so this feature should simulate a checkout by clearing the Redux state and sessionStorage
Provide visual feedback to users upon successful checkout, indicating that their cart has been cleared.
