# Volta Express

O objetivo dessa aplicação é permitir anunciantes encontrarem parceiros transportadores para realizar seus transportes de mercadorias.

Também é nosso objetivo reduzir a zero o transporte a vazio dos veículos.

### Informações

- disponibilizar um mvp em produção
- desenvolver novas funcionalidades
- fazer as tarefas de design
- fazer as funcionalidades
- desenhar as regras de negócios no fluxo da aplicação
- ajustar uma versão para demonstração hoje
- consultar o trello da última reunião
- nascido como Ferrex
- pivotado para Volta Express

### Referências

- [fastfrete](https://www.fastfrete.com.br/)
- [transfercar](https://www.transfercar.com.br/)

### Detalhes do projeto

Componente da Página
    
    Blog

Componente da AppBar

    Header

Componente do Banner Principal

    MainFeaturedPost

Componente de Depoimentos
    
    FeaturedPost

Componentes dos Formulários

    Blog

    Anunciantes:
        Checkout
        AddressForm
        PaymentForm
        Review 
        
    Transportadores:
        Checkout
        AddressForm
        PaymentForm
        Review 
        
Componente do Rodapé

    Footer

Informações de Formulários

Anunciantes

Cadastrar

Steve Paul Jobs
stevepaul@jobs.com.br
Apple Park Way, Cupertino, Califórnia, USA
CA 95014 
(408) 996–1010

Mercadoria

Macintosh 1984
Eletronico
até 1 metro m³
Valor sentimental

Transportar

Endereços de trajeto

de:
Alameda Itu, 203-131 - Jardim Paulista, São Paulo - SP, 01421-000, 15/06/2024

para:
R. Conselheiro Carrão, 605 - Bela Vista, São Paulo - SP, 01328-000, 22/06/2024

emailJS

to email : douglas.novato@voltaexpress2023.onmicrosoft.com
cc: maykon.soares@voltaexpress2023.onmicrosoft.com
reply to: email_do_cliente
email_do_cliente: gabriel.mergh@voltaexpress2023.onmicrosoft.com

service
nome: volta-express-anunciante
ID servico: service_gklzazh 

template
TemplateID: template_x9619s8

Subject: Volta Express para {{assunto}}

Olá {{firstName}},

Parabéns por estar usando nossa plataforma Volta Express.

Abaixo segue os detalhes do seu pedido:

CADASTRAR 10 params
Primeiro nome do responsável: {{firstName}}
Último nome: {{lastName}}
Seu melhor email: {{email}}
Telefone whatsapp: {{phone}}
Endereço principal: {{address1}}
Cidade: {{city1}}
Estado: {{state1}}
CEP: {{zip1}}
País: {{country1}}
Ciente LGPD: {{lgpd1}}
 
MERCADORIA 5 params
Nome da mercadoria: {{merchandise}}
Tipo da mercadoria: {{merchandiseType}}
Volume da mercadoria: {{merchandiseVolume}}
Mais informações importantes: {{importantInformation}}
Ciente LGPD: {{lgpd2}}

TRANSPORTAR 11 params
Endereço para carregar: {{address2}}
Cidade: {{city2}}
Estado: {{state2}}
CEP: {{zip2}}
Carregar em: {{dateCar2}}
----
Endereço para descarregar: {{address3}}
Cidade: {{city3}}
Estado: {{state3}}
CEP: {{zip3}}
Descarregar em: {{dateDescar3}}
Ciente LGPD: {{lgpd3}}

"Transportar a um clique!"
Equipe Volta Express

javascript code

````javascript
emailjs.send("service_gklzazh","template_x9619s8",{
assunto: "Anunciante",
nome: "Mark",
firstName: "Mark",
lastName: "Zuckerberg",
email: "markzuckerberg@meta.com",
phone: "14478947896",
address1: "Rua dos Artores, 2243",
city1: "Juiz dos Cerrados",
state1: "Minas Gerais",
zip1: "36435-432",
country1: "Brasil",
lgpd1: "yes",
merchandise: "Mac Pro 16",
merchandiseType: "Informática",
merchandiseVolume: "145 unidades",
importantInformation: "20 caixas",
lgpd2: "no",
address2: "Rua das Lagoas, 1123",
city2: "Santos Anjos",
state2: "Minas Gerais",
zip2: "36334-635",
dateCar2: "18/06/2024",
address3: "Rua dos Artores, 2243",
city3: "Juiz do Cerrados",
state3: "Minas Gerais",
zip3: "36435-432",
dateDescar3: "25/06/2024",
lgpd3: "yes",
});
````

````html
<form id="form">
  <div class="field">
    <label for="assunto">assunto</label>
    <input type="text" name="assunto" id="assunto">
  </div>
  <div class="field">
    <label for="nome">nome</label>
    <input type="text" name="nome" id="nome">
  </div>
  <div class="field">
    <label for="firstName">firstName</label>
    <input type="text" name="firstName" id="firstName">
  </div>
  <div class="field">
    <label for="lastName">lastName</label>
    <input type="text" name="lastName" id="lastName">
  </div>
  <div class="field">
    <label for="email">email</label>
    <input type="text" name="email" id="email">
  </div>
  <div class="field">
    <label for="phone">phone</label>
    <input type="text" name="phone" id="phone">
  </div>
  <div class="field">
    <label for="address1">address1</label>
    <input type="text" name="address1" id="address1">
  </div>
  <div class="field">
    <label for="city1">city1</label>
    <input type="text" name="city1" id="city1">
  </div>
  <div class="field">
    <label for="state1">state1</label>
    <input type="text" name="state1" id="state1">
  </div>
  <div class="field">
    <label for="zip1">zip1</label>
    <input type="text" name="zip1" id="zip1">
  </div>
  <div class="field">
    <label for="country1">country1</label>
    <input type="text" name="country1" id="country1">
  </div>
  <div class="field">
    <label for="lgpd1">lgpd1</label>
    <input type="text" name="lgpd1" id="lgpd1">
  </div>
  <div class="field">
    <label for="merchandise">merchandise</label>
    <input type="text" name="merchandise" id="merchandise">
  </div>
  <div class="field">
    <label for="merchandiseType">merchandiseType</label>
    <input type="text" name="merchandiseType" id="merchandiseType">
  </div>
  <div class="field">
    <label for="merchandiseVolume">merchandiseVolume</label>
    <input type="text" name="merchandiseVolume" id="merchandiseVolume">
  </div>
  <div class="field">
    <label for="importantInformation">importantInformation</label>
    <input type="text" name="importantInformation" id="importantInformation">
  </div>
  <div class="field">
    <label for="lgpd2">lgpd2</label>
    <input type="text" name="lgpd2" id="lgpd2">
  </div>
  <div class="field">
    <label for="address2">address2</label>
    <input type="text" name="address2" id="address2">
  </div>
  <div class="field">
    <label for="city2">city2</label>
    <input type="text" name="city2" id="city2">
  </div>
  <div class="field">
    <label for="state2">state2</label>
    <input type="text" name="state2" id="state2">
  </div>
  <div class="field">
    <label for="zip2">zip2</label>
    <input type="text" name="zip2" id="zip2">
  </div>
  <div class="field">
    <label for="dateCar2">dateCar2</label>
    <input type="text" name="dateCar2" id="dateCar2">
  </div>
  <div class="field">
    <label for="address3">address3</label>
    <input type="text" name="address3" id="address3">
  </div>
  <div class="field">
    <label for="city3">city3</label>
    <input type="text" name="city3" id="city3">
  </div>
  <div class="field">
    <label for="state3">state3</label>
    <input type="text" name="state3" id="state3">
  </div>
  <div class="field">
    <label for="zip3">zip3</label>
    <input type="text" name="zip3" id="zip3">
  </div>
  <div class="field">
    <label for="dateDescar3">dateDescar3</label>
    <input type="text" name="dateDescar3" id="dateDescar3">
  </div>
  <div class="field">
    <label for="lgpd3">lgpd3</label>
    <input type="text" name="lgpd3" id="lgpd3">
  </div>

  <input type="submit" id="button" value="Send Email" >
</form>

<script type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

<script type="text/javascript">
  emailjs.init('nnWebI7HvvKl219MH')
</script>
````

````javascript
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_x9619s8';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
````
/* .env */ 

REACT_APP_SERVICE_ID=service_gklzazh
REACT_APP_TEMPLATE_ID=template_x9619s8
REACT_APP_USER_ID=user_PuGzNRfau2NSL-qu2  

---

service
nome: volta-express-transportador
ID servico: service_dy2wmvn

template