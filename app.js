// Parsing strings to DOM trees

// const xmlStr =
//   "<produit><title>Mens Cotton Jacket</title><category>men's clothing</category><price>66.7</price></produit>";
// const parser = new DOMParser();
// const doc = parser.parseFromString(xmlStr, "application/xml");

// // print the name of the root element or error message
// const errorNode = doc.querySelector("parsererror");
// if (errorNode) {
//   console.log("error while parsing");
// } else {
//   console.log(doc.querySelector("title").innerHTML);
// }

const downloadXML = () => {
  fetch(
    "https://doc-0o-80-docs.googleusercontent.com/docs/securesc/72g13jr51p7bhfsvnihuqpta3e3clj0n/0dinqgum699j1u2sv3j7rf21nbfomko2/1669965225000/14350561898999691876/14350561898999691876/1tVbSaqZnzasutSwp7CPIbfpvaO-gQlrC?e=download&ax=AEKYgyQB1zsP1QgBr-Dyrq0Xt6ts5suXfrAPW06fqMJdBn49LyKMOYpO6vJZJ1us_Jnli3XD_BHYHt4ozGH4eSAxXnctkyBoycxsAPAUDRTh11FhDXWRMFBO-EWeSg1ckpNda-5YJDfMC-3rRmxxlWiv-yrk8xJOST_9HDZr7ApOYewxgGCRULkCN-O85X_m5qrgsucWU9xV4FlM_WkMSzC342V1RwGhQic76LdcqybZSv4mrji7s_34MTZgT_6vJbXuC1BDhRIXV5UL8LGXeUkCec99MWPPAv-OnZONYWZnPmeuT7G9zCyJYw64TxR9bM69EYpmY9FIuuQWaj6fRLojIvUFKNQCBr-Orc1DTj6kDF7Oxsk1S773bpLNO5VeGw5L2SgZCp08zHryP1wnzelY8Q-R0FR8GS-V9nYCQsMSjmC7I6WRDVzvgF5Wy9iIa2GR-ls2QVx8ZFCEJgDiFI-Fzrb56NRtTgPMV3rW--viDstP5S8gn0KwubnLPRJaTHvznagn6mlwOYZ6dWp4P51IBX8u8D0ViIPc0pUCGJ0MHxeFtwdywDhNdl1tgV0kUOKuZ3zdnaVtOPXiaPssjx5vZmr-3FuuZrs6-K48UlL2QgyqT11Y-jAXREhbj6XHgmuQ5s6D_BSEORXy2zpaV45n4yAeClLhRWeYgIm9L9PpfQ9rQqDBo18U8UXu0w5DBgZ6cWHl_tl8TZI0zfpPsrIlUxsAn18k_UHKem-0DUAizSIz8hRdTYZvEqaCJubLDDB9TzztKEvHY4JaT7fYtc_kGlV-SdKTHa3ner1tbQq1t5CsD7rCYt2LZ_d7kqOkOPJ19VvEohTamzBcWRxmF1Eyzd66pRan6lcy_I1SbCID6DB4DIlwVZKrS_Q9JSvlhCBi2f8v&uuid=802d757c-ea46-4f2b-8991-4ca1b6e77dba&authuser=0&nonce=mrrfj9fh8d4oo&user=14350561898999691876&hash=jibie3ar30ruvml6cf4c4murescpp7nl"
  )
    .then((response) => response.downloadXML)
    .then((data) => console.log(data))
    .catch((error) => console.log("erreur download", error.message));
};

downloadXML();
