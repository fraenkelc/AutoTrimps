MODULES["equipment"] = {};
MODULES["equipment"].numHitsSurvived = 10;
MODULES["equipment"].numHitsSurvivedScry = 80;
MODULES["equipment"].capDivisor = 10;
MODULES["equipment"].alwaysLvl2 = getPageSetting('always2');
MODULES["equipment"].waitTill60 = true;
MODULES["equipment"].equipHealthDebugMessage = false;
var equipmentList = {
    'Dagger': {
        Upgrade: 'Dagadder',
        Stat: 'attack',
        Resource: 'metal',
        Equip: true
    },
    'Mace': {
        Upgrade: 'Megamace',
        Stat: 'attack',
        Resource: 'metal',
        Equip: true
    },
    'Polearm': {
        Upgrade: 'Polierarm',
        Stat: 'attack',
        Resource: 'metal',
        Equip: true
    },
    'Battleaxe': {
        Upgrade: 'Axeidic',
        Stat: 'attack',
        Resource: 'metal',
        Equip: true
    },
    'Greatsword': {
        Upgrade: 'Greatersword',
        Stat: 'attack',
        Resource: 'metal',
        Equip: true
    },
    'Boots': {
        Upgrade: 'Bootboost',
        Stat: 'health',
        Resource: 'metal',
        Equip: true
    },
    'Helmet': {
        Upgrade: 'Hellishmet',
        Stat: 'health',
        Resource: 'metal',
        Equip: true
    },
    'Pants': {
        Upgrade: 'Pantastic',
        Stat: 'health',
        Resource: 'metal',
        Equip: true
    },
    'Shoulderguards': {
        Upgrade: 'Smoldershoulder',
        Stat: 'health',
        Resource: 'metal',
        Equip: true
    },
    'Breastplate': {
        Upgrade: 'Bestplate',
        Stat: 'health',
        Resource: 'metal',
        Equip: true
    },
    'Arbalest': {
        Upgrade: 'Harmbalest',
        Stat: 'attack',
        Resource: 'metal',
        Equip: true
    },
    'Gambeson': {
        Upgrade: 'GambesOP',
        Stat: 'health',
        Resource: 'metal',
        Equip: true
    },
    'Shield': {
        Upgrade: 'Supershield',
        Stat: 'health',
        Resource: 'wood',
        Equip: true
    },
    'Gym': {
        Upgrade: 'Gymystic',
        Stat: 'block',
        Resource: 'wood',
        Equip: false
    }
};
var mapresourcetojob = {"food": "Farmer", "wood": "Lumberjack", "metal": "Miner", "science": "Scientist"}; 
function equipEffect(a,b){if(b.Equip)return a[b.Stat+'Calculated'];var c=a.increase.by*a.owned,d=game.upgrades.Gymystic.done?game.upgrades.Gymystic.modifier+0.01*(game.upgrades.Gymystic.done-1):1,e=a.increase.by*(a.owned+1)*d;return e-c}
function equipCost(a,b){var c=parseFloat(getBuildingItemPrice(a,b.Resource,b.Equip,1));return c=b.Equip?Math.ceil(c*Math.pow(1-game.portal.Artisanistry.modifier,game.portal.Artisanistry.level)):Math.ceil(c*Math.pow(1-game.portal.Resourceful.modifier,game.portal.Resourceful.level)),c}
function PrestigeValue(a){var b=game.upgrades[a].prestiges,c=game.equipment[b],d;d=c.blockNow?"block":"undefined"==typeof c.health?"attack":"health";var e=Math.round(c[d]*Math.pow(1.19,c.prestige*game.global.prestige[d]+1));return e}

