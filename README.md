# Volta Express V4

Projeto nascido como Ferrex.

O objetivo dessa aplicação é permitir anunciantes encontrarem parceiros transportadores para realizar seus transportes de mercadorias com eficiência.

Também é nosso objetivo reduzir a zero o transporte a vazio dos veículos.

## Nosso segredo 

- Foco da plataforma é atrair a atenção de usuário 
- Atração são funcionalidades e serviços que solucionam problemas dos clientes do nosso ecossistema
- Incluir o design do Google Maps para dentro da aplicação
- Analisar ciclo de vida dos usuários da plataforma.
- Cérebro: automação da interação das informações dos clientes
- DESAFIO: realizar mais viagens

### Processos

- Fluxo de Trabalho:
  - reunião semanal para funcionalidades da aplicação
  - reunião diretória para estratégias da startup
- Fluxo de Operação: 
  - caminho das informações na aplicação
- Gestão de Negócio: to-do no kaban teams
- Gestão de Desenvolvimento
  - Branches do workflow: main, dev-volta-express-v4, volta-express-v4
  - github project

### Workflow

- gestão do projeto detalhado no teams project
- desenhar as regras de negócios no fluxo da aplicação 
- esclarecer as funcionalidades
- esclarecer as tarefas de design
- validar novas funcionalidades
- desenvolver novas funcionalidades
- atualizar o mvp em produção 

### Seções em ordem com objetivo estratégico 

- Seção Header
  - Logo
  - Botão transporte com a gente
  - Botão Venha para o volta express
- Seção Mapas: como usar o volta express / mapa de cargas / mapa de motoristas
- Seção Banner Principal
- Seção Transporte com a gente
- Seção Depoimentos
- Seção Anunciantes
- Seção Parceiros Transportadores
- Seção FAQ
- Seção Feeback
- Seção Footer   

#### Seção Footer
   
- [x] Rodapé: Link para o documento oficial da LGPD
- [x] Rodapé: Botão de contato com Número Whatsapp

### Relacionamento com os clientes
 
- [x] Nossa equipe de suporte atende no whatsapp, 5532998615190
- [x] Seção FAQ : 4 perguntas e respostas para esclarecimentos
- [x] Seção FEEDBACK: espaço para OUVIR as pessoas para melhor direcionar

### Requisitos importantes

- a responsividade dos componentes
- a posição dos botões mobile e desktop
- o desenho do favicon personalizado para salvar na área de trabalho
- Botão de contato: Número Whatsapp
- Mobile: tres botões no hamburguer 

### Formulários

Elaboração de formulários focado no preenchimento para permitir abordagens e anúncios dos stakeholders com eficiência e boas práticas de experiences.

- Formulário para Cadastrar
- Formulário do Anunciante
- Formulário do Parceiro Transportador

#### Estruturação

- [x] Forms para interação com clientes
  - [x] Formulários no domínio volta
  - [x] ter forms reservas 
  - [x] permissão dos forms
  - [x] aperfeiçoar o copy dos formulários
- [x] Warnings: correções para hospedagem no servidor  

#### Estruturação Form inteligente

- [ ] criar um form integrado a um bd que atualiza o mapa automaticamente - mergh
- [ ] o banco de dados sql - torres
- [ ] fazer a integração, forms, excel - torres e mergh
- [ ] Modelos:
  - [ ] Simples: para quem está querendo transportar a carga
    - [ ] origem
    - [ ] destino
    - [ ] data opcional (sumir quando chegar a data)
    - [ ] observações 
    - [ ] contatos
  - [ ] Avançado: para caminhoneiro. 
    - [ ] primeira pergunta:se a pessoa está em transito ou está aguardando
      - [ ] em trânsito
        - [ ] origem
        - [ ] destino
        - [ ] tipo de caminhao
        - [ ] contato
        - [ ] observações
      - [ ] está aguardando
        - [ ] origem
        - [ ] tipo de caminhão
        - [ ] contato
        - [ ] observações 
 
### Palesta de Cores

- botão: #9C27B0
- azul: #1976D2
- true blue: #0073CF
- dark blue: #00008B
- blue gray: #6699CC
- royal blue: #4169E1
- misty blue: #A0AFB7

### Whatsapp  

- um botão de whatsapp nos anúncios com o número oficial

#### Atendimento inteligente 

- [ ] ChatBot com a api do whatsapp   

### Copies

- Os botões com textos com ordens das funcionalidades
- Os cards com textos atrativos para conversão
- Aperfeiçoar os textos estáticos

### Google Maps 
  
- [ ] Componente rect com google maps 
- [x] Legenda: inserir uma legenda para os mapas 
- [x] mapa do geocode 
- [x] adicionar os 2 mapas em abas conforme foco no clientDe  
- [x] responsividade 
- [x] abertura do mapa com mais zoom: Mundi, Brasil, Juiz de Fora  
- [x] transporte com a gente: ajustes de ux
- [ ] atualizar vídeo
- [ ] Rota em destaque: cor no mapa
- [ ] Rota em texto: ordem das ruas 
- [ ] Filtrar por palavra no mapa (autocomplete) - palavras chaves 
- [ ] Estilizar os cards de informação
- [ ] Problema: "Nenhuma pessoa me contactou!": personalizar a mensagem do card.
- [ ] Destacar a rota ao clicar em um ícone da rota na origem ou no destino

### Marketing Digital

- [ ] Seção institucional Sobre 
  - [ ] vídeo
  - [ ] membros da equipe
  - [ ] texto explicativo
- [ ] Seção Como usar
  - [ ] Vídeo com demonstração como usar as funcionalidades 
    - [ ] dimensionar para mobile 
    - [ ] Ferramentas usadas para gerar: wondershare filmora 14, obs studio, veed.io
  - [ ] Vídeo com montagem digital, self em ambiente de fundo
  - [ ] Texto explicativo com Imagem real de motorista, de anunciantes, de transportadoras
- [ ] Seção de Planos: opções das ofertas comerciais 
- [ ] Copy: adicionar mais elementos 
- [ ] Copy: aperfeiçoar o storytelling 

#### Dados do marketing Digital

- [ ] Saber que os anúncios funcionaram. 
  - [ ] Funcionar significa que o transporte aconteceu por causa do *Volta Express*
- [ ] Google Ads
  - [ ] configurar na plataforma e capturar
  - [ ] entender as informações dos acessos com o Link em relatório
  - [ ] aperfeiçoar interações

### Redes Sociais

- [ ] Redes sociais Volta Express: 
  - [x] [Instagram](https://www.instagram.com/voltaexpressbrasil): @voltaexpressbrasil
  - [ ] Facebook
  - [ ] Youtube: vídeos institucionais 
  - [ ] Whatsapp

#### Outbound para redes sociais

- [ ] Instagram / Facebook
  - [ ] Stories 
  - [ ] Feeds
  - [ ] Vídeos Curtos
- [ ] Youtube
  - [ ] Vídeos Institucionais
- [ ] Whatsapp
  - [ ] Campanhas para aquecer os Leads
- [ ] Roadmap de disparos
- [ ] Roadmap de postagens

### Hospedagem

- Servidor Netlify: https://volta-express.netlify.app
