function automationMenuInit(){for(var a=document.getElementsByClassName("btn btn-default"),b=0;b<a.length;b++)"toggleSettingsMenu()"===a[b].getAttribute("onclick")&&a[b].setAttribute("onclick","autoPlusSettingsMenu()");var c=document.createElement("TD");c.appendChild(document.createTextNode("AutoTrimps")),c.setAttribute("class","btn btn-default"),c.setAttribute("onclick","autoToggle()");var d=document.getElementById("settingsTable").firstElementChild.firstElementChild;d.insertBefore(c,d.childNodes[10]);var e=document.createElement("DIV");e.setAttribute("style","margin-top: 0.2vw; display: block; font-size: 1.1vw; height: 1.5em; text-align: center; border-radius: 4px"),e.setAttribute("id","autoMapBtn"),e.setAttribute("class","noselect settingsBtn"),e.setAttribute("onClick","toggleAutoMaps()"),e.setAttribute("onmouseover","tooltip(\"Toggle Automapping\", \"customText\", event, \"Toggle automapping on and off.\")"),e.setAttribute("onmouseout","tooltip(\"hide\")");var f=document.createElement("SPAN");f.appendChild(document.createTextNode("Auto Maps")),f.setAttribute("id","autoMapLabel");var g=document.getElementById("battleBtnsColumn");e.appendChild(f),g.appendChild(e),e=document.createElement("DIV"),e.setAttribute("style","display: block; font-size: 1.1vw; text-align: center; background-color: rgba(0,0,0,0.3);"),e.setAttribute("onmouseover","tooltip(\"Health to Damage ratio\", \"customText\", event, \"This status box displays the current mode Automaps is in. The number usually shown here during Farming or Want more Damage modes is the 'HDratio' meaning EnemyHealth to YourDamage Ratio (in X stance). Above 16 will trigger farming, above 4 will trigger going for Map bonus up to 10 stacks.<p><b>enoughHealth: </b>\" + enoughHealth + \"<br><b>enoughDamage: </b>\" + enoughDamage +\"<br><b>shouldFarm: </b>\" + shouldFarm +\"<br><b>H:D ratio = </b>\" + calcHDratio() + \"<br>\")"),e.setAttribute("onmouseout","tooltip(\"hide\")"),f=document.createElement("SPAN"),f.id="autoMapStatus",e.appendChild(f),g.appendChild(e),e=document.createElement("DIV"),e.setAttribute("style","display: block; font-size: 1vw; text-align: center; margin-top: 2px; background-color: rgba(0,0,0,0.3);"),e.setAttribute("onmouseover","tooltip(\"Helium/Hr Info\", \"customText\", event, \"1st is Current He/hr % out of Lifetime He(not including current+unspent).<br> 0.5% is an ideal peak target. This can tell you when to portal... <br>2nd is Current run Total He earned / Lifetime He(not including current)<br>\" + getDailyHeHrStats())"),e.setAttribute("onmouseout","tooltip(\"hide\")"),f=document.createElement("SPAN"),f.id="hiderStatus",e.appendChild(f),g.appendChild(e);var h=document.getElementById("portalTimer");h.setAttribute("onclick","toggleSetting('pauseGame')"),h.setAttribute("style","cursor: default");for(var j=document.getElementsByClassName("fightBtn"),k=0;k<j.length;k++)j[k].style.padding="0.01vw 0.01vw"}
automationMenuInit();
function automationMenuSettingsInit(){var a=document.getElementById("settingsRow"),b=document.createElement("DIV");b.id="autoSettings",b.setAttribute("style","display: none; max-height: 92.5vh;overflow: auto;"),b.setAttribute("class","niceScroll"),a.appendChild(b)}
automationMenuSettingsInit();
var link1=document.createElement("link");link1.rel="stylesheet",link1.type="text/css",link1.href=basepath+"tabs.css",document.head.appendChild(link1);function createTabs(a,b){var c=document.createElement("li"),d=document.createElement("a");d.className="tablinks",d.setAttribute("onclick","toggleTab(event, '"+a+"')"),d.href="#",d.appendChild(document.createTextNode(a)),c.id="tab"+a,c.appendChild(d),addtabsUL.appendChild(c),createTabContents(a,b)}
function createTabContents(a,b){var c=document.createElement('div');c.className='tabcontent',c.id=a;var d=document.createElement('div');d.setAttribute('style','margin-left: 1vw; margin-right: 1vw;');var e=document.createElement('h4');e.setAttribute('style','font-size: 1.2vw;'),e.appendChild(document.createTextNode(b)),d.appendChild(e),c.appendChild(d),addTabsDiv.appendChild(c)}
function toggleTab(a,b){-1<a.currentTarget.className.indexOf(" active")?(document.getElementById(b).style.display="none",a.currentTarget.className=a.currentTarget.className.replace(" active","")):(document.getElementById(b).style.display="block",a.currentTarget.className+=" active")}
function minimizeAllTabs(){for(var a=document.getElementsByClassName("tabcontent"),b=0,c=a.length;b<c;b++)a[b].style.display="none";for(var d=document.getElementsByClassName("tablinks"),b=0,c=d.length;b<c;b++)d[b].className=d[b].className.replace(" active","")}
function maximizeAllTabs(){for(var a=document.getElementsByClassName("tabcontent"),b=0,c=a.length;b<c;b++)a[b].style.display="block";for(var d=document.getElementsByClassName("tablinks"),b=0,c=d.length;b<c;b++)d[b].style.display="block",d[b].className.includes(" active")||(d[b].className+=" active")}

var addTabsDiv;
var addtabsUL;
function initializeAllTabs() {
    addTabsDiv = document.createElement('div');
    addtabsUL = document.createElement('ul');
    addtabsUL.className = "tab";
    addtabsUL.id = 'autoTrimpsTabBarMenu';
    addtabsUL.style.display = "none";
    var sh = document.getElementById("settingsRow")
    sh.insertBefore(addtabsUL, sh.childNodes[2]);
    createTabs("Core", "Core - Main Controls for the script");
    createTabs("Buildings", "Building Settings");
    createTabs("Jobs", "Jobs - Worker Settings");
    createTabs("Gear", "Gear - Equipment Settings");
    createTabs("Maps", "Maps - AutoMaps & VoidMaps Settings");
    createTabs("Spire", "Spire - Settings for Spires");
    createTabs("Raiding", "Raiding - Settings for Raiding");
    createTabs("Daily", "Dailies - Settings for Dailies");
    createTabs("C2", "C2 - Settings for C2s");
    createTabs("Combat", "Combat & Stance Settings");
    createTabs("Windstacking", "Windstacking Settings");
    createTabs("ATGA", "Geneticassist Settings");
    createTabs("Scryer", "Scryer Settings");
    createTabs("Magma", "Dimensional Generator & Magmite Settings");
    createTabs("Heirlooms", "Heirloom Settings");
    createTabs("Golden", "Golden Upgrade Settings");
    createTabs("Nature", "Nature Settings");
    createTabs("Display", "Display & Spam Settings");
    createTabs("Import Export", "Import & Export Settings");
    var li_0 = document.createElement('li');
    var a_0 = document.createElement('a');
    a_0.className = "tablinks minimize";
    a_0.setAttribute('onclick', 'minimizeAllTabs();');
    a_0.href = "#";
    a_0.appendChild(document.createTextNode("-"));
    li_0.appendChild(a_0);
    li_0.setAttribute("style", "float:right!important;");
    li_0.setAttribute("onmouseover",'tooltip("Minimize all tabs", "customText", event, "Minimize all AT settings tabs.")');
    li_0.setAttribute("onmouseout", 'tooltip("hide")');
    var li_1 = document.createElement('li');
    var a_1 = document.createElement('a');
    a_1.className = "tablinks maximize";
    a_1.setAttribute('onclick', 'maximizeAllTabs();');
    a_1.href = "#";
    a_1.appendChild(document.createTextNode("+"));
    li_1.appendChild(a_1);
    li_1.setAttribute("style", "float:right!important;");
    li_1.setAttribute("onmouseover",'tooltip("Maximize all tabs", "customText", event, "Maximize all AT settings tabs.")');
    li_1.setAttribute("onmouseout", 'tooltip("hide")');
    var li_2 = document.createElement('li');
    var a_2 = document.createElement('a');
    a_2.className = "tablinks tabclose";
    a_2.setAttribute('onclick', 'autoToggle();');
    a_2.href = "#";
    a_2.appendChild(document.createTextNode("x"));
    li_2.appendChild(a_2);
    li_2.setAttribute("style", "float:right!important;");
    li_2.setAttribute("onmouseover",'tooltip("Exit (duplicate)", "customText", event, "Closes/toggles/hides AutoTrimps (just a UI shortcut)")');
    li_2.setAttribute("onmouseout", 'tooltip("hide")');
    addtabsUL.appendChild(li_2);
    addtabsUL.appendChild(li_1);
    addtabsUL.appendChild(li_0);
    document.getElementById("autoSettings").appendChild(addTabsDiv);
    document.getElementById("Core").style.display = "block";
    document.getElementsByClassName("tablinks")[0].className += " active";
}
initializeAllTabs();

