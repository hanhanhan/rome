# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-object-initialiser > invalid-proto-setter-literal-identifier`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
		end: Object {
			column: 0
			index: 62
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: MARKUP {parts: Array [RAW_MARKUP {value: "Redefinition of __proto__ property"}]}
			}
			location: Object {
				filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 51
					index: 51
					line: 1
				}
				start: Object {
					column: 42
					index: 42
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
				end: Object {
					column: 61
					index: 61
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSObjectExpression {
				loc: Object {
					filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
					end: Object {
						column: 60
						index: 60
						line: 1
					}
					start: Object {
						column: 1
						index: 1
						line: 1
					}
				}
				properties: Array [
					JSObjectMethod {
						kind: "set"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "__proto__"
								loc: Object {
									filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
									identifierName: "__proto__"
									end: Object {
										column: 16
										index: 16
										line: 1
									}
									start: Object {
										column: 7
										index: 7
										line: 1
									}
								}
							}
							loc: Object {
								filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
								end: Object {
									column: 16
									index: 16
									line: 1
								}
								start: Object {
									column: 7
									index: 7
									line: 1
								}
							}
						}
						loc: Object {
							filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
							end: Object {
								column: 21
								index: 21
								line: 1
							}
							start: Object {
								column: 3
								index: 3
								line: 1
							}
						}
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: Object {
								filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
								end: Object {
									column: 21
									index: 21
									line: 1
								}
								start: Object {
									column: 19
									index: 19
									line: 1
								}
							}
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: Object {
								filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
								end: Object {
									column: 19
									index: 19
									line: 1
								}
								start: Object {
									column: 16
									index: 16
									line: 1
								}
							}
							params: Array [
								JSBindingIdentifier {
									name: "x"
									loc: Object {
										filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
										identifierName: "x"
										end: Object {
											column: 18
											index: 18
											line: 1
										}
										start: Object {
											column: 17
											index: 17
											line: 1
										}
									}
									meta: JSPatternMeta {
										optional: undefined
										typeAnnotation: undefined
										loc: Object {
											filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
											end: Object {
												column: 18
												index: 18
												line: 1
											}
											start: Object {
												column: 17
												index: 17
												line: 1
											}
										}
									}
								}
							]
						}
					}
					JSObjectProperty {
						key: JSStaticPropertyKey {
							value: JSStringLiteral {
								value: "__proto__"
								loc: Object {
									filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
									end: Object {
										column: 34
										index: 34
										line: 1
									}
									start: Object {
										column: 23
										index: 23
										line: 1
									}
								}
							}
							loc: Object {
								filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
								end: Object {
									column: 34
									index: 34
									line: 1
								}
								start: Object {
									column: 23
									index: 23
									line: 1
								}
							}
						}
						value: JSNullLiteral {
							loc: Object {
								filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
								end: Object {
									column: 40
									index: 40
									line: 1
								}
								start: Object {
									column: 36
									index: 36
									line: 1
								}
							}
						}
						loc: Object {
							filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
							end: Object {
								column: 40
								index: 40
								line: 1
							}
							start: Object {
								column: 23
								index: 23
								line: 1
							}
						}
					}
					JSObjectProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "__proto__"
								loc: Object {
									filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
									identifierName: "__proto__"
									end: Object {
										column: 51
										index: 51
										line: 1
									}
									start: Object {
										column: 42
										index: 42
										line: 1
									}
								}
							}
							loc: Object {
								filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
								end: Object {
									column: 51
									index: 51
									line: 1
								}
								start: Object {
									column: 42
									index: 42
									line: 1
								}
							}
						}
						value: JSNullLiteral {
							loc: Object {
								filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
								end: Object {
									column: 57
									index: 57
									line: 1
								}
								start: Object {
									column: 53
									index: 53
									line: 1
								}
							}
						}
						loc: Object {
							filename: "esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js"
							end: Object {
								column: 57
								index: 57
								line: 1
							}
							start: Object {
								column: 42
								index: 42
								line: 1
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/es2015-object-initialiser/invalid-proto-setter-literal-identifier/input.js:1:42 parse/js ━━

  ✖ Redefinition of __proto__ property

    ({ set __proto__(x){}, "__proto__": null, __proto__: null, })
                                              ^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```