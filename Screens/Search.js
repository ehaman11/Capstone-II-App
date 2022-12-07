import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const css = {
  filteredSchools: {
    marginBottom: 4,
    alignItems: 'center',
    backgroundColor: '#eaeaea'
},
  buttons: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
    backgroundColor: "#eaeaea"
},
button: {
    margin: 2,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    padding: 2
},
  searchBar: {
    backgroundColor: '#45b1e8',
    height: 40, 
    fontSize: 20, 
    padding: 10,
    color: '#FFF'
  },
}

const styles = StyleSheet.create(css);

export default function Search() {
  const [filteredSchools, setFilteredSchools] = useState([]);
  const [yearFilter, setYearFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [settingFilter, setSettingFilter] = useState([]);
  const [housingFilter, setHousingFilter] = useState([]);
  const data = [ 
  {name: 'A T Still University of Health Sciences', year: '4-year', type: 'Private', setting: 'Town', housing: 'Campus Housing'},
  {name: 'Academy of Hair Design-Springfield', year: '2-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Academy of Salon Professionals', year: '2-year', type: 'Private', setting: 'Town', housing: 'Not Campus'},
  {name: 'Aesthetics Institute', year: '2-year', type: 'Private', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'American Business and Technology University', year: '4-year', type: 'Private', settting: 'City', housing: 'Not Campus'},
  {name: 'American College of Hair Design Inc', year: '2-year', type: 'Private', setting: 'Town', housing: 'Not Campus'},
  {name: 'American Trade School', year: '2-year', type: 'Private', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'Applied Technology Services', year: '2-year', type: 'Public', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'Aquinas Institute of Theology', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Aviation Institute of Maintenance-Kansas City', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Avila University', year: '4-year', type: 'Private', setting: 'City', housing: 'Campus Housing'},
  {name: 'Baptist Bible College', year: '4-year', type: 'Private', setting: 'City', housing: 'Campus Housing'},
  {name: 'Barnes-Jewish College Goldfarb School of Nursing', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Bell-Brown Medical Institute', year: '2-year', type: 'Private', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'Bolivar Technical College', year: '2-year', type: 'Private', setting: 'Town', housing: 'Not Campus'},
  {name: 'Bryan University', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},  
  {name: 'Calvary University', year: '4-year', type: 'Private', setting: 'City', housing: 'Campus Housing'},
  {name: 'Cape Girardeau Career and Technology Center', year: '2-year', type: 'Public', setting: 'City', housing: 'Not Campus'},
  {name: 'Carthage R9 School District-Carthage Technical Center', year: '2-year', type: 'Public', setting: 'Town', housing: 'Not Campus'},
  {name: 'Cass Career Center', year: '2-year', type: 'Public', setting: 'Town', housing: 'Not Campus'},
  {name: 'Central Christian College of the Bible', year: '4-year', type: 'Private', setting: 'Town', housing: 'Campus Housing'},
  {name: 'Central College of Cosmetology', year: '2-year', type: 'Private', setting: 'Town', housing: 'Not Campus'},
  {name: 'Central Methodist University-College of Graduate and Extended Studies', year: '4-year', type: 'Private', setting: 'Town', housing: 'Not Campus'},
  {name: 'Central Methodist University-College of Graduate and Extended Studies', year: '4-year', type: 'Private', setting: 'Town', housing: 'Campus Housing'},
  {name: 'Chamberlain University-Missouri', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'City Pointe Beauty Academy', year: '2-year', type: 'Private', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'City Vision University', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Clinton Technical School', year: '2-year', type: 'Public', setting: 'Town', housing: 'Not Campus'},
  {name: 'College of the Ozarks', year: '4-year', type: 'Private', setting: 'Town', housing: 'Campus Housing'},
  {name: 'Columbia College', year: '4-year', type: 'Private', setting: 'City', housing: 'Campus Housing'},
  {name: 'Columbia College - Fort Leonard Wood', year: '2-year', type: 'Private', setting: 'Town', housing: 'Not Campus'},
  {name: 'Columbia College - Fort Leonard Wood 58th Trans BN', year: '2-year', type: 'Private', setting: 'Town', housing: 'Not Campus'},
  {name: 'Columbia College - Jefferson City', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Columbia College - Kansas City', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Columbia College - Lake Ozark', year: '4-year', type: 'Private', setting: 'Town', housing: 'Not Campus'},
  {name: 'Columbia College - Rolla', year: '4-year', type: 'Private', setting: 'Rural', housing: 'Not Campus'},
  {name: 'Columbia College - Saint Louis', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Columbia College - Springfield', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Columbia College - Springfield TMobile', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Columbia College - Waynesville', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Conception Seminary College', year: '4-year', type: 'Private', setting: 'City', housing: 'Campus Housing'},
  {name: 'Concorde Career College-Kansas City', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Concordia Seminary', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Campus Housing'},
  {name: 'Cottey College', year: '4-year', type: 'Private', setting: 'Town', housing: 'Campus Housing'},
  {name: 'Covenant Theological Seminary', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Campus Housing'},
  {name: 'Cox College', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Crowder College', year: '2-year', type: 'Public', setting: 'Town', housing: 'Campus Housing'},
  {name: 'Culver-Stockton College', year: '4-year', type: 'Private', setting: 'Rural', housing: 'Campus Housing'},
  {name: 'DeVry University-Missouri', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Drury University', year: '4-year', type: 'Private', setting: 'City', housing: 'Campus Housing'},
  {name: 'Drury University-College of Continuing Professional Studies', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: "Ea La Mar's Cosmetology & Barber College", year: '2-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'East Central College', year: '2-year', type: 'Public', setting: 'Rural', housing: 'Not Campus'},
  {name: 'Eden Theological Seminary', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Campus Housing'},
  {name: 'Evangel University', year: '4-year', type: 'Private', setting: 'City', housing: 'Campus Housing'},
  {name: 'Evolve Beauty Academy', year: '2-year', type: 'Private', setting: 'Town', housing: 'Campus Housing'},
  {name: 'Fontbonne University', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Campus Housing'},
  {name: 'Four Rivers Career Center', year: '2-year', type: 'Public', setting: 'Town', housing: 'Not Campus'},
  {name: 'Franklin Technology Center Adult Education', year: '2-year', type: 'Public', setting: 'City', housing: 'Not Campus'},
  {name: 'Grabber School of Hair Design', year: '2-year', type: 'Private', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'Graceland University - Independence', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'Grand River Technical School', year: '2-year', type: 'Public', setting: 'Town', housing: 'Not Campus'},
  {name: 'Hannibal-LaGrange University', year: '4-year', type: 'Private', setting: 'Town', housing: 'Campus Housing'},
  {name: 'Harris-Stowe State University', year: '4-year', type: 'Public', setting: 'City', housing: 'Campus Housing'},
  {name: 'Healing Arts Center', year: '2-year', type: 'Private', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'House of Heavilin Beauty College-Blue Springs', year: '2-year', type: 'Private', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'House of Heavilin Beauty College-Kansas City', year: '2-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'House of Heavilin Beauty College-Raymore', year: '2-year', type: 'Private', setting: 'Rural', housing: 'Not Campus'},
  {name: 'Jefferson College', year: '2-year', type: 'Public', setting: 'Rural', housing: 'Campus Housing'},
  {name: 'Kansas City Art Institute', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Kansas City University', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Kenrick Glennon Seminary', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Campus Housing'},
  {name: 'Kirksville Area Technical Center', year: '2-year', type: 'Public', setting: 'Rural', housing: 'Not Campus'},
  {name: 'Lake Career and Technical Center', year: '2-year', type: 'Public', setting: 'Rural', housing: 'Not Campus'},
  {name: 'Lex La-Ray Technical Center', year: '2-year', type: 'Public', setting: 'Town', housing: 'Not Campus'},
  {name: 'Lincoln University', year: '4-year', type: 'Public', setting: 'City', housing: 'Campus Housing'},
  {name: 'Lindenwood University', year: '4-year', type: 'Private', setting: 'City', housing: 'Campus Housing'},
  {name: 'Logan University', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'Lutheran School of Nursing', year: '2-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Maryville University of Saint Louis', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Campus Housing'},
  {name: 'Metropolitan Community College-Kansas City', year: '2-year', type: 'Public', setting: 'City', housing: 'Not Campus'},
  {name: 'Midwest Institute', year: '2-year', type: 'Private', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'Midwest Technical Institute-Missouri', year: '2-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Midwestern Baptist Theological Seminary', year: '4-year', type: 'Private', setting: 'City', housing: 'Campus Housing'},
  {name: 'Mineral Area College', year: '2-year', type: 'Public', setting: 'Town', housing: 'Campus Housing'},
  {name: 'Missouri Baptist University', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Campus Housing'},
  {name: 'Missouri College of Cosmetology and Esthetics', year: '2-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Missouri College of Cosmetology North', year: '2-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Missouri Southern State University', year: '4-year', type: 'Public', setting: 'City', housing: 'Campus Housing'},
  {name: 'Missouri State University-Springfield', year: '4-year', type: 'Public', setting: 'City', housing: 'Campus Housing'},
  {name: 'Missouri State University-West Plains', year: '2-year', type: 'Public', setting: 'Town', housing: 'Campus Housing'},
  {name: 'Missouri University of Science and Technology', year: '4-year', type: 'Public', setting: 'Town', housing: 'Campus Housing'},
  {name: 'Missouri Valley College', year: '4-year', type: 'Private', setting: 'Town', housing: 'Campus Housing'},
  {name: 'Missouri Western State University', year: '4-year', type: 'Public', setting: 'City', housing: 'Campus Housing'},
  {name: 'Moberly Area Community College', year: '2-year', type: 'Public', setting: 'Town', housing: 'Campus Housing'},
  {name: 'Nazarene Theological Seminary', year: '4-year', type: 'Private', setting: 'City', housing: 'Campus Housing'},
  {name: 'Neosho Beauty College', year: '2-year', type: 'Private', setting: 'Town', housing: 'Not Campus'},
  {name: 'New Dimensions School of Hair Design', year: '2-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'North Central Missouri College', year: '2-year', type: 'Public', setting: 'Town', housing: 'Campus Housing'},
  {name: 'Northwest Missouri State University', year: '4-year', type: 'Public', setting: 'Town', housing: 'Campus Housing'},
  {name: 'Old Town Barber College - KC', year: '2-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Ozark Christian College', year: '4-year', type: 'Private', setting: 'City', housing: 'Campus Housing'},
  {name: 'Ozarks Technical Community College', year: '2-year', type: 'Public', setting: 'City', housing: 'Not Campus'},
  {name: 'Park University', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Campus Housing'},
  {name: 'Paul Mitchell the School-Missouri Columbia', year: '2-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Paul Mitchell the School-Springfield', year: '2-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Paul Mitchell the School-St Louis', year: '2-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Pike-Lincoln Technical Center', year: '2-year', type: 'Public', setting: 'Rural', housing: 'Not Campus'},
  {name: 'Pinnacle Career Institute', year: '2-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Ponce Health Sciences University-St Louis', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Poplar Bluff Technical Career Center', year: '2-year', type: 'Public', setting: 'Town', housing: 'Not Campus'},
  {name: 'Ranken Technical College', year: '4-year', type: 'Private', setting: 'City', housing: 'Campus Housing'},
  {name: 'Research College of Nursing', year: '4-year', type: 'Private', setting: 'City', housing: 'Campus Housing'},
  {name: 'Rockhurst University', year: '4-year', type: 'Private', setting: 'City', housing: 'Campus Housing'},
  {name: 'Rolla Technical Institute/Center', year: '2-year', type: 'Public', setting: 'Town', housing: 'Not Campus'},
  {name: 'Saint Louis Christian College', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Campus Housing'},
  {name: 'Saint Louis Community College', year: '2-year', type: 'Public', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'Saint Louis University', year: '4-year', type: 'Private', setting: 'City', housing: 'Campus Housing'},
  {name: 'Salem College of Hairstyling', year: '2-year', type: 'Private', setting: 'Town', housing: 'Not Campus'},
  {name: 'Saline County Career Center', year: '2-year', type: 'Public', setting: 'Town', housing: 'Not Campus'},
  {name: 'Skin Institute', year: '2-year', type: 'Private', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'South Central Career Center', year: '2-year', type: 'Public', setting: 'Town', housing: 'Not Campus'},
  {name: 'Southeast Missouri Hospital College of Nursing and Health Sciences', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Southeast Missouri State University', year: '4-year', type: 'Public', setting: 'City', housing: 'Campus Housing'},
  {name: 'Southwest Baptist University', year: '4-year', type: 'Private', setting: 'Town', housing: 'Campus Housing'},
  {name: 'St Charles Community College', year: '2-year', type: 'Public', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'St Louis College of Health Careers-Fenton', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'St. Louis Med Tech', year: '2-year', type: 'Private', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'State Fair Community College', year: '2-year', type: 'Public', setting: 'Town', housing: 'Campus Housing'},
  {name: 'State Technical College of Missouri', year: '2-year', type: 'Public', setting: 'Rural', housing: 'Campus Housing'},
  {name: 'Stephens College', year: '4-year', type: 'Private', setting: 'City', housing: 'Campus Housing'},
  {name: 'Stevens-The Institute of Business & Arts', year: '4-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Summit Salon Academy Kansas City', year: '2-year', type: 'Private', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'Texas County Technical College', year: '2-year', type: 'Private', setting: 'Rural', housing: 'Not Campus'},
  {name: 'The Salon Professional Academy-St Charles', year: '2-year', type: 'Private', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'Three Rivers College', year: '2-year', type: 'Public', setting: 'Town', housing: 'Campus Housing'},
  {name: 'Trend Setters School', year: '2-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Truman State University', year: '4-year', type: 'Public', setting: 'Town', housing: 'Campus Housing'},
  {name: 'University of Central Missouri', year: '4-year', type: 'Public', setting: 'Town', housing: 'Campus Housing'},
  {name: 'University of Health Sciences and Pharmacy in St. Louis', year: '4-year', type: 'Private', setting: 'City', housing: 'Campus Housing'},
  {name: 'University of Missouri-Columbia', year: '4-year', type: 'Public', setting: 'City', housing: 'Campus Housing'},
  {name: 'University of Missouri-Kansas City', year: '4-year', type: 'Public', setting: 'City', housing: 'Campus Housing'},
  {name: 'University of Missouri-St Louis', year: '4-year', type: 'Public', setting: 'Suburb', housing: 'Campus Housing'},
  {name: 'Urshan College', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Campus Housing'},
  {name: 'Urshan Graduate School of Theology', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Not Campus'},
  {name: 'Warrensburg Area Career Center', year: '2-year', type: 'Public', setting: 'Town', housing: 'Not Campus'},
  {name: 'Washington University in St Louis', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Campus Housing'},
  {name: 'Waynesville Career Center', year: '2-year', type: 'Public', setting: 'Town', housing: 'Not Campus'},
  {name: 'Webster University', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Campus Housing'},
  {name: 'WellSpring School of Allied Health-Kansas City', year: '2-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'WellSpring School of Allied Health-Springfield', year: '2-year', type: 'Private', setting: 'City', housing: 'Not Campus'},
  {name: 'Westminster College', year: '4-year', type: 'Private', setting: 'Town', housing: 'Campus Housing'},
  {name: 'William Jewell College', year: '4-year', type: 'Private', setting: 'Suburb', housing: 'Campus Housing'},
  {name: 'William Woods University', year: '4-year', type: 'Private', setting: 'Town', housing: 'Campus Housing'}
  ];

  const getButtonStyle = (filterType, param) => {
    //console.log()
    //console.log(yearFilter, filterType, param)
    if (filterType === 'year') {
      //console.log(yearFilter, filterType, param)
      if (yearFilter.includes(param)) {
        return StyleSheet.create({ 
          ...css.button, backgroundColor: 'white'
        })
      }
    }
    if (filterType === 'type') {
      //console.log(typeFilter, filterType, param)
      if (typeFilter.includes(param)) {
        return StyleSheet.create({
          ...css.button, backgroundColor: 'white'
        })
      }
    }
    if (filterType === 'setting') {
      //console.log(settingFilter, filterType, param)
      if (settingFilter.includes(param)) {
        return StyleSheet.create({
          ...css.button, backgroundColor: 'white'
        })
      }
    }
    if (filterType === 'housing') {
      //console.log(housingFilter, filterType, param)
      if (housingFilter.includes(param)) {
        return StyleSheet.create({
          ...css.button, backgroundColor: 'white'
        })
      }
    }
    return StyleSheet.create({
      ...css.button
    })
  }

  const handlePress = (param) => {
    if (param === '4-year') {
      if (! yearFilter.includes('4-year')) {
        setYearFilter([...yearFilter, param])
        console.log('yearfilter:', yearFilter)
      }
      else {
        setYearFilter(yearFilter.filter(obj => {
          return (obj !== param)
        }))
      }
      setFilteredSchools(data.filter(obj => {
      return (obj.year === param);
    }))
    }
    if (param === '2-year') {
      //console.log(param)
      if (! yearFilter.includes('2-year')) {
        setYearFilter([...yearFilter, param])
      }
      else {
        setYearFilter(yearFilter.filter(obj => {
          return (obj !== param)
        }))
      }
      setFilteredSchools(data.filter(obj => {
      return (obj.year === param);
    }))
    }
    if (param === 'Private') {
      if (! typeFilter.includes('Private')) {
        setTypeFilter([...typeFilter, param])
      }
      else {
        setTypeFilter(typeFilter.filter(obj => {
          return (obj !== param)
        }))
      }
      setFilteredSchools(data.filter(obj => {
      return (obj.type === param);
    }))
    }
    if (param === 'Public') {
      if (! typeFilter.includes('Public')) {
        setTypeFilter([...typeFilter, param])
      }
      else {
        setTypeFilter(typeFilter.filter(obj => {
          return (obj !== param)
        }))
      }
      setFilteredSchools(data.filter(obj => {
      return (obj.type === param);
    }))
    }
    if (param === 'City') {
      if (! settingFilter.includes('City')) {
        setSettingFilter([...settingFilter, param])
      }
      else {
        setSettingFilter(settingFilter.filter(obj => {
          return (obj !== param)
        }))
      }
      setFilteredSchools(data.filter(obj => {
      return (obj.setting === param);
    }))
    }
    if (param === 'Rural') {
      if (! settingFilter.includes('Rural')) {
        setSettingFilter([...settingFilter, param])
      }
      else {
        setSettingFilter(settingFilter.filter(obj => {
          return (obj !== param)
        }))
      }
      setFilteredSchools(data.filter(obj => {
      return (obj.setting === param);
    }))
    }
    if (param === 'Suburb') {
      if (! settingFilter.includes('Suburb')) {
        setSettingFilter([...settingFilter, param])
      }
      else {
        setSettingFilter(settingFilter.filter(obj => {
          return (obj !== param)
        }))
      }
      setFilteredSchools(data.filter(obj => {
      return (obj.setting === param);
    }))
    }
    if (param === 'Town') {
      if (! settingFilter.includes('Town')) {
        setSettingFilter([...settingFilter, param])
      }
      else {
        setSettingFilter(settingFilter.filter(obj => {
          return (obj !== param)
        }))
      }
      setFilteredSchools(data.filter(obj => {
      return (obj.setting === param);
    }))
    }
    if (param === 'Campus Housing') {
      if (! housingFilter.includes('Campus Housing')) {
        setHousingFilter([...housingFilter, param])
      }
      else {
        setHousingFilter(housingFilter.filter(obj => {
          return (obj !== param)
        }))
      }
      setFilteredSchools(data.filter(obj => {
      return (obj.housing === param);
    }))
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Text style={styles.searchBar}> </Text>
      <ScrollView>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => handlePress('year','4-year')}>
          <View style={getButtonStyle('year', '4-year')} >
            <Text>4-year</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('year','2-year')}>
          <View style={getButtonStyle('year', '2-year')} >
            <Text>2-year</Text>
          </View>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('type','Public')}>
          <View style={getButtonStyle('type', 'Public')} >
            <Text>Public</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('type','Private')}>
          <View style={getButtonStyle('type', 'Private')} >
            <Text>Private</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('setting','City')}>
          <View style={getButtonStyle('setting', 'City')} >
            <Text>City</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('setting','Rural')}>
          <View style={getButtonStyle('setting', 'Rural')} >
            <Text>Rural</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('setting','Suburb')}>
          <View style={getButtonStyle('setting', 'Suburb')} >
            <Text>Suburb</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('setting','Town')}>
          <View style={getButtonStyle('setting', 'Town')} >
            <Text>Town</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('housing','Campus Housing')}>
          <View style={getButtonStyle('housing', 'Campus Housing')} >
            <Text>Campus Housing</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.filteredSchools}>
        {filteredSchools.map((school, i) => {
        return <Text key={i}>{school.name}</Text>;
        })}
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
    </View>
  );
}