function initializeAllSettings() {

    //CORE:

    //Line 1:
    createSetting('ManualGather2', ['Manual Gather/Build', 'Auto Gather/Build', 'Mining/Building Only', 'Science Research OFF'], 'Controls what you gather/build do. Manual does nothing<br>Auto Gathering of Food,Wood,Metal(w/turkimp) & Science. Auto speed-Builds your build queue. <br>Mining/Building only does exactly what it says. Only use if you are passed the early stages of the game and have the mastery foremany unlocked (No longer need to trap, food and wood are useless). <br>You can disable science researching for the achievement: Reach Z120 without using manual research.', 'multitoggle', 1, null, "Core");
    createSetting('gathermetal', 'Metal Only', 'For use with Mining/Gather Only. Only gathers Metal if you have foremany unlocked. ', 'boolean', false, null, "Core");
    createSetting('BuyUpgradesNew', ['Manual Upgrades', 'Buy All Upgrades', 'Upgrades no Coords'], 'Autobuys non-equipment upgrades (equipment is controlled in the Gear tab). The second option does NOT buy coordination (use this <b>ONLY</b> if you know what you\'re doing).', 'multitoggle', 1, null, "Core");
    createSetting('amalcoord', 'Amal Boost', 'Boost your Amal count for more Mi. Will not buy coords until your H:D ratio is below a certain value. This means that you will get amals quicker. Will not activate higher than your Amal Boost End Zone Setting! ', 'boolean', false, null, "Core");
    createSetting('amalcoordt', 'Amal Target', 'Set the amount of Amals you wish to aim for. Once this target is reached, it will buy coords below your Amal ratio regardless of your H:D, just enough to keep the Amal. -1 to disable and use H:D for entire boost. ', 'value', -1, null, "Core");
    createSetting('amalcoordhd', 'Amal Boost H:D', 'Set your H:D for Amal Boost here. The higher it is the less coords AT will buy. 0.0000025 is the default. ', 'value', 0.0000025, null, "Core");
    createSetting('amalcoordz', 'Amal Boost End Z', 'Amal Boost End Zone. Set the zone you want to stop Amal Boosting. -1 to do it infinitely. ', 'value', -1, null, "Core");
    createSetting('AutoAllocatePerks', ['Auto Allocate Off', 'Auto Allocate On', 'Dump into Looting II'], 'Uses the AutoPerks ratio based preset system to automatically allocate your perks to spend whatever helium you have when you AutoPortal. Does not change Fixed Perks: siphonology, anticipation, meditation, relentlessness, range, agility, bait, trumps, packrat, capable. NEW: Dump into Looting II, dumps all loot gained from previous portal at specified zone', 'multitoggle', 0, null, 'Core');

    //Line 2
    createSetting('fastallocate', 'Fast Allocate', 'Turn on if your helium is above 500Qa. Not recommended for low amounts of helium. ', 'boolean', false, null, 'Core');
    createSetting('lootdumpz', 'Loot Dump Z', 'What zone to dump all earned helium from previous portal at. E.g; z230, will dump all helium from last run into looting II at zone 230.', 'value', -1, null, 'Core');
    createSetting('TrapTrimps', 'Trap Trimps', 'Automatically trap trimps when needed, including building traps. (when you turn this off, you may aswell turn off the in-game autotraps button, think of the starving trimps that could eat that food!)', 'boolean', true, null, "Core");
    document.getElementById('TrapTrimps').parentNode.insertAdjacentHTML('afterend', '<br>');

    //Portal Line + Pause
    createSetting('AutoPortal', 'AutoPortal', 'Automatically portal. Will NOT auto-portal if you have a challenge active, the challenge setting dictates which challenge it will select for the next run. All challenge settings will portal right after the challenge ends, regardless. Helium Per Hour only <b>portals at cell 1</b> of the first level where your He/Hr went down even slightly compared to the current runs Best He/Hr. Take note, there is a Buffer option, which is like a grace percentage of how low it can dip without triggering. Setting a buffer will portal mid-zone if you exceed 5x of the buffer.  CAUTION: Selecting He/hr may immediately portal you if its lower-(use Pause AutoTrimps button to pause the script first to avoid this)', 'dropdown', 'Off', ['Off', 'Helium Per Hour', 'Balance', 'Decay', 'Electricity', 'Life', 'Crushed', 'Nom', 'Toxicity', 'Watch', 'Lead', 'Corrupted', 'Domination', 'Custom'], "Core");
    createSetting('HeliumHourChallenge', 'Portal Challenge', 'Automatically portal into this challenge when using helium per hour or custom autoportal. Custom portals after cell 100 of the zone specified. Do not choose a challenge if you havent unlocked it. ', 'dropdown', 'None', ['None', 'Balance', 'Decay', 'Electricity', 'Life', 'Crushed', 'Nom', 'Toxicity', 'Watch', 'Lead', 'Corrupted', 'Domination'], "Core");
    document.getElementById("HeliumHourChallengeLabel").innerHTML = "Portal Challenge:";
    createSetting('CustomAutoPortal', 'Custom Portal', 'Automatically portal AFTER clearing this level.(ie: setting to 200 would portal when you first reach level 201)', 'value', '999', null, "Core");
    createSetting('HeHrDontPortalBefore', 'Don\'t Portal Before', 'Do NOT allow Helium per Hour AutoPortal setting to portal BEFORE this level is reached. It is an additional check that prevents drops in helium/hr from triggering autoportal. Set to 0 or -1 to completely disable this check. (only shows up with Helium per Hour set)', 'value', '999', null, "Core");
    createSetting('HeliumHrBuffer', 'He/Hr Portal Buffer %', 'IMPORTANT SETTING. When using the He/Hr Autoportal, it will portal if your He/Hr drops by this amount of % lower than your best for current run, default is 0% (ie: set to 5 to portal at 95% of your best). Now with stuck protection - Allows portaling midzone if we exceed set buffer amount by 5x. (ie a normal 2% buffer setting would now portal mid-zone you fall below 10% buffer).', 'value', '0', null, 'Core');
    createSetting('PauseScript', 'Pause AutoTrimps', 'Pause AutoTrimps Script (not including the graphs module)', 'boolean', null, null, 'Core');
    var $pauseScript = document.getElementById('PauseScript');
    $pauseScript.parentNode.style.setProperty('float', 'right');
    $pauseScript.parentNode.style.setProperty('margin-right', '1vw');
    $pauseScript.parentNode.style.setProperty('margin-left', '0');



    //Daily

    //Line 1
    createSetting('buyheliumy', 'Buy Heliumy %', 'Buys the Heliumy bonus for <b>100 bones</b> when Daily bonus is above the value set in this setting. Recommend anything above 475. Will not buy if you cant afford to, or value is -1. ', 'value', -1, null, 'Daily');
    createSetting('dfightforever', ['DFA: Off', 'DFA: Non-Empowered', 'DFA: All Dailies'], 'Daily Fight Always. Sends trimps to fight if they\'re not fighting in Daily challenges similar to Toxicity/Nom but not on Bloodthirst/Plagued/Bogged Dailies, regardless of BAF. Non-Empowered will only send to fight if the Daily is not Empowered. Essenitally the same as the one in combat, can use either if you wish, except this will only activate in these daily challenges (duh) ', 'multitoggle', '0', null, 'Daily');
    createSetting('avoidempower', 'Avoid Empower', 'Tries to avoid Empower stacks in Empower Dailies. No harm in this being on, so default is On. ', 'boolean', true, null, 'Daily');
    createSetting('darmormagic', ['Daily Armor Magic Off', 'DAM: Above 80%', 'DAM: H:D', 'DAM: Always'], 'Will buy Armor to try and prevent death on Bleed/Plague/Bogged Dailies under the 3 conditions. <br><b>Above 80%:</b> Will activate at and above 80% of your HZE. <br><b>H:D:</b> Will activate at and above the H:D you have defined in maps. <br><b>Always</b> Will activate always. <br>All options will activate at or <b>below 25% of your health.</b> ', 'multitoggle', 0, null, "Daily");
    createSetting('dscryvoidmaps', 'Daily VM Scryer', 'Only use in Dailies if you have Scryhard II, for er, obvious reasons. Works without the scryer options. ', 'boolean', false, null, 'Daily');

    //Spire
    document.getElementById('dscryvoidmaps').parentNode.insertAdjacentHTML('afterend', '<br>');
    createSetting('dIgnoreSpiresUntil', 'Daily Ignore Spires Until', 'Spire specific settings like end-at-cell are ignored until at least this zone is reached in Dailies (0 to disable). ', 'value', '200', null, 'Daily');
    createSetting('dExitSpireCell', 'Daily Exit Spire Cell', 'What cell to exit spire in dailys. ', 'value', -1, null, 'Daily');
    createSetting('dPreSpireNurseries', 'Daily Nurseries pre-Spire', 'Set the maximum number of Nurseries to build for Spires in Dailies. Overrides No Nurseries Until z and Max Nurseries so you can keep them seperate! Disable with -1.', 'value', -1, null, 'Daily');

    //Raiding
    document.getElementById('dPreSpireNurseries').parentNode.insertAdjacentHTML('afterend', '<br>');
    createSetting('dPraidingzone', 'Daily P Raiding Z', 'Raids Maps for prestiges at zone specified in Dailies. Example: 495, will raid Maps at 501. Once all gear is obtained from the map, it will revert back to regular farming. Extremely helpful for spire. Best used in poison zones. <b>You can use multiple values like this 495,506,525! </b>', 'multiValue', [-1], null, 'Daily');
    createSetting('dPraidHarder', 'Daily Hardcore P Raiding', '(EXPERIMENTAL) P Raid Harder: When enabled, always buys the highest prestige map we can afford when P raiding, with option to farm fragments for highest available prestige level.', 'boolean', false, null, 'Daily');
    createSetting('dMaxPraidZone', 'Daily Max P Raid Z', 'List of maximum zones to Praid on Dailies corresponding to the list specified in Daily Praiding Z.  e.g. if Daily P raiding Z setting is 491,495 and this setting is 495,505, AT will P raid up to 495 from 491, and 505 from 495.  Set to -1 to always buy highest available prestige map.  If no corrsponding value, or value is invalid, defaults to max available (up to +10)', 'multiValue', [-1], null, 'Daily');
    createSetting('dPraidFarmFragsZ', 'Daily Farm Frags Z', 'P Raiding harder: List of zones where we should farm fragments until we can afford the highest or target prestige map for P raiding. Set to -1 to never farm fragments.', 'multiValue', [-1], null, 'Daily');
    createSetting('dPraidBeforeFarmZ', 'Dy Raid bef farm Z', 'P Raiding harder: List of zones where we should P Raid as far as we can afford before trying to farm fragments to Praid the highest or target prestige map.  Only occasionally useful, e.g. if it picks up a Speedexplorer or farming fragments is slow due to low damage. Set to -1 to never raid prestiges before farming fragents.', 'multiValue', [-1], null, 'Daily');
    createSetting('Dailybwraid', 'Daily BW Raid', 'Toggle for Daily BW Raid settings. ', 'boolean', false, null, 'Daily');
    createSetting('dBWraidingz', 'Daily Z to BW Raid', 'Raids BWs at zone specified in dailys. Example: 495, will raid all BWs for all gear starting from 495. Will skip lower BWs if you have enough damage. Once all gear is obtained, will return to regular farming. Accepts comma separated lists, and raids up to the value in the corrsponding position in the Max BW to raid setting. So if this is set to 480,495 and Daily Max BW to Raid is set to 500,515 AT will BW raid up to 500 from 480, and 515 from 495. Make sure these lists are the same length or BW raiding may fail.', 'multiValue', [-1], null, 'Daily');
    createSetting('dBWraidingmax', 'Daily Max BW to raid', 'Raids BWs until zone specified in dailys. Example: 515, will raid all BWs for all gear until 515. Will skip lower BWs if you have enough damage. Once all gear is obtained, will return to regular farming. Now accepts comma separated lists - see description of Daily Z to BW raid setting for details.', 'multiValue', [-1], null, 'Daily');

    //Windstacking
    document.getElementById('dBWraidingmax').parentNode.insertAdjacentHTML('afterend', '<br>');
    createSetting('use3daily', 'Daily Windstacking', '<b> This must be on for Daily windstacking settings to appear!</b> Overrides your Autostance settings to use the WS stance on Dailies. ', 'boolean', false, null, 'Daily');
    createSetting('dWindStackingMin', 'Daily Windstack Min Zone', 'For use with Windstacking Stance, enables windstacking in zones above and inclusive of the zone set for dailys. (Get specified windstacks then change to D, kill bad guy, then repeat). This is designed to force S use until you have specified stacks in wind zones, overriding scryer settings. All windstack settings apart from Daily WS MAX work off this setting. ', 'value', '-1', null, 'Daily');
    createSetting('dWindStackingMinHD', 'Daily Windstack H:D', 'For use with Windstacking Stance in Dailies, fiddle with this to maximise your stacks in wind zones for Dailies. ', 'value', '-1', null, 'Daily');
    createSetting('dWindStackingMax', 'Daily Windstack Stacks', 'For use with Windstacking Stance in Dailies. Amount of windstacks to obtain before switching to D stance. Default is 200, but I recommend anywhere between 175-190. ', 'value', '200', null, 'Daily');
    createSetting('dwindcutoff', 'Daily Wind Damage Cutoff', 'Set this value to optimise your windstacking in dailys. Can work without Windstacking Stance, but not recommended. AT normally uses 4 as its cutoff. I.e if the cutoff is above 4 it will buy max equipment. If you set this to 160, it will not get more damage till you are above x160. Essentially, the higher the value, the less damage AT wants to get, this will enable you to windstack to incredibly high amounts. -1 to disable/go back to default. Must set your windstacking min zone to use. ', 'value', '-1', null, 'Daily');
    createSetting('dwindcutoffmap', 'Daily Wind Map Cutoff', 'Set this value to optimise your windstacking in dailys. Can work without Windstacking Stance, but not recommended. AT normally uses 4 as its cutoff. I.e if the cutoff is above 4 it will do map bonus. If you set this to 160, it will not do maps till you are above x160. Essentially, the higher the value, the less damage AT wants to get, this will enable you to windstack to incredibly high amounts. -1 to disable/go back to default. Must set your windstacking min zone to use. ', 'value', '-1', null, 'Daily');
    createSetting('dwsmax', 'Daily WS MAX', 'For maximising Windstacking an entire Daily. Withholds damage to try and get your max windstacks every wind zone. Not recommended for terrible Dailies. ', 'value', '-1', null, 'Daily');
    createSetting('dwsmaxhd', 'Daily WSM H:D', 'Fiddle with this to maximise your DWSM settings. Default is 0.00025. ', 'value', '0.00025', null, 'Daily');

    //Heirloom
    document.getElementById('dwsmaxhd').parentNode.insertAdjacentHTML('afterend', '<br>');
    createSetting('dhighdmg', 'DHS: High Damage', '<b>HIGH DAMAGE HEIRLOOM</b><br><br>Enter the name of your high damage heirloom. This is your heirloom that you will use normally in dailies. ', 'textValue', 'undefined', null, 'Daily');
    createSetting('dlowdmg', 'DHS: Low Damage', '<b>LOW DAMAGE HEIRLOOM</b><br><br>Enter the name of your low damage heirloom. This is the heirloom that you will use for windstacking in dailies. ', 'textValue', 'undefined', null, 'Daily');

    //Portal Line
    document.getElementById('dlowdmg').parentNode.insertAdjacentHTML('afterend', '<br>');
    createSetting('AutoStartDaily', 'Auto Start Daily', 'Starts Dailies for you. When you portal with this on, it will select the oldest Daily and run it. Use the settings in this tab to decide whats next. ', 'boolean', false, null, 'Daily');
    createSetting('AutoPortalDaily', ['Daily Portal Off', 'DP: He/Hr', 'DP: Custom'], '<b>DP: He/Hr:</b> Portals when your world zone is above the minium you set (if applicable) and the buffer falls below the % you have defined. <br><b>DP: Custom:</b> Portals after clearing the zone you have defined in Daily Custom Portal. ', 'multitoggle', '0', null, "Daily");
    createSetting('dHeliumHourChallenge', 'DP: Challenge', 'Automatically portal into this challenge when using helium per hour or custom autoportal in dailies when there are none left. Custom portals after cell 100 of the zone specified. Do not choose a challenge if you havent unlocked it. ', 'dropdown', 'None', ['None', 'Balance', 'Decay', 'Electricity', 'Life', 'Crushed', 'Nom', 'Toxicity', 'Watch', 'Lead', 'Corrupted', 'Domination'], "Daily");
    createSetting('dCustomAutoPortal', 'Daily Custom Portal', 'Automatically portal AFTER clearing this level in dailies. (ie: setting to 200 would portal when you first reach level 201)', 'value', '999', null, "Daily");
    createSetting('dHeHrDontPortalBefore', 'D: Don\'t Portal Before', 'Do NOT allow Helium per Hour Daily AutoPortal setting to portal BEFORE this level is reached in dailies. It is an additional check that prevents drops in helium/hr from triggering autoportal in dailies. Set to 0 or -1 to completely disable this check. (only shows up with Helium per Hour set in dailies)', 'value', '999', null, "Daily");
    createSetting('dHeliumHrBuffer', 'D: He/Hr Portal Buffer %', 'IMPORTANT SETTING. When using the Daily He/Hr Autoportal, it will portal if your He/Hr drops by this amount of % lower than your best for current run in dailies, default is 0% (ie: set to 5 to portal at 95% of your best in dailies). Now with stuck protection - Allows portaling midzone if we exceed set buffer amount by 5x. (ie a normal 2% buffer setting would now portal mid-zone you fall below 10% buffer).', 'value', '0', null, 'Daily');
    createSetting('DailyVoidMod', 'Daily Void Zone', 'What zone to do void maps in dailys. Disable with -1', 'value', -1, null, 'Daily');



    //C2

    //Line 1
    createSetting('FinishC2', 'Finish Challenge2', '<b>DONT USE THIS WITH C2 RUNNER</b><br>Finish / Abandon Challenge2 (any) when this zone is reached, if you are running one. For manual use. Recommended: Zones ending with 0 for most Challenge2. Disable with -1. Does not affect Non-Challenge2 runs.', 'value', -1, null, 'C2');
    createSetting('buynojobsc', 'No F/L/M in C2', 'Buys No Farmers, Lumberjacks or Miners in the C2 challenges Watch and Trapper. ', 'boolean', 'false', null, "C2");
    createSetting('cfightforever', 'Tox/Nom Fight Always', 'Sends trimps to fight if they\'re not fighting in the Toxicity and Nom Challenges, regardless of BAF. Essenitally the same as the one in combat, can use either if you wish, except this will only activate in these challenges (duh) ', 'boolean', 'false', null, 'C2');
    createSetting('carmormagic', ['C2 Armor Magic Off', 'CAM: Above 80%', 'CAM: H:D', 'CAM: Always'], 'Will buy Armor to try and prevent death on Nom/Tox Challenges under the 3 conditions. <br><b>Above 80%:</b> Will activate at and above 80% of your HZE and when your health is sufficiently low. <br><b>H:D:</b> Will activate at and above the H:D you have defined in maps. <br><b>Always</b> Will activate always. <br>All options will activate at or <b>below 25% of your health.</b> ', 'multitoggle', 0, null, "C2");
    createSetting('mapc2hd', 'Mapology H:D', 'Set your H:D ratio for Mapology. Will not go into maps unless your H:D ratio is above this. -1 to use normal behaviour. ', 'value', '-1', null, 'C2');

    //C2 Runner Line
    document.getElementById('mapc2hd').parentNode.insertAdjacentHTML('afterend', '<br>');
    createSetting('c2runnerstart', 'C2 Runner', 'Runs the normal C2s in sequence according to difficulty. See C2Table for list. Once zone you have defined has been reached, will portal into next. I will advise you not to touch the challenges (abandoning, doing a different one, etc) if you are running this, it could break it. Only runs challenges that need updating, will not run ones close-ish to your HZE. ', 'boolean', false, null, 'C2');
    createSetting('c2runnerportal', 'C2 Runner Portal', 'Automatically portal AFTER clearing this level in C2 Runner. (ie: setting to 200 would portal when you first reach level 201)', 'value', '999', null, "C2");
    createSetting('c2runnerpercent', 'C2 Runner %', 'What percent Threshhold you want C2s to be over. E.g 85, will only run C2s with HZE% below this number. Default is 85%. Must have a value set for C2 Runner to... well, run. ', 'value', '85', null, "C2");
    createSetting('c2table', 'C2 Table', 'Display your C2s in a convenient table which is colour coded. <br><b>Green</b> = Not worth updating. <br><b>Yellow</b> = Consider updating. <br><b>Red</b> = Updating this C2 is worth doing. <br><b>Blue</b> = You have not yet done/unlocked this C2 challenge. ', 'infoclick', 'c2table', null, 'C2');



    //Buildings

    //Line 1
    createSetting('hidebuildings', 'Hide Buildings', 'If you have unlocked Autostructure and Decabuild, this setting will appear and enable you to hide the now obsolete building settings, so please use AutoStructure instead. The settings will only disappear if you disable the buy buildings button and turn this on. It will not hide the Gym settings as Autostructure does not allow you to customize how you buy them. ', 'boolean', false, null, "Buildings");
    createSetting('BuyBuildingsNew', ['Buy Neither', 'Buy Buildings & Storage', 'Buy Buildings', 'Buy Storage'], 'AutoBuys Storage when it is almost full (it even anticipates Jestimp) and Non-Storage Buildings (As soon as they are available). Takes cost efficiency into account before buying Non-Storage Buildings.', 'multitoggle', 1, null, "Buildings");
    createSetting('WarpstationCap', 'Warpstation Cap', 'Do not level Warpstations past Basewarp+DeltaGiga **. Without this, if a Giga wasnt available, it would level infinitely (wastes metal better spent on prestiges instead.) **The script bypasses this cap each time a new giga is bought, when it insta-buys as many as it can afford (since AT keeps available metal/gems to a low, overbuying beyond the cap to what is affordable at that first moment is not a bad thing). ', 'boolean', true, null, 'Buildings');
    createSetting('WarpstationCoordBuy', 'Buy Warp to Hit Coord', 'If we are very close to hitting the next coordination, and we can afford the warpstations it takes to do it, Do it! (even if we are over the Cap/Wall). Recommended with WarpCap/WarpWall. (has no point otherwise) ', 'boolean', true, null, 'Buildings');
    createSetting('MaxHut', 'Max Huts', 'Huts', 'value', '100', null, "Buildings");
    createSetting('MaxHouse', 'Max Houses', 'Houses', 'value', '100', null, "Buildings");
    createSetting('MaxMansion', 'Max Mansions', 'Mansions', 'value', '100', null, "Buildings");
    createSetting('MaxHotel', 'Max Hotels', 'Hotels', 'value', '100', null, "Buildings");

    //Line 2
    createSetting('MaxResort', 'Max Resorts', 'Resorts', 'value', '100', null, "Buildings");
    createSetting('MaxGateway', 'Max Gateways', 'Gateways', 'value', '25', null, "Buildings");
    createSetting('MaxWormhole', 'Max Wormholes', 'WARNING: Wormholes cost helium! Values below 0 do nothing.', 'value', '0', null, "Buildings");
    createSetting('MaxCollector', 'Max Collectors', 'recommend: -1', 'value', '-1', null, "Buildings");
    createSetting('MaxGym', 'Max Gyms', 'Advanced. recommend: -1', 'value', '-1', null, "Buildings"); //Remove?
    createSetting('MaxTribute', 'Max Tributes', 'Advanced. recommend: -1 ', 'value', '-1', null, "Buildings"); //Remove? (More gems is never a bad thing...)
    createSetting('GymWall', 'Gym Wall', 'Conserves Wood. Only buys 1 Gym when you can afford <b>X</b> gyms wood cost (at the first one\'s price, simple math). -1 or 0 to disable. In other words, only allows gyms that cost less than 1/nth your currently owned wood. (to save wood for nurseries for new z230+ Magma nursery strategy). Takes decimal numbers. (Identical to the Warpstation wall setting which is why its called that). Setting to 1 does nothing besides stopping gyms from being bought 2 at a time due to the mastery.', 'value', -1, null, 'Buildings'); //remove?

    //Line 3
    createSetting('FirstGigastation', 'First Gigastation', 'How many warpstations to buy before your first gigastation', 'value', '20', null, "Buildings");
    createSetting('DeltaGigastation', 'Delta Gigastation', '<b>YOU MUST HAVE BUY UPGRADES ENABLED!</b><br> How many extra warpstations to buy for each gigastation. Supports decimal values. For example 2.5 will buy +2/+3/+2/+3...', 'value', '2', null, "Buildings");
    createSetting('WarpstationWall3', 'Warpstation Wall', 'Conserves Metal. Only buys 1 Warpstation when you can afford <b>X</b> warpstations metal cost (at the first one\'s price, simple math). -1, 0, 1 = disable. In other words, only allows warps that cost less than 1/nth your currently owned metal. (to save metal for prestiges)', 'value', -1, null, 'Buildings');
    createSetting('MaxNursery', 'Max Nurseries', 'Advanced. Recommend: -1 until you reach Magma (z230+)', 'value', '-1', null, "Buildings");
    createSetting('NoNurseriesUntil', 'No Nurseries Until z', 'Builds Nurseries starting from this zone. -1 to build from when they are unlocked. ', 'value', '-1', null, 'Buildings');



    //Jobs

    //Line 1
    createSetting('fuckjobs', 'Hide Jobs', 'Hides obsolete settings when you have obtained the AutoJobs Mastery. It should be far better to use than AT, Especially on c2 Challenges like Watch. ', 'boolean', 'false', null, "Jobs");
    createSetting('BuyJobsNew', ['Don\'t Buy Jobs', 'Auto Worker Ratios', 'Manual Worker Ratios'], 'Manual Worker Ratios buys jobs for your trimps according to the ratios below, <b>Make sure they are all different values, if two of them are the same it might causing an infinite loop of hiring and firing!</b> Auto Worker ratios automatically changes these ratios based on current progress, <u>overriding your ratio settings</u>.<br>AutoRatios: 1/1/1 up to 300k trimps, 3/3/5 up to 3mil trimps, then 3/1/4 above 3 mil trimps, then 1/1/10 above 1000 tributes, then 1/2/22 above 1500 tributes, then 1/12/12 above 3000 tributes.<br>CAUTION: You cannot manually assign jobs with this, turn it off if you have to', 'multitoggle', 1, null, "Jobs");
    createSetting('AutoMagmamancers', 'Auto Magmamancers', 'Auto Magmamancer Management. Hires Magmamancers when the Current Zone time goes over 10 minutes. Does a one-time spend of at most 10% of your gem resources. Every increment of 10 minutes after that repeats the 10% hiring process. Magmamancery mastery is accounted for, with that it hires them at 5 minutes instead of 10. Disclaimer: May negatively impact Gem count.', 'boolean', true, null, 'Jobs');
    createSetting('FarmerRatio', 'Farmer Ratio', '', 'value', '1', null, "Jobs");
    createSetting('LumberjackRatio', 'Lumberjack Ratio', '', 'value', '1', null, "Jobs");
    createSetting('MinerRatio', 'Miner Ratio', '', 'value', '1', null, "Jobs");
    createSetting('MaxScientists', 'Max Scientists', 'Advanced. Cap your scientists (This is an absolute number not a ratio). recommend: -1 (infinite still controls itself)', 'value', '-1', null, "Jobs");
    createSetting('MaxExplorers', 'Max Explorers', 'Advanced. Cap your explorers (This is an absolute number not a ratio). recommend: -1', 'value', '-1', null, "Jobs");

    //Line 2
    createSetting('MaxTrainers', 'Max Trainers', 'Advanced. Cap your trainers (This is an absolute number not a ratio). recommend: -1', 'value', '-1', null, "Jobs");



    //Gear

    //Line 1
    createSetting('BuyArmorNew', ['Armor: Buy Neither', 'Armor: Buy Both', 'Armor: Prestiges', 'Armor: Levels'], 'AutoBuys Prestiges and Levels up the most cost efficient Armor available. Gymystic buying is controlled under this setting\'s prestige option', 'multitoggle', 1, null, "Gear"); //This should replace the two below
    createSetting('BuyWeaponsNew', ['Weapons: Buy Neither', 'Weapons: Buy Both', 'Weapons: Prestiges', 'Weapons: Levels'], 'AutoBuys Prestiges and Levels up the most cost efficient Weapon available.', 'multitoggle', 1, null, "Gear"); //This should replace the two below
    createSetting('CapEquip2', 'Weapon Level Cap', 'Do not level Weapons past this number. Helps stop wasting metal when the script levels-up equip High, only to prestige right after. Recommended value: earlygame 10, lategame: 100. Disable with -1 or 0. <b>NEW:</b> Also sub-caps to 10% of your number during liquified or overkilled(under 25sec) zones. This does not mean the script always hits the cap. Your Equip will now always be leveled to at least 2 since its the most effective level. It will only be leveled however if you dont have enoughDamage. But During Spire, everything will be leveled up to the cap.<br><b>Hidden var: </b>MODULES[\\"equipment\\"].capDivisor = 10; //number to divide your normal cap by.', 'value', 10, null, 'Gear');
    createSetting('CapEquiparm', 'Armor Level Cap', 'Do not level Armor past this number. Helps stop wasting metal when the script levels-up equip High, only to prestige right after. Recommended value: earlygame 10, lategame: 100. Disable with -1 or 0. <b>NEW:</b> Also sub-caps to 10% of your number during liquified or overkilled(under 25sec) zones. This does not mean the script always hits the cap. Your Equip will now always be leveled to at least 2 since its the most effective level. It will only be leveled however if you dont have enoughHealth. But During Spire, everything will be leveled up to the cap.<br><b>Hidden var: </b>MODULES[\\"equipment\\"].capDivisor = 10; //number to divide your normal cap by.', 'value', 10, null, 'Gear');
    createSetting('dmgcuntoff', 'Equipment Cut Off', 'Decides when to buy gear. 4 is default. This means it will take 1 hit to kill an enemy if in D stance. ', 'value', '4', null, 'Gear');
    createSetting('DynamicPrestige2', 'Dynamic Prestige z', 'Dynamic Prestige: <b>Set Target Zone number: Z #. (disable with 0 or -1)</b><br> Skip getting prestiges at first, and Gradually work up to the desired Prestige setting you have set (set the Prestige dropdown to the highest weapon you want to end up on at the target zone you set here). Runs with Dagger to save a significant amount of time until we need better gear, then starts increasing the prestige setting near the end of the run.  Examines which prestiges you have, how many missing ones youd need to achieve the desired target and starts running maps every zone (more maps for higher settings), Until the target prestige is reached. <b>Use Dagger or else</b>', 'value', -1, null, 'Gear');
    createSetting('Prestige', 'Prestige', 'Acquire prestiges through the selected item (inclusive) as soon as they are available in maps. Forces equip first mode. Automap must be enabled. THIS IS AN IMPORTANT SETTING related to speed climbing and should probably always be on something. If you find the script getting stuck somewhere, particularly where you should easily be able to kill stuff, setting this to an option lower down in the list will help ensure you are more powerful at all times, but will spend more time acquiring the prestiges in maps.', 'dropdown', 'Polierarm', ['Off', 'Supershield', 'Dagadder', 'Bootboost', 'Megamace', 'Hellishmet', 'Polierarm', 'Pantastic', 'Axeidic', 'Smoldershoulder', 'Greatersword', 'Bestplate', 'Harmbalest', 'GambesOP'], "Gear");
    var lastSetting = autoTrimpSettings["PrestigeBackup"];
    autoTrimpSettings["PrestigeBackup"] = {
        selected: (lastSetting != undefined ? lastSetting.selected : autoTrimpSettings["Prestige"].selected) || "Off",
        id: "PrestigeBackup",
        name: "PrestigeBackup"
    };

    //Line 2
    createSetting('ForcePresZ', 'Force Prestige Z', 'On and after this zone is reached, always try to prestige for everything immediately, ignoring Dynamic Prestige settings and overriding that of Linear Prestige. Prestige Skip mode will exit this. Disable with -1.', 'value', -1, null, 'Gear');
    createSetting('PrestigeSkip1_2', ['Prestige Skip Off', 'Prestige Skip 1 & 2', 'Prestige Skip 1', 'Prestige Skip 2'], '<b>Prestige Skip 1:</b> If there are more than 2 Unbought Prestiges (besides Shield), ie: sitting in your upgrades window but you cant afford them, AutoMaps will not enter Prestige Mode, and/or will exit from it. The amount of unboughts can be configured with this variable MODULES[\\"maps\\"].SkipNumUnboughtPrestiges = 2; <br><b>Prestige Skip 2:</b> If there are 2 or fewer <b>Unobtained Weapon Prestiges in maps</b>, ie: there are less than 2 types to run for, AutoMaps will not enter Prestige Mode, and/or will exit from it. For users who tends to not need the last few prestiges due to resource gain not keeping up. The amount of unboughts can be configured with MODULES.maps.UnearnedPrestigesRequired. If PrestigeSkipMode is enabled, both conditions need to be reached before exiting.', 'multitoggle', 0, null, "Gear");
    createSetting('DelayArmorWhenNeeded', 'Delay Armor Prestige', 'Delays buying armor prestige-upgrades during Want More Damage or Farming automap-modes, Although if you need health AND damage, it WILL buy armor prestiges tho. NOTE: <b>Applies to Prestiges only</b>', 'boolean', false, null, 'Gear');
    createSetting('BuyShieldblock', 'Buy Shield Block', 'Will buy the shield block upgrade. CAUTION: If you are progressing past zone 60, you probably don\'t want this :)', 'boolean', false, null, "Gear");
    createSetting('trimpsnotdie', 'Buy Armor on Death', 'Buys 10 levels of Armor when Trimps die. Useful when your trimps die frequentely. ', 'boolean', false, null, "Gear");
    createSetting('gearamounttobuy', 'Gear Levels to Buy', 'Set the amount of Gear Levels to buy for AT. I.e if set to 1 will buy 1 level at a time. Recommended value 1. <b>MUST ALWAYS HAVE A VALUE GREATER THAN 0! </b>', 'value', 1, null, "Gear");
    createSetting('always2', 'Always Level 2', 'Always buys level 2 of weapons and armor regardless of efficiency', 'boolean', false, null, "Gear");



    //Maps

    //Line 1
    createSetting('AutoMaps', ["Auto Maps Off", "Auto Maps On", "Auto Maps No Unique"], 'Automaps. The no unique setting will not run unique maps such as dimensions of anger. Recommended ON. ', 'multitoggle', 1, null, "Maps");
    createSetting('DynamicSiphonology', 'Dynamic Siphonology', 'Recommended Always ON. Use the right level of siphonology based on your damage output. IE: Only uses  siphonology if you are weak. With this OFF it means it ALWAYS uses the lowest siphonology map you can create. Siphonology is a perk you get at level 115-125ish, and means you receive map bonus stacks for running maps below your current zone - Up to 3 zones below (1 per perk level).', 'boolean', true, null, 'Maps');
    createSetting('PreferMetal', 'Prefer Metal Maps', 'Always prefer metal maps, intended for manual use, such as pre-spire farming. Remember to turn it back off after you\'re done farming!', 'boolean', false, null, 'Maps'); //rarely better tbh
    createSetting('MaxMapBonusAfterZone', 'Max MapBonus After', 'Always gets Max Map Bonus from this zone on. (inclusive and after).<br><b>NOTE:</b> Set -1 to disable entirely (default). Set 0 to use it always.<br><b>Advanced:</b>User can set a lower number than the default 10 maps with the AT hidden console command: MODULES[\\"maps\\"].maxMapBonusAfterZ = 9;', 'value', '-1', null, 'Maps');
    createSetting('MaxMapBonuslimit', 'Max MapBonus Limit', 'Limit the amount of Map Bonuses you get. Default is 10. ', 'value', '10', null, 'Maps');
    createSetting('MaxMapBonushealth', 'Max MapBonus Health', 'Limit the amount of map bonuses you get when AutoMaps requires more health. Default is 10. ', 'value', '10', null, 'Maps');
    createSetting('mapcuntoff', 'Map Cut Off', 'Decides when to get max map bonus. 4 is default. This means it will take 1 hit to kill an enemy if in D stance. ', 'value', '4', null, 'Maps');

    //Line 2
    createSetting('DisableFarm', 'Farming H:D', 'If H:D goes above this value, it will farm for Damage & Health. The lower this setting, the more it will want to farm. Default is <b>16<b/>. <b>-1 to disable farming!</b>', 'value', -1, null, 'Maps');
    createSetting('LowerFarmingZone', 'Lower Farming Zone', 'Lowers the zone used during Farming mode. Uses the dynamic siphonology code, to Find the minimum map level you can successfully one-shot, and uses this level for any maps done after the first 10 map stacks. The difference being it goes LOWER than what Siphonology gives you map-bonus for, but after 10 stacks you dont need bonus, you just want to do maps that you can one-shot. Goes as low as 10 below current zone if your damage is that bad, but this is extreme and indicates you should probably portal.', 'boolean', true, null, 'Maps');
    createSetting('FarmWhenNomStacks7', 'Farm on >7 NOMstacks', 'Optional. If Improbability already has 5 NOMstacks, stack 30 Anticipation. If the Improbability has >7 NOMstacks on it, get +200% dmg from MapBonus. If we still cant kill it, enter Farming mode at 30 stacks, Even with DisableFarming On! (exits when we get under 10x). Farms if we hit 100 stacks in the world. If we ever hit (100) nomstacks in a map (likely a voidmap), farm, (exit the voidmap) and (prevent void from running, until situation is clear). Restarts any voidmaps if we hit 100 stacks. ', 'boolean', false, null, 'Maps');
    createSetting('CorruptionCalc', 'Corruption Farm Mode', 'Recommended. Enabling this will cause the Automaps routine to take amount of corruption in a zone into account, to decide whether it should do maps first for map bonus. ONLY in Zone 181+ (or Headstart 1,2,3 zone: 176,166,151) ', 'boolean', true, null, 'Maps');
    createSetting('VoidMaps', 'Void Maps', '<b>0 to disable</b> The zone at which you want all your void maps to be cleared inclusive of the zone you type. Runs them at Cell 93 by default, unless you set a decimal value indicating the cell (example: 187.75). Use odd zones on Lead.<br>If Daily Void Zone Mod is active, your Finish Daily Z Mod will apply to this number when a Daily is active.', 'value', '0', null, "Maps");
    createSetting('RunNewVoidsUntilNew', 'New Voids Mod', '<b>0 to disable. Positive numbers are added to your Void Map zone. -1 for no cap.</b> This allows you to run new Void Maps obtained after your Void Map zone by adding this number to your Void Map zone. <br> <b>Example</b> Void map zone=185.75 and This setting=10. New Voids run until 197.75).<br>This means that any new void maps gained until Z197, cell 75 will be run. CAUTION: May severely slow you down by trying to do too-high level void maps. Default 0 (OFF).', 'value', '0', null, 'Maps');
    createSetting('onlystackedvoids', 'Stacked Voids Only', 'Only run stacked voids. ', 'boolean', false, null, 'Maps');

    //Line 3
	createSetting('VoidCheck', 'Void Difficulty Check', 'How many hits to be able to take from a void map boss in X stance before we attempt the map. Higher values will get you stronger (by farming maps for health) before attempting. Disabling this with 0 or -1 translates into a default of surviving 2 hits. I recommend somewhere between 2 and 12 (default is now 6).', 'value', '6', null, 'Maps');
    createSetting('TrimpleZ', 'Trimple Z', 'I don\'t really think doing this automatically is a good idea. You might want to farm for a bit before this, but I\'m not sure if it\'s meaningful at all to make a \'farm X minutes before trimple\' parameter to go along with it. Set it to the zone you want and it will run Trimple of Doom for Ancient Treasure AFTER farming and getting map stacks. If it is a negative number, this will be disabled after a successful run so you can set it differently next time.', 'valueNegative', 0, null, 'Maps');
    createSetting('AdvMapSpecialModifier', 'Map Special Modifier', '<b>EXPERIMENTAL.</b> Attempt to select the BEST map special modifier. When starting a map for <b>Prestige</b> it will use <i>Prestigious</i>. When starting a map for <b>Farming</b> (for equipment) it will use your best metal cache. In any other case (such as farming for map stacks) it will use <i>Fast Attacks</i>. In all cases it uses the best modifier that can be afforded.', 'boolean', true, null, 'Maps');
    createSetting('scryvoidmaps', 'VM Scryer', 'Only use if you have Scryhard II, for er, obvious reasons. Works without the scryer options. ', 'boolean', false, null, 'Maps');
    createSetting('buywepsvoid', 'VM Buy Weps', 'Buys gear in Void maps regardless of your H:D ratio. Useful if you want to overkill as much as possible. ', 'boolean', false, null, 'Maps');



    //Spire

    //Line 1
    createSetting('MaxStacksForSpire', 'Max Map Bonus for Spire', 'Get max map bonus before running the Spire.', 'boolean', false, null, 'Spire');
    createSetting('MinutestoFarmBeforeSpire', 'Farm Before Spire', 'Farm level 200/199(or BW) maps for X minutes before continuing onto attempting Spire.<br><b>NOTE:</b> Set 0 to disable entirely (default). <br>Setting to -1/Infinite does not work here, set a very high number instead.', 'value', '0', null, 'Spire');
    createSetting('IgnoreSpiresUntil', 'Ignore Spires Until', 'Spire specific settings like end-at-cell are ignored until at least this zone is reached (0 to disable).<br>Does not work with Run Bionic Before Spire.', 'value', '200', null, 'Spire');
    createSetting('ExitSpireCell', 'Exit Spire After Cell', 'Optional/Rare. Exits the Spire early, after completing cell X. example: 40 for Row 4. (use 0 or -1 to disable)', 'value', '-1', null, 'Spire');
    createSetting('SpireBreedTimer', 'Spire Breed Timer', '<b>ONLY USE IF YOU USE VANILLA GA</b>Set a time for your GA in spire. Recommend not touching GA during this time. ', 'value', -1, null, 'Spire');
    createSetting('PreSpireNurseries', 'Nurseries pre-Spire', 'Set the maximum number of Nurseries to build for Spires. Overrides No Nurseries Until z and Max Nurseries so you can keep them seperate! Will build nurseries before z200 for Spire 1, but only on the zone of Spires 2+ to avoid unnecessary burning. Disable with -1.', 'value', -1, null, 'Spire');
    createSetting('spireshitbuy', 'Buy Gear in Spire', 'Will buy Weapons and Armor in Spire regardless of your H:D ratio. Respects your max gear level and ignore spires setting. ', 'boolean', false, null, 'Spire');



    //Raiding

    //Line 1
    createSetting('Praidingzone', 'P Raiding Z', 'Raids Maps for prestiges at zone specified. Example: 495, will raid Maps at 501. Once all gear is obtained from the map, it will revert back to regular farming. Extremely helpful for spire. Best used in poison zones. <b>You can use multiple values like this 495,506,525! </b>', 'multiValue', [-1], null, 'Raiding');
    createSetting('PraidHarder', 'Hardcore P Raiding', '(EXPERIMENTAL) P Raid Harder: When enabled, always buys the highest prestige map we can afford when P raiding, with option to farm fragments for highest available prestige level.', 'boolean', false, null, 'Raiding');
    createSetting('MaxPraidZone', 'Max P Raid Zones', 'List of maximum zones to Praid corresponding to the list specified in Praiding zones.  e.g. if P raiding zones setting is 491,495 and this setting is 495,505, AT will P raid up to 495 from 491, and 505 from 495. Set to -1 to always buy highest available prestige map.  If no corrsponding value, or value is invalid, defaults to max available (up to +10)', 'multiValue', [-1], null, 'Raiding');
    createSetting('PraidFarmFragsZ', 'Farm Fragments Z', 'P Raiding harder: List of zones where we should farm fragments until we can afford the highest or target prestige map for P raiding. Set to -1 to never farm fragments. ', 'multiValue', [-1], null, 'Raiding');
    createSetting('PraidBeforeFarmZ', 'Raid before farm Z', 'P Raiding harder: List of zones where we should P Raid as far as we can afford before trying to farm fragments to Praid the highest or target prestige map.  Only occasionally useful, e.g. if it picks up a Speedexplorer or farming fragments is slow due to low damage. Set to -1 to never raid prestiges before farming fragents.', 'multiValue', [-1], null, 'Raiding');
    createSetting('BWraid', 'BW Raiding', 'Raids BW at zone specified in BW Raiding Z/max.', 'boolean', false, null, 'Raiding');
    createSetting('BWraidingz', 'Z to BW Raid', 'Raids BWs at zone specified. Example: 495, will raid all BWs for all gear starting from 495. Will skip lower BWs if you have enough damage. Once all gear is obtained, will return to regular farming. Accepts comma separated lists, and raids up to the value in the corrsponding position in the Max BW to raid setting. So if this is set to 480,495 and Max BW to Raid is set to 500,515 AT will BW raid up to 500 from 480, and 515 from 495. Make sure these lists are the same length or BW raiding may fail.', 'multiValue', [-1], null, 'Raiding');

    //Line 2
    createSetting('BWraidingmax', 'Max BW to raid', 'Raids BWs until zone specified. Example: 515, will raid all BWs for all gear until 515. Will skip lower BWs if you have enough damage. Once all gear is obtained, will return to regular farming. Now accepts comma separated lists - see description of Z to BW raid setting for details.', 'multiValue', [-1], null, 'Raiding');



    //Windstacking

    //Line 1
    createSetting('turnwson', 'Turn WS On!', 'Turn on Windstacking Stance in Combat to see the settings! ', 'boolean', 'false', null, 'Windstacking');
    createSetting('WindStackingMin', 'Windstack Min Zone', 'For use with Windstacking Stance, enables windstacking in zones above and inclusive of the zone set. (Get specified windstacks then change to D, kill bad guy, then repeat). This is designed to force S use until you have specified stacks in wind zones, overriding scryer settings. All windstack settings apart from WS MAX work off this setting. ', 'value', '-1', null, 'Windstacking');
    createSetting('WindStackingMinHD', 'Windstack H:D', 'For use with Windstacking Stance, fiddle with this to maximise your stacks in wind zones. ', 'value', '-1', null, 'Windstacking');
    createSetting('WindStackingMax', 'Windstack Stacks', 'For use with Windstacking Stance. Amount of windstacks to obtain before switching to D stance. Default is 200, but I recommend anywhere between 25-50. ', 'value', '200', null, 'Windstacking');
    createSetting('windcutoff', 'Wind Damage Cutoff', 'Set this value to optimise your windstacking. Can work without AS3, but not recommended. AT normally uses 4 as its cutoff. I.e if the cutoff is above 4 it will buy max equipment. If you set this to 160, it will not get more damage till you are above x160. Essentially, the higher the value, the less damage AT wants to get, this will enable you to windstack to incredibly high amounts. -1 to disable/go back to default. Must set your windstacking min zone to use. ', 'value', '-1', null, 'Windstacking');
    createSetting('windcutoffmap', 'Wind Map Cutoff', 'Set this value to optimise your windstacking. Can work without AS3, but not recommended. AT normally uses 4 as its cutoff. I.e if the cutoff is above 4 it will get map bonus. If you set this to 160, it will not get more map bonus till you are above x160. Essentially, the higher the value, the less damage AT wants to get, this will enable you to windstack to incredibly high amounts. -1 to disable/go back to default. Must set your windstacking min zone to use. ', 'value', '-1', null, 'Windstacking');
    createSetting('wsmax', 'WS MAX', 'For maximising Windstacking an entire run. Withholds damage to try and get your max windstacks every wind zone. Not recommended for normal usage. Good for BPs. ', 'value', '-1', null, 'Windstacking');
    createSetting('wsmaxhd', 'WSM H:D', 'Fiddle with this to maximise your WSM settings. Default is 0.00025. ', 'value', '0.00025', null, 'Windstacking');
    createSetting('fuckanti', '0 Antistacks H:D', 'Will try to get 0 antistacks below this H:D. I.e if this is set to 80, it will remain at 0 antistacks below 80 H:D and obtain the max after 80 has been breached. -1 to disable. ', 'value', '-1', null, 'Windstacking');



    //ATGA

    //Line 1
    createSetting('ATGA2', 'ATGA', '<b>ATGA MASTER BUTTON</b><br>AT Geneticassist. Do not use vanilla GA, as it will conflict otherwise. May get fucky with super high values. ', 'boolean', 'false', null, 'ATGA');
    createSetting('ATGA2gen', 'ATGA: Gen %', '<b>ATGA: Geneassist %</b><br>ATGA will only hire geneticists if they cost less than this value. E.g if this setting is 1 it will only buy geneticists if they cost less than 1% of your food. Default is 1%. ', 'value', '1', null, 'ATGA');
    createSetting('ATGA2timer', 'ATGA: Timer', '<b>ATGA Timer</b><br>This is the default time your ATGA will use. ', 'value', '-1', null, 'ATGA');

    //Zone Timers
    document.getElementById('ATGA2timer').parentNode.insertAdjacentHTML('afterend', '<br>');
    createSetting('zATGA2timer', 'ATGA: T: Before Z', '<b>ATGA Timer: Before Z</b><br>ATGA will use the value you define in ATGA: T: BZT before the zone you have defined in this setting, overwriting your default timer. Useful for Liq or whatever. ', 'value', '-1', null, 'ATGA');
    createSetting('ztATGA2timer', 'ATGA: T: BZT', '<b>ATGA Timer: Before Z Timer</b><br>ATGA will use this value before the zone you have defined in ATGA: T: Before Z, overwriting your default timer. Useful for Liq or whatever. Does not work on challenges. ', 'value', '-1', null, 'ATGA');
    createSetting('ATGA2timerz', 'ATGA: T: After Z', '<b>ATGA Timer: After Z</b><br>ATGA will use the value you define in ATGA: T: AZT after the zone you have defined in this setting, overwriting your default timer. Useful for super push runs or whatever. Does not work on challenges. ', 'value', '-1', null, 'ATGA');
    createSetting('ATGA2timerzt', 'ATGA: T: AZT', '<b>ATGA Timer: After Z Timer</b><br>ATGA will use this value after the zone that has been defined in ATGA: T: After Z, overwriting your default timer. Useful for super push runs or whatever. ', 'value', '-1', null, 'ATGA');

    //Spire Timers
    document.getElementById('ATGA2timerzt').parentNode.insertAdjacentHTML('afterend', '<br>');
    createSetting('sATGA2timer', 'ATGA: T: Spire', '<b>ATGA Timer: Spire</b><br>ATGA will use this value in Spires. Respects your ignore Spires setting. Do not use this if you use the setting in the Spire tab! (As that uses vanilla GA) Nothing overwrites this except Daily Spire. ', 'value', '-1', null, 'ATGA');
    createSetting('dsATGA2timer', 'ATGA: T: Daily Spire', '<b>ATGA Timer: Daily Spire</b><br>ATGA will use this value in Daily Spires. Respects your ignore Spires setting. Do not use this if you use the setting in the Spire tab! (As that uses vanilla GA) Nothing overwrites this. ', 'value', '-1', null, 'ATGA');

    //Daily Timers
    document.getElementById('dsATGA2timer').parentNode.insertAdjacentHTML('afterend', '<br>');
    createSetting('dATGA2Auto', ['ATGA: Manual', 'ATGA: Auto No Spire', 'ATGA: Auto Dailies'], '<b>EXPERIMENTAL</b><br><b>ATGA Timer: Auto Dailies</b><br>ATGA will use automatically set breed timers in plague and bogged, overwriting your default timer.<br/>Set No Spire to not override in spire, respecting ignore spire settings.', 'multitoggle', 2, null, 'ATGA');
    createSetting('dATGA2timer', 'ATGA: T: Dailies', '<b>ATGA Timer: Normal Dailies</b><br>ATGA will use this value for normal Dailies such as ones without plague etc, overwriting your default timer. Useful for pushing your dailies that extra bit at the end. Overwrites Default, Before Z and After Z. ', 'value', '-1', null, 'ATGA');
    createSetting('dhATGA2timer', 'ATGA: T: D: Hard', '<b>ATGA Timer: Hard Dailies</b><br>ATGA will use this value in Dailies that are considered Hard. Such Dailies include plaged, bloodthirst and Dailies with a lot of negative mods. Overwrites Default, Before Z and After Z and normal Daily ATGA Timer. ', 'value', '-1', null, 'ATGA');

    //C2 Timers
    document.getElementById('dhATGA2timer').parentNode.insertAdjacentHTML('afterend', '<br>');
    createSetting('cATGA2timer', 'ATGA: T: C2', '<b>ATGA Timer: C2s</b><br>ATGA will use this value in C2s. Overwrites Default, Before Z and After Z. ', 'value', '-1', null, 'ATGA');
    createSetting('chATGA2timer', 'ATGA: T: C: Hard', '<b>ATGA Timer: Hard C2s</b><br>ATGA will use this value in C2s that are considered Hard. Electricity, Nom, Toxicity. Overwrites Default, Before Z and After Z and C2 ATGA', 'value', '-1', null, 'ATGA');



    //Combat

    //Line 1
    createSetting('BetterAutoFight', ['Better AutoFight OFF', 'Better Auto Fight 1', 'Better Auto Fight 2', 'Better Auto Fight 3'], '4-Way Button, Recommended. Will automatically handle fighting.<br>BAF1 = Old Algo (Fights if dead, new squad ready, new squad breed timer target exceeded, and if breeding takes under 0.5 seconds<br>BAF2 = Newer, As with BAF1, but also solves DimGen looping, sends trimps immediately when breed target met, and deals with the consequences by firing geneticists<br>BAF3 = Uses vanilla autofight. <br> WARNING: If you autoportal with BetterAutoFight disabled, the game may sit there doing nothing until you click FIGHT. (not good for afk) ', 'multitoggle', 3, null, "Combat");
    createSetting('AutoStance', ['Auto Stance OFF', 'Auto Stance', 'D Stance', 'Windstacking'], '<b>Autostance:</b> Automatically swap stances to avoid death. <br><b>D Stance:</b> Keeps you in D stance regardless of Health. <br><b>Windstacking:</b> For use after nature (z230), and will keep you in D stance unless you are windstacking (Only useful if transfer is maxed out and wind empowerment is high). Manages your Heirloom swapping and stance to obtain wind stacks efficiently. You must set your High Dmg and Low Dmg Heirlooms, Windstack H:D or WSMAX H:D where relevant for this to work. ', 'multitoggle', 1, null, "Combat");
    createSetting('AutoStanceNew', 'Beta AS', 'Turn this on and Autostance off to experience testing hell! Yaaaaaay!', 'boolean', false, null, "Combat");
    createSetting('IgnoreCrits', ['Safety First', 'Ignore Void Strength', 'Ignore All Crits'], 'No longer switches to B against corrupted precision and/or void strength. <b>Basically we now treat \'crit things\' as regular in both autoStance and autoStance2</b>. In fact it no longer takes precision / strength into account and will manage like a normal enemy, thus retaining X / D depending on your needs. If you\'re certain your block is high enough regardless if you\'re fighting a crit guy in a crit daily, use this! Alternatively, manage the stances yourself.', 'multitoggle', 0, null, 'Combat');
    createSetting('PowerSaving', ['AutoAbandon', 'Don\'t Abandon', 'Only Rush Voids'], '<b>Autoabandon:</b> Considers abandoning trimps for void maps/prestiges.<br><b>Don\'t Abandon:</b> Will not abandon troops, but will still agressively autostance even if it will kill you (WILL NOT ABANDON TRIMPS TO DO VOIDS).<br><b>Only Rush Voids:</b> Considers abandoning trimps for void maps, but not prestiges, still autostances aggressively. <br>Made for Empower daily, and you might find this helpful if you\'re doing Workplace Safety feat. Then again with that I strongly recommend doing it fully manually. Anyway, don\'t blame me whatever happens.<br><b>Note:</b> AT will no longer be able to fix when your scryer gets stuck!', 'multitoggle', 0, null, 'Combat');
    createSetting('ForceAbandon', 'Trimpicide', 'If a new fight group is available and anticipation stacks aren\'t maxed, Trimpicide and grab a new group. Will not abandon in spire. Recommended ON. ', 'boolean', true, null, 'Combat');
    createSetting('DynamicGyms', 'Dynamic Gyms', 'Designed to limit your block to slightly more than however much the enemy attack is. If MaxGyms is capped or GymWall is set, those will still work, and this will NOT override those (works concurrently), but it will further limit them. In the future it may override, but the calculation is not easy to get right so I dont want it undo-ing other things yet. ', 'boolean', false, null, 'Combat');
    createSetting('AutoRoboTrimp', 'AutoRoboTrimp', 'Use RoboTrimps ability starting at this level, and every 5 levels thereafter. (set to 0 to disable. default 60.) 60 is a good choice for mostly everybody.', 'value', '60', null, 'Combat');

    //Line 2
    createSetting('fightforever', 'Fight Always', '-1 to disable. Sends trimps to fight if they\'re not fighting, regardless of BAF. Has 2 uses. Set to 0 to always send out trimps. Or set a number higher than 0 to enable the H:D function. If the H:D ratio is below this number it will send them out. I.e, this is set to 1, it will send out trimps regardless with the H:D ratio is below 1. ', 'value', '-1', null, 'Combat');
    createSetting('addpoison', 'Poison Calc', '<b>Experimental. </b><br>Adds poison to the battlecalc. May improve your poison zone speed. ', 'boolean', 'false', null, 'Combat');
    createSetting('45stacks', 'Antistack Calc', '<b>Experimental. </b><br>Always calcs your damage as having full antistacks. Useful for windstacking. ', 'boolean', 'false', null, 'Combat');



    //Scryer

    //Line 1
    createSetting('UseScryerStance', 'Enable Scryer Stance', '<b>MASTER BUTTON</b> Activates all other scrying settings, and overrides AutoStance when scryer conditions are met. Leave regular Autostance on while this is active. Scryer gives 2x Resources (Non-Helium/Nullifium) and a chance for Dark Essence. Once this is on, priority for Scryer decisions goes as such:<br>NEVER USE, FORCE USE, OVERKILL, MIN/MAX ZONE<br><br><b>NO OTHER BUTTONS WILL DO ANYTHING IF THIS IS OFF.</b>', 'boolean', true, null, 'Scryer');
    createSetting('ScryerUseWhenOverkill', 'Use When Overkill', 'Overrides everything! Toggles stance when we can Overkill in S, giving us double loot with no speed penalty (minimum one overkill, if you have more than 1, it will lose speed) <b>NOTE:</b> This being on, and being able to overkill in S will override ALL other settings <u>(Except never use in spire)</u>. This is a boolean logic shortcut that disregards all the other settings including Min and Max Zone. If you ONLY want to use S during Overkill, as a workaround: turn this on and Min zone: to 9999 and everything else off(red). ', 'boolean', true, null, 'Scryer');
    createSetting('ScryerMinZone', 'Min Zone', 'Minimum zone to start using scryer in.(inclusive) Recommend:(60 or 181). Overkill ignores this. This needs to be On & Valid for the <i>MAYBE</i> option on all other Scryer settings to do anything if Overkill is off. Tip: Use 9999 to disable all Non-Overkill, Non-Force, scryer usage.', 'value', '181', null, 'Scryer');
    createSetting('ScryerMaxZone', 'Max Zone', '<b>0 or -1 to disable (Recommended)</b><br>Overkill ignores this. Zone to STOP using scryer at (not inclusive). Turning this ON with a positive number stops <i>MAYBE</i> use of all other Scryer settings.', 'value', '230', null, 'Scryer');
    createSetting('onlyminmaxworld', 'World Min & Max Only', 'Forces Scryer to only work in world regardless of other settings. ', 'boolean', false, null, 'Scryer');
    createSetting('ScryerUseinMaps2', ['Maps: NEVER', 'Maps: FORCE', 'Maps: MAYBE'], '<b>NEVER</b> Means what it says!!!<br><b>FORCE</b> means Scryer will ALWAYS activate in Maps<br><b>MAYBE</b> means that Overkill and Min/Max use are allowed.<br>This setting requires use on Corrupteds to be on after corruption/magma.<br><br>Recommend MAYBE.', 'multitoggle', 2, null, 'Scryer');
    createSetting('ScryerUseinVoidMaps2', ['VoidMaps: NEVER', 'VoidMaps: FORCE', 'VoidMaps: MAYBE'], '<b>NEVER</b> Means what it says!!!<br><b>FORCE</b> means Scryer will ALWAYS activate in Void Maps<br><b>MAYBE</b> means that Overkill and Min/Max use are allowed. ', 'multitoggle', 0, null, 'Scryer');

    //Line 2
    createSetting('ScryerUseinPMaps', ['P Maps: NEVER', 'P Maps: FORCE', 'P Maps: MAYBE'], '<b>NEVER</b> Means what it says!!!<br><b>FORCE</b> means Scryer will ALWAYS activate in maps higher than your zone<br><b>MAYBE</b> means that Overkill and Min/Max use are allowed.<br>Recommend NEVER.', 'multitoggle', 0, null, 'Scryer');
    createSetting('ScryerUseinBW', ['BW: NEVER', 'BW: FORCE', 'BW: MAYBE'], '<b>NEVER</b> Means what it says!!!<br><b>FORCE</b> means Scryer will ALWAYS activate in BW Maps<br><b>MAYBE</b> means that Overkill and Min/Max use are allowed.<br>This setting requires use in Maps to be on. <br><br>Recommend NEVER.', 'multitoggle', 0, null, 'Scryer');
    createSetting('ScryerUseinSpire2', ['Spire: NEVER', 'Spire: FORCE', 'Spire: MAYBE'], '<b>NEVER</b> Means what it says!!!<br><b>FORCE</b> means Scryer will ALWAYS activate in the Spire<br><b>MAYBE</b> means that Overkill and Min/Max use are allowed.<br>This setting requires use on Corrupteds to be on for corrupted enemies.<br><br>Recommend NEVER.', 'multitoggle', 0, null, 'Scryer');
    createSetting('ScryerSkipBoss2', ['Boss: NEVER (All Levels)', 'Boss: NEVER (Above VoidLevel)', 'Boss: MAYBE'], '<b>NEVER (All Levels)</b> will NEVER use S in cell 100 of the world!!!<br><b>NEVER (Above VoidLevel)</b> will NEVER use S in cell 100 of the world ABOVE the zone that your void maps are set to run at (Maps).<br><b>MAYBE</b> treats the cell no differently to any other, Overkill and Min/Max Scryer is allowed.<br><br>Recommend NEVER (There is little benefit to double NON-HELIUM resources and a small chance of DE).', 'multitoggle', 0, null, 'Scryer');
    createSetting('ScryerSkipCorrupteds2', ['Corrupted: NEVER', 'Corrupted: FORCE', 'Corrupted: MAYBE'], '<b>NEVER</b> Means what it says!!!<br><b>FORCE</b> means Scryer will ALWAYS activate against Corrupted enemies<br><b>MAYBE</b> means that Overkill and Min/Max use are allowed.<br><b>Magma maps and Corrupted Voidmaps are currently classified as corrupted</b> and NEVER here will override Maps and Voidmaps use of Scryer<br><br>Recommend MAYBE.', 'multitoggle', 2, null, 'Scryer');
    createSetting('ScryerSkipHealthy', ['Healthy: NEVER', 'Healthy: FORCE', 'Healthy: MAYBE'], '<b>NEVER</b> Means what it says!!!<br><b>FORCE</b> means Scryer will ALWAYS activate against Healthy enemies<br><b>MAYBE</b> means that Overkill and Min/Max use are allowed.<br><b>Corrupted Voidmaps are currently classified as Healthy (same as corrupted)</b> and NEVER here will override Maps and Voidmaps use of Scryer<br><br>Recommend MAYBE.', 'multitoggle', 2, null, 'Scryer');
    createSetting('ScryUseinPoison', 'Scry in Poison', 'Decides what you do in Poison. <br><b>-1</b> = Maybe <br><b>0</b> = Never <br><b>Above 0</b> = Max Zone you want it scrying ', 'value', -1, null, 'Scryer');

    //Line 3
    createSetting('ScryUseinWind', 'Scry in Wind', 'Decides what you do in Wind. <br><b>-1</b> = Maybe <br><b>0</b> = Never <br><b>Above 0</b> = Max Zone you want it scrying', 'value', -1, null, 'Scryer');
    createSetting('ScryUseinIce', 'Scry in Ice', 'Decides what you do in Ice. <br><b>-1</b> = Maybe <br><b>0</b> = Never <br><b>Above 0</b> = Max Zone you want it scrying', 'value', -1, null, 'Scryer');
    createSetting('ScryerDieZ', 'Die To Use S', '<b>-1 to disable.</b><br>Turning this on will switch you back to S even when doing so would kill you. Happens in scenarios where you used Skip Corrupteds that took you into regular Autostance X/H stance, killed the corrupted and reached a non-corrupted enemy that you wish to use S on, but you havent bred yet and you are too low on health to just switch back to S. So you\'d rather die, wait to breed, then use S for the full non-corrupted enemy, to maximize DE. NOTE: Use at your own risk.<br>Use this input to set the minimum zone that scryer activates in (You can use decimal values to specify what cell this setting starts from)', 'value', 230.60, null, 'Scryer');
    createSetting('screwessence', 'Remaining Essence Only', 'Why scry when theres no essence? Turns off scrying when the remaining enemies with essence drops to 0. ', 'boolean', false, null, 'Scryer');


    //Magma

    createSetting('UseAutoGen', 'Auto Generator', 'Turn this on to use these settings. ', 'boolean', false, null, 'Magma');
    createSetting('beforegen', ['Gain Mi', 'Gain Fuel', 'Hybrid'], '<b>MODE BEFORE FUELING: </b>Which mode to use before fueling. This is the mode which the generator will use if you fuel after z230. ', 'multitoggle', 1, null, 'Magma');
    createSetting('fuellater', 'Start Fuel Z', 'Start fueling at this zone instead of 230. I would suggest you have a value lower than your max, for obvious reasons. Recommend starting at a value close-ish to your max supply. -1 to start at 230 and use your <b>BEFORE FUEL</b> setting. ', 'value', -1, null, 'Magma');
    createSetting('fuelend', 'End Fuel Z', 'End fueling at this zone. After this zone is reached, will follow your preference. -1 to fuel infinitely. ', 'value', -1, null, 'Magma');
    createSetting('defaultgen', ['Gain Mi', 'Gain Fuel', 'Hybrid'], '<b>MODE AFTER FUELING: </b>Which mode to use after fueling. ', 'multitoggle', 1, null, 'Magma');
    createSetting('AutoGenDC', ['Daily: Normal', 'Daily: Fuel', 'Daily: Hybrid'], '<b>Normal:</b> Uses the AutoGen settings. <br><b>Fuel:</b> Fuels the entire Daily. <br><b>Hybrid:</b> Uses Hybrid for the entire Daily. ', 'multitoggle', 1, null, 'Magma');
    createSetting('AutoGenC2', ['C2: Normal', 'C2: Fuel', 'C2: Hybrid'], '<b>Normal:</b> Uses the AutoGen settings. <br><b>Fuel:</b> Fuels the entire C2. <br><b>Hybrid:</b> Uses Hybrid for the entire C2. ', 'multitoggle', 1, null, 'Magma');

    //Line 2
    createSetting('spendmagmite', ['Spend Magmite OFF', 'Spend Magmite (Portal)', 'Spend Magmite Always'], 'Auto Spends any unspent Magmite immediately before portaling. (Or Always, if toggled). Part 1 buys any permanent one-and-done upgrades in order from most expensive to least. Part 2 then analyzes Efficiency vs Capacity for cost/benefit, and buys Efficiency if its BETTER than Capacity. If not, if the PRICE of Capacity is less than the price of Supply, it buys Capacity. If not, it buys Supply. And then it repeats itself until you run out of Magmite and cant buy anymore. ', 'multitoggle', 1, null, 'Magma');
    createSetting('SupplyWall', 'Throttle Supply (or Capacity)', 'Positive number NOT 1 e.g. 2.5: Consider Supply when its cost * 2.5 is < Capacity, instead of immediately when < Cap. Effectively throttles supply for when you don\'t need too many.<br><br>Negative number (-1 is ok) e.g. -2.5: Consider Supply if it costs < Capacity * 2.5, buy more supplys! Effectively throttling capacity instead.<br><br><b>Set to 1: DISABLE SUPPLY only spend magmite on Efficiency, Capacity and Overclocker. Always try to get supply close to your HZE. <br>Set to 0: IGNORE SETTING and use old behaviour (will still try to buy overclocker)</b>', 'valueNegative', 0.4, null, 'Magma');
    createSetting('spendmagmitesetting', ['Normal', 'Normal & No OC', 'OneTime Only', 'OneTime & OC'], '<b>Normal:</b> Spends Magmite Normally as Explained in Magmite spending behaviour. <br><b>Normal & No OC:</b> Same as normal, except skips OC afterbuying 1 OC upgrade. <br><b>OneTime Only:</b> Only Buys the One off upgrades except skips OC afterbuying 1 OC upgrade. <br><b>OneTime & OC:</b> Buys all One off upgrades, then buys OC only. ', 'multitoggle', 0, null, 'Magma');
    createSetting('MagmiteExplain', 'Magmite spending behaviour', '1. Buy one-and-done upgrades, expensive first, then consider 1st level of Overclocker;<br>2. Buy Overclocker IF AND ONLY IF we can afford it;<br>2.5. Exit if OneTimeOnly<br>3. Buy Efficiency if it is better than capacity;<br>4. Buy Capacity or Supply depending on which is cheaper, or based on SupplyWall', 'infoclick', 'MagmiteExplain', null, 'Magma');



    //Heirloom

    createSetting('AutoHeirloomsNew', ['Old AutoHeirlooms Off', 'Old AutoHeirlooms 1', 'Old AutoHeirlooms 2'], '<b>AH1: </b>Keeps any heirloom whether they are staffs or shields. This generally prefers shields over staffs.<br><b>AH2: </b>Keeps 5 slots for shields and 5 slots of staffs. Does not include protected heirlooms, as it will take up a spot, so you would only have 9 to work with. Looks like this: SH/ST/SH/ST/SH/ST/SH/ST/SH/ST<br>It will keep heirlooms on portal. ', 'multitoggle', 0, null, 'Heirlooms');
    createSetting('highdmg', 'HS: High Damage', '<b>HIGH DAMAGE HEIRLOOM</b><br><br>Enter the name of your high damage heirloom. This is your heirloom that you will use normally. ', 'textValue', 'undefined', null, 'Heirlooms');
    createSetting('lowdmg', 'HS: Low Damage', '<b>LOW DAMAGE HEIRLOOM</b><br><br>Enter the name of your low damage heirloom. This is the heirloom that you will use for windstacking. ', 'textValue', 'undefined', null, 'Heirlooms');

    //Heirloom Line
    document.getElementById('lowdmg').parentNode.insertAdjacentHTML('afterend', '<br>');
    createSetting('autoheirlooms', 'Auto Heirlooms', 'Auto Heirlooms master button. Turn this on to enable all Auto Heirloom settings. <br><br><b>The Modifier points will be explained here.</b> The more points an heirloom has, the better chance it has of being kept. If empty is selected, it will muliplty the score by 4. If any is selected, it will multiply the score of the heirloom by 2. <br><br>E.g Mod 1 = CC (+5 if dropped, 1st modifier) <br>Mod 2 = CD (+4 if dropped, 2nd modifier) <br>Mod 3 = PB (+3 if dropped, 3rd modifier) <br>Mod 4 = Empty (x4 if dropped, +0 if not) <br>Mod 5 = Empty (x4 if dropped, +0 if not) <br><br>If an heirloom dropped with these exact modifiers, it would get a score of 192 (5+4+3*4*4=192). The highest point heirlooms will be kept. ', 'boolean', false, null, 'Heirlooms');
    createSetting('typetokeep', ['None', 'Shields', 'Staffs', 'Both'], '<b>Shields: </b>Keeps Shields and nothing else.<br><b>Staffs: </b>Keeps Staffs and nothing else.<br><b>Both: </b>Keeps 5 Shields and 5 Staffs. If you have protected heirlooms in your inventory it will overrite one slot. E.g if one heirloom is protected, you will keep 5 Shields and 4 Staffs. ', 'multitoggle', 0, null, 'Heirlooms');
    createSetting('raretokeep', 'Rarity to Keep', 'Auto Heirlooms. Keeps the selected rarity of heirloom, recycles all others. ', 'dropdown', 'Any', ["Any", "Common", "Uncommon", "Rare", "Epic", "Legendary", "Magnificent", "Ethereal", "Magmatic", "Plagued"], 'Heirlooms');

    //Shield Line
    document.getElementById('raretokeep').parentNode.insertAdjacentHTML('afterend', '<br>');
    createSetting('keepshields', 'Shields', 'Auto Heirlooms. Enables in-depth shield settings. ', 'boolean', false, null, 'Heirlooms');
    createSetting('slot1modsh', 'Shield: Modifier 1', 'Auto Heirlooms. Keeps Shields with selected Mod. Modifier 1 is worth 5 points. ', 'dropdown', 'empty', ["empty", "playerEfficiency", "trainerEfficiency", "storageSize", "breedSpeed", "trimpHealth", "trimpAttack", "trimpBlock", "critDamage", "critChance", "voidMaps", "plaguebringer"], 'Heirlooms');
    createSetting('slot2modsh', 'Shield: Modifier 2', 'Auto Heirlooms. Keeps Shields with selected Mod. Modifier 2 is worth 4 points. ', 'dropdown', 'empty', ["empty", "playerEfficiency", "trainerEfficiency", "storageSize", "breedSpeed", "trimpHealth", "trimpAttack", "trimpBlock", "critDamage", "critChance", "voidMaps", "plaguebringer"], 'Heirlooms');
    createSetting('slot3modsh', 'Shield: Modifier 3', 'Auto Heirlooms. Keeps Shields with selected Mod. Modifier 3 is worth 3 points. ', 'dropdown', 'empty', ["empty", "playerEfficiency", "trainerEfficiency", "storageSize", "breedSpeed", "trimpHealth", "trimpAttack", "trimpBlock", "critDamage", "critChance", "voidMaps", "plaguebringer"], 'Heirlooms');
    createSetting('slot4modsh', 'Shield: Modifier 4', 'Auto Heirlooms. Keeps Shields with selected Mod. Modifier 4 is worth 2 points. ', 'dropdown', 'empty', ["empty", "playerEfficiency", "trainerEfficiency", "storageSize", "breedSpeed", "trimpHealth", "trimpAttack", "trimpBlock", "critDamage", "critChance", "voidMaps", "plaguebringer"], 'Heirlooms');
    createSetting('slot5modsh', 'Shield: Modifier 5', 'Auto Heirlooms. Keeps Shields with selected Mod. Modifier 5 is worth 1 points. ', 'dropdown', 'empty', ["empty", "playerEfficiency", "trainerEfficiency", "storageSize", "breedSpeed", "trimpHealth", "trimpAttack", "trimpBlock", "critDamage", "critChance", "voidMaps", "plaguebringer"], 'Heirlooms');

    //Staff Line
    document.getElementById('slot5modsh').parentNode.insertAdjacentHTML('afterend', '<br>');
    createSetting('keepstaffs', 'Staffs', 'Auto Heirlooms. Enables in-depth staff settings. ', 'boolean', false, null, 'Heirlooms');
    createSetting('slot1modst', 'Staff: Modifier 1', 'Auto Heirlooms. Keeps Staffs with selected Mod. Modifier 1 is worth 5 points. ', 'dropdown', 'empty', ["empty", "metalDrop", "foodDrop", "woodDrop", "gemsDrop", "fragmentsDrop", "minerSpeed", "FarmerSpeed", "LumberjackSpeed", "DragimpSpeed", "ExplorerSpeed", "ScientistSpeed", "FluffyExp"], 'Heirlooms');
    createSetting('slot2modst', 'Staff: Modifier 2', 'Auto Heirlooms. Keeps Staffs with selected Mod. Modifier 2 is worth 4 points. ', 'dropdown', 'empty', ["empty", "metalDrop", "foodDrop", "woodDrop", "gemsDrop", "fragmentsDrop", "minerSpeed", "FarmerSpeed", "LumberjackSpeed", "DragimpSpeed", "ExplorerSpeed", "ScientistSpeed", "FluffyExp"], 'Heirlooms');
    createSetting('slot3modst', 'Staff: Modifier 3', 'Auto Heirlooms. Keeps Staffs with selected Mod. Modifier 3 is worth 3 points. ', 'dropdown', 'empty', ["empty", "metalDrop", "foodDrop", "woodDrop", "gemsDrop", "fragmentsDrop", "minerSpeed", "FarmerSpeed", "LumberjackSpeed", "DragimpSpeed", "ExplorerSpeed", "ScientistSpeed", "FluffyExp"], 'Heirlooms');
    createSetting('slot4modst', 'Staff: Modifier 4', 'Auto Heirlooms. Keeps Staffs with selected Mod. Modifier 4 is worth 2 points. ', 'dropdown', 'empty', ["empty", "metalDrop", "foodDrop", "woodDrop", "gemsDrop", "fragmentsDrop", "minerSpeed", "FarmerSpeed", "LumberjackSpeed", "DragimpSpeed", "ExplorerSpeed", "ScientistSpeed", "FluffyExp"], 'Heirlooms');
    createSetting('slot5modst', 'Staff: Modifier 5', 'Auto Heirlooms. Keeps Staffs with selected Mod. Modifier 5 is worth 1 points. ', 'dropdown', 'empty', ["empty", "metalDrop", "foodDrop", "woodDrop", "gemsDrop", "fragmentsDrop", "minerSpeed", "FarmerSpeed", "LumberjackSpeed", "DragimpSpeed", "ExplorerSpeed", "ScientistSpeed", "FluffyExp"], 'Heirlooms');


    //Golden
    createSetting('AutoGoldenUpgrades', 'AutoGoldenUpgrades', 'Buys Golden Upgrades in Fillers. Helium buys all Helium golden upgrades. Battle buys all Battle golden upgrades. Void buys 8 Void golden upgrades (max number you can buy) then buys helium golden upgrades. Void + Battle buys 8 voids then battle. ', 'dropdown', 'Off', ["Off", "Helium", "Battle", "Void", "Void + Battle"], 'Golden');
    createSetting('dAutoGoldenUpgrades', 'Daily AutoGoldenUpgrades', 'Buys Golden Upgrades in Dailies. Helium buys all Helium golden upgrades. Battle buys all Battle golden upgrades. Void buys 8 Void golden upgrades (max number you can buy) then buys helium golden upgrades. Void + Battle buys 8 voids then battle. ', 'dropdown', 'Off', ["Off", "Helium", "Battle", "Void", "Void + Battle"], 'Golden');
    createSetting('cAutoGoldenUpgrades', 'C2 AutoGoldenUpgrades', 'Buys Golden Upgrades in C2s. Helium buys all Helium golden upgrades. Battle buys all Battle golden upgrades. Void buys 8 Void golden upgrades (max number you can buy) then buys helium golden upgrades. Void + Battle buys 8 voids then battle. ', 'dropdown', 'Off', ["Off", "Battle", "Void", "Void + Battle"], 'Golden');
    document.getElementById('cAutoGoldenUpgrades').parentNode.insertAdjacentHTML('afterend', '<br>');
    createSetting('voidheliumbattle', 'Void Battle', '<b>-1 to disable.</b><br> Buys Battle goldens instead of Helium at this zone and onwards. This option only appears when selecting void. ', 'value', -1, null, 'Golden');
    createSetting('dvoidheliumbattle', 'Daily Void Battle', '<b>-1 to disable.</b><br> Buys Battle goldens instead of Helium at this zone and onwards in Dailies. This option only appears when selecting void. ', 'value', -1, null, 'Golden');



    //Nature
    createSetting('AutoNatureTokens', 'Spend Nature Tokens', '<b>MASTER BUTTON</b> Automatically spend or convert nature tokens.', 'boolean', false, null, 'Nature');
    createSetting('AutoPoison', 'Poison', 'Spend/convert Poison tokens', 'dropdown', 'Off', ['Off', 'Empowerment', 'Transfer', 'Convert to Wind', 'Convert to Ice', 'Convert to Both'], 'Nature');
    createSetting('AutoWind', 'Wind', 'Spend/convert Wind tokens', 'dropdown', 'Off', ['Off', 'Empowerment', 'Transfer', 'Convert to Poison', 'Convert to Ice', 'Convert to Both'], 'Nature');
    createSetting('AutoIce', 'Ice', 'Spend/convert Ice tokens', 'dropdown', 'Off', ['Off', 'Empowerment', 'Transfer', 'Convert to Poison', 'Convert to Wind', 'Convert to Both'], 'Nature');
    createSetting('AutoEggs', 'AutoEggs', 'Click easter egg if it exists, upon entering a new zone. Warning: Quite overpowered. Please solemnly swear that you are up to no good.', 'boolean', false, null, 'Nature');



    //Display

    //Line 1
    createSetting('EnhanceGrids', 'Enhance Grids', 'Apply slight visual enhancements to world and map grids that highlights with drop shadow all the exotic, powerful, skeletimps and other special imps.', 'boolean', false, null, 'Display');
    createSetting('showbreedtimer', 'Enable Breed Timer', 'Enables the display of the hidden breedtimer. Turn this off to reduce memory. ', 'boolean', true, null, 'Display');
    createSetting('showautomapstatus', 'Enable AutoMap Status', 'Enables the display of the map status. Turn this off to reduce memory. ', 'boolean', true, null, 'Display');
    createSetting('EnableAFK', 'Go AFK Mode', '(Action Button). Go AFK uses a Black Screen, and suspends ALL the Trimps GUI visual update functions (updateLabels) to improve performance by not doing unnecessary stuff. This feature is primarily just a CPU and RAM saving mode. Everything will resume when you come back and press the Back button. Console debug output is also disabled. The blue color means this is not a settable setting, just a button. You can now also click the Zone # (World Info) area to go AFK now.', 'action', 'MODULES["performance"].EnableAFKMode()', null, 'Display');
    document.getElementById('battleSideTitle').setAttribute('onclick', 'MODULES["performance"].EnableAFKMode()');
    document.getElementById('battleSideTitle').setAttribute('onmouseover', "getZoneStats(event);this.style.cursor='pointer'");
    createSetting('ChangeLog', 'Show Changelog', '(Action Button). Shows the changelog popup message that AT loads on startup again, in case you missed it. The blue color means this is not a settable setting, just a button.', 'action', 'printChangelog()', null, 'Display');
    document.getElementById('Display').lastChild.insertAdjacentHTML('afterend', '<br>');



    //SPAM

    //Line 1
    createSetting('SpamGeneral', 'General Spam', 'General Spam = Notification Messages, Auto He/Hr', 'boolean', true, null, 'Display');
    createSetting('SpamUpgrades', 'Upgrades Spam', 'Upgrades Spam', 'boolean', true, null, 'Display');
    createSetting('SpamEquipment', 'Equipment Spam', 'Equipment Spam', 'boolean', true, null, 'Display');
    createSetting('SpamMaps', 'Maps Spam', 'Maps Spam = Buy,Pick,Run Maps,Recycle,CantAfford', 'boolean', true, null, 'Display');
    createSetting('SpamOther', 'Other Spam', 'Other Spam = mostly Better Auto Fight (disable with: MODULES[\\"fight\\"].enableDebug=false ), Trimpicide & AutoBreed/Gene Timer changes, AnalyticsID, etc - a catch all. ', 'boolean', true, null, 'Display');
    createSetting('SpamBuilding', 'Building Spam', 'Building Spam = all buildings, even storage', 'boolean', false, null, 'Display');
    createSetting('SpamJobs', 'Job Spam', 'Job Spam = All jobs, in scientific notation', 'boolean', false, null, 'Display');

    //Line 2
    createSetting('SpamGraphs', 'Starting Zone Spam', 'Disables \'Starting new Zone ###\' , RoboTrimp MagnetoShreik, and any future Graph Spam that comes from graph logs.', 'boolean', true, null, 'Display');
    createSetting('SpamMagmite', 'Magmite/Magma Spam', 'Everything in Magmite Module and Buy Magmamancers', 'boolean', true, null, 'Display');
    createSetting('SpamPerks', 'AutoPerks Spam', 'Everything in related to AutoPerks', 'boolean', true, null, 'Display');
    createSetting('SpamNature', 'Nature Spam', 'Everything in related to Nature', 'boolean', true, null, 'Display');



    //Export/Import/Default
    createSetting('ImportAutoTrimps', 'Import AutoTrimps', 'Import your AutoTrimps Settings. Asks you to name it as a profile afterwards.', 'infoclick', 'ImportAutoTrimps', null, 'Import Export');
    createSetting('ExportAutoTrimps', 'Export AutoTrimps', 'Export your AutoTrimps Settings as a output string text formatted in JSON.', 'infoclick', 'ExportAutoTrimps', null, 'Import Export');
    createSetting('DefaultAutoTrimps', 'Reset to Default', 'Reset everything to the way it was when you first installed the script. ', 'infoclick', 'ResetDefaultSettingsProfiles', null, 'Import Export');
    createSetting('Export60', '-60 AT Settings', 'Gives you an AT settings String that you can use to import. Use if you are less than z60. ', 'infoclick', 'Export60', null, 'Import Export');
    createSetting('Export550', '550+ AT Settings', 'Gives you an AT settings String that you can use to import. Use if you are z550+ ', 'infoclick', 'Export550', null, 'Import Export');
    createSetting('CleanupAutoTrimps', 'Cleanup Saved Settings ', 'Deletes old values from previous versions of the script from your AutoTrimps Settings file.', 'infoclick', 'CleanupAutoTrimps', null, 'Import Export');
    settingsProfileMakeGUI();
}

