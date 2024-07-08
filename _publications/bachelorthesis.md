---
title: "Gaussian Linear Secret Sharing"
collection: publications
permalink: /publication/bachelorthesis
excerpt: 'This is my bachelor thesis. In this thesis we present a novel threshold secret sharing scheme over infinite algebraic structures such as \\(\mathbb{R}\\) and \\(\mathbb{Z}\\).'
date: 2024-05-08
venue: 'computer science library @ Saarland University'
---
$$\textbf{Secret sharing}$$ is a cryptographic technique in which a dealer splits a secret into multiple $$\textbf{shares}$$ and distributes those shares among participating parties. In $$\textbf{threshold secret sharing}$$, shareholders with a specified threshold of those shares can collaboratively reconstruct the secret. Parties with access to a smaller, unqualified set of shares learn little or nothing about the original secret if they collaborate.
A desirable property of secret sharing schemes is $$\textbf{linearity}$$, i.e. the secret is a linear combination of the shares.
Linear secret sharing schemes can be employed in distributed protocols that require some secret. In many distributed protocols, individual parties can compute a partial result that can be combined into the final result using the linearity property.
As of now, many established (linear) secret sharing protocols operate over finite algebraic structures like groups of prime order. This approach is sufficient for many practical problems since the size of the structure can be chosen as required.
Nevertheless, there are protocols, like distributed exponentiation for RSA using secret sharing, where schemes over some finite structure are infeasible. The parties would have to know the group size for reconstruction. However, knowing the group size would break the security of RSA. Secret sharing over infinite algebraic structures, in which no finite group size exists, is desirable, not only in a scenario like this. It is particularly interesting if the group size is unknown before a protocol's execution or has to remain secret.
In this work, we present two threshold secret sharing schemes. The first is a continuous linear secret sharing scheme over \\(\mathbb{R}\\). We prove the correctness and security of this scheme.
The second is an approximate linear scheme over \\(\mathbb{Z}\\), for which we prove correctness. Here, approximate linear means that the scheme is linear up to some minor error.
We present a novel approach to linear secret sharing over \\(\mathbb{Z}\\) and \\(\mathbb{R}\\)by hiding secrets under Gaussian distributed shares.

[Download paper here](http://nibr1609.github.io/files/thesis_cs_bsc_britz_niklas.pdf)