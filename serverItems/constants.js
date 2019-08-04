exports.INITIAL_GAMESTATE = "INITIAL_GAMESTATE";
exports.SHOP_PURCHASE = "SHOP_PURCHASE";
exports.SHOP_REFUND = "SHOP_REFUND";
exports.SET_USERFEEDBACK = "SET_USERFEEDBACK";
exports.SHOP_TRANSFER = "SHOP_TRANSFER";

exports.shopItemTypeCosts = {
	//TypeId: Cost
	0: 10, //radar
	1: 10, //plane
	2: 10, //sub
	3: 10 //tank
};

exports.blankGameboard = {
	0: { type: "land", pieces: [] },
	1: { type: "land", pieces: [] },
	2: {
		type: "land",
		pieces: [
			{
				pieceId: 1,
				pieceGameId: 1,
				pieceTeamId: 0,
				pieceTypeId: 1,
				pieceMoves: 5,
				pieceFuel: 5
			},
			{
				pieceId: 2,
				pieceGameId: 1,
				pieceTeamId: 0,
				pieceTypeId: 2,
				pieceMoves: 5,
				pieceFuel: 5
			},
			{
				pieceId: 3,
				pieceGameId: 1,
				pieceTeamId: 1,
				pieceTypeId: 3,
				pieceMoves: 5,
				pieceFuel: 5
			}
		]
	},
	3: { type: "land", pieces: [] },
	4: { type: "land", pieces: [] },
	5: { type: "land", pieces: [] },
	6: { type: "land", pieces: [] },
	7: { type: "land", pieces: [] },
	8: { type: "land", pieces: [] },
	9: { type: "land", pieces: [] },
	10: { type: "land", pieces: [] },
	11: { type: "land", pieces: [] },
	12: { type: "land", pieces: [] },
	13: { type: "land", pieces: [] },
	14: { type: "land", pieces: [] },
	15: { type: "land", pieces: [] },
	16: { type: "land", pieces: [] },
	17: { type: "land", pieces: [] },
	18: { type: "land", pieces: [] },
	19: { type: "land", pieces: [] },
	20: { type: "land", pieces: [] },
	21: { type: "land", pieces: [] },
	22: { type: "land", pieces: [] },
	23: { type: "land", pieces: [] },
	24: { type: "land", pieces: [] },
	25: { type: "land", pieces: [] },
	26: { type: "land", pieces: [] },
	27: { type: "land", pieces: [] },
	28: { type: "land", pieces: [] },
	29: { type: "land", pieces: [] },
	30: { type: "land", pieces: [] },
	31: { type: "land", pieces: [] },
	32: { type: "land", pieces: [] },
	33: { type: "land", pieces: [] },
	34: { type: "land", pieces: [] },
	35: { type: "land", pieces: [] },
	36: { type: "land", pieces: [] },
	37: { type: "land", pieces: [] },
	38: { type: "land", pieces: [] },
	39: { type: "land", pieces: [] },
	40: { type: "land", pieces: [] },
	41: { type: "land", pieces: [] },
	42: { type: "land", pieces: [] },
	43: { type: "land", pieces: [] },
	44: { type: "land", pieces: [] },
	45: { type: "land", pieces: [] },
	46: { type: "land", pieces: [] },
	47: { type: "land", pieces: [] },
	48: { type: "land", pieces: [] },
	49: { type: "land", pieces: [] },
	50: { type: "land", pieces: [] },
	51: { type: "land", pieces: [] },
	52: { type: "land", pieces: [] },
	53: { type: "land", pieces: [] },
	54: { type: "land", pieces: [] },
	55: { type: "land", pieces: [] },
	56: { type: "land", pieces: [] },
	57: { type: "land", pieces: [] },
	58: { type: "land", pieces: [] },
	59: { type: "land", pieces: [] },
	60: { type: "land", pieces: [] },
	61: { type: "land", pieces: [] },
	62: { type: "land", pieces: [] },
	63: { type: "land", pieces: [] },
	64: { type: "land", pieces: [] },
	65: { type: "land", pieces: [] },
	66: { type: "land", pieces: [] },
	67: { type: "land", pieces: [] },
	68: { type: "land", pieces: [] },
	69: { type: "land", pieces: [] },
	70: { type: "land", pieces: [] },
	71: { type: "land", pieces: [] },
	72: { type: "land", pieces: [] },
	73: { type: "land", pieces: [] },
	74: { type: "land", pieces: [] },
	75: { type: "land", pieces: [] },
	76: { type: "land", pieces: [] },
	77: { type: "land", pieces: [] },
	78: { type: "land", pieces: [] },
	79: { type: "land", pieces: [] },
	80: { type: "land", pieces: [] },
	81: { type: "land", pieces: [] },
	82: { type: "land", pieces: [] },
	83: { type: "land", pieces: [] },
	84: { type: "land", pieces: [] },
	85: { type: "land", pieces: [] },
	86: { type: "land", pieces: [] },
	87: { type: "land", pieces: [] },
	88: { type: "land", pieces: [] },
	89: { type: "land", pieces: [] },
	90: { type: "land", pieces: [] },
	91: { type: "land", pieces: [] },
	92: { type: "land", pieces: [] },
	93: { type: "land", pieces: [] },
	94: { type: "land", pieces: [] },
	95: { type: "land", pieces: [] },
	96: { type: "land", pieces: [] },
	97: { type: "land", pieces: [] },
	98: { type: "land", pieces: [] },
	99: { type: "land", pieces: [] },
	100: { type: "land", pieces: [] },
	101: { type: "land", pieces: [] },
	102: { type: "land", pieces: [] },
	103: { type: "land", pieces: [] },
	104: { type: "land", pieces: [] },
	105: { type: "land", pieces: [] },
	106: { type: "land", pieces: [] },
	107: { type: "land", pieces: [] },
	108: { type: "land", pieces: [] },
	109: { type: "land", pieces: [] },
	110: { type: "land", pieces: [] },
	111: { type: "land", pieces: [] },
	112: { type: "land", pieces: [] },
	113: { type: "land", pieces: [] },
	114: { type: "land", pieces: [] },
	115: { type: "land", pieces: [] },
	116: { type: "land", pieces: [] },
	117: { type: "land", pieces: [] },
	118: { type: "land", pieces: [] },
	119: { type: "land", pieces: [] },
	120: { type: "land", pieces: [] },
	121: { type: "land", pieces: [] },
	122: { type: "land", pieces: [] },
	123: { type: "land", pieces: [] },
	124: { type: "land", pieces: [] },
	125: { type: "land", pieces: [] },
	126: { type: "land", pieces: [] },
	127: { type: "land", pieces: [] },
	128: { type: "land", pieces: [] },
	129: { type: "land", pieces: [] },
	130: { type: "land", pieces: [] },
	131: { type: "land", pieces: [] },
	132: { type: "land", pieces: [] },
	133: { type: "land", pieces: [] },
	134: { type: "land", pieces: [] },
	135: { type: "land", pieces: [] },
	136: { type: "land", pieces: [] },
	137: { type: "land", pieces: [] },
	138: { type: "land", pieces: [] },
	139: { type: "land", pieces: [] },
	140: { type: "land", pieces: [] },
	141: { type: "land", pieces: [] },
	142: { type: "land", pieces: [] },
	143: { type: "land", pieces: [] },
	144: { type: "land", pieces: [] },
	145: { type: "land", pieces: [] },
	146: { type: "land", pieces: [] },
	147: { type: "land", pieces: [] },
	148: { type: "land", pieces: [] },
	149: { type: "land", pieces: [] },
	150: { type: "land", pieces: [] },
	151: { type: "land", pieces: [] },
	152: { type: "land", pieces: [] },
	153: { type: "land", pieces: [] },
	154: { type: "land", pieces: [] },
	155: { type: "land", pieces: [] },
	156: { type: "land", pieces: [] },
	157: { type: "land", pieces: [] },
	158: { type: "land", pieces: [] },
	159: { type: "land", pieces: [] },
	160: { type: "land", pieces: [] },
	161: { type: "land", pieces: [] },
	162: { type: "land", pieces: [] },
	163: { type: "land", pieces: [] },
	164: { type: "land", pieces: [] },
	165: { type: "land", pieces: [] },
	166: { type: "land", pieces: [] },
	167: { type: "land", pieces: [] },
	168: { type: "land", pieces: [] },
	169: { type: "land", pieces: [] },
	170: { type: "land", pieces: [] },
	171: { type: "land", pieces: [] },
	172: { type: "land", pieces: [] },
	173: { type: "land", pieces: [] },
	174: { type: "land", pieces: [] },
	175: { type: "land", pieces: [] },
	176: { type: "land", pieces: [] },
	177: { type: "land", pieces: [] },
	178: { type: "land", pieces: [] },
	179: { type: "land", pieces: [] },
	180: { type: "land", pieces: [] },
	181: { type: "land", pieces: [] },
	182: { type: "land", pieces: [] },
	183: { type: "land", pieces: [] },
	184: { type: "land", pieces: [] },
	185: { type: "land", pieces: [] },
	186: { type: "land", pieces: [] },
	187: { type: "land", pieces: [] },
	188: { type: "land", pieces: [] },
	189: { type: "land", pieces: [] },
	190: { type: "land", pieces: [] },
	191: { type: "land", pieces: [] },
	192: { type: "land", pieces: [] },
	193: { type: "land", pieces: [] },
	194: { type: "land", pieces: [] },
	195: { type: "land", pieces: [] },
	196: { type: "land", pieces: [] },
	197: { type: "land", pieces: [] },
	198: { type: "land", pieces: [] },
	199: { type: "land", pieces: [] },
	200: { type: "land", pieces: [] },
	201: { type: "land", pieces: [] },
	202: { type: "land", pieces: [] },
	203: { type: "land", pieces: [] },
	204: { type: "land", pieces: [] },
	205: { type: "land", pieces: [] },
	206: { type: "land", pieces: [] },
	207: { type: "land", pieces: [] },
	208: { type: "land", pieces: [] },
	209: { type: "land", pieces: [] },
	210: { type: "land", pieces: [] },
	211: { type: "land", pieces: [] },
	212: { type: "land", pieces: [] },
	213: { type: "land", pieces: [] },
	214: { type: "land", pieces: [] },
	215: { type: "land", pieces: [] },
	216: { type: "land", pieces: [] },
	217: { type: "land", pieces: [] },
	218: { type: "land", pieces: [] },
	219: { type: "land", pieces: [] },
	220: { type: "land", pieces: [] },
	221: { type: "land", pieces: [] },
	222: { type: "land", pieces: [] },
	223: { type: "land", pieces: [] },
	224: { type: "land", pieces: [] },
	225: { type: "land", pieces: [] },
	226: { type: "land", pieces: [] },
	227: { type: "land", pieces: [] },
	228: { type: "land", pieces: [] },
	229: { type: "land", pieces: [] },
	230: { type: "land", pieces: [] },
	231: { type: "land", pieces: [] },
	232: { type: "land", pieces: [] },
	233: { type: "land", pieces: [] },
	234: { type: "land", pieces: [] },
	235: { type: "land", pieces: [] },
	236: { type: "land", pieces: [] },
	237: { type: "land", pieces: [] },
	238: { type: "land", pieces: [] },
	239: { type: "land", pieces: [] },
	240: { type: "land", pieces: [] },
	241: { type: "land", pieces: [] },
	242: { type: "land", pieces: [] },
	243: { type: "land", pieces: [] },
	244: { type: "land", pieces: [] },
	245: { type: "land", pieces: [] },
	246: { type: "land", pieces: [] },
	247: { type: "land", pieces: [] },
	248: { type: "land", pieces: [] },
	249: { type: "land", pieces: [] },
	250: { type: "land", pieces: [] },
	251: { type: "land", pieces: [] },
	252: { type: "land", pieces: [] },
	253: { type: "land", pieces: [] },
	254: { type: "land", pieces: [] },
	255: { type: "land", pieces: [] },
	256: { type: "land", pieces: [] },
	257: { type: "land", pieces: [] },
	258: { type: "land", pieces: [] },
	259: { type: "land", pieces: [] },
	260: { type: "land", pieces: [] },
	261: { type: "land", pieces: [] },
	262: { type: "land", pieces: [] },
	263: { type: "land", pieces: [] },
	264: { type: "land", pieces: [] },
	265: { type: "land", pieces: [] },
	266: { type: "land", pieces: [] },
	267: { type: "land", pieces: [] },
	268: { type: "land", pieces: [] },
	269: { type: "land", pieces: [] },
	270: { type: "land", pieces: [] },
	271: { type: "land", pieces: [] },
	272: { type: "land", pieces: [] },
	273: { type: "land", pieces: [] },
	274: { type: "land", pieces: [] },
	275: { type: "land", pieces: [] },
	276: { type: "land", pieces: [] },
	277: { type: "land", pieces: [] },
	278: { type: "land", pieces: [] },
	279: { type: "land", pieces: [] },
	280: { type: "land", pieces: [] },
	281: { type: "land", pieces: [] },
	282: { type: "land", pieces: [] },
	283: { type: "land", pieces: [] },
	284: { type: "land", pieces: [] },
	285: { type: "land", pieces: [] },
	286: { type: "land", pieces: [] },
	287: { type: "land", pieces: [] },
	288: { type: "land", pieces: [] },
	289: { type: "land", pieces: [] },
	290: { type: "land", pieces: [] },
	291: { type: "land", pieces: [] },
	292: { type: "land", pieces: [] },
	293: { type: "land", pieces: [] },
	294: { type: "land", pieces: [] },
	295: { type: "land", pieces: [] },
	296: { type: "land", pieces: [] },
	297: { type: "land", pieces: [] },
	298: { type: "land", pieces: [] },
	299: { type: "land", pieces: [] },
	300: { type: "land", pieces: [] },
	301: { type: "land", pieces: [] },
	302: { type: "land", pieces: [] },
	303: { type: "land", pieces: [] },
	304: { type: "land", pieces: [] },
	305: { type: "land", pieces: [] },
	306: { type: "land", pieces: [] },
	307: { type: "land", pieces: [] },
	308: { type: "land", pieces: [] },
	309: { type: "land", pieces: [] },
	310: { type: "land", pieces: [] },
	311: { type: "land", pieces: [] },
	312: { type: "land", pieces: [] },
	313: { type: "land", pieces: [] },
	314: { type: "land", pieces: [] },
	315: { type: "land", pieces: [] },
	316: { type: "land", pieces: [] },
	317: { type: "land", pieces: [] },
	318: { type: "land", pieces: [] },
	319: { type: "land", pieces: [] },
	320: { type: "land", pieces: [] },
	321: { type: "land", pieces: [] },
	322: { type: "land", pieces: [] },
	323: { type: "land", pieces: [] },
	324: { type: "land", pieces: [] },
	325: { type: "land", pieces: [] },
	326: { type: "land", pieces: [] },
	327: { type: "land", pieces: [] },
	328: { type: "land", pieces: [] },
	329: { type: "land", pieces: [] },
	330: { type: "land", pieces: [] },
	331: { type: "land", pieces: [] },
	332: { type: "land", pieces: [] },
	333: { type: "land", pieces: [] },
	334: { type: "land", pieces: [] },
	335: { type: "land", pieces: [] },
	336: { type: "land", pieces: [] },
	337: { type: "land", pieces: [] },
	338: { type: "land", pieces: [] },
	339: { type: "land", pieces: [] },
	340: { type: "land", pieces: [] },
	341: { type: "land", pieces: [] },
	342: { type: "land", pieces: [] },
	343: { type: "land", pieces: [] },
	344: { type: "land", pieces: [] },
	345: { type: "land", pieces: [] },
	346: { type: "land", pieces: [] },
	347: { type: "land", pieces: [] },
	348: { type: "land", pieces: [] },
	349: { type: "land", pieces: [] },
	350: { type: "land", pieces: [] },
	351: { type: "land", pieces: [] },
	352: { type: "land", pieces: [] },
	353: { type: "land", pieces: [] },
	354: { type: "land", pieces: [] },
	355: { type: "land", pieces: [] },
	356: { type: "land", pieces: [] },
	357: { type: "land", pieces: [] },
	358: { type: "land", pieces: [] },
	359: { type: "land", pieces: [] },
	360: { type: "land", pieces: [] },
	361: { type: "land", pieces: [] },
	362: { type: "land", pieces: [] },
	363: { type: "land", pieces: [] },
	364: { type: "land", pieces: [] },
	365: { type: "land", pieces: [] },
	366: { type: "land", pieces: [] },
	367: { type: "land", pieces: [] },
	368: { type: "land", pieces: [] },
	369: { type: "land", pieces: [] },
	370: { type: "land", pieces: [] },
	371: { type: "land", pieces: [] },
	372: { type: "land", pieces: [] },
	373: { type: "land", pieces: [] },
	374: { type: "land", pieces: [] },
	375: { type: "land", pieces: [] },
	376: { type: "land", pieces: [] },
	377: { type: "land", pieces: [] },
	378: { type: "land", pieces: [] },
	379: { type: "land", pieces: [] },
	380: { type: "land", pieces: [] },
	381: { type: "land", pieces: [] },
	382: { type: "land", pieces: [] },
	383: { type: "land", pieces: [] },
	384: { type: "land", pieces: [] },
	385: { type: "land", pieces: [] },
	386: { type: "land", pieces: [] },
	387: { type: "land", pieces: [] },
	388: { type: "land", pieces: [] },
	389: { type: "land", pieces: [] },
	390: { type: "land", pieces: [] },
	391: { type: "land", pieces: [] },
	392: { type: "land", pieces: [] },
	393: { type: "land", pieces: [] },
	394: { type: "land", pieces: [] },
	395: { type: "land", pieces: [] },
	396: { type: "land", pieces: [] },
	397: { type: "land", pieces: [] },
	398: { type: "land", pieces: [] },
	399: { type: "land", pieces: [] },
	400: { type: "land", pieces: [] },
	401: { type: "land", pieces: [] },
	402: { type: "land", pieces: [] },
	403: { type: "land", pieces: [] },
	404: { type: "land", pieces: [] },
	405: { type: "land", pieces: [] },
	406: { type: "land", pieces: [] },
	407: { type: "land", pieces: [] },
	408: { type: "land", pieces: [] },
	409: { type: "land", pieces: [] },
	410: { type: "land", pieces: [] },
	411: { type: "land", pieces: [] },
	412: { type: "land", pieces: [] },
	413: { type: "land", pieces: [] },
	414: { type: "land", pieces: [] },
	415: { type: "land", pieces: [] },
	416: { type: "land", pieces: [] },
	417: { type: "land", pieces: [] },
	418: { type: "land", pieces: [] },
	419: { type: "land", pieces: [] },
	420: { type: "land", pieces: [] },
	421: { type: "land", pieces: [] },
	422: { type: "land", pieces: [] },
	423: { type: "land", pieces: [] },
	424: { type: "land", pieces: [] },
	425: { type: "land", pieces: [] },
	426: { type: "land", pieces: [] },
	427: { type: "land", pieces: [] },
	428: { type: "land", pieces: [] },
	429: { type: "land", pieces: [] },
	430: { type: "land", pieces: [] },
	431: { type: "land", pieces: [] },
	432: { type: "land", pieces: [] },
	433: { type: "land", pieces: [] },
	434: { type: "land", pieces: [] },
	435: { type: "land", pieces: [] },
	436: { type: "land", pieces: [] },
	437: { type: "land", pieces: [] },
	438: { type: "land", pieces: [] },
	439: { type: "land", pieces: [] },
	440: { type: "land", pieces: [] },
	441: { type: "land", pieces: [] },
	442: { type: "land", pieces: [] },
	443: { type: "land", pieces: [] },
	444: { type: "land", pieces: [] },
	445: { type: "land", pieces: [] },
	446: { type: "land", pieces: [] },
	447: { type: "land", pieces: [] },
	448: { type: "land", pieces: [] },
	449: { type: "land", pieces: [] },
	450: { type: "land", pieces: [] },
	451: { type: "land", pieces: [] },
	452: { type: "land", pieces: [] },
	453: { type: "land", pieces: [] },
	454: { type: "land", pieces: [] },
	455: { type: "land", pieces: [] },
	456: { type: "land", pieces: [] },
	457: { type: "land", pieces: [] },
	458: { type: "land", pieces: [] },
	459: { type: "land", pieces: [] },
	460: { type: "land", pieces: [] },
	461: { type: "land", pieces: [] },
	462: { type: "land", pieces: [] },
	463: { type: "land", pieces: [] },
	464: { type: "land", pieces: [] },
	465: { type: "land", pieces: [] },
	466: { type: "land", pieces: [] },
	467: { type: "land", pieces: [] },
	468: { type: "land", pieces: [] },
	469: { type: "land", pieces: [] },
	470: { type: "land", pieces: [] },
	471: { type: "land", pieces: [] },
	472: { type: "land", pieces: [] },
	473: { type: "land", pieces: [] },
	474: { type: "land", pieces: [] },
	475: { type: "land", pieces: [] },
	476: { type: "land", pieces: [] },
	477: { type: "land", pieces: [] },
	478: { type: "land", pieces: [] },
	479: { type: "land", pieces: [] },
	480: { type: "land", pieces: [] },
	481: { type: "land", pieces: [] },
	482: { type: "land", pieces: [] },
	483: { type: "land", pieces: [] },
	484: { type: "land", pieces: [] },
	485: { type: "land", pieces: [] },
	486: { type: "land", pieces: [] },
	487: { type: "land", pieces: [] },
	488: { type: "land", pieces: [] },
	489: { type: "land", pieces: [] },
	490: { type: "land", pieces: [] },
	491: { type: "land", pieces: [] },
	492: { type: "land", pieces: [] },
	493: { type: "land", pieces: [] },
	494: { type: "land", pieces: [] },
	495: { type: "land", pieces: [] },
	496: { type: "land", pieces: [] },
	497: { type: "land", pieces: [] },
	498: { type: "land", pieces: [] },
	499: { type: "land", pieces: [] },
	500: { type: "land", pieces: [] },
	501: { type: "land", pieces: [] },
	502: { type: "land", pieces: [] },
	503: { type: "land", pieces: [] },
	504: { type: "land", pieces: [] },
	505: { type: "land", pieces: [] },
	506: { type: "land", pieces: [] },
	507: { type: "land", pieces: [] },
	508: { type: "land", pieces: [] },
	509: { type: "land", pieces: [] },
	510: { type: "land", pieces: [] },
	511: { type: "land", pieces: [] },
	512: { type: "land", pieces: [] },
	513: { type: "land", pieces: [] },
	514: { type: "land", pieces: [] },
	515: { type: "land", pieces: [] },
	516: { type: "land", pieces: [] },
	517: { type: "land", pieces: [] },
	518: { type: "land", pieces: [] },
	519: { type: "land", pieces: [] },
	520: { type: "land", pieces: [] },
	521: { type: "land", pieces: [] },
	522: { type: "land", pieces: [] },
	523: { type: "land", pieces: [] },
	524: { type: "land", pieces: [] },
	525: { type: "land", pieces: [] },
	526: { type: "land", pieces: [] },
	527: { type: "land", pieces: [] },
	528: { type: "land", pieces: [] },
	529: { type: "land", pieces: [] },
	530: { type: "land", pieces: [] },
	531: { type: "land", pieces: [] },
	532: { type: "land", pieces: [] },
	533: { type: "land", pieces: [] },
	534: { type: "land", pieces: [] },
	535: { type: "land", pieces: [] },
	536: { type: "land", pieces: [] },
	537: { type: "land", pieces: [] },
	538: { type: "land", pieces: [] },
	539: { type: "land", pieces: [] },
	540: { type: "land", pieces: [] },
	541: { type: "land", pieces: [] },
	542: { type: "land", pieces: [] },
	543: { type: "land", pieces: [] },
	544: { type: "land", pieces: [] },
	545: { type: "land", pieces: [] },
	546: { type: "land", pieces: [] },
	547: { type: "land", pieces: [] },
	548: { type: "land", pieces: [] },
	549: { type: "land", pieces: [] },
	550: { type: "land", pieces: [] },
	551: { type: "land", pieces: [] },
	552: { type: "land", pieces: [] },
	553: { type: "land", pieces: [] },
	554: { type: "land", pieces: [] },
	555: { type: "land", pieces: [] },
	556: { type: "land", pieces: [] },
	557: { type: "land", pieces: [] },
	558: { type: "land", pieces: [] },
	559: { type: "land", pieces: [] },
	560: { type: "land", pieces: [] },
	561: { type: "land", pieces: [] },
	562: { type: "land", pieces: [] },
	563: { type: "land", pieces: [] },
	564: { type: "land", pieces: [] },
	565: { type: "land", pieces: [] },
	566: { type: "land", pieces: [] },
	567: { type: "land", pieces: [] },
	568: { type: "land", pieces: [] },
	569: { type: "land", pieces: [] },
	570: { type: "land", pieces: [] },
	571: { type: "land", pieces: [] },
	572: { type: "land", pieces: [] },
	573: { type: "land", pieces: [] },
	574: { type: "land", pieces: [] },
	575: { type: "land", pieces: [] },
	576: { type: "land", pieces: [] },
	577: { type: "land", pieces: [] },
	578: { type: "land", pieces: [] },
	579: { type: "land", pieces: [] },
	580: { type: "land", pieces: [] },
	581: { type: "land", pieces: [] },
	582: { type: "land", pieces: [] },
	583: { type: "land", pieces: [] },
	584: { type: "land", pieces: [] },
	585: { type: "land", pieces: [] },
	586: { type: "land", pieces: [] },
	587: { type: "land", pieces: [] },
	588: { type: "land", pieces: [] },
	589: { type: "land", pieces: [] },
	590: { type: "land", pieces: [] },
	591: { type: "land", pieces: [] },
	592: { type: "land", pieces: [] },
	593: { type: "land", pieces: [] },
	594: { type: "land", pieces: [] },
	595: { type: "land", pieces: [] },
	596: { type: "land", pieces: [] },
	597: { type: "land", pieces: [] },
	598: { type: "land", pieces: [] },
	599: { type: "land", pieces: [] },
	600: { type: "land", pieces: [] },
	601: { type: "land", pieces: [] },
	602: { type: "land", pieces: [] },
	603: { type: "land", pieces: [] },
	604: { type: "land", pieces: [] },
	605: { type: "land", pieces: [] },
	606: { type: "land", pieces: [] },
	607: { type: "land", pieces: [] },
	608: { type: "land", pieces: [] },
	609: { type: "land", pieces: [] },
	610: { type: "land", pieces: [] },
	611: { type: "land", pieces: [] },
	612: { type: "land", pieces: [] },
	613: { type: "land", pieces: [] },
	614: { type: "land", pieces: [] },
	615: { type: "land", pieces: [] },
	616: { type: "land", pieces: [] },
	617: { type: "land", pieces: [] },
	618: { type: "land", pieces: [] },
	619: { type: "land", pieces: [] },
	620: { type: "land", pieces: [] },
	621: { type: "land", pieces: [] },
	622: { type: "land", pieces: [] },
	623: { type: "land", pieces: [] },
	624: { type: "land", pieces: [] },
	625: { type: "land", pieces: [] },
	626: { type: "land", pieces: [] },
	627: { type: "land", pieces: [] },
	628: { type: "land", pieces: [] },
	629: { type: "land", pieces: [] },
	630: { type: "land", pieces: [] },
	631: { type: "land", pieces: [] },
	632: { type: "land", pieces: [] },
	633: { type: "land", pieces: [] },
	634: { type: "land", pieces: [] },
	635: { type: "land", pieces: [] },
	636: { type: "land", pieces: [] },
	637: { type: "land", pieces: [] },
	638: { type: "land", pieces: [] },
	639: { type: "land", pieces: [] },
	640: { type: "land", pieces: [] },
	641: { type: "land", pieces: [] },
	642: { type: "land", pieces: [] },
	643: { type: "land", pieces: [] },
	644: { type: "land", pieces: [] },
	645: { type: "land", pieces: [] },
	646: { type: "land", pieces: [] },
	647: { type: "land", pieces: [] },
	648: { type: "land", pieces: [] },
	649: { type: "land", pieces: [] },
	650: { type: "land", pieces: [] },
	651: { type: "land", pieces: [] },
	652: { type: "land", pieces: [] },
	653: { type: "land", pieces: [] },
	654: { type: "land", pieces: [] },
	655: { type: "land", pieces: [] },
	656: { type: "land", pieces: [] },
	657: { type: "land", pieces: [] },
	658: { type: "land", pieces: [] },
	659: { type: "land", pieces: [] },
	660: { type: "land", pieces: [] },
	661: { type: "land", pieces: [] },
	662: { type: "land", pieces: [] },
	663: { type: "land", pieces: [] },
	664: { type: "land", pieces: [] },
	665: { type: "land", pieces: [] },
	666: { type: "land", pieces: [] },
	667: { type: "land", pieces: [] },
	668: { type: "land", pieces: [] },
	669: { type: "land", pieces: [] },
	670: { type: "land", pieces: [] },
	671: { type: "land", pieces: [] },
	672: { type: "land", pieces: [] },
	673: { type: "land", pieces: [] },
	674: { type: "land", pieces: [] },
	675: { type: "land", pieces: [] },
	676: { type: "land", pieces: [] },
	677: { type: "land", pieces: [] },
	678: { type: "land", pieces: [] },
	679: { type: "land", pieces: [] },
	680: { type: "land", pieces: [] },
	681: { type: "land", pieces: [] },
	682: { type: "land", pieces: [] },
	683: { type: "land", pieces: [] },
	684: { type: "land", pieces: [] },
	685: { type: "land", pieces: [] },
	686: { type: "land", pieces: [] },
	687: { type: "land", pieces: [] },
	688: { type: "land", pieces: [] },
	689: { type: "land", pieces: [] },
	690: { type: "land", pieces: [] },
	691: { type: "land", pieces: [] },
	692: { type: "land", pieces: [] },
	693: { type: "land", pieces: [] },
	694: { type: "land", pieces: [] },
	695: { type: "land", pieces: [] },
	696: { type: "land", pieces: [] },
	697: { type: "land", pieces: [] },
	698: { type: "land", pieces: [] },
	699: { type: "land", pieces: [] },
	700: { type: "land", pieces: [] },
	701: { type: "land", pieces: [] },
	702: { type: "land", pieces: [] },
	703: { type: "land", pieces: [] },
	704: { type: "land", pieces: [] },
	705: { type: "land", pieces: [] },
	706: { type: "land", pieces: [] },
	707: { type: "land", pieces: [] },
	708: { type: "land", pieces: [] },
	709: { type: "land", pieces: [] },
	710: { type: "land", pieces: [] },
	711: { type: "land", pieces: [] },
	712: { type: "land", pieces: [] },
	713: { type: "land", pieces: [] },
	714: { type: "land", pieces: [] },
	715: { type: "land", pieces: [] },
	716: { type: "land", pieces: [] },
	717: { type: "land", pieces: [] },
	718: { type: "land", pieces: [] },
	719: { type: "land", pieces: [] },
	720: { type: "land", pieces: [] },
	721: { type: "land", pieces: [] },
	722: { type: "land", pieces: [] },
	723: { type: "land", pieces: [] },
	724: { type: "land", pieces: [] },
	725: { type: "land", pieces: [] },
	726: { type: "land", pieces: [] }
};
