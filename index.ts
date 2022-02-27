for (
  let n = 7,
  output = (i:number, j:number,u:number) =>
  (j + ((j < n )? String.fromCharCode(u) : " ")),

  i = 1;
  i <= n*2 - 1;
  console.log("\n"), i++
)
  for (let j = 1,u = 45, k = 1; j <= n; j++, k++)
      process.stdout.write(
        i < n
          ? j < i
            ? " "
            : output(i, j,u)
          : j < n * 2 - i
            ? " "
            : output(i, j,u)

    );
;
