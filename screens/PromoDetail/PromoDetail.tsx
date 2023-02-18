import React, { useState, useEffect } from "react";
import { TPromoDetailProps } from "./PromoDetail.types";
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { Link } from "@react-navigation/native";
const PromoDetail: React.FC<TPromoDetailProps> = (
  props: TPromoDetailProps,
  params: any
): React.ReactElement => {
  const [promotion, setPromotion] = useState({});
  useEffect(() => {
    fetch(
      `https://api.extrazone.com/promotions?Id=${props.route.params.SeoName}`,
      {
        method: "GET",
        headers: {
          "X-Country-Id": "TR",
          "X-Language-Id": "TR",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setPromotion(res);
      });
  }, [props.route.params.SeoName]);
  return (
    <SafeAreaView>
      <Link
        to={{ screen: "KEŞFET" }}
        style={{
          position: "absolute",
          left: 15,
          top: 55,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 999,
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#1D1E1C",
            borderRadius: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/back-arrow.png")}
            style={{ width: 17.02, height: 13.73 }}
          />
        </View>
      </Link>
      <ScrollView style={{ height: "100%" }}>
        <View style={{ width: "100%", height: 375 }}>
          <View style={{ position: "relative", height: 375 }}>
            <Image
              style={{
                width: "100%",
                height: 375,
                resizeMode: "stretch",
                tintColor: promotion.PromotionCardColor,
                position: "absolute",
                top: 0,
                left: 0,
                borderBottomLeftRadius: 100,
              }}
              source={{ uri: promotion.ImageUrl }}
            />
            <Image
              style={{
                width: 55,
                height: 55,
                position: "absolute",
                bottom: 0,
                left: 0,
              }}
              source={{ uri: promotion.BrandIconUrl }}
            />
            <View
              style={{
                position: "absolute",
                right: 15,
                bottom: 10,
                backgroundColor: "#1D1E1C",
                paddingTop: 3,
                paddingRight: 15,
                paddingLeft: 15,
                paddingBottom: 7,
                borderRadius: 25,
              }}
            >
              <Text style={{ color: "#fff" }}>{promotion.RemainingText}</Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            textAlign: "center",
            marginTop: 15,
            fontSize: 26,
            lineHeight: 30,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          {promotion.Title}
        </Text>
        <Text style={{ paddingLeft: 15, paddingRight: 15, marginTop: 15 }}>
          {promotion.Description}
        </Text>
      </ScrollView>
      <View
        style={{
          paddingLeft: 15,
          paddingRight: 15,
          position: "absolute",
          bottom: 20,
          width: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "#F40000",
            paddingTop: 14,
            paddingBottom: 14,
            borderRadius: 28,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 14,
              lineHeight: 16,
              width: "100%",
            }}
          >
            Hemen Katıl
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PromoDetail;
