This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


let solutionCubeState = [
  Array(9).fill(‘Orange’),
  Array(9).fill(‘Blue’),
  Array(9).fill(‘White’),
  Array(9).fill(‘Red’),
  Array(9).fill(‘Yellow’),
  Array(9).fill(‘Green’),
];

[
    [‘Orange’, ‘Orange’, ‘Orange’, ‘Orange’, ‘Orange’, ‘Orange’, ‘Orange’, ‘Orange’, ‘Orange’],
    [‘Blue’, ‘Blue’, ‘Blue’, ‘Blue’, ‘Blue’, ‘Blue’, ‘Blue’, ‘Blue’, ‘Blue’],
    [‘White’, ‘White’, ‘White’, ‘White’, ‘White’, ‘White’, ‘White’, ‘White’, ‘White’],
    [‘Red’, ‘Red’, ‘Red’, ‘Red’, ‘Red’, ‘Red’, ‘Red’, ‘Red’, ‘Red’],
    [‘Yellow’, ‘Yellow’, ‘Yellow’, ‘Yellow’, ‘Yellow’, ‘Yellow’, ‘Yellow’, ‘Yellow’, ‘Yellow’],
    [‘Green’, ‘Green’, ‘Green’, ‘Green’, ‘Green’, ‘Green’, ‘Green’, ‘Green’, ‘Green’],
]
   

var stateMapping = {
  0: {
        0: [2, 2],　//white
        1: null,
        2: null,
        3: [5, 6], // green     
        4: [0, 0], //orange 
        5: null,
  },
  ...
  26: {      
        0: null,
        1: [4, 8],
        2: [1, 8],
        3: null,      
        4: null,
        5: [3, 6],
  }
}

### Useful links

https://gltf.pmnd.rs/
https://drei.pmnd.rs/?path=/story/staging-environment--environment-st-1&args=preset:forest

Use .npmrc if you need to customize npm settings for your project.
Use .nvmrc if you want to specify the Node.js version for your project.