import { Component } from '@angular/core';
import { NavParams, ViewController  } from 'ionic-angular';

@Component({
  selector: 'page-detalhes-parametros',
  templateUrl: 'detalhes-parametros.html'
})
export class DetalhesParametros {

  public parametro;
  public texto;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.parametro = navParams.get('parametro');
    this.carregarParametros();
  }

  carregarParametros(){
      if(this.parametro == 'DQO'){
          this.texto = `A Demanda Química de Oxigênio, identificada pela sigla DQO, é um parâmetro indispensável nos 
              estudos de caracterização de esgotos sanitários e de efluentes industriais, ela avalia a 
              quantidade de oxigênio dissolvido consumido em meio ácido que leva à degradação de matéria orgânica.`;
        }
      else if(this.parametro == 'DBO'){
          this.texto = `A Demanda Bioquímica de Oxigênio representa a quantidade de oxigênio necessária para oxidar a 
                matéria orgânica presente na água através da decomposição microbiana aeróbia. A DBO5,20 é a quantidade 
                de oxigênio consumido durante 5 dias em uma temperatura de 20°C.
                Valores altos de DBO5,20, num corpo d'água são provocados geralmente causados pelo lançamento de cargas 
                orgânicas, principalmente esgotos domésticos. A ocorrência de altos valores deste parâmetro causa uma 
                diminuição dos valores de oxigênio dissolvido na água, o que pode provocar mortandades de peixes e 
                eliminação de outros organismos aquáticos.`;
              
        }
      else if(this.parametro == 'pH - Potencial Hidrogeniônico'){
          this.texto = `O pH afeta o metabolismo de várias espécies aquáticas. A Resolução `+
                  `CONAMA 357 estabelece que para a proteção da vida aquática o pH deve estar entre 6 e 9.`+
                  `Alterações nos valores de pH também podem aumentar o efeito de substâncias químicas `+
                  `que são tóxicas para os organismos aquáticos, tais como os metais pesados.`;
      }
      else if(this.parametro == 'Oxigênio Dissolvido'){
          this.texto = `O oxigênio dissolvido é vital para a preservação da vida aquática, já que vários organismos 
                  (ex: peixes) precisam de oxigênio para respirar. As águas poluídas por esgotos apresentam baixa 
                  concentração de oxigênio dissolvido pois o mesmo é consumido no processo de decomposição da 
                  matéria orgânica. Por outro lado as águas limpas apresentam concentrações de oxigênio 
                  dissolvido mais elevadas, geralmente superiores a 5mg/L, exceto se houverem condições naturais 
                  que causem baixos valores deste parâmetro. As águas eutrofizadas (ricas em nutrientes) 
                  podem apresentar concentrações de oxigênio superiores a 10 mg/L, situação conhecida como 
                  supersaturação. Isto ocorre principalmente em lagos e represas em que o excessivo crescimento 
                  das algas faz com que durante o dia, devido a fotossíntese, os valores de oxigênio fiquem mais 
                  elevados. Por outro lado, durante a noite não ocorre a fotossíntese, e a respiração dos 
                  organismos faz com que as concentrações de oxigênio diminuam bastante, podendo causar 
                  mortandades de peixes. Além da fotossíntese, o oxigênio também é introduzido nas águas 
                  através de processo físicos, que dependem das características hidráulicas dos corpos d’água 
                  (ex: velocidade da água).`;
      }
      else if(this.parametro == 'Nitrogênio'){
          this.texto = 'Nos corpos d’água o nitrogênio pode ocorrer nas formas de nitrogênio orgânico, amoniacal, '+
                'nitrito e nitrato. Os nitratos são tóxicos aos seres humanos, e em altas concentrações causa '+
                'uma doença chamada metahemoglobinemia infantil, que é letal para crianças. Pelo fato '+
                'dos compostos de nitrogênio serem nutrientes nos processos biológicos, seu lançamento em '+
                'grandes quantidades nos corpos d’água, junto com outros nutrientes tais como o fósforo, '+
                'causa um crescimento excessivo das algas, processo conhecido como eutrofização, o que pode '+
                'prejudicar o abastecimento público, a recreação e a preservação da vida aquática.'+
                'As fontes de nitrogênio para os corpos d’água são variadas, sendo uma das principais o '+
                'lançamento de esgotos sanitários e efluentes industriais. Em áreas agrícolas, o escoamento da '+
                'água das chuvas em solos que receberam fertilizantes também é uma fonte de nitrogênio, assim '+
                'como a drenagem de águas pluviais em áreas urbanas.'
                'Também ocorre a fixação biológica do nitrogênio atmosférico pelas algas e bactérias. '+
                'Além disso, outros processos, tais como a deposição atmosférica pelas águas das chuvas também '+
                'causam aporte de nitrogênio aos corpos d’água.';
      }

      else if(this.parametro == 'Fósforo'){
          this.texto = 'Do mesmo modo que o nitrogênio, o fósforo é um importante nutriente para os processos biológicos '+
                'e seu excesso pode causar a eutrofização das águas. Para conhecer mais sobre eutrofização, veja o '+
                'item sobre o Índice de Estado Trófico. Entre as fontes de fósforo destacam-se os esgotos '+
                'domésticos, pela presença dos detergentes superfosfatados e da própria matéria fecal. '+
                'A drenagem pluvial de áreas agrícolas e urbanas também é uma fonte significativa de fósforo para'+
                'os corpos d’água. Entre os efluentes industriais destacam-se os das indústrias de fertilizantes, '+
                'alimentícias, laticínios, frigoríficos e abatedouros.';
      }

      else if(this.parametro == 'Resíduos'){
          this.texto =  'O resíduo total é a matéria que permanece após a evaporação, secagem ou calcinação da amostra '+
                'de água durante um determinado tempo e temperatura. Quando os resíduos sólidos se depositam '+
                'nos leitos dos corpos d’água podem causar seu assoreamento, que gera problemas para a navegação '+
                'e pode aumentar o risco de enchentes. Além disso podem causar danos à vida aquática pois ao se '+
                'depositarem no leito eles destroem os organismos que vivem nos sedimentos e servem de alimento '+
                'para outros organismos, além de danificar os locais de desova de peixes.';
      }
      else if(this.parametro == 'Cor'){
          this.texto = '';
      }
      else if(this.parametro == 'Turbidez'){
          this.texto = 'A turbidez indica o grau de atenuação que um feixe de luz sofre ao atravessar a água. Esta '+
                'atenuação ocorre pela absorção e espalhamento da luz causada pelos sólidos em suspensão '+
                '(silte, areia, argila, algas, detritos, etc. ). A principal fonte de turbidez é a erosão '+
                'dos solos, quando na época das chuvas as água pluviais trazem uma quantidade significativa de '+
                'material sólido para os corpos d’água.<br> Atividades de mineração, assim como o lançamento de '+
                'esgotos e de efluentes industriais, também são fontes importantes que causam uma elevação da '+
                'turbidez das águas. O aumento da turbidez faz com que uma quantidade maior de produtos '+
                'químicos (ex: coagulantes) sejam utilizados nas estações de tratamento de águas, aumentando os '+
                'custos de tratamento. Além disso, a alta turbidez também afeta a preservação '+
                'dos organismos aquáticos, o uso industrial e as atividades de recreação.';
      }
      else if(this.parametro == 'Condutividade'){
          this.texto = 'A condutividade elétrica da água representa a facilidade ou dificuldade de passagem da '+
              'eletricidade na água. Os compostos orgânicos e inorgânicos contribuem ou interferem na '+
              'condutividade, de acordo com sua concentração na amostra, e a correta representação '+
              'da temperatura possui um fator preponderante na medição correta da condutividade elétrica.';
      }
      else if(this.parametro == 'Bacteriológico'){
          this.texto = 'As bactérias coliformes termotolerantes ocorrem no trato intestinal de animais de sangue quente '+
              'e são indicadoras de poluição por esgotos domésticos. Elas não são patogênicas (não causam doenças) '+
              'mas sua presença em grandes números indicam a possibilidade da existência de microorganismos '+
              'patogênicos que são responsáveis pela transmissão de doenças de veiculação hídrica '+
              '(ex: desinteria bacilar, febre tifóide, cólera).';
      }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
