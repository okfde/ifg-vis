import{l as a,a as n,b as e,s as r,c as t,e as c,d as y,f as s}from"./vendor.2c8bfcc5.js";!function(a=".",n="__import__"){try{self[n]=new Function("u","return import(u)")}catch(e){const r=new URL(a,location),t=a=>{URL.revokeObjectURL(a.src),a.remove()};self[n]=a=>new Promise(((e,c)=>{const y=new URL(a,r);if(self[n].moduleMap[y])return e(self[n].moduleMap[y]);const s=new Blob([`import * as m from '${y}';`,`${n}.moduleMap['${y}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){c(new Error(`Failed to import: ${a}`)),t(o)},onload(){e(self[n].moduleMap[y]),t(o)}});document.head.appendChild(o)})),self[n].moduleMap={}}}("/assets/");var o={colors:{BK:"#593A68",BMAS:"#005D9F",AA:"#0A3456",BMI:"#4E4F2C",BMJV:"#C43BBE",BMF:"#0099C6",BMWi:"#0C5144",BMEL:"#427C89",BMVg:"#C6A70E",BMFSFJ:"#AAAA11",BMG:"#2BAA2B",BMVI:"#27234D",BMUB:"#14998F",BMBF:"#004889",BKM:"#8553A5",BMZ:"#007EAA",BPA:"#312783",BPrA:"#67D805",BT:"#00676D",BR:"#0101DF",BBank:"#FF7F00",BfDI:"#B77322",BRH:"#E2E207",BVerfG:"#E2E207"},labels:{BK:"Kanzleramt",BMAS:"Arbeitsministerium",AA:"Auswärtiges Amt",BMI:"Innenministerium",BMJV:"Justizministerium",BMF:"Finanzministerium",BMWi:"Wirtschaftsministerium",BMEL:"Verbraucherschutzministerium",BMVg:"Verteidigungsministerium",BMFSFJ:"Familienministerium",BMG:"Gesundheitsministerium",BMVI:"Verkehrsministerium",BMUB:"Umweltministerium",BMBF:"Bildungsministerium",BKM:"Beauftragter für Kultur und Medien",BMZ:"Entwicklungsministerium",BPA:"Bundespresseamt",BPrA:"Bundespräsidialamt",BT:"Bundestag",BR:"Bundesrat",BBank:"Bundesbank",BfDI:"Datenschutz- und Informationsfreiheitsbeauftragter",BRH:"Bundesrechnungshof",BVerfG:"Bundesverfassungsgericht"},defaultInstitution:"BMF",helpDotSize:10,dotSizeNeedsHelp:5,maxDotSize:50};let B={};const{colors:u,labels:m}=o,p=new Set,M=20,i=20,l=20,A=20,F=0,d=50,V=80,f=30,g=80,I=30,S=document.getElementById("vis").offsetWidth,K=Math.max(S,1200)-A-i,J=468-M-l,P=K-d-V,E=a().range([0,P]),R=J-f-g,h=a().domain([0,100]).range([R,0]),k=n(h).tickSize(-K,0,0).ticks(5).tickFormat((a=>a+"%")),G=e(E).tickSize(-J+g,0,0).tickPadding(6).tickFormat((a=>a.toString())),U=r().rangeRound([1,o.maxDotSize]),L=t("#vis").append("svg:svg").attr("width",K+A+i).attr("height",J+M+l).append("g").attr("transform","translate("+A+","+M+")");L.append("g").attr("class","y axis").attr("transform","translate("+I+","+f+")").call(k),L.select(".y.axis .major line");const D=a=>()=>{const n=B[a];B[a].isActive=!0,n.group.raise(),L.selectAll(`.group[data-group=${a}]`).classed("active",!0),n.group.select(".line").style("display","block"),Z()},v=a=>()=>{console.log(a);const n=B[a];p.has(a)||(B[a].isActive=!1,n.group.select(".line").style("display","none"),L.selectAll(`.group[data-group=${a}]`).style("fill","").classed("active",!1),n.group.selectAll(".circle-number").style("display","none"),b())},W=a=>()=>{p.has(a)?(p.delete(a),v(a)()):(p.add(a),D(a)())},Z=function(){for(const a in B)B[a].isActive&&B[a].group.raise();L.selectAll(".label").raise()},b=function(){for(const a in B)B[a].isActive&&D(a)();Z()},z=function(a,n){const e=L.append("g").attr("transform","translate("+V+","+f+")").attr("class","group").attr("data-group",a),r=y((a=>E(a.year)),(a=>h(a.transparency))).curve(s,.5).defined((()=>!0))(n);e.append("svg:path").attr("class","line").style("stroke",u[a]).style("display","none").attr("d",r),e.data(n).on("click",W(a)).on("mouseover",D(a)).on("mouseout",v(a));const t=n[n.length-1];return{labelpos:h(t.transparency),group:e,isActive:!0}},H=[{name:"AA",year:"2006",count:"118",transparency:"69"},{name:"AA",year:"2007",count:"84",transparency:"67"},{name:"AA",year:"2008",count:"126",transparency:"75"},{name:"AA",year:"2009",count:"133",transparency:"74"},{name:"AA",year:"2010",count:"148",transparency:"69"},{name:"AA",year:"2011",count:"163",transparency:"78"},{name:"AA",year:"2012",count:"137",transparency:"58"},{name:"AA",year:"2013",count:"152",transparency:"39"},{name:"AA",year:"2014",count:"192",transparency:"57"},{name:"AA",year:"2015",count:"331",transparency:"35"},{name:"AA",year:"2016",count:"273",transparency:"40"},{name:"AA",year:"2017",count:"283",transparency:"43"},{name:"AA",year:"2018",count:"501",transparency:"37"},{name:"AA",year:"2019",count:"517",transparency:"32"},{name:"AA",year:"2020",count:"732",transparency:"26"},{name:"BBank",year:"2011",count:"13",transparency:"31"},{name:"BBank",year:"2012",count:"12",transparency:"67"},{name:"BBank",year:"2013",count:"6",transparency:"67"},{name:"BBank",year:"2014",count:"9",transparency:"78"},{name:"BBank",year:"2015",count:"10",transparency:"70"},{name:"BBank",year:"2016",count:"46",transparency:"85"},{name:"BBank",year:"2017",count:"37",transparency:"73"},{name:"BBank",year:"2018",count:"53",transparency:"68"},{name:"BBank",year:"2019",count:"23",transparency:"52"},{name:"BBank",year:"2020",count:"46",transparency:"33"},{name:"BK",year:"2006",count:"28",transparency:"43"},{name:"BK",year:"2007",count:"27",transparency:"52"},{name:"BK",year:"2008",count:"20",transparency:"55"},{name:"BK",year:"2009",count:"2",transparency:"0"},{name:"BK",year:"2010",count:"28",transparency:"29"},{name:"BK",year:"2011",count:"24",transparency:"58"},{name:"BK",year:"2012",count:"791",transparency:"97"},{name:"BK",year:"2013",count:"93",transparency:"48"},{name:"BK",year:"2014",count:"119",transparency:"35"},{name:"BK",year:"2015",count:"224",transparency:"26"},{name:"BK",year:"2016",count:"377",transparency:"14"},{name:"BK",year:"2017",count:"269",transparency:"14"},{name:"BK",year:"2018",count:"170",transparency:"17"},{name:"BK",year:"2019",count:"322",transparency:"20"},{name:"BK",year:"2020",count:"316",transparency:"42"},{name:"BKM",year:"2006",count:"6",transparency:"83"},{name:"BKM",year:"2007",count:"9",transparency:"78"},{name:"BKM",year:"2008",count:"7",transparency:"71"},{name:"BKM",year:"2009",count:"6",transparency:"83"},{name:"BKM",year:"2010",count:"18",transparency:"67"},{name:"BKM",year:"2011",count:"22",transparency:"64"},{name:"BKM",year:"2012",count:"17",transparency:"71"},{name:"BKM",year:"2013",count:"24",transparency:"83"},{name:"BKM",year:"2014",count:"37",transparency:"46"},{name:"BKM",year:"2015",count:"35",transparency:"43"},{name:"BKM",year:"2016",count:"53",transparency:"47"},{name:"BKM",year:"2017",count:"63",transparency:"75"},{name:"BKM",year:"2018",count:"42",transparency:"57"},{name:"BKM",year:"2019",count:"46",transparency:"65"},{name:"BKM",year:"2020",count:"52",transparency:"65"},{name:"BMAS",year:"2006",count:"110",transparency:"81"},{name:"BMAS",year:"2007",count:"75",transparency:"69"},{name:"BMAS",year:"2008",count:"62",transparency:"81"},{name:"BMAS",year:"2009",count:"77",transparency:"49"},{name:"BMAS",year:"2010",count:"177",transparency:"60"},{name:"BMAS",year:"2011",count:"337",transparency:"52"},{name:"BMAS",year:"2012",count:"362",transparency:"51"},{name:"BMAS",year:"2013",count:"499",transparency:"64"},{name:"BMAS",year:"2014",count:"590",transparency:"79"},{name:"BMAS",year:"2015",count:"929",transparency:"87"},{name:"BMAS",year:"2016",count:"1270",transparency:"87"},{name:"BMAS",year:"2017",count:"1327",transparency:"87"},{name:"BMAS",year:"2018",count:"1282",transparency:"87"},{name:"BMAS",year:"2019",count:"1260",transparency:"87"},{name:"BMAS",year:"2020",count:"1640",transparency:"88"},{name:"BMBF",year:"2006",count:"6",transparency:"83"},{name:"BMBF",year:"2007",count:"8",transparency:"38"},{name:"BMBF",year:"2008",count:"8",transparency:"88"},{name:"BMBF",year:"2009",count:"9",transparency:"78"},{name:"BMBF",year:"2010",count:"11",transparency:"91"},{name:"BMBF",year:"2011",count:"20",transparency:"55"},{name:"BMBF",year:"2012",count:"37",transparency:"73"},{name:"BMBF",year:"2013",count:"37",transparency:"43"},{name:"BMBF",year:"2014",count:"24",transparency:"21"},{name:"BMBF",year:"2015",count:"52",transparency:"46"},{name:"BMBF",year:"2016",count:"62",transparency:"48"},{name:"BMBF",year:"2017",count:"70",transparency:"50"},{name:"BMBF",year:"2018",count:"100",transparency:"57"},{name:"BMBF",year:"2019",count:"136",transparency:"62"},{name:"BMBF",year:"2020",count:"171",transparency:"52"},{name:"BMEL",year:"2006",count:"144",transparency:"88"},{name:"BMEL",year:"2007",count:"50",transparency:"70"},{name:"BMEL",year:"2008",count:"32",transparency:"78"},{name:"BMEL",year:"2009",count:"62",transparency:"77"},{name:"BMEL",year:"2010",count:"22",transparency:"86"},{name:"BMEL",year:"2011",count:"52",transparency:"83"},{name:"BMEL",year:"2012",count:"48",transparency:"94"},{name:"BMEL",year:"2013",count:"55",transparency:"87"},{name:"BMEL",year:"2014",count:"80",transparency:"91"},{name:"BMEL",year:"2015",count:"76",transparency:"79"},{name:"BMEL",year:"2016",count:"83",transparency:"60"},{name:"BMEL",year:"2017",count:"115",transparency:"70"},{name:"BMEL",year:"2018",count:"166",transparency:"60"},{name:"BMEL",year:"2019",count:"211",transparency:"52"},{name:"BMEL",year:"2020",count:"169",transparency:"54"},{name:"BMF",year:"2006",count:"149",transparency:"52"},{name:"BMF",year:"2007",count:"127",transparency:"54"},{name:"BMF",year:"2008",count:"473",transparency:"18"},{name:"BMF",year:"2009",count:"205",transparency:"51"},{name:"BMF",year:"2010",count:"222",transparency:"49"},{name:"BMF",year:"2011",count:"1346",transparency:"39"},{name:"BMF",year:"2012",count:"2465",transparency:"89"},{name:"BMF",year:"2013",count:"1384",transparency:"71"},{name:"BMF",year:"2014",count:"5622",transparency:"79"},{name:"BMF",year:"2015",count:"12540",transparency:"87"},{name:"BMF",year:"2016",count:"5406",transparency:"83"},{name:"BMF",year:"2017",count:"3768",transparency:"75"},{name:"BMF",year:"2018",count:"3262",transparency:"71"},{name:"BMF",year:"2019",count:"3727",transparency:"80"},{name:"BMF",year:"2020",count:"4264",transparency:"76"},{name:"BMFSFJ",year:"2006",count:"39",transparency:"51"},{name:"BMFSFJ",year:"2007",count:"11",transparency:"55"},{name:"BMFSFJ",year:"2008",count:"13",transparency:"92"},{name:"BMFSFJ",year:"2009",count:"42",transparency:"67"},{name:"BMFSFJ",year:"2010",count:"38",transparency:"76"},{name:"BMFSFJ",year:"2011",count:"20",transparency:"50"},{name:"BMFSFJ",year:"2012",count:"31",transparency:"65"},{name:"BMFSFJ",year:"2013",count:"64",transparency:"69"},{name:"BMFSFJ",year:"2014",count:"41",transparency:"66"},{name:"BMFSFJ",year:"2015",count:"62",transparency:"63"},{name:"BMFSFJ",year:"2016",count:"97",transparency:"65"},{name:"BMFSFJ",year:"2017",count:"108",transparency:"56"},{name:"BMFSFJ",year:"2018",count:"95",transparency:"42"},{name:"BMFSFJ",year:"2019",count:"107",transparency:"50"},{name:"BMFSFJ",year:"2020",count:"174",transparency:"56"},{name:"BMG",year:"2006",count:"236",transparency:"77"},{name:"BMG",year:"2007",count:"219",transparency:"74"},{name:"BMG",year:"2008",count:"245",transparency:"69"},{name:"BMG",year:"2009",count:"237",transparency:"74"},{name:"BMG",year:"2010",count:"253",transparency:"73"},{name:"BMG",year:"2011",count:"269",transparency:"73"},{name:"BMG",year:"2012",count:"320",transparency:"87"},{name:"BMG",year:"2013",count:"240",transparency:"79"},{name:"BMG",year:"2014",count:"148",transparency:"72"},{name:"BMG",year:"2015",count:"232",transparency:"67"},{name:"BMG",year:"2016",count:"260",transparency:"63"},{name:"BMG",year:"2017",count:"292",transparency:"38"},{name:"BMG",year:"2018",count:"272",transparency:"52"},{name:"BMG",year:"2019",count:"219",transparency:"60"},{name:"BMG",year:"2020",count:"735",transparency:"40"},{name:"BMI",year:"2006",count:"89",transparency:"63"},{name:"BMI",year:"2007",count:"74",transparency:"66"},{name:"BMI",year:"2008",count:"63",transparency:"62"},{name:"BMI",year:"2009",count:"85",transparency:"48"},{name:"BMI",year:"2010",count:"111",transparency:"52"},{name:"BMI",year:"2011",count:"132",transparency:"48"},{name:"BMI",year:"2012",count:"246",transparency:"64"},{name:"BMI",year:"2013",count:"325",transparency:"49"},{name:"BMI",year:"2014",count:"443",transparency:"56"},{name:"BMI",year:"2015",count:"502",transparency:"54"},{name:"BMI",year:"2016",count:"495",transparency:"47"},{name:"BMI",year:"2017",count:"901",transparency:"33"},{name:"BMI",year:"2018",count:"2213",transparency:"83"},{name:"BMI",year:"2019",count:"404",transparency:"40"},{name:"BMI",year:"2020",count:"1337",transparency:"49"},{name:"BMJV",year:"2006",count:"65",transparency:"72"},{name:"BMJV",year:"2007",count:"49",transparency:"71"},{name:"BMJV",year:"2008",count:"46",transparency:"67"},{name:"BMJV",year:"2009",count:"40",transparency:"68"},{name:"BMJV",year:"2010",count:"84",transparency:"61"},{name:"BMJV",year:"2011",count:"90",transparency:"62"},{name:"BMJV",year:"2012",count:"101",transparency:"64"},{name:"BMJV",year:"2013",count:"110",transparency:"60"},{name:"BMJV",year:"2014",count:"128",transparency:"52"},{name:"BMJV",year:"2015",count:"200",transparency:"50"},{name:"BMJV",year:"2016",count:"192",transparency:"48"},{name:"BMJV",year:"2017",count:"507",transparency:"23"},{name:"BMJV",year:"2018",count:"271",transparency:"44"},{name:"BMJV",year:"2019",count:"512",transparency:"62"},{name:"BMJV",year:"2020",count:"538",transparency:"64"},{name:"BMUB",year:"2006",count:"5",transparency:"40"},{name:"BMUB",year:"2007",count:"2",transparency:"0"},{name:"BMUB",year:"2008",count:"0",transparency:"0"},{name:"BMUB",year:"2009",count:"5",transparency:"80"},{name:"BMUB",year:"2010",count:"1",transparency:"100"},{name:"BMUB",year:"2011",count:"16",transparency:"62"},{name:"BMUB",year:"2012",count:"12",transparency:"83"},{name:"BMUB",year:"2013",count:"21",transparency:"81"},{name:"BMUB",year:"2014",count:"41",transparency:"73"},{name:"BMUB",year:"2015",count:"27",transparency:"74"},{name:"BMUB",year:"2016",count:"60",transparency:"77"},{name:"BMUB",year:"2017",count:"132",transparency:"60"},{name:"BMUB",year:"2018",count:"83",transparency:"83"},{name:"BMUB",year:"2019",count:"130",transparency:"78"},{name:"BMUB",year:"2020",count:"149",transparency:"85"},{name:"BMVI",year:"2006",count:"133",transparency:"61"},{name:"BMVI",year:"2007",count:"155",transparency:"73"},{name:"BMVI",year:"2008",count:"142",transparency:"81"},{name:"BMVI",year:"2009",count:"153",transparency:"76"},{name:"BMVI",year:"2010",count:"227",transparency:"72"},{name:"BMVI",year:"2011",count:"147",transparency:"74"},{name:"BMVI",year:"2012",count:"217",transparency:"79"},{name:"BMVI",year:"2013",count:"177",transparency:"74"},{name:"BMVI",year:"2014",count:"203",transparency:"77"},{name:"BMVI",year:"2015",count:"179",transparency:"72"},{name:"BMVI",year:"2016",count:"258",transparency:"67"},{name:"BMVI",year:"2017",count:"1316",transparency:"73"},{name:"BMVI",year:"2018",count:"555",transparency:"67"},{name:"BMVI",year:"2019",count:"356",transparency:"53"},{name:"BMVI",year:"2020",count:"486",transparency:"68"},{name:"BMVg",year:"2006",count:"39",transparency:"51"},{name:"BMVg",year:"2007",count:"23",transparency:"65"},{name:"BMVg",year:"2008",count:"13",transparency:"62"},{name:"BMVg",year:"2009",count:"24",transparency:"42"},{name:"BMVg",year:"2010",count:"54",transparency:"69"},{name:"BMVg",year:"2011",count:"65",transparency:"83"},{name:"BMVg",year:"2012",count:"67",transparency:"84"},{name:"BMVg",year:"2013",count:"84",transparency:"74"},{name:"BMVg",year:"2014",count:"88",transparency:"65"},{name:"BMVg",year:"2015",count:"110",transparency:"67"},{name:"BMVg",year:"2016",count:"150",transparency:"59"},{name:"BMVg",year:"2017",count:"153",transparency:"59"},{name:"BMVg",year:"2018",count:"239",transparency:"53"},{name:"BMVg",year:"2019",count:"308",transparency:"57"},{name:"BMVg",year:"2020",count:"341",transparency:"54"},{name:"BMWi",year:"2006",count:"604",transparency:"93"},{name:"BMWi",year:"2007",count:"215",transparency:"84"},{name:"BMWi",year:"2008",count:"173",transparency:"87"},{name:"BMWi",year:"2009",count:"93",transparency:"72"},{name:"BMWi",year:"2010",count:"130",transparency:"70"},{name:"BMWi",year:"2011",count:"488",transparency:"88"},{name:"BMWi",year:"2012",count:"539",transparency:"81"},{name:"BMWi",year:"2013",count:"671",transparency:"86"},{name:"BMWi",year:"2014",count:"821",transparency:"55"},{name:"BMWi",year:"2015",count:"684",transparency:"64"},{name:"BMWi",year:"2016",count:"691",transparency:"66"},{name:"BMWi",year:"2017",count:"904",transparency:"61"},{name:"BMWi",year:"2018",count:"1071",transparency:"48"},{name:"BMWi",year:"2019",count:"1114",transparency:"41"},{name:"BMWi",year:"2020",count:"1107",transparency:"42"},{name:"BMZ",year:"2006",count:"12",transparency:"75"},{name:"BMZ",year:"2007",count:"10",transparency:"70"},{name:"BMZ",year:"2008",count:"13",transparency:"69"},{name:"BMZ",year:"2009",count:"3",transparency:"100"},{name:"BMZ",year:"2010",count:"11",transparency:"100"},{name:"BMZ",year:"2011",count:"18",transparency:"100"},{name:"BMZ",year:"2012",count:"19",transparency:"100"},{name:"BMZ",year:"2013",count:"22",transparency:"95"},{name:"BMZ",year:"2014",count:"14",transparency:"93"},{name:"BMZ",year:"2015",count:"155",transparency:"6"},{name:"BMZ",year:"2016",count:"39",transparency:"44"},{name:"BMZ",year:"2017",count:"74",transparency:"32"},{name:"BMZ",year:"2018",count:"97",transparency:"25"},{name:"BMZ",year:"2019",count:"73",transparency:"40"},{name:"BMZ",year:"2020",count:"115",transparency:"47"},{name:"BPA",year:"2006",count:"6",transparency:"83"},{name:"BPA",year:"2007",count:"5",transparency:"100"},{name:"BPA",year:"2008",count:"2",transparency:"100"},{name:"BPA",year:"2009",count:"0",transparency:"0"},{name:"BPA",year:"2010",count:"4",transparency:"75"},{name:"BPA",year:"2011",count:"6",transparency:"67"},{name:"BPA",year:"2012",count:"9",transparency:"100"},{name:"BPA",year:"2013",count:"425",transparency:"100"},{name:"BPA",year:"2014",count:"35",transparency:"71"},{name:"BPA",year:"2015",count:"60",transparency:"67"},{name:"BPA",year:"2016",count:"72",transparency:"62"},{name:"BPA",year:"2017",count:"67",transparency:"34"},{name:"BPA",year:"2018",count:"30",transparency:"47"},{name:"BPA",year:"2019",count:"0",transparency:"0"},{name:"BPA",year:"2020",count:"36",transparency:"50"},{name:"BPrA",year:"2010",count:"4",transparency:"75"},{name:"BPrA",year:"2011",count:"12",transparency:"25"},{name:"BPrA",year:"2012",count:"14",transparency:"50"},{name:"BPrA",year:"2013",count:"11",transparency:"73"},{name:"BPrA",year:"2014",count:"126",transparency:"23"},{name:"BPrA",year:"2015",count:"38",transparency:"37"},{name:"BPrA",year:"2016",count:"36",transparency:"42"},{name:"BPrA",year:"2017",count:"52",transparency:"29"},{name:"BPrA",year:"2018",count:"27",transparency:"37"},{name:"BPrA",year:"2019",count:"65",transparency:"58"},{name:"BPrA",year:"2020",count:"54",transparency:"39"},{name:"BR",year:"2012",count:"0",transparency:"0"},{name:"BR",year:"2013",count:"6",transparency:"50"},{name:"BR",year:"2014",count:"10",transparency:"80"},{name:"BR",year:"2015",count:"15",transparency:"93"},{name:"BR",year:"2016",count:"6",transparency:"50"},{name:"BR",year:"2017",count:"24",transparency:"83"},{name:"BR",year:"2018",count:"6",transparency:"50"},{name:"BR",year:"2019",count:"14",transparency:"7"},{name:"BR",year:"2020",count:"31",transparency:"16"},{name:"BRH",year:"2012",count:"21",transparency:"62"},{name:"BRH",year:"2013",count:"112",transparency:"47"},{name:"BRH",year:"2014",count:"4",transparency:"50"},{name:"BRH",year:"2015",count:"5",transparency:"20"},{name:"BRH",year:"2016",count:"7",transparency:"57"},{name:"BRH",year:"2017",count:"5",transparency:"60"},{name:"BRH",year:"2018",count:"5",transparency:"20"},{name:"BRH",year:"2019",count:"4",transparency:"50"},{name:"BRH",year:"2020",count:"9",transparency:"56"},{name:"BT",year:"2011",count:"78",transparency:"42"},{name:"BT",year:"2012",count:"85",transparency:"19"},{name:"BT",year:"2013",count:"188",transparency:"56"},{name:"BT",year:"2014",count:"174",transparency:"37"},{name:"BT",year:"2015",count:"711",transparency:"36"},{name:"BT",year:"2016",count:"718",transparency:"15"},{name:"BT",year:"2017",count:"1647",transparency:"6"},{name:"BT",year:"2018",count:"2827",transparency:"3"},{name:"BT",year:"2019",count:"278",transparency:"28"},{name:"BT",year:"2020",count:"306",transparency:"24"},{name:"BVerfG",year:"2015",count:"9",transparency:"78"},{name:"BVerfG",year:"2016",count:"6",transparency:"67"},{name:"BVerfG",year:"2017",count:"14",transparency:"43"},{name:"BVerfG",year:"2018",count:"17",transparency:"41"},{name:"BVerfG",year:"2019",count:"25",transparency:"32"},{name:"BVerfG",year:"2020",count:"46",transparency:"30"},{name:"BfDI",year:"2011",count:"26",transparency:"96"},{name:"BfDI",year:"2012",count:"19",transparency:"89"},{name:"BfDI",year:"2013",count:"12",transparency:"58"},{name:"BfDI",year:"2014",count:"29",transparency:"76"},{name:"BfDI",year:"2015",count:"42",transparency:"74"},{name:"BfDI",year:"2016",count:"301",transparency:"11"},{name:"BfDI",year:"2017",count:"94",transparency:"67"},{name:"BfDI",year:"2018",count:"207",transparency:"54"},{name:"BfDI",year:"2019",count:"233",transparency:"48"},{name:"BfDI",year:"2020",count:"180",transparency:"47"}].map((a=>(a.year=parseInt(a.year,10),a.count=parseInt(a.count,10),a.transparency=parseInt(a.transparency,10),a))).filter((a=>a.count>0)).sort(((a,n)=>a.year-n.year));E.domain(c(H,(a=>a.year))),L.append("g").attr("class","x axis").attr("transform","translate("+V+","+F+")").call(G),U.domain(c(H,(a=>a.count)));const T=[...H].sort(((a,n)=>n.count-a.count));L.selectAll(".dot").data(T).enter().append("circle").attr("class","dot circle").attr("r",(a=>U(a.count)));const w=T.slice().filter((a=>U(a.count)<=o.dotSizeNeedsHelp));L.selectAll(".helpdot").data(w).enter().append("circle").attr("r",o.helpDotSize).attr("class","helpdot circle"),L.selectAll(".circle").attr("transform","translate("+V+","+f+")").attr("cx",(a=>E(a.year))).attr("cy",(a=>h(a.transparency))).on("click",((a,n)=>W(n.name)())).on("mouseover",((a,n)=>D(n.name)())).on("mouseout",((a,n)=>v(n.name)()));for(const x in m)B[x]=z(x,H.filter((a=>a.name===x))),D(x)(),v(x)();
