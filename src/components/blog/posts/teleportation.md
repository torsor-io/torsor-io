---
title: "Why does teleportation work?"
date: "2025-08-15"
author: "DW"
tags: ["Quantum Computing", "Explainer"]
excerpt: "We give a brief explanation of why teleportation is not only
simpler than the usual textbook treatment suggests, but results
inevitably from three basic principles governing quantum mechanics and
entanglement."
---

**Introduction.** Teleportation is cool. You can transfer a copy of *War and Peace*
between galaxies, instantaneously, without breaking any laws—at least,
of physics. The catch is teleported data is
encoded, and to decode it, you need to send information which travels
at the comparative snail's pace of $c$.
But why does it work?
The usual textbook treatment grinds through a bunch of algebra
and produces the result almost magically. A simple way to summarize
this magical result is
$$
|\psi\rangle \otimes |\Phi\rangle = \sum_{a,b=0}^1 (I\otimes Z^b X^a) |\Phi\rangle \otimes X^a Z^b |\psi\rangle,
$$
where $|\Phi\rangle = (|00\rangle+|11\rangle)/\sqrt{2}$ is the
maximally entangled Bell pair. In words, the
LHS says "Alice has a special state, and is also entangled with Bob" while
the RHS says "Alice measures $a$ and $b$ in the Bell basis,
teleporting the state masked by $X^aZ^b$ to Bob".
You can check the math, but even once you confirm it,
the protocol still seems like a miracle.

**Monogamy of entanglement.** I want to argue that this is not a miracle, but the
inevitable result of a few simple principles.
The first is *monogamy of entanglement*. Loosely speaking,
this states that maximal entanglement cannot be shared.
Less loosely, we measure entanglement as $1$ minus the *purity*
$\mbox{Tr}[\rho^2]$, and note that it satisfies the
*Coffman-Kundu-Wootters (CKW)* inequality (proved in full generality by Osborne and Verstraete):
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
the CKW inequality implies that the state is pure on all other
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
for any pure state of a qubit $|\phi\rangle = U_\phi |0\rangle$ and orthogonal state
$|\phi^\perp\rangle=U_\phi |1\rangle$. On Alice's system, we can move
the $U_\phi$ over from the shared Bell state to Alice's special state
$|\psi\rangle$ when the Bell measurement is made. Thus, we can argue that, since any $U_\phi$ works and gives the
same answer, Alice may as well *erase* the information in
$|\psi\rangle$ when she measures! This also suggests that
the amplitudes don't depend on $|\psi\rangle$, and must therefore be
uniform, $|\alpha_{ab}|^2 = 1/4$. This is also true!

**Mirroring.** Since information about $|\psi\rangle$ cannot
truly be erased, it must be moved onto Bob's system. Bob's state
is no longer entangled with Alice (due to monogamy), so the most general
form it can take is $U |\psi\rangle$ for some unitary $U$. But which
$U$? To see what $U_{ab}$ should be, we note that the Bell measurement
probabilities on the initially shared pair are computed by the overlap
$$
(\langle \Phi| (I\otimes X^a Z^b) \otimes I) |\psi\rangle \otimes |\Phi\rangle.
$$
But there is the so-called "mirror" identity that makes operations
from one end of a Bell pair to the other. This is in some sense a more
basic form of *operator teleportation*:
$$
(M \otimes I) |\Phi\rangle = (I \otimes M^\top) |\Phi\rangle.
$$
This suggests that projective measurement on Alice's system applies
$(X^a Z^b)^\top = Z^b X^a$ to Bob's system!
Then $U_{ab} = Z^b X^a$ masks $|\psi\rangle$, and moreover, Bob's
systems acts as the reference system that purifies Alice, with
$|ab\rangle_\text{app} = U_{ab}|\psi\rangle$.

**Summary.** I've belaboured the underlying principles to make the
treatment a little more self-contained and (hopefully) clear, but the argument really boils down to the following:
- Alice and Bob share a maximally entangled pair.
- By monogamy, Alice’s Bell measurement disentangles Bob from Alice.
- Alice's system has no information about $|\psi\rangle$.
- By conservation, Bob must carry $|\psi\rangle$ up to a unitary.
- By mirroring, the unitary is $U_{ab} = Z^bX^a$, and Bob's system acts
  as the reference for Alice.

So, it's not a coincidence or some sort of algebraic
miracle. Teleportation is a "just" a consequence of the fact that
entanglement cannot be shared, information is conserved, and
operations can be "mirrored" from one end of a Bell pair to the other.
