import { useEffect } from "react";
import { FormContainer, Row, InputCep, InputRua, InputUF, InputCity } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  cep: yup.string().required("O CEP é obrigatório").length(8, "O CEP deve ter 8 dígitos"),
  rua: yup.string().required("A rua é obrigatória"),
  numero: yup.string().required("O número é obrigatório"),
  bairro: yup.string().required("O bairro é obrigatório"),
  cidade: yup.string().required("A cidade é obrigatória"),
  uf: yup
    .string()
    .required("O UF é obrigatório")
    .length(2, "O UF deve ter 2 caracteres"),
  complemento: yup.string().optional(),
});

interface AddressFormData {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
}

interface AddressFormProps {
  onValidate: (isValid: boolean, data?: AddressFormData) => void;
}

export function AddressForm({ onValidate }: AddressFormProps) {
  const {
    register,
    setValue,
    getValues,
    trigger,
    watch,
    formState: { errors, isValid },
  } = useForm<AddressFormData>({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
  });

  // Watch all form fields
  const formData = watch();

  useEffect(() => {
    onValidate(isValid, isValid ? formData : undefined);
  }, [isValid, formData, onValidate]);

  const fetchAddress = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        toast.error("CEP não encontrado.");
        return;
      }

      const fieldsToUpdate = {
        rua: data.logradouro || "",
        bairro: data.bairro || "",
        cidade: data.localidade || "",
        uf: data.uf || "",
      };

      Object.entries(fieldsToUpdate).forEach(([field, value]) => {
        setValue(field as keyof AddressFormData, value, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
      });

      await trigger(["rua", "bairro", "cidade", "uf"]);
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      toast.error("Erro ao buscar o CEP. Verifique sua conexão.");
    }
  };

  const handleCepBlur = async () => {
    const cep = getValues("cep").replace(/\D/g, "");
    if (cep.length === 8) {
      await fetchAddress(cep);
    } else if (cep.length > 0) {
      toast.warning("CEP inválido. Digite 8 dígitos.");
    }
  };

  return (
    <FormContainer>
      <form>
        <Row>
          <InputCep
            type="text"
            placeholder="CEP"
            {...register("cep")}
            onBlur={handleCepBlur}
          />
          {errors.cep && <p>{errors.cep.message}</p>}
        </Row>
        <Row>
          <InputRua type="text" placeholder="Rua" {...register("rua")} />
          {errors.rua && <p>{errors.rua.message}</p>}
        </Row>
        <Row>
          <InputCep type="text" placeholder="Número" {...register("numero")} />
          {errors.numero && <p>{errors.numero.message}</p>}
          <InputRua type="text" placeholder="Complemento" {...register("complemento")} />
        </Row>
        <Row>
          <InputCep type="text" placeholder="Bairro" {...register("bairro")} />
          {errors.bairro && <p>{errors.bairro.message}</p>}
          <InputCity type="text" placeholder="Cidade" {...register("cidade")} />
          {errors.cidade && <p>{errors.cidade.message}</p>}
          <InputUF type="text" placeholder="UF" {...register("uf")} />
          {errors.uf && <p>{errors.uf.message}</p>}
        </Row>
      </form>
    </FormContainer>
  );
}