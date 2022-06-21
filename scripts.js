var SelectedProfession = "unemployed";
var TotalPoints = 8;

var Perks = ['Fitness','Strength','Sprinting','Lightfooted','Nimble','Sneaking','Axe','LongBlunt','ShortBlunt','LongBlade','ShortBlade','Spear','Maintenance','Carpentry','Cooking','Farming','FirstAid','Electrical','Metalworking','Mechanics','Tailoring','Aiming','Reloading','Fishing','Trapping','Foraging'];

function getXPBoosts(Name) {
  var out = '';
  //Occupations
  if (Name == 'unemployed') out += 'Fitness=4,';
  if (Name == 'unemployed') out += 'Strength=4,';
  if (Name == 'fireofficer') out += 'Axe=1,';
  if (Name == 'fireofficer') out += 'Sprinting=1,';
  if (Name == 'fireofficer') out += 'Strength=5,';
  if (Name == 'fireofficer') out += 'Fitness=5,';
  if (Name == 'policeofficer') out += 'Aiming=3,';
  if (Name == 'policeofficer') out += 'Fitness=4,';  
  if (Name == 'policeofficer') out += 'Nimble=1,';
  if (Name == 'policeofficer') out += 'Reloading=2,';
  if (Name == 'policeofficer') out += 'Strength=4,';
  if (Name == 'parkranger') out += 'Axe=1,';
  if (Name == 'parkranger') out += 'Carpentry=1,';
  if (Name == 'parkranger') out += 'Fitness=5,';
  if (Name == 'parkranger') out += 'Foraging=2,';
  if (Name == 'parkranger') out += 'Strength=5,';
  if (Name == 'parkranger') out += 'Trapping=2,';
  if (Name == 'constructionworker') out += 'Carpentry=1,';
  if (Name == 'constructionworker') out += 'Fitness=5,';
  if (Name == 'constructionworker') out += 'ShortBlunt=3,';
  if (Name == 'constructionworker') out += 'Strength=5,';
  if (Name == 'securityguard') out += 'Fitness=5,';
  if (Name == 'securityguard') out += 'Lightfooted=1,';
  if (Name == 'securityguard') out += 'Sprinting=2,';
  if (Name == 'securityguard') out += 'Strength=5,';
  if (Name == 'carpenter') out += 'Carpentry=3,';
  if (Name == 'carpenter') out += 'Fitness=3,';
  if (Name == 'carpenter') out += 'ShortBlunt=3,';
  if (Name == 'carpenter') out += 'Strength=3,';
  if (Name == 'burglar') out += 'Fitness=5,';
  if (Name == 'burglar') out += 'Lightfooted=2,';
  if (Name == 'burglar') out += 'Nimble=2,';
  if (Name == 'burglar') out += 'Sneaking=2,';
  if (Name == 'burglar') out += 'Strength=5,';
  if (Name == 'chef') out += 'Cooking=3,';
  if (Name == 'chef') out += 'Fitness=5,';
  if (Name == 'chef') out += 'Maintenance=1,';
  if (Name == 'chef') out += 'ShortBlunt=1,';
  if (Name == 'chef') out += 'Strength=5,';
  if (Name == 'repairman') out += 'Carpentry=1,';
  if (Name == 'repairman') out += 'Fitness=5,';
  if (Name == 'repairman') out += 'Maintenance=2,';
  if (Name == 'repairman') out += 'ShortBlunt=1,';
  if (Name == 'repairman') out += 'Strength=5,';
  if (Name == 'farmer') out += 'Farming=3,';
  if (Name == 'farmer') out += 'Fitness=5,';
  if (Name == 'farmer') out += 'Strength=5,';
  if (Name == 'fisherman') out += 'Fishing=3,';
  if (Name == 'fisherman') out += 'Fitness=5,';
  if (Name == 'fisherman') out += 'Foraging=1,';
  if (Name == 'fisherman') out += 'Strength=5,';
  if (Name == 'doctor') out += 'FirstAid=3,';
  if (Name == 'doctor') out += 'Fitness=5,';
  if (Name == 'doctor') out += 'ShortBlade=1,';
  if (Name == 'doctor') out += 'Strength=5,';
  if (Name == 'veteran') out += 'Aiming=2,';
  if (Name == 'veteran') out += 'Fitness=5,';
  if (Name == 'veteran') out += 'Reloading=2,';
  if (Name == 'veteran') out += 'Strength=5,';
  if (Name == 'nurse') out += 'FirstAid=2,';
  if (Name == 'nurse') out += 'Fitness=5,';
  if (Name == 'nurse') out += 'Lightfooted=1,';
  if (Name == 'nurse') out += 'Strength=5,';
  if (Name == 'lumberjack') out += 'Axe=2,';
  if (Name == 'lumberjack') out += 'Fitness=5,';
  if (Name == 'lumberjack') out += 'Strength=5,';
  if (Name == 'fitnessInstructor') out += 'Fitness=8,';
  if (Name == 'fitnessInstructor') out += 'Sprinting=2,';
  if (Name == 'fitnessInstructor') out += 'Strength=5,';
  if (Name == 'burgerflipper') out += 'Cooking=2,';
  if (Name == 'burgerflipper') out += 'Fitness=5,';
  if (Name == 'burgerflipper') out += 'Maintenance=1,';
  if (Name == 'burgerflipper') out += 'ShortBlade=1,';
  if (Name == 'burgerflipper') out += 'Strength=5,';
  if (Name == 'electrician') out += 'Electricity=3,';
  if (Name == 'electrician') out += 'Fitness=5,';
  if (Name == 'electrician') out += 'Strength=5,';
  if (Name == 'engineer') out += 'Carpentry=1,';
  if (Name == 'engineer') out += 'Electrical=1,';
  if (Name == 'engineer') out += 'Fitness=5,';
  if (Name == 'engineer') out += 'Strength=5,';
  if (Name == 'metalworker') out += 'Fitness=5,';
  if (Name == 'metalworker') out += 'Metalworking=3,';
  if (Name == 'metalworker') out += 'Strength=5,';
  if (Name == 'Mechanic') out += 'Fitness=5,';
  if (Name == 'Mechanic') out += 'Mechanics=3,';
  if (Name == 'Mechanic') out += 'ShortBlunt=1,';
  if (Name == 'Mechanic') out += 'Strength=5,';
  //Positive Traits
  if (Name == 'Athletic') out += 'Fitness=4,';
  if (Name == 'Fit') out += 'Fitness=2,';
  if (Name == 'Stout') out += 'Strength=2,';
  if (Name == 'Strong') out += 'Strength=4,';
  //Negative Traits
  if (Name == 'Feeble') out += 'Strength=-2,';
  if (Name == 'OutofShape') out += 'Fitness=-2,';
  if (Name == 'Underweight') out += 'Fitness=-1,';
  if (Name == 'Unfit') out += 'Fitness=-4,';
  if (Name == 'VeryUnderweight') out += 'Fitness=-2,';
  if (Name == 'Weak') out += 'Strength=-5,';
  //Hobbies
  if (Name == 'AmateurMechanic2') out += 'Mechanics=3,';
  if (Name == 'AmateurMechanic') out += 'Mechanics=1,';
  if (Name == 'Angler') out += 'Fishing=1,';
  if (Name == 'BaseballPlayer') out += 'Blunt=1,';
  if (Name == 'Brawler') out += 'Axe=1,';
  if (Name == 'Brawler') out += 'LongBlunt=1,';
  if (Name == 'Cook') out += 'Cooking=2,';
  if (Name == 'FirstAider') out += 'FirstAid=1,';
  if (Name == 'Formerscout') out += 'FirstAid=1,';
  if (Name == 'Formerscout') out += 'Foraging=1,';
  if (Name == 'Gardener') out += 'Farming=1,';
  if (Name == 'Gymnast') out += 'Lightfooted=1,';
  if (Name == 'Gymnast') out += 'Nimble=1,';
  if (Name == 'Handy') out += 'Carpentry=1,';
  if (Name == 'Handy') out += 'Maintenance=1,';
  if (Name == 'Hiker') out += 'Foraging=1,';
  if (Name == 'Hiker') out += 'Trapping=1,';
  if (Name == 'Hunter') out += 'Aiming=1,';
  if (Name == 'Hunter') out += 'ShortBlade=1,';
  if (Name == 'Hunter') out += 'Sneaking=1,';
  if (Name == 'Hunter') out += 'Trapping=1,';
  if (Name == 'Runner') out += 'Sprinting=1,';
  if (Name == 'Runner') out += 'Tailoring=1,';
  return out;
}
function addXPBoosts(XPBoosts) {
  var p = XPBoosts.split(',');
  for (xcount = 0; xcount < p.length - 1; xcount++) {
    var pp = p[xcount].split('=');
    addXPToThis(pp[0], pp[1]);
  }
}
function removeXPBoosts(XPBoosts) {
  var p = XPBoosts.split(',');
  for (xcount = 0; xcount < p.length - 1; xcount++) {
    var pp = p[xcount].split('=');
    removeXPToThis(pp[0], pp[1]);
  }
}
function addXPToThis(PerkID, Boost) {
  var txtNumber = document.getElementById(PerkID + 'Count');
  var newNumber = parseInt(txtNumber.value) + parseInt(Boost);
  txtNumber.value = newNumber;
  if (parseInt(txtNumber.value) == 0) Hide(PerkID);
  else Show(PerkID);

  if (parseInt(txtNumber.value) > 0) {
    txtNumber.style.color = "green";
    document.getElementById(PerkID).style.color = "green";
  }
  else {
    txtNumber.style.color = "DarkRed";
    document.getElementById(PerkID).style.color = "DarkRed";
  }
}
function removeXPToThis(PerkID, Boost) {
  var txtNumber = document.getElementById(PerkID + 'Count');
  var newNumber = parseInt(txtNumber.value) - parseInt(Boost);
  txtNumber.value = newNumber;
  if (parseInt(txtNumber.value) == 0) Hide(PerkID);
  else Show(PerkID);

  if (parseInt(txtNumber.value) < 0) {
    txtNumber.style.color = "DarkRed";
    document.getElementById(PerkID).style.color = "DarkRed";
  }
  else {
    txtNumber.style.color = "green";
    document.getElementById(PerkID).style.color = "green";
  }
}