function evaluateEquipmentEfficiency(equipName) {
    var equip = equipmentList[equipName];
    var gameResource = equip.Equip ? game.equipment[equipName] : game.buildings[equipName];
    if (equipName == 'Shield') {
        if (gameResource.blockNow) {
            equip.Stat = 'block';
        } else {
            equip.Stat = 'health';
        }
    }
    var Effect = equipEffect(gameResource, equip);
    var Cost = equipCost(gameResource, equip);
    var Factor = Effect / Cost;
    var StatusBorder = 'white';
    var Wall = false;

    var BuyWeaponUpgrades = ((getPageSetting('BuyWeaponsNew') == 1) || (getPageSetting('BuyWeaponsNew') == 2));
    var BuyArmorUpgrades = ((getPageSetting('BuyArmorNew') == 1) || (getPageSetting('BuyArmorNew') == 2));
    if (!game.upgrades[equip.Upgrade].locked) {
        var CanAfford = canAffordTwoLevel(game.upgrades[equip.Upgrade]);
        if (equip.Equip) {
            var NextEffect = PrestigeValue(equip.Upgrade);
            if ((game.global.challengeActive == "Scientist" && getScientistLevel() > 2) || (!BuyWeaponUpgrades && !BuyArmorUpgrades))
                var NextCost = Infinity;
            else
                var NextCost = Math.ceil(getNextPrestigeCost(equip.Upgrade) * Math.pow(1 - game.portal.Artisanistry.modifier, game.portal.Artisanistry.level));
            Wall = (NextEffect / NextCost > Factor);
        }


        if (!CanAfford) {
            StatusBorder = 'yellow';
        } else {
            if (!equip.Equip) {

                StatusBorder = 'red';
            } else {
                var CurrEffect = gameResource.level * Effect;
                var NeedLevel = Math.ceil(CurrEffect / NextEffect);
                var Ratio = gameResource.cost[equip.Resource][1];
                var NeedResource = NextCost * (Math.pow(Ratio, NeedLevel) - 1) / (Ratio - 1);
                if (game.resources[equip.Resource].owned > NeedResource) {
                    StatusBorder = 'red';
                } else {
                    StatusBorder = 'orange';
                }
            }
        }
    }
    if (game.jobs[mapresourcetojob[equip.Resource]].locked && (game.global.challengeActive != 'Metal')) {

        Factor = 0;
        Wall = true;
    }

    var isLiquified = (game.options.menu.liquification.enabled && game.talents.liquification.purchased && !game.global.mapsActive && game.global.gridArray && game.global.gridArray[0] && game.global.gridArray[0].name == "Liquimp");
    var time = mapTimeEstimater();
    var isQuick = (time != 0) && (time < 25000);
    var cap = 100;
    if (equipmentList[equipName].Stat == 'block') cap = 5;
    if (equipmentList[equipName].Stat == 'health') cap = getPageSetting('CapEquiparm');
    if (equipmentList[equipName].Stat == 'attack') cap = getPageSetting('CapEquip2');
    if ((isLiquified || isQuick) && cap > 0 && gameResource.level >= (cap / MODULES["equipment"].capDivisor)) {
        Factor = 0;
        Wall = true;
    } else if (cap > 0 && gameResource.level >= cap) {
        Factor = 0;
        Wall = true;
    }
    if (equipName != 'Gym' && game.global.world < 60 && game.global.world >= 58 && MODULES["equipment"].waitTill60) {
        Wall = true;
    }
    if (gameResource.level < 2 && MODULES["equipment"].alwaysLvl2) {
        Factor = 999 - gameResource.prestige;
    }
    if (equipName == 'Shield' && gameResource.blockNow &&
        game.upgrades['Gymystic'].allowed - game.upgrades['Gymystic'].done > 0) {
        needGymystic = true;
        Factor = 0;
        Wall = true;
        StatusBorder = 'orange';
    }
    return {
        Stat: equip.Stat,
        Factor: Factor,
        StatusBorder: StatusBorder,
        Wall: Wall,
        Cost: Cost
    };
}

var resourcesNeeded;
var Best;

