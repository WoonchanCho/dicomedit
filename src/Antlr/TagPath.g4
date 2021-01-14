/**
* TagPath grammar
*
* A grammar to represent tag paths to individual attributes in a simple direct notation.
* Tag paths in DE6 grammar are more general and complicated.
*
* Examples of valid tag-path strings are
*   (0010,0010)
*   (0009,1002)
*   (0028,1024)[0]/(0008,0016)    slash separating levels is NOT optional.
*   (0010,0010)[0] ( 0020 , 0020 ) [ 2 ](0030,0030)     insignificant spaces are ignored.
*
* Erroneously allows hexwords as item numbers. Filter them when walking the parse tree.
*
* We have to allow (1111,1111)[2222]/(1110,1110) where 2222 is both HEXWORD and POS_INTEGER
* but that also allows (1111,1111)[0222]/(1110,1110) which needs handling downstream.
*
* A grammar that both labels group, element and num and doesn't have confusion over hexword and pos_integer eludes me
* at the moment.
*/

grammar TagPath;

tagpath: (tag itemnumber? '/')* tag EOF ;

tag : '(' group ',' element ')';

group : HEXWORD ;
element : HEXWORD ;
itemnumber: LEFT_BRACKET num  RIGHT_BRACKET ;

// Need to allow hexwords here for when they are both matches. Filter erroneous hexwords when walking parse tree.
num : POS_INTEGER | HEXWORD ;

LEFT_BRACKET : '[' ;
RIGHT_BRACKET: ']' ;

// This is problematic since, 2222 for example, can match both HEXWORD and POS_INTEGER
// Put HEXWORD before POS_INTEGER. Lexar will use the first if both match.
// Then allow HEXDIGITS in itemnumbers.
HEXWORD   : HEXDIGIT HEXDIGIT HEXDIGIT HEXDIGIT ;
POS_INTEGER	:	'0' | ( NON_ZERO_DIGIT DIGIT*);

WS : [ \t]+ -> skip ; // skip spaces, tabs

fragment DIGIT	: ('0' | NON_ZERO_DIGIT);
fragment NON_ZERO_DIGIT : [1-9] ;
fragment HEXDIGIT  : [0-9A-Fa-f];
