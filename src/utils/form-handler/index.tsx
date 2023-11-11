import { Button } from "components/data";

import { IFormHandler } from "codiedigital/dist/cjs/utils/form-handler/interfaces";
import { FormHandler as FormHandlerCodie } from "codiedigital/dist/cjs/utils/form-handler";

const configsFormHandler = {
  ButtonComponent: Button,
};

export function FormHandler(props: Omit<IFormHandler, "ButtonComponent">) {
  return <FormHandlerCodie {...configsFormHandler} {...props} />;
}