function orangewindstack(){(9<game.equipment.Dagger.level&&0==game.upgrades.Dagadder.locked&&buyUpgrade('Dagadder',!0,!0),9<game.equipment.Mace.level&&0==game.upgrades.Megamace.locked&&buyUpgrade('Megamace',!0,!0),9<game.equipment.Polearm.level&&0==game.upgrades.Polierarm.locked&&buyUpgrade('Polierarm',!0,!0),9<game.equipment.Battleaxe.level&&0==game.upgrades.Axeidic.locked&&buyUpgrade('Axeidic',!0,!0),9<game.equipment.Greatsword.level&&0==game.upgrades.Greatersword.locked&&buyUpgrade('Greatersword',!0,!0),9<game.equipment.Arbalest.level&&0==game.upgrades.Harmbalest.locked&&buyUpgrade('Harmbalest',!0,!0),0==game.upgrades.Bootboost.locked&&buyUpgrade('Bootboost',!0,!0),0==game.upgrades.Hellishmet.locked&&buyUpgrade('Hellishmet',!0,!0),0==game.upgrades.Pantastic.locked&&buyUpgrade('Pantastic',!0,!0),0==game.upgrades.Smoldershoulder.locked&&buyUpgrade('Smoldershoulder',!0,!0),0==game.upgrades.Bestplate.locked&&buyUpgrade('Bestplate',!0,!0),0==game.upgrades.GambesOP.locked&&buyUpgrade('GambesOP',!0,!0),0==game.upgrades.Supershield.locked&&buyUpgrade('Supershield',!0,!0))}
function dorangewindstack(){(9<game.equipment.Dagger.level&&0==game.upgrades.Dagadder.locked&&buyUpgrade('Dagadder',!0,!0),9<game.equipment.Mace.level&&0==game.upgrades.Megamace.locked&&buyUpgrade('Megamace',!0,!0),9<game.equipment.Polearm.level&&0==game.upgrades.Polierarm.locked&&buyUpgrade('Polierarm',!0,!0),9<game.equipment.Battleaxe.level&&0==game.upgrades.Axeidic.locked&&buyUpgrade('Axeidic',!0,!0),9<game.equipment.Greatsword.level&&0==game.upgrades.Greatersword.locked&&buyUpgrade('Greatersword',!0,!0),9<game.equipment.Arbalest.level&&0==game.upgrades.Harmbalest.locked&&buyUpgrade('Harmbalest',!0,!0),0==game.upgrades.Bootboost.locked&&buyUpgrade('Bootboost',!0,!0),0==game.upgrades.Hellishmet.locked&&buyUpgrade('Hellishmet',!0,!0),0==game.upgrades.Pantastic.locked&&buyUpgrade('Pantastic',!0,!0),0==game.upgrades.Smoldershoulder.locked&&buyUpgrade('Smoldershoulder',!0,!0),0==game.upgrades.Bestplate.locked&&buyUpgrade('Bestplate',!0,!0),0==game.upgrades.GambesOP.locked&&buyUpgrade('GambesOP',!0,!0),0==game.upgrades.Supershield.locked&&buyUpgrade('Supershield',!0,!0))}

function windstackingprestige() {
    if (
		(game.global.challengeActive != "Daily" && getEmpowerment() == "Wind" && getPageSetting('WindStackingMin') > 0 && getPageSetting('WindStackingMinHD') > 0 && game.global.world >= getPageSetting('WindStackingMin') && calcHDratio() < getPageSetting('WindStackingMinHD')) || 
		(game.global.challengeActive == "Daily" && getEmpowerment() == "Wind" && getPageSetting('dWindStackingMin') > 0 && getPageSetting('dWindStackingMinHD') > 0 && game.global.world >= getPageSetting('dWindStackingMin') && calcHDratio() < getPageSetting('dWindStackingMinHD')) || 
		(game.global.challengeActive != "Daily" && getPageSetting('wsmax') > 0 && getPageSetting('wsmaxhd') > 0 && game.global.world >= getPageSetting('wsmax') && calcHDratio() < getPageSetting('wsmaxhd')) || 
		(game.global.challengeActive == "Daily" && getPageSetting('dwsmax') > 0 && getPageSetting('dwsmaxhd') > 0 && game.global.world >= getPageSetting('dwsmax') && calcHDratio() < getPageSetting('dwsmaxhd'))
	) {
	if (game.global.challengeActive != "Daily") orangewindstack();
	if (game.global.challengeActive == "Daily") dorangewindstack();
        return false;
    }
    else return true;
}

var preBuyAmt2=1;
var preBuyFiring2=1;
var preBuyTooltip2=false;
var preBuymaxSplit2=1;
var preBuyCustomFirst2=1;
var preBuyCustomLast2=1;

function preBuy3() {
    preBuyAmt2 = game.global.buyAmt;
    preBuyFiring2 = game.global.firing;
    preBuyTooltip2 = game.global.lockTooltip;
    preBuymaxSplit2 = game.global.maxSplit;
    preBuyCustomFirst2 = game.global.firstCustomAmt;
    preBuyCustomLast2 = game.global.lastCustomAmt;
}

function postBuy3() {
    game.global.buyAmt = preBuyAmt2;
    game.global.firing = preBuyFiring2;
    game.global.lockTooltip = preBuyTooltip2;
    game.global.maxSplit = preBuymaxSplit2;
    game.global.firstCustomAmt = preBuyCustomFirst2;
    game.global.lastCustomAmt = preBuyCustomLast2;
}

