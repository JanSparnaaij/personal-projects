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
3. Keep call-to-action buttons visible and easy to tap on small screens.

## 9. Handoff Notes For Copilot Agent
1. Treat these wireframes as structural layout guidance, not visual design specs.
2. Implement semantic HTML sections matching each wireframe area.
3. Reuse a shared nav component/pattern across all pages.
4. Ensure all linked actions in wireframes are implemented in JavaScript.
5. Use sample dataset to populate Products, ProductDetails, cart rows, and summary values.
