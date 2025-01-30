# Next.js 15 Hydration Error with Large Data in getServerSideProps

This repository demonstrates a hydration error that occurs in a Next.js 15 application when using a custom `getServerSideProps` function that returns a large amount of data.  The error arises because the client-side rendering doesn't match the server-side rendering due to differences in data handling.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the hydration mismatch error in your browser's console.

## Solution

The solution involves optimizing the data returned by `getServerSideProps`.  This could include techniques like pagination, data fetching in components, or employing a more efficient data structure to handle the large amount of data more efficiently.  The solution file demonstrates using a more efficient data processing method to avoid the issue.