function autoLevelEquipment() {

    //WS
    var enoughDamageCutoff = getPageSetting("dmgcuntoff");
    if (getEmpowerment() == 'Wind' && game.global.challengeActive != "Daily" && !game.global.runningChallengeSquared && getPageSetting("AutoStance") == 3 && getPageSetting("WindStackingMin") > 0 && game.global.world >= getPageSetting("WindStackingMin") && getPageSetting("windcutoff") > 0)
        enoughDamageCutoff = getPageSetting("windcutoff");
    if (getEmpowerment() == 'Wind' && game.global.challengeActive == "Daily" && !game.global.runningChallengeSquared && (getPageSetting("AutoStance") == 3 || getPageSetting("use3daily") == true) && getPageSetting("dWindStackingMin") > 0 && game.global.world >= getPageSetting("dWindStackingMin") && getPageSetting("dwindcutoff") > 0)
        enoughDamageCutoff = getPageSetting("dwindcutoff");

    if (calcOurDmg("avg", false, true) <= 0) return;
    resourcesNeeded = {
        "food": 0,
        "wood": 0,
        "metal": 0,
        "science": 0,
        "gems": 0
    };
    Best = {};
    var keys = ['healthwood', 'healthmetal', 'attackmetal', 'blockwood'];
    for (var i = 0; i < keys.length; i++) {
        Best[keys[i]] = {
            Factor: 0,
            Name: '',
            Wall: false,
            StatusBorder: 'white',
            Cost: 0
        };
    }
    var ourDamage = calcOurDmg("avg", false, true);
    var mapbonusmulti = 1 + (0.20 * game.global.mapBonus);
    if (game.global.mapBonus > 0) {
        ourDamage *= mapbonusmulti;
    }
    if (game.global.challengeActive == 'Lead') {
        if (game.global.world % 2 == 1 && game.global.world != 179) {
            ourDamage /= 1.5;
        }
    }
    //Shield
    highDamageShield();
    if (getPageSetting('loomswap') > 0 && game.global.challengeActive != "Daily" && game.global.ShieldEquipped.name != getPageSetting('highdmg'))
	ourDamage *= trimpAA;
    if (getPageSetting('dloomswap') > 0 && game.global.challengeActive == "Daily" && game.global.ShieldEquipped.name != getPageSetting('dhighdmg'))
	ourDamage *= trimpAA;


    var enemyDamage = calcBadGuyDmg(null, getEnemyMaxAttack(game.global.world + 1, 50, 'Snimp', 1.0), true, true);
    var enemyHealth = calcEnemyHealth();
    var pierceMod = (game.global.brokenPlanet && !game.global.mapsActive) ? getPierceAmt() : 0;
    var numHits = MODULES["equipment"].numHitsSurvived;
    var enoughHealthE = (calcOurHealth(true) > numHits * (enemyDamage - calcOurBlock(true) > 0 ? enemyDamage - calcOurBlock(true) : enemyDamage * pierceMod));
    var enoughDamageE = (ourDamage * enoughDamageCutoff > enemyHealth);

    for (var equipName in equipmentList) {
        var equip = equipmentList[equipName];
        var gameResource = equip.Equip ? game.equipment[equipName] : game.buildings[equipName];
        if (!gameResource.locked) {
            var $equipName = document.getElementById(equipName);
            $equipName.style.color = 'white';
            var evaluation = evaluateEquipmentEfficiency(equipName);
            var BKey = equip.Stat + equip.Resource;

            if (Best[BKey].Factor === 0 || Best[BKey].Factor < evaluation.Factor) {
                Best[BKey].Factor = evaluation.Factor;
                Best[BKey].Name = equipName;
                Best[BKey].Wall = evaluation.Wall;
                Best[BKey].StatusBorder = evaluation.StatusBorder;
            }
            Best[BKey].Cost = evaluation.Cost;
            resourcesNeeded[equip.Resource] += Best[BKey].Cost;

            if (evaluation.Wall)
                $equipName.style.color = 'yellow';
            $equipName.style.border = '1px solid ' + evaluation.StatusBorder;

            var $equipUpgrade = document.getElementById(equip.Upgrade);
            if (evaluation.StatusBorder != 'white' && evaluation.StatusBorder != 'yellow' && $equipUpgrade)
                $equipUpgrade.style.color = evaluation.StatusBorder;
            if (evaluation.StatusBorder == 'yellow' && $equipUpgrade)
                $equipUpgrade.style.color = evaluation.StatusBorder;
            if (equipName == 'Gym' && needGymystic) {
                $equipName.style.color = 'white';
                $equipName.style.border = '1px solid white';
                if ($equipUpgrade) {
                    $equipUpgrade.style.color = 'red';
                    $equipUpgrade.style.border = '2px solid red';
                }
            }

            if (evaluation.StatusBorder == 'red' && windstackingprestige() && !(game.global.world < 60 && game.global.world >= 58 && MODULES["equipment"].waitTill60)) {
                var BuyWeaponUpgrades = ((getPageSetting('BuyWeaponsNew') == 1) || (getPageSetting('BuyWeaponsNew') == 2));
                var BuyArmorUpgrades = ((getPageSetting('BuyArmorNew') == 1) || (getPageSetting('BuyArmorNew') == 2));
                var DelayArmorWhenNeeded = getPageSetting('DelayArmorWhenNeeded');

                if (
                    (BuyWeaponUpgrades && equipmentList[equipName].Stat == 'attack') ||
                    (BuyWeaponUpgrades && equipmentList[equipName].Stat == 'block') ||
                    (BuyArmorUpgrades && equipmentList[equipName].Stat == 'health' &&
                        (
                            (DelayArmorWhenNeeded && !shouldFarm) ||
                            (DelayArmorWhenNeeded && enoughDamageE) ||
                            (DelayArmorWhenNeeded && !enoughDamageE && !enoughHealthE) ||
                            (DelayArmorWhenNeeded && equipmentList[equipName].Resource == 'wood') ||
                            (!DelayArmorWhenNeeded)
                        )
                    )
                )

                {
                    var upgrade = equipmentList[equipName].Upgrade;
                    if (upgrade != "Gymystic")
                        debug('Upgrading ' + upgrade + " - Prestige " + game.equipment[equipName].prestige, "equips", '*upload');
                    else
                        debug('Upgrading ' + upgrade + " # " + game.upgrades[upgrade].allowed, "equips", '*upload');
                    buyUpgrade(upgrade, true, true);
                } else {
                    $equipName.style.color = 'orange';
                    $equipName.style.border = '2px solid orange';
                }
            }
        }
    }

    var BuyWeaponLevels = ((getPageSetting('BuyWeaponsNew') == 1) || (getPageSetting('BuyWeaponsNew') == 3));
    var BuyArmorLevels = ((getPageSetting('BuyArmorNew') == 1) || (getPageSetting('BuyArmorNew') == 3));
    preBuy3();
    for (var stat in Best) {
        var eqName = Best[stat].Name;
        if (eqName !== '') {
            var $eqName = document.getElementById(eqName);
            var DaThing = equipmentList[eqName];
            if (eqName == 'Gym' && needGymystic) {
                $eqName.style.color = 'white';
                $eqName.style.border = '1px solid white';
                continue;
            } else {
                $eqName.style.color = Best[stat].Wall ? 'orange' : 'red';
                $eqName.style.border = '2px solid red';
            }
            // do not upgrade an equipment if we can prestige it
            var $equipUpgrade = document.getElementById(DaThing.Upgrade);
            if ($equipUpgrade)
                continue;

            var maxmap = getPageSetting('MaxMapBonusAfterZone') && doMaxMapBonus;
            if (BuyArmorLevels && (DaThing.Stat == 'health' || DaThing.Stat == 'block') && (!enoughHealthE || maxmap || shouldFarm)) {
                game.global.buyAmt = getPageSetting('gearamounttobuy');
                if (DaThing.Equip && !Best[stat].Wall && canAffordBuilding(eqName, null, null, true)) {
                    debug('Leveling equipment ' + eqName, "equips", '*upload3');
                    buyEquipment(eqName, null, true);
                }
            }
            var aalvl2 = MODULES["equipment"].alwaysLvl2;
            if (BuyArmorLevels && (DaThing.Stat == 'health') && aalvl2 && game.equipment[eqName].level < 2) {
                game.global.buyAmt = 1;
                if (DaThing.Equip && !Best[stat].Wall && canAffordBuilding(eqName, null, null, true)) {
                    debug('Leveling equipment ' + eqName + " (AlwaysLvl2)", "equips", '*upload3');
                    buyEquipment(eqName, null, true);
                }
            }
            if (windstackingprestige() && BuyWeaponLevels && DaThing.Stat == 'attack' && (!enoughDamageE || enoughHealthE || maxmap)) {
                game.global.buyAmt = getPageSetting('gearamounttobuy');
                if (DaThing.Equip && !Best[stat].Wall && canAffordBuilding(eqName, null, null, true)) {
                    debug('Leveling equipment ' + eqName, "equips", '*upload3');
                    buyEquipment(eqName, null, true);
                }
            }
        }
    }
    postBuy3();
}
function areWeAttackLevelCapped(){var a=[];for(var b in equipmentList){var c=equipmentList[b],d=c.Equip?game.equipment[b]:game.buildings[b];if(!d.locked){var e=evaluateEquipmentEfficiency(b);"attack"==e.Stat&&a.push(e)}}return a.every(f=>0==f.Factor&&!0==f.Wall)}
