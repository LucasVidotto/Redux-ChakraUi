import React from "react";
import { useDropzone } from "react-dropzone";
import {
  Stack,
  List,
  Text,
  ListItem,
  ListIcon,
  FormLabel,
  Input,
  HStack,
} from "@chakra-ui/react";

function Basic() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <ListItem key={file.path}>{file.path}</ListItem>
  ));

  return (
    <Stack>
      <Stack {...getRootProps({ className: "dropzone" })}>
        <Input {...getInputProps()} />
        <Text>Drop Folder Here:</Text>
      </Stack>
      <HStack>
        <List spacing={3}>
          <ListIcon color="green.500" />
          <FormLabel>Path</FormLabel>
          {files}
        </List>
      </HStack>
    </Stack>
  );
}

export default Basic;
