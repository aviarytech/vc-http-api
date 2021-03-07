module.exports = {
  name: "Aviary Tech",
  issueCredentialConfiguration: [
    {
      id: "did:web:api.aviary.one",
      endpoint: "https://api.aviary.one/av1/vcs/issue/credentials",
      proofType: "Ed25519Signature2018",
      options: {
        assertionMethod:
          "did:web:api.aviary.one#576058219bcfb696421d75314396ae4c90ab8932d2dcecb0770329644865b547",
      },
    },
    // {
    //   id: "did:web:api.aviary.one",
    //   endpoint: "https://api.aviary.one/av1/vcs/issue/credentials",
    //   proofType: "BbsBlsSignature2020",
    //   options: {
    //     assertionMethod:
    //       "did:web:api.aviary.one#43845f8a0342c66697cf0a30e1c81c0943053a1dd3289fef94512213dd28738a",
    //   },
    // },
  ],
  verifyCredentialConfiguration: {
    endpoint: "https://api.aviary.one/av1/vcs/verify/credentials",
    didMethodsSupported: ["did:web:", "did:key:"],
    linkedDataProofSuitesSupported: ["Ed25519Signature2018", "BbsBlsSignature2020"],
  },
  verifyPresentationConfiguration: {
    endpoint: "https://api.aviary.one/av1/vcs/verify/presentations",
    didMethodsSupported: ["did:web:"],
    linkedDataProofSuitesSupported: ["Ed25519Signature2018"],
  },
  credentials: require("../__fixtures__/credentials"),
  verifiableCredentials: require("../__fixtures__/verifiableCredentials"),
  verifiablePresentations: require("../__fixtures__/verifiablePresentations"),
};
