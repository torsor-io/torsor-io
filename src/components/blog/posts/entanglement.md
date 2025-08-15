---
title: "Why does teleportation work?"
date: "2025-08-15"
author: "DW"
tags: ["Quantum Computing", "Explainer"]
excerpt: "How to invent quantum computing, CDL Bootcamp, and other announcements."
---

Teleportation is cool. You can transfer a copy of *War and Peace*
between galaxies, instantaneously, without breaking any laws—at least,
of physics. The catch is teleported data is
encoded, and to decode it, you need to send information which travels
at the comparative snail's pace of $c$.
But why does it work?
The usual textbook treatment grinds through a bunch of algebraic steps
and produces the result almost magically. A simple way to summarize
this magical result is
$$
|\psi\rangle |\Phi\rangle = \sum_{a,b=0}^1 (Z^b X^a \otimes I) |\Phi\rangle \otimes X^a Z^b |\psi\rangle,
$$
where $|\Phi\rangle = (|00\rangle+|11\rangle)/\sqrt{2}$, where we the
LHS says "Alice and Bob are entangled, and Alice has a state" while
the RHS says "Alice measures $a$ and $b$ in the Bell basis, which
teleports the state masked by $X^aZ^b$ to Bob".
But the protocol seems like a miracle.

I want to argue that this is not a miracle, but the
inevitable result of a few simple principles.
The first is *monogamy of entanglement*. Loosely speaking,
this states that maximal entanglement cannot be shared.
Less loosely, we can measure entanglement as $1$ minus the *purity*
$\mbox{Tr}[\rho^2]$, and not that entanglement satisfies the
*Coffman-Kundu-Wootters (CKW)* inequality:
$$
\sum_{k=1}^n 1 - \mbox{Tr}[\rho^2_{AB_k}] \leq 1 -
\mbox{Tr}[\rho^2_{AB}]
$$
where $B = B_1\cdots B_n$ and
$\rho_{C}=\mbox{Tr}_\text{\overline{C}}\rho$ is the reduced density
matrix on subsystem $C$.
If all the entanglement is
concentrated on one subsystem $B_k$,
$$
1 - \mbox{Tr}[\rho^2_{AB_k}] = 1 - \mbox{Tr}[\rho^2_{AB}],
$$
the the CKW inequality shows that you the state is pure on all other
subsystems, i.e. $\mbox{Tr}[\rho_{AB_\ell}^2] = 1$ for all $\ell\neq
k$.

Why is this relevant? Well, if Alice has a qubit that is maximally
entangled with Bob's qubit, then measures in the Bell basis, she now
has maximally entangled her two qubits. By monogamy of entanglement,
they cannot be entangled, *at all*, with Bob's qubit. So, we have the
first half of the teleportation protocol!
But if it isn't entangled with Alice, then what state *does* Bob have?

This is where our next principle comes in:
information is neither created nor destroyed.  At first sigh, this
seems false, since every time we observe the system, we seem to
destroy information and replace it with something else:
$$
|\psi\rangle \longmapsto |\phi_i\rangle,
$$
where the $|\phi_i\rangle$ are measurement outcomes.
But secretly, this is just more entanglement: we can write
