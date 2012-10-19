Jasmine for testers

Pre-requisites:
To be able to use this project you need git and node.js installed on your computer.
Get them here:
	http://git-scm.com/
	http://nodejs.org/download/

Start the project
Let's try to start up the project. In your terminal, navigate to the project root and type "npm install" to install the project dependencies.

When everything is installed, type "node app.js".
If everything goes well you should see something like this:
	"Express server listening on port 3000"

If you get some kind of error, make sure you've installed node.js correctly and no other webserver is running on the same port.

Now try to type "jasmine-node public/spec/"
If everything goes well you should see:
	Finished in 0 seconds
	0 tests, 0 assertions, 0 failures

For the moment we have nothing else than a page with two buttons. Let's try to create something.
Open up the project in your favourite text editor.


Creating a first test
In your texteditor navigate to public/spec and create a new javascript file.

Lets start writing a testsuite:
	describe(“Convert library”, function() {
		describe(“distance converter”, function() {
			
		});
	});

Thats nice, we're creating a distance converter. Well we'll need some tests inside the “distance converter” suite.
	describe(“distance converter”, function(){
		it(“converts inches to centimeters”, function(){
			expect(Convert(12, “in”).to(“cm”)).toEqual(30.48);	
		});
		it(“converts centimeters to yards”, function(){
			expect(Convert(2000, “cm”).to(“yards”)).toEqual(21.87);
		});
	});

Judging from the tests we've just written we're going to use something like this in code for the actual conversions to take place:
Convert(number, fromUnit).to(toUnit);

Lets add a volume converter as well:
	describe(“volume converter”, function(){
		it(“converts litres to gallons”, function(){
			expect(Convert(3, “litres”).to(“gallons”)).toEqual(0.79);
		});

		it(“converts gallons to cups”, function(){
			expect(Convert(2, “gallons”).to(“cups”)).toEqual(32);		
		});
	});

Okay lets try running the tests to see if they work.
In terminal project root:
	“jasmine-node public/spec/”

	FFFF

	Failures:

	  1) converts inches to centimeters
	   Message:
	     ReferenceError: Convert is not defined
	   Stacktrace:
	     ReferenceError: Convert is not defined
	    at null.<anonymous> (/home/fjodor/Arbete/kkvall-jasmine-node/public/spec/test_spec.js:4:11)
	    at jasmine.Block.execute (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1001:15)
	    at jasmine.Queue.next_ (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1790:31)
	    at jasmine.Queue.start (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1743:8)
	    at jasmine.Spec.execute (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:2070:14)
	    at jasmine.Queue.next_ (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1790:31)
	    at jasmine.Queue.start (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1743:8)
	    at jasmine.Suite.execute (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:2215:14)
	    at jasmine.Queue.next_ (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1790:31)
	    at jasmine.Queue.start (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1743:8)

	  2) converts centimeters to yards
	   Message:
	     ReferenceError: Convert is not defined
	   Stacktrace:
	     ReferenceError: Convert is not defined
	    at null.<anonymous> (/home/fjodor/Arbete/kkvall-jasmine-node/public/spec/test_spec.js:7:11)
	    at jasmine.Block.execute (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1001:15)
	    at jasmine.Queue.next_ (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1790:31)
	    at jasmine.Queue.start (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1743:8)
	    at jasmine.Spec.execute (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:2070:14)
	    at jasmine.Queue.next_ (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1790:31)
	    at onComplete (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1786:18)
	    at jasmine.Spec.finish (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:2044:5)
	    at null.onComplete (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:2071:10)
	    at jasmine.Queue.next_ (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1800:14)

	  3) converts litres to gallons
	   Message:
	     ReferenceError: Convert is not defined
	   Stacktrace:
	     ReferenceError: Convert is not defined
	    at null.<anonymous> (/home/fjodor/Arbete/kkvall-jasmine-node/public/spec/test_spec.js:12:17)
	    at jasmine.Block.execute (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1001:15)
	    at jasmine.Queue.next_ (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1790:31)
	    at jasmine.Queue.start (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1743:8)
	    at jasmine.Spec.execute (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:2070:14)
	    at jasmine.Queue.next_ (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1790:31)
	    at jasmine.Queue.start (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1743:8)
	    at jasmine.Suite.execute (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:2215:14)
	    at jasmine.Queue.next_ (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1790:31)
	    at onComplete (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1786:18)

	  4) converts gallons to cups
	   Message:
	     ReferenceError: Convert is not defined
	   Stacktrace:
	     ReferenceError: Convert is not defined
	    at null.<anonymous> (/home/fjodor/Arbete/kkvall-jasmine-node/public/spec/test_spec.js:15:17)
	    at jasmine.Block.execute (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1001:15)
	    at jasmine.Queue.next_ (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1790:31)
	    at jasmine.Queue.start (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1743:8)
	    at jasmine.Spec.execute (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:2070:14)
	    at jasmine.Queue.next_ (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1790:31)
	    at jasmine.Queue.start (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1743:8)
	    at jasmine.Suite.execute (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:2215:14)
	    at jasmine.Queue.next_ (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1790:31)
	    at onComplete (/usr/local/lib/node_modules/jasmine-node/lib/jasmine-node/jasmine-2.0.0.rc1.js:1786:18)

	Finished in 0.01 seconds
	4 tests, 4 assertions, 4 failures




Oh my, it seems like we need to define the Convert object.
Try to create the Convert object and its methods.
