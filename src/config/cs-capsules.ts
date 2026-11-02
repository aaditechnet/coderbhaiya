export interface Capsule { simple: string; deeper: string; advanced: string; example: string }
const rows = `Computer Fundamentals|A computer accepts input, follows instructions, stores data, and produces output.|A calculator reads two numbers and displays their sum.
How Computers Work|The processor fetches an instruction, decodes it, executes it, and stores a result.|Adding values requires loading data and writing the sum.
Binary & Number Systems|Binary uses two digits; each position represents a power of two.|101₂ equals 4+0+1, or 5.
Operating System Basics|An operating system manages hardware and provides controlled services to applications.|An editor requests a file save through the operating system.
Files, Memory & Storage|RAM holds active work temporarily; storage retains files after power is removed.|Opening a photo loads stored bytes into RAM.
Internet Fundamentals|The internet connects networks that exchange packets using shared protocols.|A browser requests a page through several routers.
Algorithms: Introduction|An algorithm is a precise, finite procedure that transforms an input into a result.|Checking every name in a list is a search algorithm.
Problem Solving|Identify inputs, outputs, constraints, and smaller subproblems before writing code.|Split a shopping total into prices, discounts, and taxes.
Flowcharts & Pseudocode|Flowcharts depict decisions and loops; pseudocode expresses logic without language-specific syntax.|Read score → score ≥ 60? → pass or retry.
Programming Fundamentals|Programs combine data, operations, control flow, and reusable functions.|Convert Celsius to Fahrenheit with a formula.
Variables & Data Types|Variables refer to values; types determine the operations those values support.|Store an age as an integer and a name as text.
Operators|Operators calculate, compare, or combine values; precedence determines grouping.|2+3*4 equals 14, not 20.
Conditions|A condition chooses a path according to a true-or-false test.|Reject a quantity when it is less than zero.
Loops|A loop repeats work and needs a stopping condition or a finite collection.|Visit each price once to compute a total.
Functions|A programming function groups reusable work behind explicit inputs and a result.|area(width,height) returns width multiplied by height.
Arrays|An array stores indexed items; valid positions depend on its length.|Read index 2 to get the third temperature.
Strings|Strings represent text; encoding determines how characters are represented as bytes.|Join a given name and surname with a space.
Input/Output|Input receives data; output communicates results to people, files, or other systems.|Read a number and print its square.
Debugging Basics|Reproduce a failure, inspect state, isolate its cause, then verify the correction.|A missing last loop iteration skips the final array item.
Discrete Mathematics|Discrete mathematics studies countable structures used in programs and algorithms.|Represent friendships as vertices and edges.
Logic|Logic describes how statements combine and whether conclusions follow from premises.|A user can edit only if signed in AND owns the record.
Sets|Sets contain distinct elements and support union, intersection, and difference.|Intersect students enrolled in coding and mathematics.
Relations|A relation connects pairs of elements; symmetry and transitivity describe its structure.|“Same birthday month” groups people into equivalence classes.
Combinatorics|Combinatorics counts arrangements and selections under explicit constraints.|Five students have ten unordered pairs.
Probability|Probability quantifies uncertainty; conditioning changes likelihood given additional information.|A fair coin has a one-half probability of heads.
Graph Theory|Graph theory studies connections, paths, cycles, and properties of networks.|A road map uses cities as vertices and roads as edges.
Mathematical Proofs|A proof establishes a claim using stated assumptions and valid logical steps.|Induction proves the sum 1+…+n equals n(n+1)/2.
Linear Algebra|Vectors, matrices, and linear transformations describe structured numeric data.|A rotation matrix rotates a two-dimensional point.
Statistics|Statistics summarizes data and estimates population properties while expressing uncertainty.|Estimate mean commute time and report a confidence interval.
OOP Concepts|Objects combine state and behavior with clearly assigned responsibilities.|A thermostat stores a target and exposes an adjustment operation.
Classes & Objects|A class specifies structure and behavior; an object is a particular instance.|Two Book objects have different titles but share methods.
Encapsulation|Encapsulation hides internal state behind operations that preserve valid behavior.|Withdraw checks balance instead of exposing arbitrary balance edits.
Inheritance|A derived class specializes a base class; inherited behavior creates dependencies.|SavingsAccount extends Account with interest calculation.
Polymorphism|Different implementations can respond to the same interface operation.|draw() works differently for Circle and Rectangle.
Abstraction|An abstraction exposes essential capabilities without requiring knowledge of internals.|Checkout uses a payment interface, not provider-specific internals.
SOLID Principles|SOLID addresses responsibilities, extension, substitution, interface size, and dependency direction.|Separate invoice calculation from printing responsibilities.
Design Patterns|Patterns name recurring design solutions; use them only for actual constraints.|Observer notifies several views when shared state changes.
Clean Code|Clear names, focused functions, and consistent structure make code easier to maintain.|Rename flag to isAccountActive.
Testing|Tests check specific behavior and meaningful boundaries; passing tests do not prove everything.|Test a discount below, at, and above its threshold.
Debugging|Debugging isolates the cause of observed behavior through controlled experiments.|Inspect operands before an incorrect calculation.
Version Control|Version control records focused changes so teams can review and recover history.|Compare a feature change against the previous revision.
Git & GitHub|Git tracks history; GitHub hosts repositories and supports collaboration and reviews.|Review a focused feature branch through a pull request.
Software Development Life Cycle|Requirements, design, implementation, testing, deployment, and maintenance guide software delivery.|Validate user needs before building and releasing a feature.
Agile|Agile delivers small increments and revises plans using evidence and feedback.|Review a usable feature and reprioritize the next iteration.
Code Reviews|Reviewers inspect correctness, clarity, tests, and design choices before integration.|Catch a missing boundary test before release.
Computer Organization|Organization explains how hardware components cooperate to execute instructions.|Registers, buses, and an arithmetic unit cooperate on addition.
CPU|The CPU executes instructions using control logic, registers, and arithmetic units.|Load two operands, add them, and store a result.
Memory|Registers, caches, RAM, and storage trade capacity against speed and persistence.|Cache recently used data near the processor.
Assembly Basics|Assembly uses readable names for architecture-specific low-level instructions.|Move a value into a register before adding it.
Machine Code|Machine code encodes processor instructions as bytes.|An assembler translates an addition instruction into binary encoding.
Computer Architecture|Architecture defines an instruction interface and choices affecting execution and compatibility.|Two processors implement the same instruction set differently.
Processes|A process is a running program with its own execution state and resources.|A browser and editor have separate address spaces.
Threads|Threads share process resources but retain separate stacks and execution positions.|Keep interface work separate from file loading.
Concurrency|Concurrent tasks overlap or interleave; parallel tasks execute simultaneously.|A server switches tasks while waiting for network responses.
Operating Systems|The kernel mediates access to memory, devices, files, and execution resources.|An application requests a controlled system call.
Virtual Memory|Virtual addresses map to physical storage and isolate process memory.|Different programs can use identical virtual addresses safely.
File Systems|File systems organize contents and metadata into files and directories.|Saving a photo updates bytes and directory metadata.
Scheduling|Scheduling allocates CPU time among ready tasks using a defined policy.|Round-robin gives each job a bounded time slice.
Synchronization|Locks and signaling coordinate access and ordering between tasks.|A lock prevents conflicting updates to a shared balance.
Relational Databases|Relational databases store structured records in tables linked through keys.|Students and courses connect through an enrollment table.
SQL|SQL expresses queries and data changes declaratively.|SELECT retrieves books matching a title filter.
DBMS Architecture|A database combines query planning, storage, concurrency control, and recovery.|A query planner chooses a scan before execution.
ER Models|Entity-relationship models describe objects, attributes, and relationship cardinalities.|Each loan references one member and one book.
Normalization|Normalization separates dependencies to reduce duplication and update anomalies.|Store a department name once, not in every employee row.
Transactions|A transaction commits related changes together or rolls them back.|Debit and credit an account transfer as one unit.
Indexing|Indexes accelerate selected queries but require storage and write maintenance.|Index email for selective account lookup.
Query Optimization|An optimizer compares estimated execution costs using statistics and access paths.|Choose an index scan for a rare matching value.
NoSQL|Document, key-value, graph, and wide-column stores support different access patterns.|Store variable product attributes in a document.
Distributed Databases|Distributed databases partition or replicate data across independently failing machines.|Replicate records across regions with explicit consistency guarantees.
Data Warehousing|Warehouses integrate historical data for analytical queries and reporting.|Compare seasonal sales across stores.
Network Fundamentals|Devices communicate through addressing, links, and layered protocols.|A laptop reaches a service through a router.
OSI Model|The seven-layer OSI model is a conceptual framework, not an exact deployment blueprint.|Separate a cable failure from an application failure.
TCP/IP|IP routes packets; TCP provides an ordered reliable byte stream.|Download data over a TCP connection routed by IP.
IP Addressing|An IP address identifies an interface; prefixes guide routing decisions.|A router chooses the longest matching network prefix.
DNS|DNS resolves domain names to records through delegation and caching.|Resolve a website name before connecting to its address.
HTTP/HTTPS|HTTP defines request-response semantics; HTTPS protects transport with TLS.|GET a page and inspect its status and caching headers.
Routing|Routers select a next hop based on destination prefixes and routing policies.|Use a backup path after a link fails.
Network Security|Segmentation, encryption, access policies, and monitoring protect connected systems.|Verify firewall rules in a controlled authorized lab.
WebSockets|WebSockets provide persistent bidirectional messages after a connection handshake.|Deliver chat messages without repeated polling.
APIs|An API defines operations, data formats, failures, and caller expectations.|Request a forecast and validate the returned fields.
Distributed Systems Basics|Networked components face partial failures, delays, and uncertain coordination.|An order succeeds while its notification service is temporarily unavailable.
HTML|HTML gives webpage content semantic structure.|Use headings, labels, and landmarks for accessible navigation.
CSS|CSS controls presentation through cascade, inheritance, and layout rules.|Switch from multiple columns to one on a phone.
JavaScript|JavaScript uses objects, functions, lexical scope, and asynchronous event handling.|Validate form input and show an error message.
React|React composes interfaces from components whose rendering follows data and state.|Render a product card from supplied name and price.
REST APIs|REST uses resource representations and consistent HTTP interface semantics.|Create a book with POST and retrieve it with GET.
Authentication|Authentication verifies a claimed identity using credentials or trusted identity providers.|Validate a passkey before creating a session.
Authorization|Authorization decides whether an identity may perform an action on a resource.|Allow only the owner to edit a private record.
Backend Architecture|Backend design separates validation, business rules, persistence, and integration responsibilities.|A handler validates input before invoking a domain service.
Node.js / Java Spring Boot|Node.js and Spring Boot support server applications in different language ecosystems.|Implement a JSON endpoint with a handler or controller.
Databases|Applications need deliberate schemas, query behavior, access rules, and recovery plans.|Persist a record, then retrieve it by stable ID.
API Security|API defenses validate input, authorize objects, limit abuse, and avoid data exposure.|Verify one test user cannot access another user's records.
Microservices|Independent services own focused responsibilities but add distributed coordination overhead.|Separate catalog and ordering behind documented interfaces.
Caching|Caches reuse results but require correct keys and invalidation strategies.|Cache public product details with an expiration time.
Message Queues|Queues decouple producers and consumers with explicit delivery and acknowledgment behavior.|Queue a receipt task without delaying an order response.
Web Performance|Measure real loading and interaction bottlenecks before optimizing assets and execution.|Reduce image size after profiling slow page loading.
Security Fundamentals|Confidentiality, integrity, and availability guide risk assessment and defensive controls.|Limit sensitive record access and review permissions.
Cryptography|Reviewed encryption, hashing, and signature algorithms protect different security properties.|Use established TLS rather than inventing encryption.
Secure Coding|Safe APIs, least privilege, validation, and careful error handling reduce defects.|Use parameterized queries to treat input as data.
Web Security|Browser and application protections address sessions, content injection, and request forgery.|Encode displayed user content in your own training application.
Vulnerability Concepts|A weakness becomes risk through exposure, impact, and exploitable conditions.|Patch an affected dependency and verify the relevant feature.
Threat Modeling|Map assets, trust boundaries, entry points, and threats to prioritize defenses.|Review account recovery before releasing a login flow.
Digital Forensics Basics|Preserve evidence, document custody, and analyze authorized copies reproducibly.|Record collection time and hash a permitted log copy.
Ethical Hacking Fundamentals|Security assessments require explicit authorization, scope, and careful reporting.|Test only a locally owned training environment within agreed scope.
Security Testing|Repeatable authorized tests verify defensive behavior and track remediation.|Use designated test accounts to validate access rules.
AI Fundamentals|AI combines search, rules, planning, and learning to solve task-specific problems.|A route planner finds a feasible path under constraints.
Search Algorithms|State-space search explores possible actions toward a goal.|Breadth-first search finds a shortest unweighted maze route.
Machine Learning|Models fit patterns from data and must generalize to unseen cases.|Estimate house prices from past labeled sales.
Supervised Learning|Supervised learning uses input examples paired with known target labels.|Train a classifier on labeled synthetic messages.
Unsupervised Learning|Unsupervised methods discover structure without supplied target labels.|Group similar purchase patterns for exploratory analysis.
Regression|Regression predicts numeric quantities with assumptions and uncertainty.|Estimate electricity demand from historical usage and weather.
Classification|Classification maps inputs to categories with threshold and error tradeoffs.|Classify messages as spam or legitimate.
Clustering|Clustering groups points using a chosen similarity measure.|Group articles by embeddings and inspect cluster usefulness.
Neural Networks|Neural networks combine weighted layers trained through gradients.|Predict handwritten digits from pixel features.
Deep Learning|Deep layered models learn complex representations but demand careful data and compute choices.|Learn image features for object recognition.
CNN|Convolutional networks share local filters across spatial positions.|Detect edges before identifying a bicycle.
NLP|Natural language processing models human language for analysis or generation.|Extract product names from support messages.
Computer Vision|Vision infers objects, motion, and scenes from images or video.|Locate parcels on a controlled conveyor.
Reinforcement Learning|Agents learn action policies through sequential feedback and rewards.|Train a balancing policy in a safe simulation.
Generative AI|Generative models sample new outputs; plausible output is not guaranteed to be factual.|Draft a summary and verify its claims against evidence.
LLM Fundamentals|Language models predict tokens from context and can produce confident errors.|Answer a question using an explicitly supplied passage.
AI Agents|Agents use model outputs and permitted tools across goal-directed steps.|Suggest a meeting time and request approval before booking.
Programming Language Concepts|Languages differ in scope, types, evaluation, abstraction, and effects.|Compare mutable variables with immutable bindings.
Syntax|Syntax defines valid symbol arrangements through language grammar.|Check that an arithmetic expression follows required punctuation rules.
Semantics|Semantics specifies the meaning and observable behavior of valid programs.|Specify whether integer division truncates or rounds.
Parsing|Parsing organizes tokens into structures that follow a grammar.|Parse 2+3*4 into an expression tree.
Lexical Analysis|A lexer transforms characters into classified tokens with source positions.|Tokenize total += 2 into identifier, operator, and number.
Grammars|Production rules describe valid recursive language structures.|Define multiplication precedence above addition.
Type Systems|Types classify values and constrain operations to detect certain program errors.|Reject addition between a file handle and integer.
Interpreters|Interpreters execute representations directly while maintaining runtime environments.|Walk an expression tree and compute each node.
Compilers|Compilers translate source into a target representation while preserving semantics.|Convert a source loop into machine instructions.
Intermediate Representation|IR provides an internal form for analysis and reusable compiler transformations.|Convert a branch into control-flow blocks.
Optimization|Compiler optimizations improve resource use while preserving observable behavior.|Fold 6*7 into the constant 42.
Virtual Machines|Virtual machines execute an abstract instruction interface across host platforms.|Run portable bytecode on different operating systems.
Garbage Collection|Tracing collectors reclaim unreachable objects, trading throughput against pause time.|Reclaim a temporary list after all references disappear.
Runtime Systems|Runtimes coordinate memory, exceptions, libraries, and scheduling during execution.|Print an uncaught exception's call stack.
Distributed Systems|Independent nodes communicate across unreliable networks with explicit consistency assumptions.|Replicated storage remains usable after one node fails.
Cloud Computing|Managed remote resources offer flexibility with cost, identity, and regional failure constraints.|Scale a service while monitoring resource cost.
Parallel Computing|Parallel work runs simultaneously; serial dependencies and communication limit speedup.|Render independent image tiles on several cores.
Multithreading|Threads share process memory, requiring coordination for shared mutable state.|Load a file while the interface remains responsive.
High Performance Computing|HPC combines parallel hardware and optimized workloads for demanding computation.|Evaluate a climate simulation across compute nodes.
Computer Graphics|Graphics converts geometry, materials, and lighting into sampled images.|Transform a 3D scene into a rendered frame.
Robotics|Robots use sensing, state estimation, planning, and feedback to control actuators.|Navigate a simulated robot around obstacles.
Advanced Networking|Large networks require traffic engineering, recovery, measurement, and policy-aware routing.|Compare congestion under two controlled routing strategies.
Advanced Security|Security architecture considers threat assumptions, access boundaries, resilience, and assurance evidence.|Review a system's recovery plan and privilege boundaries.
Advanced AI|Advanced AI investigates robust, efficient, and multimodal learning with reproducible evaluation.|Compare model accuracy and latency against a fixed baseline.
Research Methodology|Research defines questions, methods, evidence, ethics, and transparent limitations.|Compare algorithms on fixed datasets with reproducible measurements.`;
export const capsules: Record<string, Capsule> = Object.fromEntries(rows.split('\n').map(row => { const [title='',simple='',example=''] = row.split('|'); return [title,{simple,deeper: `Apply the concept to a concrete case: ${example} Identify its inputs, assumptions, and expected result before implementation.`,advanced: `Test boundary cases and compare alternatives. Explain the correctness assumptions, resource costs, and failure modes rather than assuming one design fits every system.`,example}]; }));
// Language-specific capsules use explicit track context, not Python as a fallback.
const tracks: Record<string,string> = { C:'C uses explicit types, pointer-based access, and manual lifetime management.', 'C++':'C++ combines generic programming and object models with explicit resource ownership.', Python:'Python binds names to objects and offers high-level collection and iteration protocols.', Java:'Java combines class-based types with bytecode execution on the JVM.', JavaScript:'JavaScript combines lexical scope, first-class functions, and event-loop-driven asynchronous tasks.', SQL:'SQL describes desired records declaratively; the database plans how to retrieve them.' };
const languageConcepts: Record<string,string> = { Syntax:'Grammar determines valid declarations and statements.', Functions:'Parameters define inputs and return values communicate results.', Arrays:'Indexed collections require careful bounds and element representation.', Pointers:'Addresses refer to objects whose lifetimes and bounds must remain valid.', Structures:'Related fields form records with a defined layout.', 'Memory Management':'Allocation and release require clear ownership and cleanup.', 'File Handling':'Open, process, check failures, and close file resources.', OOP:'Objects group state and behavior behind controlled interfaces.', STL:'Containers and algorithms operate through iterators with explicit validity rules.', Templates:'Generic declarations are instantiated with types satisfying required operations.', Memory:'Object lifetime and ownership determine valid access and cleanup.', 'Modern C++':'Range loops, move semantics, and smart pointers improve expression and ownership.', 'Advanced C++':'Generic constraints, lifetimes, and concurrency require careful guarantees.', 'Core Python':'Built-in collections, comprehensions, and indentation structure common programs.', Modules:'Imports group reusable code into named namespaces.', 'Exception Handling':'Catch specific expected failures and guarantee cleanup.', APIs:'Validate requests, responses, status codes, and caller permissions.', Automation:'Repeat safe bounded operations with validation and outcome reporting.', 'Advanced Python':'Generators, decorators, and context managers provide reusable control mechanisms.', 'Core Java':'Classes, methods, primitives, and standard libraries form Java programs.', Collections:'Lists, sets, and maps have distinct ordering and uniqueness guarantees.', Multithreading:'Protect shared mutable state and coordinate independent tasks.', JVM:'The JVM loads classes, executes bytecode, and manages runtime memory.', 'Advanced Java':'Generics, reflection, and concurrency utilities support complex applications.', Fundamentals:'Values, lexical scope, functions, and control flow define program behavior.', DOM:'Document objects expose webpage structure and user events.', 'Async Programming':'Future results require nonblocking coordination and explicit error handling.', Promises:'Pending results settle once as fulfilled or rejected.', 'Modern JavaScript':'Modules, destructuring, and async functions improve composition.', 'Database Basics':'Tables, keys, and constraints organize persistent records.', SELECT:'Projection and filtering select the needed columns and rows.', Joins:'Matching keys combine rows; cardinality determines output size.', Aggregation:'Grouping summarizes records with count, sum, and average operations.', Subqueries:'Nested queries provide derived results or correlated predicates.', Indexing:'Indexes accelerate specific lookups while increasing write maintenance.', Transactions:'Commit related changes atomically and handle rollback.', 'Database Design':'Normalize relationships and enforce keys and constraints.' };
export function capsuleFor(title:string,module:string,levelId:number): Capsule {
  if(levelId===2) { const simple=languageConcepts[title] ?? ''; return {simple, deeper:tracks[module] ?? '',advanced:'Use the official language semantics to check edge cases, resource ownership, and library guarantees. Compare implementation choices with small tests.',example:`In the ${module} track, implement a small inventory operation using ${title.toLowerCase()}; test an empty input and one valid record.`}; }
  if(title==='Functions' && levelId===4) return {simple:'A mathematical function assigns each allowed input exactly one output.',deeper:'Domains, codomains, injection, and surjection describe mappings between sets.',advanced:'Compare mappings mathematically; total functions differ from partial computations that may fail or never terminate.',example:'f(x)=2x maps integers to even integers.'};
  return capsules[title] ?? {simple:'This topic requires a dedicated authored lesson.',deeper:'',advanced:'',example:''};
}
