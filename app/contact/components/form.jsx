"use client";
import React from "react";
import {
  FormProvider,
  useForm,
  useFormContext,
  Controller,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendEmail } from "./email";
import AutoResizeTextArea from "react-textarea-autosize";
import { toast } from "react-toastify";

const email_schema = z.object({
  from_name: z.string().min(1, "required"),
  from_mail: z.string().email().min(1, "required"),
  to_name: z.string(),
  to_email: z.string().email(),
  message: z.string(),
});

export default function ContactForm() {
  const methods = useForm({
    resolver: zodResolver(email_schema),
    criteriaMode: "all",
    mode: "onSubmit",
    defaultValues: {
      from_name: "",
      from_mail: "",
      to_name: "WinnieS",
      to_email: "renai1100@gmail.com",
      message: "nothing to say 🫠",
    },
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = methods;

  function onSubmit(data) {
    toast.promise(sendEmail(data), {
      pending: "sending Email...",
      success: {
        render() {
          reset();
          return "email send success !";
        },
      },
      error: {
        render({ data }) {
          console.log(data.text);
          return "something error";
        },
      },
    });
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid gap-4'
      >
        <InputLayout
          id={"from_name"}
          label='Name'
          placeholder='WinnieS QQ'
          error={errors["from_name"]}
        />
        <InputLayout
          id={"from_mail"}
          label='Email'
          placeholder='WinnieS@gmail.com'
          error={errors["from_mail"]}
        />
        <InputLayout
          id={"message"}
          label='Message'
          placeholder='tell me anything...'
          error={errors["message"]}
        />
        <input
          type='submit'
          value='send'
          className='btn'
          disabled={isSubmitting}
        />
      </form>
    </FormProvider>
  );
}

function InputLayout({ id, label, placeholder, error }) {
  const { register, control } = useFormContext();

  return (
    <>
      <label htmlFor={id}>
        <p className='mb-2'>{label}</p>
        {id === "message" ? (
          <>
            <Controller
              control={control}
              name='message'
              render={({ field: { onChange } }) => (
                <AutoResizeTextArea
                  id={id}
                  className='resize-none'
                  minRows={3}
                  placeholder={placeholder}
                  onChange={onChange}
                />
              )}
            />
          </>
        ) : (
          <>
            <input
              type='text'
              id={id}
              {...register(id)}
              placeholder={placeholder}
            />
            {error && <p>some error</p>}
          </>
        )}
      </label>
    </>
  );
}