initializeAllSettings();

function createSetting(id, name, description, type, defaultValue, list, container) {
    var btnParent = document.createElement("DIV");
    btnParent.setAttribute('style', 'display: inline-block; vertical-align: top; margin-left: 1vw; margin-bottom: 1vw; width: 13.142vw;');
    var btn = document.createElement("DIV");
    btn.id = id;
    var loaded = autoTrimpSettings[id];
    if (type == 'boolean') {
        if (!(loaded && id == loaded.id && loaded.type === type))
            autoTrimpSettings[id] = {
                id: id,
                name: name,
                description: description,
                type: type,
                enabled: loaded === undefined ? (defaultValue || false) : loaded
            };
        btn.setAttribute("style", "font-size: 1.1vw;");
        btn.setAttribute('class', 'noselect settingsBtn settingBtn' + autoTrimpSettings[id].enabled);
        btn.setAttribute("onclick", 'settingChanged("' + id + '")');
        btn.setAttribute("onmouseover", 'tooltip(\"' + name + '\", \"customText\", event, \"' + description + '\")');
        btn.setAttribute("onmouseout", 'tooltip("hide")');
        btn.textContent = name;
        btnParent.appendChild(btn);
        if (container) document.getElementById(container).appendChild(btnParent);
        else document.getElementById("autoSettings").appendChild(btnParent);
    } else if (type == 'value' || type == 'valueNegative') {
        if (!(loaded && id == loaded.id && loaded.type === type))
            autoTrimpSettings[id] = {
                id: id,
                name: name,
                description: description,
                type: type,
                value: loaded === undefined ? defaultValue : loaded
            };
        btn.setAttribute("style", "font-size: 1.1vw;");
        btn.setAttribute('class', 'noselect settingsBtn btn-info');
        btn.setAttribute("onclick", `autoSetValueToolTip("${id}", "${name}", ${type == 'valueNegative'}, ${type == 'multiValue'})`);
        btn.setAttribute("onmouseover", 'tooltip(\"' + name + '\", \"customText\", event, \"' + description + '\")');
        btn.setAttribute("onmouseout", 'tooltip("hide")');
        btn.textContent = name;
        btnParent.appendChild(btn);
        if (container) document.getElementById(container).appendChild(btnParent);
        else document.getElementById("autoSettings").appendChild(btnParent);
    } else if (type == 'multiValue' || type == 'valueNegative') {
        if (!(loaded && id == loaded.id && loaded.type === type))
            autoTrimpSettings[id] = {
                id: id,
                name: name,
                description: description,
                type: type,
                value: loaded === undefined ? defaultValue : loaded
            };
        btn.setAttribute("style", "font-size: 1.1vw;");
        btn.setAttribute('class', 'noselect settingsBtn btn-info');
        btn.setAttribute("onclick", `autoSetValueToolTip("${id}", "${name}", ${type == 'valueNegative'}, ${type == 'multiValue'})`);
        btn.setAttribute("onmouseover", 'tooltip(\"' + name + '\", \"customText\", event, \"' + description + '\")');
        btn.setAttribute("onmouseout", 'tooltip("hide")');
        btn.textContent = name;
        btnParent.appendChild(btn);
        if (container) document.getElementById(container).appendChild(btnParent);
        else document.getElementById("autoSettings").appendChild(btnParent);
    } else if (type == 'textValue') {
        if (!(loaded && id == loaded.id && loaded.type === type))
            autoTrimpSettings[id] = {
                id: id,
                name: name,
                description: description,
                type: type,
                value: loaded === undefined ? defaultValue : loaded
            };
        btn.setAttribute("style", "font-size: 1.1vw;");
        btn.setAttribute('class', 'noselect settingsBtn btn-info');
        btn.setAttribute("onclick", `autoSetTextToolTip("${id}", "${name}", ${type == 'textValue'})`);
        btn.setAttribute("onmouseover", 'tooltip(\"' + name + '\", \"customText\", event, \"' + description + '\")');
        btn.setAttribute("onmouseout", 'tooltip("hide")');
        btn.textContent = name;
        btnParent.appendChild(btn);
        if (container) document.getElementById(container).appendChild(btnParent);
        else document.getElementById("autoSettings").appendChild(btnParent);
    } else if (type == 'dropdown') {
        if (!(loaded && id == loaded.id && loaded.type === type))
            autoTrimpSettings[id] = {
                id: id,
                name: name,
                description: description,
                type: type,
                selected: loaded === undefined ? defaultValue : loaded,
                list: list
            };
        var btn = document.createElement("select");
        btn.id = id;
        if (game.options.menu.darkTheme.enabled == 2) btn.setAttribute("style", "color: #C8C8C8; font-size: 1.0vw;");
        else btn.setAttribute("style", "color:black; font-size: 1.0vw;");
        btn.setAttribute("class", "noselect");
        btn.setAttribute("onmouseover", 'tooltip(\"' + name + '\", \"customText\", event, \"' + description + '\")');
        btn.setAttribute("onmouseout", 'tooltip("hide")');
        btn.setAttribute("onchange", 'settingChanged("' + id + '")');
         for (var item in list) {
            var option = document.createElement("option");
            option.value = list[item];
            option.text = list[item];
            btn.appendChild(option);
        }
        btn.value = autoTrimpSettings[id].selected;
         var dropdownLabel = document.createElement("Label");
        dropdownLabel.id = id + "Label";
        dropdownLabel.innerHTML = name + ":";
        dropdownLabel.setAttribute('style', 'margin-right: 0.3vw; font-size: 0.8vw;');
        btnParent.appendChild(dropdownLabel);
        btnParent.appendChild(btn);
        if (container) document.getElementById(container).appendChild(btnParent);
        else document.getElementById("autoSettings").appendChild(btnParent);
    } else if (type == 'infoclick') {
        btn.setAttribute('class', 'btn btn-info');
        btn.setAttribute("onclick", 'ImportExportTooltip(\'' + defaultValue + '\', \'update\')');
        btn.setAttribute("onmouseover", 'tooltip(\"' + name + '\", \"customText\", event, \"' + description + '\")');
        btn.setAttribute("onmouseout", 'tooltip("hide")');
        btn.setAttribute("style", "display: block; font-size: 0.8vw;");
        btn.textContent = name;
        btnParent.style.width = '';
        btnParent.appendChild(btn);
        if (container) document.getElementById(container).appendChild(btnParent);
        else document.getElementById("autoSettings").appendChild(btnParent);
        return;
    } else if (type == 'multitoggle') {
        if (!(loaded && id == loaded.id && loaded.type === type))
            autoTrimpSettings[id] = {
                id: id,
                name: name,
                description: description,
                type: type,
                value: loaded === undefined ? defaultValue || 0 : loaded
            };
        btn.setAttribute("style", "font-size: 1.1vw;");
        btn.setAttribute('class', 'noselect settingsBtn settingBtn' + autoTrimpSettings[id].value);
        btn.setAttribute("onclick", 'settingChanged("' + id + '")');
        btn.setAttribute("onmouseover", 'tooltip(\"' + name.join(' / ') + '\", \"customText\", event, \"' + description + '\")');
        btn.setAttribute("onmouseout", 'tooltip("hide")');
        btn.textContent = autoTrimpSettings[id]["name"][autoTrimpSettings[id]["value"]];
        btnParent.appendChild(btn);
        if (container) document.getElementById(container).appendChild(btnParent);
        else document.getElementById("autoSettings").appendChild(btnParent);
    }
    else if(type === 'action')
    {
        btn.setAttribute("style", "font-size: 1.1vw;");
        btn.setAttribute('class', 'noselect settingsBtn settingBtn3');
        btn.setAttribute('onclick', defaultValue);
        btn.setAttribute("onmouseover", 'tooltip(\"' + name + '\", \"customText\", event, \"' + description + '\")');
        btn.setAttribute("onmouseout", 'tooltip("hide")');
        btn.textContent = name;
        btnParent.appendChild(btn);
        if (container) document.getElementById(container).appendChild(btnParent);
        else document.getElementById("autoSettings").appendChild(btnParent);
        return;
    }
    if (autoTrimpSettings[id].name != name)
        autoTrimpSettings[id].name = name;
    if (autoTrimpSettings[id].description != description)
        autoTrimpSettings[id].description = description;
    autoTrimpSettings["ATversion"] = ATversion;
}

