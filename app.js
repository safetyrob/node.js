const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },

    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list Command
yargs.command({
  command: "list",
  describe: "Create a List",
  handler() {
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a List",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// add, remove, read, list

// console.log(yargs.argv);

yargs.parse();
