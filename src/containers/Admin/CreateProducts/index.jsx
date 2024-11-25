import { api } from '../../../services/api'
import React from 'react'
import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ReactSelect from 'react-select';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Input, Label, LabelUpload, SubmitButton } from "./style";

export const CreateProducts = () => {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required('Campo obrigatório!'),
      price: yup.number().required('Campo obrigatório!'),
      category: yup.object().required('Escolha uma categoraria.'),
      file: yup
        .mixed()
        .test('required', 'Carregue um arquivo.', (value) => {
          return value?.length > 0;
        })
        .test('type', 'Suporte apenas para PNG e JPEG.', (value) => {
          return (
            value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
          );
        }),
    })
    .required();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');
      setCategories(data);
    }
    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //Enviar dados para API
  const onSubmit = async (data) => {
    const productDataFormData = new FormData();

    productDataFormData.append('name', data.name);
    productDataFormData.append('price', data.price);
    productDataFormData.append('file', data.file[0]);
    productDataFormData.append('category_id', data.category.id);

    await toast.promise(api.post('/products', productDataFormData), {
      pending: 'Aguarde...',
      success: 'Produto criado com sucesso.',
      error: 'Falha ao criar o produto.',
    });

    setTimeout(() => {
      navigate('/listar-produtos');
    }, 2000);
  };

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input type="text" {...register('name')} />
        <p className="error">{errors?.name?.message}</p>

        <Label>Preço</Label>
        <Input type="number" {...register('price')} />
        <p className="error">{errors?.name?.message}</p>

        <LabelUpload>
          {fileName || (
            <>
              <AddPhotoAlternateIcon /> Upload da imagem
            </>
          )}
          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={(value) => {
              setFileName(value.target.files[0]?.name);
            }}
          />
        </LabelUpload>
        <p className="error">{errors?.file?.message}</p>

        <Controller
          name="category"
          control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={(cat) => cat.name}
                getOptionValue={(cat) => cat.id}
                placeholder="Categorias"
              />
            );
          }}
        ></Controller>
        <p className="error">{errors?.category?.message}</p>

        <SubmitButton>Adicionar produto</SubmitButton>
      </form>
    </Container>
  );
};