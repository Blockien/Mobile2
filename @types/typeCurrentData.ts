export type CurrencyData = {
  code: string; // Código da moeda (ex: USD)
  codein: string; // Código da moeda de conversão (ex: BRL)
  name: string; // Nome descritivo da moeda
  high: string; // Maior valor da moeda no dia
  low: string; // Menor valor da moeda no dia
  pctChange: string; // Porcentagem de variação da moeda
  bid: string; // Preço de compra
  ask: string; // Preço de venda
  varBid: string; // Variação do valor de compra
  timestamp: string; // Timestamp no formato UNIX
  create_date: string; // Data de criação no formato ISO
};
