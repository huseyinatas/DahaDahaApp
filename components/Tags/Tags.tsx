import React, { useEffect, useState } from "react";
import { TTagsProps } from "./Tags.types";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const Tags: React.FC<TTagsProps> = (props: TTagsProps): React.ReactElement => {
  return (
    <View
      style={{
        marginTop: 20,
        paddingLeft: 15,
        width: "100%",
        height: 36,
        position: "relative",
      }}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ flexDirection: "row" }}
      >
        <Pressable
          style={{
            marginLeft: 5,
            paddingTop: 6,
            paddingBottom: 6,
            paddingRight: 6,
            borderWidth: 1.5,
            flexDirection: "row",
            alignItems: "center",
            borderColor: props.selectedTag === 0 ? "#F40000" : "#ECEEEF",
            borderRadius: 8,
          }}
          onPress={() => props.setSelectedTag(0)}
        >
          <Image
            style={{ width: 24, height: 24, marginLeft: 6 }}
            source={require("../../assets/search.png")}
          />
          <Text
            style={{
              color: "#1D1E1C",
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14,
              marginLeft: 8,
            }}
          >
            Fırsat Bul
          </Text>
        </Pressable>
        {props.tags &&
          props.tags.map(({ IconUrl, Id, Name }, index) => {
            return (
              <Pressable
                key={Id}
                style={{
                  marginLeft: 5,
                  paddingTop: 6,
                  paddingBottom: 6,
                  paddingRight: 6,
                  borderWidth: 1.5,
                  flexDirection: "row",
                  alignItems: "center",
                  borderColor: props.selectedTag === Id ? "#F40000" : "#ECEEEF",
                  borderRadius: 8,
                }}
                onPress={() => props.setSelectedTag(Id)}
              >
                <Image
                  style={{ width: 24, height: 24, marginLeft: 6 }}
                  source={{ uri: IconUrl }}
                />
                <Text
                  style={{
                    color: "#1D1E1C",
                    fontWeight: "400",
                    fontSize: 12,
                    lineHeight: 14,
                    marginLeft: 8,
                  }}
                >
                  {Name}
                </Text>
              </Pressable>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Tags;
