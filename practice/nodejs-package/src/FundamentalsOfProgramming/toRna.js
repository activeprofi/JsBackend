const transcription = (nucleotide) => {
  switch (nucleotide) {
    case 'G': return 'C';
    case 'C': return 'G';
    case 'T': return 'A';
    case 'A': return 'U';
    default: return '';
  }
};

const toRna = (dna) => {
  const iter = (counter, acc) => {
    const nucleotide = dna[counter];

    if (counter === dna.length) return acc;

    return iter(counter + 1, acc + transcription(nucleotide));
  };

  return iter(0, '');
};

export default toRna;
