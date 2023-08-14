---
title: 'MicrocAML'
date: '2023-08-13'
---

# MicroAML - A Minimalistic OCaml-based Language

MicroAML is a simple programming language implemented in OCaml. It comes with its own lexer, parser, and interpreter. The language is designed to provide a basic understanding of language processing concepts and serves as an educational project.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Syntax](#syntax)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Introduction

MicroAML is a minimalistic programming language created using OCaml. It includes a custom lexer, parser, and interpreter, all written from scratch. The goal of MicroAML is to provide a clear and concise example of language processing techniques, making it suitable for educational purposes.

## Features

- Simple expression-based syntax.
- Basic support for `let`, `if`, and function definitions.
- Arithmetic and logical operations.
- Data types include integers, booleans, and strings.

## Getting Started

### Installation

To run MicroAML, you'll need OCaml installed on your system. Follow these steps to set up the environment:

1. Install OCaml: Visit the [official OCaml website](https://ocaml.org/docs/install.html) for installation instructions relevant to your operating system.

2. Clone the MicroAML repository:

   '''
   git clone https://github.com/your-username/microaml.git
   cd microaml
   '''

### Usage

1. Compile the MicroAML interpreter:

   '''
   make
   '''

2. Run the interpreter with a MicroAML script:

   '''
   ./microaml your_script.mlaml
   '''

## Syntax

MicroAML features a simple syntax designed to illustrate fundamental language processing concepts. Here are some key elements of the MicroAML syntax:

- **Expressions**: Expressions can include arithmetic and logical operations, function calls, and basic data types.
- **Variables and Bindings**: Variables are defined using the `let` keyword. Functions are also defined using the `fun` keyword.
- **Conditional Statements**: Conditional branching is achieved using the `if` keyword.
- **Data Types**: MicroAML supports integers, booleans, and strings.

For detailed syntax examples, refer to the [Examples](#examples) section.

## Examples

MicroAML code examples:

1. **Basic Arithmetic**:

```ocaml
let x = 5 + 3 in
x
```

2. **Conditional Statement**:
```ocaml
let result =
    if x > 10 then
        "Greater than 10"
    else
        "Not greater than 10"
in
result
```

3. **Function Definition and Call**:
```ocaml
let add x y = x + y in
let sum = add 3 4 in
sum
```

4. **Recursive Function**:
```ocaml
let rec factorial n =
    if n <= 1 then
        1
    else
        n * factorial (n - 1)
in
factorial 5
```

## Contributing

Contributions to MicroAML are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Commit your changes and push them to your fork.
5. Submit a pull request describing your changes.

## License

MicroAML is released under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code according to the terms of the license.

