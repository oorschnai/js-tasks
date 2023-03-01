let n = 37;

label: for (let i = 2; i <= n; i++)
{
    for (let j = 2; j <= i ** 0.5; j++)
    {
        if (i % j === 0) continue label;
    }
    console.log(i)
}
