// Edit these entries with your real research / publications.
// Set `url` to a paper, DOI, or project link (or leave "" for no link).
export interface ResearchItem {
  title: string;
  venue: string; // journal / conference / "Submitted" etc.
  year: string;
  authors?: string;
  summary: string;
  url?: string;
  featured?: boolean; // shown on the home page
}

export const research: ResearchItem[] = [
  {
    title:
      "Mitigating the resolution–field-of-view trade-off for comprehensive microstructural characterization with advanced AI methods",
    venue: "AAPS PharmSciTech",
    year: "2026",
    authors: "A. R. Pokhrel, J. Das, B. Ke, L. Ma, S. Zhang, M. Korang-Yeboah",
    summary:
      "First-author paper with collaborators from the FDA Office of Pharmaceutical Quality. Uses AI methods to get around the trade-off between imaging resolution and field of view when characterizing drug product microstructure.",
    url: "https://doi.org/10.1208/s12249-026-03558-5",
    featured: true,
  },
  {
    title:
      "Structural evaluation of spray-freeze-dried protein powders by quantitative X-ray imaging and machine learning",
    venue: "Submitted",
    year: "2026",
    authors: "K. S. Artle, A. Pokhrel, A. G. Clark, C. Patil, Y. Huang, L. Qu, S. Zhang, Q. Zhou",
    summary:
      "Quantitative X-ray imaging and machine learning applied to spray-freeze-dried protein powders for inhaled biologics.",
    url: "",
  },
  {
    title: "Cell-substrate friction controls biofilm development",
    venue: "bioRxiv (preprint)",
    year: "2025",
    authors: "A. R. Pokhrel, R. Copeland, M. Hejri, T. E. R. Belpaire, G. Steinbach, S. L. Ng, B. K. Hammer, P. J. Yunker",
    summary:
      "How friction between cells and their substrate shapes the development and morphology of bacterial biofilms.",
    url: "https://www.biorxiv.org/content/10.1101/2025.07.11.664457v1",
  },
  {
    title: "The biophysical basis of bacterial colony growth",
    venue: "Nature Physics",
    year: "2024",
    authors: "A. R. Pokhrel, G. Steinbach, A. Krueger, T. C. Day, et al.",
    summary:
      "First-author study combining interferometry and confocal microscopy to show how colony geometry governs the expansion of bacterial biofilms. Featured by Quanta Magazine.",
    url: "https://www.nature.com/articles/s41567-024-02572-3",
    featured: true,
  },
  {
    title:
      "Varied solutions to multicellularity: the biophysical and evolutionary consequences of diverse intercellular bonds",
    venue: "Biophysics Reviews",
    year: "2022",
    authors: "T. C. Day, P. Márquez-Zacarías, P. Bravo, A. R. Pokhrel, K. A. MacGillivray, W. C. Ratcliff, P. J. Yunker",
    summary:
      "Review of how diverse intercellular bonds shape the biophysics and evolution of multicellular life.",
    url: "https://pubs.aip.org/aip/bpr/article/3/2/021305/2835543",
  },
  {
    title: "Collective gradient sensing in fish schools",
    venue: "Scientific Reports",
    year: "2018",
    authors: "J. G. Puckett, A. R. Pokhrel, J. A. Giannini",
    summary:
      "How fish schools collectively sense and respond to environmental gradients as a group.",
    url: "https://www.nature.com/articles/s41598-018-26037-9",
  },
];

// Conference posters, shown on the Research page.
export interface PosterItem {
  title: string;
  event: string;
  role: string;
  summary: string;
}

export const posters: PosterItem[] = [
  {
    title:
      "Optical coherence tomography as a real-time tool to monitor sublimation properties of lyophilized cakes",
    event: "AAPS PharmSci 360 · San Antonio · Nov 2025",
    role: "Presenting author",
    summary:
      "Optical coherence tomography as a way to follow sublimation in lyophilized cakes in real time.",
  },
  {
    title: "Tomographic characterization of alginate foam scaffolds for 3D cell growth",
    event: "AAPS PharmSci 360 · San Antonio · Nov 2025",
    role: "Co-author, with Roquette",
    summary:
      "Tomographic imaging of alginate foam scaffolds for 3D cell culture, in collaboration with Roquette scientists.",
  },
];

// Focus areas shown as chips on the home page.
export const focusAreas: string[] = [
  "Scientific partnerships & business development",
  "R&D program leadership",
  "Drug delivery: long-acting injectables, peptides, biologics",
  "Pharmaceutical imaging & microstructure",
  "AI / ML for drug development",
  "Evaluating new technologies for drug development",
];
