// Edit these entries with your real research / publications.
// Set `url` to a paper, DOI, or project link (or leave "" for no link).
export interface ResearchItem {
  title: string;
  venue: string; // journal / conference / "Working paper" etc.
  year: string;
  authors?: string;
  summary: string;
  url?: string;
}

export const research: ResearchItem[] = [
   {
    title:
      "Mitigating the resolution–field-of-view trade-off for comprehensive microstructural characterization with advanced AI methods",
    venue: "In press",
    year: "2026",
    authors: "A. Pokhrel et al.",
    summary:
      "Applies advanced AI methods to overcome the resolution–field-of-view trade-off in pharmaceutical microstructural imaging and characterization.",
    url: "",
  },
    {
    title: "Cell-substrate friction controls biofilm development",
    venue: "bioRxiv (preprint)",
    year: "2025",
    authors: "A. R. Pokhrel et al.",
    summary:
      "Preprint examining how friction between cells and their substrate shapes the development and morphology of bacterial biofilms.",
    url: "https://www.biorxiv.org/content/10.1101/2025.07.11.664457v1",
  },
  {
    title: "The biophysical basis of bacterial colony growth",
    venue: "Nature Physics",
    year: "2024",
    authors: "A. R. Pokhrel, G. Steinbach, A. Krueger, T. C. Day, et al.",
    summary:
      "First-author study combining interferometry and confocal microscopy to show how colony geometry governs the expansion of bacterial biofilms.",
    url: "https://www.nature.com/articles/s41567-024-02572-3",
  },
 

  {
    title:
      "Varied solutions to multicellularity: the biophysical and evolutionary consequences of diverse intercellular bonds",
    venue: "Biophysics Reviews",
    year: "2022",
    authors: "A. R. Pokhrel et al.",
    summary:
      "Review of how diverse intercellular bonds shape the biophysics and evolution of multicellular life.",
    url: "https://pubs.aip.org/aip/bpr/article/3/2/021305/2835543",
  },
  {
    title: "Collective gradient sensing in fish schools",
    venue: "Scientific Reports",
    year: "2018",
    authors: "A. R. Pokhrel et al.",
    summary:
      "Study of how fish schools collectively sense and respond to environmental gradients as a group.",
    url: "https://www.nature.com/articles/s41598-018-26037-9",
  },
];

// Interests shown as chips on the home page.
export const interests: string[] = [
  "Drug delivery and formulation",
  "Life-sciences investing","Venture Capital",
  "Pharmaceutical Imaging & microstructure",
  "AI / ML for scientific imaging",
  "Scientific & technical diligence",
  "Generative AI",
];