function createInput(id, name, description) {
    var $btnParent = document.createElement("DIV");
    $btnParent.setAttribute('style', 'display: inline-block; vertical-align: top; margin-left: 0.5vw; margin-bottom: 0.5vw; width: 6.5vw;');
    $btnParent.setAttribute("onmouseover", 'tooltip(\"' + name + '\", \"customText\", event, \"' + description + '\")');
    $btnParent.setAttribute("onmouseout", 'tooltip("hide")');
    var $input = document.createElement("input");
    $input.type = 'checkbox';
    $input.setAttribute('id', id);
    $input.setAttribute('style', 'text-align: left; width: 0.8vw; ');
    $btnParent.appendChild($input);
    var $label = document.createElement("label");
    $label.setAttribute('style', 'text-align: left; margin-left: 0.2vw; font-size: 0.6vw');
    $label.innerHTML = name;
    $btnParent.appendChild($label);
    document.getElementById("autoSettings").appendChild($btnParent);
}

function settingChanged(id) {
    var btn = autoTrimpSettings[id];
    if (btn.type == 'boolean') {
        btn.enabled = !btn.enabled;
        document.getElementById(id).setAttribute('class', 'noselect settingsBtn settingBtn' + btn.enabled);
    }
    if (btn.type == 'multitoggle') {
        if (id == 'AutoMagmiteSpender2' && btn.value == 1) {
            magmiteSpenderChanged = true;
            setTimeout(function() {
                magmiteSpenderChanged = false;
            }, 5000);
        }
        btn.value++;
        if (btn.value > btn.name.length - 1)
            btn.value = 0;
        document.getElementById(id).setAttribute('class', 'noselect settingsBtn settingBtn' + btn.value);
        document.getElementById(id).textContent = btn.name[btn.value];
    }
    if (btn.type == 'dropdown') {
        btn.selected = document.getElementById(id).value;
        if (id == "Prestige")
            autoTrimpSettings["PrestigeBackup"].selected = document.getElementById(id).value;
    }
    updateCustomButtons();
    saveSettings();
    checkPortalSettings();
}

