# Lab 9.1 — Component Basics

This project contains a few simple React + TypeScript components to practice **component props**, **conditional rendering**, and **callback props**.

## Setup / Run

```bash
npm install
npm run dev
```

## Components

### `AlertBox`

A styled alert banner with a required message and type. Optionally supports a close action and nested content.

#### Props

- `type` **(required)**: `"success" | "error" | "warning" | "info"`
  - Controls the color/theme of the alert.
  - Must match one of the keys used internally for styling.
- `message` **(required)**: `string`
  - Main alert text.
- `onClose` _(optional)_: `() => void`
  - Called when the close button is clicked.
  - **Special handling:** defaults to a no-op function if not provided, so clicking close will do nothing (but will not error).
- `children` _(optional)_: `React.ReactNode`
  - Additional content rendered inside the alert.

#### Example

```tsx
<AlertBox
  type="success"
  message="Profile updated successfully!"
  onClose={() => console.log("Alert closed")}
>
  <p>You can continue editing your profile.</p>
</AlertBox>
```

### `UserProfileCard`

Displays basic user information, optionally showing email/role, and supports an edit callback.

#### Props

- `user` **(required)**:

  ```ts
  {
    id: string;
    name: string;
    email: string;
    role: string;
    avatarUrl?: string;
  }
  ```

  - **Special handling:** if `user.avatarUrl` is not provided, the avatar image is not rendered.

- `showEmail` _(optional)_: `boolean`
  - Whether to render the user’s email.
  - **Special handling:** defaults to `false` (if omitted, email is hidden).
- `showRole` _(optional)_: `boolean`
  - Whether to render the user’s role.
  - **Special handling:** defaults to `false` (if omitted, role is hidden).
- `onEdit` _(optional)_: `(userId: string) => void`
  - Called when the Edit button is clicked with `user.id`.
  - **Special handling:** defaults to a no-op function if not provided.
- `children` _(optional)_: `React.ReactNode`
  - Extra content rendered in the card.

#### Example

```tsx
<UserProfileCard
  user={{
    id: "u1",
    name: "Ada Lovelace",
    email: "ada@example.com",
    role: "Admin",
    avatarUrl: "https://example.com/ada.png",
  }}
  showEmail
  showRole
  onEdit={(id) => console.log("Edit user", id)}
>
  <p>Member since 2024</p>
</UserProfileCard>
```

### `ProductDisplay`

Shows product details with optional description/stock status and an “add to cart” callback.

#### Props

- `product` **(required)**:

  ```ts
  {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl?: string;
    inStock: boolean;
  }
  ```

  - **Special handling:** if `product.imageUrl` is not provided, the image is not rendered.

- `showDescription` _(optional)_: `boolean`
  - Whether to render the product description.
  - **Special handling:** if omitted, it behaves like `false` (description hidden).
- `showStockStatus` _(optional)_: `boolean`
  - Whether to render the stock status text.
  - **Special handling:** if omitted, it behaves like `false` (stock status hidden).
- `onAddToCart` _(optional)_: `(productId: string) => void`
  - Called when the “Add to Cart” button is clicked with `product.id`.
  - **Special handling:** defaults to a no-op function if not provided.
- `children` _(optional)_: `React.ReactNode`
  - Extra content rendered in the product card.

#### Example

```tsx
<ProductDisplay
  product={{
    id: "p1",
    name: "Mechanical Keyboard",
    price: 129.99,
    description: "A durable keyboard with tactile switches.",
    imageUrl: "https://example.com/keyboard.jpg",
    inStock: true,
  }}
  showDescription
  showStockStatus
  onAddToCart={(id) => console.log("Add product to cart:", id)}
>
  <small>Free shipping on orders over $50.</small>
</ProductDisplay>
```

## Notes on “special prop handling.”

This project uses a few patterns that are helpful to know:

- **Callback props default to no-op functions** in some components (e.g., `onClose`, `onEdit`, `onAddToCart`).  
  This prevents runtime errors when a button is clicked, but no handler is provided.
- **Optional `imageUrl` / `avatarUrl` props control conditional rendering**: the `<img>` element is only shown when the URL exists.
- **Boolean display flags** (`showEmail`, `showRole`, `showDescription`, `showStockStatus`) determine whether sections are rendered.

## Reflections

How did you handle optional props in your components?

- I used the default value for them or Conditional rendering with && for optional content

What considerations did you make when designing the component interfaces?

- The interface needed to account for all possible properties and distinguish between the required properties and optional properties. Constrain values with union types when only specific options are valid

How did you ensure type safety across your components?

- Define types of props for each component.

What challenges did you face when implementing component composition?

- Creating the documentation is kind of challenging.

  ##

👤 Author
Saba Beigi
🌎 Charlotte, NC
💼 GitHub @sababg
📧 beigisaba@gmail.com

Feel free to reach out with questions, feedback, or ideas!
