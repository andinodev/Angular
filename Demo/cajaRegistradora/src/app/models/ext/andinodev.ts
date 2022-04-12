export class Andinodev {

  money: Intl.NumberFormat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });

  moneyFormat(money: number): string {
    return this.money.format(money);
  }

  
}
