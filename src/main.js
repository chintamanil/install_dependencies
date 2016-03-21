(function  () {
	var express = require("express");
	var Module = require("./module/module.js").Module;
	var BaseModule = require("./module/module.js").BaseModule;
	var Commands = require("./commands/commands.js");

	var command = new Commands();
	command.execute("DEPEND A B C D E");
	command.execute("DEPEND X C BB CC");
	var out = '';
	out += command.execute("INSTALL B") ;
	out += command.execute("INSTALL BB") ;
	out += command.execute("INSTALL A") ;
	out += command.execute("INSTALL X");
	out += command.execute("LIST") + "\n";
	out += command.execute("REMOVE C");
	console.log(out);



})();
