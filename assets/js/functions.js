window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "shuffle_on": true,
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
      "name": "Regtop Kweekel And Oosterhout",
      "url": "./commercials/nl-NL/music/regtop-kweekel-and-oosterhout/16749303939910/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Mangal Group",
      "url": "./commercials/nl-NL/maritime/mangal-group/16749297614400/commercial.mp3",
      "artist": "Maritime",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Migchielsen Stellema And Huijssoon",
      "url": "./commercials/nl-NL/internet/migchielsen-stellema-and-huijssoon/16749307515210/commercial.mp3",
      "artist": "Internet",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Pelkmans Kerkmeijer",
      "url": "./commercials/nl-NL/facilities-services/pelkmans-kerkmeijer/16749308183820/commercial.mp3",
      "artist": "Facilities Services",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Bennett En Zonen",
      "url": "./commercials/nl-NL/capital-markets/bennett-en-zonen/16749312184410/commercial.mp3",
      "artist": "Capital Markets",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Lap En Zonen",
      "url": "./commercials/nl-NL/security-and-investigations/lap-en-zonen/16749301973380/commercial.mp3",
      "artist": "Security And Investigations",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Coumou Leeuwenburg",
      "url": "./commercials/nl-NL/staffing-and-recruiting/coumou-leeuwenburg/16749305790580/commercial.mp3",
      "artist": "Staffing And Recruiting",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Teerlink Beltman And Cup",
      "url": "./commercials/nl-NL/business-supplies-and-equipment/teerlink-beltman-and-cup/16749303739390/commercial.mp3",
      "artist": "Business Supplies And Equipment",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Hakkesteegt Oolders And Luk",
      "url": "./commercials/nl-NL/health-wellness-and-fitness/hakkesteegt-oolders-and-luk/16749314182410/commercial.mp3",
      "artist": "Health Wellness And Fitness",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Wateren Gidding And Klem",
      "url": "./commercials/nl-NL/political-organization/wateren-gidding-and-klem/16749295863810/commercial.mp3",
      "artist": "Political Organization",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Veenhuis Pelkman And Knottnerus",
      "url": "./commercials/nl-NL/mining-metals/veenhuis-pelkman-and-knottnerus/16749307784710/commercial.mp3",
      "artist": "Mining Metals",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Bols Geerman And Yurdakul",
      "url": "./commercials/nl-NL/automotive/bols-geerman-and-yurdakul/16749292963890/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Brunnekreef Heinz And Houwers",
      "url": "./commercials/nl-NL/broadcast-media/brunnekreef-heinz-and-houwers/16749311087350/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-069.jpg"
    },
    {
      "name": "Billar Golde",
      "url": "./commercials/nl-NL/publishing/billar-golde/16749311696010/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Dormans En Zonen",
      "url": "./commercials/nl-NL/machinery/dormans-en-zonen/16749294554520/commercial.mp3",
      "artist": "Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Jonker En Zonen",
      "url": "./commercials/nl-NL/packaging-and-containers/jonker-en-zonen/16749298945750/commercial.mp3",
      "artist": "Packaging And Containers",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Lelijveld En Zonen",
      "url": "./commercials/nl-NL/information-technology-and-services/lelijveld-en-zonen/16749298668080/commercial.mp3",
      "artist": "Information Technology And Services",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Elderen Snaphaan And Wiers",
      "url": "./commercials/nl-NL/internet/elderen-snaphaan-and-wiers/16749293526090/commercial.mp3",
      "artist": "Internet",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Hoepen Halmans",
      "url": "./commercials/nl-NL/alternative-medicine/hoepen-halmans/16749295926350/commercial.mp3",
      "artist": "Alternative Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Brandse V O F",
      "url": "./commercials/nl-NL/consumer-electronics/brandse-v-o-f/16749304227850/commercial.mp3",
      "artist": "Consumer Electronics",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Alberink Hoekzema And Timmers",
      "url": "./commercials/nl-NL/law-enforcement/alberink-hoekzema-and-timmers/16749312877390/commercial.mp3",
      "artist": "Law Enforcement",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Touw Wildt",
      "url": "./commercials/nl-NL/airlines-aviation/touw-wildt/16749296287330/commercial.mp3",
      "artist": "Airlines Aviation",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Wateren Group",
      "url": "./commercials/nl-NL/packaging-and-containers/wateren-group/16749299327490/commercial.mp3",
      "artist": "Packaging And Containers",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Hemmers Wijlick And Attia",
      "url": "./commercials/nl-NL/international-affairs/hemmers-wijlick-and-attia/16749295547180/commercial.mp3",
      "artist": "International Affairs",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Schoonman Husken And Genee",
      "url": "./commercials/nl-NL/food-production/schoonman-husken-and-genee/16749309949380/commercial.mp3",
      "artist": "Food Production",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Meerten Koldewijn",
      "url": "./commercials/nl-NL/financial-services/meerten-koldewijn/16749304487000/commercial.mp3",
      "artist": "Financial Services",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Riewald Wilms",
      "url": "./commercials/nl-NL/security-and-investigations/riewald-wilms/16749308466970/commercial.mp3",
      "artist": "Security And Investigations",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Knook En Zonen",
      "url": "./commercials/nl-NL/electrical-electronic-manufacturing/knook-en-zonen/16749308273500/commercial.mp3",
      "artist": "Electrical Electronic Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Flippo Droomers",
      "url": "./commercials/nl-NL/security-and-investigations/flippo-droomers/16749306445110/commercial.mp3",
      "artist": "Security And Investigations",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Westerhuis Tuininga",
      "url": "./commercials/nl-NL/commercial-real-estate/westerhuis-tuininga/16749298577980/commercial.mp3",
      "artist": "Commercial Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Duffels Zwennes And Wibbelink",
      "url": "./commercials/nl-NL/apparel-fashion/duffels-zwennes-and-wibbelink/16749307686790/commercial.mp3",
      "artist": "Apparel Fashion",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Engeland Bv",
      "url": "./commercials/nl-NL/environmental-services/engeland-bv/16749294731350/commercial.mp3",
      "artist": "Environmental Services",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Ommering Nijland",
      "url": "./commercials/nl-NL/construction/ommering-nijland/16749297714660/commercial.mp3",
      "artist": "Construction",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Wesselink Vergouw",
      "url": "./commercials/nl-NL/online-media/wesselink-vergouw/16749314924420/commercial.mp3",
      "artist": "Online Media",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Haegens Mesman And Regtop",
      "url": "./commercials/nl-NL/mining-metals/haegens-mesman-and-regtop/16749306895690/commercial.mp3",
      "artist": "Mining Metals",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Coevorden Leene And Borgers",
      "url": "./commercials/nl-NL/investment-management/coevorden-leene-and-borgers/16749302408700/commercial.mp3",
      "artist": "Investment Management",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Dullaert Duarte And Siebeling",
      "url": "./commercials/nl-NL/research/dullaert-duarte-and-siebeling/16749302079890/commercial.mp3",
      "artist": "Research",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Immink En Zonen",
      "url": "./commercials/nl-NL/libraries/immink-en-zonen/16749299864250/commercial.mp3",
      "artist": "Libraries",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Varga Nafzger",
      "url": "./commercials/nl-NL/hospital-health-care/varga-nafzger/16749295156040/commercial.mp3",
      "artist": "Hospital Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Hoetmer Bongaards And Geuze",
      "url": "./commercials/nl-NL/ranching/hoetmer-bongaards-and-geuze/16749307269970/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Bakboord Boshouwers",
      "url": "./commercials/nl-NL/retail/bakboord-boshouwers/16749305980840/commercial.mp3",
      "artist": "Retail",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Moergastel En Zonen",
      "url": "./commercials/nl-NL/retail/moergastel-en-zonen/16749312589830/commercial.mp3",
      "artist": "Retail",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Benninga Nederpel And Boudewijns",
      "url": "./commercials/nl-NL/management-consulting/benninga-nederpel-and-boudewijns/16749308560980/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Reef Super",
      "url": "./commercials/nl-NL/aviation-aerospace/reef-super/16749314677930/commercial.mp3",
      "artist": "Aviation Aerospace",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Loenhout Wingerden",
      "url": "./commercials/nl-NL/luxury-goods-jewelry/loenhout-wingerden/16749305526650/commercial.mp3",
      "artist": "Luxury Goods Jewelry",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Maatje Kettenis And Laffra",
      "url": "./commercials/nl-NL/health-wellness-and-fitness/maatje-kettenis-and-laffra/16749293122300/commercial.mp3",
      "artist": "Health Wellness And Fitness",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Hoornstra Lebbing",
      "url": "./commercials/nl-NL/outsourcing-offshoring/hoornstra-lebbing/16749305348260/commercial.mp3",
      "artist": "Outsourcing Offshoring",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Kweekel Bv",
      "url": "./commercials/nl-NL/automotive/kweekel-bv/16749295775530/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Teeuwisse Bv",
      "url": "./commercials/nl-NL/shipbuilding/teeuwisse-bv/16749295260160/commercial.mp3",
      "artist": "Shipbuilding",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Cornelis Withagen And Nan",
      "url": "./commercials/nl-NL/fine-art/cornelis-withagen-and-nan/16749302707760/commercial.mp3",
      "artist": "Fine Art",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Espen Bv",
      "url": "./commercials/nl-NL/international-trade-and-development/espen-bv/16749297175480/commercial.mp3",
      "artist": "International Trade And Development",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Noya V O F",
      "url": "./commercials/nl-NL/political-organization/noya-v-o-f/16749306535250/commercial.mp3",
      "artist": "Political Organization",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Beukering Smolders",
      "url": "./commercials/nl-NL/higher-education/beukering-smolders/16749311584620/commercial.mp3",
      "artist": "Higher Education",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Lynch Golstein",
      "url": "./commercials/nl-NL/think-tanks/lynch-golstein/16749311772140/commercial.mp3",
      "artist": "Think Tanks",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Hagenaar Bv",
      "url": "./commercials/nl-NL/medical-devices/hagenaar-bv/16749309475410/commercial.mp3",
      "artist": "Medical Devices",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Mahabier Weeterings And Delsink",
      "url": "./commercials/nl-NL/publishing/mahabier-weeterings-and-delsink/16749292390740/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Sluisveld En Zonen",
      "url": "./commercials/nl-NL/warehousing/sluisveld-en-zonen/16749296178760/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Husson Hezemans",
      "url": "./commercials/nl-NL/dairy/husson-hezemans/16749297999490/commercial.mp3",
      "artist": "Dairy",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Tillaart Bv",
      "url": "./commercials/nl-NL/law-enforcement/tillaart-bv/16749294102900/commercial.mp3",
      "artist": "Law Enforcement",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Biemolt Coninck",
      "url": "./commercials/nl-NL/management-consulting/biemolt-coninck/16749308017250/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Twijnstra Heerschop",
      "url": "./commercials/nl-NL/professional-training-coaching/twijnstra-heerschop/16749307597330/commercial.mp3",
      "artist": "Professional Training Coaching",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Sauren Neijman And Driessens",
      "url": "./commercials/nl-NL/computer-networking/sauren-neijman-and-driessens/16749302823000/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Boomaerts Zeevat And Idema",
      "url": "./commercials/nl-NL/education-management/boomaerts-zeevat-and-idema/16749304874150/commercial.mp3",
      "artist": "Education Management",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Thakoerdat Bomer And Bodelier",
      "url": "./commercials/nl-NL/individual-family-services/thakoerdat-bomer-and-bodelier/16749294903840/commercial.mp3",
      "artist": "Individual Family Services",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Krimpen En Zonen",
      "url": "./commercials/nl-NL/real-estate/krimpen-en-zonen/16749309632770/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Tempert Drent",
      "url": "./commercials/nl-NL/arts-and-crafts/tempert-drent/16749296665500/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Hijnekamp Doornbosch And Weis",
      "url": "./commercials/nl-NL/photography/hijnekamp-doornbosch-and-weis/16749304055840/commercial.mp3",
      "artist": "Photography",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Basting Soest And Boink",
      "url": "./commercials/nl-NL/philanthropy/basting-soest-and-boink/16749296943610/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Francot Wijntje",
      "url": "./commercials/nl-NL/mental-health-care/francot-wijntje/16749314758780/commercial.mp3",
      "artist": "Mental Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Oldenhuis Bv",
      "url": "./commercials/nl-NL/package-freight-delivery/oldenhuis-bv/16749296012240/commercial.mp3",
      "artist": "Package Freight Delivery",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Leunge Engeland",
      "url": "./commercials/nl-NL/packaging-and-containers/leunge-engeland/16749300771680/commercial.mp3",
      "artist": "Packaging And Containers",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Verriet Tuip",
      "url": "./commercials/nl-NL/public-relations-and-communications/verriet-tuip/16749295698070/commercial.mp3",
      "artist": "Public Relations And Communications",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Schutjes Bv",
      "url": "./commercials/nl-NL/real-estate/schutjes-bv/16749300391010/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Bertelink Linstra",
      "url": "./commercials/nl-NL/hospitality/bertelink-linstra/16749304310650/commercial.mp3",
      "artist": "Hospitality",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Adan V O F",
      "url": "./commercials/nl-NL/public-safety/adan-v-o-f/16749304414780/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Saidi Zuurendonk And Oostveen",
      "url": "./commercials/nl-NL/accounting/saidi-zuurendonk-and-oostveen/16749297097150/commercial.mp3",
      "artist": "Accounting",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Schellekens Bais",
      "url": "./commercials/nl-NL/warehousing/schellekens-bais/16749294338340/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Witsiers Neggers",
      "url": "./commercials/nl-NL/ranching/witsiers-neggers/16749311880480/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Salverda Group",
      "url": "./commercials/nl-NL/defense-space/salverda-group/16749312267260/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Kasteel Gaalen And Moed",
      "url": "./commercials/nl-NL/mental-health-care/kasteel-gaalen-and-moed/16749301168030/commercial.mp3",
      "artist": "Mental Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Monkau Eberson",
      "url": "./commercials/nl-NL/transportationg-trucking-railroad/monkau-eberson/16749311005050/commercial.mp3",
      "artist": "Transportationg Trucking Railroad",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Spier Bek",
      "url": "./commercials/nl-NL/investment-banking/spier-bek/16749302991790/commercial.mp3",
      "artist": "Investment Banking",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Nagy Diepstraten",
      "url": "./commercials/nl-NL/law-practice/nagy-diepstraten/16749301808730/commercial.mp3",
      "artist": "Law Practice",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Wellens Voorst Tot Voorst",
      "url": "./commercials/nl-NL/think-tanks/wellens-voorst-tot-voorst/16749309067990/commercial.mp3",
      "artist": "Think Tanks",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Leverink Cramer",
      "url": "./commercials/nl-NL/law-practice/leverink-cramer/16749293940480/commercial.mp3",
      "artist": "Law Practice",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Ronner V O F",
      "url": "./commercials/nl-NL/public-safety/ronner-v-o-f/16749302517610/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Philippens Fliert And Kroesbergen",
      "url": "./commercials/nl-NL/banking/philippens-fliert-and-kroesbergen/16749308101070/commercial.mp3",
      "artist": "Banking",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Bieleman Group",
      "url": "./commercials/nl-NL/utilities/bieleman-group/16749303175510/commercial.mp3",
      "artist": "Utilities",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Veldsink Peersman",
      "url": "./commercials/nl-NL/glass-ceramics-concrete/veldsink-peersman/16749310182680/commercial.mp3",
      "artist": "Glass Ceramics Concrete",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Hussainali V O F",
      "url": "./commercials/nl-NL/fine-art/hussainali-v-o-f/16749292762430/commercial.mp3",
      "artist": "Fine Art",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Poppes Boeijen And Sluisveld",
      "url": "./commercials/nl-NL/computer-games/poppes-boeijen-and-sluisveld/16749313899560/commercial.mp3",
      "artist": "Computer Games",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Naalden Bv",
      "url": "./commercials/nl-NL/individual-family-services/naalden-bv/16749309876310/commercial.mp3",
      "artist": "Individual Family Services",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Drogen V O F",
      "url": "./commercials/nl-NL/online-media/drogen-v-o-f/16749300512190/commercial.mp3",
      "artist": "Online Media",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Noija Mantjes And Blokland",
      "url": "./commercials/nl-NL/professional-training-coaching/noija-mantjes-and-blokland/16749301267470/commercial.mp3",
      "artist": "Professional Training Coaching",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Schoonbergen V O F",
      "url": "./commercials/nl-NL/recreational-facilities-and-services/schoonbergen-v-o-f/16749295062760/commercial.mp3",
      "artist": "Recreational Facilities And Services",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Kleeven Group",
      "url": "./commercials/nl-NL/oil-energy/kleeven-group/16749315000760/commercial.mp3",
      "artist": "Oil Energy",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Staps Stougie",
      "url": "./commercials/nl-NL/commercial-real-estate/staps-stougie/16749305058190/commercial.mp3",
      "artist": "Commercial Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Schulten Bv",
      "url": "./commercials/nl-NL/publishing/schulten-bv/16749311280640/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Jongkind Treep",
      "url": "./commercials/nl-NL/wholesale/jongkind-treep/16749308971750/commercial.mp3",
      "artist": "Wholesale",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Hoyer Group",
      "url": "./commercials/nl-NL/newspapers/hoyer-group/16749306814900/commercial.mp3",
      "artist": "Newspapers",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Helmink En Zonen",
      "url": "./commercials/nl-NL/restaurants/helmink-en-zonen/16749295617340/commercial.mp3",
      "artist": "Restaurants",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Swanenberg Henzen And Boejharat",
      "url": "./commercials/nl-NL/machinery/swanenberg-henzen-and-boejharat/16749310693320/commercial.mp3",
      "artist": "Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Oostendorp En Zonen",
      "url": "./commercials/nl-NL/nanotechnology/oostendorp-en-zonen/16749304599070/commercial.mp3",
      "artist": "Nanotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Heijboer En Zonen",
      "url": "./commercials/nl-NL/primary-secondary-education/heijboer-en-zonen/16749297904060/commercial.mp3",
      "artist": "Primary Secondary Education",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Maltha En Zonen",
      "url": "./commercials/nl-NL/investment-management/maltha-en-zonen/16749297430390/commercial.mp3",
      "artist": "Investment Management",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Pelger Weij And Erinkveld",
      "url": "./commercials/nl-NL/building-materials/pelger-weij-and-erinkveld/16749298402570/commercial.mp3",
      "artist": "Building Materials",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Ingen Schenau En Zonen",
      "url": "./commercials/nl-NL/insurance/ingen-schenau-en-zonen/16749300044140/commercial.mp3",
      "artist": "Insurance",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Donge Bv",
      "url": "./commercials/nl-NL/chemicals/donge-bv/16749308629870/commercial.mp3",
      "artist": "Chemicals",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Maatjes Schildmeijer",
      "url": "./commercials/nl-NL/investment-banking/maatjes-schildmeijer/16749298231460/commercial.mp3",
      "artist": "Investment Banking",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Kreek Veringa",
      "url": "./commercials/nl-NL/human-resources/kreek-veringa/16749292879750/commercial.mp3",
      "artist": "Human Resources",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Heslenfeld Coenraad",
      "url": "./commercials/nl-NL/security-and-investigations/heslenfeld-coenraad/16749295442310/commercial.mp3",
      "artist": "Security And Investigations",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Bout Dreven And Kooloos",
      "url": "./commercials/nl-NL/events-services/bout-dreven-and-kooloos/16749302183590/commercial.mp3",
      "artist": "Events Services",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Pieterman Paulussen",
      "url": "./commercials/nl-NL/civic-social-organization/pieterman-paulussen/16749313824830/commercial.mp3",
      "artist": "Civic Social Organization",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Deters V O F",
      "url": "./commercials/nl-NL/cosmetics/deters-v-o-f/16749312783650/commercial.mp3",
      "artist": "Cosmetics",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Anneveld Agerbeek",
      "url": "./commercials/nl-NL/fishery/anneveld-agerbeek/16749292242070/commercial.mp3",
      "artist": "Fishery",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "G M Loveren And Dessel",
      "url": "./commercials/nl-NL/ranching/g-m-loveren-and-dessel/16749297794850/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Lafleur Group",
      "url": "./commercials/nl-NL/industrial-automation/lafleur-group/16749294014000/commercial.mp3",
      "artist": "Industrial Automation",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Mandema Vervelde",
      "url": "./commercials/nl-NL/animation/mandema-vervelde/16749314521510/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Chahbari Abarkan",
      "url": "./commercials/nl-NL/human-resources/chahbari-abarkan/16749308892940/commercial.mp3",
      "artist": "Human Resources",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Fritschij Otterspeer And Aman",
      "url": "./commercials/nl-NL/philanthropy/fritschij-otterspeer-and-aman/16749299499870/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Fernandez Klein Koerkamp And Asten",
      "url": "./commercials/nl-NL/hospitality/fernandez-klein-koerkamp-and-asten/16749309263160/commercial.mp3",
      "artist": "Hospitality",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Rikhof Kollen",
      "url": "./commercials/nl-NL/fund-raising/rikhof-kollen/16749310363420/commercial.mp3",
      "artist": "Fund Raising",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Beulink Wiltjer And Stremler",
      "url": "./commercials/nl-NL/renewables-environment/beulink-wiltjer-and-stremler/16749296852700/commercial.mp3",
      "artist": "Renewables Environment",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Sannen Tam",
      "url": "./commercials/nl-NL/computer-software/sannen-tam/16749303376980/commercial.mp3",
      "artist": "Computer Software",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Ponstein Beeldsnijder",
      "url": "./commercials/nl-NL/mining-metals/ponstein-beeldsnijder/16749310606820/commercial.mp3",
      "artist": "Mining Metals",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Logger Nibourg",
      "url": "./commercials/nl-NL/online-media/logger-nibourg/16749293057850/commercial.mp3",
      "artist": "Online Media",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Richters Klement",
      "url": "./commercials/nl-NL/leisure-travel-tourism/richters-klement/16749312682340/commercial.mp3",
      "artist": "Leisure Travel Tourism",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Schiks Motshagen",
      "url": "./commercials/nl-NL/paper-forest-products/schiks-motshagen/16749293682950/commercial.mp3",
      "artist": "Paper Forest Products",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Beemster Group",
      "url": "./commercials/nl-NL/internet/beemster-group/16749292309050/commercial.mp3",
      "artist": "Internet",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Noordermeer Naessens",
      "url": "./commercials/nl-NL/pharmaceuticals/noordermeer-naessens/16749309165270/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Reitsema Group",
      "url": "./commercials/nl-NL/oil-energy/reitsema-group/16749311956990/commercial.mp3",
      "artist": "Oil Energy",
      "cover_art_url": "assets/img/krang/krang-radio-096.jpg"
    },
    {
      "name": "Minten Bv",
      "url": "./commercials/nl-NL/entertainment/minten-bv/16749304676840/commercial.mp3",
      "artist": "Entertainment",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Alfing V O F",
      "url": "./commercials/nl-NL/shipbuilding/alfing-v-o-f/16749310444050/commercial.mp3",
      "artist": "Shipbuilding",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Geuzinge Fevre And Vijfvinkel",
      "url": "./commercials/nl-NL/public-safety/geuzinge-fevre-and-vijfvinkel/16749294632350/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Bald Houten And Yuen",
      "url": "./commercials/nl-NL/electrical-electronic-manufacturing/bald-houten-and-yuen/16749300875610/commercial.mp3",
      "artist": "Electrical Electronic Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-096.jpg"
    },
    {
      "name": "Roemers Jibodh",
      "url": "./commercials/nl-NL/luxury-goods-jewelry/roemers-jibodh/16749296379850/commercial.mp3",
      "artist": "Luxury Goods Jewelry",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Lienen Bhageloe",
      "url": "./commercials/nl-NL/graphic-design/lienen-bhageloe/16749306262770/commercial.mp3",
      "artist": "Graphic Design",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Levering Twist",
      "url": "./commercials/nl-NL/public-policy/levering-twist/16749307085750/commercial.mp3",
      "artist": "Public Policy",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Klis Crone",
      "url": "./commercials/nl-NL/warehousing/klis-crone/16749302260230/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Verroen Stemerding",
      "url": "./commercials/nl-NL/legislative-office/verroen-stemerding/16749312436370/commercial.mp3",
      "artist": "Legislative Office",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Geverink Hugens",
      "url": "./commercials/nl-NL/plastics/geverink-hugens/16749312033140/commercial.mp3",
      "artist": "Plastics",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Khalil V O F",
      "url": "./commercials/nl-NL/sporting-goods/khalil-v-o-f/16749307179470/commercial.mp3",
      "artist": "Sporting Goods",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Belhaj En Zonen",
      "url": "./commercials/nl-NL/real-estate/belhaj-en-zonen/16749310760700/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Wincoop Esch And Grootscholten",
      "url": "./commercials/nl-NL/events-services/wincoop-esch-and-grootscholten/16749313657590/commercial.mp3",
      "artist": "Events Services",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Laat En Zonen",
      "url": "./commercials/nl-NL/mechanical-or-industrial-engineering/laat-en-zonen/16749298867360/commercial.mp3",
      "artist": "Mechanical Or Industrial Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Voshaar Witmond And Bruisten",
      "url": "./commercials/nl-NL/warehousing/voshaar-witmond-and-bruisten/16749312342700/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Stroop Thuijs",
      "url": "./commercials/nl-NL/museums-and-institutions/stroop-thuijs/16749302338290/commercial.mp3",
      "artist": "Museums And Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Dingenouts Schols",
      "url": "./commercials/nl-NL/railroad-manufacture/dingenouts-schols/16749311389360/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Tabbers Tacx",
      "url": "./commercials/nl-NL/sports/tabbers-tacx/16749293366100/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Vroenhoven Houtert",
      "url": "./commercials/nl-NL/fine-art/vroenhoven-houtert/16749300676700/commercial.mp3",
      "artist": "Fine Art",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Molenaar Jaakke And Raemakers",
      "url": "./commercials/nl-NL/accounting/molenaar-jaakke-and-raemakers/16749301364220/commercial.mp3",
      "artist": "Accounting",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Fijn Kaashoek And Wanten",
      "url": "./commercials/nl-NL/utilities/fijn-kaashoek-and-wanten/16749301058230/commercial.mp3",
      "artist": "Utilities",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Meijeringh Sloun And Streefkerk",
      "url": "./commercials/nl-NL/international-trade-and-development/meijeringh-sloun-and-streefkerk/16749303102450/commercial.mp3",
      "artist": "International Trade And Development",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Lettinga V O F",
      "url": "./commercials/nl-NL/pharmaceuticals/lettinga-v-o-f/16749307358450/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Mantel Bv",
      "url": "./commercials/nl-NL/cosmetics/mantel-bv/16749306155370/commercial.mp3",
      "artist": "Cosmetics",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Kievid Kerseboom",
      "url": "./commercials/nl-NL/media-production/kievid-kerseboom/16749299250680/commercial.mp3",
      "artist": "Media Production",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Mazereeuw Tjassing",
      "url": "./commercials/nl-NL/wholesale/mazereeuw-tjassing/16749313724900/commercial.mp3",
      "artist": "Wholesale",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Sijpkens Kraamer",
      "url": "./commercials/nl-NL/facilities-services/sijpkens-kraamer/16749305697830/commercial.mp3",
      "artist": "Facilities Services",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Hartwig Boerhout",
      "url": "./commercials/nl-NL/printing/hartwig-boerhout/16749313576940/commercial.mp3",
      "artist": "Printing",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Passier Lubberts",
      "url": "./commercials/nl-NL/government-relations/passier-lubberts/16749310264170/commercial.mp3",
      "artist": "Government Relations",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Dubbeld Oemrawsingh",
      "url": "./commercials/nl-NL/environmental-services/dubbeld-oemrawsingh/16749313502330/commercial.mp3",
      "artist": "Environmental Services",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Wagid Hosain Bv",
      "url": "./commercials/nl-NL/building-materials/wagid-hosain-bv/16749299617310/commercial.mp3",
      "artist": "Building Materials",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Schattevoet Ravenzwaaij And Jurrius",
      "url": "./commercials/nl-NL/management-consulting/schattevoet-ravenzwaaij-and-jurrius/16749300589140/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Wijgerde Group",
      "url": "./commercials/nl-NL/public-safety/wijgerde-group/16749298772780/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Tuijtelaars Leeuw Van Weenen",
      "url": "./commercials/nl-NL/e-learning/tuijtelaars-leeuw-van-weenen/16749296497130/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Sabben En Zonen",
      "url": "./commercials/nl-NL/e-learning/sabben-en-zonen/16749315177450/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Verbrugge Stoopman",
      "url": "./commercials/nl-NL/apparel-fashion/verbrugge-stoopman/16749309363450/commercial.mp3",
      "artist": "Apparel Fashion",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Schroijen Palstra",
      "url": "./commercials/nl-NL/human-resources/schroijen-palstra/16749299776360/commercial.mp3",
      "artist": "Human Resources",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Schuurs Huigsloot And Popering",
      "url": "./commercials/nl-NL/philanthropy/schuurs-huigsloot-and-popering/16749307423630/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Huijben Rijnen And Udo",
      "url": "./commercials/nl-NL/import-and-export/huijben-rijnen-and-udo/16749314844730/commercial.mp3",
      "artist": "Import And Export",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Baarslag Augenbroe",
      "url": "./commercials/nl-NL/computer-networking/baarslag-augenbroe/16749296750350/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Hoepen Tartwijk And Eeken",
      "url": "./commercials/nl-NL/paper-forest-products/hoepen-tartwijk-and-eeken/16749309719220/commercial.mp3",
      "artist": "Paper Forest Products",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Vertelman Freeke And Moons",
      "url": "./commercials/nl-NL/capital-markets/vertelman-freeke-and-moons/16749302610390/commercial.mp3",
      "artist": "Capital Markets",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Singerling V O F",
      "url": "./commercials/nl-NL/aviation-aerospace/singerling-v-o-f/16749308374710/commercial.mp3",
      "artist": "Aviation Aerospace",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Frensch V O F",
      "url": "./commercials/nl-NL/electrical-electronic-manufacturing/frensch-v-o-f/16749306732170/commercial.mp3",
      "artist": "Electrical Electronic Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Uitterhoeve Group",
      "url": "./commercials/nl-NL/oil-energy/uitterhoeve-group/16749293765930/commercial.mp3",
      "artist": "Oil Energy",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Bittich Prevoo",
      "url": "./commercials/nl-NL/legal-services/bittich-prevoo/16749299055660/commercial.mp3",
      "artist": "Legal Services",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Baselier Manuputty And Bijlsma",
      "url": "./commercials/nl-NL/arts-and-crafts/baselier-manuputty-and-bijlsma/16749294812150/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Meijeringh V O F",
      "url": "./commercials/nl-NL/paper-forest-products/meijeringh-v-o-f/16749314603340/commercial.mp3",
      "artist": "Paper Forest Products",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Innovation And Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-innovation-and-advertising-come-together.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Future Of Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-future-of-advertising-is-now.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Power Of AI",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-power-of-ai-technology-meets-the-world-of-advertising.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Technology Leads",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-leads-the-way-in-advertisemen.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Meets Advertising",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-meets-advertising-excellence.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    }
  ]
});

