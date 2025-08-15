---
title: "Why does teleportation work?"
date: "2025-08-15"
author: "DW"
tags: ["Quantum Computing", "Explainer"]
excerpt: "How to invent quantum computing, CDL Bootcamp, and other announcements."
---

**Introduction.** Teleportation is cool. You can transfer a copy of *War and Peace*
between galaxies, instantaneously, without breaking any laws—at least,
of physics. The catch is teleported data is
encoded, and to decode it, you need to send information which travels
at the comparative snail's pace of $c$.
But why does it work?
The usual textbook treatment grinds through a bunch of algebraic steps
and produces the result almost magically. A simple way to summarize
this magical result is
$$
|\psi\rangle \otimes |\Phi\rangle = \sum_{a,b=0}^1 (I\otimes Z^b X^a) |\Phi\rangle \otimes X^a Z^b |\psi\rangle,
$$
where $|\Phi\rangle = (|00\rangle+|11\rangle)/\sqrt{2}$. In words, the
LHS says "Alice and Bob are entangled, and Alice has a state" while
the RHS says "Alice measures $a$ and $b$ in the Bell basis, which
teleports the state masked by $X^aZ^b$ to Bob".
You can check the algebra, but even once you confirm that it works,
the protocol still seems like a miracle.

**Monogamy of entanglement.** I want to argue that this is not a miracle, but the
inevitable result of a few simple principles.
The first is *monogamy of entanglement*. Loosely speaking,
this states that maximal entanglement cannot be shared.
Less loosely, we measure entanglement as $1$ minus the *purity*
$\mbox{Tr}[\rho^2]$, and note that entanglement satisfies the
*Coffman-Kundu-Wootters (CKW)* inequality:
$$
\sum_{k=1}^n 1 - \mbox{Tr}[\rho^2_{AB_k}] \leq 1 -
\mbox{Tr}[\rho^2_{AB}]
$$
where $B = B_1\cdots B_n$ and $\rho_{C}$ is the reduced density
matrix on subsystem $C$.
If all the entanglement is
concentrated on one subsystem $B_k$, so
$$
1 - \mbox{Tr}[\rho^2_{AB_k}] = 1 - \mbox{Tr}[\rho^2_{AB}],
$$
the CKW inequality implies you the state is pure on all other
subsystems, i.e. $\mbox{Tr}[\rho_{AB_\ell}^2] = 1$ for all $\ell\neq
k$. This is monogamy in action!

Why is this relevant? Well, if Alice has a qubit that is maximally
entangled with Bob's qubit, then measures in the Bell basis, she now
has maximally entangled her two qubits:
$$
A_1, A_2 \leftrightarrow B \quad \overset{\text{Bell measurement}}{\Longrightarrow} \quad A_1
\leftrightarrow A_2, B.
$$
By monogamy of entanglement,
they cannot be entangled, *at all*, with Bob's qubit. So, we have the
first half of the teleportation protocol!
But if it isn't entangled with Alice, then what state *does* Bob have? This is where our next principle comes in.

**Conservation of information.** A basic principle of quantum
mechanics is that information is neither created nor destroyed. At first sight, this
seems false, since every time we observe the system, we seem to
destroy information and replace it with something else:
$$
|\psi\rangle \longmapsto |\phi_\lambda\rangle,
$$
where the $|\phi_i\rangle$ are measurement outcomes.
But the reality is more interesting. The combined system and measuring
apparatus start in state $|\psi\rangle \otimes |0\rangle$, and evolve
unitarily into a linear combination which entangles them:
$$
U |\psi\rangle \otimes |0\rangle_\text{app} = \sum_\lambda \alpha_\lambda
|\phi_\lambda\rangle \otimes |\lambda\rangle_\text{app}.
$$
In our case, Alice makes a Bell measurement. On the combined system
of Alice's qubits and measuring apparatus, the post-measurement state is
$$
\sum_{a, b=0}^1 \alpha_{ab}(I\otimes Z^b X^a) |\Phi\rangle \otimes |ab\rangle_\text{app}.
$$
The question is whether any information about the state $|\psi\rangle$
could live in the coefficients $\alpha_{ab}$.

There's a cute way to
deduce that *no information* is contained in them. You may recall that
the maximally entangled state is basis independent, i.e.
$$
|\Phi\rangle  = \frac{1}{\sqrt{2}} (|\phi\rangle \otimes |\phi\rangle + |\phi^\perp\rangle \otimes |\phi^\perp\rangle),
$$
for any pure state of a qubit $|\phi\rangle = U_\phi |0\rangle$ and an orthogonal state
$|\phi^\perp\rangle=U_\phi |1\rangle$. On Alice's system, we can move
the $U_\phi$ over from the shared Bell state to Alice's special state
$|\psi\rangle$ when the Bell measurement is made. Thus, we can argue that, since any $U_\phi$ works and gives the
same answer, Alice may as well *erase* the information in
$|\psi\rangle$ when she measures! This also suggests that
the amplitudes don't depend on $|\psi\rangle$, and must therefore be
uniform, $|\alpha_{ab}|^2 = 1/4$. This is also true!

**Time travel.** Since information about $|\psi\rangle$ cannot
truly be erased, it must be moved onto Bob's system. Since Bob's state
is no longer entangled with Alice (due to monogamy of entanglement),
the most general form it can take is $U |\psi\rangle$
for some unitary $U$. To figure what the unitary is, we use our last principle:
