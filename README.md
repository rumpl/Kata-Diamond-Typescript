# kata-diamond-typescript

The goal here is to implement a typescript implementation of the Diamond Kata

## Goal

`Given a letter, print a diamond starting with ‘A’ with the supplied letter at the widest point.

For example: print-diamond ‘C’ prints

  A
 B B
C   C
 B B
  A  `

## Prerequisites
You need typescript installed:

    npm install typescript -g  

You also need tsd:

    npm install tsd -g  
To test your installation you can run "npm test". This repository includes a complex number implementation alon with unit tests as an example.  

**Note:** if you have installed Typescript with Visual Studio, you might have a very old version of typescript on your path. To know which version of typescript is installed on your box just type the followning command:

    tsc -v // should return at least 1.7

In order to transpile typescript code within your browser using file index.html, you need to use a static file http server. One simple solution is "http-server":

    npm install http-server -g

and then just run http-server from the directory where is located index.html

## Running the example
	npm install
	tsd install
	npm test

Enjoy.