$(document).ready(function () {
  if (!window.location.href.includes('#')) {
    window.location.href = '#';
    ChooseProfession("unemployed", true, true);
  }
  else {
    var params = window.location.href.replace('konneator.github.io/#', '');
    var urlp = params.split(',');
    for (icount = 0; icount < urlp.length; icount++) {
      if ((urlp[icount] != '') && (urlp[icount])) {

        if (isLowerCase(urlp[icount])) {
          ChooseProfession(urlp[icount], false);
        }
        else {
          if (getPoints(urlp[icount]) > 0) {
            AddGoodTrait(urlp[icount], false, false);
          }
          else if (getPoints(urlp[icount]) < 0) {
            AddBadTrait(urlp[icount], false, false);
          }
        }
      }
    }
  }
});
function isLowerCase(InString) {
  var tempstring = InString.toLowerCase();
  if (InString == tempstring) return true;
  else return false;
}
function getPoints(Name) {
  if (Name == 'Axeman') return 0;
  if (Name == 'Handy') return 8;
  if (Name == 'Brave') return 4;
  if (Name == 'Cowardly') return -2;
  if (Name == 'Clumsy') return -2;
  if (Name == 'Graceful') return 4;
  if (Name == 'Hypercondriac') return -2;
  if (Name == 'ShortSighted') return -2;
  if (Name == 'HardOfHearing') return -2;
  if (Name == 'Deaf') return -12;
  if (Name == 'KeenHearing') return 6;
  if (Name == 'EagleEyed') return 6;
  if (Name == 'HeartyAppitite') return -4;
  if (Name == 'LightEater') return 4;
  if (Name == 'ThickSkinned') return 6;
  if (Name == 'Unfit') return -10;
  if (Name == 'OutofShape') return -6;
  if (Name == 'Fit') return 6;
  if (Name == 'Athletic') return 10;
  if (Name == 'Nutritionist') return 4;
  if (Name == 'Nutritionist2') return 0;
  if (Name == 'Emaciated') return -10;
  if (Name == 'VeryUnderweight') return -10;
  if (Name == 'Underweight') return -6;
  if (Name == 'Overweight') return -6;
  if (Name == 'Smoker') return -4;
  if (Name == 'Obese') return -10;
  if (Name == 'SpeedDemon') return 1;
  if (Name == 'Strong') return 10;
  if (Name == 'Stout') return 6;
  if (Name == 'Weak') return -10;
  if (Name == 'SundayDriver') return -1;
  if (Name == 'Feeble') return -6;
  if (Name == 'Resilient') return 4;
  if (Name == 'ProneToIllness') return -4;
  if (Name == 'Agoraphobic') return -4;
  if (Name == 'Claustophobic') return -4;
  if (Name == 'Lucky') return 4;
  if (Name == 'Unlucky') return -4;
  if (Name == 'Marksman') return 0;
  if (Name == 'NightOwl') return 0;
  if (Name == 'Outdoorsman') return 2;
  if (Name == 'FastHealer') return 6;
  if (Name == 'FastLearner') return 6;
  if (Name == 'FastReader') return 2;
  if (Name == 'AdrenalineJunkie') return 8;
  if (Name == 'Inconspicuous') return 4;
  if (Name == 'NeedsLessSleep') return 2;
  if (Name == 'NightVision') return 2;
  if (Name == 'Organized') return 6;
  if (Name == 'LowThirst') return 6;
  if (Name == 'SelfDefenseClass') return 6;
  if (Name == 'FirstAid') return 4;
  if (Name == 'Fishing') return 4;
  if (Name == 'Gardener') return 4;
  if (Name == 'Jogger') return 4;
  if (Name == 'SlowHealer') return -6;
  if (Name == 'SlowLearner') return -6;
  if (Name == 'SlowReader') return -2;
  if (Name == 'NeedsMoreSleep') return -4;
  if (Name == 'Conspicuous') return -4;
  if (Name == 'Disorganized') return -4;
  if (Name == 'HighThirst') return -6;
  if (Name == 'Illiterate') return -8;
  if (Name == 'Insomniac') return -6;
  if (Name == 'Pacifist') return -4;
  if (Name == 'Thinskinned') return -6;
  if (Name == 'Dextrous') return 2;
  if (Name == 'AllThumbs') return -2;
  if (Name == 'Desensitized') return 0;
  if (Name == 'WeakStomach') return -3;
  if (Name == 'IronGut') return 3;
  if (Name == 'Hemophobic') return -3;
  if (Name == 'Cook2') return 0;
  if (Name == 'Asthmatic') return -5;
  if (Name == 'Herbalist') return 6;
  if (Name == 'Brawler') return 6;
  if (Name == 'Formerscout') return 6;
  if (Name == 'BaseballPlayer') return 4;
  if (Name == 'Hiker') return 6;
  if (Name == 'Hunter') return 8;
  if (Name == 'Gymnast') return 5;
  if (Name == 'Cook') return 6;
  if (Name == 'AmateurMechanic2') return 0;
  if (Name == 'Mechanic') return -4;
  if (Name == 'unemployed') return 8;
  if (Name == 'fireofficer') return 0;
  if (Name == 'policeofficer') return -4;
  if (Name == 'parkranger') return -4;
  if (Name == 'constructionworker') return -2;
  if (Name == 'securityguard') return -2;
  if (Name == 'carpenter') return 2;
  if (Name == 'burglar') return -6;
  if (Name == 'chef') return -4;
  if (Name == 'repairman') return -4;
  if (Name == 'farmer') return 2;
  if (Name == 'fisherman') return -2;
  if (Name == 'doctor') return 2;
  if (Name == 'veteran') return -8;
  if (Name == 'nurse') return 2;
  if (Name == 'lumberjack') return 0;
  if (Name == 'fitnessInstructor') return -6;
  if (Name == 'burgerflipper') return 2;
  if (Name == 'electrician') return -4;
  if (Name == 'engineer') return -4;
  if (Name == 'metalworker') return -6;
  if (Name == 'AmateurMechanic') return -4;
  return 0;
};

