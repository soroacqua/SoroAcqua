import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform, AlertController } from 'ionic-angular';
import { ProjetosView } from './projetos-view/projetos-view'

@Component({
  selector: 'page-projetos-rio',
  templateUrl: 'projetos-rio.html'
})
export class ProjetosRio {

  public projetos: Array<any>;

  constructor(public navCtrl: NavController, public platform: Platform, public actionsheetCtrl: ActionSheetController,
              public alertCtrl: AlertController) {
    this.carregarProjetos();
  }

  carregarProjetos(){
    this.projetos = [
            {titulo: 'Caminhada Ecológica',
            texto: 'No dia 19 de março, a partir das 8h30, acontece a segunda edição da Caminhada Ecológica pelo Parque Linear do Rio Sorocaba e a tradicional Expedição do Rio Sorocaba, que já está em sua oitava edição. Na caminhada os participantes vão recolher os resíduos depositado às margens do rio Sorocaba. A ação visa sensibilizar as pessoas sobre os impactos da disposição incorreta do lixo nas ruas, arrastado pelas chuvas até o manancial. O início da ação ocorrerá em duas frentes de trabalho: no Centro de Educação Ambiental do Rio Sorocaba (CEA Rio Sorocaba) e no Parque das Águas, no Jardim Abaeté. Quem escolher sair do CEA Rio Sorocaba percorrerá cerca de 8 quilômetros até o Parque das Águas. Já quem quiser ir direto ao parque participará de um mutirão de limpeza na área. O grupo da caminhada se encontrará aproximadamente às 10h com o grupo da expedição, momento onde ocorrerá a saída de bairro, que vai percorrer o trecho entre a Ponte Padre Madureira e o Parque das Águas. Nesta edição, a expedição conta com o apoio e a participação da Polícia Ambiental, Corpo de Bombeiros, SAAE Sorocaba, Defesa Civil e Prefeitura de Votorantim. ',
            data: '19/03/2016', hora: '08:30', valor: 'Gratuito',
            inscricoes: 'Para participar da Caminhada Ecológica os interessados devem se inscrever no início da atividade',
            local: 'CEA Rio Sorocaba - Av. Dom Aguirre - Centro (em frente ao Poupatempo)',
            imagem: 'imagens/caminhada-ecologica.jpg'},
            //--
            {titulo: 'Plantio de mudas',
            texto: 'Além do plantio os agentes da secretaria fizeram a coleta de materiais recicláveis à margem do rio. A retirada ocorreu próximo ao plantio. O objetivo da ação é conscientizar a população da importância em manter o espaço sempre limpo. O plantio de 60 mudas de árvores nativas ocorreu na área atrás do terminal de ônibus, onde serão plantadas diversas mudas da vegetação regional e com funções ecológicas, como produção de néctar e frutos para a fauna silvestre. Entre as mudas plantadas estão aroeira mansa, guatambu, jequitibá branco, urucum, peito de pomba, ingá, entre outras. Com essa ação a Sema pretende incrementar a vegetação na margem do Rio Sorocaba, proporcionando a redução do assoreamento do leito do rio, bem como auxiliando na manutenção da qualidade das águas e na propagação da vegetação como habitat à fauna silvestre.',
            data: '08/06/2016', hora: '09:00', valor: 'Gratuito',
            inscricoes: 'Basta comparecer no CEA Rio Sorocaba',
            local: 'CEA Rio Sorocaba - Av. Dom Aguirre - Centro (em frente ao Poupatempo)',
            imagem: 'imagens/plantio-mudas.jpg'},
            //--
            {titulo: 'Tour do Rio Sorocaba',
            texto: 'Nesta quarta-feira (dia 28), a população pode participar gratuitamente do Tour do Rio Sorocaba em três horários: das 8h às 10h, das 10h às 12h e das 14h às 17h. Já os servidores públicos terão a mesma oportunidade das 14h às 17h. O passeio ocorrerá num ônibus movido a gás natural veicular (GNV) ou biometano, considerado o primeiro do Brasil. Pela manhã, partindo do Centro de Educação Ambiental do Rio Sorocaba (CEA Rio Sorocaba), localizado em frente ao Poupatempo, os participantes vão percorrer o trecho urbano do rio, passando pela Praça da Biodiversidade, Parque Municipal “Porto das Águas” e o Parque das Águas, no Jardim Abaeté. Em cada parada, os técnicos abordarão as questões ambientais e as curiosidades de cada local.',
            data: '28/09/2016', hora: 'das 8h às 10h, das 10h às 12h e das 14h às 17h', valor: 'Gratuito',
            inscricoes: 'As inscrições podem ser feitas gratuitamente, das 8h às 17h, pelo telefone (15) 3238.2366 ou pessoalmente na Secretaria do Meio Ambiente (Sema), até esta terça-feira (27)',
            local: 'CEA Rio Sorocaba - Av. Dom Aguirre - Centro (em frente ao Poupatempo)',
            imagem: 'imagens/tour-rio.jpg'}
    ];
  }

  openPage(projeto){
      this.navCtrl.push(ProjetosView, {
        projeto: projeto
      });
  }

  getItems(ev) {
    this.carregarProjetos();

    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.projetos = this.projetos.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Compartilhar',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Facebook',
          icon: 'logo-facebook',
          handler: () => {
            console.log('Facebook clicked');

            //alert
            let alert = this.alertCtrl.create({
                //title: 'Facebook',
                subTitle: 'O projeto foi compartilhado com sucesso no Facebook!',
                buttons: ['OK']
              });
              alert.present();
          }
        },
        {
          text: 'WhatsApp',
          icon: 'logo-whatsapp',
          handler: () => {
              console.log('WhatsApp clicked');

              //alert
              let alert = this.alertCtrl.create({
                  subTitle: 'O projeto foi compartilhado com sucesso no WhatsApp!',
                  buttons: ['OK']
                });
                alert.present();
          }
        },
        {
          text: 'Gmail',
          icon: 'mail',
          handler: () => {
              console.log('Gmail clicked');

              //alert
              let alert = this.alertCtrl.create({
                  subTitle: 'O projeto foi compartilhado com sucesso no Gmail!',
                  buttons: ['OK']
                });
                alert.present();
          }
        },
        {
          text: 'Outlook',
          icon: 'mail',
          handler: () => {
              console.log('Outlook clicked');

              //alert
              let alert = this.alertCtrl.create({
                  subTitle: 'O projeto foi compartilhado com sucesso no Outlook!',
                  buttons: ['OK']
                });
                alert.present();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          handler: () => {
              console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
