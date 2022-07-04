"use strict";(self.webpackChunkbanana_cake_pop=self.webpackChunkbanana_cake_pop||[]).push([[696],{95696:function(e,t,i){i.d(t,{H2:function(){return d},Qc:function(){return l}});var n=i(15671),s=i(43144),r=i(52867),a=i(20040),o=i(95570),h=i(48890),p=i(45523),u=i(23752),c=i(54807);function l(e,t){return new v(e,t).parseDocument()}function d(e,t){var i=new v(e,t);i.expectToken(c.T.SOF);var n=i.parseValueLiteral(!1);return i.expectToken(c.T.EOF),n}var v=function(){function e(t,i){(0,n.Z)(this,e);var s=(0,u.T)(t)?t:new u.H(t);this._lexer=new p.h(s),this._options=i}return(0,s.Z)(e,[{key:"parseName",value:function(){var e=this.expectToken(c.T.NAME);return this.node(e,{kind:h.h.NAME,value:e.value})}},{key:"parseDocument",value:function(){return this.node(this._lexer.token,{kind:h.h.DOCUMENT,definitions:this.many(c.T.SOF,this.parseDefinition,c.T.EOF)})}},{key:"parseDefinition",value:function(){if(this.peek(c.T.BRACE_L))return this.parseOperationDefinition();var e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===c.T.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw(0,r.h)(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}},{key:"parseOperationDefinition",value:function(){var e=this._lexer.token;if(this.peek(c.T.BRACE_L))return this.node(e,{kind:h.h.OPERATION_DEFINITION,operation:a.ku.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});var t,i=this.parseOperationType();return this.peek(c.T.NAME)&&(t=this.parseName()),this.node(e,{kind:h.h.OPERATION_DEFINITION,operation:i,name:t,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}},{key:"parseOperationType",value:function(){var e=this.expectToken(c.T.NAME);switch(e.value){case"query":return a.ku.QUERY;case"mutation":return a.ku.MUTATION;case"subscription":return a.ku.SUBSCRIPTION}throw this.unexpected(e)}},{key:"parseVariableDefinitions",value:function(){return this.optionalMany(c.T.PAREN_L,this.parseVariableDefinition,c.T.PAREN_R)}},{key:"parseVariableDefinition",value:function(){return this.node(this._lexer.token,{kind:h.h.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(c.T.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(c.T.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}},{key:"parseVariable",value:function(){var e=this._lexer.token;return this.expectToken(c.T.DOLLAR),this.node(e,{kind:h.h.VARIABLE,name:this.parseName()})}},{key:"parseSelectionSet",value:function(){return this.node(this._lexer.token,{kind:h.h.SELECTION_SET,selections:this.many(c.T.BRACE_L,this.parseSelection,c.T.BRACE_R)})}},{key:"parseSelection",value:function(){return this.peek(c.T.SPREAD)?this.parseFragment():this.parseField()}},{key:"parseField",value:function(){var e,t,i=this._lexer.token,n=this.parseName();return this.expectOptionalToken(c.T.COLON)?(e=n,t=this.parseName()):t=n,this.node(i,{kind:h.h.FIELD,alias:e,name:t,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(c.T.BRACE_L)?this.parseSelectionSet():void 0})}},{key:"parseArguments",value:function(e){var t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(c.T.PAREN_L,t,c.T.PAREN_R)}},{key:"parseArgument",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this._lexer.token,i=this.parseName();return this.expectToken(c.T.COLON),this.node(t,{kind:h.h.ARGUMENT,name:i,value:this.parseValueLiteral(e)})}},{key:"parseConstArgument",value:function(){return this.parseArgument(!0)}},{key:"parseFragment",value:function(){var e=this._lexer.token;this.expectToken(c.T.SPREAD);var t=this.expectOptionalKeyword("on");return!t&&this.peek(c.T.NAME)?this.node(e,{kind:h.h.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:h.h.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}},{key:"parseFragmentDefinition",value:function(){var e,t=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacyFragmentVariables)?this.node(t,{kind:h.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:h.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}},{key:"parseFragmentName",value:function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()}},{key:"parseValueLiteral",value:function(e){var t=this._lexer.token;switch(t.kind){case c.T.BRACKET_L:return this.parseList(e);case c.T.BRACE_L:return this.parseObject(e);case c.T.INT:return this._lexer.advance(),this.node(t,{kind:h.h.INT,value:t.value});case c.T.FLOAT:return this._lexer.advance(),this.node(t,{kind:h.h.FLOAT,value:t.value});case c.T.STRING:case c.T.BLOCK_STRING:return this.parseStringLiteral();case c.T.NAME:switch(this._lexer.advance(),t.value){case"true":return this.node(t,{kind:h.h.BOOLEAN,value:!0});case"false":return this.node(t,{kind:h.h.BOOLEAN,value:!1});case"null":return this.node(t,{kind:h.h.NULL});default:return this.node(t,{kind:h.h.ENUM,value:t.value})}case c.T.DOLLAR:if(e){if(this.expectToken(c.T.DOLLAR),this._lexer.token.kind===c.T.NAME){var i=this._lexer.token.value;throw(0,r.h)(this._lexer.source,t.start,'Unexpected variable "$'.concat(i,'" in constant value.'))}throw this.unexpected(t)}return this.parseVariable();default:throw this.unexpected()}}},{key:"parseConstValueLiteral",value:function(){return this.parseValueLiteral(!0)}},{key:"parseStringLiteral",value:function(){var e=this._lexer.token;return this._lexer.advance(),this.node(e,{kind:h.h.STRING,value:e.value,block:e.kind===c.T.BLOCK_STRING})}},{key:"parseList",value:function(e){var t=this;return this.node(this._lexer.token,{kind:h.h.LIST,values:this.any(c.T.BRACKET_L,(function(){return t.parseValueLiteral(e)}),c.T.BRACKET_R)})}},{key:"parseObject",value:function(e){var t=this;return this.node(this._lexer.token,{kind:h.h.OBJECT,fields:this.any(c.T.BRACE_L,(function(){return t.parseObjectField(e)}),c.T.BRACE_R)})}},{key:"parseObjectField",value:function(e){var t=this._lexer.token,i=this.parseName();return this.expectToken(c.T.COLON),this.node(t,{kind:h.h.OBJECT_FIELD,name:i,value:this.parseValueLiteral(e)})}},{key:"parseDirectives",value:function(e){for(var t=[];this.peek(c.T.AT);)t.push(this.parseDirective(e));return t}},{key:"parseConstDirectives",value:function(){return this.parseDirectives(!0)}},{key:"parseDirective",value:function(e){var t=this._lexer.token;return this.expectToken(c.T.AT),this.node(t,{kind:h.h.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}},{key:"parseTypeReference",value:function(){var e,t=this._lexer.token;if(this.expectOptionalToken(c.T.BRACKET_L)){var i=this.parseTypeReference();this.expectToken(c.T.BRACKET_R),e=this.node(t,{kind:h.h.LIST_TYPE,type:i})}else e=this.parseNamedType();return this.expectOptionalToken(c.T.BANG)?this.node(t,{kind:h.h.NON_NULL_TYPE,type:e}):e}},{key:"parseNamedType",value:function(){return this.node(this._lexer.token,{kind:h.h.NAMED_TYPE,name:this.parseName()})}},{key:"peekDescription",value:function(){return this.peek(c.T.STRING)||this.peek(c.T.BLOCK_STRING)}},{key:"parseDescription",value:function(){if(this.peekDescription())return this.parseStringLiteral()}},{key:"parseSchemaDefinition",value:function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");var i=this.parseConstDirectives(),n=this.many(c.T.BRACE_L,this.parseOperationTypeDefinition,c.T.BRACE_R);return this.node(e,{kind:h.h.SCHEMA_DEFINITION,description:t,directives:i,operationTypes:n})}},{key:"parseOperationTypeDefinition",value:function(){var e=this._lexer.token,t=this.parseOperationType();this.expectToken(c.T.COLON);var i=this.parseNamedType();return this.node(e,{kind:h.h.OPERATION_TYPE_DEFINITION,operation:t,type:i})}},{key:"parseScalarTypeDefinition",value:function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");var i=this.parseName(),n=this.parseConstDirectives();return this.node(e,{kind:h.h.SCALAR_TYPE_DEFINITION,description:t,name:i,directives:n})}},{key:"parseObjectTypeDefinition",value:function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");var i=this.parseName(),n=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),r=this.parseFieldsDefinition();return this.node(e,{kind:h.h.OBJECT_TYPE_DEFINITION,description:t,name:i,interfaces:n,directives:s,fields:r})}},{key:"parseImplementsInterfaces",value:function(){return this.expectOptionalKeyword("implements")?this.delimitedMany(c.T.AMP,this.parseNamedType):[]}},{key:"parseFieldsDefinition",value:function(){return this.optionalMany(c.T.BRACE_L,this.parseFieldDefinition,c.T.BRACE_R)}},{key:"parseFieldDefinition",value:function(){var e=this._lexer.token,t=this.parseDescription(),i=this.parseName(),n=this.parseArgumentDefs();this.expectToken(c.T.COLON);var s=this.parseTypeReference(),r=this.parseConstDirectives();return this.node(e,{kind:h.h.FIELD_DEFINITION,description:t,name:i,arguments:n,type:s,directives:r})}},{key:"parseArgumentDefs",value:function(){return this.optionalMany(c.T.PAREN_L,this.parseInputValueDef,c.T.PAREN_R)}},{key:"parseInputValueDef",value:function(){var e=this._lexer.token,t=this.parseDescription(),i=this.parseName();this.expectToken(c.T.COLON);var n,s=this.parseTypeReference();this.expectOptionalToken(c.T.EQUALS)&&(n=this.parseConstValueLiteral());var r=this.parseConstDirectives();return this.node(e,{kind:h.h.INPUT_VALUE_DEFINITION,description:t,name:i,type:s,defaultValue:n,directives:r})}},{key:"parseInterfaceTypeDefinition",value:function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");var i=this.parseName(),n=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),r=this.parseFieldsDefinition();return this.node(e,{kind:h.h.INTERFACE_TYPE_DEFINITION,description:t,name:i,interfaces:n,directives:s,fields:r})}},{key:"parseUnionTypeDefinition",value:function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");var i=this.parseName(),n=this.parseConstDirectives(),s=this.parseUnionMemberTypes();return this.node(e,{kind:h.h.UNION_TYPE_DEFINITION,description:t,name:i,directives:n,types:s})}},{key:"parseUnionMemberTypes",value:function(){return this.expectOptionalToken(c.T.EQUALS)?this.delimitedMany(c.T.PIPE,this.parseNamedType):[]}},{key:"parseEnumTypeDefinition",value:function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");var i=this.parseName(),n=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();return this.node(e,{kind:h.h.ENUM_TYPE_DEFINITION,description:t,name:i,directives:n,values:s})}},{key:"parseEnumValuesDefinition",value:function(){return this.optionalMany(c.T.BRACE_L,this.parseEnumValueDefinition,c.T.BRACE_R)}},{key:"parseEnumValueDefinition",value:function(){var e=this._lexer.token,t=this.parseDescription(),i=this.parseEnumValueName(),n=this.parseConstDirectives();return this.node(e,{kind:h.h.ENUM_VALUE_DEFINITION,description:t,name:i,directives:n})}},{key:"parseEnumValueName",value:function(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw(0,r.h)(this._lexer.source,this._lexer.token.start,"".concat(T(this._lexer.token)," is reserved and cannot be used for an enum value."));return this.parseName()}},{key:"parseInputObjectTypeDefinition",value:function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");var i=this.parseName(),n=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();return this.node(e,{kind:h.h.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:i,directives:n,fields:s})}},{key:"parseInputFieldsDefinition",value:function(){return this.optionalMany(c.T.BRACE_L,this.parseInputValueDef,c.T.BRACE_R)}},{key:"parseTypeSystemExtension",value:function(){var e=this._lexer.lookahead();if(e.kind===c.T.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}},{key:"parseSchemaExtension",value:function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var t=this.parseConstDirectives(),i=this.optionalMany(c.T.BRACE_L,this.parseOperationTypeDefinition,c.T.BRACE_R);if(0===t.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:h.h.SCHEMA_EXTENSION,directives:t,operationTypes:i})}},{key:"parseScalarTypeExtension",value:function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var t=this.parseName(),i=this.parseConstDirectives();if(0===i.length)throw this.unexpected();return this.node(e,{kind:h.h.SCALAR_TYPE_EXTENSION,name:t,directives:i})}},{key:"parseObjectTypeExtension",value:function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var t=this.parseName(),i=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(0===i.length&&0===n.length&&0===s.length)throw this.unexpected();return this.node(e,{kind:h.h.OBJECT_TYPE_EXTENSION,name:t,interfaces:i,directives:n,fields:s})}},{key:"parseInterfaceTypeExtension",value:function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var t=this.parseName(),i=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(0===i.length&&0===n.length&&0===s.length)throw this.unexpected();return this.node(e,{kind:h.h.INTERFACE_TYPE_EXTENSION,name:t,interfaces:i,directives:n,fields:s})}},{key:"parseUnionTypeExtension",value:function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var t=this.parseName(),i=this.parseConstDirectives(),n=this.parseUnionMemberTypes();if(0===i.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:h.h.UNION_TYPE_EXTENSION,name:t,directives:i,types:n})}},{key:"parseEnumTypeExtension",value:function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var t=this.parseName(),i=this.parseConstDirectives(),n=this.parseEnumValuesDefinition();if(0===i.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:h.h.ENUM_TYPE_EXTENSION,name:t,directives:i,values:n})}},{key:"parseInputObjectTypeExtension",value:function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var t=this.parseName(),i=this.parseConstDirectives(),n=this.parseInputFieldsDefinition();if(0===i.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:h.h.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:i,fields:n})}},{key:"parseDirectiveDefinition",value:function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(c.T.AT);var i=this.parseName(),n=this.parseArgumentDefs(),s=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var r=this.parseDirectiveLocations();return this.node(e,{kind:h.h.DIRECTIVE_DEFINITION,description:t,name:i,arguments:n,repeatable:s,locations:r})}},{key:"parseDirectiveLocations",value:function(){return this.delimitedMany(c.T.PIPE,this.parseDirectiveLocation)}},{key:"parseDirectiveLocation",value:function(){var e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(o.B,t.value))return t;throw this.unexpected(e)}},{key:"node",value:function(e,t){var i;return!0!==(null===(i=this._options)||void 0===i?void 0:i.noLocation)&&(t.loc=new a.Ye(e,this._lexer.lastToken,this._lexer.source)),t}},{key:"peek",value:function(e){return this._lexer.token.kind===e}},{key:"expectToken",value:function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t;throw(0,r.h)(this._lexer.source,t.start,"Expected ".concat(k(e),", found ").concat(T(t),"."))}},{key:"expectOptionalToken",value:function(e){return this._lexer.token.kind===e&&(this._lexer.advance(),!0)}},{key:"expectKeyword",value:function(e){var t=this._lexer.token;if(t.kind!==c.T.NAME||t.value!==e)throw(0,r.h)(this._lexer.source,t.start,'Expected "'.concat(e,'", found ').concat(T(t),"."));this._lexer.advance()}},{key:"expectOptionalKeyword",value:function(e){var t=this._lexer.token;return t.kind===c.T.NAME&&t.value===e&&(this._lexer.advance(),!0)}},{key:"unexpected",value:function(e){var t=null!==e&&void 0!==e?e:this._lexer.token;return(0,r.h)(this._lexer.source,t.start,"Unexpected ".concat(T(t),"."))}},{key:"any",value:function(e,t,i){this.expectToken(e);for(var n=[];!this.expectOptionalToken(i);)n.push(t.call(this));return n}},{key:"optionalMany",value:function(e,t,i){if(this.expectOptionalToken(e)){var n=[];do{n.push(t.call(this))}while(!this.expectOptionalToken(i));return n}return[]}},{key:"many",value:function(e,t,i){this.expectToken(e);var n=[];do{n.push(t.call(this))}while(!this.expectOptionalToken(i));return n}},{key:"delimitedMany",value:function(e,t){this.expectOptionalToken(e);var i=[];do{i.push(t.call(this))}while(this.expectOptionalToken(e));return i}}]),e}();function T(e){var t=e.value;return k(e.kind)+(null!=t?' "'.concat(t,'"'):"")}function k(e){return(0,p.u)(e)?'"'.concat(e,'"'):e}}}]);