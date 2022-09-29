

for (let i = 0; i <= 100; i++) {
    
    const num = (i % 2 === 0)
                    ? i + ' buzz'
                    : (i % 5 === 0) 
                        ? i + ' bazz'
                        : i

    console.log(num)
    
}
