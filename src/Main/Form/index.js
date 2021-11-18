import React from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/Redux/action";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import {
  Stack,
  Button,
  FormLabel,
  FormErrorMessage,
  Box,
  FormControl,
  Input,
} from "@chakra-ui/react";
import Droped from "../Drop";

const Forms = () => {
  const {
    register,
    handleSubmit,
    errors,
    formState,

    control,
  } = useForm();
  const onSubmit = (date) => console.log(date);

  const options = [
    { value: "name one", label: "Name" },
    { value: "name two", label: "Other name" },
    { value: "name three", label: "Other name 3" },
  ];
  const registerOptions = {
    role: { required: true },
  };

  return (
    <Stack isInline p={4} justifyContent="space-between">
      <Stack isInline p={4} justify="space-between">
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <Stack p={4}>
            <Droped />
          </Stack>
          <Stack p={4}>
            <FormControl isRequired isInvalid={errors.name}>
              <FormLabel> Name </FormLabel>
              <Input
                name="name"
                type="text"
                placeholder="name"
                ref={register({ required: true, minLength: 4 })}
              />
              <FormErrorMessage>minimum 4 characters</FormErrorMessage>
            </FormControl>
          </Stack>
          <Stack p={4}>
            <FormControl isRequired isInvalid={errors.Option}>
              <FormLabel>Select Options</FormLabel>
              <Controller
                name="Option"
                control={control}
                as={Select}
                options={options}
                defaultValue=""
                rules={registerOptions.role}
              />
              <FormErrorMessage>Please select an option</FormErrorMessage>
            </FormControl>
          </Stack>

          <Button
            mt={4}
            colorScheme="teal"
            isLoading={formState.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

const mapStateToProps = ({ home }) => ({
  count: home.count,
});

const mapDispatchToProps = {
  increaseCount: actions.increaseCount,
  decreCount: actions.decreCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
