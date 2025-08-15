// This file is auto-generated. Do not edit directly.




export const blogPosts = [
  {
    "id": "entanglement",
    "title": "Why does teleportation work?",
    "date": "2025-08-15",
    "author": "DW",
    "tags": [
      "Quantum Computing",
      "Explainer"
    ],
    "excerpt": "How to invent quantum computing, CDL Bootcamp, and other announcements.",
    "content": `<p><strong>Introduction.</strong> Teleportation is cool. You can transfer a copy of <em>War and Peace</em>\nbetween galaxies, instantaneously, without breaking any laws—at least,\nof physics. The catch is teleported data is\nencoded, and to decode it, you need to send information which travels\nat the comparative snail’s pace of $c$.\nBut why does it work?\nThe usual textbook treatment grinds through a bunch of algebraic steps\nand produces the result almost magically. A simple way to summarize\nthis magical result is\n$$\n|\\psi\\rangle \\otimes |\\Phi\\rangle = \\sum_{a,b=0}^1 (I\\otimes Z^b X^a) |\\Phi\\rangle \\otimes X^a Z^b |\\psi\\rangle,\n$$\nwhere $|\\Phi\\rangle = (|00\\rangle+|11\\rangle)/\\sqrt{2}$. In words, the\nLHS says “Alice and Bob are entangled, and Alice has a state” while\nthe RHS says “Alice measures $a$ and $b$ in the Bell basis, which\nteleports the state masked by $X^aZ^b$ to Bob”.\nYou can check the algebra, but even once you confirm that it works,\nthe protocol still seems like a miracle.</p>\n<p><strong>Monogamy of entanglement.</strong> I want to argue that this is not a miracle, but the\ninevitable result of a few simple principles.\nThe first is <em>monogamy of entanglement</em>. Loosely speaking,\nthis states that maximal entanglement cannot be shared.\nLess loosely, we measure entanglement as $1$ minus the <em>purity</em>\n$\\mbox{Tr}[\\rho^2]$, and note that entanglement satisfies the\n<em>Coffman-Kundu-Wootters (CKW)</em> inequality:\n$$\n\\sum_{k=1}^n 1 - \\mbox{Tr}[\\rho^2_{AB_k}] \\leq 1 -\n\\mbox{Tr}[\\rho^2_{AB}]\n$$\nwhere $B = B_1\\cdots B_n$ and $\\rho_{C}$ is the reduced density\nmatrix on subsystem $C$.\nIf all the entanglement is\nconcentrated on one subsystem $B_k$, so\n$$\n1 - \\mbox{Tr}[\\rho^2_{AB_k}] = 1 - \\mbox{Tr}[\\rho^2_{AB}],\n$$\nthe CKW inequality implies you the state is pure on all other\nsubsystems, i.e. $\\mbox{Tr}[\\rho_{AB_\\ell}^2] = 1$ for all $\\ell\\neq\nk$. This is monogamy in action!</p>\n<p>Why is this relevant? Well, if Alice has a qubit that is maximally\nentangled with Bob’s qubit, then measures in the Bell basis, she now\nhas maximally entangled her two qubits:\n$$\nA_1, A_2 \\leftrightarrow B \\quad \\overset{\\text{Bell measurement}}{\\Longrightarrow} \\quad A_1\n\\leftrightarrow A_2, B.\n$$\nBy monogamy of entanglement,\nthey cannot be entangled, <em>at all</em>, with Bob’s qubit. So, we have the\nfirst half of the teleportation protocol!\nBut if it isn’t entangled with Alice, then what state <em>does</em> Bob have? This is where our next principle comes in.</p>\n<p><strong>Conservation of information.</strong> A basic principle of quantum\nmechanics is that information is neither created nor destroyed. At first sight, this\nseems false, since every time we observe the system, we seem to\ndestroy information and replace it with something else:\n$$\n|\\psi\\rangle \\longmapsto |\\phi_\\lambda\\rangle,\n$$\nwhere the $|\\phi_i\\rangle$ are measurement outcomes.\nBut the reality is more interesting. The combined system and measuring\napparatus start in state $|\\psi\\rangle \\otimes |0\\rangle$, and evolve\nunitarily into a linear combination which entangles them:\n$$\nU |\\psi\\rangle \\otimes |0\\rangle_\\text{app} = \\sum_\\lambda \\alpha_\\lambda\n|\\phi_\\lambda\\rangle \\otimes |\\lambda\\rangle_\\text{app}.\n$$\nIn our case, Alice makes a Bell measurement. On the combined system\nof Alice’s qubits and measuring apparatus, the post-measurement state is\n$$\n\\sum_{a, b=0}^1 \\alpha_{ab}(I\\otimes Z^b X^a) |\\Phi\\rangle \\otimes |ab\\rangle_\\text{app}.\n$$\nThe question is whether any information about the state $|\\psi\\rangle$\ncould live in the coefficients $\\alpha_{ab}$.</p>\n<p>There’s a cute way to\ndeduce that <em>no information</em> is contained in them. You may recall that\nthe maximally entangled state is basis independent, i.e.\n$$\n|\\Phi\\rangle  = \\frac{1}{\\sqrt{2}} (|\\phi\\rangle \\otimes |\\phi\\rangle + |\\phi^\\perp\\rangle \\otimes |\\phi^\\perp\\rangle),\n$$\nfor any pure state of a qubit $|\\phi\\rangle = U_\\phi |0\\rangle$ and an orthogonal state\n$|\\phi^\\perp\\rangle=U_\\phi |1\\rangle$. On Alice’s system, we can move\nthe $U_\\phi$ over from the shared Bell state to Alice’s special state\n$|\\psi\\rangle$ when the Bell measurement is made. Thus, we can argue that, since any $U_\\phi$ works and gives the\nsame answer, Alice may as well <em>erase</em> the information in\n$|\\psi\\rangle$ when she measures! This also suggests that\nthe amplitudes don’t depend on $|\\psi\\rangle$, and must therefore be\nuniform, $|\\alpha_{ab}|^2 = 1/4$. This is also true!</p>\n<p><strong>Time travel.</strong> Since information about $|\\psi\\rangle$ cannot\ntruly be erased, it must be moved onto Bob’s system. Since Bob’s state\nis no longer entangled with Alice (due to monogamy of entanglement),\nthe most general form it can take is $U |\\psi\\rangle$\nfor some unitary $U$. To figure what the unitary is, we use our last principle:</p>`,
    "imageImports": ""
  },
  {
    "id": "history-rocks",
    "title": "A Short History of Rocks, etc.",
    "date": "2025-06-15",
    "author": "DW",
    "tags": [
      "Announcements",
      "Quantum Computing",
      "Venture"
    ],
    "excerpt": "How to invent quantum computing, CDL Bootcamp, and other announcements.",
    "content": `<p>After four months of intentional quiet, we end our radio silence with a few announcements:</p>\n<ol>\n<li><a href=\"https://arxiv.org/abs/2503.00005\"><em>A Short History of Rocks: or, How to Invent Quantum Computing</em></a> hit the arxiv in February. It starts with an unconventional history of rocks–from the Pleistocene through Leibniz, Boole and Shannon to the Manhattan project–and ends with an alternate timeline in which John von Neumann discovers quantum computing, 35 years before Feynman! Along the way, we leave a trail of breadcrumbs for those wishing to follow von Neumann’s (fictitious) footsteps. Check it out if you like historical science fiction, e.g. <em>The Difference Engine</em> or <em>The Baroque Cycle</em>.</li>\n<li>Torsor Labs was selected (along with 38 other startups) for the CDL Quantum 2025 Bootcamp, part of CDL’s intake for the 2025 <a href=\"https://creativedestructionlab.com/streams/quantum/\">Quantum stream</a>. The first week has primarily focused on business “basics”, though “basic” apparently includes <a href=\"https://en.wikipedia.org/wiki/Quasi-rent\">appropriable quasi-rents</a> and Bayesian entrepreneurship, courtesy of <a href=\"https://www.kevinbryanecon.com/\">Kevin Bryan</a>. Fun stuff!</li>\n<li>Last but not least, we’ve been following the trail of breadcrumbs from Leibniz to von Neumann ourselves, and will present the results—an entirely new way of doing quantum computing—some time in the next few weeks. Stay tuned!</li>\n</ol>`,
    "imageImports": ""
  },
  {
    "id": "Welcome",
    "title": "Welcome",
    "date": "2025-02-17",
    "author": "David Wakeham (DW)",
    "tags": [
      "Announcements",
      "Philosophy"
    ],
    "excerpt": "A brief introduction to Torsor Labs.",
    "content": `<p>Reality has symmetries, but to find them, we need to draw the right maps. This insight lies at the heart of what mathematicians call a “torsor”, coming from the French <em>torseur</em> for “twister”. John Baez has a <a href=\"https://math.ucr.edu/home/baez/torsors.html\">nice explainer</a>, but the basic idea is simple: it looks like a group, but without the labels, coordinates, or landmarks a group usually comes with. It’s a bit like a mathematical version of the map/territory distinction! I think this is how research works. The universe is full of pattern and structure, but we need to map it out ourselves. Science is cartography.</p>\n<p>The “twister” part comes from the fact that torsors allow the map to <em>change</em>. A familar example is the globe revolving on its axis; at each point in time, it’s a sphere, but from moment to moment the description <em>twists</em>. This idea of shifting, connected patterns of symmetry is another basic phenomenon of research. Insights from one realm can often be ported directly to another, provided we draw the right maps and think big. So, “torsor” neatly packages some crucial insights into the nature of reality and ways of understanding it.</p>\n<p>At <strong>Torsor Labs</strong>, we’ll be drawing these maps. We hope to solve real problems, but we’ll let the maps dictate the problems rather than the other way round. Our initial focus is on a <a href=\"https://torsor.io/#yaw\">new high-level approach</a> to quantum programming, but that’s just the beginning. If you’re interested in <a href=\"https://torsor.io/#community\">joining our community</a> or <a href=\"https://torsor.io/#consulting\">borrowing our brains</a>, we’d love to hear from you.</p>\n<p>Welcome to Torsor Labs. Reality is beautifully twisted.</p>`,
    "imageImports": ""
  }
];
