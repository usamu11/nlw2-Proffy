import React from "react";

import PageHeader from "../../Components/PageHeader";
import Input from "../../Components/Input";
import Textarea from "../../Components/Textarea";
import Select from "../../Components/Select";

import waringIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro é preencher esse formulário de inscrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatAapp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <footer>
          <p>
            <img src={waringIcon} alt="Aviso Importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
