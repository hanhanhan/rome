# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 107`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2015/uncategorised/107/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2015/uncategorised/107/input.js"
		end: Object {
			column: 26
			index: 26
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSForOfStatement {
			await: false
			loc: Object {
				filename: "es2015/uncategorised/107/input.js"
				end: Object {
					column: 26
					index: 26
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			left: JSAssignmentIdentifier {
				name: "x"
				loc: Object {
					filename: "es2015/uncategorised/107/input.js"
					identifierName: "x"
					end: Object {
						column: 5
						index: 5
						line: 1
					}
					start: Object {
						column: 4
						index: 4
						line: 1
					}
				}
			}
			right: JSReferenceIdentifier {
				name: "list"
				loc: Object {
					filename: "es2015/uncategorised/107/input.js"
					identifierName: "list"
					end: Object {
						column: 13
						index: 13
						line: 1
					}
					start: Object {
						column: 9
						index: 9
						line: 1
					}
				}
			}
			body: JSExpressionStatement {
				loc: Object {
					filename: "es2015/uncategorised/107/input.js"
					end: Object {
						column: 26
						index: 26
						line: 1
					}
					start: Object {
						column: 15
						index: 15
						line: 1
					}
				}
				expression: JSCallExpression {
					loc: Object {
						filename: "es2015/uncategorised/107/input.js"
						end: Object {
							column: 25
							index: 25
							line: 1
						}
						start: Object {
							column: 15
							index: 15
							line: 1
						}
					}
					callee: JSReferenceIdentifier {
						name: "process"
						loc: Object {
							filename: "es2015/uncategorised/107/input.js"
							identifierName: "process"
							end: Object {
								column: 22
								index: 22
								line: 1
							}
							start: Object {
								column: 15
								index: 15
								line: 1
							}
						}
					}
					arguments: Array [
						JSReferenceIdentifier {
							name: "x"
							loc: Object {
								filename: "es2015/uncategorised/107/input.js"
								identifierName: "x"
								end: Object {
									column: 24
									index: 24
									line: 1
								}
								start: Object {
									column: 23
									index: 23
									line: 1
								}
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```