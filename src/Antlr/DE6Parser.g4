parser grammar DE6Parser;

options { tokenVocab=DE6Lexer; }   //use tokens from DE6Lexer.g4

script	:	separator? EOF
//	|	separator? version separator statement (separator statement)* separator? EOF
	|	separator? statement (separator statement)* separator? EOF
	;

separator
	:	(COMMENT? NEWLINE)+
	;

statement
	:	action
//	|	constraint action
	|	conditional_statement
	|	description
	|	export_stmt
	|	removeAllPrivateTags
	|	version
	;

action
	:	assignment
	|	assign_if_exists
	|	deletion
	|	initialization
	|   method
	|	echo
    ;

assign_if_exists: lvalue ASSIGN_IF_EXISTS value;

assignment
	:	lvalue ASSIGN value
//	|	TAG ':=' NEW ID
//	|	TAG ':=' NEW ID LEFT termlist RIGHT
	;

// split the lvalues into subtype to better leverage the parsing.
lvalue
//	:	public_tag     # publicTagLvalue
//	|	pvt_tag        # pvtTagLvalue
//	|	sequence       # sequeneLvalue
	:	tagpath       # tagpathLvalue
	;

value	:	term
	;

term
	:	number         # numberTerm
    |	STRING         # stringTerm
	|	tagpath        # tagPathTerm
	|	function_stmt  # functionTerm
	|	variable       # idTerm
	;

variable : ID ;

number : INTEGER # intvalue
       | FLOAT   # floatvalue;


termlist
	:	term (COMMA term)*
	;

method
    : ID '[' termlist? ']'
    ;

function_stmt
    : ID '[' termlist? ']'
    ;

deletion
	: DELETE_OPERATOR lvalue
	;

echo
    :	ECHO value
	|	ECHO
	;

conditional_statement :
    (condition '?' action) (':' action)?;

condition
	:	value conditionOperator value ;

conditionOperator
    :   EQUALS | MATCHES | NOT_EQUALS | NOT_MATCHES;

initialization
	:	ID ASSIGN value
	;

description
	:	DESCRIBE ID STRING           # describeNamedVariable
	|	DESCRIBE ID HIDDEN_TOKEN     # describeHiddenVariable
	|	DESCRIBE ID CONST_TOKEN      # describeConstantVariable
	|	DESCRIBE ID IMMUTABLE_TOKEN  # describeImmutableVariable
	;

export_stmt : EXPORT ID STRING ;

removeAllPrivateTags : REMOVE_ALL_PRIVATE_TAGS ;

version: VERSION_WORD STRING ;

tag
    : public_tag
    | pvt_tag
    ;

element: public_tag | pvt_tag ;
seq_element: (element itemnumber?) | seq_wildcard ;

//tagpath: element | ((seq_element '/')+ element) ;
tagpath: (element | seq_element) | ((seq_element '/')+ (element | seq_element)) ;

// had to move this into itemnumber parse rule.  INTEGER confused the number parse rule.
//ITEMNUMBER: INTEGER | ITEM_WILDCARD ;
itemnumber: LEFT_BRACKET (INTEGER | ITEM_WILDCARD) RIGHT_BRACKET ;

seq_wildcard: SEQ_WILDCARD;

public_tag : PUBLIC_GROUP ',' PUBLIC_ELEMENT ;
pvt_tag    : PVT_GROUP ',' PVT_ELEMENT ;

