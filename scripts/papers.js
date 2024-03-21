

const area = {ml: "Trustworthy Machine Learning", obl: "Oblivious Computation", dp: "Differential Privacy", cp: "Constraint Programming", vc: "Verifiable Computation", sse: "Searchable Encryption",  gp: "Dataset Confidentiality", sw: "Secure Hardware", mpc: "Collaborative ML"};


const notes = {
ml: "Security, privacy and robustness of machine learning algorithms.",
dp: "Mechanisms for providing individual privacy during data analysis and implementation considerations.",
gp: "Protect global properties about data as opposed to individual privacy (e.g., hiding proportion of certain sensitive values). We showed that dataset properties can be leaked from released statistics or via inference API to a collaborative machine learning model. We proposed the first definitions and mechanisms to achieve dataset-level confidentiality.",
vc: "Provide cryptographic guarantees that an output from an outsourced computation or a data query is correct (e.g., not tampered with, up-to-date, consistent with the views of other clients).",
obl: "Algorithms that access data while protecting against memory side-channels (i.e., produce secret-independent access pattern), including <a href='https://arxiv.org/abs/1402.5524' target='_blank'>first optimal oblivious shuffle</a>, <a href='https://papers.nips.cc/paper/8877-oblivious-sampling-algorithms-for-private-data-analysis' target='_blank'>data sampling</a> (e.g., for batch creation in ML), MapReduce, machine learning and graph drawing applications.",
sw: "Secure execution of applications such as privacy-preserving data analysis in trusted processors (e.g., Intel SGX).",
mpc: "Data confidentiality, secure execution, contamination attacks, incentives during multi-party data analysis."
};


