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

### Organização das partes do projeto

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
    
### Informações de Formulários

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

### Configurações da ferramenta emailJS

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

variáveis internnas

/* .env */ 

REACT_APP_SERVICE_ID=service_gklzazh
REACT_APP_TEMPLATE_ID=template_x9619s8
REACT_APP_USER_ID=user_PuGzNRfau2NSL-qu2  
