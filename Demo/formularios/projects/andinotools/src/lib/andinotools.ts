export class Andinotools {

    money: Intl.NumberFormat = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
    });
  
    moneyFormat(money: number): string {
      return this.money.format(money);
    }
  
    rutValidator(value:any):string{
      if (/^(\d{1,3}(?:\.?\d{3}){2}-?[\dkK])$/.test(value)) {
        const num = value.slice(0, -1);
        let letra = value.slice(-1).toUpperCase();
        letra = letra == 'K' ? 10 : parseInt(letra);
        letra = letra == 0 ? 11 : parseInt(letra);
  
        let suma = 0
        let multiplo = 2;
        for (let i = 1; i <= num.length; i++) {
          let index = multiplo * num.charAt(num.length - i);
          suma = suma + index;
          multiplo = multiplo < 7 ? multiplo + 1 : 2;
        }
        const letraEsperada = 11 - (suma % 11);
        console.log(letraEsperada)
        console.log(letraEsperada, letra);
        return letraEsperada == letra
          ? ''
          : 'El rut no coincide con el cv';
      } else {
        return 'El formato del rut es invalido';
      }
    }
    
  }
  