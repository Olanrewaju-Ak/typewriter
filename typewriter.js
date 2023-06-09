const typewriter = function (string) {
  for (let c = 0; c < string.length; c++) {
    setTimeout(() => {
      process.stdout.write(`${string[c]}`);
    }, 0 + c * 100);
  }
  setTimeout(() => {
    process.stdout.write(`\n`);
  }, string.length * 100);
};

// typewriter("lanre");
typewriter("Hello , I am olanrewaju Akinola. I love Jesus");
