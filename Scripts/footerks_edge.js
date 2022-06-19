/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'RoundRect',
            type:'rect',
            rect:['0px','0px','100%','40px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(227,233,184,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Text',
            type:'text',
            rect:['11px','12px','927px','16px','auto','auto'],
            text:"Riñihue #1025 Mirador de Reñaca  - Viña del Mar- V Región:: Fonos: Portería (32)3184737 - Kingstown Garden (32)3184868 - Secretaría: Fono-Fax (32)3184745",
            font:['Lucida Sans Unicode, Lucida Grande, sans-serif',10,"rgba(0,0,0,1)","600","none",""]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '100%'],
            ["style", "height", '40px'],
            ["style", "overflow", 'hidden']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(227,233,184,1.00)'],
            ["style", "width", '100%']
         ],
         "${_Text}": [
            ["style", "top", '12px'],
            ["style", "opacity", '0'],
            ["style", "font-size", '10px'],
            ["style", "font-weight", '600'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Lucida Sans Unicode, Lucida Grande, sans-serif'],
            ["style", "left", '11px'],
            ["style", "width", '927px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8000,
         autoPlay: true,
         labels: {
            "bucle": 0
         },
         timeline: [
            { id: "eid3", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 2000 },
            { id: "eid5", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 2000 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-11664260");