function autoSetValueToolTip(id, text,negative, multi) {
    ranstring = text;
    var elem = document.getElementById("tooltipDiv");
    var tooltipText = 'Type a number below. You can also use shorthand such as 2e5 or 200k.';
    if (negative)
        tooltipText += ' Accepts negative numbers as validated inputs.';
    else
        tooltipText += ' Put -1 for Infinite.';
    tooltipText += `<br/><br/><input id="customNumberBox" style="width: 50%" onkeypress="onKeyPressSetting(event, '${id}', ${negative}, ${multi})" value="${autoTrimpSettings[id].value}"></input>`;
    var costText = '<div class="maxCenter"><div class="btn btn-info" onclick="autoSetValue(\'' + id + '\','+negative+','+multi+')">Apply</div><div class="btn btn-info" onclick="cancelTooltip()">Cancel</div></div>';
    game.global.lockTooltip = true;
    elem.style.left = '32.5%';
    elem.style.top = '25%';
    document.getElementById('tipTitle').textContent = ranstring + ':  Value Input';
    document.getElementById('tipText').innerHTML = tooltipText;
    document.getElementById('tipCost').innerHTML = costText;
    elem.style.display = 'block';
    var box = document.getElementById('customNumberBox');
    try {
        box.setSelectionRange(0, box.value.length);
    } catch (e) {
        box.select();
    }
    box.focus();
}

