import React from "react";
import { THeaderProps } from "./Header.types";
import { Image, Pressable, Text, View } from "react-native";

const Header: React.FC<THeaderProps> = (
  props: THeaderProps
): React.ReactElement => {
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: "center",
        height: 40,
      }}
    >
      <View>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 81, height: 40 }}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Pressable
            onPress={() => alert("Ekran hazır değil")}
            style={{
              backgroundColor: "#F40000",
              padding: 10,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 12, lineHeight: 14 }}>
              Giriş Yap
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            backgroundColor: "#1D1E1C",
            width: 40,
            height: 40,
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
            marginLeft: 10,
          }}
        >
          <Pressable onPress={() => alert("Ekran hazır değil")}>
            <Image
              source={require("../../assets/profile.png")}
              style={{ width: 16, height: 17 }}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Header;
