import { api } from '../../../services/api';
import { useState, useEffect } from 'react';
import React from 'react'

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import ReactSelect from 'react-select';

import { useNavigate } from 'react-router-dom';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { Container, Input, Label, LabelUpload, OffersContainer, SubmitButton } from './style';

export const EditProduct = () => {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const location = useLocation();
  const product = location.state || {};
  console.log(product.prd);

  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required('Campo obrigatório!'),
      price: yup.number().required('Campo obrigatório!'),
      category: yup.object().required('Escolha uma categoraria.'),
      offer: yup.bool(),
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
    productDataFormData.append('id_category', data.category.id);
    productDataFormData.append('offer', data.offer);

    await toast.promise(
      api.put(`/products/${product.prd.id}`, productDataFormData),
      {
        pending: 'Aguarde...',
        success: 'Produto editado com sucesso.',
        error: 'Falha ao editar o produto.',
      },
    );

    setTimeout(() => {
      navigate('/listar-produtos');
    }, 2000);
  };

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input
          type="text"
          {...register('name')}
          defaultValue={product.prd.name}
        />
        <p className="error">{errors?.name?.message}</p>

        <Label>Preço</Label>
        <Input
          type="number"
          {...register('price')}
          defaultValue={product.prd.price}
        />
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
          defaultValue={product.prd.category}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={(cat) => cat.name}
                getOptionValue={(cat) => cat.id}
                placeholder="Categorias"
                defaultValue={product.prd.category}
              />
            );
          }}
        ></Controller>
        <p className="error">{errors?.category?.message}</p>

        <OffersContainer>
          <label>
            <input
              type="checkbox"
              {...register('offer')}
              defaultChecked={product.prd.offer}
            />
            Oferta
          </label>
        </OffersContainer>

        <SubmitButton>Editar produto</SubmitButton>
      </form>
    </Container>
  );
};