function autoSetTextToolTip(id,text) {
    ranstring = text;
    var elem = document.getElementById("tooltipDiv");
    var tooltipText = 'Type your input below';
    tooltipText += `<br/><br/><input id="customTextBox" style="width: 50%" onkeypress="onKeyPressSetting(event, '${id}')" value="${autoTrimpSettings[id].value}"></input>`;
    var costText = '<div class="maxCenter"><div class="btn btn-info" onclick="autoSetText(\'' + id + '\')">Apply</div><div class="btn btn-info" onclick="cancelTooltip()">Cancel</div></div>';
    game.global.lockTooltip = true;
    elem.style.left = '32.5%';
    elem.style.top = '25%';
    document.getElementById('tipTitle').textContent = ranstring + ':  Value Input';
    document.getElementById('tipText').innerHTML = tooltipText;
    document.getElementById('tipCost').innerHTML = costText;
    elem.style.display = 'block';
    var box = document.getElementById('customTextBox');
    box.focus();
}

function onKeyPressSetting(event, id,negative, multi) {
    if (event.which == 13 || event.keyCode == 13) {
        autoSetValue(id,negative, multi);
    }
}
 function parseNum(num) {
    if (num.split('e')[1]) {
        num = num.split('e');
        num = Math.floor(parseFloat(num[0]) * (Math.pow(10, parseInt(num[1]))));
    } else {
        var letters = num.replace(/[^a-z]/gi, '');
        var base = 0;
        if (letters.length) {
            var suffices = ['K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud', 'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Od', 'Nd', 'V', 'Uv', 'Dv', 'Tv', 'Qav', 'Qiv', 'Sxv', 'Spv', 'Ov', 'Nv', 'Tt'];
            for (var x = 0; x < suffices.length; x++) {
                if (suffices[x].toLowerCase() == letters) {
                    base = x + 1;
                    break;
                }
            }
            if (base) num = Math.round(parseFloat(num.split(letters)[0]) * Math.pow(1000, base));
        }
        if (!base) num = parseFloat(num);
    }
    return num;
 }

