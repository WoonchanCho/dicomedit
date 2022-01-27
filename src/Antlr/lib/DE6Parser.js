// Generated from ../src/Antlr/DE6Parser.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DE6ParserListener from './DE6ParserListener.js';
import DE6ParserVisitor from './DE6ParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003(\u0100\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0003\u0002\u0005\u0002D\n",
    "\u0002\u0003\u0002\u0003\u0002\u0005\u0002H\n\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0007\u0002N\n\u0002\f\u0002\u000e\u0002",
    "Q\u000b\u0002\u0003\u0002\u0005\u0002T\n\u0002\u0003\u0002\u0003\u0002",
    "\u0005\u0002X\n\u0002\u0003\u0003\u0005\u0003[\n\u0003\u0003\u0003\u0006",
    "\u0003^\n\u0003\r\u0003\u000e\u0003_\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004h\n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "p\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u0083\n\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0005\f\u0089\n\f\u0003\r\u0003\r\u0003",
    "\r\u0007\r\u008e\n\r\f\r\u000e\r\u0091\u000b\r\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0005\u000e\u0096\n\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u009d\n\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0005\u0011\u00a7\n\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00af\n\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u00c7\n",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0005",
    "\u001a\u00d4\n\u001a\u0003\u001b\u0003\u001b\u0005\u001b\u00d8\n\u001b",
    "\u0003\u001c\u0003\u001c\u0005\u001c\u00dc\n\u001c\u0003\u001c\u0005",
    "\u001c\u00df\n\u001c\u0003\u001d\u0003\u001d\u0005\u001d\u00e3\n\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0006\u001d\u00e8\n\u001d\r\u001d",
    "\u000e\u001d\u00e9\u0003\u001d\u0003\u001d\u0005\u001d\u00ee\n\u001d",
    "\u0005\u001d\u00f0\n\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003!\u0003",
    "!\u0003!\u0003!\u0003!\u0002\u0002\"\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@\u0002\u0004",
    "\u0003\u0002\u000f\u0012\u0004\u0002\n\n  \u0002\u0105\u0002W\u0003",
    "\u0002\u0002\u0002\u0004]\u0003\u0002\u0002\u0002\u0006g\u0003\u0002",
    "\u0002\u0002\bo\u0003\u0002\u0002\u0002\nq\u0003\u0002\u0002\u0002\f",
    "u\u0003\u0002\u0002\u0002\u000ey\u0003\u0002\u0002\u0002\u0010{\u0003",
    "\u0002\u0002\u0002\u0012\u0082\u0003\u0002\u0002\u0002\u0014\u0084\u0003",
    "\u0002\u0002\u0002\u0016\u0088\u0003\u0002\u0002\u0002\u0018\u008a\u0003",
    "\u0002\u0002\u0002\u001a\u0092\u0003\u0002\u0002\u0002\u001c\u0099\u0003",
    "\u0002\u0002\u0002\u001e\u00a0\u0003\u0002\u0002\u0002 \u00a6\u0003",
    "\u0002\u0002\u0002\"\u00a8\u0003\u0002\u0002\u0002$\u00b0\u0003\u0002",
    "\u0002\u0002&\u00b4\u0003\u0002\u0002\u0002(\u00b6\u0003\u0002\u0002",
    "\u0002*\u00c6\u0003\u0002\u0002\u0002,\u00c8\u0003\u0002\u0002\u0002",
    ".\u00cc\u0003\u0002\u0002\u00020\u00ce\u0003\u0002\u0002\u00022\u00d3",
    "\u0003\u0002\u0002\u00024\u00d7\u0003\u0002\u0002\u00026\u00de\u0003",
    "\u0002\u0002\u00028\u00ef\u0003\u0002\u0002\u0002:\u00f1\u0003\u0002",
    "\u0002\u0002<\u00f5\u0003\u0002\u0002\u0002>\u00f7\u0003\u0002\u0002",
    "\u0002@\u00fb\u0003\u0002\u0002\u0002BD\u0005\u0004\u0003\u0002CB\u0003",
    "\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002",
    "EX\u0007\u0002\u0002\u0003FH\u0005\u0004\u0003\u0002GF\u0003\u0002\u0002",
    "\u0002GH\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IO\u0005\u0006",
    "\u0004\u0002JK\u0005\u0004\u0003\u0002KL\u0005\u0006\u0004\u0002LN\u0003",
    "\u0002\u0002\u0002MJ\u0003\u0002\u0002\u0002NQ\u0003\u0002\u0002\u0002",
    "OM\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002PS\u0003\u0002\u0002",
    "\u0002QO\u0003\u0002\u0002\u0002RT\u0005\u0004\u0003\u0002SR\u0003\u0002",
    "\u0002\u0002ST\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002UV\u0007",
    "\u0002\u0002\u0003VX\u0003\u0002\u0002\u0002WC\u0003\u0002\u0002\u0002",
    "WG\u0003\u0002\u0002\u0002X\u0003\u0003\u0002\u0002\u0002Y[\u0007#\u0002",
    "\u0002ZY\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[\\\u0003",
    "\u0002\u0002\u0002\\^\u0007$\u0002\u0002]Z\u0003\u0002\u0002\u0002^",
    "_\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002",
    "\u0002`\u0005\u0003\u0002\u0002\u0002ah\u0005\b\u0005\u0002bh\u0005",
    "\"\u0012\u0002ch\u0005*\u0016\u0002dh\u0005,\u0017\u0002eh\u0005.\u0018",
    "\u0002fh\u00050\u0019\u0002ga\u0003\u0002\u0002\u0002gb\u0003\u0002",
    "\u0002\u0002gc\u0003\u0002\u0002\u0002gd\u0003\u0002\u0002\u0002ge\u0003",
    "\u0002\u0002\u0002gf\u0003\u0002\u0002\u0002h\u0007\u0003\u0002\u0002",
    "\u0002ip\u0005\f\u0007\u0002jp\u0005\n\u0006\u0002kp\u0005\u001e\u0010",
    "\u0002lp\u0005(\u0015\u0002mp\u0005\u001a\u000e\u0002np\u0005 \u0011",
    "\u0002oi\u0003\u0002\u0002\u0002oj\u0003\u0002\u0002\u0002ok\u0003\u0002",
    "\u0002\u0002ol\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002on\u0003",
    "\u0002\u0002\u0002p\t\u0003\u0002\u0002\u0002qr\u0005\u000e\b\u0002",
    "rs\u0007\u0014\u0002\u0002st\u0005\u0010\t\u0002t\u000b\u0003\u0002",
    "\u0002\u0002uv\u0005\u000e\b\u0002vw\u0007\u0013\u0002\u0002wx\u0005",
    "\u0010\t\u0002x\r\u0003\u0002\u0002\u0002yz\u00058\u001d\u0002z\u000f",
    "\u0003\u0002\u0002\u0002{|\u0005\u0012\n\u0002|\u0011\u0003\u0002\u0002",
    "\u0002}\u0083\u0005\u0016\f\u0002~\u0083\u0007%\u0002\u0002\u007f\u0083",
    "\u00058\u001d\u0002\u0080\u0083\u0005\u001c\u000f\u0002\u0081\u0083",
    "\u0005\u0014\u000b\u0002\u0082}\u0003\u0002\u0002\u0002\u0082~\u0003",
    "\u0002\u0002\u0002\u0082\u007f\u0003\u0002\u0002\u0002\u0082\u0080\u0003",
    "\u0002\u0002\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0083\u0013\u0003",
    "\u0002\u0002\u0002\u0084\u0085\u0007\"\u0002\u0002\u0085\u0015\u0003",
    "\u0002\u0002\u0002\u0086\u0089\u0007 \u0002\u0002\u0087\u0089\u0007",
    "!\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0088\u0087\u0003",
    "\u0002\u0002\u0002\u0089\u0017\u0003\u0002\u0002\u0002\u008a\u008f\u0005",
    "\u0012\n\u0002\u008b\u008c\u0007\r\u0002\u0002\u008c\u008e\u0005\u0012",
    "\n\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008e\u0091\u0003\u0002",
    "\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002",
    "\u0002\u0002\u0090\u0019\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002",
    "\u0002\u0002\u0092\u0093\u0007\"\u0002\u0002\u0093\u0095\u0007\u001c",
    "\u0002\u0002\u0094\u0096\u0005\u0018\r\u0002\u0095\u0094\u0003\u0002",
    "\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002",
    "\u0002\u0002\u0097\u0098\u0007\u001d\u0002\u0002\u0098\u001b\u0003\u0002",
    "\u0002\u0002\u0099\u009a\u0007\"\u0002\u0002\u009a\u009c\u0007\u001c",
    "\u0002\u0002\u009b\u009d\u0005\u0018\r\u0002\u009c\u009b\u0003\u0002",
    "\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002",
    "\u0002\u0002\u009e\u009f\u0007\u001d\u0002\u0002\u009f\u001d\u0003\u0002",
    "\u0002\u0002\u00a0\u00a1\u0007\u001f\u0002\u0002\u00a1\u00a2\u0005\u000e",
    "\b\u0002\u00a2\u001f\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007\u000e",
    "\u0002\u0002\u00a4\u00a7\u0005\u0010\t\u0002\u00a5\u00a7\u0007\u000e",
    "\u0002\u0002\u00a6\u00a3\u0003\u0002\u0002\u0002\u00a6\u00a5\u0003\u0002",
    "\u0002\u0002\u00a7!\u0003\u0002\u0002\u0002\u00a8\u00a9\u0005$\u0013",
    "\u0002\u00a9\u00aa\u0007\b\u0002\u0002\u00aa\u00ab\u0005\b\u0005\u0002",
    "\u00ab\u00ae\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007\t\u0002\u0002",
    "\u00ad\u00af\u0005\b\u0005\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002",
    "\u00ae\u00af\u0003\u0002\u0002\u0002\u00af#\u0003\u0002\u0002\u0002",
    "\u00b0\u00b1\u0005\u0010\t\u0002\u00b1\u00b2\u0005&\u0014\u0002\u00b2",
    "\u00b3\u0005\u0010\t\u0002\u00b3%\u0003\u0002\u0002\u0002\u00b4\u00b5",
    "\t\u0002\u0002\u0002\u00b5\'\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007",
    "\"\u0002\u0002\u00b7\u00b8\u0007\u0013\u0002\u0002\u00b8\u00b9\u0005",
    "\u0010\t\u0002\u00b9)\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\u0015",
    "\u0002\u0002\u00bb\u00bc\u0007\"\u0002\u0002\u00bc\u00c7\u0007%\u0002",
    "\u0002\u00bd\u00be\u0007\u0015\u0002\u0002\u00be\u00bf\u0007\"\u0002",
    "\u0002\u00bf\u00c7\u0007\u0016\u0002\u0002\u00c0\u00c1\u0007\u0015\u0002",
    "\u0002\u00c1\u00c2\u0007\"\u0002\u0002\u00c2\u00c7\u0007\u0017\u0002",
    "\u0002\u00c3\u00c4\u0007\u0015\u0002\u0002\u00c4\u00c5\u0007\"\u0002",
    "\u0002\u00c5\u00c7\u0007\u0018\u0002\u0002\u00c6\u00ba\u0003\u0002\u0002",
    "\u0002\u00c6\u00bd\u0003\u0002\u0002\u0002\u00c6\u00c0\u0003\u0002\u0002",
    "\u0002\u00c6\u00c3\u0003\u0002\u0002\u0002\u00c7+\u0003\u0002\u0002",
    "\u0002\u00c8\u00c9\u0007\u0019\u0002\u0002\u00c9\u00ca\u0007\"\u0002",
    "\u0002\u00ca\u00cb\u0007%\u0002\u0002\u00cb-\u0003\u0002\u0002\u0002",
    "\u00cc\u00cd\u0007\u001a\u0002\u0002\u00cd/\u0003\u0002\u0002\u0002",
    "\u00ce\u00cf\u0007\u001b\u0002\u0002\u00cf\u00d0\u0007%\u0002\u0002",
    "\u00d01\u0003\u0002\u0002\u0002\u00d1\u00d4\u0005> \u0002\u00d2\u00d4",
    "\u0005@!\u0002\u00d3\u00d1\u0003\u0002\u0002\u0002\u00d3\u00d2\u0003",
    "\u0002\u0002\u0002\u00d43\u0003\u0002\u0002\u0002\u00d5\u00d8\u0005",
    "> \u0002\u00d6\u00d8\u0005@!\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002",
    "\u00d7\u00d6\u0003\u0002\u0002\u0002\u00d85\u0003\u0002\u0002\u0002",
    "\u00d9\u00db\u00054\u001b\u0002\u00da\u00dc\u0005:\u001e\u0002\u00db",
    "\u00da\u0003\u0002\u0002\u0002\u00db\u00dc\u0003\u0002\u0002\u0002\u00dc",
    "\u00df\u0003\u0002\u0002\u0002\u00dd\u00df\u0005<\u001f\u0002\u00de",
    "\u00d9\u0003\u0002\u0002\u0002\u00de\u00dd\u0003\u0002\u0002\u0002\u00df",
    "7\u0003\u0002\u0002\u0002\u00e0\u00e3\u00054\u001b\u0002\u00e1\u00e3",
    "\u00056\u001c\u0002\u00e2\u00e0\u0003\u0002\u0002\u0002\u00e2\u00e1",
    "\u0003\u0002\u0002\u0002\u00e3\u00f0\u0003\u0002\u0002\u0002\u00e4\u00e5",
    "\u00056\u001c\u0002\u00e5\u00e6\u0007\u001e\u0002\u0002\u00e6\u00e8",
    "\u0003\u0002\u0002\u0002\u00e7\u00e4\u0003\u0002\u0002\u0002\u00e8\u00e9",
    "\u0003\u0002\u0002\u0002\u00e9\u00e7\u0003\u0002\u0002\u0002\u00e9\u00ea",
    "\u0003\u0002\u0002\u0002\u00ea\u00ed\u0003\u0002\u0002\u0002\u00eb\u00ee",
    "\u00054\u001b\u0002\u00ec\u00ee\u00056\u001c\u0002\u00ed\u00eb\u0003",
    "\u0002\u0002\u0002\u00ed\u00ec\u0003\u0002\u0002\u0002\u00ee\u00f0\u0003",
    "\u0002\u0002\u0002\u00ef\u00e2\u0003\u0002\u0002\u0002\u00ef\u00e7\u0003",
    "\u0002\u0002\u0002\u00f09\u0003\u0002\u0002\u0002\u00f1\u00f2\u0007",
    "\u001c\u0002\u0002\u00f2\u00f3\t\u0003\u0002\u0002\u00f3\u00f4\u0007",
    "\u001d\u0002\u0002\u00f4;\u0003\u0002\u0002\u0002\u00f5\u00f6\u0007",
    "\u000b\u0002\u0002\u00f6=\u0003\u0002\u0002\u0002\u00f7\u00f8\u0007",
    "\u0003\u0002\u0002\u00f8\u00f9\u0007\r\u0002\u0002\u00f9\u00fa\u0007",
    "\u0005\u0002\u0002\u00fa?\u0003\u0002\u0002\u0002\u00fb\u00fc\u0007",
    "\u0004\u0002\u0002\u00fc\u00fd\u0007\r\u0002\u0002\u00fd\u00fe\u0007",
    "\u0006\u0002\u0002\u00feA\u0003\u0002\u0002\u0002\u001bCGOSWZ_go\u0082",
    "\u0088\u008f\u0095\u009c\u00a6\u00ae\u00c6\u00d3\u00d7\u00db\u00de\u00e2",
    "\u00e9\u00ed\u00ef"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DE6Parser extends antlr4.Parser {

    static grammarFileName = "DE6Parser.g4";
    static literalNames = [ null, null, null, null, null, null, "'?'", "':'", 
                            null, null, null, "','", "'echo'", "'='", "'!='", 
                            "'~'", "'!~'", "':='", "'?='", "'describe'", 
                            "'hidden'", "'const'", "'immutable'", "'export'", 
                            "'removeAllPrivateTags'", "'version'", "'['", 
                            "']'", "'/'", "'-'", null, null, null, null, 
                            null, null, "'{'", null, "'}'" ];
    static symbolicNames = [ null, "PUBLIC_GROUP", "PVT_GROUP", "PUBLIC_ELEMENT", 
                             "PVT_ELEMENT", "HEXDIGIT_WILDCARD", "TEST_SYMBOL", 
                             "TEST_SEPERATOR", "ITEM_WILDCARD", "SEQ_WILDCARD", 
                             "WS", "COMMA", "ECHO", "EQUALS", "NOT_EQUALS", 
                             "MATCHES", "NOT_MATCHES", "ASSIGN", "ASSIGN_IF_EXISTS", 
                             "DESCRIBE", "HIDDEN_TOKEN", "CONST_TOKEN", 
                             "IMMUTABLE_TOKEN", "EXPORT", "REMOVE_ALL_PRIVATE_TAGS", 
                             "VERSION_WORD", "LEFT_BRACKET", "RIGHT_BRACKET", 
                             "SLASH", "DELETE_OPERATOR", "INTEGER", "FLOAT", 
                             "ID", "COMMENT", "NEWLINE", "STRING", "OPEN", 
                             "PVT_CREATOR_ID", "CLOSE" ];
    static ruleNames = [ "script", "separator", "statement", "action", "assign_if_exists", 
                         "assignment", "lvalue", "value", "term", "variable", 
                         "number", "termlist", "method", "function_stmt", 
                         "deletion", "echo", "conditional_statement", "condition", 
                         "conditionOperator", "initialization", "description", 
                         "export_stmt", "removeAllPrivateTags", "version", 
                         "tag", "element", "seq_element", "tagpath", "itemnumber", 
                         "seq_wildcard", "public_tag", "pvt_tag" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DE6Parser.ruleNames;
        this.literalNames = DE6Parser.literalNames;
        this.symbolicNames = DE6Parser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	script() {
	    let localctx = new ScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DE6Parser.RULE_script);
	    var _la = 0; // Token type
	    try {
	        this.state = 85;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DE6Parser.COMMENT || _la===DE6Parser.NEWLINE) {
	                this.state = 64;
	                this.separator();
	            }

	            this.state = 67;
	            this.match(DE6Parser.EOF);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DE6Parser.COMMENT || _la===DE6Parser.NEWLINE) {
	                this.state = 68;
	                this.separator();
	            }

	            this.state = 71;
	            this.statement();
	            this.state = 77;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 72;
	                    this.separator();
	                    this.state = 73;
	                    this.statement(); 
	                }
	                this.state = 79;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	            }

	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DE6Parser.COMMENT || _la===DE6Parser.NEWLINE) {
	                this.state = 80;
	                this.separator();
	            }

	            this.state = 83;
	            this.match(DE6Parser.EOF);
	            break;

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



	separator() {
	    let localctx = new SeparatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DE6Parser.RULE_separator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DE6Parser.COMMENT) {
	                this.state = 87;
	                this.match(DE6Parser.COMMENT);
	            }

	            this.state = 90;
	            this.match(DE6Parser.NEWLINE);
	            this.state = 93; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===DE6Parser.COMMENT || _la===DE6Parser.NEWLINE);
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DE6Parser.RULE_statement);
	    try {
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this.action();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            this.conditional_statement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 97;
	            this.description();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 98;
	            this.export_stmt();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 99;
	            this.removeAllPrivateTags();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 100;
	            this.version();
	            break;

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



	action() {
	    let localctx = new ActionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DE6Parser.RULE_action);
	    try {
	        this.state = 109;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 103;
	            this.assignment();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 104;
	            this.assign_if_exists();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 105;
	            this.deletion();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 106;
	            this.initialization();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 107;
	            this.method();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 108;
	            this.echo();
	            break;

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



	assign_if_exists() {
	    let localctx = new Assign_if_existsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DE6Parser.RULE_assign_if_exists);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.lvalue();
	        this.state = 112;
	        this.match(DE6Parser.ASSIGN_IF_EXISTS);
	        this.state = 113;
	        this.value();
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DE6Parser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.lvalue();
	        this.state = 116;
	        this.match(DE6Parser.ASSIGN);
	        this.state = 117;
	        this.value();
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



	lvalue() {
	    let localctx = new LvalueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DE6Parser.RULE_lvalue);
	    try {
	        localctx = new TagpathLvalueContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.tagpath();
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DE6Parser.RULE_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.term();
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DE6Parser.RULE_term);
	    try {
	        this.state = 128;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NumberTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 123;
	            this.number();
	            break;

	        case 2:
	            localctx = new StringTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 124;
	            this.match(DE6Parser.STRING);
	            break;

	        case 3:
	            localctx = new TagPathTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 125;
	            this.tagpath();
	            break;

	        case 4:
	            localctx = new FunctionTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 126;
	            this.function_stmt();
	            break;

	        case 5:
	            localctx = new IdTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 127;
	            this.variable();
	            break;

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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DE6Parser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(DE6Parser.ID);
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DE6Parser.RULE_number);
	    try {
	        this.state = 134;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DE6Parser.INTEGER:
	            localctx = new IntvalueContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 132;
	            this.match(DE6Parser.INTEGER);
	            break;
	        case DE6Parser.FLOAT:
	            localctx = new FloatvalueContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 133;
	            this.match(DE6Parser.FLOAT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	termlist() {
	    let localctx = new TermlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, DE6Parser.RULE_termlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.term();
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DE6Parser.COMMA) {
	            this.state = 137;
	            this.match(DE6Parser.COMMA);
	            this.state = 138;
	            this.term();
	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	method() {
	    let localctx = new MethodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, DE6Parser.RULE_method);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.match(DE6Parser.ID);
	        this.state = 145;
	        this.match(DE6Parser.LEFT_BRACKET);
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DE6Parser.PUBLIC_GROUP) | (1 << DE6Parser.PVT_GROUP) | (1 << DE6Parser.SEQ_WILDCARD) | (1 << DE6Parser.INTEGER) | (1 << DE6Parser.FLOAT))) !== 0) || _la===DE6Parser.ID || _la===DE6Parser.STRING) {
	            this.state = 146;
	            this.termlist();
	        }

	        this.state = 149;
	        this.match(DE6Parser.RIGHT_BRACKET);
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



	function_stmt() {
	    let localctx = new Function_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, DE6Parser.RULE_function_stmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(DE6Parser.ID);
	        this.state = 152;
	        this.match(DE6Parser.LEFT_BRACKET);
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DE6Parser.PUBLIC_GROUP) | (1 << DE6Parser.PVT_GROUP) | (1 << DE6Parser.SEQ_WILDCARD) | (1 << DE6Parser.INTEGER) | (1 << DE6Parser.FLOAT))) !== 0) || _la===DE6Parser.ID || _la===DE6Parser.STRING) {
	            this.state = 153;
	            this.termlist();
	        }

	        this.state = 156;
	        this.match(DE6Parser.RIGHT_BRACKET);
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



	deletion() {
	    let localctx = new DeletionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, DE6Parser.RULE_deletion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(DE6Parser.DELETE_OPERATOR);
	        this.state = 159;
	        this.lvalue();
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



	echo() {
	    let localctx = new EchoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, DE6Parser.RULE_echo);
	    try {
	        this.state = 164;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 161;
	            this.match(DE6Parser.ECHO);
	            this.state = 162;
	            this.value();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 163;
	            this.match(DE6Parser.ECHO);
	            break;

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



	conditional_statement() {
	    let localctx = new Conditional_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, DE6Parser.RULE_conditional_statement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.condition();
	        this.state = 167;
	        this.match(DE6Parser.TEST_SYMBOL);
	        this.state = 168;
	        this.action();
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===DE6Parser.TEST_SEPERATOR) {
	            this.state = 170;
	            this.match(DE6Parser.TEST_SEPERATOR);
	            this.state = 171;
	            this.action();
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, DE6Parser.RULE_condition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.value();
	        this.state = 175;
	        this.conditionOperator();
	        this.state = 176;
	        this.value();
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



	conditionOperator() {
	    let localctx = new ConditionOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, DE6Parser.RULE_conditionOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DE6Parser.EQUALS) | (1 << DE6Parser.NOT_EQUALS) | (1 << DE6Parser.MATCHES) | (1 << DE6Parser.NOT_MATCHES))) !== 0))) {
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



	initialization() {
	    let localctx = new InitializationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, DE6Parser.RULE_initialization);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.match(DE6Parser.ID);
	        this.state = 181;
	        this.match(DE6Parser.ASSIGN);
	        this.state = 182;
	        this.value();
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



	description() {
	    let localctx = new DescriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, DE6Parser.RULE_description);
	    try {
	        this.state = 196;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DescribeNamedVariableContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 184;
	            this.match(DE6Parser.DESCRIBE);
	            this.state = 185;
	            this.match(DE6Parser.ID);
	            this.state = 186;
	            this.match(DE6Parser.STRING);
	            break;

	        case 2:
	            localctx = new DescribeHiddenVariableContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 187;
	            this.match(DE6Parser.DESCRIBE);
	            this.state = 188;
	            this.match(DE6Parser.ID);
	            this.state = 189;
	            this.match(DE6Parser.HIDDEN_TOKEN);
	            break;

	        case 3:
	            localctx = new DescribeConstantVariableContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 190;
	            this.match(DE6Parser.DESCRIBE);
	            this.state = 191;
	            this.match(DE6Parser.ID);
	            this.state = 192;
	            this.match(DE6Parser.CONST_TOKEN);
	            break;

	        case 4:
	            localctx = new DescribeImmutableVariableContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 193;
	            this.match(DE6Parser.DESCRIBE);
	            this.state = 194;
	            this.match(DE6Parser.ID);
	            this.state = 195;
	            this.match(DE6Parser.IMMUTABLE_TOKEN);
	            break;

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



	export_stmt() {
	    let localctx = new Export_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, DE6Parser.RULE_export_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.match(DE6Parser.EXPORT);
	        this.state = 199;
	        this.match(DE6Parser.ID);
	        this.state = 200;
	        this.match(DE6Parser.STRING);
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



	removeAllPrivateTags() {
	    let localctx = new RemoveAllPrivateTagsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, DE6Parser.RULE_removeAllPrivateTags);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(DE6Parser.REMOVE_ALL_PRIVATE_TAGS);
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



	version() {
	    let localctx = new VersionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, DE6Parser.RULE_version);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.match(DE6Parser.VERSION_WORD);
	        this.state = 205;
	        this.match(DE6Parser.STRING);
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
	    this.enterRule(localctx, 48, DE6Parser.RULE_tag);
	    try {
	        this.state = 209;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DE6Parser.PUBLIC_GROUP:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 207;
	            this.public_tag();
	            break;
	        case DE6Parser.PVT_GROUP:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 208;
	            this.pvt_tag();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, DE6Parser.RULE_element);
	    try {
	        this.state = 213;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DE6Parser.PUBLIC_GROUP:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 211;
	            this.public_tag();
	            break;
	        case DE6Parser.PVT_GROUP:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 212;
	            this.pvt_tag();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	seq_element() {
	    let localctx = new Seq_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, DE6Parser.RULE_seq_element);
	    var _la = 0; // Token type
	    try {
	        this.state = 220;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DE6Parser.PUBLIC_GROUP:
	        case DE6Parser.PVT_GROUP:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 215;
	            this.element();
	            this.state = 217;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===DE6Parser.LEFT_BRACKET) {
	                this.state = 216;
	                this.itemnumber();
	            }

	            break;
	        case DE6Parser.SEQ_WILDCARD:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 219;
	            this.seq_wildcard();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	tagpath() {
	    let localctx = new TagpathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, DE6Parser.RULE_tagpath);
	    try {
	        this.state = 237;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 224;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 222;
	                this.element();
	                break;

	            case 2:
	                this.state = 223;
	                this.seq_element();
	                break;

	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 229; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 226;
	            		this.seq_element();
	            		this.state = 227;
	            		this.match(DE6Parser.SLASH);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 231; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,22, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 235;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 233;
	                this.element();
	                break;

	            case 2:
	                this.state = 234;
	                this.seq_element();
	                break;

	            }
	            break;

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



	itemnumber() {
	    let localctx = new ItemnumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, DE6Parser.RULE_itemnumber);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(DE6Parser.LEFT_BRACKET);
	        this.state = 240;
	        _la = this._input.LA(1);
	        if(!(_la===DE6Parser.ITEM_WILDCARD || _la===DE6Parser.INTEGER)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 241;
	        this.match(DE6Parser.RIGHT_BRACKET);
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



	seq_wildcard() {
	    let localctx = new Seq_wildcardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, DE6Parser.RULE_seq_wildcard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.match(DE6Parser.SEQ_WILDCARD);
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



	public_tag() {
	    let localctx = new Public_tagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, DE6Parser.RULE_public_tag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        this.match(DE6Parser.PUBLIC_GROUP);
	        this.state = 246;
	        this.match(DE6Parser.COMMA);
	        this.state = 247;
	        this.match(DE6Parser.PUBLIC_ELEMENT);
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



	pvt_tag() {
	    let localctx = new Pvt_tagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, DE6Parser.RULE_pvt_tag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this.match(DE6Parser.PVT_GROUP);
	        this.state = 250;
	        this.match(DE6Parser.COMMA);
	        this.state = 251;
	        this.match(DE6Parser.PVT_ELEMENT);
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

DE6Parser.EOF = antlr4.Token.EOF;
DE6Parser.PUBLIC_GROUP = 1;
DE6Parser.PVT_GROUP = 2;
DE6Parser.PUBLIC_ELEMENT = 3;
DE6Parser.PVT_ELEMENT = 4;
DE6Parser.HEXDIGIT_WILDCARD = 5;
DE6Parser.TEST_SYMBOL = 6;
DE6Parser.TEST_SEPERATOR = 7;
DE6Parser.ITEM_WILDCARD = 8;
DE6Parser.SEQ_WILDCARD = 9;
DE6Parser.WS = 10;
DE6Parser.COMMA = 11;
DE6Parser.ECHO = 12;
DE6Parser.EQUALS = 13;
DE6Parser.NOT_EQUALS = 14;
DE6Parser.MATCHES = 15;
DE6Parser.NOT_MATCHES = 16;
DE6Parser.ASSIGN = 17;
DE6Parser.ASSIGN_IF_EXISTS = 18;
DE6Parser.DESCRIBE = 19;
DE6Parser.HIDDEN_TOKEN = 20;
DE6Parser.CONST_TOKEN = 21;
DE6Parser.IMMUTABLE_TOKEN = 22;
DE6Parser.EXPORT = 23;
DE6Parser.REMOVE_ALL_PRIVATE_TAGS = 24;
DE6Parser.VERSION_WORD = 25;
DE6Parser.LEFT_BRACKET = 26;
DE6Parser.RIGHT_BRACKET = 27;
DE6Parser.SLASH = 28;
DE6Parser.DELETE_OPERATOR = 29;
DE6Parser.INTEGER = 30;
DE6Parser.FLOAT = 31;
DE6Parser.ID = 32;
DE6Parser.COMMENT = 33;
DE6Parser.NEWLINE = 34;
DE6Parser.STRING = 35;
DE6Parser.OPEN = 36;
DE6Parser.PVT_CREATOR_ID = 37;
DE6Parser.CLOSE = 38;

DE6Parser.RULE_script = 0;
DE6Parser.RULE_separator = 1;
DE6Parser.RULE_statement = 2;
DE6Parser.RULE_action = 3;
DE6Parser.RULE_assign_if_exists = 4;
DE6Parser.RULE_assignment = 5;
DE6Parser.RULE_lvalue = 6;
DE6Parser.RULE_value = 7;
DE6Parser.RULE_term = 8;
DE6Parser.RULE_variable = 9;
DE6Parser.RULE_number = 10;
DE6Parser.RULE_termlist = 11;
DE6Parser.RULE_method = 12;
DE6Parser.RULE_function_stmt = 13;
DE6Parser.RULE_deletion = 14;
DE6Parser.RULE_echo = 15;
DE6Parser.RULE_conditional_statement = 16;
DE6Parser.RULE_condition = 17;
DE6Parser.RULE_conditionOperator = 18;
DE6Parser.RULE_initialization = 19;
DE6Parser.RULE_description = 20;
DE6Parser.RULE_export_stmt = 21;
DE6Parser.RULE_removeAllPrivateTags = 22;
DE6Parser.RULE_version = 23;
DE6Parser.RULE_tag = 24;
DE6Parser.RULE_element = 25;
DE6Parser.RULE_seq_element = 26;
DE6Parser.RULE_tagpath = 27;
DE6Parser.RULE_itemnumber = 28;
DE6Parser.RULE_seq_wildcard = 29;
DE6Parser.RULE_public_tag = 30;
DE6Parser.RULE_pvt_tag = 31;

class ScriptContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_script;
    }

	EOF() {
	    return this.getToken(DE6Parser.EOF, 0);
	};

	separator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SeparatorContext);
	    } else {
	        return this.getTypedRuleContext(SeparatorContext,i);
	    }
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterScript(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitScript(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitScript(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeparatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_separator;
    }

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DE6Parser.NEWLINE);
	    } else {
	        return this.getToken(DE6Parser.NEWLINE, i);
	    }
	};


	COMMENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DE6Parser.COMMENT);
	    } else {
	        return this.getToken(DE6Parser.COMMENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterSeparator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitSeparator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitSeparator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_statement;
    }

	action() {
	    return this.getTypedRuleContext(ActionContext,0);
	};

	conditional_statement() {
	    return this.getTypedRuleContext(Conditional_statementContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	export_stmt() {
	    return this.getTypedRuleContext(Export_stmtContext,0);
	};

	removeAllPrivateTags() {
	    return this.getTypedRuleContext(RemoveAllPrivateTagsContext,0);
	};

	version() {
	    return this.getTypedRuleContext(VersionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_action;
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	assign_if_exists() {
	    return this.getTypedRuleContext(Assign_if_existsContext,0);
	};

	deletion() {
	    return this.getTypedRuleContext(DeletionContext,0);
	};

	initialization() {
	    return this.getTypedRuleContext(InitializationContext,0);
	};

	method() {
	    return this.getTypedRuleContext(MethodContext,0);
	};

	echo() {
	    return this.getTypedRuleContext(EchoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitAction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitAction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Assign_if_existsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_assign_if_exists;
    }

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	ASSIGN_IF_EXISTS() {
	    return this.getToken(DE6Parser.ASSIGN_IF_EXISTS, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterAssign_if_exists(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitAssign_if_exists(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitAssign_if_exists(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_assignment;
    }

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	ASSIGN() {
	    return this.getToken(DE6Parser.ASSIGN, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LvalueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_lvalue;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TagpathLvalueContext extends LvalueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	tagpath() {
	    return this.getTypedRuleContext(TagpathContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterTagpathLvalue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitTagpathLvalue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitTagpathLvalue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DE6Parser.TagpathLvalueContext = TagpathLvalueContext;

class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_value;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_term;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TagPathTermContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	tagpath() {
	    return this.getTypedRuleContext(TagpathContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterTagPathTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitTagPathTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitTagPathTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DE6Parser.TagPathTermContext = TagPathTermContext;

class StringTermContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(DE6Parser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterStringTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitStringTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitStringTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DE6Parser.StringTermContext = StringTermContext;

class IdTermContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterIdTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitIdTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitIdTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DE6Parser.IdTermContext = IdTermContext;

class NumberTermContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterNumberTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitNumberTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitNumberTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DE6Parser.NumberTermContext = NumberTermContext;

class FunctionTermContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	function_stmt() {
	    return this.getTypedRuleContext(Function_stmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterFunctionTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitFunctionTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitFunctionTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DE6Parser.FunctionTermContext = FunctionTermContext;

class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_variable;
    }

	ID() {
	    return this.getToken(DE6Parser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_number;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IntvalueContext extends NumberContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INTEGER() {
	    return this.getToken(DE6Parser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterIntvalue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitIntvalue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitIntvalue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DE6Parser.IntvalueContext = IntvalueContext;

class FloatvalueContext extends NumberContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FLOAT() {
	    return this.getToken(DE6Parser.FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterFloatvalue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitFloatvalue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitFloatvalue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DE6Parser.FloatvalueContext = FloatvalueContext;

class TermlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_termlist;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DE6Parser.COMMA);
	    } else {
	        return this.getToken(DE6Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterTermlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitTermlist(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitTermlist(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MethodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_method;
    }

	ID() {
	    return this.getToken(DE6Parser.ID, 0);
	};

	LEFT_BRACKET() {
	    return this.getToken(DE6Parser.LEFT_BRACKET, 0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(DE6Parser.RIGHT_BRACKET, 0);
	};

	termlist() {
	    return this.getTypedRuleContext(TermlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitMethod(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitMethod(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Function_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_function_stmt;
    }

	ID() {
	    return this.getToken(DE6Parser.ID, 0);
	};

	LEFT_BRACKET() {
	    return this.getToken(DE6Parser.LEFT_BRACKET, 0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(DE6Parser.RIGHT_BRACKET, 0);
	};

	termlist() {
	    return this.getTypedRuleContext(TermlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterFunction_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitFunction_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitFunction_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeletionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_deletion;
    }

	DELETE_OPERATOR() {
	    return this.getToken(DE6Parser.DELETE_OPERATOR, 0);
	};

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterDeletion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitDeletion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitDeletion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EchoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_echo;
    }

	ECHO() {
	    return this.getToken(DE6Parser.ECHO, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterEcho(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitEcho(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitEcho(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Conditional_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_conditional_statement;
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	TEST_SYMBOL() {
	    return this.getToken(DE6Parser.TEST_SYMBOL, 0);
	};

	action = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ActionContext);
	    } else {
	        return this.getTypedRuleContext(ActionContext,i);
	    }
	};

	TEST_SEPERATOR() {
	    return this.getToken(DE6Parser.TEST_SEPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterConditional_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitConditional_statement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitConditional_statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_condition;
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	conditionOperator() {
	    return this.getTypedRuleContext(ConditionOperatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_conditionOperator;
    }

	EQUALS() {
	    return this.getToken(DE6Parser.EQUALS, 0);
	};

	MATCHES() {
	    return this.getToken(DE6Parser.MATCHES, 0);
	};

	NOT_EQUALS() {
	    return this.getToken(DE6Parser.NOT_EQUALS, 0);
	};

	NOT_MATCHES() {
	    return this.getToken(DE6Parser.NOT_MATCHES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterConditionOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitConditionOperator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitConditionOperator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InitializationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_initialization;
    }

	ID() {
	    return this.getToken(DE6Parser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(DE6Parser.ASSIGN, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterInitialization(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitInitialization(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitInitialization(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DescriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_description;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DescribeHiddenVariableContext extends DescriptionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DESCRIBE() {
	    return this.getToken(DE6Parser.DESCRIBE, 0);
	};

	ID() {
	    return this.getToken(DE6Parser.ID, 0);
	};

	HIDDEN_TOKEN() {
	    return this.getToken(DE6Parser.HIDDEN_TOKEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterDescribeHiddenVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitDescribeHiddenVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitDescribeHiddenVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DE6Parser.DescribeHiddenVariableContext = DescribeHiddenVariableContext;

class DescribeImmutableVariableContext extends DescriptionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DESCRIBE() {
	    return this.getToken(DE6Parser.DESCRIBE, 0);
	};

	ID() {
	    return this.getToken(DE6Parser.ID, 0);
	};

	IMMUTABLE_TOKEN() {
	    return this.getToken(DE6Parser.IMMUTABLE_TOKEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterDescribeImmutableVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitDescribeImmutableVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitDescribeImmutableVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DE6Parser.DescribeImmutableVariableContext = DescribeImmutableVariableContext;

class DescribeConstantVariableContext extends DescriptionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DESCRIBE() {
	    return this.getToken(DE6Parser.DESCRIBE, 0);
	};

	ID() {
	    return this.getToken(DE6Parser.ID, 0);
	};

	CONST_TOKEN() {
	    return this.getToken(DE6Parser.CONST_TOKEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterDescribeConstantVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitDescribeConstantVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitDescribeConstantVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DE6Parser.DescribeConstantVariableContext = DescribeConstantVariableContext;

class DescribeNamedVariableContext extends DescriptionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DESCRIBE() {
	    return this.getToken(DE6Parser.DESCRIBE, 0);
	};

	ID() {
	    return this.getToken(DE6Parser.ID, 0);
	};

	STRING() {
	    return this.getToken(DE6Parser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterDescribeNamedVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitDescribeNamedVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitDescribeNamedVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DE6Parser.DescribeNamedVariableContext = DescribeNamedVariableContext;

class Export_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_export_stmt;
    }

	EXPORT() {
	    return this.getToken(DE6Parser.EXPORT, 0);
	};

	ID() {
	    return this.getToken(DE6Parser.ID, 0);
	};

	STRING() {
	    return this.getToken(DE6Parser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterExport_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitExport_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitExport_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RemoveAllPrivateTagsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_removeAllPrivateTags;
    }

	REMOVE_ALL_PRIVATE_TAGS() {
	    return this.getToken(DE6Parser.REMOVE_ALL_PRIVATE_TAGS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterRemoveAllPrivateTags(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitRemoveAllPrivateTags(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitRemoveAllPrivateTags(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VersionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_version;
    }

	VERSION_WORD() {
	    return this.getToken(DE6Parser.VERSION_WORD, 0);
	};

	STRING() {
	    return this.getToken(DE6Parser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterVersion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitVersion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitVersion(this);
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
        this.ruleIndex = DE6Parser.RULE_tag;
    }

	public_tag() {
	    return this.getTypedRuleContext(Public_tagContext,0);
	};

	pvt_tag() {
	    return this.getTypedRuleContext(Pvt_tagContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitTag(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitTag(this);
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
        this.ruleIndex = DE6Parser.RULE_element;
    }

	public_tag() {
	    return this.getTypedRuleContext(Public_tagContext,0);
	};

	pvt_tag() {
	    return this.getTypedRuleContext(Pvt_tagContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitElement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitElement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Seq_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_seq_element;
    }

	element() {
	    return this.getTypedRuleContext(ElementContext,0);
	};

	itemnumber() {
	    return this.getTypedRuleContext(ItemnumberContext,0);
	};

	seq_wildcard() {
	    return this.getTypedRuleContext(Seq_wildcardContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterSeq_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitSeq_element(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitSeq_element(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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
        this.ruleIndex = DE6Parser.RULE_tagpath;
    }

	element() {
	    return this.getTypedRuleContext(ElementContext,0);
	};

	seq_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Seq_elementContext);
	    } else {
	        return this.getTypedRuleContext(Seq_elementContext,i);
	    }
	};

	SLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DE6Parser.SLASH);
	    } else {
	        return this.getToken(DE6Parser.SLASH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterTagpath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitTagpath(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitTagpath(this);
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
        this.ruleIndex = DE6Parser.RULE_itemnumber;
    }

	LEFT_BRACKET() {
	    return this.getToken(DE6Parser.LEFT_BRACKET, 0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(DE6Parser.RIGHT_BRACKET, 0);
	};

	INTEGER() {
	    return this.getToken(DE6Parser.INTEGER, 0);
	};

	ITEM_WILDCARD() {
	    return this.getToken(DE6Parser.ITEM_WILDCARD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterItemnumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitItemnumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitItemnumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Seq_wildcardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_seq_wildcard;
    }

	SEQ_WILDCARD() {
	    return this.getToken(DE6Parser.SEQ_WILDCARD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterSeq_wildcard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitSeq_wildcard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitSeq_wildcard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Public_tagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_public_tag;
    }

	PUBLIC_GROUP() {
	    return this.getToken(DE6Parser.PUBLIC_GROUP, 0);
	};

	COMMA() {
	    return this.getToken(DE6Parser.COMMA, 0);
	};

	PUBLIC_ELEMENT() {
	    return this.getToken(DE6Parser.PUBLIC_ELEMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterPublic_tag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitPublic_tag(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitPublic_tag(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Pvt_tagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DE6Parser.RULE_pvt_tag;
    }

	PVT_GROUP() {
	    return this.getToken(DE6Parser.PVT_GROUP, 0);
	};

	COMMA() {
	    return this.getToken(DE6Parser.COMMA, 0);
	};

	PVT_ELEMENT() {
	    return this.getToken(DE6Parser.PVT_ELEMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.enterPvt_tag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DE6ParserListener ) {
	        listener.exitPvt_tag(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DE6ParserVisitor ) {
	        return visitor.visitPvt_tag(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




DE6Parser.ScriptContext = ScriptContext; 
DE6Parser.SeparatorContext = SeparatorContext; 
DE6Parser.StatementContext = StatementContext; 
DE6Parser.ActionContext = ActionContext; 
DE6Parser.Assign_if_existsContext = Assign_if_existsContext; 
DE6Parser.AssignmentContext = AssignmentContext; 
DE6Parser.LvalueContext = LvalueContext; 
DE6Parser.ValueContext = ValueContext; 
DE6Parser.TermContext = TermContext; 
DE6Parser.VariableContext = VariableContext; 
DE6Parser.NumberContext = NumberContext; 
DE6Parser.TermlistContext = TermlistContext; 
DE6Parser.MethodContext = MethodContext; 
DE6Parser.Function_stmtContext = Function_stmtContext; 
DE6Parser.DeletionContext = DeletionContext; 
DE6Parser.EchoContext = EchoContext; 
DE6Parser.Conditional_statementContext = Conditional_statementContext; 
DE6Parser.ConditionContext = ConditionContext; 
DE6Parser.ConditionOperatorContext = ConditionOperatorContext; 
DE6Parser.InitializationContext = InitializationContext; 
DE6Parser.DescriptionContext = DescriptionContext; 
DE6Parser.Export_stmtContext = Export_stmtContext; 
DE6Parser.RemoveAllPrivateTagsContext = RemoveAllPrivateTagsContext; 
DE6Parser.VersionContext = VersionContext; 
DE6Parser.TagContext = TagContext; 
DE6Parser.ElementContext = ElementContext; 
DE6Parser.Seq_elementContext = Seq_elementContext; 
DE6Parser.TagpathContext = TagpathContext; 
DE6Parser.ItemnumberContext = ItemnumberContext; 
DE6Parser.Seq_wildcardContext = Seq_wildcardContext; 
DE6Parser.Public_tagContext = Public_tagContext; 
DE6Parser.Pvt_tagContext = Pvt_tagContext; 
