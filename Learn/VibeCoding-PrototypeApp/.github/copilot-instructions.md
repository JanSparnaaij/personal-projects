# Copilot Instructions

Use the following Product Requirements Document (PRD) and low-fidelity wireframes as implementation context for this workspace.

## Product Requirements Document (PRD)

# Product Requirements Document (PRD)

## 1. Document Metadata
- Project Name: VibeCoding Prototype Shop App
- Version: 1.0
- Date: March 17, 2026
- Author: Product Owner
- Status: Draft
- Scope: Prototype only (not production-ready)

## 2. Product Vision And Purpose
This prototype demonstrates a basic client-side shopping experience using HTML, CSS, and JavaScript. The purpose is to validate a small set of core shopping flows and provide an implementation target for GitHub Copilot Agent during a vibe coding process.

## 3. Goals And Non-Goals
### Goals
1. Build a functioning client-side web app with core shopping workflow.
2. Include required pages: Products, ProductDetails, ShoppingCart, Checkout.
3. Support page navigation and basic state flow.
4. Use a sample dataset to render products and simulate checkout.
5. Apply basic, consistent styling for readability.

### Non-Goals
1. No backend/API integration.
2. No real payment processing.
3. No user authentication or accounts.
4. No advanced search, filtering, recommendations, or analytics.
5. No production-grade security, accessibility certification, or performance optimization.

## 4. Target Audience
- Primary users: Shoppers evaluating products and completing a simple purchase flow.
- Secondary users: Developers/stakeholders validating prototype feasibility.
- User needs:
  - Quickly browse products.
  - See product details.
  - Add items to cart and review totals.
  - Complete a simple checkout form.

## 5. Prototype Scope And Constraints
1. Technology: HTML, CSS, JavaScript (client-side only).
2. Architecture: No backend services; local data only.
3. Required pages:
   - Products
   - ProductDetails
   - ShoppingCart
   - Checkout
4. Required capabilities:
   - Basic use case functionality
   - Simple navigation between pages
   - In-app sample dataset
   - Basic styling

## 6. User Stories And High-Level Use Cases
### User Stories
1. As a shopper, I want to browse a list of products so I can find items to buy.
2. As a shopper, I want to open product details so I can review product information.
3. As a shopper, I want to add a product to my cart so I can purchase it later.
4. As a shopper, I want to edit quantities in the cart so I can control my order.
5. As a shopper, I want to complete checkout with a simple form so I can place a mock order.

### High-Level Use Cases
1. Browse products on Products page.
2. Select one product to open ProductDetails.
3. Add selected product to ShoppingCart.
4. Update quantity/remove items in ShoppingCart.
5. Continue to Checkout and submit mock order.

## 7. Functional Requirements
### 7.1 Global Requirements
1. App must run entirely in a browser without backend dependencies.
2. Product data must come from a local sample dataset.
3. Navigation between required pages must work reliably.
4. Cart state must be available across pages during session.

### 7.2 Products Page Requirements
1. Display a list/grid of products from sample dataset.
2. Each product card shows at minimum:
   - Name
   - Price
   - Short description
   - Call-to-action (View Details)
3. User can navigate to ProductDetails for a selected product.

### 7.3 ProductDetails Page Requirements
1. Display full details for selected product:
   - Name
   - Price
   - Description
   - Optional image placeholder
2. Include Add to Cart action.
3. Include navigation back to Products and forward to ShoppingCart.

### 7.4 ShoppingCart Page Requirements
1. Display all added items with:
   - Product name
   - Unit price
   - Quantity control
   - Line total
2. User can increase/decrease quantity.
3. User can remove items.
4. Display subtotal (and optionally tax/total if desired).
5. Include navigation to Checkout.

### 7.5 Checkout Page Requirements
1. Show order summary from cart.
2. Collect minimal mock checkout fields:
   - Full name
   - Email
   - Address
3. Validate required fields.
4. Submit triggers mock confirmation (no real payment).
5. On successful submit:
   - Show confirmation message
   - Clear cart state

