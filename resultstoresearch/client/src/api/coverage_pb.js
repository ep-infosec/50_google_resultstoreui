// source: coverage.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* tslint:disable */
/* eslint-disable */

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.resultstoresearch.v1.ActionCoverage', null, global);
goog.exportSymbol('proto.resultstoresearch.v1.AggregateCoverage', null, global);
goog.exportSymbol('proto.resultstoresearch.v1.BranchCoverage', null, global);
goog.exportSymbol('proto.resultstoresearch.v1.FileCoverage', null, global);
goog.exportSymbol('proto.resultstoresearch.v1.LineCoverage', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.resultstoresearch.v1.LineCoverage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.resultstoresearch.v1.LineCoverage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.resultstoresearch.v1.LineCoverage.displayName = 'proto.resultstoresearch.v1.LineCoverage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.resultstoresearch.v1.BranchCoverage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.resultstoresearch.v1.BranchCoverage.repeatedFields_, null);
};
goog.inherits(proto.resultstoresearch.v1.BranchCoverage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.resultstoresearch.v1.BranchCoverage.displayName = 'proto.resultstoresearch.v1.BranchCoverage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.resultstoresearch.v1.FileCoverage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.resultstoresearch.v1.FileCoverage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.resultstoresearch.v1.FileCoverage.displayName = 'proto.resultstoresearch.v1.FileCoverage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.resultstoresearch.v1.ActionCoverage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.resultstoresearch.v1.ActionCoverage.repeatedFields_, null);
};
goog.inherits(proto.resultstoresearch.v1.ActionCoverage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.resultstoresearch.v1.ActionCoverage.displayName = 'proto.resultstoresearch.v1.ActionCoverage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.resultstoresearch.v1.AggregateCoverage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.resultstoresearch.v1.AggregateCoverage.repeatedFields_, null);
};
goog.inherits(proto.resultstoresearch.v1.AggregateCoverage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.resultstoresearch.v1.AggregateCoverage.displayName = 'proto.resultstoresearch.v1.AggregateCoverage';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.resultstoresearch.v1.LineCoverage.prototype.toObject = function(opt_includeInstance) {
  return proto.resultstoresearch.v1.LineCoverage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.resultstoresearch.v1.LineCoverage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.LineCoverage.toObject = function(includeInstance, msg) {
  var f, obj = {
    instrumentedLines: msg.getInstrumentedLines_asB64(),
    executedLines: msg.getExecutedLines_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.resultstoresearch.v1.LineCoverage}
 */
proto.resultstoresearch.v1.LineCoverage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.resultstoresearch.v1.LineCoverage;
  return proto.resultstoresearch.v1.LineCoverage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.resultstoresearch.v1.LineCoverage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.resultstoresearch.v1.LineCoverage}
 */
proto.resultstoresearch.v1.LineCoverage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setInstrumentedLines(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setExecutedLines(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.resultstoresearch.v1.LineCoverage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.resultstoresearch.v1.LineCoverage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.resultstoresearch.v1.LineCoverage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.LineCoverage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstrumentedLines_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getExecutedLines_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes instrumented_lines = 1;
 * @return {!(string|Uint8Array)}
 */
proto.resultstoresearch.v1.LineCoverage.prototype.getInstrumentedLines = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes instrumented_lines = 1;
 * This is a type-conversion wrapper around `getInstrumentedLines()`
 * @return {string}
 */
proto.resultstoresearch.v1.LineCoverage.prototype.getInstrumentedLines_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getInstrumentedLines()));
};


/**
 * optional bytes instrumented_lines = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getInstrumentedLines()`
 * @return {!Uint8Array}
 */
proto.resultstoresearch.v1.LineCoverage.prototype.getInstrumentedLines_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInstrumentedLines()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.resultstoresearch.v1.LineCoverage} returns this
 */
proto.resultstoresearch.v1.LineCoverage.prototype.setInstrumentedLines = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes executed_lines = 2;
 * @return {!(string|Uint8Array)}
 */
proto.resultstoresearch.v1.LineCoverage.prototype.getExecutedLines = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes executed_lines = 2;
 * This is a type-conversion wrapper around `getExecutedLines()`
 * @return {string}
 */
