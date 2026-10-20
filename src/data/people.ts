export type Person = {
  slug: string;
  name: string;
  role: string;
  track: 'google' | 'nvidia';
  source: string;
  focus: string;
};

export const people: Person[] = [
  {
    slug: 'pavan',
    name: 'Pavan Kumar Konnaki',
    role: 'Pre-sales architect, Google Cloud (data, migrations, AI) · ~11 yrs',
    track: 'google',
    source: 'Topmate call, 30 min',
    focus: 'Stack skills, agent templates, the Google interview loop, picking a manager',
  },
  {
    slug: 'diyasini',
    name: 'Diyasini Bandyopadhyay',
    role: 'Customer Engineer, Google Cloud (ex-Azure)',
    track: 'google',
    source: 'Topmate call, 33 min',
    focus: 'Which CE role to target, every interview round, the agentic AI terms that get asked',
  },
  {
    slug: 'krati',
    name: 'Krati Agarwal',
    role: 'SRE → AI infra engineer, NVIDIA',
    track: 'nvidia',
    source: 'Topmate call, 30 min',
    focus: 'What NVIDIA infra teams do daily, skills that matter, finding the slow node',
  },
  {
    slug: 'maaz',
    name: 'Maaz Khalid',
    role: 'AI infrastructure engineer, GPU cluster builds (Hindi call)',
    track: 'nvidia',
    source: 'Topmate call, 40 min',
    focus: 'Bare metal → network → storage → Kubernetes → GPU drivers, layer by layer',
  },
  {
    slug: 'abhik',
    name: 'Abhik Sarkar',
    role: 'ML engineer, on-prem dense GPU workloads',
    track: 'nvidia',
    source: 'Topmate call, 58 min',
    focus: 'Where the market is going, llm-d blog, ClusterMAX, neoclouds, how to learn',
  },
  {
    slug: 'vishakha',
    name: 'Vishakha Sadhwani',
    role: 'AWS → Google Cloud Architect → NVIDIA Solutions Architect',
    track: 'nvidia',
    source: 'Topmate call, 25 min',
    focus: 'Her 6–8 month path to NVIDIA, model serving, Kubernetes security and operators',
  },
  {
    slug: 'vikrant',
    name: 'Vikrant',
    role: 'AWS TAM / DevOps, GPU and HPC customers (colleague)',
    track: 'nvidia',
    source: 'Conversation with a colleague',
    focus: 'How an SA sizes a GPU customer: compute → memory → storage → network → cost',
  },
  {
    slug: 'abi-aryan',
    name: 'Abi Aryan',
    role: 'AI infrastructure engineer, inference systems · author and Maven instructor',
    track: 'nvidia',
    source: 'Her 2 assigned projects + her public writing',
    focus: 'Project 1: single-GPU serving and cost. Project 2: autoscaling, routing, KV cache',
  },
];
