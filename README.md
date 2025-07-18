# Volta Express Brasil

## V5

Um novo modelo de negócio com inteligência para logística.

A plataforma de prateleiras para dar match entre os anúncios de cargas e os transportadores cadastrados.

Propósito do Volta Express Brasil é criar oportunidades para a parte mais frágil da relação desse ecossistema de Logística.

## Pages

### Home

Será o principal ambiente de divulgação da marca Volta Express Brasil
Seguimentação de persona: Transportador ou Embarcador

### Page quero transportar

- [x] Quando clicar em "transportar agora", deve cair no whatsapp da pessoa que está anunciando (link: https://wa.me/5532998615190)
  - mensagem: Olá! Gostei do seu anúncio no Volta Express Brasil - Transportar Agora! Quero saber mais detalhes. : https://wa.me/5532998615190?text=Ol%C3%A1!%20Gostei%20do%20seu%20an%C3%BAncio%20no%20Volta%20Express%20Brasil%20-%20Transportar%20Agora!%20Quero%20saber%20mais%20detalhes.
  - Botão estilizado e com ícone do whatsapp

#### Seção Home

- [ ] Foco de ação para o cliente
  - Qual o objetivo desse conteúdo?
  - Qual a objeção superada?
  - cta para levar para a lista ativa da ação principal
  - cta para permitir anunciar

### Page quero carregar

- [x] Quando clicar em carregar agora, deve cair no whatsapp da pessoa que está anunciando
  - mensagem: Olá! Gostei do seu anúncio no Volta Express Brasil - Carregar Agora! Quero saber mais detalhes. : https://wa.me/5532998615190?text=Ol%C3%A1!%20Gostei%20do%20seu%20an%C3%BAncio%20no%20Volta%20Express%20Brasil%20-%20Carregar%20Agora!%20Quero%20saber%20mais%20detalhes.  
  - Botão estilizado e com ícone do whatsapp

#### Seção Home

- [ ] Foco de ação para o cliente
  - Qual o objetivo desse conteúdo?
  - Qual a objeção superada?
  - cta para levar para a lista ativa da ação principal
  - cta para permitir anunciar

### Page Cadastrar

Teremos uma home de login para se identificar como transportador ou embarcador.

- [ ] home login
- [ ] login transportador
- [ ] login embarcador

Tratar seção e validação. cadastrar, entrar, trocar senha.

- [ ] validações

### Anúncios

- [ ] Botão de whatsapp de cada card de anúncio com o número de contato do respectivo anúncio

## Forms

### Google

#### Embarcador

- [ ] Cadastro do Embarcador (cadastro de embarcador e caminhão):

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdtUzKmapxQKWFjIaADxmI2nyOyvyELG0E9GFMkmQCvwBCfFg/viewform?embedded=true" width="640" height="1714" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>

- [ ] listar atributos
- [ ] ajustar design, dentro do form
- [ ] remover cabeçalho
- [ ] ajustar imagens
- [ ] apresentar mensagem ao terminar envio 

- [ ] Anúncio do Embarcador (anúncio de viagem):

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdEERHf9DlfKV6ExlJWAqO2rkrEfiDm7j52nJ8QE3pMg809-g/viewform?embedded=true" width="640" height="2244" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>

- [ ] listar atributos
- [ ] ajustar design, dentro do form
- [ ] remover cabeçalho
- [ ] ajustar imagens
- [ ] apresentar mensagem ao terminar envio

#### Transportador

- [ ] Cadastro do Transportador (cadastro de transportador)

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSft9tp8rgdYr8ZQ3-QJlUcNulJa1GfDmeSsezeH1joUDah5uQ/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>

- [ ] listar atributos
- [ ] ajustar design, dentro do form
- [ ] remover cabeçalho
- [ ] ajustar imagens
- [ ] apresentar mensagem ao terminar envio

- [ ] Anúncio do Transportador (anúncio da carga ):

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeFjrVBNm2cwfAl7l9CuvAyxEHsomHJIF6AvvLOX7YygpbinA/viewform?embedded=true" width="640" height="2295" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>

- [ ] listar atributos
- [ ] ajustar design, dentro do form
- [ ] remover cabeçalho
- [ ] ajustar imagens
- [ ] apresentar mensagem ao terminar envio

### Jotform

Plataforma de solução para capturar informações.
Cada formulário com seus atributos e seus respectivos objetivos.

- Após enviar, deve mostar que foi enviado para análise.
- Implementar: https://www.jotform.com/help/597-how-to-get-google-maps-api-key-for-jotform-mapping-widgets/
- Implementar: https://jotmap.jotform.io/
- Testar Show Map Location : Para verificar se vai puxar a latitude e longitude da origem e destino do anunciante
- Aperfeiçoar Design do Jotform

- Anunciar carga:

```html
<iframe
  id="JotFormIFrame-250908223798668"
  title="Detalhes Viagem"
  onload="window.parent.scrollTo(0,0)"
  allowtransparency="true"
  allow="geolocation; microphone; camera; fullscreen; payment"
  src="https://form.jotform.com/250908223798668"
  frameborder="0"
  style="min-width: 100%; max-width: 100%; height: 539px; border: none"
  scrolling="no"
>
</iframe>
<script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"></script>
<script>
  window.jotformEmbedHandler(
    "iframe[id='JotFormIFrame-250908223798668']",
    "https://form.jotform.com/"
  );
</script>
```

- Anunciar viagem:

```html
<iframe
  id="JotFormIFrame-250906267526057"
  title="Anunciar Viagem do Caminhão"
  onload="window.parent.scrollTo(0,0)"
  allowtransparency="true"
  allow="geolocation; microphone; camera; fullscreen; payment"
  src="https://form.jotform.com/250906267526057"
  frameborder="0"
  style="min-width: 100%; max-width: 100%; height: 539px; border: none"
  scrolling="no"
>
</iframe>
<script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"></script>
<script>
  window.jotformEmbedHandler(
    "iframe[id='JotFormIFrame-250906267526057']",
    "https://form.jotform.com/"
  );
</script>
```
 
## ROADMAP

### google meu negócio

- configurar atributos para gerar informações

### redes socias

- analisar quais perfis são estratégicos
- criar perfis
- criar, validar conteúdos
- agendar e compartilhar conteúdo

### Comunicação

#### E-mail especializados:

  - marketing@voltaexpressbrasil.com 
  - vendas@voltaexpressbrasil.com 

#### Whatsapp

  - alterar o nome e ícone no whatsapp para Volta Express Brasil
      - Volta Express Brasil : suporte 
      - Volta Express Brasil | Equipe : equipe Volta Express

### Suporte

- whatsapp de suporte:
  - mensagem do botão do whatsapp
    - Olá! Gostei do seu anúncio no Volta Express Brasil - Carregar Agora! Quero saber mais detalhes.
    - Olá! Gostei do seu anúncio no Volta Express Brasil - Transportar Agora! Quero saber mais detalhes.

## QA

Desenhar os testes

### Geral

- [x] Favicon personalizado: home, transportador, embarcador
- [x] Quero Transportar - Favicon: aumentar tamanho
- [x] Quero Transportar - Logo: aumentar tamanho

### DevOps

- [x] fazer o domínio com volta express brasil: https://douglasabnovato.github.io/volta-express-brasil/

### PRIMEIRA TELA

- [x] Ao abrir no Edge , com 100% do zoom ele corta a frase "Entrar no Volta Express Brasil" que fica no menu ancoragem de bloco azul
- [x] A frase: "No Volta Express Brasil temos a sua solução!" a parte de "sua solução" está apagado. Sugestão mesma cor do Volta Express Brasil
- [x] Melhorar as duas frases em caixa azul e clicáveis
      sugestão: Tenho Caminhão e Busco Carga / Tenho Carga e Busco Caminhão
- [x] Botão principal está abrindo nova janela e não deve abrir nova janela para que possamos analisar via Google Analytics
- [x] Footer: Ícones de redes sociais: facebook, instagram , youtube, twitter

### TELA: TENHO CAMINHÃO E BUSCO CARGA

- [x] Trocar palavras em inglês para português
- [x] Melhor não ter no momento barra de pesquisa
- [x] No lugar de ter barra de pesquisa tem botão de CTA para levar para lista ativa e outro para levar para um formulário que o caminhoneiro anuncia sua disponibilidade de viagem (jotform)
- [x] Diminuir para 9 exposições de cargas
- [ ] Criar paginação dos anúncios para ir navegando para modo logado
- [ ] Mostrar nos cards o mapa, peso da carga, volume e data
- [ ] Desenvolver a funcionalidade de Newsletter
- [ ] Desenvolver a funcionalidade de FAQ

### TELA: TENHO CARGA E BUSCO CAMINHÃO

- [x] Trocar palavras em inglês para português
- [x] Melhor não ter no momento barra de pesquisa
- [x] No lugar de ter barra de pesquisa tem botão de CPA para levar para lista ativa e outro para levar para um formulário que o remetente anuncia sua disponibilidade de carga (jotform)
- [x] Diminuir para 9 exposições de cargas
- [ ] Criar paginação dos anúncios para ir navegando para modo logado
- [ ] Mostrar nos cards o mapa, peso da carga, volume e data
- [ ] Desenvolver a funcionalidade de Newsletter
- [ ] Desenvolver a funcionalidade de FAQ

### TELA: ENTRAR NO VOLTA EXPRESS

- [ ] Mudar texto de inglês para português
- [ ] Colocar formulário do jotform

### Fluxo de Telas

- [ ] Temos que criar depois uma página pós corrida, aonde o intuito é ter uma avlaiação igual do bla bla car

# Volta Express V4

Um projeto de inteligência em logística e interação.

Um preview das últimas versões, 3 e 4, do projeto pois são importantes fluxos.

## versão 4.0 - Volta Express

- ![Home 1 - instruções](./.github/v4-home-1.jpg)

- ![Home 2 - mapa](./.github/v4-home-2.jpg)

- ![Home 3 - mapa](./.github/v4-home-3.jpg)

- ![Depoimento 1](./.github/v4-depoimento-1.jpg)

- ![Anunciantes 1](./.github/v4-anunciantes-1.jpg)

- ![Transportadores 1](./.github/v4-transportadores-1.jpg)

- ![FAQ e Footer 1](./.github/v4-faq-1.jpg)

## versão 3.0 - Volta Express

- ![Home 1](./.github/v3-home-1.jpg)

- ![Anunciantes 2](./.github/v3-anunciantes-1.jpg)

- ![Transportadores 3](./.github/v3-transportadores-1.jpg)

- ![Anunciar 4](./.github/v3-anunciar-1.jpg)

- ![Mapas 5](./.github/v3-instrucoes-1.jpg)

- ![Mapas 6](./.github/v3-mapas-1.jpg)

- ![Mapas 7](./.github/v3-mapas-2.jpg)

- ![Footer 8](./.github/v3-footer-1.jpg)

### Detalhes de Projetos

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
- [x] Warnings: correções para hospedagem no servidor

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
- [x] Legenda: inserir uma legenda para os mapas (versão v4)
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
  - [ ] Vídeo com demonstração como usar as funcionalidades
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
  - [ ] Funcionar significa que o transporte aconteceu por causa do _Volta Express_
- [ ] Google Ads
  - [ ] configurar na plataforma e capturar
  - [ ] entender as informações dos acessos com o Link em relatório
  - [ ] aperfeiçoar interações

### Relacionamento com os clientes

- [x] Whatsapp: botão de whatsapp para conversa
- [o] Seção feeback: espaço para OUVIR as pessoas para melhor direcionar (modelo newsletter)
- [x] Seção FAQ : 2 perguntas e respostas para esclarecimentos

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