## 8. Information Architecture And Navigation
### 8.1 Sitemap
- Products -> ProductDetails -> ShoppingCart -> Checkout
- Global navigation links available to:
  - Products
  - ShoppingCart
  - Checkout

### 8.2 Navigation Behavior
1. User can reach all required pages from navigation controls.
2. ProductDetails route must include selected product context (product id).
3. Invalid/missing product id should show friendly fallback and link to Products.

### 8.3 Routing Approach
Use one of the following:
1. Multi-page approach (separate HTML files with query string for product id), or
2. Single-page approach with hash-based routes.

Implementation should prioritize simplicity and readability.

## 9. Data Model And Sample Dataset
### 9.1 Product Model
- id: string
- name: string
- price: number
- description: string
- category: string
- image: string (optional placeholder)
- inStock: boolean

### 9.2 Cart Item Model
- productId: string
- quantity: number
- unitPrice: number

### 9.3 Dataset Requirements
1. Include 8-12 sample products.
2. Use realistic product names and prices.
3. Ensure IDs are unique.

## 10. UI/UX Requirements
1. Apply basic, consistent styling across pages.
2. Prioritize readability and clean layout.
3. Provide clear CTA buttons and navigation links.
4. Support common viewport sizes (desktop and mobile).
5. Include empty states:
   - No products available
   - Cart empty
6. Display validation feedback on checkout form.

## 11. Technical Requirements
1. Frontend stack: Vanilla HTML, CSS, JavaScript.
2. No external backend.
3. Optional storage: localStorage for cart persistence.
4. Code organization should be simple and maintainable.

Recommended structure:
- /index.html or /products.html
- /product-details.html
- /shopping-cart.html
- /checkout.html
- /css/styles.css
- /js/data.js
- /js/app.js (or page-specific JS files)

## 12. Acceptance Criteria
1. Products page renders sample product list without errors.
2. Clicking View Details opens ProductDetails for the correct product.
3. Add to Cart adds selected product and reflects in cart contents.
4. ShoppingCart allows quantity updates and item removal.
5. Cart totals update correctly when quantities change.
6. Checkout displays current order summary.
7. Checkout form validates required fields.
8. Successful checkout displays confirmation and clears cart.
9. Navigation between required pages works from all relevant points.
10. App loads and functions as a client-side prototype with basic styling.

## 13. Definition Of Done
1. All required pages are implemented.
2. Core use cases run end-to-end.
3. No blocking runtime errors in browser console during core flows.
4. Basic styling applied consistently.
5. Sample dataset is included and used.
6. Code is understandable enough for further vibe coding iterations.

## 14. Risks, Assumptions, And Open Questions
### Assumptions
1. Prototype does not require authentication.
2. Prototype does not require persistent order history.
3. Mock checkout is sufficient for this phase.

### Risks
1. State management bugs across pages.
2. Route/query handling issues for ProductDetails.
3. Inconsistent UI behavior across different viewport sizes.

### Open Questions
1. Should cart persist across browser refresh via localStorage?
2. Should shipping/tax be shown in totals or subtotal only?
3. Is mobile-first layout required, or responsive desktop-first is sufficient?

## 15. Future Enhancements (Out Of Scope For Prototype)
1. Backend API and database integration.
2. User authentication and profiles.
3. Advanced search/filter/sort.
4. Real payment processing.
5. Order history and account management.
6. Enhanced accessibility and performance hardening.

## 16. Copilot Agent Build Instructions
Use this PRD as implementation source of truth.

Implementation priorities:
1. First create page structure and shared navigation.
2. Add sample dataset and product rendering.
3. Implement cart operations and state handling.
4. Implement checkout validation and mock confirmation.
5. Apply basic consistent styling.

Required output behavior:
1. Prototype must run by opening HTML files in browser.
2. No server setup should be required.
3. Keep code simple, readable, and easy to extend in future prompts.

## Low-Fidelity Wireframes

# Low-Fidelity Wireframes - VibeCoding Prototype Shop App

## 1. Purpose
These wireframes are text-based layout guides derived from the PRD. They are intended to help GitHub Copilot Agent implement page structure, shared navigation, and primary user flows.

