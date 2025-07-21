# Complete React Project



### create project

`yarn create vite completeRectProject`


## how to run

`yarn dev`

### create folder command

`mkdir -p components pages`

### create file command

`touch Header.jsx Footer.jsx Layout.jsx LoadingSpinner.jsx`

`touch About.jsx Contact.jsx Dashboard.jsx Home.jsx Login.jsx NotFound.jsx ProductDetail.jsx Products.jsx`


### Install Required Packages

`npm install react-router-dom`
# or
`yarn add react-router-dom`






# Implementing Routing in React

This guide provides a comprehensive overview of implementing routing in React using **React Router**, the most widely used routing library for single-page applications (SPAs).

## Table of Contents
1. [Installation](#installation)
2. [Basic Routing Setup](#basic-routing-setup)
3. [Navigation Between Routes](#navigation-between-routes)
4. [Dynamic Routing with Parameters](#dynamic-routing-with-parameters)
5. [Nested Routes](#nested-routes)
6. [Programmatic Navigation](#programmatic-navigation)
7. [Protected Routes (Authentication)](#protected-routes-authentication)
8. [404 Not Found Route](#404-not-found-route)
9. [Lazy Loading Routes (Code Splitting)](#lazy-loading-routes-code-splitting)
10. [Complete Example](#complete-example)
11. [Key Concepts](#key-concepts)

## Installation

Install React Router in your project:

```bash
npm install react-router-dom
# or
yarn add react-router-dom