proto.resultstoresearch.v1.LineCoverage.prototype.getExecutedLines_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getExecutedLines()));
};


/**
 * optional bytes executed_lines = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getExecutedLines()`
 * @return {!Uint8Array}
 */
proto.resultstoresearch.v1.LineCoverage.prototype.getExecutedLines_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getExecutedLines()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.resultstoresearch.v1.LineCoverage} returns this
 */
proto.resultstoresearch.v1.LineCoverage.prototype.setExecutedLines = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.resultstoresearch.v1.BranchCoverage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.toObject = function(opt_includeInstance) {
  return proto.resultstoresearch.v1.BranchCoverage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.resultstoresearch.v1.BranchCoverage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.BranchCoverage.toObject = function(includeInstance, msg) {
  var f, obj = {
    branchPresent: msg.getBranchPresent_asB64(),
    branchesInLineList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    executed: msg.getExecuted_asB64(),
    taken: msg.getTaken_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.resultstoresearch.v1.BranchCoverage}
 */
proto.resultstoresearch.v1.BranchCoverage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.resultstoresearch.v1.BranchCoverage;
  return proto.resultstoresearch.v1.BranchCoverage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.resultstoresearch.v1.BranchCoverage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.resultstoresearch.v1.BranchCoverage}
 */
proto.resultstoresearch.v1.BranchCoverage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBranchPresent(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
      msg.setBranchesInLineList(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setExecuted(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTaken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.resultstoresearch.v1.BranchCoverage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.resultstoresearch.v1.BranchCoverage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.BranchCoverage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBranchPresent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getBranchesInLineList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
  f = message.getExecuted_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getTaken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional bytes branch_present = 1;
 * @return {!(string|Uint8Array)}
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.getBranchPresent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes branch_present = 1;
 * This is a type-conversion wrapper around `getBranchPresent()`
 * @return {string}
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.getBranchPresent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBranchPresent()));
};


/**
 * optional bytes branch_present = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBranchPresent()`
 * @return {!Uint8Array}
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.getBranchPresent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBranchPresent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.resultstoresearch.v1.BranchCoverage} returns this
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.setBranchPresent = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated int32 branches_in_line = 2;
 * @return {!Array<number>}
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.getBranchesInLineList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.resultstoresearch.v1.BranchCoverage} returns this
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.setBranchesInLineList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.resultstoresearch.v1.BranchCoverage} returns this
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.addBranchesInLine = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.resultstoresearch.v1.BranchCoverage} returns this
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.clearBranchesInLineList = function() {
  return this.setBranchesInLineList([]);
};


/**
 * optional bytes executed = 3;
 * @return {!(string|Uint8Array)}
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.getExecuted = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes executed = 3;
 * This is a type-conversion wrapper around `getExecuted()`
 * @return {string}
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.getExecuted_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getExecuted()));
};


/**
 * optional bytes executed = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getExecuted()`
 * @return {!Uint8Array}
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.getExecuted_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getExecuted()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.resultstoresearch.v1.BranchCoverage} returns this
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.setExecuted = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes taken = 4;
 * @return {!(string|Uint8Array)}
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.getTaken = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes taken = 4;
 * This is a type-conversion wrapper around `getTaken()`
 * @return {string}
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.getTaken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTaken()));
};


/**
 * optional bytes taken = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTaken()`
 * @return {!Uint8Array}
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.getTaken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTaken()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.resultstoresearch.v1.BranchCoverage} returns this
 */
proto.resultstoresearch.v1.BranchCoverage.prototype.setTaken = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.resultstoresearch.v1.FileCoverage.prototype.toObject = function(opt_includeInstance) {
  return proto.resultstoresearch.v1.FileCoverage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.resultstoresearch.v1.FileCoverage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.FileCoverage.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lineCoverage: (f = msg.getLineCoverage()) && proto.resultstoresearch.v1.LineCoverage.toObject(includeInstance, f),
    branchCoverage: (f = msg.getBranchCoverage()) && proto.resultstoresearch.v1.BranchCoverage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.resultstoresearch.v1.FileCoverage}
 */
proto.resultstoresearch.v1.FileCoverage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.resultstoresearch.v1.FileCoverage;
  return proto.resultstoresearch.v1.FileCoverage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.resultstoresearch.v1.FileCoverage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.resultstoresearch.v1.FileCoverage}
 */
