import type { Ferramenta } from "./tipos";

// Dados de exemplo. Textos de explicação e FAQ precisam de revisão antes da publicação.

const faqEstimativa = {
  pergunta: "O resultado tem valor oficial?",
  resposta:
    "Não. O cálculo é uma estimativa informativa. Para casos específicos, confirme com seu contador.",
};

export const ferramentas: Ferramenta[] = [
  // Trabalhistas
  {
    slug: "calculadora-de-salario-liquido",
    categoria: "trabalhistas",
    nome: "Calculadora de salário líquido",
    resumo: "Descubra quanto sobra do salário depois dos descontos de INSS e IRRF.",
    variante: "completa",
    usaTabelasLegais: true,
    lancadaEm: "2026-09-01",
    atualizadaEm: "2026-09-01",
    comoUsar: [
      "Informe o salário bruto do mês.",
      "Adicione o número de dependentes e outros descontos, se houver.",
      "Veja o salário líquido e o detalhamento de cada desconto.",
    ],
    explicacao: [
      "O salário líquido é o valor que o funcionário recebe depois dos descontos obrigatórios.",
      "Primeiro sai a contribuição ao INSS, calculada por faixas. Sobre o que sobra, aplica-se a tabela do Imposto de Renda.",
    ],
    faq: [
      {
        pergunta: "Vale-transporte entra no cálculo?",
        resposta: "Pode entrar como desconto adicional, informado no campo de outros descontos.",
      },
      faqEstimativa,
    ],
    guia: "o-que-entra-no-custo-de-um-funcionario",
    relacionadas: ["calculadora-de-custo-do-funcionario", "calculadora-de-horas-extras", "calculadora-de-ferias"],
  },
  {
    slug: "calculadora-de-ferias",
    categoria: "trabalhistas",
    nome: "Calculadora de férias",
    resumo: "Calcule o valor das férias com o terço constitucional e os descontos.",
    variante: "completa",
    usaTabelasLegais: true,
    lancadaEm: "2026-08-15",
    atualizadaEm: "2026-09-10",
    comoUsar: [
      "Informe o salário bruto e a média de horas extras, se houver.",
      "Escolha quantos dias de férias serão tirados e se haverá venda de dias.",
      "Confira o valor bruto, os descontos e o valor líquido a pagar.",
    ],
    explicacao: [
      "As férias são pagas com o salário do período acrescido de um terço.",
      "Sobre esse valor incidem INSS e IRRF, conforme as tabelas vigentes.",
    ],
    faq: [
      {
        pergunta: "Quando as férias precisam ser pagas?",
        resposta: "O pagamento deve ser feito antes do início do período de descanso.",
      },
      faqEstimativa,
    ],
    guia: "como-calcular-ferias",
    relacionadas: ["calculadora-de-decimo-terceiro", "calculadora-de-salario-liquido", "calculadora-de-custo-do-funcionario"],
  },
  {
    slug: "calculadora-de-decimo-terceiro",
    categoria: "trabalhistas",
    nome: "Calculadora de 13º salário",
    resumo: "Veja o valor da primeira e da segunda parcela do 13º salário.",
    variante: "completa",
    usaTabelasLegais: true,
    lancadaEm: "2026-08-20",
    atualizadaEm: "2026-09-10",
    comoUsar: [
      "Informe o salário bruto e os meses trabalhados no ano.",
      "Escolha se quer ver a primeira ou a segunda parcela.",
      "Confira o valor de cada parcela e os descontos.",
    ],
    explicacao: [
      "O 13º é proporcional aos meses trabalhados no ano.",
      "A primeira parcela não tem descontos. INSS e IRRF são descontados na segunda.",
    ],
    faq: [faqEstimativa],
    guia: "como-calcular-decimo-terceiro",
    relacionadas: ["calculadora-de-ferias", "calculadora-de-salario-liquido"],
  },
  {
    slug: "calculadora-de-horas-extras",
    categoria: "trabalhistas",
    nome: "Calculadora de horas extras",
    resumo: "Calcule o valor das horas extras com o adicional correto.",
    variante: "completa",
    usaTabelasLegais: true,
    lancadaEm: "2026-09-05",
    atualizadaEm: "2026-09-05",
    comoUsar: [
      "Informe o salário e a jornada mensal.",
      "Digite a quantidade de horas extras e o percentual de adicional.",
      "Veja o valor da hora normal, da hora extra e o total.",
    ],
    explicacao: [
      "A hora extra é a hora normal acrescida de um adicional definido em lei ou em convenção coletiva.",
    ],
    faq: [faqEstimativa],
    relacionadas: ["calculadora-de-salario-liquido", "calculadora-de-custo-do-funcionario"],
  },
  {
    slug: "calculadora-de-custo-do-funcionario",
    categoria: "trabalhistas",
    nome: "Calculadora de custo do funcionário",
    resumo: "Descubra quanto um funcionário custa por mês, além do salário.",
    variante: "completa",
    usaTabelasLegais: true,
    lancadaEm: "2026-09-20",
    atualizadaEm: "2026-09-20",
    comoUsar: [
      "Informe o salário e o regime tributário da empresa.",
      "Adicione benefícios como vale-transporte e vale-refeição.",
      "Veja o custo mensal e anual, com cada encargo separado.",
    ],
    explicacao: [
      "Além do salário, entram no custo encargos, provisões de férias e 13º e benefícios.",
      "O peso dos encargos muda conforme o regime tributário da empresa.",
    ],
    faq: [faqEstimativa],
    guia: "o-que-entra-no-custo-de-um-funcionario",
    relacionadas: ["calculadora-de-salario-liquido", "calculadora-de-ferias", "calculadora-de-decimo-terceiro"],
  },

  // Documentos
  {
    slug: "gerador-de-recibo",
    categoria: "documentos",
    nome: "Gerador de recibo",
    resumo: "Preencha os dados e baixe um recibo em PDF pronto para assinar.",
    variante: "completa",
    usaTabelasLegais: false,
    lancadaEm: "2026-07-10",
    atualizadaEm: "2026-08-01",
    comoUsar: [
      "Preencha quem paga, quem recebe, o valor e a descrição.",
      "Confira a pré-visualização.",
      "Baixe o PDF. Nada é enviado para servidores.",
    ],
    explicacao: [
      "O recibo comprova que um pagamento foi feito. Ele deve trazer valor, data, descrição e a identificação das partes.",
    ],
    faq: [
      {
        pergunta: "Meus dados ficam salvos?",
        resposta: "Não. O documento é gerado no seu navegador e nada é enviado para o site.",
      },
    ],
    guia: "como-fazer-um-recibo",
    relacionadas: ["gerador-de-orcamento", "gerador-de-nota-promissoria"],
  },
  {
    slug: "gerador-de-nota-promissoria",
    categoria: "documentos",
    nome: "Gerador de nota promissória",
    resumo: "Monte uma nota promissória preenchida e baixe em PDF.",
    variante: "completa",
    usaTabelasLegais: false,
    lancadaEm: "2026-07-20",
    atualizadaEm: "2026-07-20",
    comoUsar: [
      "Informe devedor, credor, valor e data de vencimento.",
      "Confira a pré-visualização.",
      "Baixe o PDF e colha a assinatura.",
    ],
    explicacao: [
      "A nota promissória é uma promessa de pagamento por escrito. Ela precisa de alguns dados obrigatórios para ter validade.",
    ],
    faq: [faqEstimativa],
    relacionadas: ["gerador-de-recibo", "gerador-de-orcamento"],
  },
  {
    slug: "gerador-de-orcamento",
    categoria: "documentos",
    nome: "Gerador de orçamento",
    resumo: "Crie um orçamento com itens, valores e validade, e envie em PDF.",
    variante: "completa",
    usaTabelasLegais: false,
    lancadaEm: "2026-10-01",
    atualizadaEm: "2026-10-01",
    comoUsar: [
      "Adicione os dados do seu negócio e do cliente.",
      "Inclua os itens com quantidade e valor.",
      "Defina a validade e baixe o PDF.",
    ],
    explicacao: [
      "Um orçamento claro evita mal-entendidos: descreve o que será entregue, por quanto e até quando o preço vale.",
    ],
    faq: [faqEstimativa],
    relacionadas: ["gerador-de-recibo", "calculadora-de-margem"],
  },

  // Financeiras
  {
    slug: "calculadora-de-juros",
    categoria: "financeiras",
    nome: "Calculadora de juros",
    resumo: "Simule juros simples e compostos de um empréstimo ou aplicação.",
    variante: "completa",
    usaTabelasLegais: false,
    lancadaEm: "2026-06-15",
    atualizadaEm: "2026-08-10",
    comoUsar: [
      "Informe o valor, a taxa e o prazo.",
      "Escolha entre juros simples e compostos.",
      "Veja o total pago e a evolução mês a mês.",
    ],
    explicacao: [
      "Nos juros simples, a taxa incide sempre sobre o valor inicial. Nos compostos, incide sobre o saldo acumulado.",
    ],
    faq: [faqEstimativa],
    relacionadas: ["calculadora-de-margem", "calculadora-de-ponto-de-equilibrio"],
  },
  {
    slug: "calculadora-de-margem",
    categoria: "financeiras",
    nome: "Calculadora de margem",
    resumo: "Descubra a margem de lucro de um produto ou o preço para atingir a margem desejada.",
    variante: "completa",
    usaTabelasLegais: false,
    lancadaEm: "2026-06-20",
    atualizadaEm: "2026-08-10",
    comoUsar: [
      "Informe o custo do produto e o preço de venda.",
      "Ou informe o custo e a margem desejada para ver o preço ideal.",
      "Confira a margem e o markup.",
    ],
    explicacao: [
      "Margem é quanto do preço de venda vira lucro. Markup é quanto se soma ao custo para chegar ao preço.",
    ],
    faq: [
      {
        pergunta: "Margem e markup são a mesma coisa?",
        resposta: "Não. A margem é calculada sobre o preço de venda; o markup, sobre o custo.",
      },
    ],
    guia: "como-calcular-margem-de-lucro",
    relacionadas: ["calculadora-de-ponto-de-equilibrio", "gerador-de-orcamento"],
  },
  {
    slug: "calculadora-de-ponto-de-equilibrio",
    categoria: "financeiras",
    nome: "Calculadora de ponto de equilíbrio",
    resumo: "Saiba quanto precisa vender por mês para pagar todas as contas.",
    variante: "completa",
    usaTabelasLegais: false,
    lancadaEm: "2026-09-25",
    atualizadaEm: "2026-09-25",
    comoUsar: [
      "Informe os custos fixos do mês.",
      "Informe o preço médio de venda e o custo variável por unidade.",
      "Veja quantas unidades e quanto faturamento cobrem os custos.",
    ],
    explicacao: [
      "O ponto de equilíbrio é o faturamento em que o negócio não tem lucro nem prejuízo.",
    ],
    faq: [faqEstimativa],
    guia: "ponto-de-equilibrio-o-que-e",
    relacionadas: ["calculadora-de-margem", "calculadora-de-juros"],
  },

  // Utilitários (variante leve)
  {
    slug: "sorteio-online",
    categoria: "utilitarios",
    nome: "Sorteio online",
    resumo: "Sorteie nomes de uma lista para promoções e brindes.",
    variante: "leve",
    usaTabelasLegais: false,
    lancadaEm: "2026-05-10",
    atualizadaEm: "2026-05-10",
    comoUsar: [],
    explicacao: [
      "Serve para sortear ganhadores de promoções no Instagram ou no WhatsApp, escolher a ordem de atendimento ou dividir tarefas de forma imparcial.",
    ],
    faq: [],
    relacionadas: ["gerador-de-numeros-aleatorios"],
  },
  {
    slug: "gerador-de-numeros-aleatorios",
    categoria: "utilitarios",
    nome: "Gerador de números aleatórios",
    resumo: "Gere números aleatórios dentro de um intervalo, com ou sem repetição.",
    variante: "leve",
    usaTabelasLegais: false,
    lancadaEm: "2026-10-05",
    atualizadaEm: "2026-10-05",
    comoUsar: [],
    explicacao: [
      "Serve para rifas, sorteios por número, escolha de cupons e qualquer situação em que você precise de um número imparcial.",
    ],
    faq: [],
    relacionadas: ["sorteio-online"],
  },
];
