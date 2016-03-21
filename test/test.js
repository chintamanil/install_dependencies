(function(){
	// process.env.NODE_ENV = 'test';

	var chai = require('chai');
	var expect = chai.expect;

	var express = require("express");
	var Module = require("./../src/module/module.js").Module;
	var BaseModule = require("./../src/module/module.js").BaseModule;
	var Commands = require("./../src/commands/commands.js");


	describe("Install Depend Remove List", function() {
		describe("constructor", function() {
			beforeEach(function() {
				command = new Commands();
			});

			afterEach(function() {
			// nothing
			});
			it("execute  DEPEND command ", function() {
		      	expect(command.execute("DEPEND A B C D E")  ).to.equal("");
		    	});

			it("INSTALL module & its dependencies", function() {
				var expectedResult = "E successfully installed"+ "\n" +
										"D successfully installed"+ "\n" +
										"C successfully installed"+ "\n" +
										"B successfully installed"+ "\n" +
										"A successfully installed"+ "\n" ;
		      	expect( command.execute("INSTALL A")  ).to.equal(expectedResult);
		    	});

			it("execute LIST Command", function() {
				command.execute("DEPEND ZZ AA BB C");
				command.execute("INSTALL A");
				var expectedResult = "A"+ "\n" +
										"B"+ "\n" +
										"C"+ "\n" +
										"D"+ "\n" +
										"E" + "\n" ;
		      	expect( command.execute("LIST")  ).to.equal(expectedResult);
		    	});

			it("execute REMOVE Command", function() {
				var expectedResult = "C is still Needed";
		      	expect( command.execute("REMOVE C")  ).to.equal(expectedResult);
		    	});
		});
	});
})();
