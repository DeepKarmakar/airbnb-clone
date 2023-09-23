"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={function (): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};

export default LoginModal;
