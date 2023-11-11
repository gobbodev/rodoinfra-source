import {
  Input,
  InputMask,
  Textarea,
} from "codiedigital/dist/cjs/components/inputs";
import { api } from "codiedigital/dist/cjs/services/api";

import { FormHandler } from "src/utils/form-handler";

export function FormContact() {
  return (
    <FormHandler
      button={{ text: "Enviar", className: "font-16" }}
      onSucess={async (data) => await api.post("/contato", data)}
      defaultSchemas={{
        phone: true,
        email: true,
        name: true,
        message: true,
      }}
    >
      <Input
        type="name"
        name="name"
        label="Nome Completo"
        placeholder="Digite seu nome aqui"
      />

      <Input
        type="email"
        name="email"
        label="E-mail"
        placeholder="Digite seu email aqui"
      />

      <InputMask
        className="telefone"
        mask="(99) 99999 9999"
        name="phone"
        label="Telefone"
        placeholder="(DDD) 00000-0000"
      />

      <Textarea
        name="message"
        label="Mensagem"
        placeholder="O que deseja nos dizer?"
      />
    </FormHandler>
  );
}
