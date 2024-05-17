define({ entries : {
    "Bass2015DevOps": {
        "abstract": "DevOps practices deal with such things as the velocity of releases, how fast incidents are handled, and the enforcement of organizationally specified security practices. All these are critical for success in today\u2019s environment, and the architect is critical for success in adopting DevOps practices. This instalment of the Pragmatic Architect explains why.",
        "author": "Bass, Len and Weber, Ingo and Zhu, Liming",
        "doi": "10.1109/MS.2017.4541051",
        "title": "DevOps: A Software Architect's Perspective",
        "type": "book",
        "url": "https://books.google.com/books?hl",
        "year": "2015"
    },
    "Bogner2019Impact": {
        "abstract": " Background Design patterns are supposed to improve various quality attributes of software systems. However, there is controversial quantitative evidence of this impact. Especially for younger paradigms such as service- and Microservice-based systems, there is a lack of empirical studies. Objective In this study, we focused on the effect of four service-based patterns\u2014namely Process Abstraction, Service Fa\u00e7ade, Decomposed Capability, and Event-Driven Messaging\u2014on the evolvability of a system from the viewpoint of inexperienced developers. Method",
        "author": "Bogner, Justus and Wagner, Stefan and Zimmermann, Alfred",
        "doi": "10.7717/peerj-cs.213",
        "journal": "PeerJ Computer Science",
        "keywords": "service-oriented patterns, software evolvability, controlled experiment, metric-based analysis",
        "title": "On the impact of service-oriented patterns on software evolvability: A controlled experiment and metric-based analysis",
        "type": "article",
        "url": "https://peerj.com/articles/cs-213/?td",
        "we conducted a controlled experiment with bachelor students (n": "69). Two functionally equivalent versions of a service-based web shop\u2014one with patterns (treatment group), one without (control group)\u2014had to be changed and extended in three tasks. We measured evolvability by the effectiveness and efficiency of the participants in these tasks. Additionally, we compared both system versions with nine structural maintainability metrics for size, granularity, complexity, cohesion, and coupling. Results Both experiment groups were able to complete a similar number of tasks within the allowed 90 min. Median effectiveness was 1/3. Mean efficiency was 12% higher in the treatment group, but this difference was not statistically significant. Only for the third task, we found statistical support for accepting the alternative hypothesis that the pattern version led to higher efficiency. In the metric analysis, the pattern version had worse measurements for size and granularity while simultaneously having slightly better values for coupling metrics. Complexity and cohesion were not impacted. Interpretation For the experiment, our analysis suggests that the difference in efficiency is stronger with more experienced participants and increased from task to task. With respect to the metrics, the patterns introduce additional volume in the system, but also seem to decrease coupling in some areas. Conclusions Overall, there was no clear evidence for a decisive positive effect of using service-based patterns, neither for the student experiment nor for the metric analysis. This effect might only be visible in an experiment setting with higher initial effort to understand the system or with more experienced developers. ,",
        "year": "2019"
    },
    "Bogner2021Practices": {
        "abstract": "Context Microservices as a lightweight and decentralized architectural style with fine-grained services promise several beneficial characteristics for sustainable long-term software evolution. Success stories from early adopters like Netflix, Amazon, or Spotify have demonstrated that it is possible to achieve a high degree of flexibility and evolvability with these systems. However, the described advantageous characteristics offer no concrete guidance and little is known about evolvability assurance processes for microservices in industry as well as challenges in this area. Insights into the current state of practice are a very important prerequisite for relevant research in this field. Objective We therefore wanted to explore how practitioners structure the evolvability assurance processes for microservices, what tools, metrics, and patterns they use, and what challenges they perceive for the evolvability of their systems. Method We first conducted 17 semi-structured interviews and discussed 14 different microservice-based systems and their assurance processes with software professionals from 10 companies. Afterwards, we performed a systematic grey literature review (GLR) and used the created interview coding system to analyze 295 practitioner online resources. Results The combined analysis revealed the importance of finding a sensible balance between decentralization and standardization. Guidelines like architectural principles were seen as valuable to ensure a base consistency for evolvability and specialized test automation was a prevalent theme. Source code quality was the primary target for the usage of tools and metrics for our interview participants, while testing tools and productivity metrics were the focus of our GLR resources. In both studies, practitioners did not mention architectural or service-oriented tools and metrics, even though the most crucial challenges like Service Cutting or Microservices Integration were of an architectural nature. Conclusions Practitioners relied on guidelines, standardization, or patterns like Event-Driven Messaging to partially address some reported evolvability challenges. However, specialized techniques, tools, and metrics are needed to support industry with the continuous evaluation of service granularity and dependencies. Future microservices research in the areas of maintenance, evolution, and technical debt should take our findings and the reported industry sentiments into account.",
        "author": "Bogner, Justus and Fritzsch, Jens and Wagner, Stefan and Zimmermann, Alfred",
        "doi": "10.1007/s10664-021-09999-9",
        "journal": "Empirical Software Engineering",
        "keywords": "microservices, industry practices, evolvability assurance, interview study, grey literature review",
        "title": "Industry practices and challenges for the evolvability assurance of microservices: An interview study and systematic grey literature review",
        "type": "article",
        "url": "https://link.springer.com/article/10.1007/s10664-021-09999-9",
        "year": "2021"
    },
    "Dvorak2022Engineering": {
        "abstract": "Abstract Moore's law states that the number of transistors on a chip will double every two years. A similar force appears to drive the progress of information technology (IT). IT companies tend to struggle to keep up with the latest technological developments, and software solutions are becoming increasingly outdated. The ability for software to change easily is defined as evolvability. One of the major fields researching evolvability is enterprise engineering (EE). The EE research paradigm applies theories from other fields to the evolvability of organisations. We argue that such theories can be applied to software engineering (SE) as well, which can contribute to the construction of software with a clear separation of dynamically changing technologies based on a relatively stable description of functions required for a specific user. EE theories introduce notions of function, construction, and affordance. We reify these concepts in terms of SE. Based on this reification, we propose affordance-driven assembling (ADA) as a software design approach that can aid in the construction of more evolvable software solutions. We exemplify the implementation of ADA in a case study on a commercial system and measure its effectiveness in terms of the impact of changes, as defined by the normalised systems theory.",
        "author": "Dvo\u0159\u00e1k, Ond\u0159ej and Pergl, Robert",
        "doi": "10.1016/j.scico.2021.102747",
        "journal": "Science of Computer Programming",
        "keywords": "enterprise engineering, technological change, software evolvability, adaptability, resilience",
        "title": "Tackling rapid technology changes by applying enterprise engineering theories",
        "type": "article",
        "url": "https://www.sciencedirect.com/science/article/pii/S0167642321001404",
        "year": "2022"
    },
    "Gnoyke2022Evolvability": {
        "abstract": "This paper was published in the proceedings of the 37th International Conference on Software Maintenance and Evolution (ICSME 2021). If software quality assurance is postponed or abandoned for a software system, maintenance and evolution become harder or impossible. One symptom for the degradation of system quality are Architecture Smells (ASs), which violate fundamental principles of software design. We present a study on the evolution of ASs, including how and when they foster system degradation. This provides valuable insights regarding what ASs are meaningful to assure system quality. To this end, we analyzed the evolution of three types of ASs in 14 open-source systems, with 485 versions in total. We adapted previously used indicators to assess the severity of ASs (e.g., growth, lifetime), and relate ASs to technical debt. Our results indicate that 1) ASs remain mostly stable compared to the code size of a system, 2) certain types of ASs, such as cyclic dependencies, have a greater impact on system degradation, and 3) certain properties determine how much an AS contributes to software degradation. These findings are valuable for practitioners to identify and tackle system degeneration. Moreover, they help researchers to scope new research on managing ASs and technical debt.",
        "author": "Gnoyke, Philipp and Schulze, Sandro and Kr\u00fcger, Jacob",
        "doi": "10.1109/ICSME52107.2021.00043",
        "journal": "GI Digital Library",
        "title": "An Evolutionary Analysis of Software-Architecture Smells",
        "type": "article",
        "url": "https://dl.gi.de/items/f4fc6358-498c-4e03-8b3d-569ea4f767e1",
        "year": "2022"
    },
    "Li2016Architecture": {
        "abstract": "Technical debt (TD) has attracted an increasing interest from researchers and practitioners in the software engineering domain. Currently, most approaches to managing TD focus on dealing with TD at source code level, while few methods deal with TD at architecture level. If architectural technical debt (ATD) is not effectively managed in the architecting process, the knowledge about ATD is not made available to involved stakeholders and the impact of ATD is not considered during architecture decision-making. Thus, the system\u2019s maintainability and evolvability can be intentionally or unintentionally compromised. As a result, architectures are costly to maintain and new features are difficult to introduce. To facilitate the management of ATD, it needs to be documented so that it becomes explicit to stakeholders. To this end, we propose a set of architecture viewpoints related to ATD (ATD viewpoints in short). Each viewpoint frames a number of concerns related to ATD. These ATD viewpoints together help to get a comprehensive understanding of ATD in a software system, thereby providing support for architecture decision-making. To evaluate the effectiveness of the ATD viewpoints in documenting ATD, we conducted a case study in a large telecommunications company. The results of this case study show that the documented ATD views can effectively facilitate the documentation of ATD. Specifically, the ATD viewpoints are relatively easy to understand; it takes an acceptable amount of effort to document ATD using the ATD viewpoints; and the documented ATD views are useful for stakeholders to understand the ATD in the software project.",
        "author": "Li, Zengyang and Liang, Peng and Avgeriou, Paris",
        "booktitle": "Software Quality Assurance",
        "chapter": "5",
        "doi": "https://doi.org/10.1016/B978-0-12-802301-3.00005-3",
        "editor": "Morasca, Sandro",
        "keywords": "software architecture, technical debt, architectural viewpoints, evolvability",
        "pages": "79-100",
        "publisher": "Elsevier",
        "title": "Architecture viewpoints for documenting architectural technical debt",
        "type": "incollection",
        "url": "https://www.sciencedirect.com/science/article/pii/B9780128023013000053",
        "year": "2016"
    },
    "Moreschini2022MLOps": {
        "abstract": "DevOps practices are the de facto sandard when developing software. The increased adoption of machine learning (ML) to solve problems urges us to adapt all the current approaches to developing a new standard that can take full benefit from the new solution. In this work we propose a graphical representation for DevOps for ML-based applications, namely MLOps, and also outline open research challenges. The pipeline aims to get the best of both worlds by maintaining the simple and iconic pipeline of DevOps, yet improving it by adding new circular steps for ML incorporation. This aims to create an ML-based development subsystem that can be self-maintained, and is capable of evolving side-by-side with the software development.",
        "author": "Moreschini, Stefano and Lomio, Francesco and H\u00e4stbacka, David",
        "booktitle": "2022 IEEE 29th International Conference on Software Analysis, Evolution and Reengineering (SANER)",
        "doi": "10.1109/SANER53432.2022.00155",
        "keywords": "MLOps, AI, software systems, evolvability, continuous integration",
        "title": "MLOps for evolvable AI intensive software systems",
        "type": "inproceedings",
        "url": "https://ieeexplore.ieee.org/abstract/document/9825776/",
        "year": "2022"
    },
    "Rajlich2018Recommendations": {
        "abstract": "Evolvability of software lies in intersection of 3 factors: evolving system properties, human factors present in the developer team, and evolution demands. The paper presents 5 recommendations that enhance software evolvability: defined processes of software change, distinction between evolving and stabilized part of the code, analyzable code segments, significant concept encapsulation, and avoidance of wrapping.",
        "author": "Rajlich, Vaclav",
        "doi": "10.1002/smr.1949",
        "journal": "Journal of Software: Evolution and Process",
        "keywords": "software evolvability, design patterns, maintainability, guidelines, metrics",
        "title": "Five recommendations for software evolvability",
        "type": "article",
        "url": "https://onlinelibrary.wiley.com/doi/abs/10.1002/smr.1949",
        "year": "2018"
    },
    "VogelHeuser2018Maintainability": {
        "abstract": "Automated Production Systems (aPS) have lifetimes of up to 30\u201350 years, throughout which the desired products change ever more frequently. This requires flexible, reusable control software that can be easily maintained and evolved. To evaluate selected criteria that are especially relevant for maturity in software maintainability and evolvability of aPS, the approach SWMAT4aPS+ builds on a questionnaire with 52 questions. The three main research questions cover updates of software modules and success factors for both cross-disciplinary development as well as reusable models. This paper presents the evaluation results of 68 companies from machine and plant manufacturing (MPM). Companies providing automation devices and/or engineering tools will be able to identify challenges their customers in MPM face. Validity is ensured through feedback of the participating companies and an analysis of the statistical unambiguousness of the results. From a software or systems engineering point of view, almost all criteria are fulfilled below expectations.",
        "author": "Vogel-Heuser, Birgit and Ocker, Florian",
        "doi": "https://doi.org/10.1016/j.conengprac.2018.08.007",
        "journal": "Control Engineering Practice",
        "keywords": "control software, machine manufacturing, plant manufacturing, maintainability, evolvability",
        "title": "Maintainability and evolvability of control software in machine and plant manufacturing\u2014An industrial survey",
        "type": "article",
        "url": "https://www.sciencedirect.com/science/article/pii/S0967066118304118",
        "year": "2018"
    },
    "Wong2016Survey": {
        "abstract": " Background Design patterns are supposed to improve various quality attributes of software systems. However, there is controversial quantitative evidence of this impact. Especially for younger paradigms such as service- and Microservice-based systems, there is a lack of empirical studies. Objective In this study, we focused on the effect of four service-based patterns\u2014namely Process Abstraction, Service Fa\u00e7ade, Decomposed Capability, and Event-Driven Messaging\u2014on the evolvability of a system from the viewpoint of inexperienced developers. Method",
        "author": "Wong, W. Eric and Gao, Ruimin and Li, Yuqi and Abreu, Rui",
        "doi": "10.1109/TSE.2016.2521368",
        "journal": "IEEE Transactions on Software Engineering",
        "keywords": "software, fault localization, quality assurance, debugging, static methods, dynamic methods",
        "number": "03",
        "publisher": "IEEE",
        "series": "TSE",
        "title": "A Survey on Software Fault Localization",
        "type": "article",
        "url": "https://ieeexplore.ieee.org/document/7390282",
        "volume": "42",
        "we conducted a controlled experiment with bachelor students (n": "69). Two functionally equivalent versions of a service-based web shop\u2014one with patterns (treatment group), one without (control group)\u2014had to be changed and extended in three tasks. We measured evolvability by the effectiveness and efficiency of the participants in these tasks. Additionally, we compared both system versions with nine structural maintainability metrics for size, granularity, complexity, cohesion, and coupling. Results Both experiment groups were able to complete a similar number of tasks within the allowed 90 min. Median effectiveness was 1/3. Mean efficiency was 12% higher in the treatment group, but this difference was not statistically significant. Only for the third task, we found statistical support for accepting the alternative hypothesis that the pattern version led to higher efficiency. In the metric analysis, the pattern version had worse measurements for size and granularity while simultaneously having slightly better values for coupling metrics. Complexity and cohesion were not impacted. Interpretation For the experiment, our analysis suggests that the difference in efficiency is stronger with more experienced participants and increased from task to task. With respect to the metrics, the patterns introduce additional volume in the system, but also seem to decrease coupling in some areas. Conclusions Overall, there was no clear evidence for a decisive positive effect of using service-based patterns, neither for the student experiment nor for the metric analysis. This effect might only be visible in an experiment setting with higher initial effort to understand the system or with more experienced developers. ,",
        "year": "2016"
    }
}});