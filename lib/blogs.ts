import type { Publication } from './publications';

export interface BlogSection {
  heading?: string;
  body: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  date: string;
  excerpt: string;
  content: BlogSection[];
  paper: Publication;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'surrogate-assisted-differential-evolution',
    title: 'Cutting the Cost of Expensive Optimization with Surrogate-Assisted Differential Evolution',
    subtitle: 'A three-stage recipe for problems where every function evaluation is a luxury',
    tags: ['Evolutionary Computation', 'Surrogate Modeling', 'Optimization'],
    date: '2025',
    excerpt:
      'Many real-world optimization problems come with a heavy price tag per evaluation — think expensive simulations or costly physical experiments. This post breaks down our three-stage surrogate-assisted differential evolution, which learns cheap models of the fitness landscape to find high-quality solutions while spending far fewer expensive evaluations.',
    content: [
      {
        heading: 'The expensive optimization problem',
        body: [
          'Classical evolutionary algorithms are brilliantly sample-hungry: they typically need thousands — sometimes tens of thousands — of function evaluations to converge. That is fine when the objective is a cheap mathematical formula, but it breaks down the moment each evaluation means running a computational fluid dynamics simulation, a finite-element analysis, or a physical prototype test.',
          'In those settings the evaluation budget is the real constraint, not compute time. An optimizer that wastes evaluations exploring blindly is simply not usable, no matter how clever its operators are.',
        ],
      },
      {
        heading: 'Where surrogate models come in',
        body: [
          'The standard answer is a surrogate model: a cheap machine-learning approximation of the true objective, built from the evaluations already performed. Instead of asking the expensive function for guidance at every step, the optimizer consults the surrogate — and only occasionally checks its predictions against reality.',
          'The hard part is balancing exploration of the true landscape with exploitation of the model. Trust a wrong surrogate too much and the search collapses toward a phantom optimum; ignore it and the savings evaporate.',
        ],
      },
      {
        heading: 'A three-stage strategy',
        body: [
          'Our approach splits the run into three clearly defined stages, each with its own job. In the first stage, a differential-evolution variant explores broadly using the surrogate, covering the search space cheaply. In the second stage, the search narrows onto the most promising regions identified so far, refining the model there. In the final stage, we switch to the exact objective function to polish the solution and guarantee it is genuinely optimal — not just good according to a possibly misleading approximation.',
          'Sequencing the budget this way means the expensive evaluations are spent where they matter most: near the end, confirming and sharpening a candidate that the surrogate has already positioned close to the optimum.',
        ],
      },
      {
        heading: 'Why it matters',
        body: [
          'The result is a practical toolkit for simulation-heavy engineering: high solution quality at a small fraction of the evaluation budget a plain evolutionary algorithm would need. For practitioners wrestling with expensive black-box problems, the three-stage recipe is a straightforward blueprint — learn cheap, search broad, then confirm with the truth.',
        ],
      },
    ],
    paper: {
      title: 'Efficient three-stage surrogate-assisted differential evolution for expensive optimization problems',
      authors: 'Abhishek Kumar, Swagatam Das, Václav Snášel',
      venue: 'Swarm and Evolutionary Computation',
      year: '2025',
      doi: '10.1016/j.swevo.2025.102093',
    },
  },
  {
    slug: 'efficient-differential-grouping',
    title: 'Scaling Up Optimization: Decomposing Large Problems with Differential Grouping',
    subtitle: 'Divide and conquer for problems with thousands of decision variables',
    tags: ['Large-Scale Optimization', 'Decomposition', 'Differential Evolution'],
    date: '2024',
    excerpt:
      'When a problem has thousands of variables, the search space is overwhelming. Differential grouping splits large problems into smaller, near-independent subproblems so an optimizer can conquer them one at a time — and this work makes the decomposition step itself dramatically faster.',
    content: [
      {
        heading: 'The curse of many variables',
        body: [
          'An optimization problem with only 100 variables is already daunting; with thousands, the search space is effectively infinite from the perspective of any optimizer. Evolutionary algorithms, which excel on small and medium problems, quickly drown in the sheer volume of possibilities as dimensionality climbs.',
        ],
      },
      {
        heading: 'Divide and conquer by interactions',
        body: [
          'The key insight of cooperative coevolution is that most large problems are not fully coupled. Some variables interact strongly with each other; others are nearly independent. If you can identify those groups, you can optimize each group separately and recombine the results — turning one hopelessly large problem into several manageable ones.',
          'The challenge is that detecting which variables actually interact is itself expensive, because it requires probing the objective function.',
        ],
      },
      {
        heading: 'An efficient grouping scheme',
        body: [
          'Our contribution is an efficient differential grouping algorithm that detects variable interactions using far fewer function evaluations than prior techniques. Instead of spending a large slice of the total budget on the decomposition step, our scheme keeps the grouping itself cheap, leaving more of the budget for actual optimization.',
        ],
      },
      {
        heading: 'Results and impact',
        body: [
          'On standard large-scale benchmark problems, the approach groups variables both faster and more accurately, which translates directly into better final solutions once the cooperative optimizer runs. For anyone facing a real optimization problem with thousands of variables — machine-learning hyperparameter tuning, network design, scheduling — this is the divide-and-conquer scaffold that makes the problem tractable at all.',
        ],
      },
    ],
    paper: {
      title: 'An Efficient Differential Grouping Algorithm for Large-Scale Global Optimization',
      authors: 'Kumar, Abhishek, Das, Swagatam, Mallipeddi, Rammohan',
      venue: 'IEEE Transactions on Evolutionary Computation',
      year: '2024',
      doi: '10.1109/TEVC.2022.3230070',
    },
  },
  {
    slug: 'contrastive-clustering',
    title: 'Fixing Two Hidden Failure Modes of Contrastive Clustering',
    subtitle: 'Triplet supervision and InfoNCE losses against class collision and representation collapse',
    tags: ['Deep Learning', 'Clustering', 'Representation Learning'],
    date: '2026',
    excerpt:
      'Contrastive clustering learns clusters directly from data without labels, but two silent failures — class collision and representation collapse — can quietly ruin the learned features. This work targets both with pseudo-supervised triplets and InfoNCE-style losses.',
    content: [
      {
        heading: 'Learning to cluster without labels',
        body: [
          'Contrastive learning has rewritten what is possible without labels: pull augmented views of the same sample together in embedding space while pushing different samples apart. Recent contrastive clustering methods go a step further and jointly learn the embedding and the cluster assignments, so the grouping emerges from the data itself rather than from hand-labeled examples.',
        ],
      },
      {
        heading: 'Class collision',
        body: [
          'The first silent failure is class collision. When clusters form in the embedding space, samples from genuinely different classes can end up assigned to the same cluster. The model never receives a label telling it these are distinct, so nothing in the loss actively discourages the collision — and the quality of the recovered clusters quietly degrades.',
        ],
      },
      {
        heading: 'Representation collapse',
        body: [
          'The second failure is representation collapse, where the model discovers an even lazier shortcut: map every input to the same constant vector. The loss seems satisfied because everything is trivially consistent, but the representation carries zero information about the data. A clustering method that collapses has learned nothing at all.',
        ],
      },
      {
        heading: 'Our fixes',
        body: [
          'We tackle both problems in one framework. A pseudo-supervised triplet loss takes the most confident cluster assignments and treats them as soft supervision, actively separating samples from different predicted clusters — which suppresses class collisions before they solidify. Meanwhile, InfoNCE-style instance-level losses keep every sample distinguishable from its peers, denying the model the easy path to a collapsed, constant representation.',
          'Because the two losses operate at complementary levels of granularity — cluster level and instance level — they reinforce each other instead of fighting.',
        ],
      },
      {
        heading: 'Impact',
        body: [
          'The combined framework produces more stable training and markedly better clustering accuracy on standard benchmarks. For the field, it is a concrete demonstration that the two most common failure modes of contrastive clustering are not inevitable — they are design bugs, and both have a fix.',
        ],
      },
    ],
    paper: {
      title: 'Addressing class collision and representation collapse in contrastive clustering via pseudo-supervised triplet and InfoNCE losses',
      authors: 'Kumar, A., Lee, D.-G.',
      venue: 'Applied Soft Computing',
      year: '2026',
      doi: '10.1016/j.asoc.2026.115751',
    },
  },
  {
    slug: 'gridshift-mode-seeking',
    title: 'GridShift: A Faster Mode-Seeking Algorithm for Images',
    subtitle: 'Finding the peaks of a density to segment and track, on a grid',
    tags: ['Computer Vision', 'Image Segmentation', 'Object Tracking'],
    date: '2022',
    excerpt:
      'Mean-shift finds the modes of a density for segmentation and tracking, but it can be slow. GridShift makes mode-seeking dramatically faster by restricting the search to a coarse grid — without giving up accuracy.',
    content: [
      {
        heading: 'The beauty of mode seeking',
        body: [
          'A surprising amount of computer vision can be cast as finding the peaks of a probability density. Image segmentation becomes: group pixels that flow toward the same density peak in feature space. Object tracking becomes: follow the peak as it moves between frames. Mean-shift formalized exactly this — iterate each point toward the local maximum of a kernel density estimate until convergence.',
        ],
      },
      {
        heading: 'Why mean-shift is slow',
        body: [
          'The trouble is that every mean-shift iteration searches for neighbors across the entire dataset, and with high-dimensional features — color, texture, spatial position — those searches get expensive fast. On a large image, the algorithm spends most of its time just looking for neighbors, not making progress.',
        ],
      },
      {
        heading: "GridShift's idea",
        body: [
          'GridShift keeps the elegant mode-seeking philosophy but changes the bookkeeping. Instead of moving points through a continuous space, it quantizes candidate locations onto a coarse grid and updates whole grid-cell assignments at once. Convergence to a grid-resolved mode is reached in a small number of cheap updates, so the overall runtime drops by a large margin while the detected modes stay essentially the same.',
        ],
      },
      {
        heading: 'Results',
        body: [
          'Evaluated on segmentation and tracking benchmarks, GridShift matches the quality of classic mean-shift while running in a fraction of the time — a practical win for real-time vision systems that could never afford mean-shift’s cost per frame.',
        ],
      },
    ],
    paper: {
      title: 'GridShift: A Faster Mode-seeking Algorithm for Image Segmentation and Object Tracking',
      authors: 'Kumar, Abhishek, Ajani, Oladayo S., Das, Swagatam, Mallipeddi, Rammohan',
      venue: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR)',
      year: '2022',
      doi: '10.1109/CVPR52688.2022.00796',
    },
  },
  {
    slug: 'inversion-free-power-flow',
    title: 'Power Flow Without Matrix Inversion: Robust Solvers for Islanded Microgrids',
    subtitle: 'Numerically robust load-flow for microgrids operating off the main grid',
    tags: ['Power Systems', 'Microgrids', 'Load Flow'],
    date: '2021',
    excerpt:
      'Islanded microgrids lack the main grid’s voltage reference, so conventional power-flow tools fail. This post explains our inversion-free, robust load-flow algorithm that keeps microgrid power-flow analysis reliable.',
    content: [
      {
        heading: 'Why islanded microgrids are tricky',
        body: [
          'In a grid-connected network there is always a slack bus — the main grid — that fixes the voltage and absorbs the power imbalance. An islanded microgrid has no such luxury: a handful of droop-controlled distributed generators must collectively set the frequency and voltage while sharing the load. The whole operating point is defined differently, and off-the-shelf power-flow software, built around the grid-connected assumption, simply does not converge.',
        ],
      },
      {
        heading: 'The inversion problem',
        body: [
          'Newton-Raphson power flow, the workhorse of the field, repeatedly forms and inverts a Jacobian matrix. In islanded microgrids these matrices are frequently ill-conditioned — a symptom of a system that has no single strong reference bus. When the Jacobian becomes near-singular, the inversion explodes numerically and the iteration diverges or returns garbage. That is not a solver bug; it is a structural mismatch between the algorithm and the system.',
        ],
      },
      {
        heading: 'Our approach',
        body: [
          'We reformulated the load-flow problem so that it avoids explicit matrix inversion entirely. The resulting algorithm is numerically far more robust, converging reliably even for ill-conditioned microgrid configurations where classical Newton-Raphson collapses. By restructuring how the linear system is solved, we get the speed of Newton-type methods with the dependability of a well-conditioned formulation.',
        ],
      },
      {
        heading: 'Impact',
        body: [
          'Reliable power-flow analysis is the foundation for every higher-level task in microgrid engineering — protection coordination, optimal dispatch, stability studies, planning. An inversion-free solver makes those analyses feasible for islanded systems that previously had to be approximated or skipped, and it has proven robust enough for real-world-style microgrid benchmarks.',
        ],
      },
    ],
    paper: {
      title: 'An Inversion-Free Robust Power-Flow Algorithm for Microgrids',
      authors: 'Abhishek Kumar, Swagatam Das, Rammohan Mallipeddi',
      venue: 'IEEE Transactions on Smart Grid',
      year: '2021',
      doi: '10.1109/TSG.2021.3064656',
    },
  },
  {
    slug: 'spherical-search',
    title: 'Spherical Search: A Metaheuristic with a Different Shape',
    subtitle: 'Sampling the search space in a spherical coordinate system',
    tags: ['Metaheuristics', 'Global Optimization'],
    date: '2019',
    excerpt:
      'Most evolutionary algorithms perturb variables in Cartesian space. Spherical search instead samples within a sphere — a surprisingly effective way to explore and refine solutions, and the seed of a whole family of algorithms.',
    content: [
      {
        heading: 'Why not a sphere?',
        body: [
          'Classic mutation and crossover operators treat each decision variable independently — a point moves a little in each coordinate. But real objective functions are rarely axis-aligned; the variables are correlated. By sampling new candidates on and within a sphere centered on the current solution, spherical search captures those correlations naturally, making its moves align with the true geometry of the landscape rather than an arbitrary coordinate grid.',
        ],
      },
      {
        heading: 'How spherical search works',
        body: [
          'The algorithm generates candidate solutions distributed on the surface (and interior) of a hypersphere around the current best point, evaluates them, and adapts the sphere’s radius over time. A large radius early on means broad exploration; a shrinking radius later means fine-grained refinement. The design is refreshingly simple, yet it turns out to be remarkably competitive with decades-old, far more intricate operators.',
        ],
      },
      {
        heading: 'A family of descendants',
        body: [
          'What began as a single algorithm grew into a family. Follow-up work added constraint handling, a self-adaptive mechanism that tunes the projection matrix, and a version with epsilon-constraint and gradient-based repair for constrained problems. The spherical-search lineage also proved valuable in applied settings, including power-flow analysis of islanded microgrids.',
        ],
      },
      {
        heading: 'Legacy',
        body: [
          'On the widely used CEC benchmark suites, spherical search and its descendants stand as strong baselines for global and constrained optimization. It is a reminder that sometimes the most productive idea is not a more complex operator — it is asking a simple question: why is our search shape always the same?',
        ],
      },
    ],
    paper: {
      title: 'The spherical search algorithm for bound-constrained global optimization problems',
      authors: 'Abhishek Kumar, Rakesh Kumar Misra, Devender Singh, Sujeet Mishra, Swagatam Das',
      venue: 'Applied Soft Computing',
      year: '2019',
      doi: '10.1016/j.asoc.2019.105734',
    },
  },
];
