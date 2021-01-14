
lexer grammar DE6Lexer;

PUBLIC_GROUP   : '(' EVEN_HEXWORD ;
PVT_GROUP      : '(' ODD_HEXWORD ;
PUBLIC_ELEMENT : HEXWORD ')';
//PVT_ELEMENT    : '[' ID ']' HEXDIGIT HEXDIGIT ')';
PVT_ELEMENT    : OPEN PVT_CREATOR_ID CLOSE HEXDIGIT HEXDIGIT ')';

HEXDIGIT_WILDCARD: [Xx] ;

TEST_SYMBOL :   '?';
TEST_SEPERATOR : ':';

ITEM_WILDCARD : [%] ;
SEQ_WILDCARD : [*+.] ;

WS : [ \t]+ -> skip ; // skip spaces, tabs

COMMA : ',' ;

ECHO : 'echo' ;
EQUALS	:      '=';
NOT_EQUALS :   '!=';
MATCHES :       '~';
NOT_MATCHES	:	'!~';
ASSIGN	:	':=';
ASSIGN_IF_EXISTS	:	'?=';
DESCRIBE:	'describe';
HIDDEN_TOKEN:	'hidden';
CONST_TOKEN:	'const';
IMMUTABLE_TOKEN	:	'immutable';
EXPORT  :	'export';
REMOVE_ALL_PRIVATE_TAGS  :	'removeAllPrivateTags';
VERSION_WORD  :	'version';
LEFT_BRACKET : '[' ;
RIGHT_BRACKET: ']' ;
SLASH   : '/' ;
DELETE_OPERATOR : '-' ;

//INTEGER	:	'0' | ('-'? '1'..'9' DIGIT*);
INTEGER	:	'0' | ('-'? NON_ZERO_DIGIT DIGIT*);
FLOAT:  '-'? ( '0' '.' DIGIT+ | NON_ZERO_DIGIT DIGIT* '.' DIGIT+) ;

ID  :	(LETTER|'_') (LETTER|DIGIT|'_')*
    ;

//IDENT  : LETTER (LETTER | DIGIT | '_')*;
//PVT_CREATOR_ID  : LETTER (LETTER | DIGIT | '_' | ' ')*;

COMMENT
    :   '//' ~('\n'|'\r')*
    ;

NEWLINE	:	'\r'? '\n';

STRING
    :  '"' ( ESC_SEQ | ~('\\'|'"') )* '"'
    ;

fragment ODD_HEXDIGIT  :	[13579bBdDfF] | [#];

fragment EVEN_HEXDIGIT :	[02468aAcCeE] | [@];

fragment HEXDIGIT : ODD_HEXDIGIT | EVEN_HEXDIGIT | HEXDIGIT_WILDCARD ;

fragment EVEN_HEXWORD : HEXDIGIT HEXDIGIT HEXDIGIT EVEN_HEXDIGIT ;
fragment ODD_HEXWORD  : HEXDIGIT HEXDIGIT HEXDIGIT ODD_HEXDIGIT ;
fragment HEXWORD      : HEXDIGIT HEXDIGIT HEXDIGIT HEXDIGIT ;

fragment LETTER : ('a'..'z' | 'A'..'Z') ;

fragment DIGIT	: ('0' | NON_ZERO_DIGIT);
fragment NON_ZERO_DIGIT : [1-9] ;

fragment ESC_SEQ
    :   '\\' ('b'|'t'|'n'|'f'|'r'|'"'|'\''|'\\')
    |   UNICODE_ESC
    |   OCTAL_ESC
    ;

fragment OCTAL_ESC
    :   '\\' ('0'..'3') ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7')
    ;

fragment UNICODE_ESC
    :   '\\' 'u' HEXDIGIT HEXDIGIT HEXDIGIT HEXDIGIT
    ;

// space thru ~, allowing '\'. disallowing ESC.
// except we have to disallow '?'. Parsing gets confused by '?' (TEST_SYMBOL) in condition.
// This is in the PVT_CREATOR_MODE so not sure why this matters.
fragment DICOM_DEFAULT_LO_CHAR
//    :   [\b-~]
    :   [\b->@-~]
    ;


OPEN: '{'  -> mode(PVT_CREATOR_MODE) ;

mode PVT_CREATOR_MODE ;
PVT_CREATOR_ID : LETTER ( LETTER | DIGIT | ' ' | '-' | '_' | '.' | ':')* ;
//PVT_CREATOR_ID : LETTER ( DICOM_DEFAULT_LO_CHAR)* ;
//PVT_CREATOR_ID : DICOM_DEFAULT_LO_CHAR+ ;
CLOSE : '}'  -> mode(DEFAULT_MODE) ;
