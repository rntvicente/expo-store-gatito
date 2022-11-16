function CurrencyFormat (value) {
  return Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency'
  }).format(value);
}

export default CurrencyFormat;