function autoSetValue(id,negative, multi) {
    var num = 0;
    unlockTooltip();
    tooltip('hide');
    var numBox = document.getElementById('customNumberBox');
    if (numBox) {
        num = numBox.value.toLowerCase();
        if (multi) {
            num = num.split(',').map(parseNum);
        } else {
            num = parseNum(num);
        }
    } else return;
    autoTrimpSettings[id].value = num;
    if (Array.isArray(num)) {
        document.getElementById(id).textContent = ranstring + ': ' + num.map(prettify).join(',');
    }
    else if (num > -1 || negative)
        document.getElementById(id).textContent = ranstring + ': ' + prettify(num);
    else
        document.getElementById(id).innerHTML = ranstring + ': ' + "<span class='icomoon icon-infinity'></span>";
    saveSettings();
    checkPortalSettings();
}

function autoSetText(id) {
    var textVal = 'empty';
    unlockTooltip();
    tooltip('hide');
    var textBox = document.getElementById('customTextBox');
    if (textBox) {
        textVal = textBox.value
    } else return;
    autoTrimpSettings[id].value = textVal;
    if (textVal != undefined) {
        document.getElementById(id).textContent = ranstring + ': ' + textVal;
    }
    saveSettings();
    checkPortalSettings();
}

function autoToggle(what) {
    if (what) {
        var $what = document.getElementById(what);
        if ($what.style.display === 'block') {
            $what.style.display = 'none';
            document.getElementById(what + 'BTN').style.border = '';
        } else {
            $what.style.display = 'block';
            document.getElementById(what + 'BTN').style.border = '4px solid green';
        }
    } else {
        if (game.options.displayed)
            toggleSettingsMenu();
        var $item = document.getElementById('graphParent');
        if ($item.style.display === 'block')
            $item.style.display = 'none';
        var $item = document.getElementById('autoTrimpsTabBarMenu');
        if ($item.style.display === 'block')
            $item.style.display = 'none';
        else $item.style.display = 'block';
        var $item = document.getElementById('autoSettings');
        if ($item.style.display === 'block')
            $item.style.display = 'none';
        else $item.style.display = 'block';
    }
}

function autoPlusSettingsMenu() {
    var $item = document.getElementById('autoSettings');
    if ($item.style.display === 'block')
        $item.style.display = 'none';
    var $item = document.getElementById('graphParent');
    if ($item.style.display === 'block')
        $item.style.display = 'none';
    var $item = document.getElementById('autoTrimpsTabBarMenu');
    if ($item.style.display === 'block')
        $item.style.display = 'none';
    toggleSettingsMenu();
}