proto.resultstoresearch.v1.FileCoverage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = new proto.resultstoresearch.v1.LineCoverage;
      reader.readMessage(value,proto.resultstoresearch.v1.LineCoverage.deserializeBinaryFromReader);
      msg.setLineCoverage(value);
      break;
    case 3:
      var value = new proto.resultstoresearch.v1.BranchCoverage;
      reader.readMessage(value,proto.resultstoresearch.v1.BranchCoverage.deserializeBinaryFromReader);
      msg.setBranchCoverage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.resultstoresearch.v1.FileCoverage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.resultstoresearch.v1.FileCoverage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.resultstoresearch.v1.FileCoverage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.FileCoverage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLineCoverage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.resultstoresearch.v1.LineCoverage.serializeBinaryToWriter
    );
  }
  f = message.getBranchCoverage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.resultstoresearch.v1.BranchCoverage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.resultstoresearch.v1.FileCoverage.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.resultstoresearch.v1.FileCoverage} returns this
 */
proto.resultstoresearch.v1.FileCoverage.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LineCoverage line_coverage = 2;
 * @return {?proto.resultstoresearch.v1.LineCoverage}
 */
proto.resultstoresearch.v1.FileCoverage.prototype.getLineCoverage = function() {
  return /** @type{?proto.resultstoresearch.v1.LineCoverage} */ (
    jspb.Message.getWrapperField(this, proto.resultstoresearch.v1.LineCoverage, 2));
};


/**
 * @param {?proto.resultstoresearch.v1.LineCoverage|undefined} value
 * @return {!proto.resultstoresearch.v1.FileCoverage} returns this
*/
proto.resultstoresearch.v1.FileCoverage.prototype.setLineCoverage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.resultstoresearch.v1.FileCoverage} returns this
 */
proto.resultstoresearch.v1.FileCoverage.prototype.clearLineCoverage = function() {
  return this.setLineCoverage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.resultstoresearch.v1.FileCoverage.prototype.hasLineCoverage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BranchCoverage branch_coverage = 3;
 * @return {?proto.resultstoresearch.v1.BranchCoverage}
 */
proto.resultstoresearch.v1.FileCoverage.prototype.getBranchCoverage = function() {
  return /** @type{?proto.resultstoresearch.v1.BranchCoverage} */ (
    jspb.Message.getWrapperField(this, proto.resultstoresearch.v1.BranchCoverage, 3));
};


/**
 * @param {?proto.resultstoresearch.v1.BranchCoverage|undefined} value
 * @return {!proto.resultstoresearch.v1.FileCoverage} returns this
*/
proto.resultstoresearch.v1.FileCoverage.prototype.setBranchCoverage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.resultstoresearch.v1.FileCoverage} returns this
 */
