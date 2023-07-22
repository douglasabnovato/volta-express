import { useState } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";

function Order() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [namemerchandise, setNamemerchandise] = useState("");
  const [typemerchandise, setTypemerchandise] = useState("");
  const [volumemerchandise, setVolumemerchandise] = useState("");
  const [dataembarque, setDataembarque] = useState("");
  const [localembarque, setLocalembarque] = useState("");
  const [datadesembarque, setDatadesembarque] = useState("");
  const [localdesembarque, setLocaldesembarque] = useState("");
  const [danfefiscal, setDanfefiscal] = useState("");
  const [docimportacao, setDocimportacao] = useState("");
  const [docexportacao, setDocexportacao] = useState("");
  const [imgcontaineraberto, setImgcontaineraberto] = useState("");
  const [message, setMessage] = useState("");

  const handleMyLocaldesembarque = (event) => {
    setLocaldesembarque(event.target.value);
  };

  const handleMyLocalembarque = (event) => {
    setLocalembarque(event.target.value);
  };

  const handleMyVolumemerchandise = (event) => {
    setVolumemerchandise(event.target.value);
  };

  const handleMyTypemerchandise = (event) => {
    setTypemerchandise(event.target.value);
  };

  function sendEmail(e) {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      namemerchandise === "" ||
      typemerchandise === "" ||
      volumemerchandise === "" ||
      dataembarque === "" ||
      localembarque === "" ||
      datadesembarque === "" ||
      localdesembarque === "" ||
      danfefiscal === "" ||
      docimportacao === "" ||
      docexportacao === "" ||
      imgcontaineraberto === "" ||
      message === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      responsible_name: name,
      responsible_email: email,
      name_merchandise: namemerchandise,
      type_merchandise: typemerchandise,
      volume_merchandise: volumemerchandise,
      data_embarque: dataembarque,
      local_embarque: localembarque,
      data_desembarque: datadesembarque,
      local_desembarque: localdesembarque,
      danfe_fiscal: danfefiscal,
      doc_importacao: docimportacao,
      doc_exportacao: docexportacao,
      img_containeraberto: imgcontaineraberto,
      message: message,
    };

    emailjs
      .send(
        "service_7ugy94a",
        "template_7g59wmx",
        templateParams,
        "Qmnk5elKziH-nz_fL"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO COM SUCESSO.", response.status, response.text);
          setName("");
          setEmail("");
          setNamemerchandise("");
          setTypemerchandise("");
          setVolumemerchandise("");
          setDataembarque("");
          setLocalembarque("");
          setDatadesembarque("");
          setLocaldesembarque("");
          setMessage("");
          setDanfefiscal("");
          setDocimportacao("");
          setDocexportacao("");
          setImgcontaineraberto("");
        },
        (err) => {
          console.log("ERRO AO TENTAR ENVIAR EMAIL: ", err);
        }
      );
  }

  return (
    <div className="container">
      <form className="form" onSubmit={sendEmail}>

        <h3 className="title">Responsável</h3>

        {/*
          Vindo do login

          razão social
          cnpj
          endereço matriz
          responsável pela logística
          contato do responsável      
        */}

        <div className="info">
          <label className="formLabel">
            Quem é a pesssoa responsável pela mercadoria?
          </label>
          <input
            name="nomeCompleto"
            className="formInput"
            type="text"
            placeholder="O nome completo"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <span className="formSpan">{/*{errorMessage}*/}</span>
        </div>
        <div className="info">
          <label className="formLabel">Informe o seu melhor e-mail </label>
          <input
            className="formInput"
            type="email"
            placeholder="Um e-mail para contato"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <span className="formSpan">{/*{errorMessage}*/}</span>
        </div>

        <h3 className="title">Mercadoria</h3>

        <div className="info">
          <label className="formLabel">
            Qual é a mercadoria que quer transportar?
          </label>
          <input
            className="formInput"
            type="text"
            placeholder="O nome da mercadoria"
            onChange={(e) => setNamemerchandise(e.target.value)}
            value={namemerchandise}
          />
          <span className="formSpan">{/*{errorMessage}*/}</span>
        </div>        
        <div className="info">
          <label className="formLabel">
            Qual é o tipo da mercadoria transportada?
          </label>
          <select
            className="formSelect"
            type="text"
            value={typemerchandise}
            onChange={handleMyTypemerchandise}
          >
            <option value={0}>Escolha o tipo da mercadoria</option>
            <option value="Eletro_Eletronicos">Eletro e Eletrônicos</option>
            <option value="Alimento_Nao_Perecivel">
              Alimento Não Perecível
            </option>
            <option value="Pecas_Industria">Peças e Indústria</option>
            <option value="Material_Limpeza_e_Descartaveis">
              Material de Limpeza e Descartáveis
            </option>
            <option value="Outros">
              Outros - Adicionar em mais informações
            </option>
          </select>
          <span className="formSpan">{/*{errorMessage}*/}</span>
        </div>
        <div className="info">
          <label className="formLabel">Volume (pés)</label>
          <select
            className="formSelect"
            type="text"
            value={volumemerchandise}
            onChange={handleMyVolumemerchandise}
          >
            <option value={0}>Escolha o volume transportado</option>
            <option value="container_vazio_20_pes">Container vazio: 20 Pés</option>
            <option value="container_vazio_40_pes">
              Container vazio: 40 Pés
            </option>
            <option value="container_cheio_20_pes">Container cheio: 20 Pés</option>
            <option value="container_cheio_40_pes">
              Container cheio: 40 Pés
            </option>
          </select>
          <span className="formSpan">{/*{errorMessage}*/}</span>
        </div>

        <h3 className="title">Viagem</h3>

        <div className="info">
          <label className="formLabel">Data embarque</label>
          <input
            className="formInput"
            type="date"
            placeholder="Escolha o melhor dia"
            onChange={(e) => setDataembarque(e.target.value)}
            value={dataembarque}
          />
          <span className="formSpan">{/*{errorMessage}*/}</span>
        </div>
        <div className="info">
          <label className="formLabel">Local embarque</label>
          <select
            className="formSelect"
            type="text"
            onChange={handleMyLocalembarque}
            value={localembarque}
          >
            <option value={0}>Escolha o melhor local de embarque</option>
            <option value="porto_iguai">
              Porto Iguaí - Estrada Prefeito Wilson Pedro Francisco - Itaguaí - RJ
              BR CEP 23825-410
            </option>
            <option value="porto_santos">
              Porto de Santos - Avenida Cnso. Rodrigues Alves - Santos - SP BR CEP
              11015-900
            </option>
            <option value="porto_granbel">
              Porto Seco Granbel - Rodovia BR-381 433000 - Betim - MG BR CEP
              32530-000
            </option>
          </select>
          <span className="formSpan">{/*{errorMessage}*/}</span>
        </div>
        <div className="info">
          <label className="formLabel">Data desembarque</label>
          <input
            className="formInput"
            type="date"
            placeholder="Escolha a mehor data"
            onChange={(e) => setDatadesembarque(e.target.value)}
            value={datadesembarque}
          />
          <span className="formSpan">{/*{errorMessage}*/}</span>
        </div>
        <div className="info">
          <label className="formLabel">Local desembarque</label>
          <select
            className="formSelect"
            type="text"
            onChange={handleMyLocaldesembarque}
            value={localdesembarque}
          >
            <option value={0}>Escolha o melhor local de desembarque</option>
            <option value="porto_iguai">
              Porto Iguaí - Estrada Prefeito Wilson Pedro Francisco - Itaguaí - RJ
              BR CEP 23825-410
            </option>
            <option value="porto_santos">
              Porto de Santos - Avenida Cnso. Rodrigues Alves - Santos - SP BR CEP
              11015-900
            </option>
            <option value="porto_granbel">
              Porto Seco Granbel - Rodovia BR-381 433000 - Betim - MG BR CEP
              32530-000
            </option>
          </select>
          <span className="formSpan">{/*{errorMessage}*/}</span>
        </div>

        <h3 className="title">Documentos para anexar</h3>

        <div className="info">
          <label className="formLabel" for="doc_1">
            Danfe Nota Fiscal:
          </label>
          <input
            className="formFile"
            type="file"
            placeholder="Danfe Nota Fiscal"
            id="doc_1"
            name="doc_1"
            accept="image/png, image/jpeg"
            multiple
            onChange={(e) => setDanfefiscal(e.target.value)}
            value={danfefiscal}
          />
          <span className="formSpan">{/*{errorMessage}*/}</span>
        </div>

        <div className="info">
          <label className="formLabel" for="doc_2">
            Documento de Importação:
          </label>
          <input
            className="formFile"
            type="file"
            placeholder="Documento de Importação"
            id="doc_2"
            name="doc_2"
            accept="image/png, image/jpeg"
            multiple
            onChange={(e) => setDocimportacao(e.target.value)}
            value={docimportacao}
          />
          <span className="formSpan">{/*{errorMessage}*/}</span>
        </div>

        <div className="info">
          <label className="formLabel" for="doc_3">
            Documento de Exportação:
          </label>
          <input
            className="formFile"
            type="file"
            placeholder="Documento de Exportação"
            id="doc_3"
            name="doc_3"
            accept="image/png, image/jpeg"
            multiple
            onChange={(e) => setDocexportacao(e.target.value)}
            value={docexportacao}
          />
          <span className="formSpan">{/*{errorMessage}*/}</span>
        </div>

        <div className="info">
          <label className="formLabel" for="doc_4">
            Imagens do Container Aberto:
          </label>
          <input
            className="formFile"
            type="file"
            placeholder="Imagens do Container Aberto"
            id="doc_4"
            name="doc_4"
            accept="image/png, image/jpeg"
            multiple
            onChange={(e) => setImgcontaineraberto(e.target.value)}
            value={imgcontaineraberto}
          />
          <span className="formSpan">{/*{errorMessage}*/}</span>
        </div>

        <h3 className="title">Mais informações importantes</h3>

        <textarea
          className="textarea"
          placeholder={"Faltou algo importante? Adicione aqui mais detalhes."}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="ENVIAR" />
      </form>
    </div>
  );
}

export default Order;
