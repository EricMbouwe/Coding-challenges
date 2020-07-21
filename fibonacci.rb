def fib(n)
  return 0 if n == 0
  return 1 if n < 3

  fib(n - 2) + fib(n - 1)
end

# puts fib(0)

t = 2
count = 0
for a0 in (0..t - 1)
  n = 100
  for i in (0...n)
    if fib(i).even?
      count = count + fib(i)
    end
  end
  puts count
end