proto.resultstoresearch.v1.FileCoverage.prototype.clearBranchCoverage = function() {
  return this.setBranchCoverage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.resultstoresearch.v1.FileCoverage.prototype.hasBranchCoverage = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.resultstoresearch.v1.ActionCoverage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.resultstoresearch.v1.ActionCoverage.prototype.toObject = function(opt_includeInstance) {
  return proto.resultstoresearch.v1.ActionCoverage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.resultstoresearch.v1.ActionCoverage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.ActionCoverage.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileCoveragesList: jspb.Message.toObjectList(msg.getFileCoveragesList(),
    proto.resultstoresearch.v1.FileCoverage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.resultstoresearch.v1.ActionCoverage}
 */
proto.resultstoresearch.v1.ActionCoverage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.resultstoresearch.v1.ActionCoverage;
  return proto.resultstoresearch.v1.ActionCoverage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.resultstoresearch.v1.ActionCoverage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.resultstoresearch.v1.ActionCoverage}
 */
proto.resultstoresearch.v1.ActionCoverage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.resultstoresearch.v1.FileCoverage;
      reader.readMessage(value,proto.resultstoresearch.v1.FileCoverage.deserializeBinaryFromReader);
      msg.addFileCoverages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.resultstoresearch.v1.ActionCoverage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.resultstoresearch.v1.ActionCoverage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.resultstoresearch.v1.ActionCoverage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.ActionCoverage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileCoveragesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.resultstoresearch.v1.FileCoverage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FileCoverage file_coverages = 2;
 * @return {!Array<!proto.resultstoresearch.v1.FileCoverage>}
 */
proto.resultstoresearch.v1.ActionCoverage.prototype.getFileCoveragesList = function() {
  return /** @type{!Array<!proto.resultstoresearch.v1.FileCoverage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.resultstoresearch.v1.FileCoverage, 2));
};


/**
 * @param {!Array<!proto.resultstoresearch.v1.FileCoverage>} value
 * @return {!proto.resultstoresearch.v1.ActionCoverage} returns this
*/
proto.resultstoresearch.v1.ActionCoverage.prototype.setFileCoveragesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.resultstoresearch.v1.FileCoverage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.resultstoresearch.v1.FileCoverage}
 */
proto.resultstoresearch.v1.ActionCoverage.prototype.addFileCoverages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.resultstoresearch.v1.FileCoverage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.resultstoresearch.v1.ActionCoverage} returns this
 */
proto.resultstoresearch.v1.ActionCoverage.prototype.clearFileCoveragesList = function() {
  return this.setFileCoveragesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.resultstoresearch.v1.AggregateCoverage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.resultstoresearch.v1.AggregateCoverage.prototype.toObject = function(opt_includeInstance) {
  return proto.resultstoresearch.v1.AggregateCoverage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.resultstoresearch.v1.AggregateCoverage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.AggregateCoverage.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileCoveragesList: jspb.Message.toObjectList(msg.getFileCoveragesList(),
    proto.resultstoresearch.v1.FileCoverage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.resultstoresearch.v1.AggregateCoverage}
 */
proto.resultstoresearch.v1.AggregateCoverage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.resultstoresearch.v1.AggregateCoverage;
  return proto.resultstoresearch.v1.AggregateCoverage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.resultstoresearch.v1.AggregateCoverage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.resultstoresearch.v1.AggregateCoverage}
 */
proto.resultstoresearch.v1.AggregateCoverage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.resultstoresearch.v1.FileCoverage;
      reader.readMessage(value,proto.resultstoresearch.v1.FileCoverage.deserializeBinaryFromReader);
      msg.addFileCoverages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.resultstoresearch.v1.AggregateCoverage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.resultstoresearch.v1.AggregateCoverage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.resultstoresearch.v1.AggregateCoverage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.resultstoresearch.v1.AggregateCoverage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileCoveragesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.resultstoresearch.v1.FileCoverage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FileCoverage file_coverages = 1;
 * @return {!Array<!proto.resultstoresearch.v1.FileCoverage>}
 */
proto.resultstoresearch.v1.AggregateCoverage.prototype.getFileCoveragesList = function() {
  return /** @type{!Array<!proto.resultstoresearch.v1.FileCoverage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.resultstoresearch.v1.FileCoverage, 1));
};


/**
 * @param {!Array<!proto.resultstoresearch.v1.FileCoverage>} value
 * @return {!proto.resultstoresearch.v1.AggregateCoverage} returns this
*/
proto.resultstoresearch.v1.AggregateCoverage.prototype.setFileCoveragesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.resultstoresearch.v1.FileCoverage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.resultstoresearch.v1.FileCoverage}
 */
proto.resultstoresearch.v1.AggregateCoverage.prototype.addFileCoverages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.resultstoresearch.v1.FileCoverage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.resultstoresearch.v1.AggregateCoverage} returns this
 */
proto.resultstoresearch.v1.AggregateCoverage.prototype.clearFileCoveragesList = function() {
  return this.setFileCoveragesList([]);
};


goog.object.extend(exports, proto.resultstoresearch.v1);