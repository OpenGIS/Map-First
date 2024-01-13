var Tr =
		typeof globalThis < "u"
			? globalThis
			: typeof window < "u"
				? window
				: typeof global < "u"
					? global
					: typeof self < "u"
						? self
						: {},
	Ar = { exports: {} },
	wr = { exports: {} };
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */ var Nr;
function Fr() {
	return (
		Nr ||
			((Nr = 1),
			(function (He) {
				(function (V, de) {
					He.exports = V.document
						? de(V, !0)
						: function (f) {
								if (!f.document)
									throw new Error("jQuery requires a window with a document");
								return de(f);
							};
				})(typeof window < "u" ? window : Tr, function (V, de) {
					var f = [],
						qt = Object.getPrototypeOf,
						oe = f.slice,
						ce = f.flat
							? function (e) {
									return f.flat.call(e);
								}
							: function (e) {
									return f.concat.apply([], e);
								},
						Be = f.push,
						Me = f.indexOf,
						P = {},
						pt = P.toString,
						Ye = P.hasOwnProperty,
						Rt = Ye.toString,
						Vi = Rt.call(Object),
						z = {},
						X = function (t) {
							return (
								typeof t == "function" &&
								typeof t.nodeType != "number" &&
								typeof t.item != "function"
							);
						},
						Ft = function (t) {
							return t != null && t === t.window;
						},
						Y = V.document,
						Wt = { type: !0, src: !0, nonce: !0, noModule: !0 };
					function Bt(e, t, i) {
						i = i || Y;
						var r,
							a,
							u = i.createElement("script");
						if (((u.text = e), t))
							for (r in Wt)
								(a = t[r] || (t.getAttribute && t.getAttribute(r))),
									a && u.setAttribute(r, a);
						i.head.appendChild(u).parentNode.removeChild(u);
					}
					function ut(e) {
						return e == null
							? e + ""
							: typeof e == "object" || typeof e == "function"
								? P[pt.call(e)] || "object"
								: typeof e;
					}
					var Tn = "3.7.1",
						Qn = /HTML$/i,
						o = function (e, t) {
							return new o.fn.init(e, t);
						};
					(o.fn = o.prototype =
						{
							jquery: Tn,
							constructor: o,
							length: 0,
							toArray: function () {
								return oe.call(this);
							},
							get: function (e) {
								return e == null
									? oe.call(this)
									: e < 0
										? this[e + this.length]
										: this[e];
							},
							pushStack: function (e) {
								var t = o.merge(this.constructor(), e);
								return (t.prevObject = this), t;
							},
							each: function (e) {
								return o.each(this, e);
							},
							map: function (e) {
								return this.pushStack(
									o.map(this, function (t, i) {
										return e.call(t, i, t);
									}),
								);
							},
							slice: function () {
								return this.pushStack(oe.apply(this, arguments));
							},
							first: function () {
								return this.eq(0);
							},
							last: function () {
								return this.eq(-1);
							},
							even: function () {
								return this.pushStack(
									o.grep(this, function (e, t) {
										return (t + 1) % 2;
									}),
								);
							},
							odd: function () {
								return this.pushStack(
									o.grep(this, function (e, t) {
										return t % 2;
									}),
								);
							},
							eq: function (e) {
								var t = this.length,
									i = +e + (e < 0 ? t : 0);
								return this.pushStack(i >= 0 && i < t ? [this[i]] : []);
							},
							end: function () {
								return this.prevObject || this.constructor();
							},
							push: Be,
							sort: f.sort,
							splice: f.splice,
						}),
						(o.extend = o.fn.extend =
							function () {
								var e,
									t,
									i,
									r,
									a,
									u,
									h = arguments[0] || {},
									y = 1,
									g = arguments.length,
									b = !1;
								for (
									typeof h == "boolean" &&
										((b = h), (h = arguments[y] || {}), y++),
										typeof h != "object" && !X(h) && (h = {}),
										y === g && ((h = this), y--);
									y < g;
									y++
								)
									if ((e = arguments[y]) != null)
										for (t in e)
											(r = e[t]),
												!(t === "__proto__" || h === r) &&
													(b &&
													r &&
													(o.isPlainObject(r) || (a = Array.isArray(r)))
														? ((i = h[t]),
															a && !Array.isArray(i)
																? (u = [])
																: !a && !o.isPlainObject(i)
																	? (u = {})
																	: (u = i),
															(a = !1),
															(h[t] = o.extend(b, u, r)))
														: r !== void 0 && (h[t] = r));
								return h;
							}),
						o.extend({
							expando: "jQuery" + (Tn + Math.random()).replace(/\D/g, ""),
							isReady: !0,
							error: function (e) {
								throw new Error(e);
							},
							noop: function () {},
							isPlainObject: function (e) {
								var t, i;
								return !e || pt.call(e) !== "[object Object]"
									? !1
									: ((t = qt(e)),
										t
											? ((i = Ye.call(t, "constructor") && t.constructor),
												typeof i == "function" && Rt.call(i) === Vi)
											: !0);
							},
							isEmptyObject: function (e) {
								var t;
								for (t in e) return !1;
								return !0;
							},
							globalEval: function (e, t, i) {
								Bt(e, { nonce: t && t.nonce }, i);
							},
							each: function (e, t) {
								var i,
									r = 0;
								if (Tt(e))
									for (
										i = e.length;
										r < i && t.call(e[r], r, e[r]) !== !1;
										r++
									);
								else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
								return e;
							},
							text: function (e) {
								var t,
									i = "",
									r = 0,
									a = e.nodeType;
								if (!a) for (; (t = e[r++]); ) i += o.text(t);
								return a === 1 || a === 11
									? e.textContent
									: a === 9
										? e.documentElement.textContent
										: a === 3 || a === 4
											? e.nodeValue
											: i;
							},
							makeArray: function (e, t) {
								var i = t || [];
								return (
									e != null &&
										(Tt(Object(e))
											? o.merge(i, typeof e == "string" ? [e] : e)
											: Be.call(i, e)),
									i
								);
							},
							inArray: function (e, t, i) {
								return t == null ? -1 : Me.call(t, e, i);
							},
							isXMLDoc: function (e) {
								var t = e && e.namespaceURI,
									i = e && (e.ownerDocument || e).documentElement;
								return !Qn.test(t || (i && i.nodeName) || "HTML");
							},
							merge: function (e, t) {
								for (var i = +t.length, r = 0, a = e.length; r < i; r++)
									e[a++] = t[r];
								return (e.length = a), e;
							},
							grep: function (e, t, i) {
								for (var r, a = [], u = 0, h = e.length, y = !i; u < h; u++)
									(r = !t(e[u], u)), r !== y && a.push(e[u]);
								return a;
							},
							map: function (e, t, i) {
								var r,
									a,
									u = 0,
									h = [];
								if (Tt(e))
									for (r = e.length; u < r; u++)
										(a = t(e[u], u, i)), a != null && h.push(a);
								else for (u in e) (a = t(e[u], u, i)), a != null && h.push(a);
								return ce(h);
							},
							guid: 1,
							support: z,
						}),
						typeof Symbol == "function" &&
							(o.fn[Symbol.iterator] = f[Symbol.iterator]),
						o.each(
							"Boolean Number String Function Array Date RegExp Object Error Symbol".split(
								" ",
							),
							function (e, t) {
								P["[object " + t + "]"] = t.toLowerCase();
							},
						);
					function Tt(e) {
						var t = !!e && "length" in e && e.length,
							i = ut(e);
						return X(e) || Ft(e)
							? !1
							: i === "array" ||
									t === 0 ||
									(typeof t == "number" && t > 0 && t - 1 in e);
					}
					function ae(e, t) {
						return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
					}
					var Ki = f.pop,
						vi = f.sort,
						$i = f.splice,
						re = "[\\x20\\t\\r\\n\\f]",
						ln = new RegExp(
							"^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$",
							"g",
						);
					o.contains = function (e, t) {
						var i = t && t.parentNode;
						return (
							e === i ||
							!!(
								i &&
								i.nodeType === 1 &&
								(e.contains
									? e.contains(i)
									: e.compareDocumentPosition &&
										e.compareDocumentPosition(i) & 16)
							)
						);
					};
					var yi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
					function _i(e, t) {
						return t
							? e === "\0"
								? "�"
								: e.slice(0, -1) +
									"\\" +
									e.charCodeAt(e.length - 1).toString(16) +
									" "
							: "\\" + e;
					}
					o.escapeSelector = function (e) {
						return (e + "").replace(yi, _i);
					};
					var je = Y,
						gt = Be;
					(function () {
						var e,
							t,
							i,
							r,
							a,
							u = gt,
							h,
							y,
							g,
							b,
							S,
							A = o.expando,
							w = 0,
							N = 0,
							B = Hn(),
							$ = Hn(),
							J = Hn(),
							ge = Hn(),
							pe = function (p, _) {
								return p === _ && (a = !0), 0;
							},
							it =
								"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
							rt =
								"(?:\\\\[\\da-fA-F]{1,6}" +
								re +
								"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
							te =
								"\\[" +
								re +
								"*(" +
								rt +
								")(?:" +
								re +
								"*([*^$|!~]?=)" +
								re +
								`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
								rt +
								"))|)" +
								re +
								"*\\]",
							jt =
								":(" +
								rt +
								`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
								te +
								")*)|.*)\\)|)",
							Z = new RegExp(re + "+", "g"),
							le = new RegExp("^" + re + "*," + re + "*"),
							En = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
							Lt = new RegExp(re + "|>"),
							Oe = new RegExp(jt),
							wn = new RegExp("^" + rt + "$"),
							ot = {
								ID: new RegExp("^#(" + rt + ")"),
								CLASS: new RegExp("^\\.(" + rt + ")"),
								TAG: new RegExp("^(" + rt + "|[*])"),
								ATTR: new RegExp("^" + te),
								PSEUDO: new RegExp("^" + jt),
								CHILD: new RegExp(
									"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
										re +
										"*(even|odd|(([+-]|)(\\d*)n|)" +
										re +
										"*(?:([+-]|)" +
										re +
										"*(\\d+)|))" +
										re +
										"*\\)|)",
									"i",
								),
								bool: new RegExp("^(?:" + it + ")$", "i"),
								needsContext: new RegExp(
									"^" +
										re +
										"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
										re +
										"*((?:-\\d)?\\d*)" +
										re +
										"*\\)|)(?=[^-]|$)",
									"i",
								),
							},
							Re = /^(?:input|select|textarea|button)$/i,
							st = /^h\d$/i,
							Fe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
							li = /[+~]/,
							xe = new RegExp(
								"\\\\[\\da-fA-F]{1,6}" + re + "?|\\\\([^\\r\\n\\f])",
								"g",
							),
							ke = function (p, _) {
								var E = "0x" + p.slice(1) - 65536;
								return (
									_ ||
									(E < 0
										? String.fromCharCode(E + 65536)
										: String.fromCharCode(
												(E >> 10) | 55296,
												(E & 1023) | 56320,
											))
								);
							},
							Pn = function () {
								$e();
							},
							Ve = Mn(
								function (p) {
									return p.disabled === !0 && ae(p, "fieldset");
								},
								{ dir: "parentNode", next: "legend" },
							);
						function pr() {
							try {
								return h.activeElement;
							} catch {}
						}
						try {
							u.apply((f = oe.call(je.childNodes)), je.childNodes),
								f[je.childNodes.length].nodeType;
						} catch {
							u = {
								apply: function (_, E) {
									gt.apply(_, oe.call(E));
								},
								call: function (_) {
									gt.apply(_, oe.call(arguments, 1));
								},
							};
						}
						function ie(p, _, E, T) {
							var D,
								I,
								L,
								M,
								k,
								G,
								Q,
								U = _ && _.ownerDocument,
								ee = _ ? _.nodeType : 9;
							if (
								((E = E || []),
								typeof p != "string" ||
									!p ||
									(ee !== 1 && ee !== 9 && ee !== 11))
							)
								return E;
							if (!T && ($e(_), (_ = _ || h), g)) {
								if (ee !== 11 && (k = Fe.exec(p)))
									if ((D = k[1])) {
										if (ee === 9)
											if ((L = _.getElementById(D))) {
												if (L.id === D) return u.call(E, L), E;
											} else return E;
										else if (
											U &&
											(L = U.getElementById(D)) &&
											ie.contains(_, L) &&
											L.id === D
										)
											return u.call(E, L), E;
									} else {
										if (k[2]) return u.apply(E, _.getElementsByTagName(p)), E;
										if ((D = k[3]) && _.getElementsByClassName)
											return u.apply(E, _.getElementsByClassName(D)), E;
									}
								if (!ge[p + " "] && (!b || !b.test(p))) {
									if (
										((Q = p), (U = _), ee === 1 && (Lt.test(p) || En.test(p)))
									) {
										for (
											U = (li.test(p) && fi(_.parentNode)) || _,
												(U != _ || !z.scope) &&
													((M = _.getAttribute("id"))
														? (M = o.escapeSelector(M))
														: _.setAttribute("id", (M = A))),
												G = wt(p),
												I = G.length;
											I--;

										)
											G[I] = (M ? "#" + M : ":scope") + " " + Ht(G[I]);
										Q = G.join(",");
									}
									try {
										return u.apply(E, U.querySelectorAll(Q)), E;
									} catch {
										ge(p, !0);
									} finally {
										M === A && _.removeAttribute("id");
									}
								}
							}
							return Fn(p.replace(ln, "$1"), _, E, T);
						}
						function Hn() {
							var p = [];
							function _(E, T) {
								return (
									p.push(E + " ") > t.cacheLength && delete _[p.shift()],
									(_[E + " "] = T)
								);
							}
							return _;
						}
						function Ke(p) {
							return (p[A] = !0), p;
						}
						function on(p) {
							var _ = h.createElement("fieldset");
							try {
								return !!p(_);
							} catch {
								return !1;
							} finally {
								_.parentNode && _.parentNode.removeChild(_), (_ = null);
							}
						}
						function gr(p) {
							return function (_) {
								return ae(_, "input") && _.type === p;
							};
						}
						function mr(p) {
							return function (_) {
								return (ae(_, "input") || ae(_, "button")) && _.type === p;
							};
						}
						function Bi(p) {
							return function (_) {
								return "form" in _
									? _.parentNode && _.disabled === !1
										? "label" in _
											? "label" in _.parentNode
												? _.parentNode.disabled === p
												: _.disabled === p
											: _.isDisabled === p ||
												(_.isDisabled !== !p && Ve(_) === p)
										: _.disabled === p
									: "label" in _
										? _.disabled === p
										: !1;
							};
						}
						function Pt(p) {
							return Ke(function (_) {
								return (
									(_ = +_),
									Ke(function (E, T) {
										for (var D, I = p([], E.length, _), L = I.length; L--; )
											E[(D = I[L])] && (E[D] = !(T[D] = E[D]));
									})
								);
							});
						}
						function fi(p) {
							return p && typeof p.getElementsByTagName < "u" && p;
						}
						function $e(p) {
							var _,
								E = p ? p.ownerDocument || p : je;
							return (
								E == h ||
									E.nodeType !== 9 ||
									!E.documentElement ||
									((h = E),
									(y = h.documentElement),
									(g = !o.isXMLDoc(h)),
									(S =
										y.matches ||
										y.webkitMatchesSelector ||
										y.msMatchesSelector),
									y.msMatchesSelector &&
										je != h &&
										(_ = h.defaultView) &&
										_.top !== _ &&
										_.addEventListener("unload", Pn),
									(z.getById = on(function (T) {
										return (
											(y.appendChild(T).id = o.expando),
											!h.getElementsByName ||
												!h.getElementsByName(o.expando).length
										);
									})),
									(z.disconnectedMatch = on(function (T) {
										return S.call(T, "*");
									})),
									(z.scope = on(function () {
										return h.querySelectorAll(":scope");
									})),
									(z.cssHas = on(function () {
										try {
											return h.querySelector(":has(*,:jqfake)"), !1;
										} catch {
											return !0;
										}
									})),
									z.getById
										? ((t.filter.ID = function (T) {
												var D = T.replace(xe, ke);
												return function (I) {
													return I.getAttribute("id") === D;
												};
											}),
											(t.find.ID = function (T, D) {
												if (typeof D.getElementById < "u" && g) {
													var I = D.getElementById(T);
													return I ? [I] : [];
												}
											}))
										: ((t.filter.ID = function (T) {
												var D = T.replace(xe, ke);
												return function (I) {
													var L =
														typeof I.getAttributeNode < "u" &&
														I.getAttributeNode("id");
													return L && L.value === D;
												};
											}),
											(t.find.ID = function (T, D) {
												if (typeof D.getElementById < "u" && g) {
													var I,
														L,
														M,
														k = D.getElementById(T);
													if (k) {
														if (
															((I = k.getAttributeNode("id")),
															I && I.value === T)
														)
															return [k];
														for (
															M = D.getElementsByName(T), L = 0;
															(k = M[L++]);

														)
															if (
																((I = k.getAttributeNode("id")),
																I && I.value === T)
															)
																return [k];
													}
													return [];
												}
											})),
									(t.find.TAG = function (T, D) {
										return typeof D.getElementsByTagName < "u"
											? D.getElementsByTagName(T)
											: D.querySelectorAll(T);
									}),
									(t.find.CLASS = function (T, D) {
										if (typeof D.getElementsByClassName < "u" && g)
											return D.getElementsByClassName(T);
									}),
									(b = []),
									on(function (T) {
										var D;
										(y.appendChild(T).innerHTML =
											"<a id='" +
											A +
											"' href='' disabled='disabled'></a><select id='" +
											A +
											"-\r\\' disabled='disabled'><option selected=''></option></select>"),
											T.querySelectorAll("[selected]").length ||
												b.push("\\[" + re + "*(?:value|" + it + ")"),
											T.querySelectorAll("[id~=" + A + "-]").length ||
												b.push("~="),
											T.querySelectorAll("a#" + A + "+*").length ||
												b.push(".#.+[+~]"),
											T.querySelectorAll(":checked").length ||
												b.push(":checked"),
											(D = h.createElement("input")),
											D.setAttribute("type", "hidden"),
											T.appendChild(D).setAttribute("name", "D"),
											(y.appendChild(T).disabled = !0),
											T.querySelectorAll(":disabled").length !== 2 &&
												b.push(":enabled", ":disabled"),
											(D = h.createElement("input")),
											D.setAttribute("name", ""),
											T.appendChild(D),
											T.querySelectorAll("[name='']").length ||
												b.push(
													"\\[" + re + "*name" + re + "*=" + re + `*(?:''|"")`,
												);
									}),
									z.cssHas || b.push(":has"),
									(b = b.length && new RegExp(b.join("|"))),
									(pe = function (T, D) {
										if (T === D) return (a = !0), 0;
										var I =
											!T.compareDocumentPosition - !D.compareDocumentPosition;
										return (
											I ||
											((I =
												(T.ownerDocument || T) == (D.ownerDocument || D)
													? T.compareDocumentPosition(D)
													: 1),
											I & 1 ||
											(!z.sortDetached && D.compareDocumentPosition(T) === I)
												? T === h ||
													(T.ownerDocument == je && ie.contains(je, T))
													? -1
													: D === h ||
														  (D.ownerDocument == je && ie.contains(je, D))
														? 1
														: r
															? Me.call(r, T) - Me.call(r, D)
															: 0
												: I & 4
													? -1
													: 1)
										);
									})),
								h
							);
						}
						(ie.matches = function (p, _) {
							return ie(p, null, null, _);
						}),
							(ie.matchesSelector = function (p, _) {
								if (($e(p), g && !ge[_ + " "] && (!b || !b.test(_))))
									try {
										var E = S.call(p, _);
										if (
											E ||
											z.disconnectedMatch ||
											(p.document && p.document.nodeType !== 11)
										)
											return E;
									} catch {
										ge(_, !0);
									}
								return ie(_, h, null, [p]).length > 0;
							}),
							(ie.contains = function (p, _) {
								return (p.ownerDocument || p) != h && $e(p), o.contains(p, _);
							}),
							(ie.attr = function (p, _) {
								(p.ownerDocument || p) != h && $e(p);
								var E = t.attrHandle[_.toLowerCase()],
									T =
										E && Ye.call(t.attrHandle, _.toLowerCase())
											? E(p, _, !g)
											: void 0;
								return T !== void 0 ? T : p.getAttribute(_);
							}),
							(ie.error = function (p) {
								throw new Error("Syntax error, unrecognized expression: " + p);
							}),
							(o.uniqueSort = function (p) {
								var _,
									E = [],
									T = 0,
									D = 0;
								if (
									((a = !z.sortStable),
									(r = !z.sortStable && oe.call(p, 0)),
									vi.call(p, pe),
									a)
								) {
									for (; (_ = p[D++]); ) _ === p[D] && (T = E.push(D));
									for (; T--; ) $i.call(p, E[T], 1);
								}
								return (r = null), p;
							}),
							(o.fn.uniqueSort = function () {
								return this.pushStack(o.uniqueSort(oe.apply(this)));
							}),
							(t = o.expr =
								{
									cacheLength: 50,
									createPseudo: Ke,
									match: ot,
									attrHandle: {},
									find: {},
									relative: {
										">": { dir: "parentNode", first: !0 },
										" ": { dir: "parentNode" },
										"+": { dir: "previousSibling", first: !0 },
										"~": { dir: "previousSibling" },
									},
									preFilter: {
										ATTR: function (p) {
											return (
												(p[1] = p[1].replace(xe, ke)),
												(p[3] = (p[3] || p[4] || p[5] || "").replace(xe, ke)),
												p[2] === "~=" && (p[3] = " " + p[3] + " "),
												p.slice(0, 4)
											);
										},
										CHILD: function (p) {
											return (
												(p[1] = p[1].toLowerCase()),
												p[1].slice(0, 3) === "nth"
													? (p[3] || ie.error(p[0]),
														(p[4] = +(p[4]
															? p[5] + (p[6] || 1)
															: 2 * (p[3] === "even" || p[3] === "odd"))),
														(p[5] = +(p[7] + p[8] || p[3] === "odd")))
													: p[3] && ie.error(p[0]),
												p
											);
										},
										PSEUDO: function (p) {
											var _,
												E = !p[6] && p[2];
											return ot.CHILD.test(p[0])
												? null
												: (p[3]
														? (p[2] = p[4] || p[5] || "")
														: E &&
															Oe.test(E) &&
															(_ = wt(E, !0)) &&
															(_ = E.indexOf(")", E.length - _) - E.length) &&
															((p[0] = p[0].slice(0, _)),
															(p[2] = E.slice(0, _))),
													p.slice(0, 3));
										},
									},
									filter: {
										TAG: function (p) {
											var _ = p.replace(xe, ke).toLowerCase();
											return p === "*"
												? function () {
														return !0;
													}
												: function (E) {
														return ae(E, _);
													};
										},
										CLASS: function (p) {
											var _ = B[p + " "];
											return (
												_ ||
												((_ = new RegExp(
													"(^|" + re + ")" + p + "(" + re + "|$)",
												)) &&
													B(p, function (E) {
														return _.test(
															(typeof E.className == "string" && E.className) ||
																(typeof E.getAttribute < "u" &&
																	E.getAttribute("class")) ||
																"",
														);
													}))
											);
										},
										ATTR: function (p, _, E) {
											return function (T) {
												var D = ie.attr(T, p);
												return D == null
													? _ === "!="
													: _
														? ((D += ""),
															_ === "="
																? D === E
																: _ === "!="
																	? D !== E
																	: _ === "^="
																		? E && D.indexOf(E) === 0
																		: _ === "*="
																			? E && D.indexOf(E) > -1
																			: _ === "$="
																				? E && D.slice(-E.length) === E
																				: _ === "~="
																					? (
																							" " +
																							D.replace(Z, " ") +
																							" "
																						).indexOf(E) > -1
																					: _ === "|="
																						? D === E ||
																							D.slice(0, E.length + 1) ===
																								E + "-"
																						: !1)
														: !0;
											};
										},
										CHILD: function (p, _, E, T, D) {
											var I = p.slice(0, 3) !== "nth",
												L = p.slice(-4) !== "last",
												M = _ === "of-type";
											return T === 1 && D === 0
												? function (k) {
														return !!k.parentNode;
													}
												: function (k, G, Q) {
														var U,
															ee,
															F,
															se,
															De,
															me = I !== L ? "nextSibling" : "previousSibling",
															We = k.parentNode,
															at = M && k.nodeName.toLowerCase(),
															Mt = !Q && !M,
															ye = !1;
														if (We) {
															if (I) {
																for (; me; ) {
																	for (F = k; (F = F[me]); )
																		if (M ? ae(F, at) : F.nodeType === 1)
																			return !1;
																	De = me =
																		p === "only" && !De && "nextSibling";
																}
																return !0;
															}
															if (
																((De = [L ? We.firstChild : We.lastChild]),
																L && Mt)
															) {
																for (
																	ee = We[A] || (We[A] = {}),
																		U = ee[p] || [],
																		se = U[0] === w && U[1],
																		ye = se && U[2],
																		F = se && We.childNodes[se];
																	(F =
																		(++se && F && F[me]) ||
																		(ye = se = 0) ||
																		De.pop());

																)
																	if (F.nodeType === 1 && ++ye && F === k) {
																		ee[p] = [w, se, ye];
																		break;
																	}
															} else if (
																(Mt &&
																	((ee = k[A] || (k[A] = {})),
																	(U = ee[p] || []),
																	(se = U[0] === w && U[1]),
																	(ye = se)),
																ye === !1)
															)
																for (
																	;
																	(F =
																		(++se && F && F[me]) ||
																		(ye = se = 0) ||
																		De.pop()) &&
																	!(
																		(M ? ae(F, at) : F.nodeType === 1) &&
																		++ye &&
																		(Mt &&
																			((ee = F[A] || (F[A] = {})),
																			(ee[p] = [w, ye])),
																		F === k)
																	);

																);
															return (
																(ye -= D),
																ye === T || (ye % T === 0 && ye / T >= 0)
															);
														}
													};
										},
										PSEUDO: function (p, _) {
											var E,
												T =
													t.pseudos[p] ||
													t.setFilters[p.toLowerCase()] ||
													ie.error("unsupported pseudo: " + p);
											return T[A]
												? T(_)
												: T.length > 1
													? ((E = [p, p, "", _]),
														t.setFilters.hasOwnProperty(p.toLowerCase())
															? Ke(function (D, I) {
																	for (var L, M = T(D, _), k = M.length; k--; )
																		(L = Me.call(D, M[k])),
																			(D[L] = !(I[L] = M[k]));
																})
															: function (D) {
																	return T(D, 0, E);
																})
													: T;
										},
									},
									pseudos: {
										not: Ke(function (p) {
											var _ = [],
												E = [],
												T = Rn(p.replace(ln, "$1"));
											return T[A]
												? Ke(function (D, I, L, M) {
														for (
															var k, G = T(D, null, M, []), Q = D.length;
															Q--;

														)
															(k = G[Q]) && (D[Q] = !(I[Q] = k));
													})
												: function (D, I, L) {
														return (
															(_[0] = D),
															T(_, null, L, E),
															(_[0] = null),
															!E.pop()
														);
													};
										}),
										has: Ke(function (p) {
											return function (_) {
												return ie(p, _).length > 0;
											};
										}),
										contains: Ke(function (p) {
											return (
												(p = p.replace(xe, ke)),
												function (_) {
													return (_.textContent || o.text(_)).indexOf(p) > -1;
												}
											);
										}),
										lang: Ke(function (p) {
											return (
												wn.test(p || "") || ie.error("unsupported lang: " + p),
												(p = p.replace(xe, ke).toLowerCase()),
												function (_) {
													var E;
													do
														if (
															(E = g
																? _.lang
																: _.getAttribute("xml:lang") ||
																	_.getAttribute("lang"))
														)
															return (
																(E = E.toLowerCase()),
																E === p || E.indexOf(p + "-") === 0
															);
													while ((_ = _.parentNode) && _.nodeType === 1);
													return !1;
												}
											);
										}),
										target: function (p) {
											var _ = V.location && V.location.hash;
											return _ && _.slice(1) === p.id;
										},
										root: function (p) {
											return p === y;
										},
										focus: function (p) {
											return (
												p === pr() &&
												h.hasFocus() &&
												!!(p.type || p.href || ~p.tabIndex)
											);
										},
										enabled: Bi(!1),
										disabled: Bi(!0),
										checked: function (p) {
											return (
												(ae(p, "input") && !!p.checked) ||
												(ae(p, "option") && !!p.selected)
											);
										},
										selected: function (p) {
											return (
												p.parentNode && p.parentNode.selectedIndex,
												p.selected === !0
											);
										},
										empty: function (p) {
											for (p = p.firstChild; p; p = p.nextSibling)
												if (p.nodeType < 6) return !1;
											return !0;
										},
										parent: function (p) {
											return !t.pseudos.empty(p);
										},
										header: function (p) {
											return st.test(p.nodeName);
										},
										input: function (p) {
											return Re.test(p.nodeName);
										},
										button: function (p) {
											return (
												(ae(p, "input") && p.type === "button") ||
												ae(p, "button")
											);
										},
										text: function (p) {
											var _;
											return (
												ae(p, "input") &&
												p.type === "text" &&
												((_ = p.getAttribute("type")) == null ||
													_.toLowerCase() === "text")
											);
										},
										first: Pt(function () {
											return [0];
										}),
										last: Pt(function (p, _) {
											return [_ - 1];
										}),
										eq: Pt(function (p, _, E) {
											return [E < 0 ? E + _ : E];
										}),
										even: Pt(function (p, _) {
											for (var E = 0; E < _; E += 2) p.push(E);
											return p;
										}),
										odd: Pt(function (p, _) {
											for (var E = 1; E < _; E += 2) p.push(E);
											return p;
										}),
										lt: Pt(function (p, _, E) {
											var T;
											for (
												E < 0 ? (T = E + _) : E > _ ? (T = _) : (T = E);
												--T >= 0;

											)
												p.push(T);
											return p;
										}),
										gt: Pt(function (p, _, E) {
											for (var T = E < 0 ? E + _ : E; ++T < _; ) p.push(T);
											return p;
										}),
									},
								}),
							(t.pseudos.nth = t.pseudos.eq);
						for (e in {
							radio: !0,
							checkbox: !0,
							file: !0,
							password: !0,
							image: !0,
						})
							t.pseudos[e] = gr(e);
						for (e in { submit: !0, reset: !0 }) t.pseudos[e] = mr(e);
						function Et() {}
						(Et.prototype = t.filters = t.pseudos), (t.setFilters = new Et());
						function wt(p, _) {
							var E,
								T,
								D,
								I,
								L,
								M,
								k,
								G = $[p + " "];
							if (G) return _ ? 0 : G.slice(0);
							for (L = p, M = [], k = t.preFilter; L; ) {
								(!E || (T = le.exec(L))) &&
									(T && (L = L.slice(T[0].length) || L), M.push((D = []))),
									(E = !1),
									(T = En.exec(L)) &&
										((E = T.shift()),
										D.push({ value: E, type: T[0].replace(ln, " ") }),
										(L = L.slice(E.length)));
								for (I in t.filter)
									(T = ot[I].exec(L)) &&
										(!k[I] || (T = k[I](T))) &&
										((E = T.shift()),
										D.push({ value: E, type: I, matches: T }),
										(L = L.slice(E.length)));
								if (!E) break;
							}
							return _ ? L.length : L ? ie.error(p) : $(p, M).slice(0);
						}
						function Ht(p) {
							for (var _ = 0, E = p.length, T = ""; _ < E; _++) T += p[_].value;
							return T;
						}
						function Mn(p, _, E) {
							var T = _.dir,
								D = _.next,
								I = D || T,
								L = E && I === "parentNode",
								M = N++;
							return _.first
								? function (k, G, Q) {
										for (; (k = k[T]); )
											if (k.nodeType === 1 || L) return p(k, G, Q);
										return !1;
									}
								: function (k, G, Q) {
										var U,
											ee,
											F = [w, M];
										if (Q) {
											for (; (k = k[T]); )
												if ((k.nodeType === 1 || L) && p(k, G, Q)) return !0;
										} else
											for (; (k = k[T]); )
												if (k.nodeType === 1 || L)
													if (((ee = k[A] || (k[A] = {})), D && ae(k, D)))
														k = k[T] || k;
													else {
														if ((U = ee[I]) && U[0] === w && U[1] === M)
															return (F[2] = U[2]);
														if (((ee[I] = F), (F[2] = p(k, G, Q)))) return !0;
													}
										return !1;
									};
						}
						function qn(p) {
							return p.length > 1
								? function (_, E, T) {
										for (var D = p.length; D--; ) if (!p[D](_, E, T)) return !1;
										return !0;
									}
								: p[0];
						}
						function vr(p, _, E) {
							for (var T = 0, D = _.length; T < D; T++) ie(p, _[T], E);
							return E;
						}
						function sn(p, _, E, T, D) {
							for (
								var I, L = [], M = 0, k = p.length, G = _ != null;
								M < k;
								M++
							)
								(I = p[M]) && (!E || E(I, T, D)) && (L.push(I), G && _.push(M));
							return L;
						}
						function ci(p, _, E, T, D, I) {
							return (
								T && !T[A] && (T = ci(T)),
								D && !D[A] && (D = ci(D, I)),
								Ke(function (L, M, k, G) {
									var Q,
										U,
										ee,
										F,
										se = [],
										De = [],
										me = M.length,
										We = L || vr(_ || "*", k.nodeType ? [k] : k, []),
										at = p && (L || !_) ? sn(We, se, p, k, G) : We;
									if (
										(E
											? ((F = D || (L ? p : me || T) ? [] : M), E(at, F, k, G))
											: (F = at),
										T)
									)
										for (Q = sn(F, De), T(Q, [], k, G), U = Q.length; U--; )
											(ee = Q[U]) && (F[De[U]] = !(at[De[U]] = ee));
									if (L) {
										if (D || p) {
											if (D) {
												for (Q = [], U = F.length; U--; )
													(ee = F[U]) && Q.push((at[U] = ee));
												D(null, (F = []), Q, G);
											}
											for (U = F.length; U--; )
												(ee = F[U]) &&
													(Q = D ? Me.call(L, ee) : se[U]) > -1 &&
													(L[Q] = !(M[Q] = ee));
										}
									} else
										(F = sn(F === M ? F.splice(me, F.length) : F)),
											D ? D(null, M, F, G) : u.apply(M, F);
								})
							);
						}
						function dt(p) {
							for (
								var _,
									E,
									T,
									D = p.length,
									I = t.relative[p[0].type],
									L = I || t.relative[" "],
									M = I ? 1 : 0,
									k = Mn(
										function (U) {
											return U === _;
										},
										L,
										!0,
									),
									G = Mn(
										function (U) {
											return Me.call(_, U) > -1;
										},
										L,
										!0,
									),
									Q = [
										function (U, ee, F) {
											var se =
												(!I && (F || ee != i)) ||
												((_ = ee).nodeType ? k(U, ee, F) : G(U, ee, F));
											return (_ = null), se;
										},
									];
								M < D;
								M++
							)
								if ((E = t.relative[p[M].type])) Q = [Mn(qn(Q), E)];
								else {
									if (
										((E = t.filter[p[M].type].apply(null, p[M].matches)), E[A])
									) {
										for (T = ++M; T < D && !t.relative[p[T].type]; T++);
										return ci(
											M > 1 && qn(Q),
											M > 1 &&
												Ht(
													p
														.slice(0, M - 1)
														.concat({
															value: p[M - 2].type === " " ? "*" : "",
														}),
												).replace(ln, "$1"),
											E,
											M < T && dt(p.slice(M, T)),
											T < D && dt((p = p.slice(T))),
											T < D && Ht(p),
										);
									}
									Q.push(E);
								}
							return qn(Q);
						}
						function yr(p, _) {
							var E = _.length > 0,
								T = p.length > 0,
								D = function (I, L, M, k, G) {
									var Q,
										U,
										ee,
										F = 0,
										se = "0",
										De = I && [],
										me = [],
										We = i,
										at = I || (T && t.find.TAG("*", G)),
										Mt = (w += We == null ? 1 : Math.random() || 0.1),
										ye = at.length;
									for (
										G && (i = L == h || L || G);
										se !== ye && (Q = at[se]) != null;
										se++
									) {
										if (T && Q) {
											for (
												U = 0, !L && Q.ownerDocument != h && ($e(Q), (M = !g));
												(ee = p[U++]);

											)
												if (ee(Q, L || h, M)) {
													u.call(k, Q);
													break;
												}
											G && (w = Mt);
										}
										E && ((Q = !ee && Q) && F--, I && De.push(Q));
									}
									if (((F += se), E && se !== F)) {
										for (U = 0; (ee = _[U++]); ) ee(De, me, L, M);
										if (I) {
											if (F > 0)
												for (; se--; )
													De[se] || me[se] || (me[se] = Ki.call(k));
											me = sn(me);
										}
										u.apply(k, me),
											G &&
												!I &&
												me.length > 0 &&
												F + _.length > 1 &&
												o.uniqueSort(k);
									}
									return G && ((w = Mt), (i = We)), De;
								};
							return E ? Ke(D) : D;
						}
						function Rn(p, _) {
							var E,
								T = [],
								D = [],
								I = J[p + " "];
							if (!I) {
								for (_ || (_ = wt(p)), E = _.length; E--; )
									(I = dt(_[E])), I[A] ? T.push(I) : D.push(I);
								(I = J(p, yr(D, T))), (I.selector = p);
							}
							return I;
						}
						function Fn(p, _, E, T) {
							var D,
								I,
								L,
								M,
								k,
								G = typeof p == "function" && p,
								Q = !T && wt((p = G.selector || p));
							if (((E = E || []), Q.length === 1)) {
								if (
									((I = Q[0] = Q[0].slice(0)),
									I.length > 2 &&
										(L = I[0]).type === "ID" &&
										_.nodeType === 9 &&
										g &&
										t.relative[I[1].type])
								) {
									if (
										((_ = (t.find.ID(L.matches[0].replace(xe, ke), _) ||
											[])[0]),
										_)
									)
										G && (_ = _.parentNode);
									else return E;
									p = p.slice(I.shift().value.length);
								}
								for (
									D = ot.needsContext.test(p) ? 0 : I.length;
									D-- && ((L = I[D]), !t.relative[(M = L.type)]);

								)
									if (
										(k = t.find[M]) &&
										(T = k(
											L.matches[0].replace(xe, ke),
											(li.test(I[0].type) && fi(_.parentNode)) || _,
										))
									) {
										if ((I.splice(D, 1), (p = T.length && Ht(I)), !p))
											return u.apply(E, T), E;
										break;
									}
							}
							return (
								(G || Rn(p, Q))(
									T,
									_,
									!g,
									E,
									!_ || (li.test(p) && fi(_.parentNode)) || _,
								),
								E
							);
						}
						(z.sortStable = A.split("").sort(pe).join("") === A),
							$e(),
							(z.sortDetached = on(function (p) {
								return (
									p.compareDocumentPosition(h.createElement("fieldset")) & 1
								);
							})),
							(o.find = ie),
							(o.expr[":"] = o.expr.pseudos),
							(o.unique = o.uniqueSort),
							(ie.compile = Rn),
							(ie.select = Fn),
							(ie.setDocument = $e),
							(ie.tokenize = wt),
							(ie.escape = o.escapeSelector),
							(ie.getText = o.text),
							(ie.isXML = o.isXMLDoc),
							(ie.selectors = o.expr),
							(ie.support = o.support),
							(ie.uniqueSort = o.uniqueSort);
					})();
					var Xe = function (e, t, i) {
							for (
								var r = [], a = i !== void 0;
								(e = e[t]) && e.nodeType !== 9;

							)
								if (e.nodeType === 1) {
									if (a && o(e).is(i)) break;
									r.push(e);
								}
							return r;
						},
						Ee = function (e, t) {
							for (var i = []; e; e = e.nextSibling)
								e.nodeType === 1 && e !== t && i.push(e);
							return i;
						},
						Vn = o.expr.match.needsContext,
						bi =
							/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
					function fn(e, t, i) {
						return X(t)
							? o.grep(e, function (r, a) {
									return !!t.call(r, a, r) !== i;
								})
							: t.nodeType
								? o.grep(e, function (r) {
										return (r === t) !== i;
									})
								: typeof t != "string"
									? o.grep(e, function (r) {
											return Me.call(t, r) > -1 !== i;
										})
									: o.filter(t, e, i);
					}
					(o.filter = function (e, t, i) {
						var r = t[0];
						return (
							i && (e = ":not(" + e + ")"),
							t.length === 1 && r.nodeType === 1
								? o.find.matchesSelector(r, e)
									? [r]
									: []
								: o.find.matches(
										e,
										o.grep(t, function (a) {
											return a.nodeType === 1;
										}),
									)
						);
					}),
						o.fn.extend({
							find: function (e) {
								var t,
									i,
									r = this.length,
									a = this;
								if (typeof e != "string")
									return this.pushStack(
										o(e).filter(function () {
											for (t = 0; t < r; t++)
												if (o.contains(a[t], this)) return !0;
										}),
									);
								for (i = this.pushStack([]), t = 0; t < r; t++)
									o.find(e, a[t], i);
								return r > 1 ? o.uniqueSort(i) : i;
							},
							filter: function (e) {
								return this.pushStack(fn(this, e || [], !1));
							},
							not: function (e) {
								return this.pushStack(fn(this, e || [], !0));
							},
							is: function (e) {
								return !!fn(
									this,
									typeof e == "string" && Vn.test(e) ? o(e) : e || [],
									!1,
								).length;
							},
						});
					var Ei,
						Cn = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
						Sn = (o.fn.init = function (e, t, i) {
							var r, a;
							if (!e) return this;
							if (((i = i || Ei), typeof e == "string"))
								if (
									(e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3
										? (r = [null, e, null])
										: (r = Cn.exec(e)),
									r && (r[1] || !t))
								)
									if (r[1]) {
										if (
											((t = t instanceof o ? t[0] : t),
											o.merge(
												this,
												o.parseHTML(
													r[1],
													t && t.nodeType ? t.ownerDocument || t : Y,
													!0,
												),
											),
											bi.test(r[1]) && o.isPlainObject(t))
										)
											for (r in t)
												X(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
										return this;
									} else
										return (
											(a = Y.getElementById(r[2])),
											a && ((this[0] = a), (this.length = 1)),
											this
										);
								else
									return !t || t.jquery
										? (t || i).find(e)
										: this.constructor(t).find(e);
							else {
								if (e.nodeType) return (this[0] = e), (this.length = 1), this;
								if (X(e)) return i.ready !== void 0 ? i.ready(e) : e(o);
							}
							return o.makeArray(e, this);
						});
					(Sn.prototype = o.fn), (Ei = o(Y));
					var zi = /^(?:parents|prev(?:Until|All))/,
						Yi = { children: !0, contents: !0, next: !0, prev: !0 };
					o.fn.extend({
						has: function (e) {
							var t = o(e, this),
								i = t.length;
							return this.filter(function () {
								for (var r = 0; r < i; r++)
									if (o.contains(this, t[r])) return !0;
							});
						},
						closest: function (e, t) {
							var i,
								r = 0,
								a = this.length,
								u = [],
								h = typeof e != "string" && o(e);
							if (!Vn.test(e)) {
								for (; r < a; r++)
									for (i = this[r]; i && i !== t; i = i.parentNode)
										if (
											i.nodeType < 11 &&
											(h
												? h.index(i) > -1
												: i.nodeType === 1 && o.find.matchesSelector(i, e))
										) {
											u.push(i);
											break;
										}
							}
							return this.pushStack(u.length > 1 ? o.uniqueSort(u) : u);
						},
						index: function (e) {
							return e
								? typeof e == "string"
									? Me.call(o(e), this[0])
									: Me.call(this, e.jquery ? e[0] : e)
								: this[0] && this[0].parentNode
									? this.first().prevAll().length
									: -1;
						},
						add: function (e, t) {
							return this.pushStack(o.uniqueSort(o.merge(this.get(), o(e, t))));
						},
						addBack: function (e) {
							return this.add(
								e == null ? this.prevObject : this.prevObject.filter(e),
							);
						},
					});
					function we(e, t) {
						for (; (e = e[t]) && e.nodeType !== 1; );
						return e;
					}
					o.each(
						{
							parent: function (e) {
								var t = e.parentNode;
								return t && t.nodeType !== 11 ? t : null;
							},
							parents: function (e) {
								return Xe(e, "parentNode");
							},
							parentsUntil: function (e, t, i) {
								return Xe(e, "parentNode", i);
							},
							next: function (e) {
								return we(e, "nextSibling");
							},
							prev: function (e) {
								return we(e, "previousSibling");
							},
							nextAll: function (e) {
								return Xe(e, "nextSibling");
							},
							prevAll: function (e) {
								return Xe(e, "previousSibling");
							},
							nextUntil: function (e, t, i) {
								return Xe(e, "nextSibling", i);
							},
							prevUntil: function (e, t, i) {
								return Xe(e, "previousSibling", i);
							},
							siblings: function (e) {
								return Ee((e.parentNode || {}).firstChild, e);
							},
							children: function (e) {
								return Ee(e.firstChild);
							},
							contents: function (e) {
								return e.contentDocument != null && qt(e.contentDocument)
									? e.contentDocument
									: (ae(e, "template") && (e = e.content || e),
										o.merge([], e.childNodes));
							},
						},
						function (e, t) {
							o.fn[e] = function (i, r) {
								var a = o.map(this, t, i);
								return (
									e.slice(-5) !== "Until" && (r = i),
									r && typeof r == "string" && (a = o.filter(r, a)),
									this.length > 1 &&
										(Yi[e] || o.uniqueSort(a), zi.test(e) && a.reverse()),
									this.pushStack(a)
								);
							};
						},
					);
					var Ge = /[^\x20\t\r\n\f]+/g;
					function Ct(e) {
						var t = {};
						return (
							o.each(e.match(Ge) || [], function (i, r) {
								t[r] = !0;
							}),
							t
						);
					}
					o.Callbacks = function (e) {
						e = typeof e == "string" ? Ct(e) : o.extend({}, e);
						var t,
							i,
							r,
							a,
							u = [],
							h = [],
							y = -1,
							g = function () {
								for (a = a || e.once, r = t = !0; h.length; y = -1)
									for (i = h.shift(); ++y < u.length; )
										u[y].apply(i[0], i[1]) === !1 &&
											e.stopOnFalse &&
											((y = u.length), (i = !1));
								e.memory || (i = !1), (t = !1), a && (i ? (u = []) : (u = ""));
							},
							b = {
								add: function () {
									return (
										u &&
											(i && !t && ((y = u.length - 1), h.push(i)),
											(function S(A) {
												o.each(A, function (w, N) {
													X(N)
														? (!e.unique || !b.has(N)) && u.push(N)
														: N && N.length && ut(N) !== "string" && S(N);
												});
											})(arguments),
											i && !t && g()),
										this
									);
								},
								remove: function () {
									return (
										o.each(arguments, function (S, A) {
											for (var w; (w = o.inArray(A, u, w)) > -1; )
												u.splice(w, 1), w <= y && y--;
										}),
										this
									);
								},
								has: function (S) {
									return S ? o.inArray(S, u) > -1 : u.length > 0;
								},
								empty: function () {
									return u && (u = []), this;
								},
								disable: function () {
									return (a = h = []), (u = i = ""), this;
								},
								disabled: function () {
									return !u;
								},
								lock: function () {
									return (a = h = []), !i && !t && (u = i = ""), this;
								},
								locked: function () {
									return !!a;
								},
								fireWith: function (S, A) {
									return (
										a ||
											((A = A || []),
											(A = [S, A.slice ? A.slice() : A]),
											h.push(A),
											t || g()),
										this
									);
								},
								fire: function () {
									return b.fireWith(this, arguments), this;
								},
								fired: function () {
									return !!r;
								},
							};
						return b;
					};
					function Ut(e) {
						return e;
					}
					function xn(e) {
						throw e;
					}
					function wi(e, t, i, r) {
						var a;
						try {
							e && X((a = e.promise))
								? a.call(e).done(t).fail(i)
								: e && X((a = e.then))
									? a.call(e, t, i)
									: t.apply(void 0, [e].slice(r));
						} catch (u) {
							i.apply(void 0, [u]);
						}
					}
					o.extend({
						Deferred: function (e) {
							var t = [
									[
										"notify",
										"progress",
										o.Callbacks("memory"),
										o.Callbacks("memory"),
										2,
									],
									[
										"resolve",
										"done",
										o.Callbacks("once memory"),
										o.Callbacks("once memory"),
										0,
										"resolved",
									],
									[
										"reject",
										"fail",
										o.Callbacks("once memory"),
										o.Callbacks("once memory"),
										1,
										"rejected",
									],
								],
								i = "pending",
								r = {
									state: function () {
										return i;
									},
									always: function () {
										return a.done(arguments).fail(arguments), this;
									},
									catch: function (u) {
										return r.then(null, u);
									},
									pipe: function () {
										var u = arguments;
										return o
											.Deferred(function (h) {
												o.each(t, function (y, g) {
													var b = X(u[g[4]]) && u[g[4]];
													a[g[1]](function () {
														var S = b && b.apply(this, arguments);
														S && X(S.promise)
															? S.promise()
																	.progress(h.notify)
																	.done(h.resolve)
																	.fail(h.reject)
															: h[g[0] + "With"](this, b ? [S] : arguments);
													});
												}),
													(u = null);
											})
											.promise();
									},
									then: function (u, h, y) {
										var g = 0;
										function b(S, A, w, N) {
											return function () {
												var B = this,
													$ = arguments,
													J = function () {
														var pe, it;
														if (!(S < g)) {
															if (((pe = w.apply(B, $)), pe === A.promise()))
																throw new TypeError("Thenable self-resolution");
															(it =
																pe &&
																(typeof pe == "object" ||
																	typeof pe == "function") &&
																pe.then),
																X(it)
																	? N
																		? it.call(
																				pe,
																				b(g, A, Ut, N),
																				b(g, A, xn, N),
																			)
																		: (g++,
																			it.call(
																				pe,
																				b(g, A, Ut, N),
																				b(g, A, xn, N),
																				b(g, A, Ut, A.notifyWith),
																			))
																	: (w !== Ut && ((B = void 0), ($ = [pe])),
																		(N || A.resolveWith)(B, $));
														}
													},
													ge = N
														? J
														: function () {
																try {
																	J();
																} catch (pe) {
																	o.Deferred.exceptionHook &&
																		o.Deferred.exceptionHook(pe, ge.error),
																		S + 1 >= g &&
																			(w !== xn && ((B = void 0), ($ = [pe])),
																			A.rejectWith(B, $));
																}
															};
												S
													? ge()
													: (o.Deferred.getErrorHook
															? (ge.error = o.Deferred.getErrorHook())
															: o.Deferred.getStackHook &&
																(ge.error = o.Deferred.getStackHook()),
														V.setTimeout(ge));
											};
										}
										return o
											.Deferred(function (S) {
												t[0][3].add(b(0, S, X(y) ? y : Ut, S.notifyWith)),
													t[1][3].add(b(0, S, X(u) ? u : Ut)),
													t[2][3].add(b(0, S, X(h) ? h : xn));
											})
											.promise();
									},
									promise: function (u) {
										return u != null ? o.extend(u, r) : r;
									},
								},
								a = {};
							return (
								o.each(t, function (u, h) {
									var y = h[2],
										g = h[5];
									(r[h[1]] = y.add),
										g &&
											y.add(
												function () {
													i = g;
												},
												t[3 - u][2].disable,
												t[3 - u][3].disable,
												t[0][2].lock,
												t[0][3].lock,
											),
										y.add(h[3].fire),
										(a[h[0]] = function () {
											return (
												a[h[0] + "With"](this === a ? void 0 : this, arguments),
												this
											);
										}),
										(a[h[0] + "With"] = y.fireWith);
								}),
								r.promise(a),
								e && e.call(a, a),
								a
							);
						},
						when: function (e) {
							var t = arguments.length,
								i = t,
								r = Array(i),
								a = oe.call(arguments),
								u = o.Deferred(),
								h = function (y) {
									return function (g) {
										(r[y] = this),
											(a[y] = arguments.length > 1 ? oe.call(arguments) : g),
											--t || u.resolveWith(r, a);
									};
								};
							if (
								t <= 1 &&
								(wi(e, u.done(h(i)).resolve, u.reject, !t),
								u.state() === "pending" || X(a[i] && a[i].then))
							)
								return u.then();
							for (; i--; ) wi(a[i], h(i), u.reject);
							return u.promise();
						},
					});
					var Xi = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
					(o.Deferred.exceptionHook = function (e, t) {
						V.console &&
							V.console.warn &&
							e &&
							Xi.test(e.name) &&
							V.console.warn(
								"jQuery.Deferred exception: " + e.message,
								e.stack,
								t,
							);
					}),
						(o.readyException = function (e) {
							V.setTimeout(function () {
								throw e;
							});
						});
					var Kn = o.Deferred();
					(o.fn.ready = function (e) {
						return (
							Kn.then(e).catch(function (t) {
								o.readyException(t);
							}),
							this
						);
					}),
						o.extend({
							isReady: !1,
							readyWait: 1,
							ready: function (e) {
								(e === !0 ? --o.readyWait : o.isReady) ||
									((o.isReady = !0),
									!(e !== !0 && --o.readyWait > 0) && Kn.resolveWith(Y, [o]));
							},
						}),
						(o.ready.then = Kn.then);
					function Dn() {
						Y.removeEventListener("DOMContentLoaded", Dn),
							V.removeEventListener("load", Dn),
							o.ready();
					}
					Y.readyState === "complete" ||
					(Y.readyState !== "loading" && !Y.documentElement.doScroll)
						? V.setTimeout(o.ready)
						: (Y.addEventListener("DOMContentLoaded", Dn),
							V.addEventListener("load", Dn));
					var lt = function (e, t, i, r, a, u, h) {
							var y = 0,
								g = e.length,
								b = i == null;
							if (ut(i) === "object") {
								a = !0;
								for (y in i) lt(e, t, y, i[y], !0, u, h);
							} else if (
								r !== void 0 &&
								((a = !0),
								X(r) || (h = !0),
								b &&
									(h
										? (t.call(e, r), (t = null))
										: ((b = t),
											(t = function (S, A, w) {
												return b.call(o(S), w);
											}))),
								t)
							)
								for (; y < g; y++)
									t(e[y], i, h ? r : r.call(e[y], y, t(e[y], i)));
							return a ? e : b ? t.call(e) : g ? t(e[0], i) : u;
						},
						$n = /^-ms-/,
						Gi = /-([a-z])/g;
					function Ji(e, t) {
						return t.toUpperCase();
					}
					function Je(e) {
						return e.replace($n, "ms-").replace(Gi, Ji);
					}
					var cn = function (e) {
						return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
					};
					function hn() {
						this.expando = o.expando + hn.uid++;
					}
					(hn.uid = 1),
						(hn.prototype = {
							cache: function (e) {
								var t = e[this.expando];
								return (
									t ||
										((t = {}),
										cn(e) &&
											(e.nodeType
												? (e[this.expando] = t)
												: Object.defineProperty(e, this.expando, {
														value: t,
														configurable: !0,
													}))),
									t
								);
							},
							set: function (e, t, i) {
								var r,
									a = this.cache(e);
								if (typeof t == "string") a[Je(t)] = i;
								else for (r in t) a[Je(r)] = t[r];
								return a;
							},
							get: function (e, t) {
								return t === void 0
									? this.cache(e)
									: e[this.expando] && e[this.expando][Je(t)];
							},
							access: function (e, t, i) {
								return t === void 0 ||
									(t && typeof t == "string" && i === void 0)
									? this.get(e, t)
									: (this.set(e, t, i), i !== void 0 ? i : t);
							},
							remove: function (e, t) {
								var i,
									r = e[this.expando];
								if (r !== void 0) {
									if (t !== void 0)
										for (
											Array.isArray(t)
												? (t = t.map(Je))
												: ((t = Je(t)),
													(t = (t in r) ? [t] : t.match(Ge) || [])),
												i = t.length;
											i--;

										)
											delete r[t[i]];
									(t === void 0 || o.isEmptyObject(r)) &&
										(e.nodeType
											? (e[this.expando] = void 0)
											: delete e[this.expando]);
								}
							},
							hasData: function (e) {
								var t = e[this.expando];
								return t !== void 0 && !o.isEmptyObject(t);
							},
						});
					var R = new hn(),
						Te = new hn(),
						Qt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
						Vt = /[A-Z]/g;
					function St(e) {
						return e === "true"
							? !0
							: e === "false"
								? !1
								: e === "null"
									? null
									: e === +e + ""
										? +e
										: Qt.test(e)
											? JSON.parse(e)
											: e;
					}
					function Kt(e, t, i) {
						var r;
						if (i === void 0 && e.nodeType === 1)
							if (
								((r = "data-" + t.replace(Vt, "-$&").toLowerCase()),
								(i = e.getAttribute(r)),
								typeof i == "string")
							) {
								try {
									i = St(i);
								} catch {}
								Te.set(e, t, i);
							} else i = void 0;
						return i;
					}
					o.extend({
						hasData: function (e) {
							return Te.hasData(e) || R.hasData(e);
						},
						data: function (e, t, i) {
							return Te.access(e, t, i);
						},
						removeData: function (e, t) {
							Te.remove(e, t);
						},
						_data: function (e, t, i) {
							return R.access(e, t, i);
						},
						_removeData: function (e, t) {
							R.remove(e, t);
						},
					}),
						o.fn.extend({
							data: function (e, t) {
								var i,
									r,
									a,
									u = this[0],
									h = u && u.attributes;
								if (e === void 0) {
									if (
										this.length &&
										((a = Te.get(u)),
										u.nodeType === 1 && !R.get(u, "hasDataAttrs"))
									) {
										for (i = h.length; i--; )
											h[i] &&
												((r = h[i].name),
												r.indexOf("data-") === 0 &&
													((r = Je(r.slice(5))), Kt(u, r, a[r])));
										R.set(u, "hasDataAttrs", !0);
									}
									return a;
								}
								return typeof e == "object"
									? this.each(function () {
											Te.set(this, e);
										})
									: lt(
											this,
											function (y) {
												var g;
												if (u && y === void 0)
													return (
														(g = Te.get(u, e)),
														g !== void 0 || ((g = Kt(u, e)), g !== void 0)
															? g
															: void 0
													);
												this.each(function () {
													Te.set(this, e, y);
												});
											},
											null,
											t,
											arguments.length > 1,
											null,
											!0,
										);
							},
							removeData: function (e) {
								return this.each(function () {
									Te.remove(this, e);
								});
							},
						}),
						o.extend({
							queue: function (e, t, i) {
								var r;
								if (e)
									return (
										(t = (t || "fx") + "queue"),
										(r = R.get(e, t)),
										i &&
											(!r || Array.isArray(i)
												? (r = R.access(e, t, o.makeArray(i)))
												: r.push(i)),
										r || []
									);
							},
							dequeue: function (e, t) {
								t = t || "fx";
								var i = o.queue(e, t),
									r = i.length,
									a = i.shift(),
									u = o._queueHooks(e, t),
									h = function () {
										o.dequeue(e, t);
									};
								a === "inprogress" && ((a = i.shift()), r--),
									a &&
										(t === "fx" && i.unshift("inprogress"),
										delete u.stop,
										a.call(e, h, u)),
									!r && u && u.empty.fire();
							},
							_queueHooks: function (e, t) {
								var i = t + "queueHooks";
								return (
									R.get(e, i) ||
									R.access(e, i, {
										empty: o.Callbacks("once memory").add(function () {
											R.remove(e, [t + "queue", i]);
										}),
									})
								);
							},
						}),
						o.fn.extend({
							queue: function (e, t) {
								var i = 2;
								return (
									typeof e != "string" && ((t = e), (e = "fx"), i--),
									arguments.length < i
										? o.queue(this[0], e)
										: t === void 0
											? this
											: this.each(function () {
													var r = o.queue(this, e, t);
													o._queueHooks(this, e),
														e === "fx" &&
															r[0] !== "inprogress" &&
															o.dequeue(this, e);
												})
								);
							},
							dequeue: function (e) {
								return this.each(function () {
									o.dequeue(this, e);
								});
							},
							clearQueue: function (e) {
								return this.queue(e || "fx", []);
							},
							promise: function (e, t) {
								var i,
									r = 1,
									a = o.Deferred(),
									u = this,
									h = this.length,
									y = function () {
										--r || a.resolveWith(u, [u]);
									};
								for (
									typeof e != "string" && ((t = e), (e = void 0)),
										e = e || "fx";
									h--;

								)
									(i = R.get(u[h], e + "queueHooks")),
										i && i.empty && (r++, i.empty.add(y));
								return y(), a.promise(t);
							},
						});
					var Ti = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
						xt = new RegExp("^(?:([+-])=|)(" + Ti + ")([a-z%]*)$", "i"),
						ft = ["Top", "Right", "Bottom", "Left"],
						Ue = Y.documentElement,
						qe = function (e) {
							return o.contains(e.ownerDocument, e);
						},
						dn = { composed: !0 };
					Ue.getRootNode &&
						(qe = function (e) {
							return (
								o.contains(e.ownerDocument, e) ||
								e.getRootNode(dn) === e.ownerDocument
							);
						});
					var Dt = function (e, t) {
						return (
							(e = t || e),
							e.style.display === "none" ||
								(e.style.display === "" &&
									qe(e) &&
									o.css(e, "display") === "none")
						);
					};
					function An(e, t, i, r) {
						var a,
							u,
							h = 20,
							y = r
								? function () {
										return r.cur();
									}
								: function () {
										return o.css(e, t, "");
									},
							g = y(),
							b = (i && i[3]) || (o.cssNumber[t] ? "" : "px"),
							S =
								e.nodeType &&
								(o.cssNumber[t] || (b !== "px" && +g)) &&
								xt.exec(o.css(e, t));
						if (S && S[3] !== b) {
							for (g = g / 2, b = b || S[3], S = +g || 1; h--; )
								o.style(e, t, S + b),
									(1 - u) * (1 - (u = y() / g || 0.5)) <= 0 && (h = 0),
									(S = S / u);
							(S = S * 2), o.style(e, t, S + b), (i = i || []);
						}
						return (
							i &&
								((S = +S || +g || 0),
								(a = i[1] ? S + (i[1] + 1) * i[2] : +i[2]),
								r && ((r.unit = b), (r.start = S), (r.end = a))),
							a
						);
					}
					var zn = {};
					function Zi(e) {
						var t,
							i = e.ownerDocument,
							r = e.nodeName,
							a = zn[r];
						return (
							a ||
							((t = i.body.appendChild(i.createElement(r))),
							(a = o.css(t, "display")),
							t.parentNode.removeChild(t),
							a === "none" && (a = "block"),
							(zn[r] = a),
							a)
						);
					}
					function $t(e, t) {
						for (var i, r, a = [], u = 0, h = e.length; u < h; u++)
							(r = e[u]),
								r.style &&
									((i = r.style.display),
									t
										? (i === "none" &&
												((a[u] = R.get(r, "display") || null),
												a[u] || (r.style.display = "")),
											r.style.display === "" && Dt(r) && (a[u] = Zi(r)))
										: i !== "none" &&
											((a[u] = "none"), R.set(r, "display", i)));
						for (u = 0; u < h; u++) a[u] != null && (e[u].style.display = a[u]);
						return e;
					}
					o.fn.extend({
						show: function () {
							return $t(this, !0);
						},
						hide: function () {
							return $t(this);
						},
						toggle: function (e) {
							return typeof e == "boolean"
								? e
									? this.show()
									: this.hide()
								: this.each(function () {
										Dt(this) ? o(this).show() : o(this).hide();
									});
						},
					});
					var zt = /^(?:checkbox|radio)$/i,
						Yt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
						Xt = /^$|^module$|\/(?:java|ecma)script/i;
					(function () {
						var e = Y.createDocumentFragment(),
							t = e.appendChild(Y.createElement("div")),
							i = Y.createElement("input");
						i.setAttribute("type", "radio"),
							i.setAttribute("checked", "checked"),
							i.setAttribute("name", "t"),
							t.appendChild(i),
							(z.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
							(t.innerHTML = "<textarea>x</textarea>"),
							(z.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
							(t.innerHTML = "<option></option>"),
							(z.option = !!t.lastChild);
					})();
					var Le = {
						thead: [1, "<table>", "</table>"],
						col: [2, "<table><colgroup>", "</colgroup></table>"],
						tr: [2, "<table><tbody>", "</tbody></table>"],
						td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
						_default: [0, "", ""],
					};
					(Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead),
						(Le.th = Le.td),
						z.option ||
							(Le.optgroup = Le.option =
								[1, "<select multiple='multiple'>", "</select>"]);
					function Ce(e, t) {
						var i;
						return (
							typeof e.getElementsByTagName < "u"
								? (i = e.getElementsByTagName(t || "*"))
								: typeof e.querySelectorAll < "u"
									? (i = e.querySelectorAll(t || "*"))
									: (i = []),
							t === void 0 || (t && ae(e, t)) ? o.merge([e], i) : i
						);
					}
					function pn(e, t) {
						for (var i = 0, r = e.length; i < r; i++)
							R.set(e[i], "globalEval", !t || R.get(t[i], "globalEval"));
					}
					var er = /<|&#?\w+;/;
					function Yn(e, t, i, r, a) {
						for (
							var u,
								h,
								y,
								g,
								b,
								S,
								A = t.createDocumentFragment(),
								w = [],
								N = 0,
								B = e.length;
							N < B;
							N++
						)
							if (((u = e[N]), u || u === 0))
								if (ut(u) === "object") o.merge(w, u.nodeType ? [u] : u);
								else if (!er.test(u)) w.push(t.createTextNode(u));
								else {
									for (
										h = h || A.appendChild(t.createElement("div")),
											y = (Yt.exec(u) || ["", ""])[1].toLowerCase(),
											g = Le[y] || Le._default,
											h.innerHTML = g[1] + o.htmlPrefilter(u) + g[2],
											S = g[0];
										S--;

									)
										h = h.lastChild;
									o.merge(w, h.childNodes),
										(h = A.firstChild),
										(h.textContent = "");
								}
						for (A.textContent = "", N = 0; (u = w[N++]); ) {
							if (r && o.inArray(u, r) > -1) {
								a && a.push(u);
								continue;
							}
							if (
								((b = qe(u)),
								(h = Ce(A.appendChild(u), "script")),
								b && pn(h),
								i)
							)
								for (S = 0; (u = h[S++]); ) Xt.test(u.type || "") && i.push(u);
						}
						return A;
					}
					var mt = /^([^.]*)(?:\.(.+)|)/;
					function vt() {
						return !0;
					}
					function Ze() {
						return !1;
					}
					function Nn(e, t, i, r, a, u) {
						var h, y;
						if (typeof t == "object") {
							typeof i != "string" && ((r = r || i), (i = void 0));
							for (y in t) Nn(e, y, i, r, t[y], u);
							return e;
						}
						if (
							(r == null && a == null
								? ((a = i), (r = i = void 0))
								: a == null &&
									(typeof i == "string"
										? ((a = r), (r = void 0))
										: ((a = r), (r = i), (i = void 0))),
							a === !1)
						)
							a = Ze;
						else if (!a) return e;
						return (
							u === 1 &&
								((h = a),
								(a = function (g) {
									return o().off(g), h.apply(this, arguments);
								}),
								(a.guid = h.guid || (h.guid = o.guid++))),
							e.each(function () {
								o.event.add(this, t, a, r, i);
							})
						);
					}
					o.event = {
						global: {},
						add: function (e, t, i, r, a) {
							var u,
								h,
								y,
								g,
								b,
								S,
								A,
								w,
								N,
								B,
								$,
								J = R.get(e);
							if (cn(e))
								for (
									i.handler && ((u = i), (i = u.handler), (a = u.selector)),
										a && o.find.matchesSelector(Ue, a),
										i.guid || (i.guid = o.guid++),
										(g = J.events) || (g = J.events = Object.create(null)),
										(h = J.handle) ||
											(h = J.handle =
												function (ge) {
													return typeof o < "u" && o.event.triggered !== ge.type
														? o.event.dispatch.apply(e, arguments)
														: void 0;
												}),
										t = (t || "").match(Ge) || [""],
										b = t.length;
									b--;

								)
									(y = mt.exec(t[b]) || []),
										(N = $ = y[1]),
										(B = (y[2] || "").split(".").sort()),
										N &&
											((A = o.event.special[N] || {}),
											(N = (a ? A.delegateType : A.bindType) || N),
											(A = o.event.special[N] || {}),
											(S = o.extend(
												{
													type: N,
													origType: $,
													data: r,
													handler: i,
													guid: i.guid,
													selector: a,
													needsContext: a && o.expr.match.needsContext.test(a),
													namespace: B.join("."),
												},
												u,
											)),
											(w = g[N]) ||
												((w = g[N] = []),
												(w.delegateCount = 0),
												(!A.setup || A.setup.call(e, r, B, h) === !1) &&
													e.addEventListener &&
													e.addEventListener(N, h)),
											A.add &&
												(A.add.call(e, S),
												S.handler.guid || (S.handler.guid = i.guid)),
											a ? w.splice(w.delegateCount++, 0, S) : w.push(S),
											(o.event.global[N] = !0));
						},
						remove: function (e, t, i, r, a) {
							var u,
								h,
								y,
								g,
								b,
								S,
								A,
								w,
								N,
								B,
								$,
								J = R.hasData(e) && R.get(e);
							if (!(!J || !(g = J.events))) {
								for (t = (t || "").match(Ge) || [""], b = t.length; b--; ) {
									if (
										((y = mt.exec(t[b]) || []),
										(N = $ = y[1]),
										(B = (y[2] || "").split(".").sort()),
										!N)
									) {
										for (N in g) o.event.remove(e, N + t[b], i, r, !0);
										continue;
									}
									for (
										A = o.event.special[N] || {},
											N = (r ? A.delegateType : A.bindType) || N,
											w = g[N] || [],
											y =
												y[2] &&
												new RegExp(
													"(^|\\.)" + B.join("\\.(?:.*\\.|)") + "(\\.|$)",
												),
											h = u = w.length;
										u--;

									)
										(S = w[u]),
											(a || $ === S.origType) &&
												(!i || i.guid === S.guid) &&
												(!y || y.test(S.namespace)) &&
												(!r ||
													r === S.selector ||
													(r === "**" && S.selector)) &&
												(w.splice(u, 1),
												S.selector && w.delegateCount--,
												A.remove && A.remove.call(e, S));
									h &&
										!w.length &&
										((!A.teardown || A.teardown.call(e, B, J.handle) === !1) &&
											o.removeEvent(e, N, J.handle),
										delete g[N]);
								}
								o.isEmptyObject(g) && R.remove(e, "handle events");
							}
						},
						dispatch: function (e) {
							var t,
								i,
								r,
								a,
								u,
								h,
								y = new Array(arguments.length),
								g = o.event.fix(e),
								b =
									(R.get(this, "events") || Object.create(null))[g.type] || [],
								S = o.event.special[g.type] || {};
							for (y[0] = g, t = 1; t < arguments.length; t++)
								y[t] = arguments[t];
							if (
								((g.delegateTarget = this),
								!(S.preDispatch && S.preDispatch.call(this, g) === !1))
							) {
								for (
									h = o.event.handlers.call(this, g, b), t = 0;
									(a = h[t++]) && !g.isPropagationStopped();

								)
									for (
										g.currentTarget = a.elem, i = 0;
										(u = a.handlers[i++]) && !g.isImmediatePropagationStopped();

									)
										(!g.rnamespace ||
											u.namespace === !1 ||
											g.rnamespace.test(u.namespace)) &&
											((g.handleObj = u),
											(g.data = u.data),
											(r = (
												(o.event.special[u.origType] || {}).handle || u.handler
											).apply(a.elem, y)),
											r !== void 0 &&
												(g.result = r) === !1 &&
												(g.preventDefault(), g.stopPropagation()));
								return S.postDispatch && S.postDispatch.call(this, g), g.result;
							}
						},
						handlers: function (e, t) {
							var i,
								r,
								a,
								u,
								h,
								y = [],
								g = t.delegateCount,
								b = e.target;
							if (g && b.nodeType && !(e.type === "click" && e.button >= 1)) {
								for (; b !== this; b = b.parentNode || this)
									if (
										b.nodeType === 1 &&
										!(e.type === "click" && b.disabled === !0)
									) {
										for (u = [], h = {}, i = 0; i < g; i++)
											(r = t[i]),
												(a = r.selector + " "),
												h[a] === void 0 &&
													(h[a] = r.needsContext
														? o(a, this).index(b) > -1
														: o.find(a, this, null, [b]).length),
												h[a] && u.push(r);
										u.length && y.push({ elem: b, handlers: u });
									}
							}
							return (
								(b = this),
								g < t.length && y.push({ elem: b, handlers: t.slice(g) }),
								y
							);
						},
						addProp: function (e, t) {
							Object.defineProperty(o.Event.prototype, e, {
								enumerable: !0,
								configurable: !0,
								get: X(t)
									? function () {
											if (this.originalEvent) return t(this.originalEvent);
										}
									: function () {
											if (this.originalEvent) return this.originalEvent[e];
										},
								set: function (i) {
									Object.defineProperty(this, e, {
										enumerable: !0,
										configurable: !0,
										writable: !0,
										value: i,
									});
								},
							});
						},
						fix: function (e) {
							return e[o.expando] ? e : new o.Event(e);
						},
						special: {
							load: { noBubble: !0 },
							click: {
								setup: function (e) {
									var t = this || e;
									return (
										zt.test(t.type) &&
											t.click &&
											ae(t, "input") &&
											gn(t, "click", !0),
										!1
									);
								},
								trigger: function (e) {
									var t = this || e;
									return (
										zt.test(t.type) &&
											t.click &&
											ae(t, "input") &&
											gn(t, "click"),
										!0
									);
								},
								_default: function (e) {
									var t = e.target;
									return (
										(zt.test(t.type) &&
											t.click &&
											ae(t, "input") &&
											R.get(t, "click")) ||
										ae(t, "a")
									);
								},
							},
							beforeunload: {
								postDispatch: function (e) {
									e.result !== void 0 &&
										e.originalEvent &&
										(e.originalEvent.returnValue = e.result);
								},
							},
						},
					};
					function gn(e, t, i) {
						if (!i) {
							R.get(e, t) === void 0 && o.event.add(e, t, vt);
							return;
						}
						R.set(e, t, !1),
							o.event.add(e, t, {
								namespace: !1,
								handler: function (r) {
									var a,
										u = R.get(this, t);
									if (r.isTrigger & 1 && this[t]) {
										if (u)
											(o.event.special[t] || {}).delegateType &&
												r.stopPropagation();
										else if (
											((u = oe.call(arguments)),
											R.set(this, t, u),
											this[t](),
											(a = R.get(this, t)),
											R.set(this, t, !1),
											u !== a)
										)
											return (
												r.stopImmediatePropagation(), r.preventDefault(), a
											);
									} else
										u &&
											(R.set(this, t, o.event.trigger(u[0], u.slice(1), this)),
											r.stopPropagation(),
											(r.isImmediatePropagationStopped = vt));
								},
							});
					}
					(o.removeEvent = function (e, t, i) {
						e.removeEventListener && e.removeEventListener(t, i);
					}),
						(o.Event = function (e, t) {
							if (!(this instanceof o.Event)) return new o.Event(e, t);
							e && e.type
								? ((this.originalEvent = e),
									(this.type = e.type),
									(this.isDefaultPrevented =
										e.defaultPrevented ||
										(e.defaultPrevented === void 0 && e.returnValue === !1)
											? vt
											: Ze),
									(this.target =
										e.target && e.target.nodeType === 3
											? e.target.parentNode
											: e.target),
									(this.currentTarget = e.currentTarget),
									(this.relatedTarget = e.relatedTarget))
								: (this.type = e),
								t && o.extend(this, t),
								(this.timeStamp = (e && e.timeStamp) || Date.now()),
								(this[o.expando] = !0);
						}),
						(o.Event.prototype = {
							constructor: o.Event,
							isDefaultPrevented: Ze,
							isPropagationStopped: Ze,
							isImmediatePropagationStopped: Ze,
							isSimulated: !1,
							preventDefault: function () {
								var e = this.originalEvent;
								(this.isDefaultPrevented = vt),
									e && !this.isSimulated && e.preventDefault();
							},
							stopPropagation: function () {
								var e = this.originalEvent;
								(this.isPropagationStopped = vt),
									e && !this.isSimulated && e.stopPropagation();
							},
							stopImmediatePropagation: function () {
								var e = this.originalEvent;
								(this.isImmediatePropagationStopped = vt),
									e && !this.isSimulated && e.stopImmediatePropagation(),
									this.stopPropagation();
							},
						}),
						o.each(
							{
								altKey: !0,
								bubbles: !0,
								cancelable: !0,
								changedTouches: !0,
								ctrlKey: !0,
								detail: !0,
								eventPhase: !0,
								metaKey: !0,
								pageX: !0,
								pageY: !0,
								shiftKey: !0,
								view: !0,
								char: !0,
								code: !0,
								charCode: !0,
								key: !0,
								keyCode: !0,
								button: !0,
								buttons: !0,
								clientX: !0,
								clientY: !0,
								offsetX: !0,
								offsetY: !0,
								pointerId: !0,
								pointerType: !0,
								screenX: !0,
								screenY: !0,
								targetTouches: !0,
								toElement: !0,
								touches: !0,
								which: !0,
							},
							o.event.addProp,
						),
						o.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
							function i(r) {
								if (Y.documentMode) {
									var a = R.get(this, "handle"),
										u = o.event.fix(r);
									(u.type = r.type === "focusin" ? "focus" : "blur"),
										(u.isSimulated = !0),
										a(r),
										u.target === u.currentTarget && a(u);
								} else o.event.simulate(t, r.target, o.event.fix(r));
							}
							(o.event.special[e] = {
								setup: function () {
									var r;
									if ((gn(this, e, !0), Y.documentMode))
										(r = R.get(this, t)),
											r || this.addEventListener(t, i),
											R.set(this, t, (r || 0) + 1);
									else return !1;
								},
								trigger: function () {
									return gn(this, e), !0;
								},
								teardown: function () {
									var r;
									if (Y.documentMode)
										(r = R.get(this, t) - 1),
											r
												? R.set(this, t, r)
												: (this.removeEventListener(t, i), R.remove(this, t));
									else return !1;
								},
								_default: function (r) {
									return R.get(r.target, e);
								},
								delegateType: t,
							}),
								(o.event.special[t] = {
									setup: function () {
										var r = this.ownerDocument || this.document || this,
											a = Y.documentMode ? this : r,
											u = R.get(a, t);
										u ||
											(Y.documentMode
												? this.addEventListener(t, i)
												: r.addEventListener(e, i, !0)),
											R.set(a, t, (u || 0) + 1);
									},
									teardown: function () {
										var r = this.ownerDocument || this.document || this,
											a = Y.documentMode ? this : r,
											u = R.get(a, t) - 1;
										u
											? R.set(a, t, u)
											: (Y.documentMode
													? this.removeEventListener(t, i)
													: r.removeEventListener(e, i, !0),
												R.remove(a, t));
									},
								});
						}),
						o.each(
							{
								mouseenter: "mouseover",
								mouseleave: "mouseout",
								pointerenter: "pointerover",
								pointerleave: "pointerout",
							},
							function (e, t) {
								o.event.special[e] = {
									delegateType: t,
									bindType: t,
									handle: function (i) {
										var r,
											a = this,
											u = i.relatedTarget,
											h = i.handleObj;
										return (
											(!u || (u !== a && !o.contains(a, u))) &&
												((i.type = h.origType),
												(r = h.handler.apply(this, arguments)),
												(i.type = t)),
											r
										);
									},
								};
							},
						),
						o.fn.extend({
							on: function (e, t, i, r) {
								return Nn(this, e, t, i, r);
							},
							one: function (e, t, i, r) {
								return Nn(this, e, t, i, r, 1);
							},
							off: function (e, t, i) {
								var r, a;
								if (e && e.preventDefault && e.handleObj)
									return (
										(r = e.handleObj),
										o(e.delegateTarget).off(
											r.namespace ? r.origType + "." + r.namespace : r.origType,
											r.selector,
											r.handler,
										),
										this
									);
								if (typeof e == "object") {
									for (a in e) this.off(a, t, e[a]);
									return this;
								}
								return (
									(t === !1 || typeof t == "function") &&
										((i = t), (t = void 0)),
									i === !1 && (i = Ze),
									this.each(function () {
										o.event.remove(this, e, i, t);
									})
								);
							},
						});
					var Gt = /<script|<style|<link/i,
						Jt = /checked\s*(?:[^=]|=\s*.checked.)/i,
						Xn = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
					function mn(e, t) {
						return (
							(ae(e, "table") &&
								ae(t.nodeType !== 11 ? t : t.firstChild, "tr") &&
								o(e).children("tbody")[0]) ||
							e
						);
					}
					function Zt(e) {
						return (
							(e.type = (e.getAttribute("type") !== null) + "/" + e.type), e
						);
					}
					function Ci(e) {
						return (
							(e.type || "").slice(0, 5) === "true/"
								? (e.type = e.type.slice(5))
								: e.removeAttribute("type"),
							e
						);
					}
					function Gn(e, t) {
						var i, r, a, u, h, y, g;
						if (t.nodeType === 1) {
							if (R.hasData(e) && ((u = R.get(e)), (g = u.events), g)) {
								R.remove(t, "handle events");
								for (a in g)
									for (i = 0, r = g[a].length; i < r; i++)
										o.event.add(t, a, g[a][i]);
							}
							Te.hasData(e) &&
								((h = Te.access(e)), (y = o.extend({}, h)), Te.set(t, y));
						}
					}
					function Si(e, t) {
						var i = t.nodeName.toLowerCase();
						i === "input" && zt.test(e.type)
							? (t.checked = e.checked)
							: (i === "input" || i === "textarea") &&
								(t.defaultValue = e.defaultValue);
					}
					function en(e, t, i, r) {
						t = ce(t);
						var a,
							u,
							h,
							y,
							g,
							b,
							S = 0,
							A = e.length,
							w = A - 1,
							N = t[0],
							B = X(N);
						if (
							B ||
							(A > 1 && typeof N == "string" && !z.checkClone && Jt.test(N))
						)
							return e.each(function ($) {
								var J = e.eq($);
								B && (t[0] = N.call(this, $, J.html())), en(J, t, i, r);
							});
						if (
							A &&
							((a = Yn(t, e[0].ownerDocument, !1, e, r)),
							(u = a.firstChild),
							a.childNodes.length === 1 && (a = u),
							u || r)
						) {
							for (h = o.map(Ce(a, "script"), Zt), y = h.length; S < A; S++)
								(g = a),
									S !== w &&
										((g = o.clone(g, !0, !0)),
										y && o.merge(h, Ce(g, "script"))),
									i.call(e[S], g, S);
							if (y)
								for (
									b = h[h.length - 1].ownerDocument, o.map(h, Ci), S = 0;
									S < y;
									S++
								)
									(g = h[S]),
										Xt.test(g.type || "") &&
											!R.access(g, "globalEval") &&
											o.contains(b, g) &&
											(g.src && (g.type || "").toLowerCase() !== "module"
												? o._evalUrl &&
													!g.noModule &&
													o._evalUrl(
														g.src,
														{ nonce: g.nonce || g.getAttribute("nonce") },
														b,
													)
												: Bt(g.textContent.replace(Xn, ""), g, b));
						}
						return e;
					}
					function At(e, t, i) {
						for (
							var r, a = t ? o.filter(t, e) : e, u = 0;
							(r = a[u]) != null;
							u++
						)
							!i && r.nodeType === 1 && o.cleanData(Ce(r)),
								r.parentNode &&
									(i && qe(r) && pn(Ce(r, "script")),
									r.parentNode.removeChild(r));
						return e;
					}
					o.extend({
						htmlPrefilter: function (e) {
							return e;
						},
						clone: function (e, t, i) {
							var r,
								a,
								u,
								h,
								y = e.cloneNode(!0),
								g = qe(e);
							if (
								!z.noCloneChecked &&
								(e.nodeType === 1 || e.nodeType === 11) &&
								!o.isXMLDoc(e)
							)
								for (h = Ce(y), u = Ce(e), r = 0, a = u.length; r < a; r++)
									Si(u[r], h[r]);
							if (t)
								if (i)
									for (
										u = u || Ce(e), h = h || Ce(y), r = 0, a = u.length;
										r < a;
										r++
									)
										Gn(u[r], h[r]);
								else Gn(e, y);
							return (
								(h = Ce(y, "script")),
								h.length > 0 && pn(h, !g && Ce(e, "script")),
								y
							);
						},
						cleanData: function (e) {
							for (
								var t, i, r, a = o.event.special, u = 0;
								(i = e[u]) !== void 0;
								u++
							)
								if (cn(i)) {
									if ((t = i[R.expando])) {
										if (t.events)
											for (r in t.events)
												a[r]
													? o.event.remove(i, r)
													: o.removeEvent(i, r, t.handle);
										i[R.expando] = void 0;
									}
									i[Te.expando] && (i[Te.expando] = void 0);
								}
						},
					}),
						o.fn.extend({
							detach: function (e) {
								return At(this, e, !0);
							},
							remove: function (e) {
								return At(this, e);
							},
							text: function (e) {
								return lt(
									this,
									function (t) {
										return t === void 0
											? o.text(this)
											: this.empty().each(function () {
													(this.nodeType === 1 ||
														this.nodeType === 11 ||
														this.nodeType === 9) &&
														(this.textContent = t);
												});
									},
									null,
									e,
									arguments.length,
								);
							},
							append: function () {
								return en(this, arguments, function (e) {
									if (
										this.nodeType === 1 ||
										this.nodeType === 11 ||
										this.nodeType === 9
									) {
										var t = mn(this, e);
										t.appendChild(e);
									}
								});
							},
							prepend: function () {
								return en(this, arguments, function (e) {
									if (
										this.nodeType === 1 ||
										this.nodeType === 11 ||
										this.nodeType === 9
									) {
										var t = mn(this, e);
										t.insertBefore(e, t.firstChild);
									}
								});
							},
							before: function () {
								return en(this, arguments, function (e) {
									this.parentNode && this.parentNode.insertBefore(e, this);
								});
							},
							after: function () {
								return en(this, arguments, function (e) {
									this.parentNode &&
										this.parentNode.insertBefore(e, this.nextSibling);
								});
							},
							empty: function () {
								for (var e, t = 0; (e = this[t]) != null; t++)
									e.nodeType === 1 &&
										(o.cleanData(Ce(e, !1)), (e.textContent = ""));
								return this;
							},
							clone: function (e, t) {
								return (
									(e = e ?? !1),
									(t = t ?? e),
									this.map(function () {
										return o.clone(this, e, t);
									})
								);
							},
							html: function (e) {
								return lt(
									this,
									function (t) {
										var i = this[0] || {},
											r = 0,
											a = this.length;
										if (t === void 0 && i.nodeType === 1) return i.innerHTML;
										if (
											typeof t == "string" &&
											!Gt.test(t) &&
											!Le[(Yt.exec(t) || ["", ""])[1].toLowerCase()]
										) {
											t = o.htmlPrefilter(t);
											try {
												for (; r < a; r++)
													(i = this[r] || {}),
														i.nodeType === 1 &&
															(o.cleanData(Ce(i, !1)), (i.innerHTML = t));
												i = 0;
											} catch {}
										}
										i && this.empty().append(t);
									},
									null,
									e,
									arguments.length,
								);
							},
							replaceWith: function () {
								var e = [];
								return en(
									this,
									arguments,
									function (t) {
										var i = this.parentNode;
										o.inArray(this, e) < 0 &&
											(o.cleanData(Ce(this)), i && i.replaceChild(t, this));
									},
									e,
								);
							},
						}),
						o.each(
							{
								appendTo: "append",
								prependTo: "prepend",
								insertBefore: "before",
								insertAfter: "after",
								replaceAll: "replaceWith",
							},
							function (e, t) {
								o.fn[e] = function (i) {
									for (
										var r, a = [], u = o(i), h = u.length - 1, y = 0;
										y <= h;
										y++
									)
										(r = y === h ? this : this.clone(!0)),
											o(u[y])[t](r),
											Be.apply(a, r.get());
									return this.pushStack(a);
								};
							},
						);
					var Ae = new RegExp("^(" + Ti + ")(?!px)[a-z%]+$", "i"),
						et = /^--/,
						tn = function (e) {
							var t = e.ownerDocument.defaultView;
							return (!t || !t.opener) && (t = V), t.getComputedStyle(e);
						},
						In = function (e, t, i) {
							var r,
								a,
								u = {};
							for (a in t) (u[a] = e.style[a]), (e.style[a] = t[a]);
							r = i.call(e);
							for (a in t) e.style[a] = u[a];
							return r;
						},
						xi = new RegExp(ft.join("|"), "i");
					(function () {
						function e() {
							if (b) {
								(g.style.cssText =
									"position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
									(b.style.cssText =
										"position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
									Ue.appendChild(g).appendChild(b);
								var S = V.getComputedStyle(b);
								(i = S.top !== "1%"),
									(y = t(S.marginLeft) === 12),
									(b.style.right = "60%"),
									(u = t(S.right) === 36),
									(r = t(S.width) === 36),
									(b.style.position = "absolute"),
									(a = t(b.offsetWidth / 3) === 12),
									Ue.removeChild(g),
									(b = null);
							}
						}
						function t(S) {
							return Math.round(parseFloat(S));
						}
						var i,
							r,
							a,
							u,
							h,
							y,
							g = Y.createElement("div"),
							b = Y.createElement("div");
						b.style &&
							((b.style.backgroundClip = "content-box"),
							(b.cloneNode(!0).style.backgroundClip = ""),
							(z.clearCloneStyle = b.style.backgroundClip === "content-box"),
							o.extend(z, {
								boxSizingReliable: function () {
									return e(), r;
								},
								pixelBoxStyles: function () {
									return e(), u;
								},
								pixelPosition: function () {
									return e(), i;
								},
								reliableMarginLeft: function () {
									return e(), y;
								},
								scrollboxSize: function () {
									return e(), a;
								},
								reliableTrDimensions: function () {
									var S, A, w, N;
									return (
										h == null &&
											((S = Y.createElement("table")),
											(A = Y.createElement("tr")),
											(w = Y.createElement("div")),
											(S.style.cssText =
												"position:absolute;left:-11111px;border-collapse:separate"),
											(A.style.cssText =
												"box-sizing:content-box;border:1px solid"),
											(A.style.height = "1px"),
											(w.style.height = "9px"),
											(w.style.display = "block"),
											Ue.appendChild(S).appendChild(A).appendChild(w),
											(N = V.getComputedStyle(A)),
											(h =
												parseInt(N.height, 10) +
													parseInt(N.borderTopWidth, 10) +
													parseInt(N.borderBottomWidth, 10) ===
												A.offsetHeight),
											Ue.removeChild(S)),
										h
									);
								},
							}));
					})();
					function Nt(e, t, i) {
						var r,
							a,
							u,
							h,
							y = et.test(t),
							g = e.style;
						return (
							(i = i || tn(e)),
							i &&
								((h = i.getPropertyValue(t) || i[t]),
								y && h && (h = h.replace(ln, "$1") || void 0),
								h === "" && !qe(e) && (h = o.style(e, t)),
								!z.pixelBoxStyles() &&
									Ae.test(h) &&
									xi.test(t) &&
									((r = g.width),
									(a = g.minWidth),
									(u = g.maxWidth),
									(g.minWidth = g.maxWidth = g.width = h),
									(h = i.width),
									(g.width = r),
									(g.minWidth = a),
									(g.maxWidth = u))),
							h !== void 0 ? h + "" : h
						);
					}
					function Jn(e, t) {
						return {
							get: function () {
								if (e()) {
									delete this.get;
									return;
								}
								return (this.get = t).apply(this, arguments);
							},
						};
					}
					var Zn = ["Webkit", "Moz", "ms"],
						ei = Y.createElement("div").style,
						vn = {};
					function Di(e) {
						for (var t = e[0].toUpperCase() + e.slice(1), i = Zn.length; i--; )
							if (((e = Zn[i] + t), e in ei)) return e;
					}
					function It(e) {
						var t = o.cssProps[e] || vn[e];
						return t || (e in ei ? e : (vn[e] = Di(e) || e));
					}
					var Ai = /^(none|table(?!-c[ea]).+)/,
						Ni = {
							position: "absolute",
							visibility: "hidden",
							display: "block",
						},
						On = { letterSpacing: "0", fontWeight: "400" };
					function ti(e, t, i) {
						var r = xt.exec(t);
						return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t;
					}
					function ni(e, t, i, r, a, u) {
						var h = t === "width" ? 1 : 0,
							y = 0,
							g = 0,
							b = 0;
						if (i === (r ? "border" : "content")) return 0;
						for (; h < 4; h += 2)
							i === "margin" && (b += o.css(e, i + ft[h], !0, a)),
								r
									? (i === "content" &&
											(g -= o.css(e, "padding" + ft[h], !0, a)),
										i !== "margin" &&
											(g -= o.css(e, "border" + ft[h] + "Width", !0, a)))
									: ((g += o.css(e, "padding" + ft[h], !0, a)),
										i !== "padding"
											? (g += o.css(e, "border" + ft[h] + "Width", !0, a))
											: (y += o.css(e, "border" + ft[h] + "Width", !0, a)));
						return (
							!r &&
								u >= 0 &&
								(g +=
									Math.max(
										0,
										Math.ceil(
											e["offset" + t[0].toUpperCase() + t.slice(1)] -
												u -
												g -
												y -
												0.5,
										),
									) || 0),
							g + b
						);
					}
					function Ii(e, t, i) {
						var r = tn(e),
							a = !z.boxSizingReliable() || i,
							u = a && o.css(e, "boxSizing", !1, r) === "border-box",
							h = u,
							y = Nt(e, t, r),
							g = "offset" + t[0].toUpperCase() + t.slice(1);
						if (Ae.test(y)) {
							if (!i) return y;
							y = "auto";
						}
						return (
							((!z.boxSizingReliable() && u) ||
								(!z.reliableTrDimensions() && ae(e, "tr")) ||
								y === "auto" ||
								(!parseFloat(y) && o.css(e, "display", !1, r) === "inline")) &&
								e.getClientRects().length &&
								((u = o.css(e, "boxSizing", !1, r) === "border-box"),
								(h = g in e),
								h && (y = e[g])),
							(y = parseFloat(y) || 0),
							y + ni(e, t, i || (u ? "border" : "content"), h, r, y) + "px"
						);
					}
					o.extend({
						cssHooks: {
							opacity: {
								get: function (e, t) {
									if (t) {
										var i = Nt(e, "opacity");
										return i === "" ? "1" : i;
									}
								},
							},
						},
						cssNumber: {
							animationIterationCount: !0,
							aspectRatio: !0,
							borderImageSlice: !0,
							columnCount: !0,
							flexGrow: !0,
							flexShrink: !0,
							fontWeight: !0,
							gridArea: !0,
							gridColumn: !0,
							gridColumnEnd: !0,
							gridColumnStart: !0,
							gridRow: !0,
							gridRowEnd: !0,
							gridRowStart: !0,
							lineHeight: !0,
							opacity: !0,
							order: !0,
							orphans: !0,
							scale: !0,
							widows: !0,
							zIndex: !0,
							zoom: !0,
							fillOpacity: !0,
							floodOpacity: !0,
							stopOpacity: !0,
							strokeMiterlimit: !0,
							strokeOpacity: !0,
						},
						cssProps: {},
						style: function (e, t, i, r) {
							if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
								var a,
									u,
									h,
									y = Je(t),
									g = et.test(t),
									b = e.style;
								if (
									(g || (t = It(y)),
									(h = o.cssHooks[t] || o.cssHooks[y]),
									i !== void 0)
								) {
									if (
										((u = typeof i),
										u === "string" &&
											(a = xt.exec(i)) &&
											a[1] &&
											((i = An(e, t, a)), (u = "number")),
										i == null || i !== i)
									)
										return;
									u === "number" &&
										!g &&
										(i += (a && a[3]) || (o.cssNumber[y] ? "" : "px")),
										!z.clearCloneStyle &&
											i === "" &&
											t.indexOf("background") === 0 &&
											(b[t] = "inherit"),
										(!h || !("set" in h) || (i = h.set(e, i, r)) !== void 0) &&
											(g ? b.setProperty(t, i) : (b[t] = i));
								} else
									return h && "get" in h && (a = h.get(e, !1, r)) !== void 0
										? a
										: b[t];
							}
						},
						css: function (e, t, i, r) {
							var a,
								u,
								h,
								y = Je(t),
								g = et.test(t);
							return (
								g || (t = It(y)),
								(h = o.cssHooks[t] || o.cssHooks[y]),
								h && "get" in h && (a = h.get(e, !0, i)),
								a === void 0 && (a = Nt(e, t, r)),
								a === "normal" && t in On && (a = On[t]),
								i === "" || i
									? ((u = parseFloat(a)), i === !0 || isFinite(u) ? u || 0 : a)
									: a
							);
						},
					}),
						o.each(["height", "width"], function (e, t) {
							o.cssHooks[t] = {
								get: function (i, r, a) {
									if (r)
										return Ai.test(o.css(i, "display")) &&
											(!i.getClientRects().length ||
												!i.getBoundingClientRect().width)
											? In(i, Ni, function () {
													return Ii(i, t, a);
												})
											: Ii(i, t, a);
								},
								set: function (i, r, a) {
									var u,
										h = tn(i),
										y = !z.scrollboxSize() && h.position === "absolute",
										g = y || a,
										b = g && o.css(i, "boxSizing", !1, h) === "border-box",
										S = a ? ni(i, t, a, b, h) : 0;
									return (
										b &&
											y &&
											(S -= Math.ceil(
												i["offset" + t[0].toUpperCase() + t.slice(1)] -
													parseFloat(h[t]) -
													ni(i, t, "border", !1, h) -
													0.5,
											)),
										S &&
											(u = xt.exec(r)) &&
											(u[3] || "px") !== "px" &&
											((i.style[t] = r), (r = o.css(i, t))),
										ti(i, r, S)
									);
								},
							};
						}),
						(o.cssHooks.marginLeft = Jn(z.reliableMarginLeft, function (e, t) {
							if (t)
								return (
									(parseFloat(Nt(e, "marginLeft")) ||
										e.getBoundingClientRect().left -
											In(e, { marginLeft: 0 }, function () {
												return e.getBoundingClientRect().left;
											})) + "px"
								);
						})),
						o.each(
							{ margin: "", padding: "", border: "Width" },
							function (e, t) {
								(o.cssHooks[e + t] = {
									expand: function (i) {
										for (
											var r = 0,
												a = {},
												u = typeof i == "string" ? i.split(" ") : [i];
											r < 4;
											r++
										)
											a[e + ft[r] + t] = u[r] || u[r - 2] || u[0];
										return a;
									},
								}),
									e !== "margin" && (o.cssHooks[e + t].set = ti);
							},
						),
						o.fn.extend({
							css: function (e, t) {
								return lt(
									this,
									function (i, r, a) {
										var u,
											h,
											y = {},
											g = 0;
										if (Array.isArray(r)) {
											for (u = tn(i), h = r.length; g < h; g++)
												y[r[g]] = o.css(i, r[g], !1, u);
											return y;
										}
										return a !== void 0 ? o.style(i, r, a) : o.css(i, r);
									},
									e,
									t,
									arguments.length > 1,
								);
							},
						});
					function ve(e, t, i, r, a) {
						return new ve.prototype.init(e, t, i, r, a);
					}
					(o.Tween = ve),
						(ve.prototype = {
							constructor: ve,
							init: function (e, t, i, r, a, u) {
								(this.elem = e),
									(this.prop = i),
									(this.easing = a || o.easing._default),
									(this.options = t),
									(this.start = this.now = this.cur()),
									(this.end = r),
									(this.unit = u || (o.cssNumber[i] ? "" : "px"));
							},
							cur: function () {
								var e = ve.propHooks[this.prop];
								return e && e.get
									? e.get(this)
									: ve.propHooks._default.get(this);
							},
							run: function (e) {
								var t,
									i = ve.propHooks[this.prop];
								return (
									this.options.duration
										? (this.pos = t =
												o.easing[this.easing](
													e,
													this.options.duration * e,
													0,
													1,
													this.options.duration,
												))
										: (this.pos = t = e),
									(this.now = (this.end - this.start) * t + this.start),
									this.options.step &&
										this.options.step.call(this.elem, this.now, this),
									i && i.set ? i.set(this) : ve.propHooks._default.set(this),
									this
								);
							},
						}),
						(ve.prototype.init.prototype = ve.prototype),
						(ve.propHooks = {
							_default: {
								get: function (e) {
									var t;
									return e.elem.nodeType !== 1 ||
										(e.elem[e.prop] != null && e.elem.style[e.prop] == null)
										? e.elem[e.prop]
										: ((t = o.css(e.elem, e.prop, "")),
											!t || t === "auto" ? 0 : t);
								},
								set: function (e) {
									o.fx.step[e.prop]
										? o.fx.step[e.prop](e)
										: e.elem.nodeType === 1 &&
											  (o.cssHooks[e.prop] || e.elem.style[It(e.prop)] != null)
											? o.style(e.elem, e.prop, e.now + e.unit)
											: (e.elem[e.prop] = e.now);
								},
							},
						}),
						(ve.propHooks.scrollTop = ve.propHooks.scrollLeft =
							{
								set: function (e) {
									e.elem.nodeType &&
										e.elem.parentNode &&
										(e.elem[e.prop] = e.now);
								},
							}),
						(o.easing = {
							linear: function (e) {
								return e;
							},
							swing: function (e) {
								return 0.5 - Math.cos(e * Math.PI) / 2;
							},
							_default: "swing",
						}),
						(o.fx = ve.prototype.init),
						(o.fx.step = {});
					var yt,
						kn,
						Oi = /^(?:toggle|show|hide)$/,
						ki = /queueHooks$/;
					function yn() {
						kn &&
							(Y.hidden === !1 && V.requestAnimationFrame
								? V.requestAnimationFrame(yn)
								: V.setTimeout(yn, o.fx.interval),
							o.fx.tick());
					}
					function ii() {
						return (
							V.setTimeout(function () {
								yt = void 0;
							}),
							(yt = Date.now())
						);
					}
					function jn(e, t) {
						var i,
							r = 0,
							a = { height: e };
						for (t = t ? 1 : 0; r < 4; r += 2 - t)
							(i = ft[r]), (a["margin" + i] = a["padding" + i] = e);
						return t && (a.opacity = a.width = e), a;
					}
					function ji(e, t, i) {
						for (
							var r,
								a = (Qe.tweeners[t] || []).concat(Qe.tweeners["*"]),
								u = 0,
								h = a.length;
							u < h;
							u++
						)
							if ((r = a[u].call(i, t, e))) return r;
					}
					function tr(e, t, i) {
						var r,
							a,
							u,
							h,
							y,
							g,
							b,
							S,
							A = "width" in t || "height" in t,
							w = this,
							N = {},
							B = e.style,
							$ = e.nodeType && Dt(e),
							J = R.get(e, "fxshow");
						i.queue ||
							((h = o._queueHooks(e, "fx")),
							h.unqueued == null &&
								((h.unqueued = 0),
								(y = h.empty.fire),
								(h.empty.fire = function () {
									h.unqueued || y();
								})),
							h.unqueued++,
							w.always(function () {
								w.always(function () {
									h.unqueued--, o.queue(e, "fx").length || h.empty.fire();
								});
							}));
						for (r in t)
							if (((a = t[r]), Oi.test(a))) {
								if (
									(delete t[r],
									(u = u || a === "toggle"),
									a === ($ ? "hide" : "show"))
								)
									if (a === "show" && J && J[r] !== void 0) $ = !0;
									else continue;
								N[r] = (J && J[r]) || o.style(e, r);
							}
						if (((g = !o.isEmptyObject(t)), !(!g && o.isEmptyObject(N)))) {
							A &&
								e.nodeType === 1 &&
								((i.overflow = [B.overflow, B.overflowX, B.overflowY]),
								(b = J && J.display),
								b == null && (b = R.get(e, "display")),
								(S = o.css(e, "display")),
								S === "none" &&
									(b
										? (S = b)
										: ($t([e], !0),
											(b = e.style.display || b),
											(S = o.css(e, "display")),
											$t([e]))),
								(S === "inline" || (S === "inline-block" && b != null)) &&
									o.css(e, "float") === "none" &&
									(g ||
										(w.done(function () {
											B.display = b;
										}),
										b == null &&
											((S = B.display), (b = S === "none" ? "" : S))),
									(B.display = "inline-block"))),
								i.overflow &&
									((B.overflow = "hidden"),
									w.always(function () {
										(B.overflow = i.overflow[0]),
											(B.overflowX = i.overflow[1]),
											(B.overflowY = i.overflow[2]);
									})),
								(g = !1);
							for (r in N)
								g ||
									(J
										? "hidden" in J && ($ = J.hidden)
										: (J = R.access(e, "fxshow", { display: b })),
									u && (J.hidden = !$),
									$ && $t([e], !0),
									w.done(function () {
										$ || $t([e]), R.remove(e, "fxshow");
										for (r in N) o.style(e, r, N[r]);
									})),
									(g = ji($ ? J[r] : 0, r, w)),
									r in J ||
										((J[r] = g.start), $ && ((g.end = g.start), (g.start = 0)));
						}
					}
					function nr(e, t) {
						var i, r, a, u, h;
						for (i in e)
							if (
								((r = Je(i)),
								(a = t[r]),
								(u = e[i]),
								Array.isArray(u) && ((a = u[1]), (u = e[i] = u[0])),
								i !== r && ((e[r] = u), delete e[i]),
								(h = o.cssHooks[r]),
								h && "expand" in h)
							) {
								(u = h.expand(u)), delete e[r];
								for (i in u) i in e || ((e[i] = u[i]), (t[i] = a));
							} else t[r] = a;
					}
					function Qe(e, t, i) {
						var r,
							a,
							u = 0,
							h = Qe.prefilters.length,
							y = o.Deferred().always(function () {
								delete g.elem;
							}),
							g = function () {
								if (a) return !1;
								for (
									var A = yt || ii(),
										w = Math.max(0, b.startTime + b.duration - A),
										N = w / b.duration || 0,
										B = 1 - N,
										$ = 0,
										J = b.tweens.length;
									$ < J;
									$++
								)
									b.tweens[$].run(B);
								return (
									y.notifyWith(e, [b, B, w]),
									B < 1 && J
										? w
										: (J || y.notifyWith(e, [b, 1, 0]),
											y.resolveWith(e, [b]),
											!1)
								);
							},
							b = y.promise({
								elem: e,
								props: o.extend({}, t),
								opts: o.extend(
									!0,
									{ specialEasing: {}, easing: o.easing._default },
									i,
								),
								originalProperties: t,
								originalOptions: i,
								startTime: yt || ii(),
								duration: i.duration,
								tweens: [],
								createTween: function (A, w) {
									var N = o.Tween(
										e,
										b.opts,
										A,
										w,
										b.opts.specialEasing[A] || b.opts.easing,
									);
									return b.tweens.push(N), N;
								},
								stop: function (A) {
									var w = 0,
										N = A ? b.tweens.length : 0;
									if (a) return this;
									for (a = !0; w < N; w++) b.tweens[w].run(1);
									return (
										A
											? (y.notifyWith(e, [b, 1, 0]), y.resolveWith(e, [b, A]))
											: y.rejectWith(e, [b, A]),
										this
									);
								},
							}),
							S = b.props;
						for (nr(S, b.opts.specialEasing); u < h; u++)
							if (((r = Qe.prefilters[u].call(b, e, S, b.opts)), r))
								return (
									X(r.stop) &&
										(o._queueHooks(b.elem, b.opts.queue).stop = r.stop.bind(r)),
									r
								);
						return (
							o.map(S, ji, b),
							X(b.opts.start) && b.opts.start.call(e, b),
							b
								.progress(b.opts.progress)
								.done(b.opts.done, b.opts.complete)
								.fail(b.opts.fail)
								.always(b.opts.always),
							o.fx.timer(
								o.extend(g, { elem: e, anim: b, queue: b.opts.queue }),
							),
							b
						);
					}
					(o.Animation = o.extend(Qe, {
						tweeners: {
							"*": [
								function (e, t) {
									var i = this.createTween(e, t);
									return An(i.elem, e, xt.exec(t), i), i;
								},
							],
						},
						tweener: function (e, t) {
							X(e) ? ((t = e), (e = ["*"])) : (e = e.match(Ge));
							for (var i, r = 0, a = e.length; r < a; r++)
								(i = e[r]),
									(Qe.tweeners[i] = Qe.tweeners[i] || []),
									Qe.tweeners[i].unshift(t);
						},
						prefilters: [tr],
						prefilter: function (e, t) {
							t ? Qe.prefilters.unshift(e) : Qe.prefilters.push(e);
						},
					})),
						(o.speed = function (e, t, i) {
							var r =
								e && typeof e == "object"
									? o.extend({}, e)
									: {
											complete: i || (!i && t) || (X(e) && e),
											duration: e,
											easing: (i && t) || (t && !X(t) && t),
										};
							return (
								o.fx.off
									? (r.duration = 0)
									: typeof r.duration != "number" &&
										(r.duration in o.fx.speeds
											? (r.duration = o.fx.speeds[r.duration])
											: (r.duration = o.fx.speeds._default)),
								(r.queue == null || r.queue === !0) && (r.queue = "fx"),
								(r.old = r.complete),
								(r.complete = function () {
									X(r.old) && r.old.call(this),
										r.queue && o.dequeue(this, r.queue);
								}),
								r
							);
						}),
						o.fn.extend({
							fadeTo: function (e, t, i, r) {
								return this.filter(Dt)
									.css("opacity", 0)
									.show()
									.end()
									.animate({ opacity: t }, e, i, r);
							},
							animate: function (e, t, i, r) {
								var a = o.isEmptyObject(e),
									u = o.speed(t, i, r),
									h = function () {
										var y = Qe(this, o.extend({}, e), u);
										(a || R.get(this, "finish")) && y.stop(!0);
									};
								return (
									(h.finish = h),
									a || u.queue === !1 ? this.each(h) : this.queue(u.queue, h)
								);
							},
							stop: function (e, t, i) {
								var r = function (a) {
									var u = a.stop;
									delete a.stop, u(i);
								};
								return (
									typeof e != "string" && ((i = t), (t = e), (e = void 0)),
									t && this.queue(e || "fx", []),
									this.each(function () {
										var a = !0,
											u = e != null && e + "queueHooks",
											h = o.timers,
											y = R.get(this);
										if (u) y[u] && y[u].stop && r(y[u]);
										else
											for (u in y) y[u] && y[u].stop && ki.test(u) && r(y[u]);
										for (u = h.length; u--; )
											h[u].elem === this &&
												(e == null || h[u].queue === e) &&
												(h[u].anim.stop(i), (a = !1), h.splice(u, 1));
										(a || !i) && o.dequeue(this, e);
									})
								);
							},
							finish: function (e) {
								return (
									e !== !1 && (e = e || "fx"),
									this.each(function () {
										var t,
											i = R.get(this),
											r = i[e + "queue"],
											a = i[e + "queueHooks"],
											u = o.timers,
											h = r ? r.length : 0;
										for (
											i.finish = !0,
												o.queue(this, e, []),
												a && a.stop && a.stop.call(this, !0),
												t = u.length;
											t--;

										)
											u[t].elem === this &&
												u[t].queue === e &&
												(u[t].anim.stop(!0), u.splice(t, 1));
										for (t = 0; t < h; t++)
											r[t] && r[t].finish && r[t].finish.call(this);
										delete i.finish;
									})
								);
							},
						}),
						o.each(["toggle", "show", "hide"], function (e, t) {
							var i = o.fn[t];
							o.fn[t] = function (r, a, u) {
								return r == null || typeof r == "boolean"
									? i.apply(this, arguments)
									: this.animate(jn(t, !0), r, a, u);
							};
						}),
						o.each(
							{
								slideDown: jn("show"),
								slideUp: jn("hide"),
								slideToggle: jn("toggle"),
								fadeIn: { opacity: "show" },
								fadeOut: { opacity: "hide" },
								fadeToggle: { opacity: "toggle" },
							},
							function (e, t) {
								o.fn[e] = function (i, r, a) {
									return this.animate(t, i, r, a);
								};
							},
						),
						(o.timers = []),
						(o.fx.tick = function () {
							var e,
								t = 0,
								i = o.timers;
							for (yt = Date.now(); t < i.length; t++)
								(e = i[t]), !e() && i[t] === e && i.splice(t--, 1);
							i.length || o.fx.stop(), (yt = void 0);
						}),
						(o.fx.timer = function (e) {
							o.timers.push(e), o.fx.start();
						}),
						(o.fx.interval = 13),
						(o.fx.start = function () {
							kn || ((kn = !0), yn());
						}),
						(o.fx.stop = function () {
							kn = null;
						}),
						(o.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
						(o.fn.delay = function (e, t) {
							return (
								(e = (o.fx && o.fx.speeds[e]) || e),
								(t = t || "fx"),
								this.queue(t, function (i, r) {
									var a = V.setTimeout(i, e);
									r.stop = function () {
										V.clearTimeout(a);
									};
								})
							);
						}),
						(function () {
							var e = Y.createElement("input"),
								t = Y.createElement("select"),
								i = t.appendChild(Y.createElement("option"));
							(e.type = "checkbox"),
								(z.checkOn = e.value !== ""),
								(z.optSelected = i.selected),
								(e = Y.createElement("input")),
								(e.value = "t"),
								(e.type = "radio"),
								(z.radioValue = e.value === "t");
						})();
					var _t,
						tt = o.expr.attrHandle;
					o.fn.extend({
						attr: function (e, t) {
							return lt(this, o.attr, e, t, arguments.length > 1);
						},
						removeAttr: function (e) {
							return this.each(function () {
								o.removeAttr(this, e);
							});
						},
					}),
						o.extend({
							attr: function (e, t, i) {
								var r,
									a,
									u = e.nodeType;
								if (!(u === 3 || u === 8 || u === 2)) {
									if (typeof e.getAttribute > "u") return o.prop(e, t, i);
									if (
										((u !== 1 || !o.isXMLDoc(e)) &&
											(a =
												o.attrHooks[t.toLowerCase()] ||
												(o.expr.match.bool.test(t) ? _t : void 0)),
										i !== void 0)
									) {
										if (i === null) {
											o.removeAttr(e, t);
											return;
										}
										return a && "set" in a && (r = a.set(e, i, t)) !== void 0
											? r
											: (e.setAttribute(t, i + ""), i);
									}
									return a && "get" in a && (r = a.get(e, t)) !== null
										? r
										: ((r = o.find.attr(e, t)), r ?? void 0);
								}
							},
							attrHooks: {
								type: {
									set: function (e, t) {
										if (!z.radioValue && t === "radio" && ae(e, "input")) {
											var i = e.value;
											return e.setAttribute("type", t), i && (e.value = i), t;
										}
									},
								},
							},
							removeAttr: function (e, t) {
								var i,
									r = 0,
									a = t && t.match(Ge);
								if (a && e.nodeType === 1)
									for (; (i = a[r++]); ) e.removeAttribute(i);
							},
						}),
						(_t = {
							set: function (e, t, i) {
								return t === !1 ? o.removeAttr(e, i) : e.setAttribute(i, i), i;
							},
						}),
						o.each(o.expr.match.bool.source.match(/\w+/g), function (e, t) {
							var i = tt[t] || o.find.attr;
							tt[t] = function (r, a, u) {
								var h,
									y,
									g = a.toLowerCase();
								return (
									u ||
										((y = tt[g]),
										(tt[g] = h),
										(h = i(r, a, u) != null ? g : null),
										(tt[g] = y)),
									h
								);
							};
						});
					var _n = /^(?:input|select|textarea|button)$/i,
						ct = /^(?:a|area)$/i;
					o.fn.extend({
						prop: function (e, t) {
							return lt(this, o.prop, e, t, arguments.length > 1);
						},
						removeProp: function (e) {
							return this.each(function () {
								delete this[o.propFix[e] || e];
							});
						},
					}),
						o.extend({
							prop: function (e, t, i) {
								var r,
									a,
									u = e.nodeType;
								if (!(u === 3 || u === 8 || u === 2))
									return (
										(u !== 1 || !o.isXMLDoc(e)) &&
											((t = o.propFix[t] || t), (a = o.propHooks[t])),
										i !== void 0
											? a && "set" in a && (r = a.set(e, i, t)) !== void 0
												? r
												: (e[t] = i)
											: a && "get" in a && (r = a.get(e, t)) !== null
												? r
												: e[t]
									);
							},
							propHooks: {
								tabIndex: {
									get: function (e) {
										var t = o.find.attr(e, "tabindex");
										return t
											? parseInt(t, 10)
											: _n.test(e.nodeName) || (ct.test(e.nodeName) && e.href)
												? 0
												: -1;
									},
								},
							},
							propFix: { for: "htmlFor", class: "className" },
						}),
						z.optSelected ||
							(o.propHooks.selected = {
								get: function (e) {
									var t = e.parentNode;
									return t && t.parentNode && t.parentNode.selectedIndex, null;
								},
								set: function (e) {
									var t = e.parentNode;
									t &&
										(t.selectedIndex,
										t.parentNode && t.parentNode.selectedIndex);
								},
							}),
						o.each(
							[
								"tabIndex",
								"readOnly",
								"maxLength",
								"cellSpacing",
								"cellPadding",
								"rowSpan",
								"colSpan",
								"useMap",
								"frameBorder",
								"contentEditable",
							],
							function () {
								o.propFix[this.toLowerCase()] = this;
							},
						);
					function ht(e) {
						var t = e.match(Ge) || [];
						return t.join(" ");
					}
					function Ot(e) {
						return (e.getAttribute && e.getAttribute("class")) || "";
					}
					function ri(e) {
						return Array.isArray(e)
							? e
							: typeof e == "string"
								? e.match(Ge) || []
								: [];
					}
					o.fn.extend({
						addClass: function (e) {
							var t, i, r, a, u, h;
							return X(e)
								? this.each(function (y) {
										o(this).addClass(e.call(this, y, Ot(this)));
									})
								: ((t = ri(e)),
									t.length
										? this.each(function () {
												if (
													((r = Ot(this)),
													(i = this.nodeType === 1 && " " + ht(r) + " "),
													i)
												) {
													for (u = 0; u < t.length; u++)
														(a = t[u]),
															i.indexOf(" " + a + " ") < 0 && (i += a + " ");
													(h = ht(i)), r !== h && this.setAttribute("class", h);
												}
											})
										: this);
						},
						removeClass: function (e) {
							var t, i, r, a, u, h;
							return X(e)
								? this.each(function (y) {
										o(this).removeClass(e.call(this, y, Ot(this)));
									})
								: arguments.length
									? ((t = ri(e)),
										t.length
											? this.each(function () {
													if (
														((r = Ot(this)),
														(i = this.nodeType === 1 && " " + ht(r) + " "),
														i)
													) {
														for (u = 0; u < t.length; u++)
															for (a = t[u]; i.indexOf(" " + a + " ") > -1; )
																i = i.replace(" " + a + " ", " ");
														(h = ht(i)),
															r !== h && this.setAttribute("class", h);
													}
												})
											: this)
									: this.attr("class", "");
						},
						toggleClass: function (e, t) {
							var i,
								r,
								a,
								u,
								h = typeof e,
								y = h === "string" || Array.isArray(e);
							return X(e)
								? this.each(function (g) {
										o(this).toggleClass(e.call(this, g, Ot(this), t), t);
									})
								: typeof t == "boolean" && y
									? t
										? this.addClass(e)
										: this.removeClass(e)
									: ((i = ri(e)),
										this.each(function () {
											if (y)
												for (u = o(this), a = 0; a < i.length; a++)
													(r = i[a]),
														u.hasClass(r) ? u.removeClass(r) : u.addClass(r);
											else
												(e === void 0 || h === "boolean") &&
													((r = Ot(this)),
													r && R.set(this, "__className__", r),
													this.setAttribute &&
														this.setAttribute(
															"class",
															r || e === !1
																? ""
																: R.get(this, "__className__") || "",
														));
										}));
						},
						hasClass: function (e) {
							var t,
								i,
								r = 0;
							for (t = " " + e + " "; (i = this[r++]); )
								if (i.nodeType === 1 && (" " + ht(Ot(i)) + " ").indexOf(t) > -1)
									return !0;
							return !1;
						},
					});
					var Se = /\r/g;
					o.fn.extend({
						val: function (e) {
							var t,
								i,
								r,
								a = this[0];
							return arguments.length
								? ((r = X(e)),
									this.each(function (u) {
										var h;
										this.nodeType === 1 &&
											(r ? (h = e.call(this, u, o(this).val())) : (h = e),
											h == null
												? (h = "")
												: typeof h == "number"
													? (h += "")
													: Array.isArray(h) &&
														(h = o.map(h, function (y) {
															return y == null ? "" : y + "";
														})),
											(t =
												o.valHooks[this.type] ||
												o.valHooks[this.nodeName.toLowerCase()]),
											(!t ||
												!("set" in t) ||
												t.set(this, h, "value") === void 0) &&
												(this.value = h));
									}))
								: a
									? ((t =
											o.valHooks[a.type] ||
											o.valHooks[a.nodeName.toLowerCase()]),
										t && "get" in t && (i = t.get(a, "value")) !== void 0
											? i
											: ((i = a.value),
												typeof i == "string" ? i.replace(Se, "") : i ?? ""))
									: void 0;
						},
					}),
						o.extend({
							valHooks: {
								option: {
									get: function (e) {
										var t = o.find.attr(e, "value");
										return t ?? ht(o.text(e));
									},
								},
								select: {
									get: function (e) {
										var t,
											i,
											r,
											a = e.options,
											u = e.selectedIndex,
											h = e.type === "select-one",
											y = h ? null : [],
											g = h ? u + 1 : a.length;
										for (u < 0 ? (r = g) : (r = h ? u : 0); r < g; r++)
											if (
												((i = a[r]),
												(i.selected || r === u) &&
													!i.disabled &&
													(!i.parentNode.disabled ||
														!ae(i.parentNode, "optgroup")))
											) {
												if (((t = o(i).val()), h)) return t;
												y.push(t);
											}
										return y;
									},
									set: function (e, t) {
										for (
											var i, r, a = e.options, u = o.makeArray(t), h = a.length;
											h--;

										)
											(r = a[h]),
												(r.selected =
													o.inArray(o.valHooks.option.get(r), u) > -1) &&
													(i = !0);
										return i || (e.selectedIndex = -1), u;
									},
								},
							},
						}),
						o.each(["radio", "checkbox"], function () {
							(o.valHooks[this] = {
								set: function (e, t) {
									if (Array.isArray(t))
										return (e.checked = o.inArray(o(e).val(), t) > -1);
								},
							}),
								z.checkOn ||
									(o.valHooks[this].get = function (e) {
										return e.getAttribute("value") === null ? "on" : e.value;
									});
						});
					var bt = V.location,
						Ne = { guid: Date.now() },
						oi = /\?/;
					o.parseXML = function (e) {
						var t, i;
						if (!e || typeof e != "string") return null;
						try {
							t = new V.DOMParser().parseFromString(e, "text/xml");
						} catch {}
						return (
							(i = t && t.getElementsByTagName("parsererror")[0]),
							(!t || i) &&
								o.error(
									"Invalid XML: " +
										(i
											? o.map(i.childNodes, function (r) {
													return r.textContent;
												}).join(`
`)
											: e),
								),
							t
						);
					};
					var Li = /^(?:focusinfocus|focusoutblur)$/,
						Pi = function (e) {
							e.stopPropagation();
						};
					o.extend(o.event, {
						trigger: function (e, t, i, r) {
							var a,
								u,
								h,
								y,
								g,
								b,
								S,
								A,
								w = [i || Y],
								N = Ye.call(e, "type") ? e.type : e,
								B = Ye.call(e, "namespace") ? e.namespace.split(".") : [];
							if (
								((u = A = h = i = i || Y),
								!(i.nodeType === 3 || i.nodeType === 8) &&
									!Li.test(N + o.event.triggered) &&
									(N.indexOf(".") > -1 &&
										((B = N.split(".")), (N = B.shift()), B.sort()),
									(g = N.indexOf(":") < 0 && "on" + N),
									(e = e[o.expando]
										? e
										: new o.Event(N, typeof e == "object" && e)),
									(e.isTrigger = r ? 2 : 3),
									(e.namespace = B.join(".")),
									(e.rnamespace = e.namespace
										? new RegExp(
												"(^|\\.)" + B.join("\\.(?:.*\\.|)") + "(\\.|$)",
											)
										: null),
									(e.result = void 0),
									e.target || (e.target = i),
									(t = t == null ? [e] : o.makeArray(t, [e])),
									(S = o.event.special[N] || {}),
									!(!r && S.trigger && S.trigger.apply(i, t) === !1)))
							) {
								if (!r && !S.noBubble && !Ft(i)) {
									for (
										y = S.delegateType || N,
											Li.test(y + N) || (u = u.parentNode);
										u;
										u = u.parentNode
									)
										w.push(u), (h = u);
									h === (i.ownerDocument || Y) &&
										w.push(h.defaultView || h.parentWindow || V);
								}
								for (a = 0; (u = w[a++]) && !e.isPropagationStopped(); )
									(A = u),
										(e.type = a > 1 ? y : S.bindType || N),
										(b =
											(R.get(u, "events") || Object.create(null))[e.type] &&
											R.get(u, "handle")),
										b && b.apply(u, t),
										(b = g && u[g]),
										b &&
											b.apply &&
											cn(u) &&
											((e.result = b.apply(u, t)),
											e.result === !1 && e.preventDefault());
								return (
									(e.type = N),
									!r &&
										!e.isDefaultPrevented() &&
										(!S._default || S._default.apply(w.pop(), t) === !1) &&
										cn(i) &&
										g &&
										X(i[N]) &&
										!Ft(i) &&
										((h = i[g]),
										h && (i[g] = null),
										(o.event.triggered = N),
										e.isPropagationStopped() && A.addEventListener(N, Pi),
										i[N](),
										e.isPropagationStopped() && A.removeEventListener(N, Pi),
										(o.event.triggered = void 0),
										h && (i[g] = h)),
									e.result
								);
							}
						},
						simulate: function (e, t, i) {
							var r = o.extend(new o.Event(), i, { type: e, isSimulated: !0 });
							o.event.trigger(r, null, t);
						},
					}),
						o.fn.extend({
							trigger: function (e, t) {
								return this.each(function () {
									o.event.trigger(e, t, this);
								});
							},
							triggerHandler: function (e, t) {
								var i = this[0];
								if (i) return o.event.trigger(e, t, i, !0);
							},
						});
					var Hi = /\[\]$/,
						Mi = /\r?\n/g,
						Ln = /^(?:submit|button|image|reset|file)$/i,
						ir = /^(?:input|select|textarea|keygen)/i;
					function bn(e, t, i, r) {
						var a;
						if (Array.isArray(t))
							o.each(t, function (u, h) {
								i || Hi.test(e)
									? r(e, h)
									: bn(
											e +
												"[" +
												(typeof h == "object" && h != null ? u : "") +
												"]",
											h,
											i,
											r,
										);
							});
						else if (!i && ut(t) === "object")
							for (a in t) bn(e + "[" + a + "]", t[a], i, r);
						else r(e, t);
					}
					(o.param = function (e, t) {
						var i,
							r = [],
							a = function (u, h) {
								var y = X(h) ? h() : h;
								r[r.length] =
									encodeURIComponent(u) + "=" + encodeURIComponent(y ?? "");
							};
						if (e == null) return "";
						if (Array.isArray(e) || (e.jquery && !o.isPlainObject(e)))
							o.each(e, function () {
								a(this.name, this.value);
							});
						else for (i in e) bn(i, e[i], t, a);
						return r.join("&");
					}),
						o.fn.extend({
							serialize: function () {
								return o.param(this.serializeArray());
							},
							serializeArray: function () {
								return this.map(function () {
									var e = o.prop(this, "elements");
									return e ? o.makeArray(e) : this;
								})
									.filter(function () {
										var e = this.type;
										return (
											this.name &&
											!o(this).is(":disabled") &&
											ir.test(this.nodeName) &&
											!Ln.test(e) &&
											(this.checked || !zt.test(e))
										);
									})
									.map(function (e, t) {
										var i = o(this).val();
										return i == null
											? null
											: Array.isArray(i)
												? o.map(i, function (r) {
														return {
															name: t.name,
															value: r.replace(
																Mi,
																`\r
`,
															),
														};
													})
												: {
														name: t.name,
														value: i.replace(
															Mi,
															`\r
`,
														),
													};
									})
									.get();
							},
						});
					var rr = /%20/g,
						or = /#.*$/,
						sr = /([?&])_=[^&]*/,
						ar = /^(.*?):[ \t]*([^\r\n]*)$/gm,
						ur = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
						lr = /^(?:GET|HEAD)$/,
						fr = /^\/\//,
						qi = {},
						si = {},
						Ri = "*/".concat("*"),
						nt = Y.createElement("a");
					nt.href = bt.href;
					function kt(e) {
						return function (t, i) {
							typeof t != "string" && ((i = t), (t = "*"));
							var r,
								a = 0,
								u = t.toLowerCase().match(Ge) || [];
							if (X(i))
								for (; (r = u[a++]); )
									r[0] === "+"
										? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(i))
										: (e[r] = e[r] || []).push(i);
						};
					}
					function nn(e, t, i, r) {
						var a = {},
							u = e === si;
						function h(y) {
							var g;
							return (
								(a[y] = !0),
								o.each(e[y] || [], function (b, S) {
									var A = S(t, i, r);
									if (typeof A == "string" && !u && !a[A])
										return t.dataTypes.unshift(A), h(A), !1;
									if (u) return !(g = A);
								}),
								g
							);
						}
						return h(t.dataTypes[0]) || (!a["*"] && h("*"));
					}
					function Ie(e, t) {
						var i,
							r,
							a = o.ajaxSettings.flatOptions || {};
						for (i in t)
							t[i] !== void 0 && ((a[i] ? e : r || (r = {}))[i] = t[i]);
						return r && o.extend(!0, e, r), e;
					}
					function cr(e, t, i) {
						for (
							var r, a, u, h, y = e.contents, g = e.dataTypes;
							g[0] === "*";

						)
							g.shift(),
								r === void 0 &&
									(r = e.mimeType || t.getResponseHeader("Content-Type"));
						if (r) {
							for (a in y)
								if (y[a] && y[a].test(r)) {
									g.unshift(a);
									break;
								}
						}
						if (g[0] in i) u = g[0];
						else {
							for (a in i) {
								if (!g[0] || e.converters[a + " " + g[0]]) {
									u = a;
									break;
								}
								h || (h = a);
							}
							u = u || h;
						}
						if (u) return u !== g[0] && g.unshift(u), i[u];
					}
					function ai(e, t, i, r) {
						var a,
							u,
							h,
							y,
							g,
							b = {},
							S = e.dataTypes.slice();
						if (S[1])
							for (h in e.converters) b[h.toLowerCase()] = e.converters[h];
						for (u = S.shift(); u; )
							if (
								(e.responseFields[u] && (i[e.responseFields[u]] = t),
								!g && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
								(g = u),
								(u = S.shift()),
								u)
							) {
								if (u === "*") u = g;
								else if (g !== "*" && g !== u) {
									if (((h = b[g + " " + u] || b["* " + u]), !h)) {
										for (a in b)
											if (
												((y = a.split(" ")),
												y[1] === u &&
													((h = b[g + " " + y[0]] || b["* " + y[0]]), h))
											) {
												h === !0
													? (h = b[a])
													: b[a] !== !0 && ((u = y[0]), S.unshift(y[1]));
												break;
											}
									}
									if (h !== !0)
										if (h && e.throws) t = h(t);
										else
											try {
												t = h(t);
											} catch (A) {
												return {
													state: "parsererror",
													error: h ? A : "No conversion from " + g + " to " + u,
												};
											}
								}
							}
						return { state: "success", data: t };
					}
					o.extend({
						active: 0,
						lastModified: {},
						etag: {},
						ajaxSettings: {
							url: bt.href,
							type: "GET",
							isLocal: ur.test(bt.protocol),
							global: !0,
							processData: !0,
							async: !0,
							contentType: "application/x-www-form-urlencoded; charset=UTF-8",
							accepts: {
								"*": Ri,
								text: "text/plain",
								html: "text/html",
								xml: "application/xml, text/xml",
								json: "application/json, text/javascript",
							},
							contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
							responseFields: {
								xml: "responseXML",
								text: "responseText",
								json: "responseJSON",
							},
							converters: {
								"* text": String,
								"text html": !0,
								"text json": JSON.parse,
								"text xml": o.parseXML,
							},
							flatOptions: { url: !0, context: !0 },
						},
						ajaxSetup: function (e, t) {
							return t ? Ie(Ie(e, o.ajaxSettings), t) : Ie(o.ajaxSettings, e);
						},
						ajaxPrefilter: kt(qi),
						ajaxTransport: kt(si),
						ajax: function (e, t) {
							typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
							var i,
								r,
								a,
								u,
								h,
								y,
								g,
								b,
								S,
								A,
								w = o.ajaxSetup({}, t),
								N = w.context || w,
								B = w.context && (N.nodeType || N.jquery) ? o(N) : o.event,
								$ = o.Deferred(),
								J = o.Callbacks("once memory"),
								ge = w.statusCode || {},
								pe = {},
								it = {},
								rt = "canceled",
								te = {
									readyState: 0,
									getResponseHeader: function (Z) {
										var le;
										if (g) {
											if (!u)
												for (u = {}; (le = ar.exec(a)); )
													u[le[1].toLowerCase() + " "] = (
														u[le[1].toLowerCase() + " "] || []
													).concat(le[2]);
											le = u[Z.toLowerCase() + " "];
										}
										return le == null ? null : le.join(", ");
									},
									getAllResponseHeaders: function () {
										return g ? a : null;
									},
									setRequestHeader: function (Z, le) {
										return (
											g == null &&
												((Z = it[Z.toLowerCase()] = it[Z.toLowerCase()] || Z),
												(pe[Z] = le)),
											this
										);
									},
									overrideMimeType: function (Z) {
										return g == null && (w.mimeType = Z), this;
									},
									statusCode: function (Z) {
										var le;
										if (Z)
											if (g) te.always(Z[te.status]);
											else for (le in Z) ge[le] = [ge[le], Z[le]];
										return this;
									},
									abort: function (Z) {
										var le = Z || rt;
										return i && i.abort(le), jt(0, le), this;
									},
								};
							if (
								($.promise(te),
								(w.url = ((e || w.url || bt.href) + "").replace(
									fr,
									bt.protocol + "//",
								)),
								(w.type = t.method || t.type || w.method || w.type),
								(w.dataTypes = (w.dataType || "*").toLowerCase().match(Ge) || [
									"",
								]),
								w.crossDomain == null)
							) {
								y = Y.createElement("a");
								try {
									(y.href = w.url),
										(y.href = y.href),
										(w.crossDomain =
											nt.protocol + "//" + nt.host !=
											y.protocol + "//" + y.host);
								} catch {
									w.crossDomain = !0;
								}
							}
							if (
								(w.data &&
									w.processData &&
									typeof w.data != "string" &&
									(w.data = o.param(w.data, w.traditional)),
								nn(qi, w, t, te),
								g)
							)
								return te;
							(b = o.event && w.global),
								b && o.active++ === 0 && o.event.trigger("ajaxStart"),
								(w.type = w.type.toUpperCase()),
								(w.hasContent = !lr.test(w.type)),
								(r = w.url.replace(or, "")),
								w.hasContent
									? w.data &&
										w.processData &&
										(w.contentType || "").indexOf(
											"application/x-www-form-urlencoded",
										) === 0 &&
										(w.data = w.data.replace(rr, "+"))
									: ((A = w.url.slice(r.length)),
										w.data &&
											(w.processData || typeof w.data == "string") &&
											((r += (oi.test(r) ? "&" : "?") + w.data), delete w.data),
										w.cache === !1 &&
											((r = r.replace(sr, "$1")),
											(A = (oi.test(r) ? "&" : "?") + "_=" + Ne.guid++ + A)),
										(w.url = r + A)),
								w.ifModified &&
									(o.lastModified[r] &&
										te.setRequestHeader("If-Modified-Since", o.lastModified[r]),
									o.etag[r] && te.setRequestHeader("If-None-Match", o.etag[r])),
								((w.data && w.hasContent && w.contentType !== !1) ||
									t.contentType) &&
									te.setRequestHeader("Content-Type", w.contentType),
								te.setRequestHeader(
									"Accept",
									w.dataTypes[0] && w.accepts[w.dataTypes[0]]
										? w.accepts[w.dataTypes[0]] +
												(w.dataTypes[0] !== "*" ? ", " + Ri + "; q=0.01" : "")
										: w.accepts["*"],
								);
							for (S in w.headers) te.setRequestHeader(S, w.headers[S]);
							if (w.beforeSend && (w.beforeSend.call(N, te, w) === !1 || g))
								return te.abort();
							if (
								((rt = "abort"),
								J.add(w.complete),
								te.done(w.success),
								te.fail(w.error),
								(i = nn(si, w, t, te)),
								!i)
							)
								jt(-1, "No Transport");
							else {
								if (
									((te.readyState = 1), b && B.trigger("ajaxSend", [te, w]), g)
								)
									return te;
								w.async &&
									w.timeout > 0 &&
									(h = V.setTimeout(function () {
										te.abort("timeout");
									}, w.timeout));
								try {
									(g = !1), i.send(pe, jt);
								} catch (Z) {
									if (g) throw Z;
									jt(-1, Z);
								}
							}
							function jt(Z, le, En, Lt) {
								var Oe,
									wn,
									ot,
									Re,
									st,
									Fe = le;
								g ||
									((g = !0),
									h && V.clearTimeout(h),
									(i = void 0),
									(a = Lt || ""),
									(te.readyState = Z > 0 ? 4 : 0),
									(Oe = (Z >= 200 && Z < 300) || Z === 304),
									En && (Re = cr(w, te, En)),
									!Oe &&
										o.inArray("script", w.dataTypes) > -1 &&
										o.inArray("json", w.dataTypes) < 0 &&
										(w.converters["text script"] = function () {}),
									(Re = ai(w, Re, te, Oe)),
									Oe
										? (w.ifModified &&
												((st = te.getResponseHeader("Last-Modified")),
												st && (o.lastModified[r] = st),
												(st = te.getResponseHeader("etag")),
												st && (o.etag[r] = st)),
											Z === 204 || w.type === "HEAD"
												? (Fe = "nocontent")
												: Z === 304
													? (Fe = "notmodified")
													: ((Fe = Re.state),
														(wn = Re.data),
														(ot = Re.error),
														(Oe = !ot)))
										: ((ot = Fe),
											(Z || !Fe) && ((Fe = "error"), Z < 0 && (Z = 0))),
									(te.status = Z),
									(te.statusText = (le || Fe) + ""),
									Oe
										? $.resolveWith(N, [wn, Fe, te])
										: $.rejectWith(N, [te, Fe, ot]),
									te.statusCode(ge),
									(ge = void 0),
									b &&
										B.trigger(Oe ? "ajaxSuccess" : "ajaxError", [
											te,
											w,
											Oe ? wn : ot,
										]),
									J.fireWith(N, [te, Fe]),
									b &&
										(B.trigger("ajaxComplete", [te, w]),
										--o.active || o.event.trigger("ajaxStop")));
							}
							return te;
						},
						getJSON: function (e, t, i) {
							return o.get(e, t, i, "json");
						},
						getScript: function (e, t) {
							return o.get(e, void 0, t, "script");
						},
					}),
						o.each(["get", "post"], function (e, t) {
							o[t] = function (i, r, a, u) {
								return (
									X(r) && ((u = u || a), (a = r), (r = void 0)),
									o.ajax(
										o.extend(
											{ url: i, type: t, dataType: u, data: r, success: a },
											o.isPlainObject(i) && i,
										),
									)
								);
							};
						}),
						o.ajaxPrefilter(function (e) {
							var t;
							for (t in e.headers)
								t.toLowerCase() === "content-type" &&
									(e.contentType = e.headers[t] || "");
						}),
						(o._evalUrl = function (e, t, i) {
							return o.ajax({
								url: e,
								type: "GET",
								dataType: "script",
								cache: !0,
								async: !1,
								global: !1,
								converters: { "text script": function () {} },
								dataFilter: function (r) {
									o.globalEval(r, t, i);
								},
							});
						}),
						o.fn.extend({
							wrapAll: function (e) {
								var t;
								return (
									this[0] &&
										(X(e) && (e = e.call(this[0])),
										(t = o(e, this[0].ownerDocument).eq(0).clone(!0)),
										this[0].parentNode && t.insertBefore(this[0]),
										t
											.map(function () {
												for (var i = this; i.firstElementChild; )
													i = i.firstElementChild;
												return i;
											})
											.append(this)),
									this
								);
							},
							wrapInner: function (e) {
								return X(e)
									? this.each(function (t) {
											o(this).wrapInner(e.call(this, t));
										})
									: this.each(function () {
											var t = o(this),
												i = t.contents();
											i.length ? i.wrapAll(e) : t.append(e);
										});
							},
							wrap: function (e) {
								var t = X(e);
								return this.each(function (i) {
									o(this).wrapAll(t ? e.call(this, i) : e);
								});
							},
							unwrap: function (e) {
								return (
									this.parent(e)
										.not("body")
										.each(function () {
											o(this).replaceWith(this.childNodes);
										}),
									this
								);
							},
						}),
						(o.expr.pseudos.hidden = function (e) {
							return !o.expr.pseudos.visible(e);
						}),
						(o.expr.pseudos.visible = function (e) {
							return !!(
								e.offsetWidth ||
								e.offsetHeight ||
								e.getClientRects().length
							);
						}),
						(o.ajaxSettings.xhr = function () {
							try {
								return new V.XMLHttpRequest();
							} catch {}
						});
					var hr = { 0: 200, 1223: 204 },
						ue = o.ajaxSettings.xhr();
					(z.cors = !!ue && "withCredentials" in ue),
						(z.ajax = ue = !!ue),
						o.ajaxTransport(function (e) {
							var t, i;
							if (z.cors || (ue && !e.crossDomain))
								return {
									send: function (r, a) {
										var u,
											h = e.xhr();
										if (
											(h.open(e.type, e.url, e.async, e.username, e.password),
											e.xhrFields)
										)
											for (u in e.xhrFields) h[u] = e.xhrFields[u];
										e.mimeType &&
											h.overrideMimeType &&
											h.overrideMimeType(e.mimeType),
											!e.crossDomain &&
												!r["X-Requested-With"] &&
												(r["X-Requested-With"] = "XMLHttpRequest");
										for (u in r) h.setRequestHeader(u, r[u]);
										(t = function (y) {
											return function () {
												t &&
													((t =
														i =
														h.onload =
														h.onerror =
														h.onabort =
														h.ontimeout =
														h.onreadystatechange =
															null),
													y === "abort"
														? h.abort()
														: y === "error"
															? typeof h.status != "number"
																? a(0, "error")
																: a(h.status, h.statusText)
															: a(
																	hr[h.status] || h.status,
																	h.statusText,
																	(h.responseType || "text") !== "text" ||
																		typeof h.responseText != "string"
																		? { binary: h.response }
																		: { text: h.responseText },
																	h.getAllResponseHeaders(),
																));
											};
										}),
											(h.onload = t()),
											(i = h.onerror = h.ontimeout = t("error")),
											h.onabort !== void 0
												? (h.onabort = i)
												: (h.onreadystatechange = function () {
														h.readyState === 4 &&
															V.setTimeout(function () {
																t && i();
															});
													}),
											(t = t("abort"));
										try {
											h.send((e.hasContent && e.data) || null);
										} catch (y) {
											if (t) throw y;
										}
									},
									abort: function () {
										t && t();
									},
								};
						}),
						o.ajaxPrefilter(function (e) {
							e.crossDomain && (e.contents.script = !1);
						}),
						o.ajaxSetup({
							accepts: {
								script:
									"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
							},
							contents: { script: /\b(?:java|ecma)script\b/ },
							converters: {
								"text script": function (e) {
									return o.globalEval(e), e;
								},
							},
						}),
						o.ajaxPrefilter("script", function (e) {
							e.cache === void 0 && (e.cache = !1),
								e.crossDomain && (e.type = "GET");
						}),
						o.ajaxTransport("script", function (e) {
							if (e.crossDomain || e.scriptAttrs) {
								var t, i;
								return {
									send: function (r, a) {
										(t = o("<script>")
											.attr(e.scriptAttrs || {})
											.prop({ charset: e.scriptCharset, src: e.url })
											.on(
												"load error",
												(i = function (u) {
													t.remove(),
														(i = null),
														u && a(u.type === "error" ? 404 : 200, u.type);
												}),
											)),
											Y.head.appendChild(t[0]);
									},
									abort: function () {
										i && i();
									},
								};
							}
						});
					var Fi = [],
						ui = /(=)\?(?=&|$)|\?\?/;
					o.ajaxSetup({
						jsonp: "callback",
						jsonpCallback: function () {
							var e = Fi.pop() || o.expando + "_" + Ne.guid++;
							return (this[e] = !0), e;
						},
					}),
						o.ajaxPrefilter("json jsonp", function (e, t, i) {
							var r,
								a,
								u,
								h =
									e.jsonp !== !1 &&
									(ui.test(e.url)
										? "url"
										: typeof e.data == "string" &&
											(e.contentType || "").indexOf(
												"application/x-www-form-urlencoded",
											) === 0 &&
											ui.test(e.data) &&
											"data");
							if (h || e.dataTypes[0] === "jsonp")
								return (
									(r = e.jsonpCallback =
										X(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
									h
										? (e[h] = e[h].replace(ui, "$1" + r))
										: e.jsonp !== !1 &&
											(e.url +=
												(oi.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
									(e.converters["script json"] = function () {
										return u || o.error(r + " was not called"), u[0];
									}),
									(e.dataTypes[0] = "json"),
									(a = V[r]),
									(V[r] = function () {
										u = arguments;
									}),
									i.always(function () {
										a === void 0 ? o(V).removeProp(r) : (V[r] = a),
											e[r] && ((e.jsonpCallback = t.jsonpCallback), Fi.push(r)),
											u && X(a) && a(u[0]),
											(u = a = void 0);
									}),
									"script"
								);
						}),
						(z.createHTMLDocument = (function () {
							var e = Y.implementation.createHTMLDocument("").body;
							return (
								(e.innerHTML = "<form></form><form></form>"),
								e.childNodes.length === 2
							);
						})()),
						(o.parseHTML = function (e, t, i) {
							if (typeof e != "string") return [];
							typeof t == "boolean" && ((i = t), (t = !1));
							var r, a, u;
							return (
								t ||
									(z.createHTMLDocument
										? ((t = Y.implementation.createHTMLDocument("")),
											(r = t.createElement("base")),
											(r.href = Y.location.href),
											t.head.appendChild(r))
										: (t = Y)),
								(a = bi.exec(e)),
								(u = !i && []),
								a
									? [t.createElement(a[1])]
									: ((a = Yn([e], t, u)),
										u && u.length && o(u).remove(),
										o.merge([], a.childNodes))
							);
						}),
						(o.fn.load = function (e, t, i) {
							var r,
								a,
								u,
								h = this,
								y = e.indexOf(" ");
							return (
								y > -1 && ((r = ht(e.slice(y))), (e = e.slice(0, y))),
								X(t)
									? ((i = t), (t = void 0))
									: t && typeof t == "object" && (a = "POST"),
								h.length > 0 &&
									o
										.ajax({
											url: e,
											type: a || "GET",
											dataType: "html",
											data: t,
										})
										.done(function (g) {
											(u = arguments),
												h.html(
													r ? o("<div>").append(o.parseHTML(g)).find(r) : g,
												);
										})
										.always(
											i &&
												function (g, b) {
													h.each(function () {
														i.apply(this, u || [g.responseText, b, g]);
													});
												},
										),
								this
							);
						}),
						(o.expr.pseudos.animated = function (e) {
							return o.grep(o.timers, function (t) {
								return e === t.elem;
							}).length;
						}),
						(o.offset = {
							setOffset: function (e, t, i) {
								var r,
									a,
									u,
									h,
									y,
									g,
									b,
									S = o.css(e, "position"),
									A = o(e),
									w = {};
								S === "static" && (e.style.position = "relative"),
									(y = A.offset()),
									(u = o.css(e, "top")),
									(g = o.css(e, "left")),
									(b =
										(S === "absolute" || S === "fixed") &&
										(u + g).indexOf("auto") > -1),
									b
										? ((r = A.position()), (h = r.top), (a = r.left))
										: ((h = parseFloat(u) || 0), (a = parseFloat(g) || 0)),
									X(t) && (t = t.call(e, i, o.extend({}, y))),
									t.top != null && (w.top = t.top - y.top + h),
									t.left != null && (w.left = t.left - y.left + a),
									"using" in t ? t.using.call(e, w) : A.css(w);
							},
						}),
						o.fn.extend({
							offset: function (e) {
								if (arguments.length)
									return e === void 0
										? this
										: this.each(function (a) {
												o.offset.setOffset(this, e, a);
											});
								var t,
									i,
									r = this[0];
								if (r)
									return r.getClientRects().length
										? ((t = r.getBoundingClientRect()),
											(i = r.ownerDocument.defaultView),
											{
												top: t.top + i.pageYOffset,
												left: t.left + i.pageXOffset,
											})
										: { top: 0, left: 0 };
							},
							position: function () {
								if (this[0]) {
									var e,
										t,
										i,
										r = this[0],
										a = { top: 0, left: 0 };
									if (o.css(r, "position") === "fixed")
										t = r.getBoundingClientRect();
									else {
										for (
											t = this.offset(),
												i = r.ownerDocument,
												e = r.offsetParent || i.documentElement;
											e &&
											(e === i.body || e === i.documentElement) &&
											o.css(e, "position") === "static";

										)
											e = e.parentNode;
										e &&
											e !== r &&
											e.nodeType === 1 &&
											((a = o(e).offset()),
											(a.top += o.css(e, "borderTopWidth", !0)),
											(a.left += o.css(e, "borderLeftWidth", !0)));
									}
									return {
										top: t.top - a.top - o.css(r, "marginTop", !0),
										left: t.left - a.left - o.css(r, "marginLeft", !0),
									};
								}
							},
							offsetParent: function () {
								return this.map(function () {
									for (
										var e = this.offsetParent;
										e && o.css(e, "position") === "static";

									)
										e = e.offsetParent;
									return e || Ue;
								});
							},
						}),
						o.each(
							{ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
							function (e, t) {
								var i = t === "pageYOffset";
								o.fn[e] = function (r) {
									return lt(
										this,
										function (a, u, h) {
											var y;
											if (
												(Ft(a)
													? (y = a)
													: a.nodeType === 9 && (y = a.defaultView),
												h === void 0)
											)
												return y ? y[t] : a[u];
											y
												? y.scrollTo(
														i ? y.pageXOffset : h,
														i ? h : y.pageYOffset,
													)
												: (a[u] = h);
										},
										e,
										r,
										arguments.length,
									);
								};
							},
						),
						o.each(["top", "left"], function (e, t) {
							o.cssHooks[t] = Jn(z.pixelPosition, function (i, r) {
								if (r)
									return (
										(r = Nt(i, t)), Ae.test(r) ? o(i).position()[t] + "px" : r
									);
							});
						}),
						o.each({ Height: "height", Width: "width" }, function (e, t) {
							o.each(
								{ padding: "inner" + e, content: t, "": "outer" + e },
								function (i, r) {
									o.fn[r] = function (a, u) {
										var h = arguments.length && (i || typeof a != "boolean"),
											y = i || (a === !0 || u === !0 ? "margin" : "border");
										return lt(
											this,
											function (g, b, S) {
												var A;
												return Ft(g)
													? r.indexOf("outer") === 0
														? g["inner" + e]
														: g.document.documentElement["client" + e]
													: g.nodeType === 9
														? ((A = g.documentElement),
															Math.max(
																g.body["scroll" + e],
																A["scroll" + e],
																g.body["offset" + e],
																A["offset" + e],
																A["client" + e],
															))
														: S === void 0
															? o.css(g, b, y)
															: o.style(g, b, S, y);
											},
											t,
											h ? a : void 0,
											h,
										);
									};
								},
							);
						}),
						o.each(
							[
								"ajaxStart",
								"ajaxStop",
								"ajaxComplete",
								"ajaxError",
								"ajaxSuccess",
								"ajaxSend",
							],
							function (e, t) {
								o.fn[t] = function (i) {
									return this.on(t, i);
								};
							},
						),
						o.fn.extend({
							bind: function (e, t, i) {
								return this.on(e, null, t, i);
							},
							unbind: function (e, t) {
								return this.off(e, null, t);
							},
							delegate: function (e, t, i, r) {
								return this.on(t, e, i, r);
							},
							undelegate: function (e, t, i) {
								return arguments.length === 1
									? this.off(e, "**")
									: this.off(t, e || "**", i);
							},
							hover: function (e, t) {
								return this.on("mouseenter", e).on("mouseleave", t || e);
							},
						}),
						o.each(
							"blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
								" ",
							),
							function (e, t) {
								o.fn[t] = function (i, r) {
									return arguments.length > 0
										? this.on(t, null, i, r)
										: this.trigger(t);
								};
							},
						);
					var dr = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
					(o.proxy = function (e, t) {
						var i, r, a;
						if (
							(typeof t == "string" && ((i = e[t]), (t = e), (e = i)), !!X(e))
						)
							return (
								(r = oe.call(arguments, 2)),
								(a = function () {
									return e.apply(t || this, r.concat(oe.call(arguments)));
								}),
								(a.guid = e.guid = e.guid || o.guid++),
								a
							);
					}),
						(o.holdReady = function (e) {
							e ? o.readyWait++ : o.ready(!0);
						}),
						(o.isArray = Array.isArray),
						(o.parseJSON = JSON.parse),
						(o.nodeName = ae),
						(o.isFunction = X),
						(o.isWindow = Ft),
						(o.camelCase = Je),
						(o.type = ut),
						(o.now = Date.now),
						(o.isNumeric = function (e) {
							var t = o.type(e);
							return (
								(t === "number" || t === "string") && !isNaN(e - parseFloat(e))
							);
						}),
						(o.trim = function (e) {
							return e == null ? "" : (e + "").replace(dr, "$1");
						});
					var Wi = V.jQuery,
						rn = V.$;
					return (
						(o.noConflict = function (e) {
							return (
								V.$ === o && (V.$ = rn),
								e && V.jQuery === o && (V.jQuery = Wi),
								o
							);
						}),
						typeof de > "u" && (V.jQuery = V.$ = o),
						o
					);
				});
			})(wr)),
		wr.exports
	);
}
/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */ (function (He, V) {
	(function (de, f) {
		f(V, Fr());
	})(Tr, function (de, f) {
		function qt(l, c) {
			for (var n = 0; n < c.length; n++) {
				var s = c[n];
				(s.enumerable = s.enumerable || !1),
					(s.configurable = !0),
					"value" in s && (s.writable = !0),
					Object.defineProperty(l, s.key, s);
			}
		}
		function oe(l, c, n) {
			return c && qt(l.prototype, c), n && qt(l, n), l;
		}
		function ce(l) {
			for (var c = 1; c < arguments.length; c++) {
				var n = arguments[c] != null ? arguments[c] : {},
					s = Object.keys(n);
				typeof Object.getOwnPropertySymbols == "function" &&
					(s = s.concat(
						Object.getOwnPropertySymbols(n).filter(function (d) {
							return Object.getOwnPropertyDescriptor(n, d).enumerable;
						}),
					)),
					s.forEach(function (d) {
						var m, v, C;
						(m = l),
							(C = n[(v = d)]),
							v in m
								? Object.defineProperty(m, v, {
										value: C,
										enumerable: !0,
										configurable: !0,
										writable: !0,
									})
								: (m[v] = C);
					});
			}
			return l;
		}
		f = f && f.hasOwnProperty("default") ? f.default : f;
		var Be = "transitionend";
		function Me(l) {
			var c = this,
				n = !1;
			return (
				f(this).one(P.TRANSITION_END, function () {
					n = !0;
				}),
				setTimeout(function () {
					n || P.triggerTransitionEnd(c);
				}, l),
				this
			);
		}
		var P = {
			TRANSITION_END: "bsTransitionEnd",
			getUID: function (l) {
				for (; (l += ~~(1e6 * Math.random())), document.getElementById(l); );
				return l;
			},
			getSelectorFromElement: function (l) {
				var c = l.getAttribute("data-target");
				if (!c || c === "#") {
					var n = l.getAttribute("href");
					c = n && n !== "#" ? n.trim() : "";
				}
				try {
					return document.querySelector(c) ? c : null;
				} catch {
					return null;
				}
			},
			getTransitionDurationFromElement: function (l) {
				if (!l) return 0;
				var c = f(l).css("transition-duration"),
					n = f(l).css("transition-delay"),
					s = parseFloat(c),
					d = parseFloat(n);
				return s || d
					? ((c = c.split(",")[0]),
						(n = n.split(",")[0]),
						1e3 * (parseFloat(c) + parseFloat(n)))
					: 0;
			},
			reflow: function (l) {
				return l.offsetHeight;
			},
			triggerTransitionEnd: function (l) {
				f(l).trigger(Be);
			},
			supportsTransitionEnd: function () {
				return !!Be;
			},
			isElement: function (l) {
				return (l[0] || l).nodeType;
			},
			typeCheckConfig: function (l, c, n) {
				for (var s in n)
					if (Object.prototype.hasOwnProperty.call(n, s)) {
						var d = n[s],
							m = c[s],
							v =
								m && P.isElement(m)
									? "element"
									: ((C = m),
										{}.toString
											.call(C)
											.match(/\s([a-z]+)/i)[1]
											.toLowerCase());
						if (!new RegExp(d).test(v))
							throw new Error(
								l.toUpperCase() +
									': Option "' +
									s +
									'" provided type "' +
									v +
									'" but expected type "' +
									d +
									'".',
							);
					}
				var C;
			},
			findShadowRoot: function (l) {
				if (!document.documentElement.attachShadow) return null;
				if (typeof l.getRootNode != "function")
					return l instanceof ShadowRoot
						? l
						: l.parentNode
							? P.findShadowRoot(l.parentNode)
							: null;
				var c = l.getRootNode();
				return c instanceof ShadowRoot ? c : null;
			},
		};
		(f.fn.emulateTransitionEnd = Me),
			(f.event.special[P.TRANSITION_END] = {
				bindType: Be,
				delegateType: Be,
				handle: function (l) {
					if (f(l.target).is(this))
						return l.handleObj.handler.apply(this, arguments);
				},
			});
		var pt = "alert",
			Ye = "bs.alert",
			Rt = "." + Ye,
			Vi = f.fn[pt],
			z = {
				CLOSE: "close" + Rt,
				CLOSED: "closed" + Rt,
				CLICK_DATA_API: "click" + Rt + ".data-api",
			},
			X = "alert",
			Ft = "fade",
			Y = "show",
			Wt = (function () {
				function l(n) {
					this._element = n;
				}
				var c = l.prototype;
				return (
					(c.close = function (n) {
						var s = this._element;
						n && (s = this._getRootElement(n)),
							this._triggerCloseEvent(s).isDefaultPrevented() ||
								this._removeElement(s);
					}),
					(c.dispose = function () {
						f.removeData(this._element, Ye), (this._element = null);
					}),
					(c._getRootElement = function (n) {
						var s = P.getSelectorFromElement(n),
							d = !1;
						return (
							s && (d = document.querySelector(s)),
							d || (d = f(n).closest("." + X)[0]),
							d
						);
					}),
					(c._triggerCloseEvent = function (n) {
						var s = f.Event(z.CLOSE);
						return f(n).trigger(s), s;
					}),
					(c._removeElement = function (n) {
						var s = this;
						if ((f(n).removeClass(Y), f(n).hasClass(Ft))) {
							var d = P.getTransitionDurationFromElement(n);
							f(n)
								.one(P.TRANSITION_END, function (m) {
									return s._destroyElement(n, m);
								})
								.emulateTransitionEnd(d);
						} else this._destroyElement(n);
					}),
					(c._destroyElement = function (n) {
						f(n).detach().trigger(z.CLOSED).remove();
					}),
					(l._jQueryInterface = function (n) {
						return this.each(function () {
							var s = f(this),
								d = s.data(Ye);
							d || ((d = new l(this)), s.data(Ye, d)),
								n === "close" && d[n](this);
						});
					}),
					(l._handleDismiss = function (n) {
						return function (s) {
							s && s.preventDefault(), n.close(this);
						};
					}),
					oe(l, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.3.1";
							},
						},
					]),
					l
				);
			})();
		f(document).on(
			z.CLICK_DATA_API,
			'[data-dismiss="alert"]',
			Wt._handleDismiss(new Wt()),
		),
			(f.fn[pt] = Wt._jQueryInterface),
			(f.fn[pt].Constructor = Wt),
			(f.fn[pt].noConflict = function () {
				return (f.fn[pt] = Vi), Wt._jQueryInterface;
			});
		var Bt = "button",
			ut = "bs.button",
			Tn = "." + ut,
			Qn = ".data-api",
			o = f.fn[Bt],
			Tt = "active",
			ae = "btn",
			Ki = "focus",
			vi = '[data-toggle^="button"]',
			$i = '[data-toggle="buttons"]',
			re = 'input:not([type="hidden"])',
			ln = ".active",
			yi = ".btn",
			_i = {
				CLICK_DATA_API: "click" + Tn + Qn,
				FOCUS_BLUR_DATA_API: "focus" + Tn + Qn + " blur" + Tn + Qn,
			},
			je = (function () {
				function l(n) {
					this._element = n;
				}
				var c = l.prototype;
				return (
					(c.toggle = function () {
						var n = !0,
							s = !0,
							d = f(this._element).closest($i)[0];
						if (d) {
							var m = this._element.querySelector(re);
							if (m) {
								if (m.type === "radio")
									if (m.checked && this._element.classList.contains(Tt)) n = !1;
									else {
										var v = d.querySelector(ln);
										v && f(v).removeClass(Tt);
									}
								if (n) {
									if (
										m.hasAttribute("disabled") ||
										d.hasAttribute("disabled") ||
										m.classList.contains("disabled") ||
										d.classList.contains("disabled")
									)
										return;
									(m.checked = !this._element.classList.contains(Tt)),
										f(m).trigger("change");
								}
								m.focus(), (s = !1);
							}
						}
						s &&
							this._element.setAttribute(
								"aria-pressed",
								!this._element.classList.contains(Tt),
							),
							n && f(this._element).toggleClass(Tt);
					}),
					(c.dispose = function () {
						f.removeData(this._element, ut), (this._element = null);
					}),
					(l._jQueryInterface = function (n) {
						return this.each(function () {
							var s = f(this).data(ut);
							s || ((s = new l(this)), f(this).data(ut, s)),
								n === "toggle" && s[n]();
						});
					}),
					oe(l, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.3.1";
							},
						},
					]),
					l
				);
			})();
		f(document)
			.on(_i.CLICK_DATA_API, vi, function (l) {
				l.preventDefault();
				var c = l.target;
				f(c).hasClass(ae) || (c = f(c).closest(yi)),
					je._jQueryInterface.call(f(c), "toggle");
			})
			.on(_i.FOCUS_BLUR_DATA_API, vi, function (l) {
				var c = f(l.target).closest(yi)[0];
				f(c).toggleClass(Ki, /^focus(in)?$/.test(l.type));
			}),
			(f.fn[Bt] = je._jQueryInterface),
			(f.fn[Bt].Constructor = je),
			(f.fn[Bt].noConflict = function () {
				return (f.fn[Bt] = o), je._jQueryInterface;
			});
		var gt = "carousel",
			Xe = "bs.carousel",
			Ee = "." + Xe,
			Vn = ".data-api",
			bi = f.fn[gt],
			fn = {
				interval: 5e3,
				keyboard: !0,
				slide: !1,
				pause: "hover",
				wrap: !0,
				touch: !0,
			},
			Ei = {
				interval: "(number|boolean)",
				keyboard: "boolean",
				slide: "(boolean|string)",
				pause: "(string|boolean)",
				wrap: "boolean",
				touch: "boolean",
			},
			Cn = "next",
			Sn = "prev",
			zi = "left",
			Yi = "right",
			we = {
				SLIDE: "slide" + Ee,
				SLID: "slid" + Ee,
				KEYDOWN: "keydown" + Ee,
				MOUSEENTER: "mouseenter" + Ee,
				MOUSELEAVE: "mouseleave" + Ee,
				TOUCHSTART: "touchstart" + Ee,
				TOUCHMOVE: "touchmove" + Ee,
				TOUCHEND: "touchend" + Ee,
				POINTERDOWN: "pointerdown" + Ee,
				POINTERUP: "pointerup" + Ee,
				DRAG_START: "dragstart" + Ee,
				LOAD_DATA_API: "load" + Ee + Vn,
				CLICK_DATA_API: "click" + Ee + Vn,
			},
			Ge = "carousel",
			Ct = "active",
			Ut = "slide",
			xn = "carousel-item-right",
			wi = "carousel-item-left",
			Xi = "carousel-item-next",
			Kn = "carousel-item-prev",
			Dn = "pointer-event",
			lt = ".active",
			$n = ".active.carousel-item",
			Gi = ".carousel-item",
			Ji = ".carousel-item img",
			Je = ".carousel-item-next, .carousel-item-prev",
			cn = ".carousel-indicators",
			hn = "[data-slide], [data-slide-to]",
			R = '[data-ride="carousel"]',
			Te = { TOUCH: "touch", PEN: "pen" },
			Qt = (function () {
				function l(n, s) {
					(this._items = null),
						(this._interval = null),
						(this._activeElement = null),
						(this._isPaused = !1),
						(this._isSliding = !1),
						(this.touchTimeout = null),
						(this.touchStartX = 0),
						(this.touchDeltaX = 0),
						(this._config = this._getConfig(s)),
						(this._element = n),
						(this._indicatorsElement = this._element.querySelector(cn)),
						(this._touchSupported =
							"ontouchstart" in document.documentElement ||
							0 < navigator.maxTouchPoints),
						(this._pointerEvent = !!(
							window.PointerEvent || window.MSPointerEvent
						)),
						this._addEventListeners();
				}
				var c = l.prototype;
				return (
					(c.next = function () {
						this._isSliding || this._slide(Cn);
					}),
					(c.nextWhenVisible = function () {
						!document.hidden &&
							f(this._element).is(":visible") &&
							f(this._element).css("visibility") !== "hidden" &&
							this.next();
					}),
					(c.prev = function () {
						this._isSliding || this._slide(Sn);
					}),
					(c.pause = function (n) {
						n || (this._isPaused = !0),
							this._element.querySelector(Je) &&
								(P.triggerTransitionEnd(this._element), this.cycle(!0)),
							clearInterval(this._interval),
							(this._interval = null);
					}),
					(c.cycle = function (n) {
						n || (this._isPaused = !1),
							this._interval &&
								(clearInterval(this._interval), (this._interval = null)),
							this._config.interval &&
								!this._isPaused &&
								(this._interval = setInterval(
									(document.visibilityState
										? this.nextWhenVisible
										: this.next
									).bind(this),
									this._config.interval,
								));
					}),
					(c.to = function (n) {
						var s = this;
						this._activeElement = this._element.querySelector($n);
						var d = this._getItemIndex(this._activeElement);
						if (!(n > this._items.length - 1 || n < 0))
							if (this._isSliding)
								f(this._element).one(we.SLID, function () {
									return s.to(n);
								});
							else {
								if (d === n) return this.pause(), void this.cycle();
								var m = d < n ? Cn : Sn;
								this._slide(m, this._items[n]);
							}
					}),
					(c.dispose = function () {
						f(this._element).off(Ee),
							f.removeData(this._element, Xe),
							(this._items = null),
							(this._config = null),
							(this._element = null),
							(this._interval = null),
							(this._isPaused = null),
							(this._isSliding = null),
							(this._activeElement = null),
							(this._indicatorsElement = null);
					}),
					(c._getConfig = function (n) {
						return (n = ce({}, fn, n)), P.typeCheckConfig(gt, n, Ei), n;
					}),
					(c._handleSwipe = function () {
						var n = Math.abs(this.touchDeltaX);
						if (!(n <= 40)) {
							var s = n / this.touchDeltaX;
							0 < s && this.prev(), s < 0 && this.next();
						}
					}),
					(c._addEventListeners = function () {
						var n = this;
						this._config.keyboard &&
							f(this._element).on(we.KEYDOWN, function (s) {
								return n._keydown(s);
							}),
							this._config.pause === "hover" &&
								f(this._element)
									.on(we.MOUSEENTER, function (s) {
										return n.pause(s);
									})
									.on(we.MOUSELEAVE, function (s) {
										return n.cycle(s);
									}),
							this._config.touch && this._addTouchEventListeners();
					}),
					(c._addTouchEventListeners = function () {
						var n = this;
						if (this._touchSupported) {
							var s = function (m) {
									n._pointerEvent &&
									Te[m.originalEvent.pointerType.toUpperCase()]
										? (n.touchStartX = m.originalEvent.clientX)
										: n._pointerEvent ||
											(n.touchStartX = m.originalEvent.touches[0].clientX);
								},
								d = function (m) {
									n._pointerEvent &&
										Te[m.originalEvent.pointerType.toUpperCase()] &&
										(n.touchDeltaX = m.originalEvent.clientX - n.touchStartX),
										n._handleSwipe(),
										n._config.pause === "hover" &&
											(n.pause(),
											n.touchTimeout && clearTimeout(n.touchTimeout),
											(n.touchTimeout = setTimeout(function (v) {
												return n.cycle(v);
											}, 500 + n._config.interval)));
								};
							f(this._element.querySelectorAll(Ji)).on(
								we.DRAG_START,
								function (m) {
									return m.preventDefault();
								},
							),
								this._pointerEvent
									? (f(this._element).on(we.POINTERDOWN, function (m) {
											return s(m);
										}),
										f(this._element).on(we.POINTERUP, function (m) {
											return d(m);
										}),
										this._element.classList.add(Dn))
									: (f(this._element).on(we.TOUCHSTART, function (m) {
											return s(m);
										}),
										f(this._element).on(we.TOUCHMOVE, function (m) {
											var v;
											(v = m).originalEvent.touches &&
											1 < v.originalEvent.touches.length
												? (n.touchDeltaX = 0)
												: (n.touchDeltaX =
														v.originalEvent.touches[0].clientX - n.touchStartX);
										}),
										f(this._element).on(we.TOUCHEND, function (m) {
											return d(m);
										}));
						}
					}),
					(c._keydown = function (n) {
						if (!/input|textarea/i.test(n.target.tagName))
							switch (n.which) {
								case 37:
									n.preventDefault(), this.prev();
									break;
								case 39:
									n.preventDefault(), this.next();
							}
					}),
					(c._getItemIndex = function (n) {
						return (
							(this._items =
								n && n.parentNode
									? [].slice.call(n.parentNode.querySelectorAll(Gi))
									: []),
							this._items.indexOf(n)
						);
					}),
					(c._getItemByDirection = function (n, s) {
						var d = n === Cn,
							m = n === Sn,
							v = this._getItemIndex(s),
							C = this._items.length - 1;
						if (((m && v === 0) || (d && v === C)) && !this._config.wrap)
							return s;
						var x = (v + (n === Sn ? -1 : 1)) % this._items.length;
						return x === -1
							? this._items[this._items.length - 1]
							: this._items[x];
					}),
					(c._triggerSlideEvent = function (n, s) {
						var d = this._getItemIndex(n),
							m = this._getItemIndex(this._element.querySelector($n)),
							v = f.Event(we.SLIDE, {
								relatedTarget: n,
								direction: s,
								from: m,
								to: d,
							});
						return f(this._element).trigger(v), v;
					}),
					(c._setActiveIndicatorElement = function (n) {
						if (this._indicatorsElement) {
							var s = [].slice.call(
								this._indicatorsElement.querySelectorAll(lt),
							);
							f(s).removeClass(Ct);
							var d = this._indicatorsElement.children[this._getItemIndex(n)];
							d && f(d).addClass(Ct);
						}
					}),
					(c._slide = function (n, s) {
						var d,
							m,
							v,
							C = this,
							x = this._element.querySelector($n),
							j = this._getItemIndex(x),
							O = s || (x && this._getItemByDirection(n, x)),
							q = this._getItemIndex(O),
							H = !!this._interval;
						if (
							((v =
								n === Cn ? ((d = wi), (m = Xi), zi) : ((d = xn), (m = Kn), Yi)),
							O && f(O).hasClass(Ct))
						)
							this._isSliding = !1;
						else if (
							!this._triggerSlideEvent(O, v).isDefaultPrevented() &&
							x &&
							O
						) {
							(this._isSliding = !0),
								H && this.pause(),
								this._setActiveIndicatorElement(O);
							var W = f.Event(we.SLID, {
								relatedTarget: O,
								direction: v,
								from: j,
								to: q,
							});
							if (f(this._element).hasClass(Ut)) {
								f(O).addClass(m),
									P.reflow(O),
									f(x).addClass(d),
									f(O).addClass(d);
								var K = parseInt(O.getAttribute("data-interval"), 10);
								this._config.interval = K
									? ((this._config.defaultInterval =
											this._config.defaultInterval || this._config.interval),
										K)
									: this._config.defaultInterval || this._config.interval;
								var ne = P.getTransitionDurationFromElement(x);
								f(x)
									.one(P.TRANSITION_END, function () {
										f(O)
											.removeClass(d + " " + m)
											.addClass(Ct),
											f(x).removeClass(Ct + " " + m + " " + d),
											(C._isSliding = !1),
											setTimeout(function () {
												return f(C._element).trigger(W);
											}, 0);
									})
									.emulateTransitionEnd(ne);
							} else
								f(x).removeClass(Ct),
									f(O).addClass(Ct),
									(this._isSliding = !1),
									f(this._element).trigger(W);
							H && this.cycle();
						}
					}),
					(l._jQueryInterface = function (n) {
						return this.each(function () {
							var s = f(this).data(Xe),
								d = ce({}, fn, f(this).data());
							typeof n == "object" && (d = ce({}, d, n));
							var m = typeof n == "string" ? n : d.slide;
							if (
								(s || ((s = new l(this, d)), f(this).data(Xe, s)),
								typeof n == "number")
							)
								s.to(n);
							else if (typeof m == "string") {
								if (typeof s[m] > "u")
									throw new TypeError('No method named "' + m + '"');
								s[m]();
							} else d.interval && d.ride && (s.pause(), s.cycle());
						});
					}),
					(l._dataApiClickHandler = function (n) {
						var s = P.getSelectorFromElement(this);
						if (s) {
							var d = f(s)[0];
							if (d && f(d).hasClass(Ge)) {
								var m = ce({}, f(d).data(), f(this).data()),
									v = this.getAttribute("data-slide-to");
								v && (m.interval = !1),
									l._jQueryInterface.call(f(d), m),
									v && f(d).data(Xe).to(v),
									n.preventDefault();
							}
						}
					}),
					oe(l, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.3.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return fn;
							},
						},
					]),
					l
				);
			})();
		f(document).on(we.CLICK_DATA_API, hn, Qt._dataApiClickHandler),
			f(window).on(we.LOAD_DATA_API, function () {
				for (
					var l = [].slice.call(document.querySelectorAll(R)),
						c = 0,
						n = l.length;
					c < n;
					c++
				) {
					var s = f(l[c]);
					Qt._jQueryInterface.call(s, s.data());
				}
			}),
			(f.fn[gt] = Qt._jQueryInterface),
			(f.fn[gt].Constructor = Qt),
			(f.fn[gt].noConflict = function () {
				return (f.fn[gt] = bi), Qt._jQueryInterface;
			});
		var Vt = "collapse",
			St = "bs.collapse",
			Kt = "." + St,
			Ti = f.fn[Vt],
			xt = { toggle: !0, parent: "" },
			ft = { toggle: "boolean", parent: "(string|element)" },
			Ue = {
				SHOW: "show" + Kt,
				SHOWN: "shown" + Kt,
				HIDE: "hide" + Kt,
				HIDDEN: "hidden" + Kt,
				CLICK_DATA_API: "click" + Kt + ".data-api",
			},
			qe = "show",
			dn = "collapse",
			Dt = "collapsing",
			An = "collapsed",
			zn = "width",
			Zi = "height",
			$t = ".show, .collapsing",
			zt = '[data-toggle="collapse"]',
			Yt = (function () {
				function l(n, s) {
					(this._isTransitioning = !1),
						(this._element = n),
						(this._config = this._getConfig(s)),
						(this._triggerArray = [].slice.call(
							document.querySelectorAll(
								'[data-toggle="collapse"][href="#' +
									n.id +
									'"],[data-toggle="collapse"][data-target="#' +
									n.id +
									'"]',
							),
						));
					for (
						var d = [].slice.call(document.querySelectorAll(zt)),
							m = 0,
							v = d.length;
						m < v;
						m++
					) {
						var C = d[m],
							x = P.getSelectorFromElement(C),
							j = [].slice
								.call(document.querySelectorAll(x))
								.filter(function (O) {
									return O === n;
								});
						x !== null &&
							0 < j.length &&
							((this._selector = x), this._triggerArray.push(C));
					}
					(this._parent = this._config.parent ? this._getParent() : null),
						this._config.parent ||
							this._addAriaAndCollapsedClass(this._element, this._triggerArray),
						this._config.toggle && this.toggle();
				}
				var c = l.prototype;
				return (
					(c.toggle = function () {
						f(this._element).hasClass(qe) ? this.hide() : this.show();
					}),
					(c.show = function () {
						var n,
							s,
							d = this;
						if (
							!this._isTransitioning &&
							!f(this._element).hasClass(qe) &&
							(this._parent &&
								(n = [].slice
									.call(this._parent.querySelectorAll($t))
									.filter(function (j) {
										return typeof d._config.parent == "string"
											? j.getAttribute("data-parent") === d._config.parent
											: j.classList.contains(dn);
									})).length === 0 &&
								(n = null),
							!(
								n &&
								(s = f(n).not(this._selector).data(St)) &&
								s._isTransitioning
							))
						) {
							var m = f.Event(Ue.SHOW);
							if ((f(this._element).trigger(m), !m.isDefaultPrevented())) {
								n &&
									(l._jQueryInterface.call(f(n).not(this._selector), "hide"),
									s || f(n).data(St, null));
								var v = this._getDimension();
								f(this._element).removeClass(dn).addClass(Dt),
									(this._element.style[v] = 0),
									this._triggerArray.length &&
										f(this._triggerArray)
											.removeClass(An)
											.attr("aria-expanded", !0),
									this.setTransitioning(!0);
								var C = "scroll" + (v[0].toUpperCase() + v.slice(1)),
									x = P.getTransitionDurationFromElement(this._element);
								f(this._element)
									.one(P.TRANSITION_END, function () {
										f(d._element).removeClass(Dt).addClass(dn).addClass(qe),
											(d._element.style[v] = ""),
											d.setTransitioning(!1),
											f(d._element).trigger(Ue.SHOWN);
									})
									.emulateTransitionEnd(x),
									(this._element.style[v] = this._element[C] + "px");
							}
						}
					}),
					(c.hide = function () {
						var n = this;
						if (!this._isTransitioning && f(this._element).hasClass(qe)) {
							var s = f.Event(Ue.HIDE);
							if ((f(this._element).trigger(s), !s.isDefaultPrevented())) {
								var d = this._getDimension();
								(this._element.style[d] =
									this._element.getBoundingClientRect()[d] + "px"),
									P.reflow(this._element),
									f(this._element).addClass(Dt).removeClass(dn).removeClass(qe);
								var m = this._triggerArray.length;
								if (0 < m)
									for (var v = 0; v < m; v++) {
										var C = this._triggerArray[v],
											x = P.getSelectorFromElement(C);
										x !== null &&
											(f([].slice.call(document.querySelectorAll(x))).hasClass(
												qe,
											) ||
												f(C).addClass(An).attr("aria-expanded", !1));
									}
								this.setTransitioning(!0), (this._element.style[d] = "");
								var j = P.getTransitionDurationFromElement(this._element);
								f(this._element)
									.one(P.TRANSITION_END, function () {
										n.setTransitioning(!1),
											f(n._element)
												.removeClass(Dt)
												.addClass(dn)
												.trigger(Ue.HIDDEN);
									})
									.emulateTransitionEnd(j);
							}
						}
					}),
					(c.setTransitioning = function (n) {
						this._isTransitioning = n;
					}),
					(c.dispose = function () {
						f.removeData(this._element, St),
							(this._config = null),
							(this._parent = null),
							(this._element = null),
							(this._triggerArray = null),
							(this._isTransitioning = null);
					}),
					(c._getConfig = function (n) {
						return (
							((n = ce({}, xt, n)).toggle = !!n.toggle),
							P.typeCheckConfig(Vt, n, ft),
							n
						);
					}),
					(c._getDimension = function () {
						return f(this._element).hasClass(zn) ? zn : Zi;
					}),
					(c._getParent = function () {
						var n,
							s = this;
						P.isElement(this._config.parent)
							? ((n = this._config.parent),
								typeof this._config.parent.jquery < "u" &&
									(n = this._config.parent[0]))
							: (n = document.querySelector(this._config.parent));
						var d =
								'[data-toggle="collapse"][data-parent="' +
								this._config.parent +
								'"]',
							m = [].slice.call(n.querySelectorAll(d));
						return (
							f(m).each(function (v, C) {
								s._addAriaAndCollapsedClass(l._getTargetFromElement(C), [C]);
							}),
							n
						);
					}),
					(c._addAriaAndCollapsedClass = function (n, s) {
						var d = f(n).hasClass(qe);
						s.length && f(s).toggleClass(An, !d).attr("aria-expanded", d);
					}),
					(l._getTargetFromElement = function (n) {
						var s = P.getSelectorFromElement(n);
						return s ? document.querySelector(s) : null;
					}),
					(l._jQueryInterface = function (n) {
						return this.each(function () {
							var s = f(this),
								d = s.data(St),
								m = ce({}, xt, s.data(), typeof n == "object" && n ? n : {});
							if (
								(!d && m.toggle && /show|hide/.test(n) && (m.toggle = !1),
								d || ((d = new l(this, m)), s.data(St, d)),
								typeof n == "string")
							) {
								if (typeof d[n] > "u")
									throw new TypeError('No method named "' + n + '"');
								d[n]();
							}
						});
					}),
					oe(l, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.3.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return xt;
							},
						},
					]),
					l
				);
			})();
		f(document).on(Ue.CLICK_DATA_API, zt, function (l) {
			l.currentTarget.tagName === "A" && l.preventDefault();
			var c = f(this),
				n = P.getSelectorFromElement(this),
				s = [].slice.call(document.querySelectorAll(n));
			f(s).each(function () {
				var d = f(this),
					m = d.data(St) ? "toggle" : c.data();
				Yt._jQueryInterface.call(d, m);
			});
		}),
			(f.fn[Vt] = Yt._jQueryInterface),
			(f.fn[Vt].Constructor = Yt),
			(f.fn[Vt].noConflict = function () {
				return (f.fn[Vt] = Ti), Yt._jQueryInterface;
			});
		for (
			var Xt = typeof window < "u" && typeof document < "u",
				Le = ["Edge", "Trident", "Firefox"],
				Ce = 0,
				pn = 0;
			pn < Le.length;
			pn += 1
		)
			if (Xt && 0 <= navigator.userAgent.indexOf(Le[pn])) {
				Ce = 1;
				break;
			}
		var er =
			Xt && window.Promise
				? function (l) {
						var c = !1;
						return function () {
							c ||
								((c = !0),
								window.Promise.resolve().then(function () {
									(c = !1), l();
								}));
						};
					}
				: function (l) {
						var c = !1;
						return function () {
							c ||
								((c = !0),
								setTimeout(function () {
									(c = !1), l();
								}, Ce));
						};
					};
		function Yn(l) {
			return l && {}.toString.call(l) === "[object Function]";
		}
		function mt(l, c) {
			if (l.nodeType !== 1) return [];
			var n = l.ownerDocument.defaultView.getComputedStyle(l, null);
			return c ? n[c] : n;
		}
		function vt(l) {
			return l.nodeName === "HTML" ? l : l.parentNode || l.host;
		}
		function Ze(l) {
			if (!l) return document.body;
			switch (l.nodeName) {
				case "HTML":
				case "BODY":
					return l.ownerDocument.body;
				case "#document":
					return l.body;
			}
			var c = mt(l),
				n = c.overflow,
				s = c.overflowX,
				d = c.overflowY;
			return /(auto|scroll|overlay)/.test(n + d + s) ? l : Ze(vt(l));
		}
		var Nn = Xt && !(!window.MSInputMethodContext || !document.documentMode),
			gn = Xt && /MSIE 10/.test(navigator.userAgent);
		function Gt(l) {
			return l === 11 ? Nn : l === 10 ? gn : Nn || gn;
		}
		function Jt(l) {
			if (!l) return document.documentElement;
			for (
				var c = Gt(10) ? document.body : null, n = l.offsetParent || null;
				n === c && l.nextElementSibling;

			)
				n = (l = l.nextElementSibling).offsetParent;
			var s = n && n.nodeName;
			return s && s !== "BODY" && s !== "HTML"
				? ["TH", "TD", "TABLE"].indexOf(n.nodeName) !== -1 &&
					mt(n, "position") === "static"
					? Jt(n)
					: n
				: l
					? l.ownerDocument.documentElement
					: document.documentElement;
		}
		function Xn(l) {
			return l.parentNode !== null ? Xn(l.parentNode) : l;
		}
		function mn(l, c) {
			if (!(l && l.nodeType && c && c.nodeType))
				return document.documentElement;
			var n = l.compareDocumentPosition(c) & Node.DOCUMENT_POSITION_FOLLOWING,
				s = n ? l : c,
				d = n ? c : l,
				m = document.createRange();
			m.setStart(s, 0), m.setEnd(d, 0);
			var v,
				C,
				x = m.commonAncestorContainer;
			if ((l !== x && c !== x) || s.contains(d))
				return (C = (v = x).nodeName) === "BODY" ||
					(C !== "HTML" && Jt(v.firstElementChild) !== v)
					? Jt(x)
					: x;
			var j = Xn(l);
			return j.host ? mn(j.host, c) : mn(l, Xn(c).host);
		}
		function Zt(l) {
			var c =
					(1 < arguments.length && arguments[1] !== void 0
						? arguments[1]
						: "top") === "top"
						? "scrollTop"
						: "scrollLeft",
				n = l.nodeName;
			if (n !== "BODY" && n !== "HTML") return l[c];
			var s = l.ownerDocument.documentElement;
			return (l.ownerDocument.scrollingElement || s)[c];
		}
		function Ci(l, c) {
			var n = c === "x" ? "Left" : "Top",
				s = n === "Left" ? "Right" : "Bottom";
			return (
				parseFloat(l["border" + n + "Width"], 10) +
				parseFloat(l["border" + s + "Width"], 10)
			);
		}
		function Gn(l, c, n, s) {
			return Math.max(
				c["offset" + l],
				c["scroll" + l],
				n["client" + l],
				n["offset" + l],
				n["scroll" + l],
				Gt(10)
					? parseInt(n["offset" + l]) +
							parseInt(s["margin" + (l === "Height" ? "Top" : "Left")]) +
							parseInt(s["margin" + (l === "Height" ? "Bottom" : "Right")])
					: 0,
			);
		}
		function Si(l) {
			var c = l.body,
				n = l.documentElement,
				s = Gt(10) && getComputedStyle(n);
			return { height: Gn("Height", c, n, s), width: Gn("Width", c, n, s) };
		}
		var en = (function () {
				function l(c, n) {
					for (var s = 0; s < n.length; s++) {
						var d = n[s];
						(d.enumerable = d.enumerable || !1),
							(d.configurable = !0),
							"value" in d && (d.writable = !0),
							Object.defineProperty(c, d.key, d);
					}
				}
				return function (c, n, s) {
					return n && l(c.prototype, n), s && l(c, s), c;
				};
			})(),
			At = function (l, c, n) {
				return (
					c in l
						? Object.defineProperty(l, c, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (l[c] = n),
					l
				);
			},
			Ae =
				Object.assign ||
				function (l) {
					for (var c = 1; c < arguments.length; c++) {
						var n = arguments[c];
						for (var s in n)
							Object.prototype.hasOwnProperty.call(n, s) && (l[s] = n[s]);
					}
					return l;
				};
		function et(l) {
			return Ae({}, l, { right: l.left + l.width, bottom: l.top + l.height });
		}
		function tn(l) {
			var c = {};
			try {
				if (Gt(10)) {
					c = l.getBoundingClientRect();
					var n = Zt(l, "top"),
						s = Zt(l, "left");
					(c.top += n), (c.left += s), (c.bottom += n), (c.right += s);
				} else c = l.getBoundingClientRect();
			} catch {}
			var d = {
					left: c.left,
					top: c.top,
					width: c.right - c.left,
					height: c.bottom - c.top,
				},
				m = l.nodeName === "HTML" ? Si(l.ownerDocument) : {},
				v = m.width || l.clientWidth || d.right - d.left,
				C = m.height || l.clientHeight || d.bottom - d.top,
				x = l.offsetWidth - v,
				j = l.offsetHeight - C;
			if (x || j) {
				var O = mt(l);
				(x -= Ci(O, "x")), (j -= Ci(O, "y")), (d.width -= x), (d.height -= j);
			}
			return et(d);
		}
		function In(l, c) {
			var n = 2 < arguments.length && arguments[2] !== void 0 && arguments[2],
				s = Gt(10),
				d = c.nodeName === "HTML",
				m = tn(l),
				v = tn(c),
				C = Ze(l),
				x = mt(c),
				j = parseFloat(x.borderTopWidth, 10),
				O = parseFloat(x.borderLeftWidth, 10);
			n && d && ((v.top = Math.max(v.top, 0)), (v.left = Math.max(v.left, 0)));
			var q = et({
				top: m.top - v.top - j,
				left: m.left - v.left - O,
				width: m.width,
				height: m.height,
			});
			if (((q.marginTop = 0), (q.marginLeft = 0), !s && d)) {
				var H = parseFloat(x.marginTop, 10),
					W = parseFloat(x.marginLeft, 10);
				(q.top -= j - H),
					(q.bottom -= j - H),
					(q.left -= O - W),
					(q.right -= O - W),
					(q.marginTop = H),
					(q.marginLeft = W);
			}
			return (
				(s && !n ? c.contains(C) : c === C && C.nodeName !== "BODY") &&
					(q = (function (K, ne) {
						var he =
								2 < arguments.length && arguments[2] !== void 0 && arguments[2],
							_e = Zt(ne, "top"),
							be = Zt(ne, "left"),
							fe = he ? -1 : 1;
						return (
							(K.top += _e * fe),
							(K.bottom += _e * fe),
							(K.left += be * fe),
							(K.right += be * fe),
							K
						);
					})(q, c)),
				q
			);
		}
		function xi(l) {
			if (!l || !l.parentElement || Gt()) return document.documentElement;
			for (var c = l.parentElement; c && mt(c, "transform") === "none"; )
				c = c.parentElement;
			return c || document.documentElement;
		}
		function Nt(l, c, n, s) {
			var d = 4 < arguments.length && arguments[4] !== void 0 && arguments[4],
				m = { top: 0, left: 0 },
				v = d ? xi(l) : mn(l, c);
			if (s === "viewport")
				m = (function (W) {
					var K =
							1 < arguments.length && arguments[1] !== void 0 && arguments[1],
						ne = W.ownerDocument.documentElement,
						he = In(W, ne),
						_e = Math.max(ne.clientWidth, window.innerWidth || 0),
						be = Math.max(ne.clientHeight, window.innerHeight || 0),
						fe = K ? 0 : Zt(ne),
						Pe = K ? 0 : Zt(ne, "left");
					return et({
						top: fe - he.top + he.marginTop,
						left: Pe - he.left + he.marginLeft,
						width: _e,
						height: be,
					});
				})(v, d);
			else {
				var C = void 0;
				s === "scrollParent"
					? (C = Ze(vt(c))).nodeName === "BODY" &&
						(C = l.ownerDocument.documentElement)
					: (C = s === "window" ? l.ownerDocument.documentElement : s);
				var x = In(C, v, d);
				if (
					C.nodeName !== "HTML" ||
					(function W(K) {
						var ne = K.nodeName;
						if (ne === "BODY" || ne === "HTML") return !1;
						if (mt(K, "position") === "fixed") return !0;
						var he = vt(K);
						return !!he && W(he);
					})(v)
				)
					m = x;
				else {
					var j = Si(l.ownerDocument),
						O = j.height,
						q = j.width;
					(m.top += x.top - x.marginTop),
						(m.bottom = O + x.top),
						(m.left += x.left - x.marginLeft),
						(m.right = q + x.left);
				}
			}
			var H = typeof (n = n || 0) == "number";
			return (
				(m.left += H ? n : n.left || 0),
				(m.top += H ? n : n.top || 0),
				(m.right -= H ? n : n.right || 0),
				(m.bottom -= H ? n : n.bottom || 0),
				m
			);
		}
		function Jn(l, c, n, s, d) {
			var m =
				5 < arguments.length && arguments[5] !== void 0 ? arguments[5] : 0;
			if (l.indexOf("auto") === -1) return l;
			var v = Nt(n, s, m, d),
				C = {
					top: { width: v.width, height: c.top - v.top },
					right: { width: v.right - c.right, height: v.height },
					bottom: { width: v.width, height: v.bottom - c.bottom },
					left: { width: c.left - v.left, height: v.height },
				},
				x = Object.keys(C)
					.map(function (H) {
						return Ae({ key: H }, C[H], {
							area: ((W = C[H]), W.width * W.height),
						});
						var W;
					})
					.sort(function (H, W) {
						return W.area - H.area;
					}),
				j = x.filter(function (H) {
					var W = H.width,
						K = H.height;
					return W >= n.clientWidth && K >= n.clientHeight;
				}),
				O = 0 < j.length ? j[0].key : x[0].key,
				q = l.split("-")[1];
			return O + (q ? "-" + q : "");
		}
		function Zn(l, c, n) {
			var s =
				3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
			return In(n, s ? xi(c) : mn(c, n), s);
		}
		function ei(l) {
			var c = l.ownerDocument.defaultView.getComputedStyle(l),
				n = parseFloat(c.marginTop || 0) + parseFloat(c.marginBottom || 0),
				s = parseFloat(c.marginLeft || 0) + parseFloat(c.marginRight || 0);
			return { width: l.offsetWidth + s, height: l.offsetHeight + n };
		}
		function vn(l) {
			var c = { left: "right", right: "left", bottom: "top", top: "bottom" };
			return l.replace(/left|right|bottom|top/g, function (n) {
				return c[n];
			});
		}
		function Di(l, c, n) {
			n = n.split("-")[0];
			var s = ei(l),
				d = { width: s.width, height: s.height },
				m = ["right", "left"].indexOf(n) !== -1,
				v = m ? "top" : "left",
				C = m ? "left" : "top",
				x = m ? "height" : "width",
				j = m ? "width" : "height";
			return (
				(d[v] = c[v] + c[x] / 2 - s[x] / 2),
				(d[C] = n === C ? c[C] - s[j] : c[vn(C)]),
				d
			);
		}
		function It(l, c) {
			return Array.prototype.find ? l.find(c) : l.filter(c)[0];
		}
		function Ai(l, c, n) {
			return (
				(n === void 0
					? l
					: l.slice(
							0,
							(function (s, d, m) {
								if (Array.prototype.findIndex)
									return s.findIndex(function (C) {
										return C[d] === m;
									});
								var v = It(s, function (C) {
									return C[d] === m;
								});
								return s.indexOf(v);
							})(l, "name", n),
						)
				).forEach(function (s) {
					s.function &&
						console.warn(
							"`modifier.function` is deprecated, use `modifier.fn`!",
						);
					var d = s.function || s.fn;
					s.enabled &&
						Yn(d) &&
						((c.offsets.popper = et(c.offsets.popper)),
						(c.offsets.reference = et(c.offsets.reference)),
						(c = d(c, s)));
				}),
				c
			);
		}
		function Ni(l, c) {
			return l.some(function (n) {
				var s = n.name;
				return n.enabled && s === c;
			});
		}
		function On(l) {
			for (
				var c = [!1, "ms", "Webkit", "Moz", "O"],
					n = l.charAt(0).toUpperCase() + l.slice(1),
					s = 0;
				s < c.length;
				s++
			) {
				var d = c[s],
					m = d ? "" + d + n : l;
				if (typeof document.body.style[m] < "u") return m;
			}
			return null;
		}
		function ti(l) {
			var c = l.ownerDocument;
			return c ? c.defaultView : window;
		}
		function ni(l, c, n, s) {
			(n.updateBound = s),
				ti(l).addEventListener("resize", n.updateBound, { passive: !0 });
			var d = Ze(l);
			return (
				(function m(v, C, x, j) {
					var O = v.nodeName === "BODY",
						q = O ? v.ownerDocument.defaultView : v;
					q.addEventListener(C, x, { passive: !0 }),
						O || m(Ze(q.parentNode), C, x, j),
						j.push(q);
				})(d, "scroll", n.updateBound, n.scrollParents),
				(n.scrollElement = d),
				(n.eventsEnabled = !0),
				n
			);
		}
		function Ii() {
			var l, c;
			this.state.eventsEnabled &&
				(cancelAnimationFrame(this.scheduleUpdate),
				(this.state =
					((l = this.reference),
					(c = this.state),
					ti(l).removeEventListener("resize", c.updateBound),
					c.scrollParents.forEach(function (n) {
						n.removeEventListener("scroll", c.updateBound);
					}),
					(c.updateBound = null),
					(c.scrollParents = []),
					(c.scrollElement = null),
					(c.eventsEnabled = !1),
					c)));
		}
		function ve(l) {
			return l !== "" && !isNaN(parseFloat(l)) && isFinite(l);
		}
		function yt(l, c) {
			Object.keys(c).forEach(function (n) {
				var s = "";
				["width", "height", "top", "right", "bottom", "left"].indexOf(n) !==
					-1 &&
					ve(c[n]) &&
					(s = "px"),
					(l.style[n] = c[n] + s);
			});
		}
		var kn = Xt && /Firefox/i.test(navigator.userAgent);
		function Oi(l, c, n) {
			var s = It(l, function (C) {
					return C.name === c;
				}),
				d =
					!!s &&
					l.some(function (C) {
						return C.name === n && C.enabled && C.order < s.order;
					});
			if (!d) {
				var m = "`" + c + "`",
					v = "`" + n + "`";
				console.warn(
					v +
						" modifier is required by " +
						m +
						" modifier in order to work, be sure to include it before " +
						m +
						"!",
				);
			}
			return d;
		}
		var ki = [
				"auto-start",
				"auto",
				"auto-end",
				"top-start",
				"top",
				"top-end",
				"right-start",
				"right",
				"right-end",
				"bottom-end",
				"bottom",
				"bottom-start",
				"left-end",
				"left",
				"left-start",
			],
			yn = ki.slice(3);
		function ii(l) {
			var c = 1 < arguments.length && arguments[1] !== void 0 && arguments[1],
				n = yn.indexOf(l),
				s = yn.slice(n + 1).concat(yn.slice(0, n));
			return c ? s.reverse() : s;
		}
		var jn = "flip",
			ji = "clockwise",
			tr = "counterclockwise";
		function nr(l, c, n, s) {
			var d = [0, 0],
				m = ["right", "left"].indexOf(s) !== -1,
				v = l.split(/(\+|\-)/).map(function (O) {
					return O.trim();
				}),
				C = v.indexOf(
					It(v, function (O) {
						return O.search(/,|\s/) !== -1;
					}),
				);
			v[C] &&
				v[C].indexOf(",") === -1 &&
				console.warn(
					"Offsets separated by white space(s) are deprecated, use a comma (,) instead.",
				);
			var x = /\s*,\s*|\s+/,
				j =
					C !== -1
						? [
								v.slice(0, C).concat([v[C].split(x)[0]]),
								[v[C].split(x)[1]].concat(v.slice(C + 1)),
							]
						: [v];
			return (
				(j = j.map(function (O, q) {
					var H = (q === 1 ? !m : m) ? "height" : "width",
						W = !1;
					return O.reduce(function (K, ne) {
						return K[K.length - 1] === "" && ["+", "-"].indexOf(ne) !== -1
							? ((K[K.length - 1] = ne), (W = !0), K)
							: W
								? ((K[K.length - 1] += ne), (W = !1), K)
								: K.concat(ne);
					}, []).map(function (K) {
						return (function (ne, he, _e, be) {
							var fe = ne.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
								Pe = +fe[1],
								ze = fe[2];
							if (!Pe) return ne;
							if (ze.indexOf("%") !== 0)
								return ze !== "vh" && ze !== "vw"
									? Pe
									: ((ze === "vh"
											? Math.max(
													document.documentElement.clientHeight,
													window.innerHeight || 0,
												)
											: Math.max(
													document.documentElement.clientWidth,
													window.innerWidth || 0,
												)) /
											100) *
											Pe;
							var an = void 0;
							switch (ze) {
								case "%p":
									an = _e;
									break;
								case "%":
								case "%r":
								default:
									an = be;
							}
							return (et(an)[he] / 100) * Pe;
						})(K, H, c, n);
					});
				})).forEach(function (O, q) {
					O.forEach(function (H, W) {
						ve(H) && (d[q] += H * (O[W - 1] === "-" ? -1 : 1));
					});
				}),
				d
			);
		}
		var Qe = {
				placement: "bottom",
				positionFixed: !1,
				eventsEnabled: !0,
				removeOnDestroy: !1,
				onCreate: function () {},
				onUpdate: function () {},
				modifiers: {
					shift: {
						order: 100,
						enabled: !0,
						fn: function (l) {
							var c = l.placement,
								n = c.split("-")[0],
								s = c.split("-")[1];
							if (s) {
								var d = l.offsets,
									m = d.reference,
									v = d.popper,
									C = ["bottom", "top"].indexOf(n) !== -1,
									x = C ? "left" : "top",
									j = C ? "width" : "height",
									O = {
										start: At({}, x, m[x]),
										end: At({}, x, m[x] + m[j] - v[j]),
									};
								l.offsets.popper = Ae({}, v, O[s]);
							}
							return l;
						},
					},
					offset: {
						order: 200,
						enabled: !0,
						fn: function (l, c) {
							var n = c.offset,
								s = l.placement,
								d = l.offsets,
								m = d.popper,
								v = d.reference,
								C = s.split("-")[0],
								x = void 0;
							return (
								(x = ve(+n) ? [+n, 0] : nr(n, m, v, C)),
								C === "left"
									? ((m.top += x[0]), (m.left -= x[1]))
									: C === "right"
										? ((m.top += x[0]), (m.left += x[1]))
										: C === "top"
											? ((m.left += x[0]), (m.top -= x[1]))
											: C === "bottom" && ((m.left += x[0]), (m.top += x[1])),
								(l.popper = m),
								l
							);
						},
						offset: 0,
					},
					preventOverflow: {
						order: 300,
						enabled: !0,
						fn: function (l, c) {
							var n = c.boundariesElement || Jt(l.instance.popper);
							l.instance.reference === n && (n = Jt(n));
							var s = On("transform"),
								d = l.instance.popper.style,
								m = d.top,
								v = d.left,
								C = d[s];
							(d.top = ""), (d.left = ""), (d[s] = "");
							var x = Nt(
								l.instance.popper,
								l.instance.reference,
								c.padding,
								n,
								l.positionFixed,
							);
							(d.top = m), (d.left = v), (d[s] = C), (c.boundaries = x);
							var j = c.priority,
								O = l.offsets.popper,
								q = {
									primary: function (H) {
										var W = O[H];
										return (
											O[H] < x[H] &&
												!c.escapeWithReference &&
												(W = Math.max(O[H], x[H])),
											At({}, H, W)
										);
									},
									secondary: function (H) {
										var W = H === "right" ? "left" : "top",
											K = O[W];
										return (
											O[H] > x[H] &&
												!c.escapeWithReference &&
												(K = Math.min(
													O[W],
													x[H] - (H === "right" ? O.width : O.height),
												)),
											At({}, W, K)
										);
									},
								};
							return (
								j.forEach(function (H) {
									var W =
										["left", "top"].indexOf(H) !== -1 ? "primary" : "secondary";
									O = Ae({}, O, q[W](H));
								}),
								(l.offsets.popper = O),
								l
							);
						},
						priority: ["left", "right", "top", "bottom"],
						padding: 5,
						boundariesElement: "scrollParent",
					},
					keepTogether: {
						order: 400,
						enabled: !0,
						fn: function (l) {
							var c = l.offsets,
								n = c.popper,
								s = c.reference,
								d = l.placement.split("-")[0],
								m = Math.floor,
								v = ["top", "bottom"].indexOf(d) !== -1,
								C = v ? "right" : "bottom",
								x = v ? "left" : "top",
								j = v ? "width" : "height";
							return (
								n[C] < m(s[x]) && (l.offsets.popper[x] = m(s[x]) - n[j]),
								n[x] > m(s[C]) && (l.offsets.popper[x] = m(s[C])),
								l
							);
						},
					},
					arrow: {
						order: 500,
						enabled: !0,
						fn: function (l, c) {
							var n;
							if (!Oi(l.instance.modifiers, "arrow", "keepTogether")) return l;
							var s = c.element;
							if (typeof s == "string") {
								if (!(s = l.instance.popper.querySelector(s))) return l;
							} else if (!l.instance.popper.contains(s))
								return (
									console.warn(
										"WARNING: `arrow.element` must be child of its popper element!",
									),
									l
								);
							var d = l.placement.split("-")[0],
								m = l.offsets,
								v = m.popper,
								C = m.reference,
								x = ["left", "right"].indexOf(d) !== -1,
								j = x ? "height" : "width",
								O = x ? "Top" : "Left",
								q = O.toLowerCase(),
								H = x ? "left" : "top",
								W = x ? "bottom" : "right",
								K = ei(s)[j];
							C[W] - K < v[q] && (l.offsets.popper[q] -= v[q] - (C[W] - K)),
								C[q] + K > v[W] && (l.offsets.popper[q] += C[q] + K - v[W]),
								(l.offsets.popper = et(l.offsets.popper));
							var ne = C[q] + C[j] / 2 - K / 2,
								he = mt(l.instance.popper),
								_e = parseFloat(he["margin" + O], 10),
								be = parseFloat(he["border" + O + "Width"], 10),
								fe = ne - l.offsets.popper[q] - _e - be;
							return (
								(fe = Math.max(Math.min(v[j] - K, fe), 0)),
								(l.arrowElement = s),
								(l.offsets.arrow =
									(At((n = {}), q, Math.round(fe)), At(n, H, ""), n)),
								l
							);
						},
						element: "[x-arrow]",
					},
					flip: {
						order: 600,
						enabled: !0,
						fn: function (l, c) {
							if (
								Ni(l.instance.modifiers, "inner") ||
								(l.flipped && l.placement === l.originalPlacement)
							)
								return l;
							var n = Nt(
									l.instance.popper,
									l.instance.reference,
									c.padding,
									c.boundariesElement,
									l.positionFixed,
								),
								s = l.placement.split("-")[0],
								d = vn(s),
								m = l.placement.split("-")[1] || "",
								v = [];
							switch (c.behavior) {
								case jn:
									v = [s, d];
									break;
								case ji:
									v = ii(s);
									break;
								case tr:
									v = ii(s, !0);
									break;
								default:
									v = c.behavior;
							}
							return (
								v.forEach(function (C, x) {
									if (s !== C || v.length === x + 1) return l;
									(s = l.placement.split("-")[0]), (d = vn(s));
									var j,
										O = l.offsets.popper,
										q = l.offsets.reference,
										H = Math.floor,
										W =
											(s === "left" && H(O.right) > H(q.left)) ||
											(s === "right" && H(O.left) < H(q.right)) ||
											(s === "top" && H(O.bottom) > H(q.top)) ||
											(s === "bottom" && H(O.top) < H(q.bottom)),
										K = H(O.left) < H(n.left),
										ne = H(O.right) > H(n.right),
										he = H(O.top) < H(n.top),
										_e = H(O.bottom) > H(n.bottom),
										be =
											(s === "left" && K) ||
											(s === "right" && ne) ||
											(s === "top" && he) ||
											(s === "bottom" && _e),
										fe = ["top", "bottom"].indexOf(s) !== -1,
										Pe =
											!!c.flipVariations &&
											((fe && m === "start" && K) ||
												(fe && m === "end" && ne) ||
												(!fe && m === "start" && he) ||
												(!fe && m === "end" && _e));
									(W || be || Pe) &&
										((l.flipped = !0),
										(W || be) && (s = v[x + 1]),
										Pe &&
											(m =
												(j = m) === "end"
													? "start"
													: j === "start"
														? "end"
														: j),
										(l.placement = s + (m ? "-" + m : "")),
										(l.offsets.popper = Ae(
											{},
											l.offsets.popper,
											Di(l.instance.popper, l.offsets.reference, l.placement),
										)),
										(l = Ai(l.instance.modifiers, l, "flip")));
								}),
								l
							);
						},
						behavior: "flip",
						padding: 5,
						boundariesElement: "viewport",
					},
					inner: {
						order: 700,
						enabled: !1,
						fn: function (l) {
							var c = l.placement,
								n = c.split("-")[0],
								s = l.offsets,
								d = s.popper,
								m = s.reference,
								v = ["left", "right"].indexOf(n) !== -1,
								C = ["top", "left"].indexOf(n) === -1;
							return (
								(d[v ? "left" : "top"] =
									m[n] - (C ? d[v ? "width" : "height"] : 0)),
								(l.placement = vn(c)),
								(l.offsets.popper = et(d)),
								l
							);
						},
					},
					hide: {
						order: 800,
						enabled: !0,
						fn: function (l) {
							if (!Oi(l.instance.modifiers, "hide", "preventOverflow"))
								return l;
							var c = l.offsets.reference,
								n = It(l.instance.modifiers, function (s) {
									return s.name === "preventOverflow";
								}).boundaries;
							if (
								c.bottom < n.top ||
								c.left > n.right ||
								c.top > n.bottom ||
								c.right < n.left
							) {
								if (l.hide === !0) return l;
								(l.hide = !0), (l.attributes["x-out-of-boundaries"] = "");
							} else {
								if (l.hide === !1) return l;
								(l.hide = !1), (l.attributes["x-out-of-boundaries"] = !1);
							}
							return l;
						},
					},
					computeStyle: {
						order: 850,
						enabled: !0,
						fn: function (l, c) {
							var n = c.x,
								s = c.y,
								d = l.offsets.popper,
								m = It(l.instance.modifiers, function (Er) {
									return Er.name === "applyStyle";
								}).gpuAcceleration;
							m !== void 0 &&
								console.warn(
									"WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!",
								);
							var v,
								C,
								x,
								j,
								O,
								q,
								H,
								W,
								K,
								ne,
								he,
								_e,
								be,
								fe,
								Pe = m !== void 0 ? m : c.gpuAcceleration,
								ze = Jt(l.instance.popper),
								an = tn(ze),
								un = { position: d.position },
								Un =
									((v = l),
									(C = window.devicePixelRatio < 2 || !kn),
									(x = v.offsets),
									(j = x.popper),
									(O = x.reference),
									(q = Math.round),
									(H = Math.floor),
									(W = function (Er) {
										return Er;
									}),
									(K = q(O.width)),
									(ne = q(j.width)),
									(he = ["left", "right"].indexOf(v.placement) !== -1),
									(_e = v.placement.indexOf("-") !== -1),
									(fe = C ? q : W),
									{
										left: (be = C ? (he || _e || K % 2 == ne % 2 ? q : H) : W)(
											K % 2 == 1 && ne % 2 == 1 && !_e && C
												? j.left - 1
												: j.left,
										),
										top: fe(j.top),
										bottom: fe(j.bottom),
										right: be(j.right),
									}),
								gi = n === "bottom" ? "top" : "bottom",
								mi = s === "right" ? "left" : "right",
								Dr = On("transform"),
								_r = void 0,
								br = void 0;
							if (
								((br =
									gi === "bottom"
										? ze.nodeName === "HTML"
											? -ze.clientHeight + Un.bottom
											: -an.height + Un.bottom
										: Un.top),
								(_r =
									mi === "right"
										? ze.nodeName === "HTML"
											? -ze.clientWidth + Un.right
											: -an.width + Un.right
										: Un.left),
								Pe && Dr)
							)
								(un[Dr] = "translate3d(" + _r + "px, " + br + "px, 0)"),
									(un[gi] = 0),
									(un[mi] = 0),
									(un.willChange = "transform");
							else {
								var Mr = gi === "bottom" ? -1 : 1,
									qr = mi === "right" ? -1 : 1;
								(un[gi] = br * Mr),
									(un[mi] = _r * qr),
									(un.willChange = gi + ", " + mi);
							}
							var Rr = { "x-placement": l.placement };
							return (
								(l.attributes = Ae({}, Rr, l.attributes)),
								(l.styles = Ae({}, un, l.styles)),
								(l.arrowStyles = Ae({}, l.offsets.arrow, l.arrowStyles)),
								l
							);
						},
						gpuAcceleration: !0,
						x: "bottom",
						y: "right",
					},
					applyStyle: {
						order: 900,
						enabled: !0,
						fn: function (l) {
							var c, n;
							return (
								yt(l.instance.popper, l.styles),
								(c = l.instance.popper),
								(n = l.attributes),
								Object.keys(n).forEach(function (s) {
									n[s] !== !1 ? c.setAttribute(s, n[s]) : c.removeAttribute(s);
								}),
								l.arrowElement &&
									Object.keys(l.arrowStyles).length &&
									yt(l.arrowElement, l.arrowStyles),
								l
							);
						},
						onLoad: function (l, c, n, s, d) {
							var m = Zn(d, c, l, n.positionFixed),
								v = Jn(
									n.placement,
									m,
									c,
									l,
									n.modifiers.flip.boundariesElement,
									n.modifiers.flip.padding,
								);
							return (
								c.setAttribute("x-placement", v),
								yt(c, { position: n.positionFixed ? "fixed" : "absolute" }),
								n
							);
						},
						gpuAcceleration: void 0,
					},
				},
			},
			_t = (function () {
				function l(c, n) {
					var s = this,
						d =
							2 < arguments.length && arguments[2] !== void 0
								? arguments[2]
								: {};
					(function (v, C) {
						if (!(v instanceof C))
							throw new TypeError("Cannot call a class as a function");
					})(this, l),
						(this.scheduleUpdate = function () {
							return requestAnimationFrame(s.update);
						}),
						(this.update = er(this.update.bind(this))),
						(this.options = Ae({}, l.Defaults, d)),
						(this.state = {
							isDestroyed: !1,
							isCreated: !1,
							scrollParents: [],
						}),
						(this.reference = c && c.jquery ? c[0] : c),
						(this.popper = n && n.jquery ? n[0] : n),
						(this.options.modifiers = {}),
						Object.keys(Ae({}, l.Defaults.modifiers, d.modifiers)).forEach(
							function (v) {
								s.options.modifiers[v] = Ae(
									{},
									l.Defaults.modifiers[v] || {},
									d.modifiers ? d.modifiers[v] : {},
								);
							},
						),
						(this.modifiers = Object.keys(this.options.modifiers)
							.map(function (v) {
								return Ae({ name: v }, s.options.modifiers[v]);
							})
							.sort(function (v, C) {
								return v.order - C.order;
							})),
						this.modifiers.forEach(function (v) {
							v.enabled &&
								Yn(v.onLoad) &&
								v.onLoad(s.reference, s.popper, s.options, v, s.state);
						}),
						this.update();
					var m = this.options.eventsEnabled;
					m && this.enableEventListeners(), (this.state.eventsEnabled = m);
				}
				return (
					en(l, [
						{
							key: "update",
							value: function () {
								return function () {
									if (!this.state.isDestroyed) {
										var c = {
											instance: this,
											styles: {},
											arrowStyles: {},
											attributes: {},
											flipped: !1,
											offsets: {},
										};
										(c.offsets.reference = Zn(
											this.state,
											this.popper,
											this.reference,
											this.options.positionFixed,
										)),
											(c.placement = Jn(
												this.options.placement,
												c.offsets.reference,
												this.popper,
												this.reference,
												this.options.modifiers.flip.boundariesElement,
												this.options.modifiers.flip.padding,
											)),
											(c.originalPlacement = c.placement),
											(c.positionFixed = this.options.positionFixed),
											(c.offsets.popper = Di(
												this.popper,
												c.offsets.reference,
												c.placement,
											)),
											(c.offsets.popper.position = this.options.positionFixed
												? "fixed"
												: "absolute"),
											(c = Ai(this.modifiers, c)),
											this.state.isCreated
												? this.options.onUpdate(c)
												: ((this.state.isCreated = !0),
													this.options.onCreate(c));
									}
								}.call(this);
							},
						},
						{
							key: "destroy",
							value: function () {
								return function () {
									return (
										(this.state.isDestroyed = !0),
										Ni(this.modifiers, "applyStyle") &&
											(this.popper.removeAttribute("x-placement"),
											(this.popper.style.position = ""),
											(this.popper.style.top = ""),
											(this.popper.style.left = ""),
											(this.popper.style.right = ""),
											(this.popper.style.bottom = ""),
											(this.popper.style.willChange = ""),
											(this.popper.style[On("transform")] = "")),
										this.disableEventListeners(),
										this.options.removeOnDestroy &&
											this.popper.parentNode.removeChild(this.popper),
										this
									);
								}.call(this);
							},
						},
						{
							key: "enableEventListeners",
							value: function () {
								return function () {
									this.state.eventsEnabled ||
										(this.state = ni(
											this.reference,
											this.options,
											this.state,
											this.scheduleUpdate,
										));
								}.call(this);
							},
						},
						{
							key: "disableEventListeners",
							value: function () {
								return Ii.call(this);
							},
						},
					]),
					l
				);
			})();
		(_t.Utils = (typeof window < "u" ? window : Tr).PopperUtils),
			(_t.placements = ki),
			(_t.Defaults = Qe);
		var tt = "dropdown",
			_n = "bs.dropdown",
			ct = "." + _n,
			ht = ".data-api",
			Ot = f.fn[tt],
			ri = new RegExp("38|40|27"),
			Se = {
				HIDE: "hide" + ct,
				HIDDEN: "hidden" + ct,
				SHOW: "show" + ct,
				SHOWN: "shown" + ct,
				CLICK: "click" + ct,
				CLICK_DATA_API: "click" + ct + ht,
				KEYDOWN_DATA_API: "keydown" + ct + ht,
				KEYUP_DATA_API: "keyup" + ct + ht,
			},
			bt = "disabled",
			Ne = "show",
			oi = "dropup",
			Li = "dropright",
			Pi = "dropleft",
			Hi = "dropdown-menu-right",
			Mi = "position-static",
			Ln = '[data-toggle="dropdown"]',
			ir = ".dropdown form",
			bn = ".dropdown-menu",
			rr = ".navbar-nav",
			or = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
			sr = "top-start",
			ar = "top-end",
			ur = "bottom-start",
			lr = "bottom-end",
			fr = "right-start",
			qi = "left-start",
			si = {
				offset: 0,
				flip: !0,
				boundary: "scrollParent",
				reference: "toggle",
				display: "dynamic",
			},
			Ri = {
				offset: "(number|string|function)",
				flip: "boolean",
				boundary: "(string|element)",
				reference: "(string|element)",
				display: "string",
			},
			nt = (function () {
				function l(n, s) {
					(this._element = n),
						(this._popper = null),
						(this._config = this._getConfig(s)),
						(this._menu = this._getMenuElement()),
						(this._inNavbar = this._detectNavbar()),
						this._addEventListeners();
				}
				var c = l.prototype;
				return (
					(c.toggle = function () {
						if (!this._element.disabled && !f(this._element).hasClass(bt)) {
							var n = l._getParentFromElement(this._element),
								s = f(this._menu).hasClass(Ne);
							if ((l._clearMenus(), !s)) {
								var d = { relatedTarget: this._element },
									m = f.Event(Se.SHOW, d);
								if ((f(n).trigger(m), !m.isDefaultPrevented())) {
									if (!this._inNavbar) {
										if (typeof _t > "u")
											throw new TypeError(
												"Bootstrap's dropdowns require Popper.js (https://popper.js.org/)",
											);
										var v = this._element;
										this._config.reference === "parent"
											? (v = n)
											: P.isElement(this._config.reference) &&
												((v = this._config.reference),
												typeof this._config.reference.jquery < "u" &&
													(v = this._config.reference[0])),
											this._config.boundary !== "scrollParent" &&
												f(n).addClass(Mi),
											(this._popper = new _t(
												v,
												this._menu,
												this._getPopperConfig(),
											));
									}
									"ontouchstart" in document.documentElement &&
										f(n).closest(rr).length === 0 &&
										f(document.body).children().on("mouseover", null, f.noop),
										this._element.focus(),
										this._element.setAttribute("aria-expanded", !0),
										f(this._menu).toggleClass(Ne),
										f(n).toggleClass(Ne).trigger(f.Event(Se.SHOWN, d));
								}
							}
						}
					}),
					(c.show = function () {
						if (
							!(
								this._element.disabled ||
								f(this._element).hasClass(bt) ||
								f(this._menu).hasClass(Ne)
							)
						) {
							var n = { relatedTarget: this._element },
								s = f.Event(Se.SHOW, n),
								d = l._getParentFromElement(this._element);
							f(d).trigger(s),
								s.isDefaultPrevented() ||
									(f(this._menu).toggleClass(Ne),
									f(d).toggleClass(Ne).trigger(f.Event(Se.SHOWN, n)));
						}
					}),
					(c.hide = function () {
						if (
							!this._element.disabled &&
							!f(this._element).hasClass(bt) &&
							f(this._menu).hasClass(Ne)
						) {
							var n = { relatedTarget: this._element },
								s = f.Event(Se.HIDE, n),
								d = l._getParentFromElement(this._element);
							f(d).trigger(s),
								s.isDefaultPrevented() ||
									(f(this._menu).toggleClass(Ne),
									f(d).toggleClass(Ne).trigger(f.Event(Se.HIDDEN, n)));
						}
					}),
					(c.dispose = function () {
						f.removeData(this._element, _n),
							f(this._element).off(ct),
							(this._element = null),
							(this._menu = null) !== this._popper &&
								(this._popper.destroy(), (this._popper = null));
					}),
					(c.update = function () {
						(this._inNavbar = this._detectNavbar()),
							this._popper !== null && this._popper.scheduleUpdate();
					}),
					(c._addEventListeners = function () {
						var n = this;
						f(this._element).on(Se.CLICK, function (s) {
							s.preventDefault(), s.stopPropagation(), n.toggle();
						});
					}),
					(c._getConfig = function (n) {
						return (
							(n = ce(
								{},
								this.constructor.Default,
								f(this._element).data(),
								n,
							)),
							P.typeCheckConfig(tt, n, this.constructor.DefaultType),
							n
						);
					}),
					(c._getMenuElement = function () {
						if (!this._menu) {
							var n = l._getParentFromElement(this._element);
							n && (this._menu = n.querySelector(bn));
						}
						return this._menu;
					}),
					(c._getPlacement = function () {
						var n = f(this._element.parentNode),
							s = ur;
						return (
							n.hasClass(oi)
								? ((s = sr), f(this._menu).hasClass(Hi) && (s = ar))
								: n.hasClass(Li)
									? (s = fr)
									: n.hasClass(Pi)
										? (s = qi)
										: f(this._menu).hasClass(Hi) && (s = lr),
							s
						);
					}),
					(c._detectNavbar = function () {
						return 0 < f(this._element).closest(".navbar").length;
					}),
					(c._getOffset = function () {
						var n = this,
							s = {};
						return (
							typeof this._config.offset == "function"
								? (s.fn = function (d) {
										return (
											(d.offsets = ce(
												{},
												d.offsets,
												n._config.offset(d.offsets, n._element) || {},
											)),
											d
										);
									})
								: (s.offset = this._config.offset),
							s
						);
					}),
					(c._getPopperConfig = function () {
						var n = {
							placement: this._getPlacement(),
							modifiers: {
								offset: this._getOffset(),
								flip: { enabled: this._config.flip },
								preventOverflow: { boundariesElement: this._config.boundary },
							},
						};
						return (
							this._config.display === "static" &&
								(n.modifiers.applyStyle = { enabled: !1 }),
							n
						);
					}),
					(l._jQueryInterface = function (n) {
						return this.each(function () {
							var s = f(this).data(_n);
							if (
								(s ||
									((s = new l(this, typeof n == "object" ? n : null)),
									f(this).data(_n, s)),
								typeof n == "string")
							) {
								if (typeof s[n] > "u")
									throw new TypeError('No method named "' + n + '"');
								s[n]();
							}
						});
					}),
					(l._clearMenus = function (n) {
						if (!n || (n.which !== 3 && (n.type !== "keyup" || n.which === 9)))
							for (
								var s = [].slice.call(document.querySelectorAll(Ln)),
									d = 0,
									m = s.length;
								d < m;
								d++
							) {
								var v = l._getParentFromElement(s[d]),
									C = f(s[d]).data(_n),
									x = { relatedTarget: s[d] };
								if ((n && n.type === "click" && (x.clickEvent = n), C)) {
									var j = C._menu;
									if (
										f(v).hasClass(Ne) &&
										!(
											n &&
											((n.type === "click" &&
												/input|textarea/i.test(n.target.tagName)) ||
												(n.type === "keyup" && n.which === 9)) &&
											f.contains(v, n.target)
										)
									) {
										var O = f.Event(Se.HIDE, x);
										f(v).trigger(O),
											O.isDefaultPrevented() ||
												("ontouchstart" in document.documentElement &&
													f(document.body)
														.children()
														.off("mouseover", null, f.noop),
												s[d].setAttribute("aria-expanded", "false"),
												f(j).removeClass(Ne),
												f(v).removeClass(Ne).trigger(f.Event(Se.HIDDEN, x)));
									}
								}
							}
					}),
					(l._getParentFromElement = function (n) {
						var s,
							d = P.getSelectorFromElement(n);
						return d && (s = document.querySelector(d)), s || n.parentNode;
					}),
					(l._dataApiKeydownHandler = function (n) {
						if (
							(/input|textarea/i.test(n.target.tagName)
								? !(
										n.which === 32 ||
										(n.which !== 27 &&
											((n.which !== 40 && n.which !== 38) ||
												f(n.target).closest(bn).length))
									)
								: ri.test(n.which)) &&
							(n.preventDefault(),
							n.stopPropagation(),
							!this.disabled && !f(this).hasClass(bt))
						) {
							var s = l._getParentFromElement(this),
								d = f(s).hasClass(Ne);
							if (d && (!d || (n.which !== 27 && n.which !== 32))) {
								var m = [].slice.call(s.querySelectorAll(or));
								if (m.length !== 0) {
									var v = m.indexOf(n.target);
									n.which === 38 && 0 < v && v--,
										n.which === 40 && v < m.length - 1 && v++,
										v < 0 && (v = 0),
										m[v].focus();
								}
							} else {
								if (n.which === 27) {
									var C = s.querySelector(Ln);
									f(C).trigger("focus");
								}
								f(this).trigger("click");
							}
						}
					}),
					oe(l, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.3.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return si;
							},
						},
						{
							key: "DefaultType",
							get: function () {
								return Ri;
							},
						},
					]),
					l
				);
			})();
		f(document)
			.on(Se.KEYDOWN_DATA_API, Ln, nt._dataApiKeydownHandler)
			.on(Se.KEYDOWN_DATA_API, bn, nt._dataApiKeydownHandler)
			.on(Se.CLICK_DATA_API + " " + Se.KEYUP_DATA_API, nt._clearMenus)
			.on(Se.CLICK_DATA_API, Ln, function (l) {
				l.preventDefault(),
					l.stopPropagation(),
					nt._jQueryInterface.call(f(this), "toggle");
			})
			.on(Se.CLICK_DATA_API, ir, function (l) {
				l.stopPropagation();
			}),
			(f.fn[tt] = nt._jQueryInterface),
			(f.fn[tt].Constructor = nt),
			(f.fn[tt].noConflict = function () {
				return (f.fn[tt] = Ot), nt._jQueryInterface;
			});
		var kt = "modal",
			nn = "bs.modal",
			Ie = "." + nn,
			cr = f.fn[kt],
			ai = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
			hr = {
				backdrop: "(boolean|string)",
				keyboard: "boolean",
				focus: "boolean",
				show: "boolean",
			},
			ue = {
				HIDE: "hide" + Ie,
				HIDDEN: "hidden" + Ie,
				SHOW: "show" + Ie,
				SHOWN: "shown" + Ie,
				FOCUSIN: "focusin" + Ie,
				RESIZE: "resize" + Ie,
				CLICK_DISMISS: "click.dismiss" + Ie,
				KEYDOWN_DISMISS: "keydown.dismiss" + Ie,
				MOUSEUP_DISMISS: "mouseup.dismiss" + Ie,
				MOUSEDOWN_DISMISS: "mousedown.dismiss" + Ie,
				CLICK_DATA_API: "click" + Ie + ".data-api",
			},
			Fi = "modal-dialog-scrollable",
			ui = "modal-scrollbar-measure",
			dr = "modal-backdrop",
			Wi = "modal-open",
			rn = "fade",
			e = "show",
			t = ".modal-dialog",
			i = ".modal-body",
			r = '[data-toggle="modal"]',
			a = '[data-dismiss="modal"]',
			u = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
			h = ".sticky-top",
			y = (function () {
				function l(n, s) {
					(this._config = this._getConfig(s)),
						(this._element = n),
						(this._dialog = n.querySelector(t)),
						(this._backdrop = null),
						(this._isShown = !1),
						(this._isBodyOverflowing = !1),
						(this._ignoreBackdropClick = !1),
						(this._isTransitioning = !1),
						(this._scrollbarWidth = 0);
				}
				var c = l.prototype;
				return (
					(c.toggle = function (n) {
						return this._isShown ? this.hide() : this.show(n);
					}),
					(c.show = function (n) {
						var s = this;
						if (!this._isShown && !this._isTransitioning) {
							f(this._element).hasClass(rn) && (this._isTransitioning = !0);
							var d = f.Event(ue.SHOW, { relatedTarget: n });
							f(this._element).trigger(d),
								this._isShown ||
									d.isDefaultPrevented() ||
									((this._isShown = !0),
									this._checkScrollbar(),
									this._setScrollbar(),
									this._adjustDialog(),
									this._setEscapeEvent(),
									this._setResizeEvent(),
									f(this._element).on(ue.CLICK_DISMISS, a, function (m) {
										return s.hide(m);
									}),
									f(this._dialog).on(ue.MOUSEDOWN_DISMISS, function () {
										f(s._element).one(ue.MOUSEUP_DISMISS, function (m) {
											f(m.target).is(s._element) &&
												(s._ignoreBackdropClick = !0);
										});
									}),
									this._showBackdrop(function () {
										return s._showElement(n);
									}));
						}
					}),
					(c.hide = function (n) {
						var s = this;
						if (
							(n && n.preventDefault(), this._isShown && !this._isTransitioning)
						) {
							var d = f.Event(ue.HIDE);
							if (
								(f(this._element).trigger(d),
								this._isShown && !d.isDefaultPrevented())
							) {
								this._isShown = !1;
								var m = f(this._element).hasClass(rn);
								if (
									(m && (this._isTransitioning = !0),
									this._setEscapeEvent(),
									this._setResizeEvent(),
									f(document).off(ue.FOCUSIN),
									f(this._element).removeClass(e),
									f(this._element).off(ue.CLICK_DISMISS),
									f(this._dialog).off(ue.MOUSEDOWN_DISMISS),
									m)
								) {
									var v = P.getTransitionDurationFromElement(this._element);
									f(this._element)
										.one(P.TRANSITION_END, function (C) {
											return s._hideModal(C);
										})
										.emulateTransitionEnd(v);
								} else this._hideModal();
							}
						}
					}),
					(c.dispose = function () {
						[window, this._element, this._dialog].forEach(function (n) {
							return f(n).off(Ie);
						}),
							f(document).off(ue.FOCUSIN),
							f.removeData(this._element, nn),
							(this._config = null),
							(this._element = null),
							(this._dialog = null),
							(this._backdrop = null),
							(this._isShown = null),
							(this._isBodyOverflowing = null),
							(this._ignoreBackdropClick = null),
							(this._isTransitioning = null),
							(this._scrollbarWidth = null);
					}),
					(c.handleUpdate = function () {
						this._adjustDialog();
					}),
					(c._getConfig = function (n) {
						return (n = ce({}, ai, n)), P.typeCheckConfig(kt, n, hr), n;
					}),
					(c._showElement = function (n) {
						var s = this,
							d = f(this._element).hasClass(rn);
						(this._element.parentNode &&
							this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
							document.body.appendChild(this._element),
							(this._element.style.display = "block"),
							this._element.removeAttribute("aria-hidden"),
							this._element.setAttribute("aria-modal", !0),
							f(this._dialog).hasClass(Fi)
								? (this._dialog.querySelector(i).scrollTop = 0)
								: (this._element.scrollTop = 0),
							d && P.reflow(this._element),
							f(this._element).addClass(e),
							this._config.focus && this._enforceFocus();
						var m = f.Event(ue.SHOWN, { relatedTarget: n }),
							v = function () {
								s._config.focus && s._element.focus(),
									(s._isTransitioning = !1),
									f(s._element).trigger(m);
							};
						if (d) {
							var C = P.getTransitionDurationFromElement(this._dialog);
							f(this._dialog).one(P.TRANSITION_END, v).emulateTransitionEnd(C);
						} else v();
					}),
					(c._enforceFocus = function () {
						var n = this;
						f(document)
							.off(ue.FOCUSIN)
							.on(ue.FOCUSIN, function (s) {
								document !== s.target &&
									n._element !== s.target &&
									f(n._element).has(s.target).length === 0 &&
									n._element.focus();
							});
					}),
					(c._setEscapeEvent = function () {
						var n = this;
						this._isShown && this._config.keyboard
							? f(this._element).on(ue.KEYDOWN_DISMISS, function (s) {
									s.which === 27 && (s.preventDefault(), n.hide());
								})
							: this._isShown || f(this._element).off(ue.KEYDOWN_DISMISS);
					}),
					(c._setResizeEvent = function () {
						var n = this;
						this._isShown
							? f(window).on(ue.RESIZE, function (s) {
									return n.handleUpdate(s);
								})
							: f(window).off(ue.RESIZE);
					}),
					(c._hideModal = function () {
						var n = this;
						(this._element.style.display = "none"),
							this._element.setAttribute("aria-hidden", !0),
							this._element.removeAttribute("aria-modal"),
							(this._isTransitioning = !1),
							this._showBackdrop(function () {
								f(document.body).removeClass(Wi),
									n._resetAdjustments(),
									n._resetScrollbar(),
									f(n._element).trigger(ue.HIDDEN);
							});
					}),
					(c._removeBackdrop = function () {
						this._backdrop &&
							(f(this._backdrop).remove(), (this._backdrop = null));
					}),
					(c._showBackdrop = function (n) {
						var s = this,
							d = f(this._element).hasClass(rn) ? rn : "";
						if (this._isShown && this._config.backdrop) {
							if (
								((this._backdrop = document.createElement("div")),
								(this._backdrop.className = dr),
								d && this._backdrop.classList.add(d),
								f(this._backdrop).appendTo(document.body),
								f(this._element).on(ue.CLICK_DISMISS, function (x) {
									s._ignoreBackdropClick
										? (s._ignoreBackdropClick = !1)
										: x.target === x.currentTarget &&
											(s._config.backdrop === "static"
												? s._element.focus()
												: s.hide());
								}),
								d && P.reflow(this._backdrop),
								f(this._backdrop).addClass(e),
								!n)
							)
								return;
							if (!d) return void n();
							var m = P.getTransitionDurationFromElement(this._backdrop);
							f(this._backdrop)
								.one(P.TRANSITION_END, n)
								.emulateTransitionEnd(m);
						} else if (!this._isShown && this._backdrop) {
							f(this._backdrop).removeClass(e);
							var v = function () {
								s._removeBackdrop(), n && n();
							};
							if (f(this._element).hasClass(rn)) {
								var C = P.getTransitionDurationFromElement(this._backdrop);
								f(this._backdrop)
									.one(P.TRANSITION_END, v)
									.emulateTransitionEnd(C);
							} else v();
						} else n && n();
					}),
					(c._adjustDialog = function () {
						var n =
							this._element.scrollHeight >
							document.documentElement.clientHeight;
						!this._isBodyOverflowing &&
							n &&
							(this._element.style.paddingLeft = this._scrollbarWidth + "px"),
							this._isBodyOverflowing &&
								!n &&
								(this._element.style.paddingRight =
									this._scrollbarWidth + "px");
					}),
					(c._resetAdjustments = function () {
						(this._element.style.paddingLeft = ""),
							(this._element.style.paddingRight = "");
					}),
					(c._checkScrollbar = function () {
						var n = document.body.getBoundingClientRect();
						(this._isBodyOverflowing = n.left + n.right < window.innerWidth),
							(this._scrollbarWidth = this._getScrollbarWidth());
					}),
					(c._setScrollbar = function () {
						var n = this;
						if (this._isBodyOverflowing) {
							var s = [].slice.call(document.querySelectorAll(u)),
								d = [].slice.call(document.querySelectorAll(h));
							f(s).each(function (C, x) {
								var j = x.style.paddingRight,
									O = f(x).css("padding-right");
								f(x)
									.data("padding-right", j)
									.css(
										"padding-right",
										parseFloat(O) + n._scrollbarWidth + "px",
									);
							}),
								f(d).each(function (C, x) {
									var j = x.style.marginRight,
										O = f(x).css("margin-right");
									f(x)
										.data("margin-right", j)
										.css(
											"margin-right",
											parseFloat(O) - n._scrollbarWidth + "px",
										);
								});
							var m = document.body.style.paddingRight,
								v = f(document.body).css("padding-right");
							f(document.body)
								.data("padding-right", m)
								.css(
									"padding-right",
									parseFloat(v) + this._scrollbarWidth + "px",
								);
						}
						f(document.body).addClass(Wi);
					}),
					(c._resetScrollbar = function () {
						var n = [].slice.call(document.querySelectorAll(u));
						f(n).each(function (m, v) {
							var C = f(v).data("padding-right");
							f(v).removeData("padding-right"),
								(v.style.paddingRight = C || "");
						});
						var s = [].slice.call(document.querySelectorAll("" + h));
						f(s).each(function (m, v) {
							var C = f(v).data("margin-right");
							typeof C < "u" &&
								f(v).css("margin-right", C).removeData("margin-right");
						});
						var d = f(document.body).data("padding-right");
						f(document.body).removeData("padding-right"),
							(document.body.style.paddingRight = d || "");
					}),
					(c._getScrollbarWidth = function () {
						var n = document.createElement("div");
						(n.className = ui), document.body.appendChild(n);
						var s = n.getBoundingClientRect().width - n.clientWidth;
						return document.body.removeChild(n), s;
					}),
					(l._jQueryInterface = function (n, s) {
						return this.each(function () {
							var d = f(this).data(nn),
								m = ce(
									{},
									ai,
									f(this).data(),
									typeof n == "object" && n ? n : {},
								);
							if (
								(d || ((d = new l(this, m)), f(this).data(nn, d)),
								typeof n == "string")
							) {
								if (typeof d[n] > "u")
									throw new TypeError('No method named "' + n + '"');
								d[n](s);
							} else m.show && d.show(s);
						});
					}),
					oe(l, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.3.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return ai;
							},
						},
					]),
					l
				);
			})();
		f(document).on(ue.CLICK_DATA_API, r, function (l) {
			var c,
				n = this,
				s = P.getSelectorFromElement(this);
			s && (c = document.querySelector(s));
			var d = f(c).data(nn) ? "toggle" : ce({}, f(c).data(), f(this).data());
			(this.tagName !== "A" && this.tagName !== "AREA") || l.preventDefault();
			var m = f(c).one(ue.SHOW, function (v) {
				v.isDefaultPrevented() ||
					m.one(ue.HIDDEN, function () {
						f(n).is(":visible") && n.focus();
					});
			});
			y._jQueryInterface.call(f(c), d, this);
		}),
			(f.fn[kt] = y._jQueryInterface),
			(f.fn[kt].Constructor = y),
			(f.fn[kt].noConflict = function () {
				return (f.fn[kt] = cr), y._jQueryInterface;
			});
		var g = [
				"background",
				"cite",
				"href",
				"itemtype",
				"longdesc",
				"poster",
				"src",
				"xlink:href",
			],
			b = {
				"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
				a: ["target", "href", "title", "rel"],
				area: [],
				b: [],
				br: [],
				col: [],
				code: [],
				div: [],
				em: [],
				hr: [],
				h1: [],
				h2: [],
				h3: [],
				h4: [],
				h5: [],
				h6: [],
				i: [],
				img: ["src", "alt", "title", "width", "height"],
				li: [],
				ol: [],
				p: [],
				pre: [],
				s: [],
				small: [],
				span: [],
				sub: [],
				sup: [],
				strong: [],
				u: [],
				ul: [],
			},
			S = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
			A =
				/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
		function w(l, c, n) {
			if (l.length === 0) return l;
			if (n && typeof n == "function") return n(l);
			for (
				var s = new window.DOMParser().parseFromString(l, "text/html"),
					d = Object.keys(c),
					m = [].slice.call(s.body.querySelectorAll("*")),
					v = function (j, O) {
						var q = m[j],
							H = q.nodeName.toLowerCase();
						if (d.indexOf(q.nodeName.toLowerCase()) === -1)
							return q.parentNode.removeChild(q), "continue";
						var W = [].slice.call(q.attributes),
							K = [].concat(c["*"] || [], c[H] || []);
						W.forEach(function (ne) {
							(function (he, _e) {
								var be = he.nodeName.toLowerCase();
								if (_e.indexOf(be) !== -1)
									return (
										g.indexOf(be) === -1 ||
										!!(he.nodeValue.match(S) || he.nodeValue.match(A))
									);
								for (
									var fe = _e.filter(function (an) {
											return an instanceof RegExp;
										}),
										Pe = 0,
										ze = fe.length;
									Pe < ze;
									Pe++
								)
									if (be.match(fe[Pe])) return !0;
								return !1;
							})(ne, K) || q.removeAttribute(ne.nodeName);
						});
					},
					C = 0,
					x = m.length;
				C < x;
				C++
			)
				v(C);
			return s.body.innerHTML;
		}
		var N = "tooltip",
			B = "bs.tooltip",
			$ = "." + B,
			J = f.fn[N],
			ge = "bs-tooltip",
			pe = new RegExp("(^|\\s)" + ge + "\\S+", "g"),
			it = ["sanitize", "whiteList", "sanitizeFn"],
			rt = {
				animation: "boolean",
				template: "string",
				title: "(string|element|function)",
				trigger: "string",
				delay: "(number|object)",
				html: "boolean",
				selector: "(string|boolean)",
				placement: "(string|function)",
				offset: "(number|string|function)",
				container: "(string|element|boolean)",
				fallbackPlacement: "(string|array)",
				boundary: "(string|element)",
				sanitize: "boolean",
				sanitizeFn: "(null|function)",
				whiteList: "object",
			},
			te = {
				AUTO: "auto",
				TOP: "top",
				RIGHT: "right",
				BOTTOM: "bottom",
				LEFT: "left",
			},
			jt = {
				animation: !0,
				template:
					'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
				trigger: "hover focus",
				title: "",
				delay: 0,
				html: !1,
				selector: !1,
				placement: "top",
				offset: 0,
				container: !1,
				fallbackPlacement: "flip",
				boundary: "scrollParent",
				sanitize: !0,
				sanitizeFn: null,
				whiteList: b,
			},
			Z = "show",
			le = "out",
			En = {
				HIDE: "hide" + $,
				HIDDEN: "hidden" + $,
				SHOW: "show" + $,
				SHOWN: "shown" + $,
				INSERTED: "inserted" + $,
				CLICK: "click" + $,
				FOCUSIN: "focusin" + $,
				FOCUSOUT: "focusout" + $,
				MOUSEENTER: "mouseenter" + $,
				MOUSELEAVE: "mouseleave" + $,
			},
			Lt = "fade",
			Oe = "show",
			wn = ".tooltip-inner",
			ot = ".arrow",
			Re = "hover",
			st = "focus",
			Fe = "click",
			li = "manual",
			xe = (function () {
				function l(n, s) {
					if (typeof _t > "u")
						throw new TypeError(
							"Bootstrap's tooltips require Popper.js (https://popper.js.org/)",
						);
					(this._isEnabled = !0),
						(this._timeout = 0),
						(this._hoverState = ""),
						(this._activeTrigger = {}),
						(this._popper = null),
						(this.element = n),
						(this.config = this._getConfig(s)),
						(this.tip = null),
						this._setListeners();
				}
				var c = l.prototype;
				return (
					(c.enable = function () {
						this._isEnabled = !0;
					}),
					(c.disable = function () {
						this._isEnabled = !1;
					}),
					(c.toggleEnabled = function () {
						this._isEnabled = !this._isEnabled;
					}),
					(c.toggle = function (n) {
						if (this._isEnabled)
							if (n) {
								var s = this.constructor.DATA_KEY,
									d = f(n.currentTarget).data(s);
								d ||
									((d = new this.constructor(
										n.currentTarget,
										this._getDelegateConfig(),
									)),
									f(n.currentTarget).data(s, d)),
									(d._activeTrigger.click = !d._activeTrigger.click),
									d._isWithActiveTrigger()
										? d._enter(null, d)
										: d._leave(null, d);
							} else {
								if (f(this.getTipElement()).hasClass(Oe))
									return void this._leave(null, this);
								this._enter(null, this);
							}
					}),
					(c.dispose = function () {
						clearTimeout(this._timeout),
							f.removeData(this.element, this.constructor.DATA_KEY),
							f(this.element).off(this.constructor.EVENT_KEY),
							f(this.element).closest(".modal").off("hide.bs.modal"),
							this.tip && f(this.tip).remove(),
							(this._isEnabled = null),
							(this._timeout = null),
							(this._hoverState = null),
							(this._activeTrigger = null) !== this._popper &&
								this._popper.destroy(),
							(this._popper = null),
							(this.element = null),
							(this.config = null),
							(this.tip = null);
					}),
					(c.show = function () {
						var n = this;
						if (f(this.element).css("display") === "none")
							throw new Error("Please use show on visible elements");
						var s = f.Event(this.constructor.Event.SHOW);
						if (this.isWithContent() && this._isEnabled) {
							f(this.element).trigger(s);
							var d = P.findShadowRoot(this.element),
								m = f.contains(
									d !== null ? d : this.element.ownerDocument.documentElement,
									this.element,
								);
							if (s.isDefaultPrevented() || !m) return;
							var v = this.getTipElement(),
								C = P.getUID(this.constructor.NAME);
							v.setAttribute("id", C),
								this.element.setAttribute("aria-describedby", C),
								this.setContent(),
								this.config.animation && f(v).addClass(Lt);
							var x =
									typeof this.config.placement == "function"
										? this.config.placement.call(this, v, this.element)
										: this.config.placement,
								j = this._getAttachment(x);
							this.addAttachmentClass(j);
							var O = this._getContainer();
							f(v).data(this.constructor.DATA_KEY, this),
								f.contains(
									this.element.ownerDocument.documentElement,
									this.tip,
								) || f(v).appendTo(O),
								f(this.element).trigger(this.constructor.Event.INSERTED),
								(this._popper = new _t(this.element, v, {
									placement: j,
									modifiers: {
										offset: this._getOffset(),
										flip: { behavior: this.config.fallbackPlacement },
										arrow: { element: ot },
										preventOverflow: {
											boundariesElement: this.config.boundary,
										},
									},
									onCreate: function (W) {
										W.originalPlacement !== W.placement &&
											n._handlePopperPlacementChange(W);
									},
									onUpdate: function (W) {
										return n._handlePopperPlacementChange(W);
									},
								})),
								f(v).addClass(Oe),
								"ontouchstart" in document.documentElement &&
									f(document.body).children().on("mouseover", null, f.noop);
							var q = function () {
								n.config.animation && n._fixTransition();
								var W = n._hoverState;
								(n._hoverState = null),
									f(n.element).trigger(n.constructor.Event.SHOWN),
									W === le && n._leave(null, n);
							};
							if (f(this.tip).hasClass(Lt)) {
								var H = P.getTransitionDurationFromElement(this.tip);
								f(this.tip).one(P.TRANSITION_END, q).emulateTransitionEnd(H);
							} else q();
						}
					}),
					(c.hide = function (n) {
						var s = this,
							d = this.getTipElement(),
							m = f.Event(this.constructor.Event.HIDE),
							v = function () {
								s._hoverState !== Z &&
									d.parentNode &&
									d.parentNode.removeChild(d),
									s._cleanTipClass(),
									s.element.removeAttribute("aria-describedby"),
									f(s.element).trigger(s.constructor.Event.HIDDEN),
									s._popper !== null && s._popper.destroy(),
									n && n();
							};
						if ((f(this.element).trigger(m), !m.isDefaultPrevented())) {
							if (
								(f(d).removeClass(Oe),
								"ontouchstart" in document.documentElement &&
									f(document.body).children().off("mouseover", null, f.noop),
								(this._activeTrigger[Fe] = !1),
								(this._activeTrigger[st] = !1),
								(this._activeTrigger[Re] = !1),
								f(this.tip).hasClass(Lt))
							) {
								var C = P.getTransitionDurationFromElement(d);
								f(d).one(P.TRANSITION_END, v).emulateTransitionEnd(C);
							} else v();
							this._hoverState = "";
						}
					}),
					(c.update = function () {
						this._popper !== null && this._popper.scheduleUpdate();
					}),
					(c.isWithContent = function () {
						return !!this.getTitle();
					}),
					(c.addAttachmentClass = function (n) {
						f(this.getTipElement()).addClass(ge + "-" + n);
					}),
					(c.getTipElement = function () {
						return (
							(this.tip = this.tip || f(this.config.template)[0]), this.tip
						);
					}),
					(c.setContent = function () {
						var n = this.getTipElement();
						this.setElementContent(f(n.querySelectorAll(wn)), this.getTitle()),
							f(n).removeClass(Lt + " " + Oe);
					}),
					(c.setElementContent = function (n, s) {
						typeof s != "object" || (!s.nodeType && !s.jquery)
							? this.config.html
								? (this.config.sanitize &&
										(s = w(s, this.config.whiteList, this.config.sanitizeFn)),
									n.html(s))
								: n.text(s)
							: this.config.html
								? f(s).parent().is(n) || n.empty().append(s)
								: n.text(f(s).text());
					}),
					(c.getTitle = function () {
						var n = this.element.getAttribute("data-original-title");
						return (
							n ||
								(n =
									typeof this.config.title == "function"
										? this.config.title.call(this.element)
										: this.config.title),
							n
						);
					}),
					(c._getOffset = function () {
						var n = this,
							s = {};
						return (
							typeof this.config.offset == "function"
								? (s.fn = function (d) {
										return (
											(d.offsets = ce(
												{},
												d.offsets,
												n.config.offset(d.offsets, n.element) || {},
											)),
											d
										);
									})
								: (s.offset = this.config.offset),
							s
						);
					}),
					(c._getContainer = function () {
						return this.config.container === !1
							? document.body
							: P.isElement(this.config.container)
								? f(this.config.container)
								: f(document).find(this.config.container);
					}),
					(c._getAttachment = function (n) {
						return te[n.toUpperCase()];
					}),
					(c._setListeners = function () {
						var n = this;
						this.config.trigger.split(" ").forEach(function (s) {
							if (s === "click")
								f(n.element).on(
									n.constructor.Event.CLICK,
									n.config.selector,
									function (v) {
										return n.toggle(v);
									},
								);
							else if (s !== li) {
								var d =
										s === Re
											? n.constructor.Event.MOUSEENTER
											: n.constructor.Event.FOCUSIN,
									m =
										s === Re
											? n.constructor.Event.MOUSELEAVE
											: n.constructor.Event.FOCUSOUT;
								f(n.element)
									.on(d, n.config.selector, function (v) {
										return n._enter(v);
									})
									.on(m, n.config.selector, function (v) {
										return n._leave(v);
									});
							}
						}),
							f(this.element)
								.closest(".modal")
								.on("hide.bs.modal", function () {
									n.element && n.hide();
								}),
							this.config.selector
								? (this.config = ce({}, this.config, {
										trigger: "manual",
										selector: "",
									}))
								: this._fixTitle();
					}),
					(c._fixTitle = function () {
						var n = typeof this.element.getAttribute("data-original-title");
						(this.element.getAttribute("title") || n !== "string") &&
							(this.element.setAttribute(
								"data-original-title",
								this.element.getAttribute("title") || "",
							),
							this.element.setAttribute("title", ""));
					}),
					(c._enter = function (n, s) {
						var d = this.constructor.DATA_KEY;
						(s = s || f(n.currentTarget).data(d)) ||
							((s = new this.constructor(
								n.currentTarget,
								this._getDelegateConfig(),
							)),
							f(n.currentTarget).data(d, s)),
							n && (s._activeTrigger[n.type === "focusin" ? st : Re] = !0),
							f(s.getTipElement()).hasClass(Oe) || s._hoverState === Z
								? (s._hoverState = Z)
								: (clearTimeout(s._timeout),
									(s._hoverState = Z),
									s.config.delay && s.config.delay.show
										? (s._timeout = setTimeout(function () {
												s._hoverState === Z && s.show();
											}, s.config.delay.show))
										: s.show());
					}),
					(c._leave = function (n, s) {
						var d = this.constructor.DATA_KEY;
						(s = s || f(n.currentTarget).data(d)) ||
							((s = new this.constructor(
								n.currentTarget,
								this._getDelegateConfig(),
							)),
							f(n.currentTarget).data(d, s)),
							n && (s._activeTrigger[n.type === "focusout" ? st : Re] = !1),
							s._isWithActiveTrigger() ||
								(clearTimeout(s._timeout),
								(s._hoverState = le),
								s.config.delay && s.config.delay.hide
									? (s._timeout = setTimeout(function () {
											s._hoverState === le && s.hide();
										}, s.config.delay.hide))
									: s.hide());
					}),
					(c._isWithActiveTrigger = function () {
						for (var n in this._activeTrigger)
							if (this._activeTrigger[n]) return !0;
						return !1;
					}),
					(c._getConfig = function (n) {
						var s = f(this.element).data();
						return (
							Object.keys(s).forEach(function (d) {
								it.indexOf(d) !== -1 && delete s[d];
							}),
							typeof (n = ce(
								{},
								this.constructor.Default,
								s,
								typeof n == "object" && n ? n : {},
							)).delay == "number" &&
								(n.delay = { show: n.delay, hide: n.delay }),
							typeof n.title == "number" && (n.title = n.title.toString()),
							typeof n.content == "number" &&
								(n.content = n.content.toString()),
							P.typeCheckConfig(N, n, this.constructor.DefaultType),
							n.sanitize &&
								(n.template = w(n.template, n.whiteList, n.sanitizeFn)),
							n
						);
					}),
					(c._getDelegateConfig = function () {
						var n = {};
						if (this.config)
							for (var s in this.config)
								this.constructor.Default[s] !== this.config[s] &&
									(n[s] = this.config[s]);
						return n;
					}),
					(c._cleanTipClass = function () {
						var n = f(this.getTipElement()),
							s = n.attr("class").match(pe);
						s !== null && s.length && n.removeClass(s.join(""));
					}),
					(c._handlePopperPlacementChange = function (n) {
						var s = n.instance;
						(this.tip = s.popper),
							this._cleanTipClass(),
							this.addAttachmentClass(this._getAttachment(n.placement));
					}),
					(c._fixTransition = function () {
						var n = this.getTipElement(),
							s = this.config.animation;
						n.getAttribute("x-placement") === null &&
							(f(n).removeClass(Lt),
							(this.config.animation = !1),
							this.hide(),
							this.show(),
							(this.config.animation = s));
					}),
					(l._jQueryInterface = function (n) {
						return this.each(function () {
							var s = f(this).data(B),
								d = typeof n == "object" && n;
							if (
								(s || !/dispose|hide/.test(n)) &&
								(s || ((s = new l(this, d)), f(this).data(B, s)),
								typeof n == "string")
							) {
								if (typeof s[n] > "u")
									throw new TypeError('No method named "' + n + '"');
								s[n]();
							}
						});
					}),
					oe(l, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.3.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return jt;
							},
						},
						{
							key: "NAME",
							get: function () {
								return N;
							},
						},
						{
							key: "DATA_KEY",
							get: function () {
								return B;
							},
						},
						{
							key: "Event",
							get: function () {
								return En;
							},
						},
						{
							key: "EVENT_KEY",
							get: function () {
								return $;
							},
						},
						{
							key: "DefaultType",
							get: function () {
								return rt;
							},
						},
					]),
					l
				);
			})();
		(f.fn[N] = xe._jQueryInterface),
			(f.fn[N].Constructor = xe),
			(f.fn[N].noConflict = function () {
				return (f.fn[N] = J), xe._jQueryInterface;
			});
		var ke = "popover",
			Pn = "bs.popover",
			Ve = "." + Pn,
			pr = f.fn[ke],
			ie = "bs-popover",
			Hn = new RegExp("(^|\\s)" + ie + "\\S+", "g"),
			Ke = ce({}, xe.Default, {
				placement: "right",
				trigger: "click",
				content: "",
				template:
					'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
			}),
			on = ce({}, xe.DefaultType, { content: "(string|element|function)" }),
			gr = "fade",
			mr = "show",
			Bi = ".popover-header",
			Pt = ".popover-body",
			fi = {
				HIDE: "hide" + Ve,
				HIDDEN: "hidden" + Ve,
				SHOW: "show" + Ve,
				SHOWN: "shown" + Ve,
				INSERTED: "inserted" + Ve,
				CLICK: "click" + Ve,
				FOCUSIN: "focusin" + Ve,
				FOCUSOUT: "focusout" + Ve,
				MOUSEENTER: "mouseenter" + Ve,
				MOUSELEAVE: "mouseleave" + Ve,
			},
			$e = (function (l) {
				var c, n;
				function s() {
					return l.apply(this, arguments) || this;
				}
				(n = l),
					((c = s).prototype = Object.create(n.prototype)),
					((c.prototype.constructor = c).__proto__ = n);
				var d = s.prototype;
				return (
					(d.isWithContent = function () {
						return this.getTitle() || this._getContent();
					}),
					(d.addAttachmentClass = function (m) {
						f(this.getTipElement()).addClass(ie + "-" + m);
					}),
					(d.getTipElement = function () {
						return (
							(this.tip = this.tip || f(this.config.template)[0]), this.tip
						);
					}),
					(d.setContent = function () {
						var m = f(this.getTipElement());
						this.setElementContent(m.find(Bi), this.getTitle());
						var v = this._getContent();
						typeof v == "function" && (v = v.call(this.element)),
							this.setElementContent(m.find(Pt), v),
							m.removeClass(gr + " " + mr);
					}),
					(d._getContent = function () {
						return (
							this.element.getAttribute("data-content") || this.config.content
						);
					}),
					(d._cleanTipClass = function () {
						var m = f(this.getTipElement()),
							v = m.attr("class").match(Hn);
						v !== null && 0 < v.length && m.removeClass(v.join(""));
					}),
					(s._jQueryInterface = function (m) {
						return this.each(function () {
							var v = f(this).data(Pn),
								C = typeof m == "object" ? m : null;
							if (
								(v || !/dispose|hide/.test(m)) &&
								(v || ((v = new s(this, C)), f(this).data(Pn, v)),
								typeof m == "string")
							) {
								if (typeof v[m] > "u")
									throw new TypeError('No method named "' + m + '"');
								v[m]();
							}
						});
					}),
					oe(s, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.3.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return Ke;
							},
						},
						{
							key: "NAME",
							get: function () {
								return ke;
							},
						},
						{
							key: "DATA_KEY",
							get: function () {
								return Pn;
							},
						},
						{
							key: "Event",
							get: function () {
								return fi;
							},
						},
						{
							key: "EVENT_KEY",
							get: function () {
								return Ve;
							},
						},
						{
							key: "DefaultType",
							get: function () {
								return on;
							},
						},
					]),
					s
				);
			})(xe);
		(f.fn[ke] = $e._jQueryInterface),
			(f.fn[ke].Constructor = $e),
			(f.fn[ke].noConflict = function () {
				return (f.fn[ke] = pr), $e._jQueryInterface;
			});
		var Et = "scrollspy",
			wt = "bs.scrollspy",
			Ht = "." + wt,
			Mn = f.fn[Et],
			qn = { offset: 10, method: "auto", target: "" },
			vr = { offset: "number", method: "string", target: "(string|element)" },
			sn = {
				ACTIVATE: "activate" + Ht,
				SCROLL: "scroll" + Ht,
				LOAD_DATA_API: "load" + Ht + ".data-api",
			},
			ci = "dropdown-item",
			dt = "active",
			yr = '[data-spy="scroll"]',
			Rn = ".nav, .list-group",
			Fn = ".nav-link",
			p = ".nav-item",
			_ = ".list-group-item",
			E = ".dropdown",
			T = ".dropdown-item",
			D = ".dropdown-toggle",
			I = "offset",
			L = "position",
			M = (function () {
				function l(n, s) {
					var d = this;
					(this._element = n),
						(this._scrollElement = n.tagName === "BODY" ? window : n),
						(this._config = this._getConfig(s)),
						(this._selector =
							this._config.target +
							" " +
							Fn +
							"," +
							this._config.target +
							" " +
							_ +
							"," +
							this._config.target +
							" " +
							T),
						(this._offsets = []),
						(this._targets = []),
						(this._activeTarget = null),
						(this._scrollHeight = 0),
						f(this._scrollElement).on(sn.SCROLL, function (m) {
							return d._process(m);
						}),
						this.refresh(),
						this._process();
				}
				var c = l.prototype;
				return (
					(c.refresh = function () {
						var n = this,
							s = this._scrollElement === this._scrollElement.window ? I : L,
							d = this._config.method === "auto" ? s : this._config.method,
							m = d === L ? this._getScrollTop() : 0;
						(this._offsets = []),
							(this._targets = []),
							(this._scrollHeight = this._getScrollHeight()),
							[].slice
								.call(document.querySelectorAll(this._selector))
								.map(function (v) {
									var C,
										x = P.getSelectorFromElement(v);
									if ((x && (C = document.querySelector(x)), C)) {
										var j = C.getBoundingClientRect();
										if (j.width || j.height) return [f(C)[d]().top + m, x];
									}
									return null;
								})
								.filter(function (v) {
									return v;
								})
								.sort(function (v, C) {
									return v[0] - C[0];
								})
								.forEach(function (v) {
									n._offsets.push(v[0]), n._targets.push(v[1]);
								});
					}),
					(c.dispose = function () {
						f.removeData(this._element, wt),
							f(this._scrollElement).off(Ht),
							(this._element = null),
							(this._scrollElement = null),
							(this._config = null),
							(this._selector = null),
							(this._offsets = null),
							(this._targets = null),
							(this._activeTarget = null),
							(this._scrollHeight = null);
					}),
					(c._getConfig = function (n) {
						if (
							typeof (n = ce({}, qn, typeof n == "object" && n ? n : {}))
								.target != "string"
						) {
							var s = f(n.target).attr("id");
							s || ((s = P.getUID(Et)), f(n.target).attr("id", s)),
								(n.target = "#" + s);
						}
						return P.typeCheckConfig(Et, n, vr), n;
					}),
					(c._getScrollTop = function () {
						return this._scrollElement === window
							? this._scrollElement.pageYOffset
							: this._scrollElement.scrollTop;
					}),
					(c._getScrollHeight = function () {
						return (
							this._scrollElement.scrollHeight ||
							Math.max(
								document.body.scrollHeight,
								document.documentElement.scrollHeight,
							)
						);
					}),
					(c._getOffsetHeight = function () {
						return this._scrollElement === window
							? window.innerHeight
							: this._scrollElement.getBoundingClientRect().height;
					}),
					(c._process = function () {
						var n = this._getScrollTop() + this._config.offset,
							s = this._getScrollHeight(),
							d = this._config.offset + s - this._getOffsetHeight();
						if ((this._scrollHeight !== s && this.refresh(), d <= n)) {
							var m = this._targets[this._targets.length - 1];
							this._activeTarget !== m && this._activate(m);
						} else {
							if (
								this._activeTarget &&
								n < this._offsets[0] &&
								0 < this._offsets[0]
							)
								return (this._activeTarget = null), void this._clear();
							for (var v = this._offsets.length; v--; )
								this._activeTarget !== this._targets[v] &&
									n >= this._offsets[v] &&
									(typeof this._offsets[v + 1] > "u" ||
										n < this._offsets[v + 1]) &&
									this._activate(this._targets[v]);
						}
					}),
					(c._activate = function (n) {
						(this._activeTarget = n), this._clear();
						var s = this._selector.split(",").map(function (m) {
								return (
									m + '[data-target="' + n + '"],' + m + '[href="' + n + '"]'
								);
							}),
							d = f([].slice.call(document.querySelectorAll(s.join(","))));
						d.hasClass(ci)
							? (d.closest(E).find(D).addClass(dt), d.addClass(dt))
							: (d.addClass(dt),
								d
									.parents(Rn)
									.prev(Fn + ", " + _)
									.addClass(dt),
								d.parents(Rn).prev(p).children(Fn).addClass(dt)),
							f(this._scrollElement).trigger(sn.ACTIVATE, { relatedTarget: n });
					}),
					(c._clear = function () {
						[].slice
							.call(document.querySelectorAll(this._selector))
							.filter(function (n) {
								return n.classList.contains(dt);
							})
							.forEach(function (n) {
								return n.classList.remove(dt);
							});
					}),
					(l._jQueryInterface = function (n) {
						return this.each(function () {
							var s = f(this).data(wt);
							if (
								(s ||
									((s = new l(this, typeof n == "object" && n)),
									f(this).data(wt, s)),
								typeof n == "string")
							) {
								if (typeof s[n] > "u")
									throw new TypeError('No method named "' + n + '"');
								s[n]();
							}
						});
					}),
					oe(l, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.3.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return qn;
							},
						},
					]),
					l
				);
			})();
		f(window).on(sn.LOAD_DATA_API, function () {
			for (
				var l = [].slice.call(document.querySelectorAll(yr)), c = l.length;
				c--;

			) {
				var n = f(l[c]);
				M._jQueryInterface.call(n, n.data());
			}
		}),
			(f.fn[Et] = M._jQueryInterface),
			(f.fn[Et].Constructor = M),
			(f.fn[Et].noConflict = function () {
				return (f.fn[Et] = Mn), M._jQueryInterface;
			});
		var k = "bs.tab",
			G = "." + k,
			Q = f.fn.tab,
			U = {
				HIDE: "hide" + G,
				HIDDEN: "hidden" + G,
				SHOW: "show" + G,
				SHOWN: "shown" + G,
				CLICK_DATA_API: "click" + G + ".data-api",
			},
			ee = "dropdown-menu",
			F = "active",
			se = "disabled",
			De = "fade",
			me = "show",
			We = ".dropdown",
			at = ".nav, .list-group",
			Mt = ".active",
			ye = "> li > .active",
			Ir = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
			Or = ".dropdown-toggle",
			kr = "> .dropdown-menu .active",
			hi = (function () {
				function l(n) {
					this._element = n;
				}
				var c = l.prototype;
				return (
					(c.show = function () {
						var n = this;
						if (
							!(
								(this._element.parentNode &&
									this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
									f(this._element).hasClass(F)) ||
								f(this._element).hasClass(se)
							)
						) {
							var s,
								d,
								m = f(this._element).closest(at)[0],
								v = P.getSelectorFromElement(this._element);
							if (m) {
								var C = m.nodeName === "UL" || m.nodeName === "OL" ? ye : Mt;
								d = (d = f.makeArray(f(m).find(C)))[d.length - 1];
							}
							var x = f.Event(U.HIDE, { relatedTarget: this._element }),
								j = f.Event(U.SHOW, { relatedTarget: d });
							if (
								(d && f(d).trigger(x),
								f(this._element).trigger(j),
								!j.isDefaultPrevented() && !x.isDefaultPrevented())
							) {
								v && (s = document.querySelector(v)),
									this._activate(this._element, m);
								var O = function () {
									var q = f.Event(U.HIDDEN, { relatedTarget: n._element }),
										H = f.Event(U.SHOWN, { relatedTarget: d });
									f(d).trigger(q), f(n._element).trigger(H);
								};
								s ? this._activate(s, s.parentNode, O) : O();
							}
						}
					}),
					(c.dispose = function () {
						f.removeData(this._element, k), (this._element = null);
					}),
					(c._activate = function (n, s, d) {
						var m = this,
							v = (
								!s || (s.nodeName !== "UL" && s.nodeName !== "OL")
									? f(s).children(Mt)
									: f(s).find(ye)
							)[0],
							C = d && v && f(v).hasClass(De),
							x = function () {
								return m._transitionComplete(n, v, d);
							};
						if (v && C) {
							var j = P.getTransitionDurationFromElement(v);
							f(v)
								.removeClass(me)
								.one(P.TRANSITION_END, x)
								.emulateTransitionEnd(j);
						} else x();
					}),
					(c._transitionComplete = function (n, s, d) {
						if (s) {
							f(s).removeClass(F);
							var m = f(s.parentNode).find(kr)[0];
							m && f(m).removeClass(F),
								s.getAttribute("role") === "tab" &&
									s.setAttribute("aria-selected", !1);
						}
						if (
							(f(n).addClass(F),
							n.getAttribute("role") === "tab" &&
								n.setAttribute("aria-selected", !0),
							P.reflow(n),
							n.classList.contains(De) && n.classList.add(me),
							n.parentNode && f(n.parentNode).hasClass(ee))
						) {
							var v = f(n).closest(We)[0];
							if (v) {
								var C = [].slice.call(v.querySelectorAll(Or));
								f(C).addClass(F);
							}
							n.setAttribute("aria-expanded", !0);
						}
						d && d();
					}),
					(l._jQueryInterface = function (n) {
						return this.each(function () {
							var s = f(this),
								d = s.data(k);
							if (
								(d || ((d = new l(this)), s.data(k, d)), typeof n == "string")
							) {
								if (typeof d[n] > "u")
									throw new TypeError('No method named "' + n + '"');
								d[n]();
							}
						});
					}),
					oe(l, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.3.1";
							},
						},
					]),
					l
				);
			})();
		f(document).on(U.CLICK_DATA_API, Ir, function (l) {
			l.preventDefault(), hi._jQueryInterface.call(f(this), "show");
		}),
			(f.fn.tab = hi._jQueryInterface),
			(f.fn.tab.Constructor = hi),
			(f.fn.tab.noConflict = function () {
				return (f.fn.tab = Q), hi._jQueryInterface;
			});
		var Wn = "toast",
			Ui = "bs.toast",
			di = "." + Ui,
			jr = f.fn[Wn],
			Bn = {
				CLICK_DISMISS: "click.dismiss" + di,
				HIDE: "hide" + di,
				HIDDEN: "hidden" + di,
				SHOW: "show" + di,
				SHOWN: "shown" + di,
			},
			Lr = "fade",
			Cr = "hide",
			pi = "show",
			Sr = "showing",
			Pr = { animation: "boolean", autohide: "boolean", delay: "number" },
			xr = { animation: !0, autohide: !0, delay: 500 },
			Hr = '[data-dismiss="toast"]',
			Qi = (function () {
				function l(n, s) {
					(this._element = n),
						(this._config = this._getConfig(s)),
						(this._timeout = null),
						this._setListeners();
				}
				var c = l.prototype;
				return (
					(c.show = function () {
						var n = this;
						f(this._element).trigger(Bn.SHOW),
							this._config.animation && this._element.classList.add(Lr);
						var s = function () {
							n._element.classList.remove(Sr),
								n._element.classList.add(pi),
								f(n._element).trigger(Bn.SHOWN),
								n._config.autohide && n.hide();
						};
						if (
							(this._element.classList.remove(Cr),
							this._element.classList.add(Sr),
							this._config.animation)
						) {
							var d = P.getTransitionDurationFromElement(this._element);
							f(this._element).one(P.TRANSITION_END, s).emulateTransitionEnd(d);
						} else s();
					}),
					(c.hide = function (n) {
						var s = this;
						this._element.classList.contains(pi) &&
							(f(this._element).trigger(Bn.HIDE),
							n
								? this._close()
								: (this._timeout = setTimeout(function () {
										s._close();
									}, this._config.delay)));
					}),
					(c.dispose = function () {
						clearTimeout(this._timeout),
							(this._timeout = null),
							this._element.classList.contains(pi) &&
								this._element.classList.remove(pi),
							f(this._element).off(Bn.CLICK_DISMISS),
							f.removeData(this._element, Ui),
							(this._element = null),
							(this._config = null);
					}),
					(c._getConfig = function (n) {
						return (
							(n = ce(
								{},
								xr,
								f(this._element).data(),
								typeof n == "object" && n ? n : {},
							)),
							P.typeCheckConfig(Wn, n, this.constructor.DefaultType),
							n
						);
					}),
					(c._setListeners = function () {
						var n = this;
						f(this._element).on(Bn.CLICK_DISMISS, Hr, function () {
							return n.hide(!0);
						});
					}),
					(c._close = function () {
						var n = this,
							s = function () {
								n._element.classList.add(Cr), f(n._element).trigger(Bn.HIDDEN);
							};
						if ((this._element.classList.remove(pi), this._config.animation)) {
							var d = P.getTransitionDurationFromElement(this._element);
							f(this._element).one(P.TRANSITION_END, s).emulateTransitionEnd(d);
						} else s();
					}),
					(l._jQueryInterface = function (n) {
						return this.each(function () {
							var s = f(this),
								d = s.data(Ui);
							if (
								(d ||
									((d = new l(this, typeof n == "object" && n)), s.data(Ui, d)),
								typeof n == "string")
							) {
								if (typeof d[n] > "u")
									throw new TypeError('No method named "' + n + '"');
								d[n](this);
							}
						});
					}),
					oe(l, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.3.1";
							},
						},
						{
							key: "DefaultType",
							get: function () {
								return Pr;
							},
						},
						{
							key: "Default",
							get: function () {
								return xr;
							},
						},
					]),
					l
				);
			})();
		(f.fn[Wn] = Qi._jQueryInterface),
			(f.fn[Wn].Constructor = Qi),
			(f.fn[Wn].noConflict = function () {
				return (f.fn[Wn] = jr), Qi._jQueryInterface;
			}),
			(function () {
				if (typeof f > "u")
					throw new TypeError(
						"Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.",
					);
				var l = f.fn.jquery.split(" ")[0].split(".");
				if (
					(l[0] < 2 && l[1] < 9) ||
					(l[0] === 1 && l[1] === 9 && l[2] < 1) ||
					4 <= l[0]
				)
					throw new Error(
						"Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0",
					);
			})(),
			(de.Util = P),
			(de.Alert = Wt),
			(de.Button = je),
			(de.Carousel = Qt),
			(de.Collapse = Yt),
			(de.Dropdown = nt),
			(de.Modal = y),
			(de.Popover = $e),
			(de.Scrollspy = M),
			(de.Tab = hi),
			(de.Toast = Qi),
			(de.Tooltip = xe),
			Object.defineProperty(de, "__esModule", { value: !0 });
	});
})(Ar, Ar.exports);
jQuery("document").ready(function () {
	var He = jQuery("select#breadcrumb-nav");
	He.change(function () {
		document.location.href = jQuery(this).val();
	});
	var V = jQuery("body").first();
	switch (!0) {
		case V.hasClass("single-waymark_map"):
			break;
		case V.hasClass("tax-waymark_collection"):
			break;
	}
});
window.map_first_single = function (He) {
	if (!jQuery(".map-first-sidebar").length) return !1;
	const V = jQuery(".map-first-sidebar").empty();
	let de = jQuery("<div />").addClass(
		"waymark-overlays waymark-accordion-container",
	);
	["marker", "line", "shape"].forEach((f) => {
		if (typeof He[f + "_sub_groups"] == "object") {
			const qt = Object.keys(He[f + "_sub_groups"]);
			if (!qt.length) return !1;
			let oe = jQuery("<div />")
				.addClass("waymark-type waymark-accordion-group")
				.append(jQuery(`<legend>${f.toUpperCase()}S</legend>`));
			qt.forEach((ce) => {
				const Be = He[f + "_sub_groups"][ce];
				if (typeof Be != "object" || typeof Be.getLayers != "function")
					return !1;
				let Me = jQuery("<div />")
					.addClass("waymark-group waymark-accordion-group-content")
					.append(He.build_type_heading(f, ce));
				Be.getLayers().forEach((P) => {
					if (typeof P.feature != "object") return;
					let pt = He.get_type(f, P.feature.properties.type),
						Ye = He.build_overlay_content(P.feature, f, pt);
					Me.append(
						jQuery("<div />")
							.attr("href", "#")
							.css("display", "block")
							.html(Ye)
							.addClass("waymark-overlay-content")
							.on("click", (Rt) => {
								switch ((Rt.preventDefault(), P.openPopup(), f)) {
									case "marker":
										He.map.setView(P.getLatLng(), He.map.getZoom() + 6);
										break;
									case "line":
									case "shape":
										He.map.fitBounds(P.getBounds());
										break;
								}
							}),
					),
						oe.append(Me);
				}),
					de.append(oe);
			});
		}
	}),
		V.append(de);
};