function getMEX(Name) {
  var out = '';
  if (Name == 'AdrenalineJunkie') out += 'Desensitized|';
  if (Name == 'Athletic') out += 'Fit|';
  if (Name == 'Athletic') out += 'Obese|';
  if (Name == 'Athletic') out += 'OutofShape|';
  if (Name == 'Athletic') out += 'Overweight|';
  if (Name == 'Athletic') out += 'Unfit|';
  if (Name == 'Brave') out += 'Cowardly|';
  if (Name == 'Brave') out += 'Desensitized|';
  if (Name == 'Dextrous') out += 'AllThumbs|';
  if (Name == 'EagleEyed') out += 'ShortSighted|';
  if (Name == 'FastHealer') out += 'SlowHealer|';
  if (Name == 'FastLearner') out += 'SlowLearner|';
  if (Name == 'FastReader') out += 'Illiterate|';
  if (Name == 'FastReader') out += 'SlowReader|';
  if (Name == 'Fit') out += 'Athletic|';
  if (Name == 'Fit') out += 'Obese|';
  if (Name == 'Fit') out += 'OutofShape|';
  if (Name == 'Fit') out += 'Overweight|';
  if (Name == 'Fit') out += 'Unfit|';
  if (Name == 'Graceful') out += 'Clumsy|';
  if (Name == 'Inconspicuous') out += 'Conspicuous|';
  if (Name == 'IronGut') out += 'WeakStomach|';
  if (Name == 'KeenHearing') out += 'Deaf|';
  if (Name == 'KeenHearing') out += 'HardOfHearing|';
  if (Name == 'LightEater') out += 'HeartyAppitite|';
  if (Name == 'LowThirst') out += 'HighThirst|';
  if (Name == 'Lucky') out += 'Unlucky|';
  if (Name == 'Organized') out += 'Disorganized|';
  if (Name == 'Resilient') out += 'ProneToIllness|';
  if (Name == 'SpeedDemon') out += 'SundayDriver|';
  if (Name == 'Stout') out += 'Feeble|';
  if (Name == 'Stout') out += 'Strong|';
  if (Name == 'Stout') out += 'Weak|';
  if (Name == 'Strong') out += 'Feeble|';
  if (Name == 'Strong') out += 'Stout|';
  if (Name == 'Strong') out += 'Weak|';
  if (Name == 'ThickSkinned') out += 'Thinskinned|';
  if (Name == 'Wakeful') out += 'Sleepyhead|';
  if (Name == 'Agoraphobic') out += 'Desensitized|';
  if (Name == 'AllThumbs') out += 'Dextrous|';
  if (Name == 'Claustophobic') out += 'Desensitized|';
  if (Name == 'Clumsy') out += 'Graceful|';
  if (Name == 'Conspicuous') out += 'Inconspicuous|';
  if (Name == 'Cowardly') out += 'Brave|';
  if (Name == 'Cowardly') out += 'Desensitized|';
  if (Name == 'Deaf') out += 'HardOfHearing|';
  if (Name == 'Deaf') out += 'KeenHearing|';
  if (Name == 'Disorganized') out += 'Organized|';
  if (Name == 'Feeble') out += 'Stout|';
  if (Name == 'Feeble') out += 'Strong|';
  if (Name == 'Feeble') out += 'Weak|';
  if (Name == 'HardOfHearing') out += 'Deaf|';
  if (Name == 'HardOfHearing') out += 'KeenHearing|';
  if (Name == 'HeartyAppitite') out += 'LightEater|';
  if (Name == 'Hemophobic') out += 'Desensitized|';
  if (Name == 'HighThirst') out += 'LowThirst|';
  if (Name == 'Illiterate') out += 'FastReader|';
  if (Name == 'Illiterate') out += 'SlowReader|';
  if (Name == 'OutofShape') out += 'Athletic|';
  if (Name == 'OutofShape') out += 'Fit|';
  if (Name == 'OutofShape') out += 'Unfit|';
  if (Name == 'Obese') out += 'Athletic|';
  if (Name == 'Obese') out += 'Fit|';
  if (Name == 'Obese') out += 'OutofShape|';
  if (Name == 'Obese') out += 'Overweight|';
  if (Name == 'Obese') out += 'Underweight|';
  if (Name == 'Obese') out += 'Very Underweight|';
  if (Name == 'Overweight') out += 'Athletic|';
  if (Name == 'Overweight') out += 'Fit|';
  if (Name == 'Overweight') out += 'OutofShape|';
  if (Name == 'Overweight') out += 'Obese|';
  if (Name == 'Overweight') out += 'Underweight|';
  if (Name == 'Overweight') out += 'Very Underweight|';
  if (Name == 'ProneToIllness') out += 'Resilient|';
  if (Name == 'ShortSighted') out += 'EagleEyed|';
  if (Name == 'Sleepyhead') out += 'Wakeful|';
  if (Name == 'SlowHealer') out += 'FastHealer|';
  if (Name == 'SlowLearner') out += 'FastLearner|';
  if (Name == 'SlowReader') out += 'FastReader|';
  if (Name == 'SlowReader') out += 'Illiterate|';
  if (Name == 'SundayDriver') out += 'SpeedDemon|';
  if (Name == 'Thinskinned') out += 'ThickSkinned|';
  if (Name == 'Underweight') out += 'Obese|';
  if (Name == 'Underweight') out += 'Overweight|';
  if (Name == 'Underweight') out += 'Very Underweight|';
  if (Name == 'Unfit') out += 'Athletic|';
  if (Name == 'Unfit') out += 'Fit|';
  if (Name == 'Unfit') out += 'OutofShape|';
  if (Name == 'Unlucky') out += 'Lucky|';
  if (Name == 'Very Underweight') out += 'Athletic|';
  if (Name == 'Very Underweight') out += 'Obese|';
  if (Name == 'Very Underweight') out += 'Overweight|';
  if (Name == 'Very Underweight') out += 'Underweight|';
  if (Name == 'Weak') out += 'Feeble|';
  if (Name == 'Weak') out += 'Strong|';
  if (Name == 'Weak') out += 'Stout|';
  if (Name == 'WeakStomach') out += 'IronGut|';
  
  if (Name == 'Confident') out += 'Nervous|';
  if (Name == 'Cook') out += 'Cook2|';
  if (Name == 'Cook2') out += 'Cook|';
  if (Name == 'Desensitized') out += 'AdrenalineJunkie|';
  if (Name == 'Desensitized') out += 'Agoraphobic|';
  if (Name == 'Desensitized') out += 'Brave|';
  if (Name == 'Desensitized') out += 'Claustophobic|';
  if (Name == 'Desensitized') out += 'Cowardly|';
  if (Name == 'Desensitized') out += 'Hemophobic|';
  if (Name == 'Obese') out += 'Emaciated|';
  if (Name == 'Emaciated') out += 'Obese|';
  if (Name == 'Emaciated') out += 'Overweight|';
  if (Name == 'Friendly') out += 'Aggressive|';
  if (Name == 'Loud') out += 'Quiet|';
  if (Name == 'AmateurMechanic') out += 'AmateurMechanic2|';
  if (Name == 'AmateurMechanic2') out += 'AmateurMechanic|';
  if (Name == 'NeedsLessSleep') out += 'NeedsMoreSleep|';
  if (Name == 'NeedsMoreSleep') out += 'NeedsLessSleep|';
  if (Name == 'Nervous') out += 'Confident|';
  if (Name == 'Nutritionist') out += 'Nutritionist2|';
  if (Name == 'Nutritionist2') out += 'Nutritionist|';
  if (Name == 'Quiet') out += 'Loud|';
  if (Name == 'Tough') out += 'Weak|';
  return out.trim();
};
function getFreeTrait(Name) {
  //console.log(Name);
  if (Name.toLowerCase() == 'mechanic') return 'AmateurMechanic2';
  if (Name.toLowerCase() == 'lumberjack') return 'Axeman';
  if (Name.toLowerCase() == 'burglar') return 'Burglar';
  if (Name.toLowerCase() == 'burgerflipper') return 'Cook2';
  if (Name.toLowerCase() == 'chef') return 'Cook2';
  if (Name.toLowerCase() == 'veteran') return 'Desensitized';
  if (Name.toLowerCase() == 'securityguard') return 'NightOwl';
  if (Name.toLowerCase() == 'fitnessInstructor') return 'Nutritionist';
  return false;
};
function AddFreeTrait(Name) {
  var TraitID = getFreeTrait(Name);
  if (TraitID) {
    AddGoodTrait(TraitID, false, true);
    Show(TraitID);
  }

}
function RemoveFreeTrait(Name) {
  var TraitID = getFreeTrait(Name);
  if (TraitID) {
    RemoveGoodTrait(TraitID, false, true);
    Hide(TraitID);
  }
}
function HandleMEX(Name, ShowOrHide) {
  var result = getMEX(Name);
  var p = result.split("|");
  for (i = 0; i < p.length; i++) {
    if ((p[i] != "") && (p[i])) {
      if (ShowOrHide == 'hide') {
        if (window.location.href.includes(p[i])) {
          if (getPoints(p[i]) >= 0) RemoveGoodTrait(p[i], true, false);
          else RemoveBadTrait(p[i], true, false);
        }
        Hide(p[i]);
      }
      else if (ShowOrHide == 'show') Show(p[i]);
      else ToggleVisible(p[i]);
    }
  }
}
function ToggleVisible(ThisID) {
  //console.log(ThisID);
  var e = document.getElementById(ThisID);
  if (e) {
    if (e.style.display == 'block')
      e.style.display = 'none';
    else
      e.style.display = 'block';
  }
}
function Show(ThisID) {
  //console.log(ThisID);
  var e = document.getElementById(ThisID);
  if (e) {
    e.style.display = 'block';
  }
}
function Hide(ThisID) {
  //console.log(ThisID);
  var e = document.getElementById(ThisID);
  if (e) {
    e.style.display = 'none';
  }
}
function AddPointCount(thismuch) {
  var txtNumber = document.getElementById("pointcount");
  var newNumber = parseInt(txtNumber.value) + thismuch;
  txtNumber.value = newNumber;
  if (parseInt(txtNumber.value) >= 0) txtNumber.style.color = "green";
  else txtNumber.style.color = "DarkRed";
  // console.log(thismuch);
}
function RemovePointCount(thismuch) {
  var txtNumber = document.getElementById("pointcount");
  //console.log(thismuch);
  var newNumber = parseInt(txtNumber.value) - thismuch;
  txtNumber.value = newNumber;
  if (parseInt(txtNumber.value) >= 0) txtNumber.style.color = "green";
  else txtNumber.style.color = "DarkRed";
}
//skip remove is used for setting XP boosts on mount
function ChooseProfession(thisID, effectURL, skipRemove = false) {
  if (effectURL) {
    var tempstr = window.location.href;
    window.location.href = tempstr.replace(SelectedProfession + ',', '');
    window.location.href += thisID + ",";
  }
  if(!skipRemove) {
    RemovePointCount(getPoints(SelectedProfession));
    RemoveFreeTrait(SelectedProfession);
    removeXPBoosts(getXPBoosts(SelectedProfession));
  }

  AddPointCount(getPoints(thisID));
  addXPBoosts(getXPBoosts(thisID));
  AddFreeTrait(thisID);

  var element = document.getElementById(SelectedProfession);
  element.style.background = "black";
  element = document.getElementById(thisID);
  element.style.background = "#351b0c";
  SelectedProfession = thisID;

  // IE fallback
}
function AddGoodTrait(thisID, effectURL, effectMEX) {
  addXPBoosts(getXPBoosts(thisID));
  if (effectURL) window.location += thisID.split(' ').join('+') + ",";
  if (effectMEX) HandleMEX(thisID, 'hide');
  var html = '<div OnClick="RemoveGoodTrait(\'' + thisID + '\',true,true)" id="' + thisID + '">' + document.getElementById(thisID).innerHTML + '</div>';
  document.getElementById(thisID).outerHTML = '';
  document.getElementById('chosentraitlist').innerHTML += "\n" + html;
  RemovePointCount(getPoints(thisID));
}
function RemoveGoodTrait(thisID, effectURL, effectMEX) {
  //console.log(thisID);
  removeXPBoosts(getXPBoosts(thisID));
  if (effectURL) window.location.href = window.location.href.replace(thisID.split(' ').join('+') + ",", "");
  if (effectMEX) HandleMEX(thisID, 'show');
  var html = '<div OnClick="AddGoodTrait(\'' + thisID + '\',true,true)" id="' + thisID + '">' + document.getElementById(thisID).innerHTML + '</div>';
  document.getElementById(thisID).outerHTML = '';
  document.getElementById('availgtraitlist').innerHTML += "\n" + html;
  AddPointCount(getPoints(thisID));
}
function AddBadTrait(thisID, effectURL, effectMEX) {
  addXPBoosts(getXPBoosts(thisID));
  if (effectURL) window.location += thisID.split(' ').join('+') + ",";
  if (effectMEX) HandleMEX(thisID, 'hide');
  var html = '<div OnClick="RemoveBadTrait(\'' + thisID + '\',true,true)" id="' + thisID + '">' + document.getElementById(thisID).innerHTML + '</div>';
  document.getElementById(thisID).outerHTML = '';
  document.getElementById('chosentraitlist').innerHTML += "\n" + html;
  RemovePointCount(getPoints(thisID));
}
function RemoveBadTrait(thisID, effectURL, effectMEX) {
  removeXPBoosts(getXPBoosts(thisID));
  if (effectURL) window.location.href = window.location.href.replace(thisID.split(' ').join('+') + ",", "");
  if (effectMEX) HandleMEX(thisID, 'show');
  var html = '<div OnClick="AddBadTrait(\'' + thisID + '\',true,true)" id="' + thisID + '">' + document.getElementById(thisID).innerHTML + '</div>';
  document.getElementById(thisID).outerHTML = '';
  document.getElementById('availbtraitlist').innerHTML += "\n" + html;
  AddPointCount(getPoints(thisID));
}

$(document).ready(function () {
  $("#rowClick > tr").click(function () {
    $(this).toggleClass("active");
  });
});