## 2. Navigation Bar Wireframes

### 2.1 Expanded Navigation (Desktop/Tablet)

+----------------------------------------------------------------------------------+
| LOGO / APP NAME                [Products]   [ShoppingCart]   [Checkout]   [Cart]|
+----------------------------------------------------------------------------------+

Notes:
- Products, ShoppingCart, and Checkout are always visible links.
- Cart can optionally show item count, for example: Cart (2).
- Same nav should appear on all pages.

### 2.2 Collapsed Navigation (Mobile - Closed)

+------------------------------------------------------+
| LOGO / APP NAME                               [Menu] |
+------------------------------------------------------+

Notes:
- Menu is a hamburger icon/button.
- Links are hidden until menu is opened.
- Use collapsed mobile navigation for viewport widths below 600px.

### 2.3 Collapsed Navigation (Mobile - Open)

+------------------------------------------------------+
| LOGO / APP NAME                               [Close]|
+------------------------------------------------------+
| [Products]                                            |
| [ShoppingCart]                                        |
| [Checkout]                                            |
| [Cart (2)]  (optional count)                          |
+------------------------------------------------------+

Notes:
- Menu panel can be dropdown, drawer, or simple stacked links.
- Keep behavior consistent across all pages.

## 3. Page Flow Diagram

[Products] --> [ProductDetails] --> [ShoppingCart] --> [Checkout] --> [Confirmation State]
      ^               |                    |                 |
      |               +--------------------+-----------------+
      |                     (global nav available)
      +------------------------------------------------------+

Notes:
- Global nav allows direct access to Products, ShoppingCart, and Checkout.
- ProductDetails should receive product id from selection.

## 4. Products Page Wireframe

+----------------------------------------------------------------------------------+
| NAV BAR (expanded or collapsed depending on viewport)                            |
+----------------------------------------------------------------------------------+
| PAGE TITLE: Products                                                              |
| OPTIONAL SUBTEXT: Browse available items                                         |
+----------------------------------------------------------------------------------+
| [Product Card]      [Product Card]      [Product Card]                           |
| - Image placeholder - Image placeholder - Image placeholder                       |
| - Name             - Name              - Name                                     |
| - Price            - Price             - Price                                    |
| - Short desc       - Short desc        - Short desc                               |
| [View Details]     [View Details]      [View Details]                             |
+----------------------------------------------------------------------------------+
| [Product Card]      [Product Card]      [Product Card]                           |
| ... repeat for sample dataset (8-12 products)                                    |
+----------------------------------------------------------------------------------+
| EMPTY STATE (if no products):                                                     |
| "No products available right now." [Refresh/Back to Products]                    |
+----------------------------------------------------------------------------------+

Interaction notes:
- View Details opens ProductDetails with selected product id.
- Layout can be 1 column on mobile, 2-4 columns on larger screens.

## 5. ProductDetails Page Wireframe

+----------------------------------------------------------------------------------+
| NAV BAR (expanded or collapsed depending on viewport)                            |
+----------------------------------------------------------------------------------+
| [Back to Products]                                                                |
+----------------------------------------------------------------------------------+
| PRODUCT IMAGE PLACEHOLDER | PRODUCT INFO                                          |
|                           | Name: <Product Name>                                 |
|                           | Price: $XX.XX                                         |
|                           | Category: <Category>                                  |
|                           | Description:                                          |
|                           | <Longer product description text>                     |
|                           |                                                       |
|                           | [Add to Cart]   [Go to Cart]                          |
+----------------------------------------------------------------------------------+
| INVALID/MISSING PRODUCT STATE:                                                    |
| "Product not found." [Return to Products]                                        |
+----------------------------------------------------------------------------------+

Interaction notes:
- Add to Cart updates cart state and optional cart count in nav.
- Go to Cart navigates to ShoppingCart.

## 6. ShoppingCart Page Wireframe

