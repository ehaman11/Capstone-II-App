import React, { useState, Component } from 'react';
import {  StyleSheet, Text, View, FlatList, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from 'expo-checkbox';
import Constants from 'expo-constants';


//import SelectList from '@react-native-dropdown-select-list';



//export default function Search() {
export default class Display_All extends Component{
  
  constructor()
  {
    super();
    
    this.state={
      data4:[
          {name: "American Trade School", year: "2-year", type: "Private", setting: "Suburb", housing: "Not campus", price: 15946, Img: 'https://www.americantradeschool.edu/wp-content/uploads/2022/08/Logos-1.webp'},
          {name: "Aviation Institute of Maintenance-Kansas City", year: "2-year", type: "Private", setting: "City", housing: "Not campus", price: 25760, Img: 'https://i0.wp.com/aviationmaintenance.edu/wp-content/uploads/2021/11/AIM-logo-1.jpg?fit=214%2C110&ssl=1'},
          {name: "Cape Girardeau Career and Technology Center", year: "2-year", type: "Public", setting: "City", housing: "Not campus", price: 13454, Img: 'https://careertraining.ed2go.com/common/images/1/14393.jpg'},
          {name: "Columbia College - Fort Leonard Wood 58th Trans BN", year: "2-year", type: "Private", setting: "Town", housing: "Not Campus", price: 9616, Img: 'https://chambermaster.blob.core.windows.net/images/customers/1870/members/81/logos/MEMBER_PAGE_HEADER/Columbia-College-logog.png'},
          {name: "Crowder College", year: "2-year", type: "Public", setting: "Town", housing: "Campus Housing", price: 4597, Img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9PIu3dudLlUb4skDF6aP97ACvkjK8T0Q1oA&usqp=CAU'},
          {name: "East Central College", year: "2-year", type: "Public", setting: "Town", housing: "Not Campus", price: 7057, Img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjsr9XDKvzLWmDFiqjqnmtzxP9cHyKtBA_aA&usqp=CAU'},
          {name: "Jefferson College", year: "2-year", type: "Public", setting: "Town", housing: "Campus Housing", price: 8089, Img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_N_Y_wEYHVsARQaPYtbR-_Vz5YJSiZWulg&usqp=CAU'},
          {name: "Lutheran School of Nursing", year: "2-year", type: "Private", setting: "City", housing: "Not Campus", price: 10620, Img: 'http://www.nursingschoollmc.com/images/banner.jpg'},
          {name: "Metropolitan Community College-Kansas City", year: "2-year", type: "Public", setting: "City", housing: "Not campus", price: 7288, Img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsTWqs0wR5A_a7SMEfha8aiF7V7bi9y9MEvQ&usqp=CAU'},
          {name: "Midwest Institute", year: "2-year", type: "Private", setting: "Suburb", housing: "Not campus", price: 15583, Img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEQl5TjvEjfbKW8TYmeIcaOMB4_XIjPOfqQ&usqp=CAU'},
          {name: "Mineral Area College", year: "2-year", type: "Public", setting: "Suburb", housing: "Campus Housing", price: 9775, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Mineral_Area_College_738800_i0.jpg'},
          {name: "Missouri State University-West Plains", year: "2-year", type: "Public", setting: "Town", housing: "Campus Housing", price: 8123, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Missouri_State_University-West_Plains_738794_i0.jpg'},
          {name: "Moberly Area Community College", year: "2-year", type: "Public", setting: "Town", housing: "Campus Housing", price: 6955, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Moberly_Area_Community_College_738798_i0.jpg'},
          {name: "North Central Missouri College", year: "2-year", type: "Public", setting: "Town", housing: "Yes", price: 9066, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/North_Central_Missouri_College_738735_i0.jpg'},
          {name: "Ozarks Technical Community College", year: "2-year", type: "Public", setting: "City", housing: "No", price: 6669, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Ozarks_Technical_Community_College_738749_i0.jpg'},
          {name: "Pinnacle Career Institute", year: "2-year", type: "Private", setting: "City", housing: "No", price: 17252, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Pinnacle_Career_Institute_227214.jpg'},
          {name: "Rolla Technical Institute", year: "2-year", type: "Public", setting: "Town", housing: "No", price: 8788, Img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZZLIf-hFBAJDfg88IzVxswvjUyAoEb-F4bQ&usqp=CAU'},
          {name: "Saint Louis Community College", year: "2-year", type: "Public", setting: "Suburb", housing: "No", price: 7866, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Saint_Louis_Community_College_738796_i0.jpg'},
          {name: "St Charles Community College", year: "2-year", type: "Public", setting: "Suburb", housing: "No", price: 2364, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/St_Charles_Community_College_228993.jpg'},
          {name: "St Louis College of Health Careers-St Louis", year: "2-year", type: "Private", setting: "City", housing: "No", price: 27667, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/St_Louis_College_of_Health_Careers-St_Louis_738745_i0.jpg'},
          {name: "State Fair Community College", year: "2-year", type: "Public", setting: "Town", housing: "Yes", price: 6244, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/State_Fair_Community_College_229059.jpg'},
          {name: "State Technical College of Missouri", year: "2-year", type: "Public", setting: "Town", housing: "Yes", price: 7361, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Linn_State_Technical_College_738746_i0.jpg'},
          {name: "Texas County Technical College", year: "2-year", type: "Private", setting: "Town", housing: "No", price: 17944, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Texas_County_Technical_Institute_229534.jpg'},
          {name: "Three Rivers College", year: "2-year", type: "Public", setting: "Town", housing: "Yes", price: 9018, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Three_Rivers_Community_College_1_229678.jpg'},
          {name: "WellSpring School of Allied Health-Kansas City", year: "2-year", type: "Private", setting: "City", housing: "No", price: 22502, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/6248_85127341.jpg'},
          {name: "WellSpring School of Allied Health-Springfield", year: "2-year", type: "Private", setting: "City", housing: "No", price: 21076, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/6248_85127341.jpg'},
          {name: "American Business and Technology University", year: "4-year", type: "Private", setting: "Town", housing: "Not campus", Price: 12224, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/american-business-tech-u-logo.png' },
          {name: "Avila", year: "4-year", type:"Private", setting: "City", housing: "Campus Housing", price: 18581, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Avila_University.png', sportsDiv: "NAIA Div 1", Sports: "Baseball, Cheerleading, Football,  Basketball, Soccer, Track, Softball, Basketball, Golf,  TrackWomen's, Volleyball, Wrestling"},
          {name: "Baptist Bible College", year: "4-year", type:"Private", setting: "City", housing: "Campus Housing", price: 18127, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/2126_Baptist_Bible_College_Official_Logo.jpg', sportsDiv: "NCCAA Div 1", Sports: "Baseball, Basketball, Golf, Cross Country, Volleyball"},
          {name: "Barnes-Jewish College Goldfarb School of Nursing", year: "4-year", type:"Private", setting: "City", housing: "Not campus", price: 'unknown', Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Barnes-Jewish_College_Goldfarb_School_of_Nursing_1374011.jpg' },
          {name: "Bolivar Technical College", year: "2-year", type: "Private", setting: "Town", housing: "Not campus", price: 25172, Img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFLsC31cQRabBt5HPEJ3Z8afjClNUGFM0CQ&usqp=CAU'},
          {name: "Bryan University", year: "4-year", type:"Private", setting: "City", housing: "Not campus", price: 19330, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/4761_200x100_bryan-university-mw.gif' },
          {name: "Calvary University", year: "4-year", type:"Private", setting: "City", housing: "Campus Housing", price: 14117, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/2130_calvary-bible-college-and-theological-seminary_owler_20160228_091315_original.png', sportsDiv: "NCCAA Div 2", Sports: "Basketball, Soccer, Volleyball"},
          {name: "Central Christian College of the Bible", year: "4-year", type:"Private", setting: "Town", housing: "Campus Housing", price: 14289, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Central_Christian_College_of_the_Bible.png', sportsDiv: "NCCAA Div 2", Sports: "Basketball, Cross Country, Soccer, Volleyball"},
          {name: "Central Methodist University-College of Graduate and Extended Studies", year: "4-year", type:"Private", setting: "Town", housing: "Not campus", price: 18452, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Central_Methodist_University-College_of_Graduate__Extended_Studies_1380410.jpg' },
          {name: "Central Methodist University-College of Liberal Arts and Sciences", year: "4-year", type:"Private", setting: "Town", housing: "Campus Housing", price: 25083, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Central_Methodist_University_College_of_Liberal_Arts_and_Sciences.jpg', sportsDiv: "NAIA Div 1", Sports: "Baseball, Basketball, Cross Country, Football, Golf, Soccer, Softball, Track and Field, Volleyball, Wrestling "},
          {name: "Chamberlain University-Missouri", year: "4-year", type:"Private", setting: "Suburb", housing: "Not campus", price: 29795, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Chamberlain_College_of_NursingoSt._Louis_Campus_228488.jpg' },
          {name: "City Vision University", year: "4-year", type:"Private", setting: "City", housing: "Not campus", price: 'unknown', Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/6873_city-vision-college-logo-441.jpg' },
          {name: "College of the Ozarks", year: "4-year", type:"Private", setting: "Town", housing: "Campus Housing", price: 12611, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/College_of_the_Ozarks.png', sportsDiv: "NCCAA Div 1", Sports: "Baseball, Basketball, Cheer, Cross Country, Track, Volleyball"},
          {name: "Columbia College", year: "4-year", type:"Private", setting: "City", housing: "Campus Housing", price: 24559, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Columbia_College_214154.png', sportsDiv: "NAIA Div 1", Sports: "Baseball, Basketball, Cross Country, Golf, Lacrosse, Soccer, Softball, Track and Field, Volleyball, Cheer, Dance, Bowling"},
          {name: "Conception Seminary College", year: "4-year", type:"Private", setting: "Town", housing: "Campus Housing", price: 30107, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/logo_updated_colors_1_copy.jpg' },
          {name: "Concorde Career College-Kansas City", year: "4-year", type:"Private", setting: "City", housing: "Not campus", price: 23874, Img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFWRhWmYm3RUSpXAOYKkJ9F60tBzNB-0PjA&usqp=CAU' },
          {name: "Cottey College", year: "4-year", type:"Private", setting: "Town", housing: "Campus Housing", price: 16667, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Cottey_College_214035.jpg' },
          {name: "Cox College", year: "4-year", type:"Private", setting: "City", housing: "Not campus", price: 17490, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Cox_College.png' },
          {name: "Culver-Stockton College", year: "4-year", type:"Private", setting: "Town", housing: "Campus Housing", price: 20567, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Culver_Stockton_College.png', sportsDiv: "NAIA Div 2", Sports: "Baseball, Basketball, Bowling, Football, Golf, Soccer, Track and Field, Volleyball, Lacrosse, Cheer, Esports, Dance, Shotgun Sports"},
          {name: "DeVry University-Missouri", year: "4-year", type:"Private", setting: "City", housing: "Not campus", price: 'unknown', Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/DVU-KLR_logo_Color.jpg' },
          {name: "Drury University", year: "4-year", type:"Private", setting: "City", housing: "Campus Housing", price: 19119, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Drury_University.png', sportsDiv: "NCAA Div 2", Sports: "Baseball, Basketball, Cross Country, Golf, Soccer, Swimming and Diving, Tennis, Track and Field, Wrestling, Softball, Triathalon, Volleyball"},
          {name: "Drury University-College of Continuing Professional Studies", year: "4-year", type:"Private", setting: "City", housing: "Not campus", price: 12998, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Drury_University.png' },
          {name: "Evangel University", year: "4-year", type:"Private", setting: "Suburb", housing: "Campus Housing", price: 21641, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Evangel_University_229671.jpg', sportsDiv: "NAIA Div 2", Sports: "Baseball, Basketball, Cross Country, Football, Golf, Soccer, Tennis, Track and Field, Softball, Volleyball"},
          {name: "Fontbonne University", year: "4-year", type:"Private", setting: "Suburb", housing: "Campus Housing", price: 19481, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Fontbonne_University.jpg' },
          {name: "Hannibal-LaGrange University", year: "4-year", type:"Private", setting: "Town", housing: "Campus Housing", price: 22155, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Hannibal_LaGrange_University.png', sportsDiv: "NAIA Div 1", Sports: "Baseball, Basketball, Soccer, Track and Field, Softball, Volleyball, Cheerleading"},
          {name: "Harris-Stowe State University", year: "4-year", type:"Public", setting: "City", housing: "Campus Housing", price: 11978, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Harris-Stowe_State_University_1374038.gif', sportsDiv: "NAIA Div 1", Sports: "Baseball, Basketball, Soccer, Track and Field, Softball, Volleyball, Cheerleading"},
          {name: "Kansas City Art Institute", year: "4-year", type:"Private", setting: "City", housing: "Campus Housing", price: 27274, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/KCAI-logo.png' },
          {name: "Lincoln University", year: "4-year", type:"Public", setting: "Town", housing: "Campus Housing", price: 10889, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Lincoln_University_Jefferson_City_1374030.jpg', sportsDiv: "NCAA Div 2", Sports: "Baseball, Football, Golf, Track and Field, Cross Country, Softball"},
          {name: "Lindenwood University", year: "4-year", type:"Private", setting: "Town", housing: "Campus Housing", price: 17654, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Lindenwood_University.png', sportsDiv: "NCAA Div 2", Sports: "Baseball, Basketball, Cross Country, Football, Golf, Ice Hockey, Lacrosse, Beach Volleyball, Field Hockey, Gymnastics"},
          {name: "Logan University", year: "4-year", type:"Private", setting: "Suburb", housing: "Not campus", price: 12826, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Logan_University_1380219.gif' },
          {name: "Maryville University of Saint Louis", year: "4-year", type:"Private", setting: "Suburb", housing: "Campus Housing", price: 24733, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Maryville_University_of_Saint_Louis_221220.gif', sportsDiv: "NCAA Div 2", Sports: "Baseball, Basketball, Cross Country, Golf, Soccer, Swimming and Diving, Tennis, Track and Field, Wrestling, Softball, Ice Hockey, Volleyball, Lacrosse, Swimming and Diving"},
          {name: "Midwestern Baptist Theological Seminary", year: "4-year", type:"Private", setting: "City", housing: "Campus Housing", price: 18597, Img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzw7THgW0qiaVszVWnHKXWpAb5tM7T0J6_xg&usqp=CAU', sportsDiv: "NCCAA Div 2", Sports: "Basketball, Volleyball"},
          {name: "Missouri Baptist University", year: "4-year", type:"Private", setting: "Suburb", housing: "Campus Housing", price: 23356, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Missouri_Baptist_University_232355.jpg', sportsDiv: "NAIA Div 1", Sports: "Baseball, Basketball, Beach Volleyball, Bowling, Cross Country, Dance, Football, Golf, Soccer,  Tennis, Track and Field, Volleyball, Wrestling, Softball, Stunt"},
          {name: "Missouri Southern State University", year: "4-year", type:"Public", setting: "Town", housing: "Campus Housing", price: 9703, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Missouri_Southern_State_University.jpg', sportsDiv: "NCAA Div 2", Sports: "Baseball, Basketball, Cross Country, Football, Golf, Track and Field, Soccer, Softball"},
          {name: "Missouri State University-Springfield", year: "4-year", type:"Public", setting: "City", housing: "Campus Housing", price: 16501, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Missouri_State_University_Springfield.png', sportsDiv: "NCAA Div 1 FCS", Sports: "Baseball, Basketball, Beach Volleyball, Cross Country, Football, Golf, Soccer, Softball, Swimming and Diving, Tennis, Track and Field, Volleyball"},
          {name: "Missouri University of Science and Technology", year: "4-year", type:"Public", setting: "Town", housing: "Campus Housing", price: 13589, Img: 'https://brand.mst.edu/media/universityadvancement/brand/logos/athletics/primaryidentitymarks/PRIMARY_BANNER_FC.png', sportsDiv: "NCAA Div 2", Sports: "Baseball, Basketball, Cross Country, Football, Golf, Soccer, Swimming, Track and Field, Volleyball, Softball, Cheer"},
          {name: "Missouri Valley College", year: "4-year", type:"Private", setting: "Town", housing: "Campus Housing", price: 17716, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Missouri_Valley_College_232374.jpg', sportsDiv: "NAIA Div 1", Sports: "Baseball, Basketball, Cross Country, Football, Golf, Lacrosse, Soccer, Tennis, Track and Field, Wrestling, Volleyball, Rodeo, Lifting, Bowling, Softball, Cheer and Dance, Esports, Shotgun Sports"},
          {name: "Missouri Western State University", year: "4-year", type:"Public", setting: "Town", housing: "Campus Housing", price: 13090, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Missouri_Western_State_University_1380218.jpg', sportsDiv: "NCAA Div 2", Sports: "Baseball, Basketball, Cross Country, Football, Golf, Track and Field, Soccer, Softball, Lacrosse, Tennis, Cheer and Dance"},
          {name: "Northwest Missouri State University", year: "4-year", type:"Public", setting: "Town", housing: "Campus Housing", price: 13754, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Northwest_Missouri_State_University_2_232391.jpg', sportsDiv: "NCAA Div 2", Sports: "Baseball, Basketball, Cross Country, Football, Tennis, Track and Field, Golf, Soccer, Softball, Volleyball"},
          {name: "Ozark Christian College", year: "4-year", type:"Private", setting: "Town", housing: "Campus Housing", price: 17482, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/2208_large_Ozark_Blue.jpg', sportsDiv: "NCCAA Div 2", Sports: "Basketball, Cross Country, Soccer, Volleyball"},
          {name: "Park University", year: "4-year", type:"Private", setting: "Suburb", housing: "Campus Housing", price: 15999, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Park_University.png', sportsDiv: "NAIA Div 1", Sports: "Baseball, Basketball, Cross Country, Golf, Soccer, Track and Field, Volleyball, Softball, Beach Volleyball"},
          {name: "Ranken Technical College", year: "4-year", type:"Private", setting: "City", housing: "Campus Housing", price: 13227, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Ranken_Technical_College_232648.jpg' },
          {name: "Research College of Nursing", year: "4-year", type:"Private", setting: "City", housing: "Campus Housing", price: 'unknown', Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Research_College_of_Nursing_227991.jpg' },
          {name: "Rockhurst University", year: "4-year", type:"Private", setting: "City", housing: "Campus Housing", price: 22050, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Rockhurst_University.jpg', sportsDiv: "NCAA Div 2", Sports: "Baseball, Basketball, Cross Country, Golf, Lacrosse, Soccer, Tennis, Softball, Volleyball"},
          {name: "Saint Louis Christian College", year: "4-year", type:"Private", setting: "Suburb", housing: "Campus Housing", price: 10210, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/2223_saint-louis-christian-college-logo-1069.jpg', sportsDiv: "NCCAA", Sports: "Baseball, Soccer, Basketball, Volleyball, Track "},
          {name: "Saint Louis University", year: "4-year", type:"Private", setting: "City", housing: "Campus Housing", price: 30096, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Saint_Louis_University.png', sportsDiv: "NCAA Div 1", Sports: "Baseball, Basketball, Cross Country, Soccer, Swimming and Diving, Tennis, Track and Field, Field Hockey, Softball"},
          {name: "Southeast Missouri Hospital College of Nursing and Health Sciences", year: "4-year", type:"Private", setting: "Town", housing: "Not campus", price: 22039, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Southeast_Missouri_Hospital_College_of_Nursing_and_Health_Sciences_49599.jpg' },
          {name: "Southeast Missouri State University", year: "4-year", type:"Public", setting: "Town", housing: "Campus Housing", price: 13291, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Southeast_Missouri_State_University.png', sportsDiv: "NCAA Div 1 FCS", Sports: "Baseball, Basketball, Cross Country, Football, Track, Gymnastics, Soccer, Tennis, Volleyball"},
          {name: "Southwest Baptist University", year: "4-year", type:"Private", setting: "Town", housing: "Campus Housing", price: 18433, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Southwest_Baptist_University.png', sportsDiv: "NCAA Div 2", Sports: "Baseball, Basketball, Cross Country, Football, Soccer, Tennis, Track and Field, Beach Volleyball, Softball, Volleyball"},
          {name: "St Louis College of Health Careers-Fenton", year: "4-year", type:"Private", setting: "Suburb", housing: "Not campus", price: 23129, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/St_Louis_College_of_Health_Careers-Fenton_738742_i0.jpg' },
          {name: "Stephens College", year: "4-year", type:"Private", setting: "City", housing: "Campus Housing", price: 22487, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Stephens_College.png' },
          {name: "Stevens-The Institute of Business & Arts", year: "4-year", type:"Private", setting: "City", housing: "Not campus", price: 17434, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Patricia_Stevens_College_48155.jpg' },
          {name: "Truman State University", year: "4-year", type:"Public", setting: "Town", housing: "Campus Housing", price: 11470, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Truman_State_University.jpg', sportsDiv: "NCAA Div 2", Sports: "Baseball, Basketball, Cross Country, Football, Soccer, Swimming, Track and Field, Golf, Softball, Tennis, Volleyball"},
          {name: "University of Central Missouri", year: "4-year", type:"Public", setting: "Town", housing: "Campus Housing", price: 13852, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/University_of_Central_Missouri.jpg', sportsDiv: "NCAA Div 2", Sports: "Baseball, Basketball, Cross Country, Football, Golf, Track and Field, Wrestling"},
          {name: "University of Health Sciences and Pharmacy in St. Louis", year: "4-year", type:"Private", setting: "City", housing: "Campus Housing", price: 29197, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/St._Louis_College_of_Pharmacy_213572.png', sportsDiv: "NAIA Div 1", Sports: "Baseball, Basketball, Bowling, Cross Country, Golf, Lacrosse, Soccer, Tennis, Track and Field, Volleyball, Wrestling, Rugby, Softball, Esports, Cheer, Dance "},
          {name: "University of Missouri-Columbia", year: "4-year", type:"Public", setting: "City", housing: "Campus Housing", price: 18249, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/University_of_Missouri_Columbia.gif', sportsDiv: "NCAA Div 1", Sports: "Baseball, Basketball, Cross Country, Football, Golf, Swim and Dive, Track and Field, Wrestling, Gymnastics, Soccer, Softball, Tennis, Volleyball"},
          {name: "University of Missouri-Kansas City", year: "4-year", type:"Public", setting: "City", housing: "Campus Housing", price: 14368, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/University_of_Missouri_Kansas_City.png', sportsDiv: "NCAA Div 1", Sports: "Basketball, Cross Country, Golf, Soccer, Track and Field, Softball, Tennis, Volleyball"},
          {name: "University of Missouri-St Louis", year: "4-year", type:"Public", setting: "Suburb", housing: "Campus Housing", price: 10525, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/University_of_Missouri_St_Louis.png', sportsDiv: "NCAA Div 2", Sports: "Baseball, Basketball, Cross Country, Golf, Soccer, Swimming, Tennis, Track and Field, Softball, Volleyball"},
          {name: "Urshan College", year: "4-year", type:"Private", setting: "Suburb", housing: "Campus Housing", price: 9537, Img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcwEr1o8mOKkaS73M14QVDsh6-BrZJb54y5w&usqp=CAU' },
          {name: "Washington University in St Louis", year: "4-year", type:"Private", setting: "Suburb", housing: "Campus Housing", price: 28298, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Washington_University_in_St_Louis.png', sportsDiv: "NCAA Div 3", Sports: "Baseball, Basketball, Cross Country, Football, Soccer, Swimming and Diving, Tennis, Track and Field, Golf, Softball, Volleyball"},
          {name: "Webster University", year: "4-year", type:"Private", setting: "Suburb", housing: "Campus Housing", price: 24884, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/Webster_University_1_222230.jpg', sportsDiv: "NCAA Div 3", Sports: "Baseball, Basketball, Cross Country, Golf, Soccer, Tennis, Track and Field, Softball, Volleyball"},
          {name: "Westminster College", year: "4-year", type:"Private", setting: "Town", housing: "Campus Housing", price: 23783, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/westminster-missouri.jpg', sportsDiv: "NCAA Div 3", Sports: "Baseball, Basketball, Cross Country, Football, Golf, Lacrosse, Soccer, Swimming and Diving, Tennis, Track and Field, Softball, Volleyball"},
          {name: "William Jewell College", year: "4-year", type:"Private", setting: "Suburb", housing: "Campus Housing", price: 20876, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/William_Jewell_College.png', sportsDiv: "NCAA Div 2", Sports: "Baseball, Basketball, Cross Country, Football, Golf, Lacrosse, Power Lifting, Soccer, Softball, Tennis, Track and Field, Wrestling, Volleyball"},
          {name: "William Woods University", year: "4-year", type:"Private", setting: "Town", housing: "Campus Housing", price: 23220, Img: 'https://d2jyir0m79gs60.cloudfront.net/college/logos_compressed/William_Woods_University.png', sportsDiv: "NAIA Div 1", Sports: "Baseball, Basketball, Bowling, Cross Country, Golf, Soccer, Tennis, Track and Field, Wrestling, Softball, Volelyball"}
         
      
          
      
      ]
    }
    
  }

  
  render() {
    {/*[display, setDisplay] = useState(false);*/}

    return (
    <View>
      <Text style={{ fontSize:20, color: '#00bfff' }}>Missouri Schools</Text>
      
      <FlatList
      data={this.state.data4}
      renderItem={({item})=>
      <View style={styles.button} >
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Favorite coming soon')
          }}>
        
            <Text style={styles.title}>{item.name} </Text>
            <Image stlye={styles.image} source={{ uri: item.Img, width: 100, height: 70 }} />
            {<Text style={styles.content}> {item.type} {item.year}, {item.setting}, {item.housing}, cost: ${item.price}</Text>}
            {<Text style={styles.content}> {item.sportsDiv} </Text>}
          
        
        </TouchableOpacity>
        </View>
      }
      />
    </View>
  );
  }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: Constants.statusBarHeight
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    buttonContainer: {
      marginVertical: 20,
    },
    button: {
      alignSelf: 'flex-start',
      alignItems: 'center',
      //flex: 1,
      flexDirection: 'row',
      padding: 10,
      backgroundColor: '#E5E4E2',
      borderRadius: 15,
      borderWidth: 5,
      borderColor: '#fff',
      marginTop: 10
      //justifyContent: 'space-between',
      //alignItems: 'baseline',
      //marginBottom: 10,
      //textAlign: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 5
    },
    image: {
      width: undefined,
      height: undefined,
      aspectRatio: 1,
    },
    content: {
      flex: 0.65,
      paddingHorizontal:10,
      paddingVertical: 10
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    checkbox: {
      margin: 3
    }
  
  });