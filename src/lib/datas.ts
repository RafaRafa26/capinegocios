// Datas no formato AAAA-MM-DD, exibidas sempre em UTC para não variar com o fuso do servidor.

const formatoData = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: "UTC",
});

export const formatarData = (iso: string) => formatoData.format(new Date(`${iso}T00:00:00Z`));