var papers = [
    { pdfurl: "https://hdsr.mitpress.mit.edu/pub/sl9we8gh/release/3",
    title: "Advancing Differential Privacy: Where We Are Now and Future Directions for Real-World Deployment", authors: "R. Cummings, D. Desfontaines, D. Evans, R. Geambasu, Y. Huang, M. Jagielski, P. Kairouz, G. Kamath, S. Oh, O. Ohrimenko, N. Papernot, R. Rogers, M. Shen, S. Song, W. Su, A. Terzis, A. Thakurta, S. Vassilvitskii, Y. Wang, L. Xiong, S. Yekhanin, D. Yu, H. Zhang, and W. Zhang", where: " Harvard Data Science Review", year: "2024", tags: [area.dp]
    },
    
    { pdfurl: "https://arxiv.org/pdf/2208.07489",
    title: "Single Round-trip Hierarchical ORAM via Succinct Indices", authors: " W. Holland, O. Ohrimenko, and A Wirth.", where: "AsiaCCS", year: "2024", tags: [area.obl]
    },
    { pdfurl: "https://link.springer.com/referenceworkentry/10.1007/978-3-642-27739-9_1791-1",
    title: "The Melbourne Shuffle", authors: "O.Ohrimenko.", where: "Encyclopedia of Cryptography, Security and Privacy", year: "2023", tags: [area.obl]
    },
    { pdfurl: "https://nips.cc/" , title: "RS-Del: Edit distance robustness certificates for sequence classifiers via randomized deletion", authors: "Z. Huang, N. G. Marchant, K. Lucas, L. Bauer, O. Ohrimenko, and B. I. P. Rubinstein.", where: "NeurIPS", year:"2023", tags: [area.ml]
    },
    
    { pdfurl: "https://arxiv.org/abs/2309.11022" , title: "Information Leakage from Data Updates in Machine Learning Models", authors: "T. Hui, F. Farokhi and O. Ohrimenko.", where: "16th ACM Workshop on Artificial Intelligence and Securityat CCS (AISec)", year:"2023", tags: [area.ml]
    },
    
    { pdfurl: "https://ecai2023.eu/", title: "Fingerprint Attack: Client De-Anonymization in Federated Learning", authors: "Q. Xu, T. Cohn, and O. Ohrimenko.",
    where: "ECAI", year:"2023", tags: [area.ml, area.mpc]
    },
    
    { pdfurl: "https://arxiv.org/abs/2301.13347" , title: "Tight Data Access Bounds for Private Top-k Selection", authors: "H. Wu, O. Ohrimenko, and A. Wirth.",
    where: "ICML", year:"2023", notes: "live presentation", tags: [area.dp]
    },
    
    { pdfurl: "https://arxiv.org/pdf/2207.08367.pdf" , title: "Protecting Global Properties of Datasets with Distribution Privacy Mechanisms", authors: "M. Chen, and O. Ohrimenko.",
    where: "AIStats", year:"2023", code: "https://github.com/mgcsls/mechanisms-global-properties", tags: [area.gp]
    },
    
    { pdfurl: "https://arxiv.org/abs/2212.03980" , title: "DDoD: Dual Denial of Decision Attacks on Human-AI Teams", authors: "B. Tag, N. van Berkel, S. Verma, B. Zhao, S. Berkovsky, M. Ali Kaafar, V. Kostakos, and O. Ohrimenko.",
    where: "IEEE Pervasive Computing", year:"2023", tags: [area.ml]
    },
    { pdfurl: "https://arxiv.org/abs/2006.14583" , title: "Replication Robust Payoff Allocation in Submodular Cooperative Games", authors: "D. Han, M. Wooldridge, A. Rogers, O. Ohrimenko and S. Tschiatschek.",
    where: "IEEE Transactions on Artificial Intelligence", year:"2022", tags: [area.mpc]
    },
    
    {pdfurl: "https://facctconference.org/static/pdfs_2022/facct22-61.pdf" , title: "Attribute Privacy: Framework and Mechanisms", authors: "W. Zhang, O. Ohrimenko and R Cummings.", where: "Conference on Fairness, Accountability, and Transparency (ACM FAccT)", year:"2022", tags: [area.gp]
    },
    
    {pdfurl: "https://arxiv.org/abs/2112.12279" , title: "Randomize the Future: Asymptotically Optimal Locally Private Frequency Estimation Protocol for Longitudinal Data", authors: "O. Ohrimenko, A. Wirth and H. Wu.", where: "ACM SIGMOD/PODS", year:"2022", tags: [area.dp]
        
    },
    {pdfurl: "https://arxiv.org/abs/2112.05307" , title: "Are We There Yet? Timing and Floating-Point Attacks on Differential Privacy Systems", authors: "J. Jin,E. McMurtry, B. I. P. Rubinstein and O. Ohrimenko.", where: "IEEE Symposium on Security and Privacy", year:"2022",
    notes: "This work led to a <a href='https://github.com/pytorch/opacus/pull/260' target='_blank'>fix</a> in Opacus DP library and received Honorable mention on Google's Bug Hunter (<a href='https://bughunters.google.com/profile/1e5f9da7-e8d5-42dc-be8b-cc576152232a' target='_blank'>link</a>).", tags: [area.dp],
    },
    { pdfurl: "https://dl.acm.org/doi/10.1145/3488932.3497761", title: "Efficient Oblivious Permutation via the Waksman Network", authors: "W. Holland, O. Ohrimenko and A. Wirth.", where: "AsiaCCS", year:"2022", code: "https://github.com/wCloudRain/orp",  tags: [area.obl]
    },
    
    {pdfurl: "https://arxiv.org/pdf/2006.07267.pdf", title: "Leakage of Dataset Properties in Multi-Party Machine Learning",
        authors: "W. Zhang, S. Tople, and O. Ohrimenko.", where:"USENIX Security", year:"2021", tags: [area.ml, area.gp, area.mpc]},
    
    {pdfurl: "https://arxiv.org/pdf/1912.07942.pdf", title: "Analyzing Information Leakage of Updates to Natural Language Models",
        authors: "S. Zanella-B&eacute;guelin, L. Wutschitz, S. Tople, V. R&uuml;hle, A. Paverd, O. Ohrimenko, B. K&ouml;pf, and M Brockschmidt.", where:"ACM Conference on Computer and Communications Security (CCS)", year:"2020",  tags: [area.ml]},
    
    {pdfurl: "https://papers.nips.cc/paper/8877-oblivious-sampling-algorithms-for-private-data-analysis", title: "Oblivious Sampling Algorithms for Private Data Analysis",
        authors: "S. Sasy and O. Ohrimenko. ", where:"NeurIPS", year:"2019",  tags: [area.dp, area.obl, area.ml]},
    
    {pdfurl: "https://arxiv.org/pdf/1807.00736.pdf", title: "An Algorithmic Framework For Differentially Private Data Analysis on Trusted Processors",
        authors: "J. Allen, B. Ding, J. Kulkarni, H. Nori, O. Ohrimenko, and S. Yekhanin.", where:"NeurIPS", year:"2019", tags: [area.obl, area.dp, area.sw]},
    
    
    {pdfurl: "https://arxiv.org/abs/1901.02402", title: "Contamination Attacks and Mitigation in Multi-Party Machine Learning",
        authors: "J. Hayes and O. Ohrimenko.", where:"NeurIPS", year:"2018", tags: [area.ml, area.mpc]},
    
    {pdfurl: "https://eprint.iacr.org/2018/551", title: "Structured Encryption and Leakage Suppression",
        authors: "S. Kamara, T. Moataz, and O. Ohrimenko. ", where:"CRYPTO", year:"2018", tags: [area.obl, area.sse]},
    
    {pdfurl: "https://dl.acm.org/doi/10.1016/j.ic.2018.03.004", title: "Verifying the consistency of remote untrusted services with conflict-free operations",
        authors: "C. Cachin and O. Ohrimenko.", where:"Information and Computation", year:"2018" , journal: true,  tags: [area.vc]},
    
    {pdfurl: "https://eprint.iacr.org/2017/805", title: "Forward and Backward Private Searchable Encryption from Constrained Cryptographic Primitives",
        authors: "R. Bost, B. Minaud, and O. Ohrimenko. ", where:"ACM Conference on Computer and Communications Security (CCS)", year:"2017",  tags: [area.sse]},
    
    
    {pdfurl: "https://www.microsoft.com/en-us/research/publication/strong-efficient-cache-side-channel-protection-using-hardware-transactional-memory/", title: "Strong and Efficient Cache Side-Channel Protection using Hardware Transactional Memory ",
        authors: "D. Gruss, J. Lettner, F. Schuster, O. Ohrimenko, I. Haller, and M. Costa. ", where:"USENIX Security", year:"2017", tags: [area.sw]},
    
    {pdfurl: "https://eprint.iacr.org/2015/404", title: "Zero-Knowledge Accumulators and Set Algebra",
        authors: "E. Ghosh, O. Ohrimenko, D. Papadopoulos, R. Tamassia, and N. Triandopoulos. ", where:"AsiaCrypt", year:"2016",  tags: [area.vc]},
    
    {pdfurl: "https://eprint.iacr.org/2016/985.pdf", title: "Hash First, Argue Later: Adaptive Verifiable Computations on Outsourced Data",
        authors: "D. Fiore, C. Fournet, E. Ghosh, M. Kohlweiss, O. Ohrimenko, and B. Parno. ", where:"ACM Conference on Computer and Communications Security (CCS)", year:"2016",  tags: [area.vc]},
    
    {pdfurl: "https://www.microsoft.com/en-us/research/publication/oblivious-multi-party-machine-learning-trusted-processors/", title: "Oblivious Multi-Party Machine Learning on Trusted Processors",
        authors: "O. Ohrimenko, F. Schuster, C. Fournet, A. Mehta, S. Nowozin, K. Vaswani, and M. Costa. ", where:"USENIX Security", year:"2016", tags: [area.ml, area.obl, area.sw, area.mpc]},
    
    {pdfurl: "https://eprint.iacr.org/2015/283", title: "Verifiable Zero-Knowledge Order Queries and Updates for Fully Dynamic Lists and Trees",
        authors: "E. Ghosh, M. Goodrich, O. Ohrimenko, and R. Tamassia. ", where:"Conference on Security and Cryptography for Networks (SCN)", year:"2016",  tags: [area.vc]},
    
    {pdfurl: "https://eprint.iacr.org/2015/1183", title: "Efficient Verifiable Range and Closest Point Queries in Zero-Knowledge",
        authors: "E. Ghosh, O. Ohrimenko, and R. Tamassia. ", where:"Privacy Enhancing Technologies Symposium (PETS)", year:"2016", journal: true, tags: [area.vc]},
    
    
    {pdfurl: "https://www.microsoft.com/en-us/research/publication/observing-and-preventing-leakage-in-mapreduce/", title: "Observing and Preventing Leakage in MapReduce",
        authors: "O. Ohrimenko, M. Costa, C. Fournet, C. Gkantsidis, M. Kohlweiss, and D. Sharma. ", where:"ACM Conference on Computer and Communications Security (CCS)", year:"2015", tags: [area.obl, area.sw]},
    
    {pdfurl: "http://eprint.iacr.org/2014/632", title: "Verifiable Member and Order Queries on a List in Zero-Knowledge",
    authors: "E. Ghosh, O. Ohrimenko, and R. Tamassia. ", where:"Conference on Applied Cryptography and Network Security (ACNS)", year:"2015", notes:"Best Student Paper Award. <a href='https://cs.brown.edu/news/2015/06/02/esha-ghosh-olya-ohrimenko-and-roberto-tamassia-win-acns-2015-best-student-paper-award/'  target='_blank'>Article</a> in Brown CS news.", tags: [area.vc]
    },
    
    
    {pdfurl: "http://eprint.iacr.org/2014/1017", title: "Sorting and Searching Behind the Curtain",
    authors: "F. Baldimtsi and O. Ohrimenko. ", where:"Financial Cryptography and Data Security", year:"2015", tags: [area.sse]
    },
    
    {pdfurl: "https://arxiv.org/abs/1302.4808v3", title: "Verifying the Consistency of Remote Untrusted Services, with Commutative Operations",
        authors: "C. Cachin and O. Ohrimenko. ", where:"Conference on Principles of Distributed Systems (OPODIS)", year:"2014", tags: [area.vc]},
    
    {pdfurl: "http://arxiv.org/pdf/1402.5524v1.pdf", title: "The Melbourne Shuffle: Improving Oblivious Storage in the Cloud",
    authors: "O. Ohrimenko, M. T. Goodrich, R. Tamassia, and E. Upfal. ", where:"Colloquium on Automata, Languages and Programming (ICALP)", year:"2014",
        notes:"In the media: <a href='http://technews.acm.org/archives.cfm?fo=2014-03-mar/mar-14-2014.html#711651' target='_blank'>ACM Tech News</a>, <a href='http://www.theregister.co.uk/2014/02/28/microsoft_research_chap_codevelops_cloud_data_scrambler/' target='_blank'>The Register</a>, <a href='http://www.businesscloudnews.com/2014/02/28/microsoft-universities-claim-optimised-security-techniques-for-cloud-storage/' target='_blank'>Business Cloud News</a> and Bruce Schneier’s <a href='https://www.schneier.com/blog/archives/2014/07/security_agains.html' target='_blank'>blog</a>.", tags: [area.obl]},
    
    
    
    {pdfurl: "https://arxiv.org/abs/1309.3515", title: "Haze: privacy-preserving real-time traffic statistics ",
        authors: "J. W. S. Brown, O. Ohrimenko, and R. Tamassia. ", where:"ACM SIGSPATIAL Conference on Advances in Geographic Information Systems (SIGSPATIAL/GIS)", year:"2013", tags: [area.mpc, area.dp]},
    
    {title: "Computer Security",
        authors: "O. Ohrimenko, C. Papamanthou, and B. Palazzi. ", where:"Handbook of Graph Drawing and Visualization", year:"2013"},
    
    {pdfurl: "https://arxiv.org/abs/1105.4125", title: "Privacy-Preserving Group Data Access via Stateless Oblivious RAM Simulation",
        authors: "M. Goodrich, M. Mitzenmacher, O. Ohrimenko, and R. Tamassia. ", where:"Symposium on Discrete Algorithms (SODA)", year:"2012", tags: [area.obl]},
    
    {pdfurl: "http://arxiv.org/abs/1110.1851", title: "Practical Oblivious Storage",
        authors: "M. Goodrich, M. Mitzenmacher, O. Ohrimenko, and R. Tamassia. ", where:"ACM Conference on Data and Application Security and Privacy (CODASPY)", year:"2012", tags: [area.obl]},
    
    {pdfurl: "http://arxiv.org/abs/1209.0756", title: "Graph Drawing in the Cloud: Privately Visualizing Relational Data using Small Working Storage",
        authors: "M. Goodrich, O. Ohrimenko, and R. Tamassia. ", where:"Symposium on Graph Drawing (GD)", year:"2012", tags: [area.obl]},
    
    {title: "Authenticating Email Search Result",
        authors: "O. Ohrimenko, H. Reynolds, and R. Tamassia. ", where:"Workshop on Security and Trust Management at ESORICS", year:"2012", tags: [area.vc],},
    
    {pdfurl: "http://vldb.org/pvldb/vol5/p920_michaeltgoodrich_vldb2012.pdf", title: "Efficient Verification of Web-Content Searching Through Authenticated Web Crawlers",
        authors: "M. Goodrich, D. Nguyen, O. Ohrimenko, C. Papamanthou, R. Tamassia, N. Triandopoulos and C. Lopes. ", where:"Research Track for Very Large Data Bases (PVLDB)", year:"2012", journal: true, tags: [area.vc]},
    
    
    {pdfurl: "http://www.sciencedirect.com/science/article/pii/S0020019012001391", title: "Lower Bounds for Randomized Algorithms for Online Chain Partitioning",
        authors: "C. Mathieu and O. Ohrimenko. ", where:"Information Processing Letters Volume 112 (IPL)", year:"2012", journal: true},
    
    {pdfurl: "http://arxiv.org/abs/1107.5093", title: "Oblivious RAM Simulation with Efficient Worst-Case Access Overhead",
        authors: "M. Goodrich, M. Mitzenmacher, O. Ohrimenko, and R. Tamassia. ", where:"ACM Cloud Computing Security Workshop at CCS (CCSW)", year:"2011", tags: [area.obl]},
    
    {title:"Propagation via Lazy Clause Generation",
        authors: "O. Ohrimenko, P. Stuckey, and M. Codish. ", where:"Constraints Journal, Volume 14", year:"2009", journal: true,  tags: [area.cp]},
    
    {pdfurl: "http://crpit.com/abstracts/CRPITV77Ohrimenko.html", title: "Modelling for Lazy Clause Generation",
        authors: "O. Ohrimenko and P. Stuckey. ", where:"Computing: the Australasian Theory Symposium (CATS)", year:"2008",  tags: [area.cp]},
    
    {pdfurl: "http://www.springerlink.com/content/g21003271x41k831/", title: "Propagation = Lazy Clause Generation",
        authors: "O. Ohrimenko, P. Stuckey, and M. Codish. ", where:"Principles and Practice of Constraint Programming (CP)", year:"2007", notes: "Best Student Paper Award", tags: [area.cp] }
]

