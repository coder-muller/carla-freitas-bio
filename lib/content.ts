import {
  Building2,
  ClipboardCheck,
  FileCheck,
  FileSearch,
  FileText,
  Recycle,
  Scissors,
  ShieldAlert,
  Sprout,
  Trees,
  type LucideIcon,
} from "lucide-react";

export const CONTACT = {
  email: "carla.bio_sls@yahoo.com",
  phone: "(53) 99929-7361",
  phoneHref: "tel:+5553999297361",
  instagram: "@carla.sfreitas_26",
  instagramHref: "https://www.instagram.com/carla.sfreitas_26/",
  crbio: "CRBio 45378-03D",
  since: 2004,
};

export function yearsOfExperience() {
  return new Date().getFullYear() - CONTACT.since;
}

export const PRIMARY_CTA = "Solicitar avaliação";

export const NAV_ITEMS = [
  { name: "Sobre", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Contato", href: "#contact" },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  short: string;
  category: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: ClipboardCheck,
    title: "Licenciamento Ambiental",
    short: "Licenciamento",
    category: "Licenciamento e regularização",
    description:
      "Condução completa do processo de licença, do enquadramento inicial ao atendimento de condicionantes junto ao órgão ambiental.",
  },
  {
    icon: FileText,
    title: "Laudo de Cobertura Vegetal",
    short: "Cobertura vegetal",
    category: "Estudos e laudos",
    description:
      "Diagnóstico da composição e do estado da vegetação, com base técnica para licenças e intervenções na área.",
  },
  {
    icon: Scissors,
    title: "Poda, Transplante e Extração de Árvores",
    short: "Manejo arbóreo",
    category: "Projetos e manejo",
    description:
      "Projetos de manejo arbóreo e plantio compensatório conforme as normas ambientais e municipais, com acompanhamento em cada etapa.",
  },
  {
    icon: Sprout,
    title: "Recuperação de Áreas Degradadas (PRAD)",
    short: "PRAD",
    category: "Projetos e manejo",
    description:
      "Planos de restauração ecológica para devolver função e cobertura a áreas impactadas, com cronograma e monitoramento.",
  },
  {
    icon: FileSearch,
    title: "Estudo de Impacto Ambiental (EIA/RIMA)",
    short: "EIA/RIMA",
    category: "Estudos e laudos",
    description:
      "Avaliação de impactos, medidas mitigadoras e compensatórias para empreendimentos de maior porte.",
  },
  {
    icon: Building2,
    title: "Licenciamento e Regularização de Loteamentos",
    short: "Loteamentos",
    category: "Licenciamento e regularização",
    description:
      "Suporte técnico para aprovar e regularizar loteamentos urbanos e rurais conforme a legislação vigente.",
  },
  {
    icon: Recycle,
    title: "Plano de Gerenciamento de Resíduos (PGRS)",
    short: "PGRS",
    category: "Projetos e manejo",
    description:
      "Planos sob medida para segregar, armazenar e destinar resíduos corretamente, com foco em conformidade.",
  },
  {
    icon: FileCheck,
    title: "Cadastro Ambiental Rural (CAR)",
    short: "CAR",
    category: "Licenciamento e regularização",
    description:
      "Inscrição e retificação do CAR com análise técnica da propriedade à luz do Código Florestal.",
  },
  {
    icon: ShieldAlert,
    title: "Defesa de Multas e Notificações Ambientais",
    short: "Defesa de multas",
    category: "Licenciamento e regularização",
    description:
      "Defesas técnicas e recursos administrativos para autos de infração, multas e notificações.",
  },
  {
    icon: Trees,
    title: "Inventário Florestal e Arbóreo",
    short: "Inventário florestal",
    category: "Estudos e laudos",
    description:
      "Levantamento quantitativo e qualitativo da vegetação, com identificação de espécies e estado fitossanitário.",
  },
];