+----------------------------------------------------------------------------------+
| NAV BAR (expanded or collapsed depending on viewport)                            |
+----------------------------------------------------------------------------------+
| PAGE TITLE: Shopping Cart                                                         |
+----------------------------------------------------------------------------------+
| ITEM ROW                                                                           |
| Product Name | Unit Price | Qty [-] [2] [+] | Line Total | [Remove]             |
+----------------------------------------------------------------------------------+
| ITEM ROW                                                                           |
| Product Name | Unit Price | Qty [-] [1] [+] | Line Total | [Remove]             |
+----------------------------------------------------------------------------------+
| CART SUMMARY                                                                       |
| Subtotal: $XXX.XX                                                                 |
| (Optional) Tax: $XX.XX                                                            |
| (Optional) Total: $XXX.XX                                                         |
| [Continue Shopping]                                         [Proceed to Checkout]|
+----------------------------------------------------------------------------------+
| EMPTY CART STATE:                                                                  |
| "Your cart is empty." [Go to Products]                                           |
+----------------------------------------------------------------------------------+

Interaction notes:
- Quantity updates should recalculate line totals and subtotal immediately.
- Remove deletes item from cart and refreshes summary.

## 7. Checkout Page Wireframe

+----------------------------------------------------------------------------------+
| NAV BAR (expanded or collapsed depending on viewport)                            |
+----------------------------------------------------------------------------------+
| PAGE TITLE: Checkout                                                              |
+----------------------------------------------------------------------------------+
| LEFT COLUMN: Checkout Form              | RIGHT COLUMN: Order Summary            |
|-----------------------------------------+----------------------------------------|
| Full Name *  [____________________]     | Item A x2 ............. $XX.XX        |
| Email *      [____________________]     | Item B x1 ............. $XX.XX        |
| Address *    [____________________]     | ------------------------------------- |
|             [____________________]      | Subtotal .............. $XXX.XX       |
|             [____________________]      | (Optional tax/total)                  |
|                                         |                                        |
| [Place Mock Order]                      |                                        |
| Validation messages appear below fields |                                        |
+----------------------------------------------------------------------------------+

Confirmation state after submit:

+----------------------------------------------------------------------------------+
| ORDER CONFIRMATION                                                                |
| "Thank you! Your mock order has been placed."                                    |
| [Back to Products]                                                                |
+----------------------------------------------------------------------------------+

Interaction notes:
- Required field validation: Full Name, Email, Address.
- On successful submit: show confirmation and clear cart state.

## 8. Responsive Behavior Notes
1. Desktop: expanded top navigation and multi-column content where applicable.
2. Mobile: collapsed navigation with menu toggle and stacked page sections.
3. Navigation breakpoint: switch from collapsed to expanded navigation at 600px.
4. Keep call-to-action buttons visible and easy to tap on small screens.

## 9. Handoff Notes For Copilot Agent
1. Treat these wireframes as structural layout guidance, not visual design specs.
2. Implement semantic HTML sections matching each wireframe area.
3. Reuse a shared nav component/pattern across all pages.
4. Ensure all linked actions in wireframes are implemented in JavaScript.
5. Use sample dataset to populate Products, ProductDetails, cart rows, and summary values.

## Implementation Addendum (March 17, 2026)

The following requirements are additional implementation constraints for this prototype and should be treated as in-scope.

### Navigation And Responsive Behavior
1. The navigation bar must stay on the left side of the app for all device sizes.
2. The navigation must support collapsed and expanded states while remaining left-aligned in layout.
3. Use collapsed mobile navigation below 600px and expanded navigation at 600px and above.
4. Add an emoji icon for each navigation link:
   - Products
   - ShoppingCart
   - Checkout
   - Cart
5. In collapsed mode, navigation link emoji should be horizontally centered.
6. Show a cart item count badge in the navigation next to the Cart link.

### Interaction Feedback
1. Do not use alert() popups for user feedback.
2. Use in-app notification banners/toasts for key events, including add-to-cart and order placement.
3. After successful checkout submission, display an in-page confirmation/thank-you message.

### Quality And Measurable UX Characteristics
1. Navigation behavior should remain functional and visually stable during viewport resizing.
2. Cart badge count should update immediately after add, remove, and quantity updates.
3. Feedback messages should be visible without interrupting user workflow.
