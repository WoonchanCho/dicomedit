// Generated from ../src/Antlr/TagPath.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TagPathListener from './TagPathListener.js';
import TagPathVisitor from './TagPathVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u000b-\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0005\u0002\u0011\n\u0002\u0003\u0002\u0003",
    "\u0002\u0007\u0002\u0015\n\u0002\f\u0002\u000e\u0002\u0018\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0002\u0002\b\u0002\u0004\u0006\b\n\f\u0002",
    "\u0003\u0003\u0002\t\n\u0002(\u0002\u0016\u0003\u0002\u0002\u0002\u0004",
    "\u001c\u0003\u0002\u0002\u0002\u0006\"\u0003\u0002\u0002\u0002\b$\u0003",
    "\u0002\u0002\u0002\n&\u0003\u0002\u0002\u0002\f*\u0003\u0002\u0002\u0002",
    "\u000e\u0010\u0005\u0004\u0003\u0002\u000f\u0011\u0005\n\u0006\u0002",
    "\u0010\u000f\u0003\u0002\u0002\u0002\u0010\u0011\u0003\u0002\u0002\u0002",
    "\u0011\u0012\u0003\u0002\u0002\u0002\u0012\u0013\u0007\u0003\u0002\u0002",
    "\u0013\u0015\u0003\u0002\u0002\u0002\u0014\u000e\u0003\u0002\u0002\u0002",
    "\u0015\u0018\u0003\u0002\u0002\u0002\u0016\u0014\u0003\u0002\u0002\u0002",
    "\u0016\u0017\u0003\u0002\u0002\u0002\u0017\u0019\u0003\u0002\u0002\u0002",
    "\u0018\u0016\u0003\u0002\u0002\u0002\u0019\u001a\u0005\u0004\u0003\u0002",
    "\u001a\u001b\u0007\u0002\u0002\u0003\u001b\u0003\u0003\u0002\u0002\u0002",
    "\u001c\u001d\u0007\u0004\u0002\u0002\u001d\u001e\u0005\u0006\u0004\u0002",
    "\u001e\u001f\u0007\u0005\u0002\u0002\u001f \u0005\b\u0005\u0002 !\u0007",
    "\u0006\u0002\u0002!\u0005\u0003\u0002\u0002\u0002\"#\u0007\t\u0002\u0002",
    "#\u0007\u0003\u0002\u0002\u0002$%\u0007\t\u0002\u0002%\t\u0003\u0002",
    "\u0002\u0002&\'\u0007\u0007\u0002\u0002\'(\u0005\f\u0007\u0002()\u0007",
    "\b\u0002\u0002)\u000b\u0003\u0002\u0002\u0002*+\t\u0002\u0002\u0002",
    "+\r\u0003\u0002\u0002\u0002\u0004\u0010\u0016"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class TagPathParser extends antlr4.Parser {

    static grammarFileName = "TagPath.g4";
    static literalNames = [ null, "'/'", "'('", "','", "')'", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, "LEFT_BRACKET", 
                             "RIGHT_BRACKET", "HEXWORD", "POS_INTEGER", 
                             "WS" ];
    static ruleNames = [ "tagpath", "tag", "group", "element", "itemnumber", 
                         "num" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TagPathParser.ruleNames;
        this.literalNames = TagPathParser.literalNames;
        this.symbolicNames = TagPathParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	tagpath() {
	    let localctx = new TagpathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TagPathParser.RULE_tagpath);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 12;
	                this.tag();
	                this.state = 14;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===TagPathParser.LEFT_BRACKET) {
	                    this.state = 13;
	                    this.itemnumber();
	                }

	                this.state = 16;
	                this.match(TagPathParser.T__0); 
	            }
	            this.state = 22;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	        this.state = 23;
	        this.tag();
	        this.state = 24;
	        this.match(TagPathParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tag() {
	    let localctx = new TagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TagPathParser.RULE_tag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(TagPathParser.T__1);
	        this.state = 27;
	        this.group();
	        this.state = 28;
	        this.match(TagPathParser.T__2);
	        this.state = 29;
	        this.element();
	        this.state = 30;
	        this.match(TagPathParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TagPathParser.RULE_group);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(TagPathParser.HEXWORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TagPathParser.RULE_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(TagPathParser.HEXWORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	itemnumber() {
	    let localctx = new ItemnumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TagPathParser.RULE_itemnumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(TagPathParser.LEFT_BRACKET);
	        this.state = 37;
	        this.num();
	        this.state = 38;
	        this.match(TagPathParser.RIGHT_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	num() {
	    let localctx = new NumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TagPathParser.RULE_num);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        _la = this._input.LA(1);
	        if(!(_la===TagPathParser.HEXWORD || _la===TagPathParser.POS_INTEGER)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TagPathParser.EOF = antlr4.Token.EOF;
TagPathParser.T__0 = 1;
TagPathParser.T__1 = 2;
TagPathParser.T__2 = 3;
TagPathParser.T__3 = 4;
TagPathParser.LEFT_BRACKET = 5;
TagPathParser.RIGHT_BRACKET = 6;
TagPathParser.HEXWORD = 7;
TagPathParser.POS_INTEGER = 8;
TagPathParser.WS = 9;

TagPathParser.RULE_tagpath = 0;
TagPathParser.RULE_tag = 1;
TagPathParser.RULE_group = 2;
TagPathParser.RULE_element = 3;
TagPathParser.RULE_itemnumber = 4;
TagPathParser.RULE_num = 5;

class TagpathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TagPathParser.RULE_tagpath;
    }

	tag = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TagContext);
	    } else {
	        return this.getTypedRuleContext(TagContext,i);
	    }
	};

	EOF() {
	    return this.getToken(TagPathParser.EOF, 0);
	};

	itemnumber = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemnumberContext);
	    } else {
	        return this.getTypedRuleContext(ItemnumberContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TagPathListener ) {
	        listener.enterTagpath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TagPathListener ) {
	        listener.exitTagpath(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TagPathVisitor ) {
	        return visitor.visitTagpath(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TagPathParser.RULE_tag;
    }

	group() {
	    return this.getTypedRuleContext(GroupContext,0);
	};

	element() {
	    return this.getTypedRuleContext(ElementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TagPathListener ) {
	        listener.enterTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TagPathListener ) {
	        listener.exitTag(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TagPathVisitor ) {
	        return visitor.visitTag(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TagPathParser.RULE_group;
    }

	HEXWORD() {
	    return this.getToken(TagPathParser.HEXWORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TagPathListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TagPathListener ) {
	        listener.exitGroup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TagPathVisitor ) {
	        return visitor.visitGroup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TagPathParser.RULE_element;
    }

	HEXWORD() {
	    return this.getToken(TagPathParser.HEXWORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TagPathListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TagPathListener ) {
	        listener.exitElement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TagPathVisitor ) {
	        return visitor.visitElement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ItemnumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TagPathParser.RULE_itemnumber;
    }

	LEFT_BRACKET() {
	    return this.getToken(TagPathParser.LEFT_BRACKET, 0);
	};

	num() {
	    return this.getTypedRuleContext(NumContext,0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(TagPathParser.RIGHT_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TagPathListener ) {
	        listener.enterItemnumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TagPathListener ) {
	        listener.exitItemnumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TagPathVisitor ) {
	        return visitor.visitItemnumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TagPathParser.RULE_num;
    }

	POS_INTEGER() {
	    return this.getToken(TagPathParser.POS_INTEGER, 0);
	};

	HEXWORD() {
	    return this.getToken(TagPathParser.HEXWORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TagPathListener ) {
	        listener.enterNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TagPathListener ) {
	        listener.exitNum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TagPathVisitor ) {
	        return visitor.visitNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TagPathParser.TagpathContext = TagpathContext; 
TagPathParser.TagContext = TagContext; 
TagPathParser.GroupContext = GroupContext; 
TagPathParser.ElementContext = ElementContext; 
TagPathParser.ItemnumberContext = ItemnumberContext; 
TagPathParser.NumContext = NumContext; 
