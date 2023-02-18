import React, {useEffect} from "react";
import { THomeProps } from "./Home.types";
import {View, Text, SafeAreaView, Pressable, Image, Dimensions, ScrollView} from "react-native";
import Header from "../../components/Header/Header";
import Tags from "../../components/Tags/Tags";
import DOMParser from 'react-native-html-parser';
import { Link } from '@react-navigation/native';
import PromoDetail from "../PromoDetail/PromoDetail";
const Home: React.FC<THomeProps> = (props: THomeProps): React.ReactElement => {
    const width = Dimensions.get('window').width;
   const [tags, setTags] = React.useState([]);
   const [selectedTag, setSelectedTag] = React.useState(0);
   const [promotions, setPromotions] = React.useState([]);
    const parser = new DOMParser.DOMParser();
    useEffect(() => {
        fetch('https://api.extrazone.com/tags/list', {
            method: 'GET',
            headers: {
                'X-Country-Id': 'TR',
                'X-Language-Id': 'TR',
            }
        })
            .then((res) => res.json())
            .then((res) => {
                setTags(res);
            });
        fetch('https://api.extrazone.com/promotions/list?Channel=PWA', {
            method: 'GET',
            headers: {
                'X-Country-Id': 'TR',
                'X-Language-Id': 'TR',
            }
        })
            .then((res) => res.json())
            .then((res) => {
                setPromotions(res);
            });
    }, []);
    const [slideActive, setSlideActive] = React.useState(0);
    const onchange = (event:any) => {
        if (event){
            const index = Math.ceil(event.contentOffset.x / event.layoutMeasurement.width)
            if (index !== slideActive) {
                setSlideActive(index)
            }
        }
    }
  return (
    <SafeAreaView>
      <View style={{ flex: 1 }}>
          <Header />
          <Tags tags={tags} selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>
          <View style={{marginTop:20, height:378, width: '100%', alignItems: 'center'}}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ flexDirection: "row" }}
                            onScroll={({nativeEvent}) => onchange(nativeEvent)}
                            pagingEnabled={true}
                >
                    <View style={{width:36}} />

                    {
                        promotions.length > 0 && promotions.map(promotion => (

                                <View key={promotion.Id} style={{width: 305, height: 378, position: 'relative', borderWidth: 2, borderColor: '#F4F6F5', borderRadius: 20, marginRight: 10}}>
                                    <Link key={promotion.Id}
                                          to={{screen: 'PromoDetail', params: {SeoName: promotion.Id}}} style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        zIndex: 999
                                    }} children={undefined}/>
                                    <Image
                                        style={{ width: 305, height: 378, resizeMode: 'stretch', tintColor: promotion.PromotionCardColor, position: 'absolute', top: 0, left: 0, borderTopRightRadius: 20, borderTopLeftRadius: 20}}
                                        source={require("../../assets/bg.png")}
                                    />
                                    <View style={{width: 305, height: 362, position: 'absolute', top: 0, left: 0, zIndex:1, backgroundColor: '#FFFFFF', borderRadius: 20, borderWidth: 2, borderColor: '#F4F6F5'}}>
                                        <View style={{padding: 5, position: 'relative', alignItems: 'center'}}>
                                            <View style={{position: 'relative'}}>
                                                <Image
                                                    style={{ width: 295, height: 247, resizeMode: 'stretch', borderRadius: 20, borderBottomLeftRadius: 100}}
                                                    source={{uri: promotion.ImageUrl}}
                                                />
                                                <View style={{width: 54.55, height: 54.55, backgroundColor: '#fff', borderRadius: '100%', position: 'absolute', bottom: 0, left: 0}}>
                                                    <Image
                                                        style={{ width: 55, height: 55, resizeMode: 'stretch', borderRadius: 20}}
                                                        source={{uri: promotion.BrandIconUrl}}
                                                    />
                                                </View>
                                                <View style={{position: 'absolute', bottom:11.09, right: 11.09, backgroundColor: '#1D1E1C', paddingTop: 4, paddingBottom: 7, paddingLeft: 10, paddingRight: 10, borderRadius: 26.8182}}>
                                                    <Text style={{color: '#FFFFFF', fontSize: 13, lineHeight: 15}}>{promotion.RemainingText}</Text>
                                                </View>
                                            </View>
                                            <View style={{marginTop: 10}}>
                                                <Text style={{fontSize: 14, lineHeight: 20, textAlign: 'center', color: '#1D1E1C', fontWeight: '700'}}>
                                                    {
                                                        promotion.Title.replace(/<[^>]+>/g, '')
                                                    }
                                                </Text>
                                                <Pressable style={{marginTop: 10}}>
                                                    <Text style={{textAlign: 'center', color: '#F40000', fontSize: 14, lineHeight: 16, fontWeight: '700'}}>
                                                        {parser.parseFromString(promotion.ListButtonText, 'text/html').documentElement.textContent}
                                                    </Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>

                                    </View>
                        ))
                    }
                    <View style={{width:36}} />

                </ScrollView>
          </View>
          <View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'center'}}>
              {
                  promotions.length > 0 && promotions.map((promotion, key) => (
                      <Pressable style={{marginRight: 5, width: slideActive === key ? 19 : 8, height:8, backgroundColor: slideActive === key ? promotion.PromotionCardColor : '#D8D8D8', borderRadius: '100%'}} />
                  ))
              }
          </View>


      </View>
    </SafeAreaView>
  );
};

export default Home;
