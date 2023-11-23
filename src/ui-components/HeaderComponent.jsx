/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function HeaderComponent(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="505px"
      height="150px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HeaderComponent")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="155px"
        height="14px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 7px - 0px)"
        left="calc(50% - 77.5px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="This is HeaderComponent."
        {...getOverrideProps(overrides, "This is HeaderComponent.")}
      ></Text>
    </View>
  );
}
