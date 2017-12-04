var material; location; light_source; inhabitants;

function setup() {

material = ['SAND', 'DUST', 'LEAVES', 'PAPER', 'TIN', 'ROOTS', 'BRICK', 'STONE', 'DISCARDED CLOTHING', 'GLASS', 'STEEL', 'PLASTIC', 'MUD', 'BROKEN DISHES', 'WOOD', 'STRAW', 'WEEDS'];

location = ['IN A GREEN, MOSSY TERRAIN', 'IN AN OVERPOPULATED AREA', 'BY THE SEA', 'BY AN ABANDONED LAKE', 'IN A DESERTED FACTORY', 'IN DENSE WOODS', 'IN JAPAN', 'AMONG SMALL HILLS', 'IN SOUTHERN FRANCE', 'AMONG HIGH MOUNTAINS', 'ON AN ISLAND', 'IN A COLD, WINDY CLIMATE', 'IN A PLACE WITH BOTH HEAVY RAIN AND BRIGHT SUN', 'IN A DESERTED AIRPORT', 'IN A HOT CLIMATE', 'INSIDE A MOUNTAIN', 'ON THE SEA', 'IN MICHIGAN', 'IN HEAVY JUNGLE UNDERGROWTH', 'BY A RIVER', 'AMONG OTHER HOUSES', 'IN A DESERTED CHURCH', 'IN A METROPOLIS', 'UNDERWATER'];

light_source = ['CANDLES', 'ALL AVAILABLE LIGHTING', 'ELECTRICITY', 'NATURAL LIGHT'];

inhabitants = ['PEOPLE WHO SLEEP VERY LITTLE', 'VEGETARIANS', 'HORSES AND BIRDS', 'PEOPLE SPEAKING MANY LANGUAGES WEARING LITTLE OR NO CLOTHING', 'ALL RACES OF MEN REPRESENTED WEARING PREDOMINANTLY RED CLOTHING', 'CHILDREN AND OLD PEOPLE', 'VARIOUS BIRDS AND FISH', 'LOVERS', 'PEOPLE WHO ENJOY EATING TOGETHER', 'PEOPLE WHO EAT A GREAT DEAL', 'COLLECTORS OF ALL TYPES', 'FRIENDS AND ENEMIES', 'PEOPLE WHO SLEEP ALMOST ALL THE TIME', 'VERY TALL PEOPLE', 'AMERICAN INDIANS', 'LITTLE BOYS', 'PEOPLE FROM MANY WALKS OF LIFE', 'NEGROS WEARING ALL COLORS', 'FRIENDS', 'FRENCH AND GERMAN SPEAKING PEOPLE', 'FISHERMEN AND FAMILIES', 'PEOPLE WHO LOVE TO READ'];

print('');
print('A HOUSE OF ' + random(material));
print('      ' + random(location));
print('            USING ' + random(light_source));
print('                  INHABITED BY ' + random(inhabitants));
print('');

}