function updateCustomButtons() {
    if (lastTheme && game.options.menu.darkTheme.enabled != lastTheme) {
    if (typeof MODULES["graphs"] !== 'undefined')
        MODULES["graphs"].themeChanged();
        debug("Theme change - AutoTrimps styles updated.");
    }
    lastTheme = game.options.menu.darkTheme.enabled;
    function toggleElem(elem, showHide) {
        var $item = document.getElementById(elem);
        if ($item == null) return;
        var state = showHide ? '' : 'none';
        var stateParent = showHide ? 'inline-block' : 'none';
        $item.style.display = state;
        $item.parentNode.style.display = stateParent;
    }
    function turnOff(elem) {
        toggleElem(elem, false);
    }
    function turnOn(elem) {
        toggleElem(elem, true);
    }

    //Hide settings

    //Portal
    document.getElementById("autoMapBtn").setAttribute("class", "noselect settingsBtn settingBtn" + autoTrimpSettings.AutoMaps.value);
    (game.challenges.Balance.filter()) ? turnOn("AutoPortal") : turnOff("AutoPortal");
    (autoTrimpSettings.AutoPortal.selected == "Custom") ? turnOn("CustomAutoPortal") : turnOff("CustomAutoPortal");
    var heHr = (autoTrimpSettings.AutoPortal.selected == "Helium Per Hour");
    (heHr || autoTrimpSettings.AutoPortal.selected == "Custom") ? turnOn("HeliumHourChallenge") : turnOff("HeliumHourChallenge");
    (heHr) ? turnOn("HeHrDontPortalBefore") : turnOff("HeHrDontPortalBefore");
    (heHr) ? turnOn("HeliumHrBuffer") : turnOff("HeliumHrBuffer");
    getPageSetting('AutoPortalDaily')==2 ? turnOn("dCustomAutoPortal") : turnOff("dCustomAutoPortal");
    getPageSetting('AutoPortalDaily')==1 ? turnOn("dHeHrDontPortalBefore") : turnOff("dHeHrDontPortalBefore");
    getPageSetting('AutoPortalDaily')==1 ? turnOn("dHeliumHrBuffer") : turnOff("dHeliumHrBuffer");
    getPageSetting('AutoPortalDaily')>0 ? turnOn("dHeliumHourChallenge") : turnOff("dHeliumHourChallenge");

    //Memory
    if (getPageSetting('showbreedtimer')==false) turnOff("hiddenBreedTimer");
    if (getPageSetting('showautomapstatus')==false) turnOff("autoMapStatus");

    //Buildings
    var fuckbuilding = (game.talents.autoStructure.purchased && game.talents.deciBuild.purchased && getPageSetting('hidebuildings')==true && getPageSetting('BuyBuildingsNew')==0);
    (game.talents.autoStructure.purchased && game.talents.deciBuild.purchased) ? turnOn("hidebuildings") : turnOff("hidebuildings");
    (!fuckbuilding) ? turnOn("MaxHut") : turnOff("MaxHut");
    (!fuckbuilding) ? turnOn("MaxHouse") : turnOff("MaxHouse");
    (!fuckbuilding) ? turnOn("MaxMansion") : turnOff("MaxMansion");
    (!fuckbuilding) ? turnOn("MaxHotel") : turnOff("MaxHotel");
    (!fuckbuilding) ? turnOn("MaxResort") : turnOff("MaxResort");
    (!fuckbuilding) ? turnOn("MaxGateway") : turnOff("MaxGateway");
    (!fuckbuilding) ? turnOn("MaxWormhole") : turnOff("MaxWormhole");
    (!fuckbuilding) ? turnOn("MaxCollector") : turnOff("MaxCollector");
    (!fuckbuilding) ? turnOn("MaxTribute") : turnOff("MaxTribute");
    (!fuckbuilding) ? turnOn("MaxNursery") : turnOff("MaxNursery");
    (!fuckbuilding) ? turnOn("NoNurseriesUntil") : turnOff("NoNurseriesUntil");
    (!fuckbuilding) ? turnOn("WarpstationCap") : turnOff("WarpstationCap");
    (!fuckbuilding) ? turnOn("WarpstationCoordBuy") : turnOff("WarpstationCoordBuy");
    (!fuckbuilding) ? turnOn("FirstGigastation") : turnOff("FirstGigastation");
    (!fuckbuilding) ? turnOn("DeltaGigastation") : turnOff("DeltaGigastation");
    (!fuckbuilding) ? turnOn("WarpstationWall3") : turnOff("WarpstationWall3");

    //Jobs
    var fuckjobbies = (game.talents.autoJobs.purchased && getPageSetting('fuckjobs')==true && getPageSetting('BuyJobsNew')==0);
    (game.talents.autoJobs.purchased) ? turnOn("fuckjobs") : turnOff("fuckjobs");
    (!fuckjobbies) ? turnOn("FarmerRatio") : turnOff("FarmerRatio");
    (!fuckjobbies) ? turnOn("LumberjackRatio") : turnOff("LumberjackRatio");
    (!fuckjobbies) ? turnOn("MinerRatio") : turnOff("MinerRatio");
    (!fuckjobbies) ? turnOn("MaxScientists") : turnOff("MaxScientists");
    (!fuckjobbies) ? turnOn("MaxExplorers") : turnOff("MaxExplorers");
    (!fuckjobbies) ? turnOn("MaxTrainers") : turnOff("MaxTrainers");

    //AutoStance
    getPageSetting('AutoStance')!=3 ? turnOn("IgnoreCrits") : turnOff("IgnoreCrits");

    //Windstack
    var wson = (getPageSetting('AutoStance')==3);
    (wson) ? turnOff("turnwson"): turnOn("turnwson");
    (wson) ? turnOn("windhealthy"): turnOff("windhealthy");
    (wson) ? turnOn("usebstance"): turnOff("usebstance");
    (wson) ? turnOn("WindStackingMin"): turnOff("WindStackingMin");
    (wson) ? turnOn("WindStackingMinHD"): turnOff("WindStackingMinHD");
    (wson) ? turnOn("WindStackingMax"): turnOff("WindStackingMax");
    (wson) ? turnOn("windcutoff"): turnOff("windcutoff");
    (wson) ? turnOn("windcutoffmap"): turnOff("windcutoffmap");
    (wson) ? turnOn("wsmax"): turnOff("wsmax");
    (wson) ? turnOn("wsmaxhd"): turnOff("wsmaxhd");

    //Core
    getPageSetting('AutoAllocatePerks')==2 ? turnOn("lootdumpa"): turnOff("lootdumpa");
    (getPageSetting('ManualGather2')==2 && game.talents.foreman.purchased) ? turnOn("gathermetal"): turnOff("gathermetal");
    getPageSetting('AutoAllocatePerks')==2 ? turnOn("lootdumpz"): turnOff("lootdumpz");
    getPageSetting('amalcoord')==true ? turnOn("amalcoordt"): turnOff("amalcoordt");
    getPageSetting('amalcoord')==true ? turnOn("amalcoordhd"): turnOff("amalcoordhd");
    getPageSetting('amalcoord')==true ? turnOn("amalcoordz"): turnOff("amalcoordz");
    getPageSetting('AutoAllocatePerks')==1 ? turnOn("fastallocate"): turnOff("fastallocate");

    //Raid
    getPageSetting('Praidingzone') != -1 ? turnOn('PraidHarder') : turnOff('PraidHarder');
    getPageSetting('PraidHarder') ? turnOn('PraidFarmFragsZ') : turnOff('PraidFarmFragsZ');
    getPageSetting('PraidHarder') ? turnOn('PraidBeforeFarmZ') : turnOff('PraidBeforeFarmZ');
    getPageSetting('PraidHarder') ? turnOn('MaxPraidZone') : turnOff('MaxPraidZone');
    getPageSetting('BWraid')==true ? turnOn("BWraidingz"): turnOff("BWraidingz");
    getPageSetting('BWraid')==true ? turnOn("BWraidingmax"): turnOff("BWraidingmax");

    //Daily
    //DRaid
    getPageSetting('dPraidingzone') != -1 ? turnOn('dPraidHarder') : turnOff('dPraidHarder');
    getPageSetting('dPraidHarder') ? turnOn('dPraidFarmFragsZ') : turnOff('dPraidFarmFragsZ');
    getPageSetting('dPraidHarder') ? turnOn('dPraidBeforeFarmZ') : turnOff('dPraidBeforeFarmZ');
    getPageSetting('dPraidHarder') ? turnOn('dMaxPraidZone') : turnOff('dMaxPraidZone');
    getPageSetting('Dailybwraid')==true ? turnOn("dBWraidingz"): turnOff("dBWraidingz");
    getPageSetting('Dailybwraid')==true ? turnOn("dBWraidingmax"): turnOff("dBWraidingmax");
    //DWind
    getPageSetting('use3daily')==true ? turnOn("dwindhealthy"): turnOff("dwindhealthy");
    getPageSetting('use3daily')==true ? turnOn("dusebstance"): turnOff("dusebstance");
    getPageSetting('use3daily')==true ? turnOn("dWindStackingMin"): turnOff("dWindStackingMin");
    getPageSetting('use3daily')==true ? turnOn("dWindStackingMinHD"): turnOff("dWindStackingMinHD");
    getPageSetting('use3daily')==true ? turnOn("dWindStackingMax"): turnOff("dWindStackingMax");
    getPageSetting('use3daily')==true ? turnOn("dwindcutoff"): turnOff("dwindcutoff");
    getPageSetting('use3daily')==true ? turnOn("dwindcutoffmap"): turnOff("dwindcutoffmap");
    getPageSetting('use3daily')==true ? turnOn("dwsmax"): turnOff("dwsmax");
    getPageSetting('use3daily')==true ? turnOn("dwsmaxhd"): turnOff("dwsmaxhd");
    //DLoom
    getPageSetting('dloomswap') > 0 ? turnOn('dloomswaphd') : turnOff('dloomswaphd');

    //C2
    getPageSetting('c2runnerstart') == true ? turnOn("c2runnerportal"): turnOff("c2runnerportal");
    getPageSetting('c2runnerstart') == true ? turnOn("c2runnerpercent"): turnOff("c2runnerpercent");

    //ATGA
    getPageSetting('ATGA2') == true ? turnOn("ATGA2timer"): turnOff("ATGA2timer");
    getPageSetting('ATGA2') == true ? turnOn("ATGA2gen"): turnOff("ATGA2gen");
    var ATGAon = (getPageSetting('ATGA2') == true && getPageSetting('ATGA2timer') > 0);
    (ATGAon) ? turnOn("zATGA2timer") : turnOff("zATGA2timer");
    (ATGAon && getPageSetting('zATGA2timer') > 0) ? turnOn("ztATGA2timer") : turnOff("ztATGA2timer");
    (ATGAon) ? turnOn("ATGA2timerz") : turnOff("ATGA2timerz");
    (ATGAon && getPageSetting('ATGA2timerz') > 0) ? turnOn("ATGA2timerzt") : turnOff("ATGA2timerzt");
    (ATGAon) ? turnOn("sATGA2timer") : turnOff("sATGA2timer");
    (ATGAon) ? turnOn("dsATGA2timer") : turnOff("dsATGA2timer");
    (ATGAon) ? turnOn("dATGA2timer") : turnOff("dATGA2timer");
    (ATGAon) ? turnOn("dhATGA2timer") : turnOff("dhATGA2timer");
    (ATGAon) ? turnOn("cATGA2timer") : turnOff("cATGA2timer");
    (ATGAon) ? turnOn("chATGA2timer") : turnOff("chATGA2timer");
    (ATGAon) ? turnOn("dATGA2Auto") : turnOff("dATGA2Auto");

    //Display
    (game.worldUnlocks.easterEgg.locked == false) ? turnOn('AutoEggs') : turnOff('AutoEggs');

    //Heirlooms
    getPageSetting('loomswap') > 0 ? turnOn('loomswaphd') : turnOff('loomswaphd');

    var autoheirloomenable = (getPageSetting('autoheirlooms')==true);
    var keepshieldenable = (autoheirloomenable && getPageSetting('keepshields')==true);
    var keepstaffenable = (autoheirloomenable && getPageSetting('keepstaffs')==true);

    (autoheirloomenable) ? turnOn('typetokeep') : turnOff('typetokeep');
    (autoheirloomenable) ? turnOn('raretokeep') : turnOff('raretokeep');
    (autoheirloomenable) ? turnOn('keepshields') : turnOff('keepshields');
    (autoheirloomenable) ? turnOn('keepstaffs') : turnOff('keepstaffs');

    (keepshieldenable) ? turnOn('slot1modsh') : turnOff('slot1modsh');
    (keepshieldenable) ? turnOn('slot2modsh') : turnOff('slot2modsh');
    (keepshieldenable) ? turnOn('slot3modsh') : turnOff('slot3modsh');
    (keepshieldenable) ? turnOn('slot4modsh') : turnOff('slot4modsh');
    (keepshieldenable) ? turnOn('slot5modsh') : turnOff('slot5modsh');

    (keepstaffenable) ? turnOn('slot1modst') : turnOff('slot1modst');
    (keepstaffenable) ? turnOn('slot2modst') : turnOff('slot2modst');
    (keepstaffenable) ? turnOn('slot3modst') : turnOff('slot3modst');
    (keepstaffenable) ? turnOn('slot4modst') : turnOff('slot4modst');
    (keepstaffenable) ? turnOn('slot5modst') : turnOff('slot5modst');

    //Golden
    getPageSetting('AutoGoldenUpgrades') == "Void" ? turnOn('voidheliumbattle') : turnOff('voidheliumbattle');
    getPageSetting('dAutoGoldenUpgrades') == "Void" ? turnOn('dvoidheliumbattle') : turnOff('dvoidheliumbattle');

    //Dropdowns
    document.getElementById('AutoPortal').value = autoTrimpSettings.AutoPortal.selected;
    document.getElementById('HeliumHourChallenge').value = autoTrimpSettings.HeliumHourChallenge.selected;
    document.getElementById('dHeliumHourChallenge').value = autoTrimpSettings.dHeliumHourChallenge.selected;
    document.getElementById('AutoGoldenUpgrades').value = autoTrimpSettings.AutoGoldenUpgrades.selected;
    document.getElementById('dAutoGoldenUpgrades').value = autoTrimpSettings.dAutoGoldenUpgrades.selected;
    document.getElementById('cAutoGoldenUpgrades').value = autoTrimpSettings.cAutoGoldenUpgrades.selected;
    document.getElementById('AutoPoison').value = autoTrimpSettings.AutoPoison.selected;
    document.getElementById('AutoWind').value = autoTrimpSettings.AutoWind.selected;
    document.getElementById('AutoIce').value = autoTrimpSettings.AutoIce.selected;

    //Heirloom dropdowns
    document.getElementById('raretokeep').value = autoTrimpSettings.raretokeep.selected;
    document.getElementById('slot1modsh').value = autoTrimpSettings.slot1modsh.selected;
    document.getElementById('slot2modsh').value = autoTrimpSettings.slot2modsh.selected;
    document.getElementById('slot3modsh').value = autoTrimpSettings.slot3modsh.selected;
    document.getElementById('slot4modsh').value = autoTrimpSettings.slot4modsh.selected;
    document.getElementById('slot5modsh').value = autoTrimpSettings.slot5modsh.selected;
    document.getElementById('slot1modst').value = autoTrimpSettings.slot1modst.selected;
    document.getElementById('slot2modst').value = autoTrimpSettings.slot2modst.selected;
    document.getElementById('slot3modst').value = autoTrimpSettings.slot3modst.selected;
    document.getElementById('slot4modst').value = autoTrimpSettings.slot4modst.selected;
    document.getElementById('slot5modst').value = autoTrimpSettings.slot5modst.selected;


    if (getPageSetting('DisableFarm') < 1)
        shouldFarm = false;

    MODULES["maps"] && (MODULES["maps"].preferGardens = !getPageSetting('PreferMetal'));
    if (document.getElementById('Prestige').selectedIndex > 11 && game.global.slowDone == false) {
        document.getElementById('Prestige').selectedIndex = 11;
        autoTrimpSettings.Prestige.selected = "Bestplate";
    }

    for (var setting in autoTrimpSettings) {
        var item = autoTrimpSettings[setting];
        if (item.type == 'value' || item.type == 'valueNegative' || item.type == 'multitoggle' || item.type == 'multiValue' || item.type == 'textValue') {
            var elem = document.getElementById(item.id);
            if (elem != null) {
                if (item.type == 'multitoggle')
                    elem.textContent = item.name[item.value];
                else if (item.type == 'multiValue') {
                    if (Array.isArray(item.value) && item.value.length == 1 && item.value[0] == -1)
                        elem.innerHTML = item.name + ': ' + "<span class='icomoon icon-infinity'></span>";
                    else
                        elem.textContent = item.name + ': ' + item.value.toString();
                }
                else if (item.type == 'textValue') {
                    elem.textContent = item.name + ': ' + item.value;
                }
                else if (item.value > -1 || item.type == 'valueNegative')
                    elem.textContent = item.name + ': ' + prettify(item.value);
                else
                    elem.innerHTML = item.name + ': ' + "<span class='icomoon icon-infinity'></span>";
            }
        }
    }
}

function checkPortalSettings() {
    var result = findOutCurrentPortalLevel();
    var portalLevel = result.level;
    var leadCheck = result.lead;
    if (portalLevel == -1)
        return portalLevel;
    var voidmaps = 0;
    if (game.global.challengeActive != "Daily") {
    voidmaps = getPageSetting('VoidMaps');
    }
    if (game.global.challengeActive == "Daily") {
    voidmaps = getPageSetting('dVoidMaps');
    }
    if (voidmaps >= portalLevel)
        tooltip('confirm', null, 'update', 'WARNING: Your void maps are set to complete after your autoPortal, and therefore will not be done at all! Please Change Your Settings Now. This Box Will Not Go away Until You do. Remember you can choose \'Custom\' autoPortal along with challenges for complete control over when you portal. <br><br> Estimated autoPortal level: ' + portalLevel, 'cancelTooltip()', 'Void Maps Conflict');
    return portalLevel;
}

function getDailyHeHrStats(){var a="";if("Daily"==game.global.challengeActive){var b=game.stats.heliumHour.value()/(game.global.totalHeliumEarned-(game.global.heliumLeftover+game.resources.helium.owned));b*=100+getDailyHeliumValue(countDailyWeight()),a="<b>After Daily He/Hr: "+b.toFixed(3)+"%"}return a}
function settingsProfileMakeGUI(){}
function toggleAutoMaps(){getPageSetting('AutoMaps')?setPageSetting('AutoMaps',0):setPageSetting('AutoMaps',1),document.getElementById('autoMapBtn').setAttribute('class','noselect settingsBtn settingBtn'+autoTrimpSettings.AutoMaps.value)}
