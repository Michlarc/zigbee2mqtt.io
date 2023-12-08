"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[97810],{931152:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-7eb834f5","path":"/devices/LY-108.html","title":"TuYa LY-108 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa LY-108 control via MQTT","description":"Integrate your TuYa LY-108 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-06-01T08:16:21.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Work state (text)","slug":"work-state-text","link":"#work-state-text","children":[]},{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Opening mode (enum)","slug":"opening-mode-enum","link":"#opening-mode-enum","children":[]},{"level":3,"title":"Motor direction (enum)","slug":"motor-direction-enum","link":"#motor-direction-enum","children":[]},{"level":3,"title":"Set upper limit (enum)","slug":"set-upper-limit-enum","link":"#set-upper-limit-enum","children":[]},{"level":3,"title":"Factory reset (enum)","slug":"factory-reset-enum","link":"#factory-reset-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1702061290000},"filePathRelative":"devices/LY-108.md"}')},347363:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var i=o(166252);const a=(0,i._)("h1",{id:"tuya-ly-108",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#tuya-ly-108","aria-hidden":"true"},"#"),(0,i.Uk)(" TuYa LY-108")],-1),d=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"LY-108")],-1),r=(0,i._)("td",null,"Vendor",-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Cover")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"work_state, cover (state, position), battery, opening_mode, motor_direction, set_upper_limit, factory_reset, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/LY-108.jpg",alt:"TuYa LY-108"})])],-1),u=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="work-state-text" tabindex="-1"><a class="header-anchor" href="#work-state-text" aria-hidden="true">#</a> Work state (text)</h3><p>Value can be found in the published state on the <code>work_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="opening-mode-enum" tabindex="-1"><a class="header-anchor" href="#opening-mode-enum" aria-hidden="true">#</a> Opening mode (enum)</h3><p>Opening mode. Value can be found in the published state on the <code>opening_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;opening_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>tilt</code>, <code>lift</code>.</p><h3 id="motor-direction-enum" tabindex="-1"><a class="header-anchor" href="#motor-direction-enum" aria-hidden="true">#</a> Motor direction (enum)</h3><p>Motor side. Value can be found in the published state on the <code>motor_direction</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_direction&quot;: NEW_VALUE}</code>. The possible values are: <code>left</code>, <code>right</code>.</p><h3 id="set-upper-limit-enum" tabindex="-1"><a class="header-anchor" href="#set-upper-limit-enum" aria-hidden="true">#</a> Set upper limit (enum)</h3><p>Learning. Value can be found in the published state on the <code>set_upper_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;set_upper_limit&quot;: NEW_VALUE}</code>. The possible values are: <code>start</code>, <code>stop</code>.</p><h3 id="factory-reset-enum" tabindex="-1"><a class="header-anchor" href="#factory-reset-enum" aria-hidden="true">#</a> Factory reset (enum)</h3><p>Remove limits. Value can be found in the published state on the <code>factory_reset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;factory_reset&quot;: NEW_VALUE}</code>. The possible values are: <code>SET</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),h={},p=(0,o(983744).Z)(h,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[d,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[r,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,i.w5)((()=>[(0,i.Uk)("TuYa")])),_:1})])]),s,l,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);