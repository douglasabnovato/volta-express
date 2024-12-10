# Volta Express V4

- Foco da plataforma é atrair a atenção de usuário 
- Atração são funcionalidades e serviços que solucionam problemas dos clientes do nosso ecossistema
- Incluir o design do Google Maps para dentro da aplicação
- Analisar ciclo de vida dos usuários da plataforma.
- Cérebro: automação da interação das informações dos clientes
- DESAFIO: realizar mais viagens

### Gerais

- [x] Nossa equipe de suporte atende no whatsapp, 5532998615190
- [x] Forms para interação com clientes
  - [x] Formulários no domínio volta
  - [x] ter forms reservas 
  - [x] permissão dos forms
  - [x] aperfeiçoar o copy dos formulários

### Seções em ordem com objetivo estratégico 

- header
- como usar o volta express / mapa de cargas / mapa de motoristas
- banner
- transporte com a gente
- depoimentos
- anunciantes
- parceiros transportadores
- footer

### Portal MVP

- [x] Botão de contato: Número Whatsapp
- [x] Mobile: tres botões no hamburguer 
- [x] Legenda: inserir uma legenda para os mapas 
- [ ] Componente rect com google maps
- [ ] Novo form inteligente
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
  
### Marketing Digital

- [ ] Seção institucional Sobre 
  - [ ] vídeo
  - [ ] membros da equipe
  - [ ] texto explicativo
- [ ] Seção Como usar
  - [o] Vídeo com demonstração como usar as funcionalidades 
    - [ ] dimensionar para mobile 
    - [ ] Ferramentas usadas para gerar: wondershare filmora 14, obs studio, veed.io
  - [ ] Vídeo com montagem digital, self em ambiente de fundo
  - [ ] Texto explicativo com Imagem real de motorista, de anunciantes, de transportadoras
- [ ] Seção de Planos: opções das ofertas comerciais 
- [ ] Copy: adicionar mais elementos 
- [ ] Copy: aperfeiçoar o storytelling 

### Redes Sociais

- [ ] Redes sociais Volta Express: 
  - [x] [Instagram](https://www.instagram.com/voltaexpressbrasil): @voltaexpressbrasil
  - [ ] Facebook
  - [ ] Youtube: vídeos institucionais 
  - [ ] Whatsapp

### Outbound para redes sociais

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

### Google Maps 

- [x] mapa do geocode 
- [x] adicionar os 2 mapas em abas conforme foco no clientDe  
- [x] responsividade 
- [x] abertura do mapa com mais zoom: Mundi, Brasil, Juiz de Fora   
- [ ] Rota em destaque: cor no mapa
- [ ] Rota em texto: ordem das ruas 
- [ ] Filtrar por palavra no mapa (autocomplete) - palavras chaves 
- [ ] Estilizar os cards de informação
- [ ] Problema: "Nenhuma pessoa me contactou!": personalizar a mensagem do card.
- [ ] Destacar a rota ao clicar em um ícone da rota na origem ou no destino

#### Dados do marketing

- [ ] Saber que os anúncios funcionaram. 
  - [ ] Funcionar significa que o transporte aconteceu por causa do *Volta Express*
- [ ] Google Ads
  - [ ] configurar na plataforma e capturar
  - [ ] entender as informações dos acessos com o Link em relatório
  - [ ] aperfeiçoar interações

### Relacionamento com os clientes

- [x] Whatsapp: botão de whatsapp para conversa 
- [ ] Seção feeback: espaço para OUVIR as pessoas para melhor direcionar
- [o] Seção FAQ : pegar informações para esclarecimentos

#### Whatsapp 

- [ ] ChatBot com a api do whatsapp para atendimento inteligente

### Processos

- Fluxo de Trabalho
- Fluxo de Operação
- Gestão de Negócio 
- Gestão de Desenvolvimento
  - Branches do workflow: main, dev-volta-express-v4, volta-express-v4

#### TO-DO 19-11-2024 

- [ ] atualizar informações do site - mergh
- [ ] atualizar to do no kaban teams - mergh
- [ ] subir funcionalidades no portal - novato
  - [x] legenda nos mapas
  - [x] transporte com a gente: ajustes de ux
  - [ ] atualizar vídeo

#### TO-DO 24-11-2024 

- [ ] criar um form integrado a um bd que atualiza o mapa automaticamente - mergh
- [ ] o banco de dados sql - torres
- [ ] fazer a integração, forms, excel - torres e mergh

# Volta Express V3

- Focar no preenchimento dos formulários para permitir abordagens e anúncios dos stakeholders.

### Evoluções

- [x] Rodapé: Link para o documento oficial da LGPD
- [x] Rodapé: Botão de contato com Número Whatsapp

### Copies

- Os botões com textos com ordens das funcionalidades
- Os cards com textos atrativos para conversão

### Whatsapp e o suporte 

- um botão de whatsapp nos anúncios com o número oficial
  
# Volta Express V2

O objetivo dessa aplicação é permitir anunciantes encontrarem parceiros transportadores para realizar seus transportes de mercadorias.

Também é nosso objetivo reduzir a zero o transporte a vazio dos veículos.

### Informações

- projeto nascido como Ferrex
- gestão do projeto detalhado no trello
- desenhar as regras de negócios no fluxo da aplicação 
- esclarecer as funcionalidades
- esclarecer as tarefas de design
- validar novas funcionalidades
- desenvolver novas funcionalidades
- atualizar o mvp em produção

### Organização do projeto

- Componente da Página: Blog
- Componente da AppBar: Header 
- Componente do Banner Principal: MainFeaturedPost 
- Componente de Depoimentos: FeaturedPost 
- Componentes dos Formulários: Blog
- Componente do Transporte com a gente: Checkout 
- Componente do Rodapé: Footer
    
### Itens dos Formulários

- Formulário para Cadastrar
- Formulário do Anunciante
- Formulário do Parceiro Transportador
    
### Identidade Visual

As cores da aplicação em hexadecimal

- botão: #9C27B0
- azul: #1976D2
- true blue: #0073CF
- dark blue: #00008B
- blue gray: #6699CC
- royal blue: #4169E1
- misty blue: #A0AFB7

### Tarefas para desenvolver

- a responsividade dos componentes
- a posição dos botões
- o desenho do favicon 

# Volta Express V1

- Seção Header
  - Logo
  - Botão transporte com a gente
  - Botão Venha para o volta express
- Seção Banner Principal
- Seção Depoimentos
- Seção Anunciantes
- Seção Parceiros Transportadores
- Seção Transporte com a gente
- Seção Mapas
- Seção Footer

### Hospedagem

servidor: Netlify
url: https://volta-express.netlify.app
