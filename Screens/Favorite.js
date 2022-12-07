import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';

export default function Favorite() {
  {/* school is  state in React... it will track the college that we input */}
  {/* setSchool is the function we will use to set the state */}
  const [school, setSchool] = useState();
  const [schoolItems, setSchoolItems] = useState([]);
  const schools = ['A T Still University of Health Sciences',
    'Academy of Hair Design-Springfield',
    'Academy of Salon Professionals',
    'Aesthetics Institute',
    'American Business and Technology University',
    'American College of Hair Design Inc',
    'American Trade School',
    'Applied Technology Services',
    'Aquinas Institute of Theology',
    'Aviation Institute of Maintenance-Kansas City',
    'Avila University',
    'Baptist Bible College',
    'Barnes-Jewish College Goldfarb School of Nursing',
    'Bell-Brown Medical Institute',
    'Bolivar Technical College',
    'Bryan University',
    'Calvary University',
    'Cape Girardeau Career and Technology Center',
    'Carthage R9 School District-Carthage Technical Center',
    'Cass Career Center',
    'Central Christian College of the Bible',
    'Central College of Cosmetology',
    'Central Methodist University-College of Graduate and Extended Studies',
    'Central Methodist University-College of Liberal Arts and Sciences',
    'Chamberlain University-Missouri',
    'City Pointe Beauty Academy',
    'City Vision University',
    'Clinton Technical School',
    'College of the Ozarks',
    'Columbia College',
    'Columbia College - Fort Leonard Wood', 
    'Columbia College - Fort Leonard Wood 58th Trans BN',
    'Columbia College - Jefferson City',
    'Columbia College - Kansas City',
    'Columbia College - Lake Ozark',
    'Columbia College - Rolla',
    'Columbia College - Saint Louis',
    'Columbia College - Springfield',
    'Columbia College - Springfield TMobile',
    'Columbia College - Waynesville',
    'Columbia College - Waynesville',
    'Conception Seminary College',
    'Concorde Career College-Kansas City',
    'Concordia Seminary',
    'Cottey College',
    'Covenant Theological Seminary',
    'Cox College',
    'Crowder College',
    'Culver-Stockton College',
    'DeVry University-Missouri',
    'Drury University',
    'Drury University-College of Continuing Professional Studies',
    "Ea La Mar's Cosmetology & Barber College",
    'East Central College',
    'Eden Theological Seminary',
    'Evangel University',
    'Evangel University - Assemblies of God Theological Seminary',
    'Evolve Beauty Academy',
    'Fontbonne University',
    'Four Rivers Career Center',
    'Franklin Technology Center Adult Education',
    'Grabber School of Hair Design',
    'Graceland University - Independence',
    'Grand River Technical School',
    'Hannibal-LaGrange University',
    'Harris-Stowe State University',
    'Healing Arts Center',
    'House of Heavilin Beauty College-Blue Springs',
    'House of Heavilin Beauty College-Kansas City',
    'House of Heavilin Beauty College-Raymore',
    'Jefferson College',
    'Kansas City Art Institute',
    'Kansas City University',
    'Kansas City University',
    'Kenrick Glennon Seminary',
    'Kirksville Area Technical Center',
    'Lake Career and Technical Center',
    'Lex La-Ray Technical Center',
    'Lincoln University',
    'Lindenwood University',
    'Logan University',
    'Lutheran School of Nursing',
    'Maryville University of Saint Louis',
    'Metropolitan Community College-Kansas City',
    'Midwest Institute',
    'Midwest Technical Institute-Missouri',
    'Midwestern Baptist Theological Seminary',
    'Mineral Area College',
    'Missouri Baptist University',
    'Missouri College of Cosmetology and Esthetics',
    'Missouri College of Cosmetology North',
    'Missouri Southern State University',
    'Missouri State University-Springfield',
    'Missouri State University-West Plains',
    'Missouri University of Science and Technology',
    'Missouri Valley College',
    'Missouri Western State University',
    'Moberly Area Community College',
    'Nazarene Theological Seminary',
    'Neosho Beauty College',
    'New Dimensions School of Hair Design',
    'North Central Missouri College',
    'Northwest Missouri State University',
    'Old Town Barber College - KC',
    'Ozark Christian College',
    'Ozarks Technical Community College',
    'Park University',
    'Paul Mitchell the School-Missouri Columbia',
    'Paul Mitchell the School-Springfield',
    'Paul Mitchell the School-St Louis',
    'Pike-Lincoln Technical Center',
    'Pinnacle Career Institute',
    'Ponce Health Sciences University-St Louis',
    'Poplar Bluff Technical Career Center',
    'Ranken Technical College',
    'Research College of Nursing',
    'Rockhurst University',
    'Rolla Technical Institute/Center',
    'Saint Louis Christian College',
    'Saint Louis Community College',
    'Saint Louis University',
    'Salem College of Hairstyling',
    'Saline County Career Center',
    'Skin Institute',
    'South Central Career Center',
    'Southeast Missouri Hospital College of Nursing and Health Sciences',
    'Southeast Missouri State University',
    'Southwest Baptist University',
    'St Charles Community College',
    'St Louis College of Health Careers-Fenton',
    'St Louis College of Health Careers-St Louis',
    'St. Louis Med Tech',
    'State Fair Community College',
    'State Technical College of Missouri',
    'Stephens College',
    'Stevens-The Institute of Business & Arts',
    'Summit Salon Academy Kansas City',
    'Texas County Technical College',
    'The Salon Professional Academy-St Charles',
    'Three Rivers College',
    'Trend Setters School',
    'Truman State University',
    'University of Central Missouri',
    'University of Health Sciences and Pharmacy in St. Louis',
    'University of Missouri-Columbia',
    'University of Missouri-Kansas City',
    'University of Missouri-St Louis',
    'Urshan College',
    'Urshan Graduate School of Theology',
    'Warrensburg Area Career Center',
    'Washington University in St Louis',
    'Waynesville Career Center',
    'Webster University',
    'WellSpring School of Allied Health-Kansas City',
    'WellSpring School of Allied Health-Springfield',
    'Westminster College',
    'William Jewell College',
    'William Woods University'];
  
  {/* This function will log the school that we have stored in the state */}
  const handleAddSchool = (props) => {
    Keyboard.dismiss(); {/* moving keyboard down after user types */}
    if (schools.includes(school)){
        console.log(school);
        {/* setting schoolItems as whatever was already in the school array plus the new school */}
        {/* this whole ... thing basically just add appends new task to existing array */}
        setSchoolItems([...schoolItems, school]);
    } else {
      console.log('School not found');
    }
    
    
    {/* doing this so after user inputs college the 'Add to your favorites' bar is empty */}
    setSchool(null);
  }

  {/* taking in index of array so we can pop out task of array */}
  const deleteSchool = (index) => {
    let itemsCopy = [...schoolItems];{/* creating an array copy */}
    itemsCopy.splice(index, 1); {/* remove item from array and store in itemsCopy */}
    setSchoolItems(itemsCopy);
  }

  const Task = (props) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <View style={styles.Items}>
          {/* This is where the schools will go! */}
          {/* iterate over array and output a school item for every item in array */}
          {
            schoolItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => deleteSchool(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      {/* Write a school */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        {/* Everytime the text here changes, we will grab that school and set the school to be that school */}
        <TextInput 
          style={styles.input} 
          placeholder={'Add to your favorites'} 
          value={school} 
          onChangeText={text => setSchool(text)}
        />
        <TouchableOpacity onPress={() => handleAddSchool()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tasksWrapper: {
    padding: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    position: 'absolute',
    top: 10,
    fontSize: 24,
    fontWeight: 'bold',
    alignContent: 'center',
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    top: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingHorizontal: 100,
    paddingVertical: 15,
    maxWidth: 350,
    borderRadius: 60,
    backgroundColor: "#FFF",
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  item: {
    top: 50,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});
